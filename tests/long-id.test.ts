import getElement from '../src'

const test = document.createElement('p')
test.setAttribute('id', 'test')
document.body.appendChild(test)

it('should return p element with id of "test"', () => {
  getElement('test', 'id').innerText = 'Test'
})
