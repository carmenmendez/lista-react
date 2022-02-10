import React from "react";

const PendingTodos = ({ todos = [] }) => {
    const pendingTodos = todos.filter((todo) => !todo.completed)
    return (
        <div>
            <ul>
                {pendingTodos.map((pendingTodo, index) => <li key={index}>{pendingTodo.title}</li>)}
            </ul>
        </div>
    );
};

export default PendingTodos;