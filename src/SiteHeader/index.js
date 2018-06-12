import React from 'react'

import * as s from './styles.js'
import DSCONFLOGO from '../../assets/dsconf-logo.png'
import HeaderLogo from '../HeaderLogo'
import HeaderLinks from '../HeaderLinks'
import { string } from 'prop-types'

const links = ['Home', 'About', 'Event Overview']

const SiteHeader = () => {
  return (
    <s.SiteHeader>
      <HeaderLogo 
        text={'DSCONF'} 
        logo={DSCONFLOGO}/>
      <HeaderLinks links={links}/> 
    </s.SiteHeader>
  )
}

SiteHeader.propTypes = {
  text: string,
  logo: string
};

export default SiteHeader
