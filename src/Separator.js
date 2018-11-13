import React, { Component } from 'react'

import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  color: #fefefe;
  text-transform: uppercase;
`

const Text = styled.h2`
  white-space: nowrap;
  padding: 0 10px;
`

const Line = styled.div`
  width: 100%;
  border-bottom: ${props => props.width || 4}px solid #fefefe;
`

export class Separator extends Component {
  render() {
    const { text } = this.props
    return (
      <Wrapper>
        <Line width={10} />
        <Text>{text}</Text>
        <Line width={10} />
      </Wrapper>
    )
  }
}

export default Separator
