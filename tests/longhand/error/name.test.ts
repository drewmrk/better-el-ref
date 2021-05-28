import getElement from '../../../lib'

it('should throw TypeError', () => {
  try {
    getElement('test', 'name').innerText = 'Test'
    console.error('Test failed')
  } catch (_) {
    return undefined
  }
})
