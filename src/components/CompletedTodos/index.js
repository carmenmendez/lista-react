import React from "react";

const CompletedTodos = ({ todos = [] }) => {
    const completedTodos = todos.filter((todo) => todo.completed)
    return (
        <div>
            <ul>
                {completedTodos.map((completedTodo, index) => <li key={index}>{completedTodo.title}</li>)}
            </ul>
        </div>
    );
};

export default CompletedTodos;