export default function getElementTypeName(elementType) {
  if (typeof elementType === 'function') {
    return elementType.name
  }
  return elementType
}
