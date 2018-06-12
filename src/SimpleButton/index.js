import React from 'react'

import * as s from './styles.js'

const SimpleButton = (props) => {

  return (
    <s.SimpleButton inverted={props.inverted}>
      <s.Text inverted={props.inverted}>{props.text}</s.Text>
    </s.SimpleButton>
  )
}

export default SimpleButton
