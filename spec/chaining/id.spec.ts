import getElement from '../../lib'

const container = document.createElement('div')
container.innerHTML += `
  <div id="test">
    <p id="test-sub"></p>
    <p class="test-sub"></p>
    <test></test>
    <input name="test" />
  </div>
`
document.body.appendChild(container)

it('should return p element with id of "test-sub" (id -> id)', () => {
  getElement('#test #test-sub')
})

it('should return p element with class of "test-sub" (id -> class)', () => {
  getElement('#test .test-sub')
})

it('should return element with tag of "test" (id -> tag)', () => {
  getElement('#test <test')
})

it('should return input element with name of "test" (id -> name)', () => {
  getElement('#test $test')
})
