import { useState } from "react";

const TodoList = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  let handleClick = (e) => {
    setNewItem(e.target.value);
  };

  let handleChange = (e) => {
    setNewItem(e);
  };

  let handleSubmit = () => {
    setTodos;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <form className="" onSubmit={(e) => e.preventDefault()}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => handleChange(e.target.value)}
          ></input>
        </div>
        <button onClick={(e) => handleClick(e)}>Add</button>
      </form>
      <h1>ToDo List</h1>
      <ul>
        <li>
          <label>
            <input type="checkbox"></input>
            {newItem}
          </label>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
