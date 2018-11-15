import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-image: linear-gradient(#ff89c9, deeppink);
  color: #fefefe;
  font-size: 30px;
  padding: 80px 0 10px 30px;

  h1 {
    margin: 0;
  }
`

export class Heading extends Component {
  render() {
    return (
      <Wrapper>
        <h1>{this.props.text}</h1>
      </Wrapper>
    )
  }
}

export default Heading
