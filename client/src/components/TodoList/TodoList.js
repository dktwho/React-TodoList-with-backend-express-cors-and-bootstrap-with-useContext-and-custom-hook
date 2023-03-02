
import React from 'react'
import Todo from '../Todo/Todo'
import { useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContextProvider'

const TodoList = () => {
  const {todos} = useContext(TodoContext)

  return (
    <>
    <hr/>
    <ul className="list-group py-3">
      {todos.map((todo) => {
        return  <Todo key={todo.id} title={todo.title} id={todo.id} />
      })}
    </ul>
    </>
  )
}

export default TodoList
