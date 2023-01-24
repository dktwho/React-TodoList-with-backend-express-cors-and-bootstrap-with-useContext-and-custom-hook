import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('http://localhost:3030/api/v1/todos')
    .then(response => response.json())
    .then(data => setTodos(data))
  }, [])

  return (
    <div className="container p-5">
      <Form setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      
    </div>
  );
}

export default App;
