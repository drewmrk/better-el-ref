/**
 * A better way to reference HTML elements (better-el-ref)
 *
 * @param element - Element to be referenced
 * @param name - Name of the element to be referenced
 * @param method - The method of referencing the element (id|tag|name|class)
 *
 * @returns HTML element
 *
 * @example
 * import getElement from 'better-el-ref'
 * getElement('.test-element')
 */
const getElement = (
  element: string,
  name?: string,
  method?: 'id' | 'tag' | 'name' | 'class'
) => {
  const elementType = element[0]
  !method && (element = element.substr(1))

  const methods = {
    id: document.getElementById(element),
    className: document.getElementsByClassName(element),
    tag: document.getElementsByTagName(element),
    name: document.getElementsByName(element)
  }

  let el: any
  switch (method) {
    case 'id':
      el = methods.id
      break
    case 'class':
      el = methods.className
      break
    case 'tag':
      el = methods.tag
      break
    case 'name':
      el = methods.name
      break
    default:
      switch (elementType) {
        case '#':
          el = methods.id
          break
        case '.':
          el = methods.className
          break
        case '<':
          el = methods.tag
          break
        case '$':
          el = methods.name
          break
        default:
          document.querySelector(element)
      }
  }

  const elementName = name ?? 'Element'

  if (el === null || el === undefined) {
    throw new TypeError(`${elementName} is ${el}`)
  } else {
    if (el instanceof HTMLCollection || el instanceof NodeList) {
      if (el.length === 0) {
        throw new TypeError(`${elementName} is empty`)
      }
    }
    return el
  }
}

export default getElement
