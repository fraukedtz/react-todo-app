import React, { Component } from 'react'

import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 10px 10px;
  font-size: 24px;

  ::placeholder {
    color: deeppink;
  }
`

export class Input extends Component {
  handleKeyPress(event) {
    this.props.onEnter(event)
    event.target.value = ''
  }

  render() {
    return (
      <StyledInput
        type="text"
        placeholder="+ Add a to-do"
        onKeyPress={event =>
          event.key === 'Enter' &&
          (event.target.value && this.handleKeyPress(event))
        }
      />
    )
  }
}

export default Input
