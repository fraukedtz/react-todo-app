import React, { Component } from 'react'
import './Todo.css'

export class Todo extends Component {
  render() {
    const { text, isDone, onClick } = this.props
    return (
      <li onClick={onClick} className={isDone ? 'done' : ''}>
        {text}
      </li>
    )
  }
}

export default Todo
