import React, { Component } from 'react'
import './Input.css'

export class Input extends Component {
  render() {
    const { onEnter } = this.props
    return <input type="text" placeholder="Enter to-do" onKeyPress={onEnter} />
  }
}

export default Input
