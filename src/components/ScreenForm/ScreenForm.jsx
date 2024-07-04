import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./ScreenForm.scss";

function ScreenForm() {
  const navigate = useNavigate();
  const { index } = useParams();
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

  useEffect(() => {
    if (index !== undefined) {
      const storedData = JSON.parse(localStorage.getItem("users")) || [];
      const userToEdit = storedData[index];
      setFormData(userToEdit);
    }
  }, [index]);

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setDisabled(!isValid);
  }, [formData]);

  const formChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const addUser = (e) => {
    e.preventDefault();

    setLoading(true);

    const storedData = JSON.parse(localStorage.getItem("users")) || [];
    let updatedData = [];

    if (index !== undefined) {
      storedData[index] = formData;
      updatedData = storedData;
    } else {
      updatedData = [...storedData, formData];
    }

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
          label={index !== undefined ? "Atualizar" : "Cadastrar"}
          loading={loading}
          disabled={disabled}
          onClick={addUser}
        />
      </form>
    </div>
  );
}

export default ScreenForm;
