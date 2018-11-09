import React, { Component } from 'react'
import './App.css'
import Heading from './Heading.js'
import Input from './Input.js'
import Todo from './Todo.js'

class App extends Component {
  log = text => {
    console.log(text)
  }

  render() {
    return (
      <section className="App">
        <Heading />
        <Input />
        <ul>
          {/* {this.renderDoors()} */}
          <Todo text="shopping" onClick={() => this.log('shopping')} />
        </ul>
      </section>
    )
  }
}

export default App
