import React from 'react';

import './index.css';

export default function CopyButton({ className }) {
  const copyLink = () => {
    let copytext = document.createElement('input');
    copytext.value = window.location.href;
    document.body.appendChild(copytext);
    copytext.select();
    document.execCommand('copy');
    document.body.removeChild(copytext);
  };

  return (
    <button type="button" className={`copy-button ${className}`} onClick={copyLink}>
      Copy room link
    </button>
  );
}
