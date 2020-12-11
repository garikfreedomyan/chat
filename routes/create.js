const { Router } = require('express');
const ChatRoom = require('../models/chat-room');
const router = Router();

router.post('/chat-room', async (req, res) => {
  try {
    const chatRoom = new ChatRoom({
      members: [],
      messages: [],
    });
    await chatRoom.save();
    const roomId = chatRoom._id.toString();
    res.json({
      roomId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

router.post('/message/chat-room/:id', async (req, res) => {
  try {
    const chatRoom = await ChatRoom.findById(req.params.id);
    await chatRoom.addMessage(req.body);
    await chatRoom.save();
    res.send('Success');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
