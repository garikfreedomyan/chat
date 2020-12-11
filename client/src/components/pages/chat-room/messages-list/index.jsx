import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import './index.css';
import { saveMessages } from '../../../../actions';
import { getMessages } from '../../../../utils/client-server';

function MessagesList({ className, messages, saveMessages }) {
  const { id } = useParams();

  useEffect(() => {
    getMessages(id, saveMessages);

    window.socket.on('someone sent message', () => {
      getMessages(id, saveMessages);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function convertDate(date) {
    return new Intl.DateTimeFormat('ru-RU', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(date));
  }

  return (
    <ul className={`messages-list ${className}`}>
      {messages.map((el) => {
        return (
          <li className="messages-list__message" key={el._id}>
            <img src={`/images/avatars/${el.sender.avatar}.jpg`} alt="avatar" />
            <div>
              <span className="pink-text">{el.sender.name}</span>
              <p>{el.message}</p>
              <span className="muted-text">{convertDate(el.date)}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

const mapStateToProps = ({ messages }) => ({
  messages,
});

const mapDispatchToProps = {
  saveMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
