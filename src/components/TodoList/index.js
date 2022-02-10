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
                <TodosCounter count={todos.filter((todo) => !todo.done).length} />
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
                            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
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