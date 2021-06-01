import getElement from '../../lib'

const container = document.createElement('div')
container.innerHTML += `
  <div name="test">
    <p id="test"></p>
    <p class="test-sub"></p>
    <test></test>
    <input name="test-sub" />
  </div>
`
document.body.appendChild(container)

it('should return p element with id of "test-sub" (name -> id)', () => {
  getElement('$test #test').innerText = 'Test'
})

it('should return p element with class of "test" (name -> class)', () => {
  getElement('$test .test-sub').innerText = 'Test'
})

it('should return element with tag of "test" (name -> tag)', () => {
  getElement('$test <test').innerText = 'Test'
})

it('should return input element with name of "test" (name -> name)', () => {
  getElement('$test $test-sub').innerText = 'Test'
})
