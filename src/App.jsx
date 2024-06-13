/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "./App.css";
import TodoForm from "./componets/todoForm/TodoForm";
import TodoList from "./componets/todoList/TodoList";

function App() {
  const [titleTodo, setTitleTodo] = useState("");

  return (
    <div>
      <TodoForm titleTodo={titleTodo} setTitleTodo={setTitleTodo} />
      <TodoList />
    </div>
  );
}

export default App;
