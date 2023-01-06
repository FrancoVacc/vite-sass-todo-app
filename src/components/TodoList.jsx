import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodos, updateTodo,theme }) => {
  return (
    <div className={`${theme === 'light' ? 'light' : "dark"}`}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodos={removeTodos}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
