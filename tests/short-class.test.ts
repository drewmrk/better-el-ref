import getElement from '../src'

const test = document.createElement('p')
test.setAttribute('class', 'test')
document.body.appendChild(test)

it('should return collection of elements with class "test"', () => {
  getElement('.test').innerText = 'Test'
})
