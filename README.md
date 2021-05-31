# better-el-ref

A better way to reference HTML elements in JavaScript.

## Reasoning

Consistently calling `document.getElementById('id')` is long and tedious and adds unnecessary length to code. Not to mention, the usage of `document.querySelector('el')` is notoriously slow and so by using the `better-el-ref` package, referencing HTML elements is easy and optimized. `better-el-ref` also provides a nice way to handle elements that do not exist or are empty which keeps code DRY, especially when using TypeScript.

## Usage/Examples

```html
<!-- Generic -->
<div id="element"></div>

<div class="element"></div>

<element></element>

<input name="element" />

<!-- Chaining -->
<div id="element-1">
  <p class="element-1"></p>
</div>

<input name="element-1">
  <elementT></elementT>
</input>

<div id="test">
  <test>
    <div id="test-1">
      <div id="test-2">
        <div id="test-3">
          <div id="test-4">
            <p class="test-class"></p>
          </div>
        </div>
      </div>
    </div>
  </test>
</div>
```

```js
import getElement from 'better-el-ref'

getElement(element, name?)

/* Generic */
getElement('#element') // ID
getElement('.element') // Class
getElement('<element') // Tag
getElement('$element') // Name

/* Chaining */
getElement('#element-1 .element-1') // Nested class
getElement('$element-1 <elementT') // Nested tag
getElement('#test <test #test-1 #test-2 #test-3 #test-4 .test-class') // Nested class
```
