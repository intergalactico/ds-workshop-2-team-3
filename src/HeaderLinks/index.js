import React from 'react'
import * as s from './styles.js'
import * as ts from '../Typography/styles'
import { array } from 'prop-types'

const HeaderLinks = (props) => {
  let idx= 0;
  return (
    <s.HeaderLinks>
      {props.links.map( (link) => {
        idx++;
        return (
          <a key={idx} style={{ padding: '0 5px' }}><ts.Body inverted>{link}</ts.Body></a>
        )
      })}
    </s.HeaderLinks>
  )
}

HeaderLinks.propTypes = {
  links: array
};

export default HeaderLinks
