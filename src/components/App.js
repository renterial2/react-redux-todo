import React, { Component } from 'react'
import '../styles/App.css'
import TodoApp from '../containers/TodoAppContainer'

class App extends Component {
  render() {
    return (
      <div>
        <TodoApp />
      </div>
    )
  }
}

export default App