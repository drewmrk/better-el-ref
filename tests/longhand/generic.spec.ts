import getElement from '../../lib'

const u = undefined

let test

// ID
test = document.createElement('p')
test.setAttribute('id', 'test')
document.body.appendChild(test)

it('should return p element with id of "test"', () => {
  getElement('test', u, 'id').innerText = 'Test'
})

// Class
test = document.createElement('p')
test.setAttribute('class', 'test')
document.body.appendChild(test)

it('should return collection of elements with class test"', () => {
  getElement('test', u, 'class').innerText = 'Test'
})

// Name
test = document.createElement('input')
test.name = 'test'
document.body.appendChild(test)

it('should return input element with name of "test"', () => {
  getElement('test', u, 'name').innerText = 'Test'
})

// Tag
test = document.createElement('test')
document.body.appendChild(test)

it('should return "test" element', () => {
  getElement('test', u, 'tag').innerText = 'Test'
})
