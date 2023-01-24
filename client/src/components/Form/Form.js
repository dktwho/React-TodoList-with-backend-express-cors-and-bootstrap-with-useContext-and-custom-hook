

import React from 'react'

const Form = () => {
  return (

  <form>
    <div className="mb-3">
      <input 
      type="text" 
      className="form-control" 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp"
      />
    </div>
      <button type="submit" className="btn btn-primary">Submit</button>
  </form>

  )
}

export default Form
