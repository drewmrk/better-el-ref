/**
 * Extended class (extends `Array`) for better manipulation of HTML elements
 */
class HTMLElements extends Array<HTMLCollection> {
  /**
   * `innerHTML`
   *
   * @param content - Content
   * @param append - Option to append `content`
   *
   * @returns Array containing `innerHTML` data for elements in the array
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
   * `textContent`
   *
   * @param content - Content
   * @param append - Option to append `content`
   *
   * @returns Array containing `textContent` data for elements in the array
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
