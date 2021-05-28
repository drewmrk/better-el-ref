import getElement from '../../../lib'

it('should throw TypeError', () => {
  try {
    getElement('test', 'class').innerText = 'Test'
    console.error('Test failed')
  } catch (_) {
    return undefined
  }
})
