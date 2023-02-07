const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
const PORT = 3030;

let DB = {
  todos: [
    {
      id: uuidv4(),
      title: 'First start',
      status: false,
    },
  ],
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/v1/todos', (req, res) => {
  return res.json(DB.todos);
});

app.post('/api/v1/todos', (req, res) => {
  const newTodo = {
    id: uuidv4(),
    title: req.body.title,
    status: false,
  };
  DB.todos.push(newTodo);
  return res.json(newTodo);
});

// app.patch('/api/v1/todos', (req, res) => {
//   const currentTodo = DB.todos.find((todo) => todo.id === req.body.id);
//   currentTodo.completed = !currentTodo.completed;
//   return res.json(currentTodo);
// });


app.delete('/api/v1/todos/:id', (req, res) => {
  DB.todos = DB.todos.filter((el) => el.id !== req.params.id);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log('Server has been started on port ', PORT);
});
