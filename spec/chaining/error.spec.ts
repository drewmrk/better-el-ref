import getElement from '../../lib'

// should throw Error (id -> id)
it('should throw Error (id -> id)', () => {
  expect(() => {
    getElement('#test #test')
  }).toThrow(Error)
})
