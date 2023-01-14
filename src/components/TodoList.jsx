import { Droppable, Draggable } from "@hello-pangea/dnd";
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodos, updateTodo, theme }) => {
  return (
    <Droppable droppableId="todos">
      {
        (droppableProvided) => (
          <div
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
            className={`${theme === "light" ? "light" : "dark"}`}
          >
            {todos.map((todo, index) => (
              <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                {
                  (draggableProvided)=>(
                    <TodoItem
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                      todo={todo}
                      removeTodos={removeTodos}
                      updateTodo={updateTodo}
                    />
                  )
                }
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </div>
        )
      }
    </Droppable>
  );
};

export default TodoList;
