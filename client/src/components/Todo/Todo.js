

import React from 'react'

const Todo = ({title, status, setTodos, id}) => {

  const deleteHandler = (id) => {
    setTodos((prev) => prev.filter((el) => el.id !== id))
  }


  return (
    <li className="list-group-item align-items-center d-flex justify-content-between">{title}
    <button onClick={() => deleteHandler(id)} type="button" className="btn btn-danger">Danger</button></li>
  )
}

export default Todo
