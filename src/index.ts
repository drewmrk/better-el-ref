/**
 * getElement(): A better way to reference HTML elements (better-el-ref)
 *
 * @remarks
 * Setup three function parameters, `element`, `method`, and `name`. Create a
 * mutable variable (`el`) which will be assigned a method of referencing the
 * HTML element based on the value of `method`. If the variable `el` is `null`
 * or `undefined`, throw a `TypeError`, else check if `el` is an `object`, if it
 * is, check the length. If `el` is an object and the ength of `el` is equal to
 * zero, throw a `TypeError`. If no errors have been thrown, simply return `el`.
 *
 * @param element - Element to be referenced
 * @param method - The method of referencing the element (id|tag|name|class)
 * @param name - Name of the element to be referenced
 *
 * @returns HTML element
 *
 * @example
 * // index.html
 * <p id="test-element">Test</p>
 *
 * // index.js
 * import getElement from 'better-el-ref'
 * getElement('test-element', 'id', 'Paragraph test element')
 */
const getElement = (
  element: string,
  method?: 'id' | 'tag' | 'name' | 'class',
  name?: string
) => {
  let el: any
  switch (method) {
    case 'id':
      el = document.getElementById(element)
      break
    case 'tag':
      el = document.getElementsByTagName(element)
      break
    case 'name':
      el = document.getElementsByName(element)
      break
    case 'class':
      el = document.getElementsByClassName(element)
      break
    default:
      element[0] === '#'
        ? (el = document.getElementById(element))
        : element[0] === '.'
        ? (el = document.getElementsByClassName(element))
        : (el = document.querySelector(element))
  }
  if (el === null || el === undefined) {
    throw new TypeError(`${name || 'Element'} is ${el}`)
  } else {
    if (el instanceof Object) {
      if (Object(el).length === 0) {
        throw new TypeError(`${name || 'Element'} is empty`)
      }
    }
    return el
  }
}

export default getElement
