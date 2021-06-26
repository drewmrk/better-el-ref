import chainEl from './chainEl'
import ExtendedArray from './ExtendedArray'
import valueGuard from './valueGuard'

/**
 * A better way to reference HTML elements (better-el-ref)
 *
 * @param element - Element to be referenced
 *
 * @returns HTML (element | collection)
 *
 * @example
 * import getElement from 'better-el-ref'
 * getElement('.test-element')
 */
const getElement = (element: string) => {
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

    const configureChainEl = (
      method:
        | HTMLElement
        | HTMLCollectionOf<Element>
        | NodeListOf<HTMLElement>
        | null,
      id?: boolean
    ) => {
      return chainEl(method, className, el, element, i, elements.length, id)
    }

    switch (elementType) {
      case '#':
        i === 0 ? (el = methods.id) : (el = configureChainEl(methods.id, true))
        break
      case '.':
        i === 0
          ? (el = elementsLengthIsOne ? methods.class : methods.class[0])
          : (el = configureChainEl(methods.class))
        break
      case '<':
        i === 0
          ? (el = elementsLengthIsOne ? methods.tag : methods.tag[0])
          : (el = configureChainEl(methods.tag))
        break
      case '$':
        i === 0
          ? (el = elementsLengthIsOne ? methods.name : methods.name[0])
          : (el = configureChainEl(methods.name))
        break
      default:
        throw new Error(`Missing element ${i + 1} method identifier`)
    }
  })

  const newArray = new ExtendedArray(el as any)

  if (el instanceof HTMLCollection || el instanceof NodeList) {
    return newArray
  } else {
    return valueGuard(el, element)
  }
}

export default getElement
