/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import TodoList from "../todoList/TodoList";

export const TodoBoard = () => {
  const todos = useSelector((state) => state.todo);

  return (
    <div>
      {todos.map((item) => {
        <div>
          <h1>{item.title}</h1>
        </div>;
        console.log(item.title);
      })}
    </div>
  );
};

export default TodoBoard;
