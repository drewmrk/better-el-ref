import getElement from '../../src'

const container = document.createElement('div')
container.innerHTML += `
  <div class="test">
    <p id="test"></p>
    <p class="test-sub">T</p>
    <test></test>
    <input name="test" />
  </div>
`
document.body.appendChild(container)

it('should return p element with id of "test" (class -> id)', () => {
  getElement('.test #test').innerHTML('Test')
})

it('should set p element with class of "test" (class -> class)', () => {
  getElement('.test .test-sub').innerHTML('Test')
  Array.from(document.getElementsByClassName('test-sub')).forEach(i => {
    if (i.innerHTML !== 'Test') {
      throw Error(`${console.error(i.innerHTML)}`)
    }
  })
})

it('should return element with tag of "test" (class -> tag)', () => {
  getElement('.test <test').innerHTML('Test')
})

it('should return input element with name of "test" (class -> name)', () => {
  getElement('.test $test').innerHTML('Test')
})
