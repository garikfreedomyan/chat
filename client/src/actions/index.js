export const saveName = (name) => {
  return {
    type: 'SAVE_NAME',
    payload: name,
  };
};

export const saveAvatar = (avatar) => {
  return {
    type: 'SAVE_AVATAR',
    payload: avatar,
  };
};

export const saveMessage = (message) => {
  return {
    type: 'SAVE_MESSAGE',
    payload: message,
  };
};

export const saveSocketId = (socketId) => {
  return {
    type: 'SAVE_SOCKET_ID',
    payload: socketId,
  };
};

export const saveRoomId = (roomId) => {
  return {
    type: 'SAVE_ROOM_ID',
    payload: roomId,
  };
};

export const saveUsers = (users) => {
  return {
    type: 'SAVE_USERS',
    payload: users,
  };
};

export const saveMessages = (messages) => {
  return {
    type: 'SAVE_MESSAGES',
    payload: messages,
  };
};
