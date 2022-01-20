import React from 'react';
import './App.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      newTodo: '',
      todos: [
        'compra leche',
        'lavar auto',
        'pagar servicios',
      ]
    }
  }

  handleAddTodo() {
    // Duplicar todos para evitar mutación
    // spread operator
    const todosCopy = [...this.state.todos]
    todosCopy.push(this.state.newTodo)
    this.setState({ todos: todosCopy, newTodo: ''})
  }

  handleRemoveTodo(index) {
    const todosFiltered = this.state.todos.filter((_todo, i) => i !== index);
    this.setState({todos: todosFiltered})
  }

  render(){
    return(
      <main>
        <div>
          <p>Por hacer: {this.state.todos.length}</p>
          <input
            type="text" 
            value={this.state.newTodo} 
            onChange={(event) => {
              this.setState({ newTodo: event.target.value}) 
            }}
          />
          <button onClick={() => this.handleAddTodo()}>+</button>
        </div>
        <div>
          <ul>
            {this.state.todos.map((todo, index) => {
              return <li key={index}>{todo} <button onClick={() => {this.handleRemoveTodo(index)}}>x</button></li>
            })}
          </ul>
        </div>
      </main>
    )
  }
}

function App() {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
