const ChatRoom = require('../models/chat-room');

async function eventsHandler(socket) {
  let roomId = socket.handshake.query.roomId;
  socket.join(roomId);

  socket.on('join room', () => {
    socket.to(roomId).emit('someone joined');
  });

  socket.on('send message', () => {
    socket.to(roomId).emit('someone sent message');
  });

  socket.on('disconnect', async () => {
    try {
      const chatRoom = await ChatRoom.findById(roomId);
      await chatRoom.removeMember(socket.id);
      await socket.to(roomId).emit('someone left');
    } catch (error) {
      console.error(error);
    }
  });
}

module.exports = eventsHandler;
