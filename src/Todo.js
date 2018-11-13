import React, { Component } from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgray;
  padding: 10px 60px;
  font-size: 24px;
  background-color: #fefefe;

  .done {
    text-decoration: line-through;
  }
`

const Button = styled.button`
  font-size: 24px;
`

export class Todo extends Component {
  render() {
    const { text, isDone, onClick, onDelete } = this.props
    return (
      <Wrapper>
        <li onClick={onClick} className={isDone ? 'done' : ''}>
          {text}
        </li>
        <Button onClick={onDelete}>&times;</Button>
      </Wrapper>
    )
  }
}

export default Todo
