import './App.css';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="container p-5">
      <Form />
      <TodoList />
      
    </div>
  );
}

export default App;
