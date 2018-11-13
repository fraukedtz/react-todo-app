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
  render() {
    const { onEnter } = this.props
    return (
      <StyledInput
        type="text"
        placeholder="+ Add a to-do"
        onKeyPress={onEnter}
      />
    )
  }
}

export default Input
