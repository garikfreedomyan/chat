export async function joinRoom(roomId, name, avatar, socketId, stateUpdater, history) {
  try {
    const response = await fetch(`/join/chat-room/${roomId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name,
        avatar,
        roomId,
        socketId,
      }),
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || 'Something went wrong');
    } else {
      await window.socket.emit('join room');
      await stateUpdater(true);
    }
  } catch (error) {
    console.error(error);
    history.push('/404');
    // throw error;
  }
}

export async function getUsers(roomId, stateUpdater) {
  try {
    const response = await fetch(`/get/chat-room/${roomId}/users`, {
      method: 'GET',
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || 'Something went wrong');
    } else {
      const users = await response.json();
      stateUpdater(users);
    }
  } catch (error) {
    console.error(error);
    // throw error;
  }
}

export async function getMessages(roomId, stateUpdater) {
  try {
    const response = await fetch(`/get/chat-room/${roomId}/messages`, {
      method: 'GET',
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || 'Something went wrong');
    } else {
      const messages = await response.json();
      stateUpdater(messages);
    }
  } catch (error) {
    console.error(error);
    // throw error;
  }
}

export async function sendMessage(roomId, message, name, avatar, saveMessage, saveMessages) {
  try {
    const response = await fetch(`/create/message/chat-room/${roomId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        message,
        name,
        avatar,
      }),
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || 'Something went wrong');
    } else {
      await window.socket.emit('send message');
      await getMessages(roomId, saveMessages);
      saveMessage('');
    }
  } catch (error) {
    console.error(error);
    // throw error;
  }
}
