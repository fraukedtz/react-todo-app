import React, { Component } from 'react'
import './Input.css'

export class Input extends Component {
  // handleKeyPress = event => {
  //   if (event.key === 'Enter') {
  //     console.log('do validate')
  //   }
  // }

  render() {
    return (
      <input
        type="text"
        placeholder="Enter to-do"
        // onKeyPress={this.handleKeyPress}
      />
    )
  }
}

export default Input
