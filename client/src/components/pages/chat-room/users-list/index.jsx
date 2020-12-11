import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import './index.css';
import CopyButton from '../../../copy-button';
import { saveUsers } from '../../../../actions';
import { getUsers } from '../../../../utils/client-server';

function UsersList({ className = '', users, saveUsers }) {
  const { id } = useParams();
  // const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(id, saveUsers);

    window.socket.on('someone joined', () => {
      getUsers(id, saveUsers);
    });

    window.socket.on('someone left', () => {
      getUsers(id, saveUsers);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`users-list ${className}`}>
      <h3 className="users-list__title">Users</h3>
      <ul className="users-list__list">
        {users.map((el) => {
          return (
            <li className="users-list__user" key={el._id}>
              <img src={`/images/avatars/${el.avatar}.jpg`} alt="avatar" />
              <span>
                {el.name}
                <span className="pink-text">&ensp;(online)</span>
              </span>
            </li>
          );
        })}
      </ul>
      <CopyButton />
    </div>
  );
}

const mapStateToProps = ({ users }) => ({
  users,
});

const mapDispatchToProps = {
  saveUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
