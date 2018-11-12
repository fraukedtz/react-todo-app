import React, { Component } from 'react'
import './Separator.css'

export class Separator extends Component {
  render() {
    const { text } = this.props
    return (
      <section className="Separator">
        <div className="hr" />
        <h2>{text}</h2>
        <div className="hr" />
      </section>
    )
  }
}

export default Separator
