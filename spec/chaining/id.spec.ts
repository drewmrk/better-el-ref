import getElement from '../../lib'

// should return div element with id of "test" (id -> id)
const testIdId1 = document.createElement('div')
testIdId1.setAttribute('id', 'testIdId1')
const testIdId2 = document.createElement('div')
testIdId2.setAttribute('id', 'testIdId2')
testIdId1.appendChild(testIdId2)
document.body.appendChild(testIdId1)

it('should return div element with id of "testIdId2" (id -> id)', () => {
  getElement('#testIdId1 #testIdId2')
})

// should return div element with class of "test" (id -> class)
const testIdClass1 = document.createElement('div')
testIdClass1.setAttribute('id', 'testIdClass1')
const testIdClass2 = document.createElement('div')
testIdClass2.setAttribute('class', 'testIdClass2')
testIdClass1.appendChild(testIdClass2)
document.body.appendChild(testIdClass1)

it('should return div element with class of "testIdClass2" (id -> class)', () => {
  getElement('#testIdClass1 .testIdClass2')
})

// should return div element with name of "test" (id -> name)
const testIdName1 = document.createElement('div')
testIdName1.setAttribute('id', 'testIdName1')
const testIdName2 = document.createElement('div')
testIdName2.setAttribute('name', 'testIdName2')
testIdName1.appendChild(testIdName2)
document.body.appendChild(testIdName1)

it('should return div element with name of "testIdName2" (id -> name)', () => {
  getElement('#testIdName1 $testIdName2')
})

// should return element with tag of "test" (id -> tag)
const testIdTag1 = document.createElement('div')
testIdTag1.setAttribute('id', 'testIdTag1')
const testIdTag2 = document.createElement('testIdTag2')
testIdTag1.appendChild(testIdTag2)
document.body.appendChild(testIdTag1)

it('should return element with tag of "testIdTag2" (id -> tag)', () => {
  getElement('#testIdTag1 <testIdTag2')
})
