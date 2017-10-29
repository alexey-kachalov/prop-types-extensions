import React from 'react'
import {oneOfType, arrayOf} from 'prop-types'

import elementOfType from './helpers/elementOfType'

import Row from './Row'

Footer.propTypes = {
  children: oneOfType([arrayOf(elementOfType(Row)), elementOfType(Row)]).isRequired,
}

export default function Footer({children}) {
  return <div>{children}</div>
}
