const { Router } = require('express');
const ChatRoom = require('../models/chat-room');
const router = Router();

router.post('/chat-room/:id', async (req, res) => {
  try {
    const chatRoom = await ChatRoom.findById(req.params.id);
    await chatRoom.addMember({ ...req.body });
    res.send('Success');
  } catch (error) {
    res.status(500).send('Server error');
    console.error(error);
  }
});

module.exports = router;
