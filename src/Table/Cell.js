import React from 'react'
import {any} from 'prop-types'

Cell.propTypes = {
  children: any,
}

export default function Cell({children}) {
  return <div>{children}</div>
}
