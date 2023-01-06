import React from "react";

const TodoComputed = ({computedItemsLeft, clearComplete,theme}) => {
  return (
    <section className={`${theme === 'light' ? 'light' : "dark"}`}>
      <p>{computedItemsLeft} items left</p>
      <button onClick={clearComplete} >Clear Completed</button>
    </section>
  );
};

export default TodoComputed;
