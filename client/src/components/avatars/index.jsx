import React from 'react';

import './index.css';

export default function Avatars({ className = '', onChange = null }) {
  const inputChangeHandler = (evt) => {
    onChange && onChange(evt);
  };

  return (
    <div className={`avatars ${className}`}>
      <p className="avatars__label">Choose avatar</p>
      <ul className="avatars__list">
        <li className="avatars__list-item">
          <label>
            <input type="radio" name="avatar" value="avatar-1" onChange={inputChangeHandler} defaultChecked required />
            <img src="/images/avatars/avatar-1.jpg" alt="avatar" />
          </label>
        </li>
        {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => {
          return (
            <li className="avatars__list-item" key={el}>
              <label>
                <input type="radio" name="avatar" value={`avatar-${el}`} onChange={inputChangeHandler} required />
                <img src={`/images/avatars/avatar-${el}.jpg`} alt="avatar" />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
