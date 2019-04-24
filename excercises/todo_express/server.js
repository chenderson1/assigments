const express = require("express");
const morgan = require("morgan");
const uuidv4 = require("uuid/v4");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//data
let todos = [
  {
    name: "clean room",
    description: "room is a mess",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuidv4()
  },
  {
    name: "vaccum",
    description: "carpet is a mess",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuidv4()
  },
  {
    name: "take out trash",
    description: "trash is full",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuidv4()
  }
];

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.get("/todos/:_id", (req, res) => {
  const foundTodo = todos.find(todo => todo._id === req.params._id);
  res.send(foundTodo);
});

app.post("/todos/", (req, res) => {
  const newTodo = req.body;
  newTodo._id = uuidv4();
  todos.push(newTodo);
  res.send(todos);
});

app.delete("/todos/:_id", (req, res) => {
  const foundTodo = todos.find(todo => todo._id === req.params._id);
  const updatedDB = todos.filter(todo => todo._id !== foundTodo._id);
  todos = updatedDB;
  res.send(updatedDB);
});

app.put("/todos/:_id", (req, res) => {
  const foundTodo = todos.find(todo => todo._id === req.params._id);
  const updatedTodo = Object.assign(foundTodo, req.body);

  const updatedDB = todos.map(todo => {
    return todo._id === updatedTodo._id ? updatedTodo : todo;
  });

  todos = updatedDB;

  res.send(todos);
});

app.listen(port, () => console.log(`The magic happens on port: ${port}`));
