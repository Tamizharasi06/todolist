const express = require('express');
const app = express();
const cors=require('cors');
app.use(cors());
const PORT = 3000;

app.use(express.json());

let tasks = [];

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

// Delete a task
app.delete('/tasks/:index', (req, res) => {
  const index = req.params.index;
  tasks.splice(index, 1);
  res.status(200).json({ message: 'Task deleted' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});