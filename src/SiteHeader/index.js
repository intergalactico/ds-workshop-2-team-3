import React from 'react'

import * as s from './styles.js'
import DSCONFLOGO from '../../assets/dsconf-logo.png'
import HeaderLogo from '../HeaderLogo'
import HeaderLinks from '../HeaderLinks'

const logo = DSCONFLOGO
const links = ['Home', 'About', 'Event Overview']

const SiteHeader = (props) => {
  return (
    <s.SiteHeader>
      <HeaderLogo 
        text={'DSCONF'} 
        logo={DSCONFLOGO}/>
      <HeaderLinks links={links}/> 
    </s.SiteHeader>
  )
}

export default SiteHeader
