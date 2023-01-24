import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="container p-5">
      <Form setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      
    </div>
  );
}

export default App;
