/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import TodoItem from "../todoItem/TodoItem";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const draggableId = useRef();

  const sortTodo = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div>
      {todos.length === 0 ? (
        <div>Список задач пуст</div>
      ) : (
        <ul>
          {todos.sort(sortTodo).map((todo, index) => (
            <TodoItem
              key={todo.id}
              {...todo}
              draggableId={draggableId}
              number={index + 1}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
