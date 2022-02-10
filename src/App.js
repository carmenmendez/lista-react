import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import PendingTodos from './components/PendingTodos';
import CompletedTodos from './components/CompletedTodos';
import NotFound from './components/NotFound';

const routes = () => {
  return (
    <BrowserRouter>
      <div>
        <App />
        <Route exact path="/pending" component={PendingTodos} />
        <Route exact path="/completed" component={CompletedTodos} />
      </div>
    </BrowserRouter>
  )
}

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const initialTodos = [
      {
        list: 'hacer ejercicio',
        done: false
      },
      {
        list: 'tender la cama',
        done: false
      },
      {
        list: 'desayunar',
        done: false
      },
      {
        list: 'estudiar',
        done: false
      },
      {
        list: 'hacer postwork',
        done: false
      }
    ]
    setTodos(initialTodos)
  }, [])

  function onUpdateTodo(value) {
    setNewTodo(value)
  }
  function handleAddTodo() {
    // Duplicar todos para evitar mutación con spread operator 
    const todosCopy = [...todos]
    todosCopy.push({ list: newTodo, done: false })
    setTodos(todosCopy)
    setNewTodo('')
  }
  function handleRemoveTodo(index) {
    // Confirm delete from user
    let userConfirmed = window.confirm('Estás seguro de querer eliminar ésta tarea?')
    if (!userConfirmed) {
      return
    }
    const todosFiltered = todos.filter((_todo, i) => i !== index);
    setTodos(todosFiltered)
  }
  function handleToggleTodo(index) {
    const markedTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        // return { ...list, done: !todo.done } spread operator to clone each field
        return { list: todo.list, done: !todo.done }
      }
      return todo;
    })
    setTodos(markedTodos)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <li>
              <Link to="/">TODOs</Link>
            </li>
            <li>
              <Link to="/completed">Completed</Link>
            </li>
            <li>
              <Link to="/pending">Pending</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' exact element={
            <TodoList
              todos={todos}
              newTodo={newTodo}
              onUpdateTodo={onUpdateTodo}
              handleAddTodo={handleAddTodo}
              handleRemoveTodo={handleRemoveTodo}
              handleToggleTodo={handleToggleTodo}
            />
          } />
          <Route path='/pending' element={<PendingTodos todos={todos} />} />
          <Route path='/completed' element={<CompletedTodos todos={todos} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
