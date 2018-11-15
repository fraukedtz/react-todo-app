import React, { Component } from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fefefe;
  padding: 50px 0 50px 30px;
  font-size: 24px;
`
const Heading = styled.h3`
  margin: 0;
`

const Description = styled.p`
  margin: 0;
`

export class Welcome extends Component {
  render() {
    return (
      <Wrapper>
        <Heading>Welcome!</Heading>
        <Description>Start adding tasks now...</Description>
      </Wrapper>
    )
  }
}

export default Welcome
