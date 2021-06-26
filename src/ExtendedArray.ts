/**
 * T
 */
class HTMLElements extends Array<HTMLCollection> {
  /**
   * `innerHTML`
   * @param content
   * @param append
   * @returns
   */
  innerHTML(content?: any, append?: 'a') {
    const data: any[] = []
    this.forEach((htmlCollection: HTMLCollection) => {
      ;[...htmlCollection].forEach((el: Element) => {
        content
          ? append === 'a'
            ? (el.innerHTML += content)
            : (el.innerHTML = content)
          : data.push(el.innerHTML)
      })
    })

    if (!content) {
      return data
    }
  }

  /**
   *
   * @param content
   * @param append
   * @returns
   */
  textContent(content?: any, append?: 'a') {
    const data: any[] = []
    this.forEach((htmlCollection: HTMLCollection) => {
      ;[...htmlCollection].forEach((el: Element) => {
        content
          ? append === 'a'
            ? (el.textContent += content)
            : (el.textContent = content)
          : data.push(el.textContent)
      })
    })

    if (!content) {
      return data
    }
  }
}

export default HTMLElements
