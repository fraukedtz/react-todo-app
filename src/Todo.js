import React, { Component } from 'react'
import './Todo.css'

export class Todo extends Component {
  render() {
    const { text, isDone, onClick, onDelete } = this.props
    return (
      <div className="listItem">
        <li onClick={onClick} className={isDone ? 'done' : ''}>
          {text}
        </li>
        <button onClick={onDelete}>&times;</button>
      </div>
    )
  }
}

export default Todo
