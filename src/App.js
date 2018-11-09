import React, { Component } from 'react'
import './App.css'
import Heading from './Heading.js'
import Counter from './Counter.js'
import Welcome from './Welcome.js'
import Input from './Input.js'
import Todo from './Todo.js'

class App extends Component {
  state = {
    todos: []
  }

  renderTodos() {
    return this.state.todos.map((item, index) => (
      <Todo
        key={Math.random()}
        text={item.text}
        isDone={item.isDone}
        onClick={() => this.toggleDone(index)}
        onDelete={() => this.deleteTodo(index)}
      />
    ))
  }

  deleteTodo = index => {
    const { todos } = this.state

    const updatedTodos = [...todos.slice(0, index), ...todos.slice(index + 1)]

    this.setState({
      todos: updatedTodos
    })
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

  getDoneNumber() {
    return this.state.todos.filter(t => t.isDone).length
  }

  render() {
    return (
      <React.Fragment>
        <section className="App">
          <Heading />
          {this.state.todos.length > 0 ? (
            <Counter number={this.getDoneNumber()} />
          ) : null}
          {this.state.todos.length > 0 ? (
            <ul>{this.renderTodos()}</ul>
          ) : (
            <Welcome />
          )}
        </section>
        <footer>
          <Input onEnter={this.handleKeyPress} />
        </footer>
      </React.Fragment>
    )
  }
}

export default App
