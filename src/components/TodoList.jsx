import React from "react";
export default function TodoList(props) {
  return (
    <>
      <li className="list">{props.text}</li>
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </>
  );
}
