import React from 'react'
import {oneOfType, arrayOf} from 'prop-types'

import elementOfType from './helpers/elementOfType'

import Cell from './Cell'

Row.propTypes = {
  children: oneOfType([arrayOf(elementOfType(Cell)), elementOfType(Cell)]).isRequired,
}

export default function Row({children}) {
  return <div>{children}</div>
}
