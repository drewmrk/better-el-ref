import valueGuard from './valueGuard'

const setClass = (method: any, className: string, el: any, name?: string, id?: boolean) => {
  const tempEl = id ? valueGuard(method, name)[1] : valueGuard(method, name)[1][0]
  tempEl.setAttribute('class', `${tempEl.classList} ${className}`)
  return el.getElementsByClassName(className)[0]
}

export default setClass
