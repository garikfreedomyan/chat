import React, { useRef } from 'react';

import './index.css';

export default function Input({
  className = '',
  type = 'text',
  inputMode = 'text',
  name = null,
  label = '',
  placeholder = '',
  errorMessage = '',
  pattern = null,
  uppercase = false,
  required = false,
  disabled = false,
  refLink = null,
  minLength = null,
  maxLength = null,
  onClick = null,
  onChange = null,
  onFocus = null,
  onBlur = null,
  replacer = null,
}) {
  const placeholderRef = useRef();

  const inputChangeHandler = (evt) => {
    if (uppercase) {
      evt.target.value = evt.target.value.toUpperCase();
    }

    replacer && replacer(evt);
    onChange && onChange(evt);
  };

  const inputFocusHandler = ({ target }) => {
    onFocus && onFocus();
    const placeholder = target.parentElement.querySelector('.input__placeholder');

    placeholder.classList.add('input__placeholder--under-field');
  };

  const inputBlurHandler = (evt) => {
    if (evt.target.checkValidity()) {
      evt.target.classList.remove('input__field--error');
      evt.target.classList.add('input__field--success');
      onBlur && onBlur(evt);
    } else {
      evt.target.classList.remove('input__field--success');
      evt.target.classList.add('input__field--error');
    }

    if (evt.target.value.length === 0) {
      placeholderRef.current.classList.remove('input__placeholder--under-field');
    }
  };

  return (
    <label className={`input ${className}`}>
      <span className="input__label">{label}</span>
      <input
        className="input__field"
        type={type}
        inputMode={inputMode}
        name={name}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        disabled={disabled}
        ref={refLink}
        onClick={onClick}
        onChange={inputChangeHandler}
        onFocus={inputFocusHandler}
        onBlur={inputBlurHandler}
      />
      <span className="input__error-message">{errorMessage}</span>
      <span className="input__placeholder" ref={placeholderRef}>
        {placeholder}
      </span>
    </label>
  );
}
