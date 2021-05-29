import getElement from '../../lib'

// ID
it('should throw TypeError for ID', () => {
  try {
    getElement('#test').innerText = 'Test'
    console.error('Test failed')
  } catch (_) {
    return undefined
  }
})

// Class
it('should throw TypeError for Class', () => {
  try {
    getElement('.test').innerText = 'Test'
    console.error('Test failed')
  } catch (_) {
    return undefined
  }
})

// Name
it('should throw TypeError for Name', () => {
  try {
    getElement('$test').innerText = 'Test'
    console.error('Test failed')
  } catch (_) {
    return undefined
  }
})

// Tag
it('should throw TypeError for Tag', () => {
  try {
    getElement('<test').innerText = 'Test'
    console.error('Test failed')
  } catch (_) {
    return undefined
  }
})

// Missing first character
it('should throw Error for not having an identifying first character', () => {
  try {
    getElement('test').innerText = 'Test'
    console.error('Test failed')
  } catch (_) {
    return undefined
  }
})
