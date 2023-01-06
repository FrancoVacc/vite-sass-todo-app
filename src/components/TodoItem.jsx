import React from "react";
import CrossIcon from "./icons/CrossIcon";
import IconCheked from "./icons/IconCheked";

const TodoItem = ({ todo, removeTodos, updateTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article>
      <button
        onClick={() => updateTodo(id)}
        className={`circulo ${completed && "cheked"}`}
      >
        {completed && <IconCheked />}
      </button>
      <p className={`${completed && "todo-completed"}`}>{title}</p>
      <button className="cross" onClick={() => removeTodos(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
