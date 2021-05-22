import getElement from '../../src'

const test = document.createElement('test')
document.body.appendChild(test)

it('should return p element with id of "test"', () => {
  getElement('test', 'tag').innerText = 'Test'
})
