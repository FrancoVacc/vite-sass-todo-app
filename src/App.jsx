import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoFilter from "./components/TodoFilter";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

const initialStateTodo = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
const initialStateTheme = localStorage.getItem("theme") || "light";

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function App() {
  const [todos, setTodos] = useState(initialStateTodo);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState(initialStateTheme);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  

  const filterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const changeTheme = () =>{
    if(theme == "light"){
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }else{
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearComplete = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const changeFilter = (filter) => setFilter(filter);

  const handleDragEnd = result =>{
    const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
  }

  return (
    <div
      className={`general ${
        theme === "light" ? "general-light image-light" : "general-dark image-dark"
      }`}
    >
      <div className="responsive-container">
        <Header changeTheme={changeTheme} theme={theme} />
        <main className="container">
          <TodoCreate
            createTodo={createTodo} 
            theme={theme} />

          <DragDropContext onDragEnd={handleDragEnd}>
            <TodoList
              todos={filterTodos()}
              removeTodos={removeTodos}
              updateTodo={updateTodo}
              theme={theme}
            />
          </DragDropContext>
          <TodoComputed
            computedItemsLeft={computedItemsLeft}
            clearComplete={clearComplete}
            theme={theme}
          />
        </main>
        <TodoFilter
          changeFilter={changeFilter} 
          filter={filter}
          theme={theme}
          />
      </div>

      <footer> Drag and drop to reorder list </footer>
    </div>
  );
}

export default App;
