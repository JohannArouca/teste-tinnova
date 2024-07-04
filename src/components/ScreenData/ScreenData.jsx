import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../Button/Button";
import Table from "../Table/Table";
import "./ScreenData.scss";

function ScreenData() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("users");

        if (!storedData) {
          const response = await axios.get(
            "https://private-9d65b3-tinnova.apiary-mock.com/users"
          );

          localStorage.setItem("users", JSON.stringify(response.data));
          setUsers(response.data);
        } else {
          setUsers(JSON.parse(storedData));
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const deleteUser = (index) => {
    const updatedData = [...users];
    updatedData.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(updatedData));
    setUsers(updatedData);
  };

  const navigateToForm = () => {
    navigate("/form");
  };

  return (
    <div className="screen-container">
      <div className="card">
        <Button
          className="register-button"
          label="Cadastrar"
          onClick={navigateToForm}
        />
        <Table data={users} onDelete={deleteUser} />
      </div>
    </div>
  );
}

export default ScreenData;
