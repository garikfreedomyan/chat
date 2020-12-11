import React from 'react';
import { useHistory } from 'react-router-dom';

import { ChatIcon, VideochatIcon } from '../icons';

import './index.css';

export default function ChatTypes() {
  let history = useHistory();

  const createChatRoom = async (evt) => {
    evt.preventDefault();
    try {
      const response = await fetch('/create/chat-room', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      } else {
        const roomId = data.roomId;
        history.push(`/chat-room/${roomId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="chat-types">
      <a href="/create/chat-room" className="chat-types__element" onClick={createChatRoom}>
        <ChatIcon className="chat-types__icon" />
        <p className="chat-types__text chat-types__text--pink">Create text chat</p>
      </a>
      <a href="/create/video-room" className="chat-types__element">
        <VideochatIcon className="chat-types__icon" />
        <p className="chat-types__text chat-types__text--blue">Create video chat</p>
      </a>
    </div>
  );
}
