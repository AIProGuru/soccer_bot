const mongoose = require('mongoose');

const AssistantSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    assistantId: { type: String, required: true }, // OpenAI Assistant ID
    threadId: { type: String, required: true }, // OpenAI Thread ID for conversation history
    createdAt: { type: Date, default: Date.now }
});

module.exports = AssistantSchema;
