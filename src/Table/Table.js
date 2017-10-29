import React from 'react'
import {elementsOfType, required} from './helpers/elementsOfType'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

Table.propTypes = {
  children: elementsOfType(Header, required(Body), Footer).isRequired,
}

export default function Table({children}) {
  return <div>{children}</div>
}
