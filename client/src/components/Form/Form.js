

import React, { useState } from 'react'

const Form = ({setTodos}) => {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos((prev) => [...prev, {id: new Date(), title: input, status: false}] )
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
