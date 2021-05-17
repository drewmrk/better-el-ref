# better-el-ref

A better way to reference HTML elements in JavaScript.

## Reasoning

Consistently calling `document.getElementById('id')` is long and tedious and adds unnecessary length to code. Not to mention, the usage of `document.querySelector('el')` is notoriously slow and so by using the `better-el-ref` package, referencing HTML elements is easy and optimized. `better-el-ref` also provides a nice way to handle elements that do not exist or are empty which keeps code DRY, especially when using TypeScript.

## Usage

There are three parameters in the `getElement()` function that `better-el-ref` provides; `element`, `method`, and `name`. Both `method` and `name` are optional but `element` is required. `element` is the string of the element that is to be referenced. `method` is the method of reference of which there are four options available, `id`, `tag`, `name`, and `class`. If the `method` parameter is left blank, the first character of `element` will be taken. If the first character of `element` is `#` or `.` it will return the appropriate reference to get the HTML element. If the first character of `element` is neither of the previous two characters, it defaults to using `document.querySelector('element')` instead. `name` is just the name of the element and is used to make debugging easier when an error is thrown.

```js
import getElement from 'better-el-ref'

getElement(element, method?, name?)
```
