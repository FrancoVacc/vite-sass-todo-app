import React from "react";

const TodoFilter = ({ changeFilter, filter,theme }) => {
  return (
    <section className="botonera">
      <div className={`${theme === 'light' ? 'light' : "dark"}`}>
        <button
          onClick={() => changeFilter("all")}
          className={`${filter === "all" && "filter-active"}`}
        >
          All
        </button>
        <button
          onClick={() => changeFilter("active")}
          className={`${filter === "active" && "filter-active"}`}
        >
          Active
        </button>
        <button
          onClick={() => changeFilter("completed")}
          className={`${filter === "completed" && "filter-active"}`}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
