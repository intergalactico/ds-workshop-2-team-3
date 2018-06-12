import React from 'react'
import './styles.css'
import * as s from './styles.js'

const HeaderLogo = (props) => {
  return (
    <s.HeaderLogo>
      <img className='logo' src={props.logo}/>
      <span>{props.text}</span>
    </s.HeaderLogo>
  )
}

export default HeaderLogo
