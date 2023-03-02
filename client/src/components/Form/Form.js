
import React, { useState, useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContextProvider'
import useFetch from '../../hooks/useFetch'


const Form = () => {
  const [input, setInput] = useState('')
  const { setTodos } = useContext(TodoContext)
  const [, , oxios] = useFetch()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await oxios(`${process.env.REACT_APP_FETCH}/todos`, 'post',  {title: input},
    
   )
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
      <button type="submit" className="btn btn-primary">Add todo</button>
  </form>

  )
}

export default Form
