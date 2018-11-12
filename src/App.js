import React, { Component } from 'react'
import uid from 'uid'
import './App.css'
import Heading from './Heading.js'
import Counter from './Counter.js'
import Welcome from './Welcome.js'
import Input from './Input.js'
import Todo from './Todo.js'
import Separator from './Separator'

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
          <Separator text={'to-do'} />
          {this.state.todos.length > 0 ? (
            <ul>{this.renderOpenTodos()}</ul>
          ) : (
            <Welcome />
          )}
          <div className="inputDiv">
            <Input onEnter={this.handleKeyPress} />
          </div>
          <Separator text={'done'} />
          <ul>{this.renderDoneTodos()}</ul>
        </section>
        <footer />
      </React.Fragment>
    )
  }

  renderOpenTodos() {
    return this.state.todos.filter(t => !t.isDone).map(this.renderSingleTodo)
  }

  renderDoneTodos() {
    return this.state.todos.filter(t => t.isDone).map(this.renderSingleTodo)
  }

  renderSingleTodo = item => (
    <Todo
      key={item.id}
      text={item.text}
      isDone={item.isDone}
      onClick={() => this.toggleDone(item.id)}
      onDelete={() => this.deleteTodo(item.id)}
    />
  )

  deleteTodo = id => {
    const { todos } = this.state
    const index = todos.findIndex(t => t.id === id)

    const updatedTodos = [...todos.slice(0, index), ...todos.slice(index + 1)]

    this.setState({
      todos: updatedTodos
    })
  }

  toggleDone = id => {
    const { todos } = this.state
    const index = todos.findIndex(t => t.id === id)
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
      const updatedTodos = [
        { text: input.value, isDone: false, id: uid() },
        ...todos
      ]

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
