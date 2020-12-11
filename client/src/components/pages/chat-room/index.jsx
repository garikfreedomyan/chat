import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import io from 'socket.io-client';

import './index.css';
import UsersList from './users-list';
import MessageForm from './message-form';
import MessagesList from './messages-list';
import JoinChatRoom from './join-chat-room';
import { saveRoomId, saveSocketId } from '../../../actions';
import { joinRoom } from '../../../utils/client-server';

function ChatRoom({ name, avatar, roomId, socketId, saveRoomId, saveSocketId }) {
  const { id } = useParams();
  let history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    window.socket = io('', {
      query: {
        roomId: id,
      },
    });

    window.socket.on('connect', function () {
      saveSocketId(window.socket.id);
    });

    window.socket.on('someone join room', function (id) {
      console.log(id);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    saveRoomId(id);
  }, [id, saveRoomId]);

  const joinHandler = async () => {
    await joinRoom(roomId, name, avatar, socketId, setLoggedIn, history);
  };

  if (loggedIn) {
    return (
      <div className="chat-room">
        <UsersList className="chat-room__users-list" />
        <div className="chat-room__chat">
          <MessagesList className="chat-room__messages-list" />
          <MessageForm className="chat-room__message-form" />
        </div>
      </div>
    );
  } else {
    return <JoinChatRoom joinHandler={joinHandler} />;
  }
}

const mapStateToProps = ({ name, avatar, roomId, socketId }) => ({
  name,
  avatar,
  roomId,
  socketId,
});

const mapDispatchToProps = {
  saveRoomId,
  saveSocketId,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
