import getElement from '../../lib'

const container = document.createElement('div')
container.innerHTML += `
  <p id="test"></p>
  <p class="test"></p>
  <input name="test" />
  <test></test>
`
document.body.appendChild(container)

it('should return p element with id of "test"', () => {
  getElement('#test').innerText = 'Test'
})

it('should return collection of elements with class "test"', () => {
  getElement('.test').innerText = 'Test'
})

it('should return input element with name of "test"', () => {
  getElement('$test').innerText = 'Test'
})

it('should return element with tag "test"', () => {
  getElement('<test').innerText = 'Test'
})
