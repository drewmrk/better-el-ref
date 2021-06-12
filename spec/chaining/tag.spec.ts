import getElement from '../../src'

const container = document.createElement('div')
container.innerHTML += `
  <testtop>
    <p id="test"></p>
    <p class="test-sub"></p>
    <test></test>
    <input name="test" />
  </testtop>
`
document.body.appendChild(container)

it('should return p element with id of "test" (tag -> id)', () => {
  getElement('<testtop #test').innerHTML('Test')
})

it('should return p element with class of "test-sub" (tag -> class)', () => {
  getElement('<testtop .test-sub').innerHTML('Test')
})

it('should return element with tag of "test" (tag -> tag)', () => {
  getElement('<testtop <test').innerHTML('Test')
})

it('should return input element with name of "test" (tag -> name)', () => {
  getElement('<testtop $test').innerHTML('Test')
})
