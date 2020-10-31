import React from "react";
export default function TodoList(props) {
  return (
    <>
      <li className="list">{props.text}</li>
      <button className="delete" onClick={() => props.onDelete(props.id)}>
        Delete
      </button>
      <button className="edit" onClick={() => props.onEdit(props.id)}>
        Edit
      </button>
    </>
  );
}
