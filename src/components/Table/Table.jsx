import React from "react";
import { maskCPF, maskPhone } from "../../utils/masks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Table.scss";

function Table({ data, onDelete, onEdit }) {
  const editItem = (index) => {
    onEdit(index);
  };
  
  const deleteItem = (index) => {
    onDelete(index);
  };

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Telefone</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{maskCPF(row.cpf)}</td>
            <td>{maskPhone(row.phone)}</td>
            <td>{row.email}</td>
            <td  className="actions">
            <button className="action-button" onClick={() => editItem(index)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className="action-button" onClick={() => deleteItem(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
