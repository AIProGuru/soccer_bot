const express = require("express");
const {
  userAuthorization,
} = require("../middlewares/authorization.middleware");
const {
  saveMessage,
  getMessagesByUser,
  getMessagesByChatId,
} = require("../model/chat/Chat.model");
const router = express.Router();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.all("/", (req, res, next) => {
  next();
});

// Save user message and get bot response
// router.post('/message', userAuthorization, async (req, res) => {
//     const { chatId, userId, message } = req.body;
//     if (!userId || !message) {
//         return res.status(400).json({ status: "error", message: "Invalid request. User ID and message are required." });
//     }
//     try {
//         const userMessage = await saveMessage({ chatId, userId, message, sender: 'user' });
//         const botResponse = await processBotResponse(message);
//         await saveMessage({ chatId, userId, message: botResponse, sender: 'bot' });
//         res.json({ status: "success", userMessage, botResponse });
//     } catch (error) {
//         res.status(500).json({ status: "error", message: error.message });
//     }
// });

async function requestOpenAi(messages) {
    console.log(messages)
    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "system", content: "You are a helpful soccer assistant." }, {role: "user", content: messages}],
    });
    console.log('OpenAI Chat response:', response);
    return response.choices[0].message.content;
}


router.post("/message", async (req, res) => {
  const { message } = req.body;
  console.log(message)
  if (!message) {
    return res
      .status(400)
      .json({
        status: "error",
        message: "Invalid request. Message is required.",
      });
  }
  try {
    
    // const userMessage = await saveMessage({ chatId, userId, message, sender: 'user' });
    const botResponse = await requestOpenAi(message);
    console.log("herehere", botResponse)
    // await saveMessage({ chatId, userId, message: botResponse, sender: 'bot' });
    res.json({ status: "success", message:botResponse });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ status: "error", message: error.message });
  }
});

// Retrieve chat history by user ID
router.get("/history/:userId", userAuthorization, async (req, res) => {
  const { userId } = req.params;
  try {
    const messages = await getMessagesByUser(userId);
    res.json({ status: "success", messages });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

// Retrieve chat history by chat ID
router.get("/history/chat/:chatId", userAuthorization, async (req, res) => {
  const { chatId } = req.params;
  try {
    const messages = await getMessagesByChatId(chatId);
    res.json({ status: "success", messages });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

module.exports = router;
