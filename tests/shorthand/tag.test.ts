import getElement from '../../src'

const test = document.createElement('test')
document.body.appendChild(test)

it('should return "test" element', () => {
  getElement('<test').innerText = 'Test'
})
