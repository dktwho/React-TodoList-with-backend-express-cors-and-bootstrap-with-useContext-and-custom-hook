

import React from 'react'
import Todo from '../Todo/Todo'

const TodoList = ({todos}) => {
  return (
    <>
    <hr/>
  
    <ul className="list-group py-3">
      <Todo/>
    </ul>
    </>
  )
}

export default TodoList
