import React from 'react'

import {elementsOfType, required} from './helpers/elementsOfType'

import Column from './Column'
import Divider from './Divider'

Body.propTypes = {
  children: elementsOfType(required(Column), Divider).isRequired,
}

export default function Body({children}) {
  return <div>{children}</div>
}
