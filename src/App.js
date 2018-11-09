import React, { Component } from 'react'
import './App.css'
import Heading from './Heading.js'
import Input from './Input.js'
import Todo from './Todo.js'

class App extends Component {
  render() {
    return (
      <section className="App">
        <Heading />
        <Input />
        <ul>
          {/* {this.renderDoors()} */}
          <Todo />
        </ul>
      </section>
    )
  }
}

export default App
