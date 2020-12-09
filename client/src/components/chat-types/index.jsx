import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function ChatTypes() {
  return (
    <div className="chat-types">
      <div className="chat-types__element">
        <Link to="/create/chat-room">Create text chat</Link>
      </div>
      <div className="chat-types__element">
        <Link to="/create/video-room">Create video chat</Link>
      </div>
    </div>
  );
}
