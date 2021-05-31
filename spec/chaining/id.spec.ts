import getElement from '../../lib'

const container = document.createElement('div')
container.innerHTML += `
  <div id="test">
    <p id="test-sub"></p>
    <p class="test-sub"></p>
    <test>
      <div id="test-1">
        <div id="test-2">
          <div id="test-3">
            <div id="test-4">
              <div id="test-5">
                <div id="test-6">
                  <div id="test-7">
                    <div id="test-8">
                      <div id="test-9">
                        <div id="test-10">
                          <p class="test-class">
                            Test
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </test>
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

//
it('should return p element with class of "multi-class" (id (depth of 12) -> class)', () => {
  getElement('#test <test #test-1 #test-2 #test-3 #test-4 #test-5 #test-6 #test-7 #test-8 #test-9 #test-10 .test-class')
})
