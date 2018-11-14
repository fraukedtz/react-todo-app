import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { text, boolean, number } from '@storybook/addon-knobs'

import { Button, Welcome } from '@storybook/react/demo'
import Todo from '../Todo'
import Separator from '../Separator'
import ProgressBar from '../ProgressBar'
import Input from '../Input'
import { TextBox } from '../App'
import Counter from '../Counter'
import ToggleButton from '../ToggleButton'

storiesOf('Counter', module).add('with number', () => (
  <React.Fragment>
    <Counter number={number('Number of to-dos done', '3')} />
  </React.Fragment>
))

storiesOf('ProgressBar', module).add('different progress state', () => (
  <React.Fragment>
    <ProgressBar percentage={number('Progress (%)', '20')} />
  </React.Fragment>
))

storiesOf('Separator', module).add('with text', () => (
  <React.Fragment>
    <div style={{ background: 'deeppink' }}>
      <Separator text={text('Display text', 'to-do')} />
    </div>
    <div style={{ background: 'deeppink' }}>
      <Separator text={text('Display text2', 'done tasks')} />
    </div>
  </React.Fragment>
))

storiesOf('Input', module).add('default state', () => (
  <React.Fragment>
    <TextBox>
      <Input onEnter={action('onEnter')} />
    </TextBox>
  </React.Fragment>
))

storiesOf('Todo', module).add('done state', () => (
  <React.Fragment>
    <Todo
      text={text('Display text', 'read a book')}
      isDone={boolean('Set done state', false)}
      onClick={action('onClick')}
      onDelete={action('onDelete')}
    />
    <Todo
      text={text('Display text2', 'shop groceries')}
      isDone={boolean('Set done state2', true)}
      onClick={action('onClick')}
      onDelete={action('onDelete')}
    />
  </React.Fragment>
))

storiesOf('ToggleButton', module).add('with text', () => (
  <React.Fragment>
    <ToggleButton
      defaultText={text('Default text', 'foo')}
      alternativeText={text('Alternative text', 'bar')}
      initialIsDefault={boolean('Set state', true)}
      onClick={action('onClick')}
    />
  </React.Fragment>
))