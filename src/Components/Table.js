import React from "react";
import style from "./table.module.css";
import { FaTrashAlt } from "react-icons/fa";

const Table = (props) => {
  const handleOnclick = (event) => {
    const targetValue = Number(event.target.parentElement.parentElement.id);
    props.id(targetValue);
  };

  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Sl No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {props.users.map((user) => (
          <tr key={user.id} id={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>
              <button type="button" onClick={handleOnclick}>
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
