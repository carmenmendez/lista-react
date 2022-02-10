import React from "react";

const PendingTodos = ({ todos = [] }) => {
    const pendingTodos = todos.filter((todo) => !todo.done)
    return (
        <div>
            <ul>
                {pendingTodos.map((pendingTodo) => <li>{pendingTodo.list}</li>)}
            </ul>
        </div>
    );
};

export default PendingTodos;