import React, { Component } from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: deeppink;
  padding: 10px 0 10px 30px;
  color: #fefefe;
  transition: 6s ease-in-out;
`

export default class Counter extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.number > 0
          ? `Well done - you have completed ${this.props.number} ${
              this.props.number > 1 ? 'tasks' : 'task'
            }! 😎`
          : `Let's go - start completing your tasks! 🤓`}
      </Wrapper>
    )
  }
}
