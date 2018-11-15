import React from 'react'
import { configure, addDecorator, setAddon } from '@storybook/react'
import GlobalStyle from '../src/components/GlobalStyle'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)

addDecorator(story => (
  <React.Fragment>
    {story()}
    <GlobalStyle />
  </React.Fragment>
))

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
