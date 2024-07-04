import React, { useState } from 'react';
import './Input.scss';

function Input({ label, name, value, onChange }) {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  return (
    <div className={`input-container ${focused || value ? 'focus' : ''}`}>
      <input
        type="text"
        className="input-field"
        value={value}
        name={name}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label className="input-label">{label}</label>
    </div>
  );
}

export default Input;
