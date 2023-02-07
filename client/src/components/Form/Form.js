
import React, { useState, useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContextProvider'


const Form = () => {
  const [input, setInput] = useState('')
  const { setTodos } = useContext(TodoContext)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch(`${process.env.REACT_APP_FETCH}/todos`, {method: 'post', headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({title: input}), } )
    const data = await response.json()

    setTodos((prev) => [...prev, data] )
    setInput('')
  }

  return (
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <input 
      value={input}
      type="text" 
      className="form-control" 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp"
      onChange={handleChange}
      />
    </div>
      <button type="submit" className="btn btn-primary">Submit</button>
  </form>

  )
}

export default Form
