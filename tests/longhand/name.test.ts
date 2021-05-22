import getElement from '../../src'

const test = document.createElement('input')
test.name = 'test'
document.body.appendChild(test)

it('should return input element with name of "test"', () => {
  getElement('test', 'name').innerText = 'Test'
})
