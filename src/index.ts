import setClass from './setClass'
import valueGuard from './valueGuard'

/**
 * A better way to reference HTML elements (better-el-ref)
 *
 * @param element - Element to be referenced
 * @param name - Name of the element to be referenced
 *
 * @returns HTML (element | collection)
 *
 * @example
 * import getElement from 'better-el-ref'
 * getElement('.test-element')
 */
const getElement = (element: string, name?: string) => {
  let el: any

  const elements = element.trim().split(' ')

  elements.forEach((v, i) => {
    const elementType = v[0]
    const element = v.substr(1)
    const className = String(Math.random())
    const elementsLengthIsOne = elements.length === 1
    const methods = {
      id: document.getElementById(element),
      class: document.getElementsByClassName(element),
      tag: document.getElementsByTagName(element),
      name: document.getElementsByName(element)
    }

    switch (elementType) {
      case '#':
        i === 0 ? (el = methods.id) : (el = setClass(methods.id, className, el, name, true))
        break
      case '.':
        i === 0
          ? (el = elementsLengthIsOne ? methods.class : methods.class[0])
          : (el = setClass(methods.class, className, el, name))
        break
      case '<':
        i === 0
          ? (el = elementsLengthIsOne ? methods.tag : methods.tag[0])
          : (el = setClass(methods.tag, className, el, name))
        break
      case '$':
        i === 0
          ? (el = elementsLengthIsOne ? methods.name : methods.name[0])
          : (el = setClass(methods.name, className, el, name))
        break
      default:
        throw new Error('Missing first character method identifier')
    }
  })

  if (valueGuard(el, name)[0]) {
    return el
  }
}

export default getElement
