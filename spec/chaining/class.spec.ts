import getElement from '../../lib'

// should return div element with id of "testClassId2" (class -> id)
const testClassId1 = document.createElement('div')
testClassId1.setAttribute('class', 'testClassId1')
const testClassId2 = document.createElement('div')
testClassId2.setAttribute('id', 'testClassId2')
testClassId1.appendChild(testClassId2)
document.body.appendChild(testClassId1)

it('should return div element with id of "testClassId2" (class -> id)', () => {
  getElement('.testClassId1 #testClassId2')
})

// should return div element with class of "testClassClass2" (class -> class)
const testClassClass1 = document.createElement('div')
testClassClass1.setAttribute('class', 'testClassClass1')
const testClassClass2 = document.createElement('div')
testClassClass2.setAttribute('class', 'testClassClass2')
testClassClass1.appendChild(testClassClass2)
document.body.appendChild(testClassClass1)

it('should return div element with class of "testClassClass2" (class -> class)', () => {
  getElement('.testClassClass1 .testClassClass2')
})

// should return element with tag of "testClassTag2" (class -> tag)
const testClassTag1 = document.createElement('div')
testClassTag1.setAttribute('class', 'testClassTag1')
const testClassTag2 = document.createElement('testClassTag2')
testClassTag1.appendChild(testClassTag2)
document.body.appendChild(testClassTag1)

it('should return element with tag of "testClassTag2" (class -> tag)', () => {
  getElement('.testClassTag1 <testClassTag2')
})

// should return element with name of "testClassName2" (class -> name)
const testClassName1 = document.createElement('div')
testClassName1.setAttribute('class', 'testClassName1')
const testClassName2 = document.createElement('testClassName2')
testClassName2.setAttribute('name', 'testClassName2')
testClassName1.appendChild(testClassName2)
document.body.appendChild(testClassName1)

it('should return element with tag of "testClassName2" (class -> name)', () => {
  getElement('.testClassName1 $testClassName2')
})
