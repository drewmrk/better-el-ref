/**
 * A better way to reference HTML elements (better-el-ref)
 *
 * @param element - Element to be referenced
 * @param name - Name of the element to be referenced
 *
 * @returns HTML element
 *
 * @example
 * import getElement from 'better-el-ref'
 * getElement('.test-element')
 */
const getElement = (element: string, name?: string) => {
  let el: any

  element = element.trim()

  if (element.includes(' ')) {
    const elements = element.split(' ')

    elements.forEach((v, i) => {
      const elementTempType = v[0]
      const elementTemp = v.substr(1)

      if (i === 0) {
        switch (elementTempType) {
          case '#':
            el = document.getElementById(elementTemp)
            break
          case '.':
            throw new Error('Chaining class is not currently supported')
          case '<':
            throw new Error('Chaining a tag is not currently supported')
          case '$':
            throw new Error('Chaining a name is not currently supported')
          default:
            throw new Error('Missing first character method identifier')
        }
      } else {
        switch (elementTempType) {
          case '#':
            throw new Error('Chaining an ID is not currently supported')
          case '.':
            el = el.getElementsByClassName(elementTemp)
            break
          case '<':
            el = el.getElementsByTagName(elementTemp)
            break
          case '$':
            throw new Error('Chaining a name is not currently supported')
          default:
            throw new Error('Missing first character method identifier')
        }
      }
    })

    return el
  } else {
    const elementType = element[0]
    element = element.substr(1)

    const methods = {
      id: document.getElementById(element),
      className: document.getElementsByClassName(element),
      tag: document.getElementsByTagName(element),
      name: document.getElementsByName(element)
    }

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
        throw new Error('Missing first character method identifier')
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
}

export default getElement
