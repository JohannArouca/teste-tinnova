import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./ScreenForm.scss";

function ScreenForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const navigateToData = () => {
    navigate("/");
  };

  const formChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setDisabled(!isValid);
  }, [formData]);

  const addUser = (e) => {
    e.preventDefault();

    setLoading(true);

    const newUser = {
      name: formData.name,
      cpf: formData.cpf,
      phone: formData.phone,
      email: formData.email,
    };
    const storedData = JSON.parse(localStorage.getItem("users")) || [];
    const updatedData = [...storedData, newUser];
    localStorage.setItem("users", JSON.stringify(updatedData));

    setLoading(false);

    navigateToData();
  };

  return (
    <div className="screen-container">
      <form onSubmit={addUser}>
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
          onClick={addUser}
        />
      </form>
    </div>
  );
}

export default ScreenForm;
