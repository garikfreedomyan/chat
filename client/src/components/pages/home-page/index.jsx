import React from 'react';

import './index.css';
import ChatTypes from '../../chat-types';

export default function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-page__title">CHAT</h1>
      <ChatTypes />
    </div>
  );
}
