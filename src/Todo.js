import React, { Component } from 'react'
import './Todo.css'

export class Todo extends Component {
  render() {
    const { text, onClick } = this.props
    return <li onClick={onClick}>{text}</li>
  }
}

export default Todo
