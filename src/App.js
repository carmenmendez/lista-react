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
  render(){
    return(
      <main>
        <div>
          <p>Por hacer: 0</p>
          <input
            type="text" 
            value={this.state.newTodo} 
            onChange={(event) => {
              this.setState({ newTodo: event.target.value}) 
            }}
          />
          <button>+</button>
        </div>
        <div>
          <ul>
            {this.state.todos.map((todo, index) => {
              return <li key={index}>{todo} <button>x</button></li>
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
