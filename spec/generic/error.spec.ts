import getElement from '../../lib'

// should throw Error (id)
it('should throw Error (id)', () => {
  expect(() => {
    getElement('#test')
  }).toThrow(Error)
})

// should throw Error (class)
it('should throw Error (class)', () => {
  expect(() => {
    getElement('.test')
  }).toThrow(Error)
})

// should throw Error (name)
it('should throw Error (name)', () => {
  expect(() => {
    getElement('$test')
  }).toThrow(Error)
})

// should throw Error (tag)
it('should throw Error (tag)', () => {
  expect(() => {
    getElement('<test')
  }).toThrow(Error)
})
