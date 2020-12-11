import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import './index.css';
import { saveMessage, saveMessages } from '../../../../actions';
import { sendMessage } from '../../../../utils/client-server';

function MessageForm({ className = '', name, avatar, message, saveMessage, saveMessages }) {
  const { id } = useParams();

  const inputChangeHandler = (evt) => {
    saveMessage(evt.target.value);
  };

  const sendButtonHandler = async (evt) => {
    evt.preventDefault();
    await sendMessage(id, message, name, avatar, saveMessage, saveMessages);
    document
      .querySelector('.chat-room__messages-list')
      .scrollTo(0, document.querySelector('.chat-room__messages-list').scrollHeight);
  };

  return (
    <form className={`message-form ${className}`} onSubmit={sendButtonHandler}>
      <input type="text" placeholder="Write a message" value={message} onChange={inputChangeHandler} required />
      <button type="submit">Send</button>
    </form>
  );
}

const mapStateToProps = ({ name, avatar, message }) => ({
  name,
  avatar,
  message,
});

const mapDispatchToProps = {
  saveMessage,
  saveMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
