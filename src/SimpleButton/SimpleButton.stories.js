import React from 'react'
import { storiesOf } from '@storybook/react'

import SimpleButton from '.'

storiesOf('SimpleButton', module)
  .add('index', () => (
    <SimpleButton text='Click me' />
  ))
  .add('inverted', () =>(
    <div style={{
      background: 'black', 
      height: '100px', 
      width: '500px', 
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center'}}>
      <div style={{height: '50px'}}/>
    <SimpleButton text='Click me' inverted />
    </div>
  ))
