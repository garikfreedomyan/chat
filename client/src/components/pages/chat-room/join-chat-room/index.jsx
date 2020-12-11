import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.css';
import Avatars from '../../../avatars';
import Button from '../../../button';
import Input from '../../../input';
import { saveName, saveAvatar } from '../../../../actions';

function JoinChatRoom({ joinHandler, name, saveName, saveAvatar }) {
  const inputChangehandler = ({ target }) => {
    if (target.name === 'name') {
      saveName(target.value);
    } else if (target.name === 'avatar') {
      saveAvatar(target.value);
    }
  };

  const sendForm = async (evt) => {
    evt.preventDefault();

    joinHandler && joinHandler();
  };

  return (
    <div className="join-chat-room">
      <h1 className="join-chat-room__title">
        <span className="blue-text">Join</span>
        <span className="pink-text"> chat</span>
        <span className="blue-text"> room</span>
      </h1>
      <form method="POST" onSubmit={sendForm}>
        <Avatars className="join-chat-room__avatars" onChange={inputChangehandler} />
        <Input
          name="name"
          className="join-chat-room__input"
          label="Name"
          placeholder="Enter your name"
          errorMessage="Incorrect name"
          required={true}
          minLength="2"
          value={name}
          onChange={inputChangehandler}
        />
        <Button type="submit" className="join-chat-room__button">
          Join room
        </Button>
      </form>
      <Link to="/" className="button join-chat-room__button">
        Back to home page
      </Link>
    </div>
  );
}

const mapStateToProps = ({ name }) => ({
  name,
});

const mapDispatchToProps = {
  saveName,
  saveAvatar,
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinChatRoom);
