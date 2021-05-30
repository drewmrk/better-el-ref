import getElement from '../lib'

let test
let test2

// ID Class
test = document.createElement('div')
test.setAttribute('id', 'test')
test2 = document.createElement('p')
test2.setAttribute('class', 'test')
test.appendChild(test2)
document.body.appendChild(test)

it('should return nested collection of elements with class "test"', () => {
  getElement('#test .test').innerText = 'Test'
})

// ID Tag
test = document.createElement('div')
test.setAttribute('id', 'test')
test2 = document.createElement('test')
test.appendChild(test2)
document.body.appendChild(test)

it('should return nested collection of elements with tag "test"', () => {
  getElement('#test <test').innerText = 'Test'
})
