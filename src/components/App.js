import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [listOfitems, setlistOfitems] = useState([]);
  const [save, setsaveButton] = useState("");

  const handleChange = (event) => {
    let newInput = event.target.value;
    setInputText(newInput);
  };
  const handleAdd = () => {
    if (inputText === "") return;
    setlistOfitems((previtems) => [...previtems, inputText]);
    setInputText("");
  };
  const handleDelete = (id) => {
    const restAfterremove = listOfitems.filter((todo, index) => index !== id);
    setlistOfitems(restAfterremove);
  };

  const handleEdit = (id, item) => {
    setInputText(item);
    setsaveButton(id);
  };

  const handleSave = () => {
    if (inputText === "") return;
    listOfitems[save] = inputText;
    setInputText("");
    setsaveButton("");
  };

  return (
    <div id="main">
      <input type="text" onChange={handleChange} value={inputText} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSave}>Save</button>
      <ol>
        {listOfitems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index, item)}>Delete</button>
            <button onClick={() => handleEdit(index, item)}>Edit</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default App;
