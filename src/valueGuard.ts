const valueGuard = (el: any, name?: string) => {
  const elementName = name ?? 'Element'

  if (el === null || el === undefined) {
    throw new Error(`${elementName} is ${el}`)
  } else {
    if (el instanceof HTMLCollection || el instanceof NodeList) {
      if (el.length === 0) {
        throw new Error(`${elementName} is empty`)
      }
    }
    return [true, el]
  }
}

export default valueGuard
