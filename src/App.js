import React, { Component } from 'react'
import './App.css'
import Heading from './Heading.js'
import Input from './Input.js'
import Todo from './Todo.js'

class App extends Component {
  state = {
    todos: []
  }

  log = text => {
    console.log(text)
  }

  renderTodos() {
    return this.state.todos.map((item, index) => (
      <Todo
        key={item.text}
        text={item.text}
        onClick={() => this.toggleDone(index)}
      />
    ))
  }

  toggleDone = index => {
    const { todos } = this.state
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], isDone: !todos[index].isDone },
      ...todos.slice(index + 1)
    ]

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <section className="App">
        <Heading />
        <Input />
        <ul>{this.renderTodos()}</ul>
      </section>
    )
  }
}

export default App
