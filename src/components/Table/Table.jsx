import React from "react";
import { maskCPF, maskPhone } from "../../utils/masks";
import "./Table.scss";

function Table({ data, onDelete }) {
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
            <td>
              <button onClick={() => deleteItem(index)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
