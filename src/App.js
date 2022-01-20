import React from 'react';
import './App.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      newTodo: '',
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
            <li>Tarea <button>x</button></li>
            <li>Tarea <button>x</button></li>
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
