import './App.css';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import {TodoContextProvider} from './contexts/TodoContextProvider';

function App() {


  return (
    <TodoContextProvider>
    <div className="container p-5">
      <Form />
      <TodoList />
      
    </div>

    </TodoContextProvider>
  );
}

export default App;
