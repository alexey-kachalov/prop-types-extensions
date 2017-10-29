import withIsRequired from './withIsRequired'
import getElementTypeName from './getElementTypeName'

export default function elementOfType(expectedElementType) {
  if (typeof expectedElementType !== 'function' && typeof expectedElementType !== 'string') {
    throw new Error(
      `Invalid argument supplied to \`elementOfType\`, expected an instance of either class/function or string.`,
    )
  }

  function validate(props, propName, componentName, location, propFullName) {
    if (props[propName].type !== expectedElementType) {
      const elementTypeName = getElementTypeName(expectedElementType)
      return new Error(
        `Invalid ${location} \`${propFullName}\` supplied to \`${componentName}\`, expected an element of type \`${elementTypeName}\`.`,
      )
    }

    return null
  }

  return withIsRequired(validate)
}
