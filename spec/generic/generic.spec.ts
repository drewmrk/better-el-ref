import getElement from '../../src'

const container = document.createElement('div')
container.innerHTML += `
  <p id="test"></p>
  <p class="test">Hello</p>
  <div class="test"></div>
  <input name="test" />
  <test></test>
`
document.body.appendChild(container)

it('should return p element with id of "test"', () => {
  getElement('#test').innerText = 'Test'
  if (document.getElementById('test')?.innerText !== 'Test') {
    return false
  }
})

it('should return collection of elements with class "test"', () => {
  getElement('.test').innerHTML(`
<p>Test</p>
`)
})

it('should return input element with name of "test"', () => {
  getElement('$test').innerHTML('Test')
})

it('should return element with tag "test"', () => {
  getElement('<test').innerHTML('Test')
})
