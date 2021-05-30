import getElement from '../../lib'

let test: any

// should return p element with id of "test"
test = document.createElement('p')
test.setAttribute('id', 'test')
document.body.appendChild(test)

it('should return p element with id of "test"', () => {
  getElement('#test')
})

// should return collection of elements with class "test"
test = document.createElement('p')
test.setAttribute('class', 'test')
document.body.appendChild(test)

it('should return collection of elements with class "test"', () => {
  getElement('.test')
})

// should return input element with name of "test"
test = document.createElement('input')
test.setAttribute('name', 'test')
document.body.appendChild(test)

it('should return input element with name of "test"', () => {
  getElement('$test')
})

// should return element with tag "test"'
test = document.createElement('test')
document.body.appendChild(test)

it('should return element with tag "test"', () => {
  getElement('<test')
})
