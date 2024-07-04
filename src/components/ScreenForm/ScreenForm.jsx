// ScreenForm.js
import React, { useState, useEffect  } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./ScreenForm.scss";

function ScreenForm() {
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const formChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const isValid = Object.values(formData).every((value) => value.trim() !== '');
    setDisabled(!isValid);
  }, [formData]);

  const formSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    console.log("Form data:", formData);
    setLoading(false);
  };

  return (
    <div className="screen-container">
      <form onSubmit={formSubmit}>
        <Input
          label="Nome Completo"
          name="name"
          value={formData.name}
          onChange={formChange}
        />
        <Input
          label="CPF"
          name="cpf"
          value={formData.cpf}
          onChange={formChange}
        />
        <Input
          label="Telefone"
          name="phone"
          value={formData.phone}
          onChange={formChange}
        />
        <Input
          label="Email"
          name="email"
          value={formData.email}
          onChange={formChange}
        />
        <Button
          label="Cadastrar"
          loading={loading}
          disabled={disabled}
          onClick={formSubmit}
        />
      </form>
    </div>
  );
}

export default ScreenForm;
