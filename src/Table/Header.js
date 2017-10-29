import React from 'react'
import {oneOfType, arrayOf} from 'prop-types'

import elementOfType from './helpers/elementOfType'

import Row from './Row'

Header.propTypes = {
  children: oneOfType([arrayOf(elementOfType(Row)), elementOfType(Row)]).isRequired,
}

export default function Header({children}) {
  return <div>{children}</div>
}
