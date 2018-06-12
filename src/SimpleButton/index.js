import React from 'react'
import { string, bool } from 'prop-types';
import * as s from './styles.js'

const SimpleButton = (props) => {

  return (
    <s.SimpleButton inverted={props.inverted}>
      <s.Text inverted={props.inverted}>{props.text}</s.Text>
    </s.SimpleButton>
  )
}

SimpleButton.propTypes = {
  inverted: bool,
  text: string
};

export default SimpleButton
