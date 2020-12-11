import React from 'react';

import './index.css';

export default function ErrorIndicator() {
  return (
    <div className="error-indicator">
      <img className="error-indicator__img" src="/images/error.png" alt="error message" />
    </div>
  );
}
