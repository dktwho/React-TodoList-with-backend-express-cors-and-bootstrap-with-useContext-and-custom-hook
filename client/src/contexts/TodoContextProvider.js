import { createContext, useEffect, useState } from "react"

const TodoContext = createContext()

// hoc
const TodoContextProvider = ({children}) => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch(`${process.env.REACT_APP_FETCH}/todos`)
    .then(response => response.json())
    .then(data => setTodos(data))
  }, [])

  const deleteHandler = async (id) => {
    console.log('in delete')
    const response = await fetch(`${process.env.REACT_APP_FETCH}/todos/${id}`, {method: 'delete' })
    if(response.ok) {
      setTodos((prev) => prev.filter((el) => el.id !== id))
    }
  }

  

  return <TodoContext.Provider value={{
    todos, setTodos, deleteHandler
  }}>
    {children}
  </TodoContext.Provider>
}

export  { TodoContextProvider, TodoContext}
