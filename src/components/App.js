import React from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [save, setSave] = React.useState("");

  const handleChange = ({ target }) => {
    setInput(target.value);
    console.log(input);
  };
  const addTodo = (event) => {
    setTodos([...todos, input]);
    console.log(todos);
    setInput("");
  };

  const handleEdit = (id, item) => {
    setInput(item);
    setSave(id);
  };
  const handleSave = () => {
    if (input === "") return;
    todos[save] = input;
    setInput("");
    setSave("");
  };

  const handleDelete = (id) => {
    const filterTodos = todos.filter((todo, index) => index !== id);
    setTodos(filterTodos);
  };
  return (
    <div id="main">
      <textarea id="task" value={input} onChange={handleChange} />
      <button id="btn" disabled={!input} onClick={addTodo}>
        Add Todo
      </button>
      <button id="btn" disabled={!input} onClick={handleSave}>
        Save
      </button>
      {todos.map((todo, index) => (
        <TodoList
          key={index}
          onDelete={handleDelete}
          id={index}
          text={todo}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default App;
