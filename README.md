# better-el-ref

A better way to reference HTML elements in JavaScript.

## Reasoning

Consistently calling `document.getElementById('id')` is long and tedious and adds unnecessary length to code. Not to mention, the usage of `document.querySelector('el')` is notoriously slow and so by using the `better-el-ref` package, referencing HTML elements is easy and optimized. `better-el-ref` also provides a nice way to handle elements that do not exist or are empty which keeps code DRY, especially when using TypeScript.

## Usage/Examples

```js
import getElement from 'better-el-ref'

getElement(element, name?)

/* Shorthand */
getElement('#element') // ID
getElement('.element') // Class
getElement('<element') // Tag
getElement('$element') // Name

/* Chaining */
getElement('#element .element') // Nested class
getElement('#element <element') // Nested tag
```
