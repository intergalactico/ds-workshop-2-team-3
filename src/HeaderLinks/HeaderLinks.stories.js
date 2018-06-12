import React from 'react'
import { storiesOf } from '@storybook/react'

import HeaderLinks from '.'

storiesOf('HeaderLinks', module)
  .add('index', () => (
    <HeaderLinks />
  ))
