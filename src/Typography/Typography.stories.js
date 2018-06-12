import React from 'react';
import { storiesOf } from '@storybook/react';
/*
 * withInfo is an addon which provides a block with
 * information about the component. It includes the
 * code samples and properties documentation.
 */
import { withInfo } from '@storybook/addon-info';

import Typography from '.';
import Inverted from './inverted.js';

/*
 * The story (documentation) for the Typography component
 * only outputs the React component. In turn, this component knows
 * what is needed to be rendered.
 */

storiesOf('Typography', module) // eslint-disable-line no-undef
  .add('index',
    withInfo(`Typography component.`)(() => (
      <Typography />
    ))).add('inverted',
    withInfo(`inverted Typography.`)(() => (
      <Inverted />
    )));
