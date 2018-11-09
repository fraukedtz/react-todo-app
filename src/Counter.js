import React, { Component } from 'react'
import './Counter.css'

export class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        {this.props.number > 0
          ? `Well done - you have completed ${this.props.number} task(s)! 😎`
          : `Let's go - start completing your tasks! 🤓`}
      </div>
    )
  }
}

export default Counter
