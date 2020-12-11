const { Schema, model } = require('mongoose');

const chatRoomSchema = new Schema({
  members: [
    {
      name: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        required: true,
      },
      socketId: {
        type: String,
        required: true,
      },
    },
  ],
  messages: [
    {
      message: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      sender: {
        name: {
          type: String,
          required: true,
        },
        avatar: {
          type: String,
          required: true,
        },
      },
    },
  ],
});

chatRoomSchema.methods.addMember = async function (user) {
  let members = [...this.members];
  members.push(user);
  this.members = [...members];
  return await this.save();
};

chatRoomSchema.methods.removeMember = async function (socketId) {
  let members = [...this.members];
  const idx = members.findIndex((el) => el.socketId === socketId);
  if (idx >= 0) {
    members.splice(idx, 1);
    this.members = [...members];
    return await this.save();
  }
};

chatRoomSchema.methods.addMessage = async function (params) {
  const { message, name, avatar } = params;
  let messages = [...this.messages];
  messages.push({
    message,
    sender: {
      name,
      avatar,
    },
  });
  this.messages = [...messages];
  return await this.save();
};

module.exports = model('ChatRoom', chatRoomSchema);
