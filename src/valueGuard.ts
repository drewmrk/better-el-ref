/**
 * Check to make sure an element is not null, undefined, or empty
 *
 * @param el - Element to be referenced
 * @param name - Name of element to be referenced
 * @returns Element
 */
const valueGuard = (el: any, name: string) => {
  if (el === null || el === undefined) {
    throw new Error(`${name} is ${el}`)
  } else {
    if (el instanceof HTMLCollection || el instanceof NodeList) {
      if (el.length === 0) {
        throw new Error(`${name} is empty`)
      }
    }
    return el
  }
}

export default valueGuard
