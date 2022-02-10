import React from "react";

const CompletedTodos = ({ todos = [] }) => {
    const completedTodos = todos.filter((todo) => todo.done)
    return (
        <div>
            <ul>
                {completedTodos.map((completedTodo) => <li>{completedTodo.list}</li>)}
            </ul>
        </div>
    );
};

export default CompletedTodos;