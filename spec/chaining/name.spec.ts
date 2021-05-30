import getElement from '../../lib'

// should return div element with id of "test" (name -> id)
const testNameId1 = document.createElement('div')
testNameId1.setAttribute('name', 'testNameId1')
const testNameId2 = document.createElement('div')
testNameId2.setAttribute('id', 'testNameId2')
testNameId1.appendChild(testNameId2)
document.body.appendChild(testNameId1)

it('should return div element with id of "testNameId2" (name -> id)', () => {
  getElement('$testNameId1 #testNameId2')
})

// should return div element with class of "test" (name -> class)
const testNameClass1 = document.createElement('div')
testNameClass1.setAttribute('name', 'testNameClass1')
const testNameClass2 = document.createElement('div')
testNameClass2.setAttribute('class', 'testNameClass2')
testNameClass1.appendChild(testNameClass2)
document.body.appendChild(testNameClass1)

it('should return div element with class of "testNameClass2" (name -> class)', () => {
  getElement('$testNameClass1 .testNameClass2')
})

// should return div element with name of "test" (name -> name)
const testNameName1 = document.createElement('div')
testNameName1.setAttribute('name', 'testNameName1')
const testNameName2 = document.createElement('div')
testNameName2.setAttribute('name', 'testNameName2')
testNameName1.appendChild(testNameName2)
document.body.appendChild(testNameName1)

it('should return div element with name of "testNameName2" (name -> name)', () => {
  getElement('$testNameName1 $testNameName2')
})

// should return element with tag of "test" (name -> tag)
const testNameTag1 = document.createElement('div')
testNameTag1.setAttribute('name', 'testNameTag1')
const testNameTag2 = document.createElement('testNameTag2')
testNameTag1.appendChild(testNameTag2)
document.body.appendChild(testNameTag1)

it('should return element with tag of "testNameTag2" (name -> tag)', () => {
  getElement('$testNameTag1 <testNameTag2')
})
