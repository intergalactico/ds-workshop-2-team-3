import React from 'react'
import './styles.css'
import * as s from './styles.js'
import * as ts from '../Typography/styles.js'

const HeaderLogo = (props) => {
  return (
    <s.HeaderLogo>
      <img className='logo' src={props.logo}/>
      <ts.Header3 inverted>{props.text}</ts.Header3>
    </s.HeaderLogo>
  )
}

export default HeaderLogo
