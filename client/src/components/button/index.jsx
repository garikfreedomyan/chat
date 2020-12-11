import React from 'react';

import './index.css';

export default function Button({
  className = 'button',
  id = null,
  type = 'button',
  value = null,
  onClick = null,
  children = 'Send',
  disabled = false,
}) {
  return (
    <button type={type} className={`button ${className}`} id={id} value={value} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
