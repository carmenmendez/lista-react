import React from 'react';
import './App.css';
import TodosCounter from './components/TodosCounter';
import TodoCreator from './components/TodoCreator';

class TodoList extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      newTodo: '',
      todos: [
        'hacer postwork',
        'revisar prewwork',
        'pagar servicios',
      ]
    }
    this.onUpdateTodo = this.onUpdateTodo.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  onUpdateTodo(value) {
    this.setState({ newTodo: value })
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
          <TodosCounter count={this.state.todos.length} />
          <TodoCreator 
            newTodo={this.state.newTodo}  
            onUpdateTodo={this.onUpdateTodo}
            handleAddTodo={this.handleAddTodo}
          />
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
