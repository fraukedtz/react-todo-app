import React, { Component } from 'react'
import './App.css'
import Heading from './Heading.js'
import Counter from './Counter.js'
import Welcome from './Welcome.js'
import Input from './Input.js'
import Todo from './Todo.js'

class App extends Component {
  state = {
    todos: this.load()
  }

  render() {
    this.save()
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
    const todo = todos[index]
    const updatedTodos = [
      ...todos.slice(0, index),
      { ...todo, isDone: !todo.isDone },
      ...todos.slice(index + 1)
    ]

    this.setState({
      todos: updatedTodos
    })
  }

  handleKeyPress = event => {
    const { todos } = this.state
    const input = event.target
    if (event.key === 'Enter') {
      const updatedTodos = [{ text: input.value, isDone: false }, ...todos]

      this.setState({
        todos: updatedTodos
      })

      input.value = ''
    }
  }

  getDoneNumber() {
    return this.state.todos.filter(t => t.isDone).length
  }

  save() {
    localStorage.setItem('todo-app--todos', JSON.stringify(this.state.todos))
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('todo-app--todos')) || []
    } catch (err) {
      return []
    }
  }
}

export default App
