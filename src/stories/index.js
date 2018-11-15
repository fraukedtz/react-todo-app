import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { text, boolean, number } from '@storybook/addon-knobs'

import Todo from '../components/Todo'
import Separator from '../components/Separator'
import ProgressBar from '../components/ProgressBar'
import Input from '../components/Input'
import { TextBox } from '../components/Home'
import Counter from '../components/Counter'
import ToggleButton from '../components/ToggleButton'

storiesOf('Counter', module).add('with number', () => (
  <React.Fragment>
    <Counter number={number('Number of to-dos done', '3')} />
  </React.Fragment>
))

storiesOf('Input', module).add('default state', () => (
  <React.Fragment>
    <TextBox>
      <Input onEnter={action('onEnter')} />
    </TextBox>
  </React.Fragment>
))

storiesOf('ProgressBar', module).add('different progress state', () => (
  <React.Fragment>
    <ProgressBar
      percentage={number('Progress (%)', '25', {
        range: true,
        min: 0,
        max: 100,
        step: 1
      })}
    />
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
      isDefault={boolean('Set state', true)}
      onClick={action('onClick')}
    />
  </React.Fragment>
))
