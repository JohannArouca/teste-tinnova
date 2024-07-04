import React, { useState } from "react";
import "./Input.scss";
import {
  validateName,
  validateEmail,
  validateCPF,
  validatePhone,
} from "../../utils/validators";
import { maskCPF, maskPhone } from "../../utils/masks";

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

  const handleValidation = () => {
    switch (name) {
      case "name":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "cpf":
        return validateCPF(value);
      case "phone":
        return validatePhone(value);
      default:
        return true;
    }
  };

  const applyMask = () => {
    switch (name) {
      case "cpf":
        return maskCPF(value);
      case "phone":
        return maskPhone(value);
      default:
        return value;
    }
  };

  return (
    <div
      className={`input-container ${focused || value ? "focus" : ""} ${
        !handleValidation() ? "invalid" : ""
      }`}
    >
      <input
        type="text"
        className={`input-field ${!handleValidation() ? "invalid" : ""}`}
        value={applyMask()}
        name={name}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label className="input-label">{label}</label>
      {!handleValidation() && (
        <span className="invalid-message">Valor inválido</span>
      )}
    </div>
  );
}

export default Input;
