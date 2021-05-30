import getElement from '../../lib'

// should return div element with id of "testTagId2" (tag -> id)
const testTagId1 = document.createElement('testTagId1')
const testTagId2 = document.createElement('div')
testTagId2.setAttribute('id', 'testTagId2')
testTagId1.appendChild(testTagId2)
document.body.appendChild(testTagId1)

it('should return div element with id of "testTagId2" (tag -> id)', () => {
  getElement('<testTagId1 #testTagId2')
})

// should return div element with class of "testTagClass2" (tag -> class)
const testTagClass1 = document.createElement('testTagClass1')
const testTagClass2 = document.createElement('div')
testTagClass2.setAttribute('class', 'testTagClass2')
testTagClass1.appendChild(testTagClass2)
document.body.appendChild(testTagClass1)

it('should return div element with class of "testTagClass2" (tag -> class)', () => {
  getElement('<testTagClass1 .testTagClass2')
})

// should return element with tag of "testTagTag2" (tag -> tag)
const testTagTag1 = document.createElement('testTagTag1')
const testTagTag2 = document.createElement('testTagTag2')
testTagTag1.appendChild(testTagTag2)
document.body.appendChild(testTagTag1)

it('should return element with tag of "testTagTag2" (tag -> tag)', () => {
  getElement('<testTagTag1 <testTagTag2')
})

// should return element with name of "testTagName2" (tag -> name)
const testTagName1 = document.createElement('testTagName1')
const testTagName2 = document.createElement('testTagName2')
testTagName2.setAttribute('name', 'testTagName2')
testTagName1.appendChild(testTagName2)
document.body.appendChild(testTagName1)

it('should return element with tag of "testTagName2" (tag -> name)', () => {
  getElement('<testTagName1 $testTagName2')
})
