import { useState } from "react";
import "./ToDoList.css";
import React from "react";


const ListItem = ({ toDoItem, onDelete, OnDone }) => {
  return (
    <div
      className="listItem"
      style={toDoItem.done ? { backgroundColor: "#b6ebb5" } : null}
      onClick={OnDone}
    >
    { toDoItem.id } - {toDoItem.name}
      <button
        className="addButton"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        Delete
      </button>
    </div>
  );
};

function ToDoList({ pageTitle }) {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [id, setId] = useState(0);

  const onInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const onClickAddTask = () => {
    if (!inputValue) return;
    setId(id + 1);
    setToDoList([...toDoList, { id, name: inputValue, done: false }]);
    setInputValue("");
  };

  const onClickDone = (id) => {
    setToDoList((prevToDoList) =>
      prevToDoList.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div>
      <div className="header"></div>
      <h1>{pageTitle}</h1>
      <div className="inputContainer">Minha lista de tarefas</div>
      <label for="taskText" className="inputLabel">
        Digite a sua tarefa:
      </label>
      <input
        id="taskText"
        name="taskText"
        className="input"
        onChange={onInputChange}
        value={inputValue}
      />
      <button className="addButton" onClick={onClickAddTask}>
        +
      </button>
      <div className="list">
        {toDoList.map((toDoItem) => (
          <ListItem 
          toDoItem={toDoItem}
          onDelete={() => setToDoList(toDoList.filter((item) => item.id !== toDoItem.id))}
          OnDone={() => onClickDone(toDoItem.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
