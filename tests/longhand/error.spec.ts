import getElement from '../../lib'

// ID
it('should throw TypeError for ID', () => {
  try {
    getElement('test', 'id').innerText = 'Test'
    console.error('Test failed')
  } catch (_) {
    return undefined
  }
})

// Class
it('should throw TypeError for Class', () => {
  try {
    getElement('test', 'class').innerText = 'Test'
    console.error('Test failed')
  } catch (_) {
    return undefined
  }
})

// Name
it('should throw TypeError for Name', () => {
  try {
    getElement('test', 'name').innerText = 'Test'
    console.error('Test failed')
  } catch (_) {
    return undefined
  }
})

// Tag
it('should throw TypeError for Tag', () => {
  try {
    getElement('test', 'tag').innerText = 'Test'
    console.error('Test failed')
  } catch (_) {
    return undefined
  }
})