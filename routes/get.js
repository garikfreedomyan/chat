const { Router } = require('express');
const ChatRoom = require('../models/chat-room');
const router = Router();

router.post('/chat-room/:id/users', async (req, res) => {
  try {
    const chatRoom = await ChatRoom.findById(req.params.id);
    res.json(chatRoom.members);
  } catch (error) {
    res.status(500).send('Server error');
    console.error(error);
  }
});

router.post('/chat-room/:id/messages', async (req, res) => {
  try {
    const chatRoom = await ChatRoom.findById(req.params.id);
    res.json(chatRoom.messages);
  } catch (error) {
    res.status(500).send('Server error');
    console.error(error);
  }
});

module.exports = router;
