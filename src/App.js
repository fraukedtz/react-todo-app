import React, { Component } from 'react'
import './App.css'
import Heading from './Heading.js'
import Input from './Input.js'
import Todo from './Todo.js'

class App extends Component {
  state = {
    todos: []
  }

  renderTodos() {
    return this.state.todos.map((item, index) => (
      <Todo
        key={item.text}
        text={item.text}
        isDone={item.isDone}
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

  handleKeyPress = event => {
    const { todos } = this.state
    if (event.key === 'Enter') {
      const newTodos = [{ text: event.target.value, isDone: false }, ...todos]

      this.setState({
        todos: newTodos
      })

      event.target.value = ''
    }
  }

  render() {
    return (
      <section className="App">
        <Heading />
        <Input onEnter={this.handleKeyPress} />
        <ul>{this.renderTodos()}</ul>
      </section>
    )
  }
}

export default App
