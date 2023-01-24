

import React from 'react'
import Todo from '../Todo/Todo'

const TodoList = ({todos}) => {

  return (
    <>
    <hr/>
  
    <ul className="list-group py-3">
      {todos.map((todo) => {
        return  <Todo key={todo.id} title={todo.title}/>
      })}
     
    </ul>
    </>
  )
}

export default TodoList
