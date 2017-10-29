const ANONYMOUS = '<<anonymous>>'

// See https://github.com/facebook/prop-types/blob/master/factoryWithTypeCheckers.js#L148
export default function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName, ...restArgs) {
    componentName = componentName || ANONYMOUS
    propFullName = propFullName || propName

    if (props[propName] == null) {
      if (isRequired) {
        return new Error(
          `The ${location} \`${propFullName}\` is marked as required in \`${componentName}\`, but its value is \`${props[
            propName
          ]}\`.`,
        )
      }
      return null
    } else {
      return validate(props, propName, componentName, location, propFullName, ...restArgs)
    }
  }

  const chainedCheckType = checkType.bind(null, false)
  chainedCheckType.isRequired = checkType.bind(null, true)

  return chainedCheckType
}
