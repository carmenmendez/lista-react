import React from 'react';
import TodosCounter from '../TodosCounter';
import TodoCreator from '../TodoCreator';

function TodoList({
    todos,
    newTodo,
    onUpdateTodo,
    handleAddTodo,
    handleRemoveTodo,
    handleToggleTodo
}) {

    return (
        <main>
            <div>
                <TodosCounter count={todos.filter((todo) => !todo.completed).length} />
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
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            key={index}>
                            {todo.title} <button onClick={() => { handleToggleTodo(index) }}>✅</button> <button onClick={() => { handleRemoveTodo(index) }}>🗑</button>
                        </li>
                    })}
                </ul>
            </div>
        </main>
    )
}

export default TodoList