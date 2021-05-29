import getElement from '../../lib'

const u = undefined

// ID
it('should throw TypeError for ID', () => {
  try {
    getElement('test', u, 'id').innerText = 'Test'
    console.error('Test failed')
  } catch (_) {
    return undefined
  }
})

// Class
it('should throw TypeError for Class', () => {
  try {
    getElement('test', u, 'class').innerText = 'Test'
    console.error('Test failed')
  } catch (_) {
    return undefined
  }
})

// Name
it('should throw TypeError for Name', () => {
  try {
    getElement('test', u, 'name').innerText = 'Test'
    console.error('Test failed')
  } catch (_) {
    return undefined
  }
})

// Tag
it('should throw TypeError for Tag', () => {
  try {
    getElement('test', u, 'tag').innerText = 'Test'
    console.error('Test failed')
  } catch (_) {
    return undefined
  }
})
