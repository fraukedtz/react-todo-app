import React, { Component } from 'react'
import ToggleButton from './ToggleButton'

import styled from 'styled-components'

const Wrapper = styled.section`
  text-align: center;
`

export default class Config extends Component {
  render() {
    const { showDoneTodos, onToggle } = this.props
    return (
      <React.Fragment>
        <Wrapper>
          <h2>Config</h2>
          <ToggleButton
            defaultText={'Hide done todos'}
            alternativeText={'Show done todos'}
            isDefault={showDoneTodos}
            onClick={onToggle}
          />
        </Wrapper>
      </React.Fragment>
    )
  }
}
