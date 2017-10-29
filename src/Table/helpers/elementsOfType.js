import withIsRequired from './withIsRequired'
import getElementTypeName from './getElementTypeName'

const recreateWithRemoval = (array, startIndex, deleteCount = 1) =>
  array.slice(0, startIndex).concat(array.slice(startIndex + deleteCount))

export const required = expectedElementType => ({expectedElementType, required: true})

export const elementsOfType = (...expectedElementTypes) => {
  const categories = checkAndCategorize(expectedElementTypes)
  const {allExpected} = categories
  let {allRequired} = categories
  return withIsRequired(validate)

  function checkAndCategorize(expectedElementTypes) {
    return expectedElementTypes.reduce(
      (acc, t) => {
        const required = typeof t === 'object' && t.required === true
        const elementType = required ? t.expectedElementType : t

        if (typeof elementType !== 'function' && typeof elementType !== 'string') {
          throw new Error(
            `Invalid argument supplied to \`elementOfTypes\`, expected an instance of either class/function or string.`,
          )
        }

        acc.allExpected.push(elementType)
        if (required) {
          acc.allRequired.push(elementType)
        }
        return acc
      },
      {allExpected: [], allRequired: []},
    )
  }

  function validate(props, propName, componentName, location, propFullName) {
    const propValue = props[propName]
    const elements = Array.isArray(propValue) ? propValue : [propValue]

    for (const element of elements) {
      const elementType = element.type

      if (!allExpected.includes(elementType)) {
        const elementTypeList = allExpected.map(getElementTypeName).join('`, `')
        return new Error(
          `Invalid ${location} \`${propFullName}\` supplied to \`${componentName}\`, expected the following list of types: \`${elementTypeList}\`.`,
        )
      }

      const indexOfRequired = allRequired.indexOf(elementType)
      if (indexOfRequired !== -1) {
        allRequired = recreateWithRemoval(allRequired, indexOfRequired)
      }
    }

    if (allRequired.length > 0) {
      const elementTypeList = allRequired.map(getElementTypeName).join('`, `')
      return new Error(
        `Invalid ${location} \`${propFullName}\` supplied to \`${componentName}\`, required elements are missed. There is a lack of the following elements: \`${elementTypeList}\`.`,
      )
    }

    return null
  }
}
