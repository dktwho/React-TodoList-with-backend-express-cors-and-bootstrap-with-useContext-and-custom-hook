import { TodoContext } from '../../contexts/TodoContextProvider'
import React, { useContext } from 'react'

const Todo = ({title, status, id}) => {
  const {deleteHandler} = useContext(TodoContext)

  return (
    <li className="list-group-item align-items-center d-flex justify-content-between">{title}
    <button onClick={() => deleteHandler(id)} type="button" className="btn btn-danger">Delete</button></li>
  )
}

export default Todo
