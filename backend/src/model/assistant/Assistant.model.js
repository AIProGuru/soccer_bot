const mongoose = require('mongoose');
const OpenAI = require('openai');
const AssistantSchema = require('./Assistant.schema');

const Assistant = mongoose.model('Assistant', AssistantSchema);
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Create a new OpenAI Assistant for a user
 */
async function createAssistantForUser(userId) {
    try {
        // Step 1: Create Assistant in OpenAI
        const assistant = await openai.beta.assistants.create({
            name: `Soccer Bot - User ${userId}`,
            instructions: "You are a soccer analytics bot. Answer user questions based on uploaded soccer data.",
            model: "gpt-4-turbo"
        });

        // Step 2: Create a Thread for the Assistant
        const thread = await openai.beta.threads.create();

        // Step 3: Save to MongoDB
        const newAssistant = new Assistant({
            userId,
            assistantId: assistant.id,
            threadId: thread.id
        });

        await newAssistant.save();
        return newAssistant;
    } catch (error) {
        console.error("Error creating assistant:", error);
        throw new Error("Assistant creation failed");
    }
}

/**
 * Get Assistant by user ID
 */
async function getAssistantByUser(userId) {
    return Assistant.findOne({ userId });
}

module.exports = { Assistant, createAssistantForUser, getAssistantByUser };
