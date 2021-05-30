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

    switch (elementType) {
      case '#':
        if (i === 0) {
          el = document.getElementById(element)
        } else {
          const tempEl = valueGuard(document.getElementById(element), name)[1]
          const className = String(Math.random())
          tempEl.setAttribute('class', `${tempEl.classList} ${className}`)
          el = el.getElementsByClassName(className)
        }
        break
      case '.':
        if (i === 0) {
          el =
            elements.length === 1
              ? document.getElementsByClassName(element)
              : document.getElementsByClassName(element)[0]
        } else {
          const tempEl = valueGuard(document.getElementsByClassName(element), name)[1][0]
          const className = String(Math.random())
          tempEl.setAttribute('class', `${tempEl.classList} ${className}`)
          el = el.getElementsByClassName(className)
        }
        break
      case '<':
        if (i === 0) {
          el =
            elements.length === 1 ? document.getElementsByTagName(element) : document.getElementsByTagName(element)[0]
        } else {
          const tempEl = valueGuard(document.getElementsByTagName(element), name)[1][0]
          const className = String(Math.random())
          tempEl.setAttribute('class', `${tempEl.classList} ${className}`)
          el = el.getElementsByClassName(className)
        }
        break
      case '$':
        if (i === 0) {
          el = elements.length === 1 ? document.getElementsByName(element) : document.getElementsByName(element)[0]
        } else {
          const tempEl = valueGuard(document.getElementsByName(element), name)[1][0]
          const className = String(Math.random())
          tempEl.setAttribute('class', `${tempEl.classList} ${className}`)
          el = el.getElementsByClassName(className)
        }
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
