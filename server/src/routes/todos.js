import express from 'express';
import Todo from '../models/Todo.js';

const router = express.Router();

// Get all todos
router.get('/', async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

// Create a new todo
router.post('/', async (req, res, next) => {
  try {
    const todo = new Todo({ text: req.body.text });
    const saved = await todo.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
});

// Update a todo
router.put('/:id', async (req, res, next) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// Delete a todo
router.delete('/:id', async (req, res, next) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

export default router; 