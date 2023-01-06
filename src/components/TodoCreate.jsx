import React from 'react'
import { useState } from 'react'

const TodoCreate = ({createTodo, theme}) => {

  const [title, setTitle] = useState('')

  const handleSubmitAddTodo = (e) =>{
    e.preventDefault()
    if(!title.trim()){
      return setTitle('');
    }

    createTodo(title);
    setTitle('');
  }


  return (
    <form onSubmit={handleSubmitAddTodo} className={`${theme === 'light' ? 'light' : "dark"}`}>
        <span/>
        <input type="text" placeholder="Create a new todo..." 
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        
        />
    </form>
  )
}

export default TodoCreate