import React from 'react'
import * as s from './styles.js'

const HeaderLinks = (props) => {
  return (
    <s.HeaderLinks>
      {props.links.map( (link) => {
        return (
          <a>{link}</a>
        )
      })}
    </s.HeaderLinks>
  )
}

export default HeaderLinks
