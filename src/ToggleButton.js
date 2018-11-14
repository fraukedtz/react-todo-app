import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: teal;
  color: white;
  border-radius: 5px;
  font-size: 24px;

  &.active {
    color: black;
    background: white;
  }
`

export class ToggleButton extends Component {
  state = {
    isDefault:
      this.props.initialIsDefault == null ? true : this.props.initialIsDefault
  }

  handleToggle = () => {
    this.setState({
      isDefault: !this.state.isDefault
    })
    this.props.onClick()
  }

  render() {
    const { defaultText, alternativeText } = this.props
    const { isDefault } = this.state
    return (
      <Button className={isDefault ? '' : 'active'} onClick={this.handleToggle}>
        {isDefault ? defaultText : alternativeText}
      </Button>
    )
  }
}

export default ToggleButton
