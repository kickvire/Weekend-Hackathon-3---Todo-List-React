import React from "react";
export default function TodoList(props) {
  const [id, onDelete, text, onEdit] = { props };
  return (
    <>
      <li className="list">{text}</li>
      <button className="delete" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button className="edit" onClick={() => onEdit(id, text)}>
        Edit
      </button>
    </>
  );
}
