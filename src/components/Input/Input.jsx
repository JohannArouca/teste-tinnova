import React, { useState } from 'react';
import './Input.scss';

function Input({ label }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`input-container ${focused || value ? 'focus' : ''}`}>
      <input
        type="text"
        className="input-field"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label className="input-label">{label}</label>
    </div>
  );
}

export default Input;
