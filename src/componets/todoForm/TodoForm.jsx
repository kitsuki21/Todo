/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./TodoForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../../store/todoReducer";

export const TodoForm = ({ titleTodo, setTitleTodo }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: titleTodo,
      checked: false,
      order: todos.length + 1,
    };
    titleTodo !== "" ? dispatch(addTodoAction(newTodo)) : null;
    setTitleTodo("");
  };

  return (
    <form className={styles.form}>
      <input
        type="text"
        placeholder="Напишите задачу"
        className={styles.input}
        value={titleTodo}
        onChange={(event) => setTitleTodo(event.target.value)}
      />
      <button onClick={(e) => addTodo(e.preventDefault())}>Добавить</button>
    </form>
  );
};

export default TodoForm;
