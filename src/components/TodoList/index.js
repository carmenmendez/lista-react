import React, { useState, useEffect } from 'react';
import TodosCounter from '../TodosCounter';
import TodoCreator from '../TodoCreator';

function TodoList() {
    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const initialTodos = [
            'hacer ejercicio',
            'tender la cama',
            'desayunar',
            'estudiar',
            'hacer postwork'
        ]
        setTodos(initialTodos)
    }, [])

    function onUpdateTodo(value) {
        setNewTodo(value)
    }
    function handleAddTodo() {
        // Duplicar todos para evitar mutación con spread operator 
        const todosCopy = [...todos]
        todosCopy.push(newTodo)
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

    return (
        <main>
            <div>
                <TodosCounter count={todos.length} />
                <TodoCreator
                    newTodo={newTodo}
                    onUpdateTodo={onUpdateTodo}
                    handleAddTodo={handleAddTodo}
                />
            </div>
            <div>
                <ul>
                    {todos.map((todo, index) => {
                        return <li key={index}>{todo} <button onClick={() => { handleRemoveTodo(index) }}>x</button></li>
                    })}
                </ul>
            </div>
        </main>
    )
}

export default TodoList