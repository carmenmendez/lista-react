import React, { useState, useEffect } from 'react';
import TodosCounter from '../TodosCounter';
import TodoCreator from '../TodoCreator';

function TodoList() {
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
        todosCopy.push({ list: newTodo, done: false})
        setTodos(todosCopy)
        setNewTodo('')
    }
    function handleRemoveTodo(index) {
        // Confirm delete from user
        let userConfirmed = window.confirm('Estás seguro de querer eliminar ésta tarea?')
        if(!userConfirmed) {
            return
        }
        const todosFiltered = todos.filter((_todo, i) => i !== index);
        setTodos(todosFiltered)
    }
    function handleToggleTodo(index) {
        const markedTodos = todos.map( (todo, todoIndex) => {
            if(todoIndex === index) {
                // return { ...list, done: !todo.done } spread operator to clone each field
                return { list: todo.list, done: !todo.done }
            }
            return todo;
        })
        setTodos(markedTodos)
    }

    return (
        <main>
            <div>
                <TodosCounter count={todos.filter((todo) => !todo.done ).length} />
                <TodoCreator
                    newTodo={newTodo}
                    onUpdateTodo={onUpdateTodo}
                    handleAddTodo={handleAddTodo}
                />
            </div>
            <div>
                <ul>
                    {todos.map((todo, index) => {
                        return <li
                                 style={ {textDecoration: todo.done ? 'line-through' : 'none'} }
                                 key={index}>
                                     {todo.list} <button onClick={() => { handleToggleTodo(index) }}>✅</button> <button onClick={() => { handleRemoveTodo(index) }}>🗑</button>
                               </li>
                    })}
                </ul>
            </div>
        </main>
    )
}

export default TodoList