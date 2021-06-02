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
const chainEl = (method: any, className: string, el: any, name: string, id?: boolean) => {
  const tempEl = id ? valueGuard(method, name) : valueGuard(method, name)[0]
  tempEl.setAttribute('class', `${tempEl.classList} ${className}`)
  return el.getElementsByClassName(className)[0]
}

export default chainEl
