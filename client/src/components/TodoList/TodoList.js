

import React from 'react'
import Todo from '../Todo/Todo'

const TodoList = ({todos, setTodos}) => {

  return (
    <>
    <hr/>
  
    <ul className="list-group py-3">
      {todos.map((todo) => {
        return  <Todo key={todo.id} title={todo.title} id={todo.id} setTodos={setTodos}/>
      })}
     
    </ul>
    </>
  )
}

export default TodoList
