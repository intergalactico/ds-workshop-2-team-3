import React from 'react'
import { storiesOf } from '@storybook/react'

import SiteHeader from '.'


storiesOf('SiteHeader', module)
  .add('index', () => (
    <SiteHeader />
  ))
