import ExtendedArray from './ExtendedArray'
import valueGuard from './valueGuard'

/**
 * Chain elements (better-el-ref)
 *
 * @param method - Method for referencing the element
 * @param className - Class to be appended to the element
 * @param el - Element to be chained
 * @param name - Name of element being referenced
 * @param id - Check if element referenced is an id
 * @returns Chained element
 */
const chainEl = (method: any, className: string, el: any, name: string, index: number, len: number, id?: boolean) => {
  const tempEl = id ? valueGuard(method, name) : valueGuard(method, name)[0]
  tempEl.setAttribute('class', `${tempEl.classList} ${className}`)
  if (index + 1 === len) {
    return new ExtendedArray(el.getElementsByClassName(className))
  } else {
    return el.getElementsByClassName(className)[0]
  }
}

export default chainEl
