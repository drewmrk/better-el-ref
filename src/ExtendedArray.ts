class ExtendedArray {
  content: any

  constructor(content: any) {
    this.content = content
  }

  /**
   * `innerHTML`
   * @param HTMLContent - Content to be used
   * @param append - Whether or not to append, or replace content
   */
  innerHTML(HTMLContent: any, append?: 'a') {
    [...this.content].forEach((i: HTMLElement) => {
      append === 'a' ? i.innerHTML += HTMLContent : i.innerHTML = HTMLContent
    })
  }
}

export default ExtendedArray
