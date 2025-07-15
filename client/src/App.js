import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    const res = await axios.get(`${API_URL}/todos`);
    setTodos(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    await axios.post(`${API_URL}/todos`, { text });
    setText('');
    fetchTodos();
  };

  const toggleTodo = async (id, completed) => {
    await axios.put(`${API_URL}/todos/${id}`, { completed: !completed });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/todos/${id}`);
    fetchTodos();
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Todo List</h1>
      <form onSubmit={addTodo} style={{ display: 'flex', gap: 8 }}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Add todo..." />
        <button type="submit">Add</button>
      </form>
      {loading ? <p>Loading...</p> : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li key={todo._id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo._id, todo.completed)} />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
              <button onClick={() => deleteTodo(todo._id)} style={{ marginLeft: 'auto' }}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App; 