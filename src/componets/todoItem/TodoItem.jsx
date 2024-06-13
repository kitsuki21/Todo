/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import style from "./TodoItem.module.css";
import { useDispatch } from "react-redux";
import {
  checkTodoAction,
  movieTodoAction,
  removeTodoAction,
} from "../../store/todoReducer";

export const TodoItem = ({ title, checked, id, number, draggableId }) => {
  const dispatch = useDispatch();

  const dragSTartHandler = (e) => {
    draggableId.current = id;
  };

  const dropHandler = (e) => {
    e.preventDefault();

    dispatch(
      movieTodoAction({
        oldId: draggableId.current,
        newId: id,
      })
    );
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  return (
    <li
      className={style.li}
      draggable={true}
      onDragStart={(e) => dragSTartHandler(e)}
      onDrop={(e) => dropHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      data-id={id}
    >
      <div>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) =>
            dispatch(checkTodoAction({ id, checked: e.target.checked }))
          }
        />
        <strong>{number}</strong>
      </div>
      <div className={style.warperTitle}>
        <p className={` ${checked ? style.checkedTitle : ""}`}>{title}</p>
      </div>

      <button onClick={() => dispatch(removeTodoAction(id))}>Удалить</button>
    </li>
  );
};

export default TodoItem;
