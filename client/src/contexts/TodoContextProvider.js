import { createContext, useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"

const TodoContext = createContext()

// hoc
const TodoContextProvider = ({children}) => {
  const [, , oxios] = useFetch()
  const [todos, setTodos] = useState([])
  useEffect(() => {
    oxios(`${process.env.REACT_APP_FETCH}/todos`)
    .then(data => setTodos(data))
  }, [])

  const deleteHandler = async (id) => {
    const response = await oxios(`${process.env.REACT_APP_FETCH}/todos/${id}`,'delete' )
    if(response.message) {
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
