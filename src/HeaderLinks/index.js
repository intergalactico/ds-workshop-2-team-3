import React from 'react'
import * as s from './styles.js'
import * as ts from '../Typography/styles'

const HeaderLinks = (props) => {
  return (
    <s.HeaderLinks>
      {props.links.map( (link) => {
        return (
          <a style={{ padding: '0 5px' }}><ts.Body inverted>{link}</ts.Body></a>
        )
      })}
    </s.HeaderLinks>
  )
}

export default HeaderLinks
