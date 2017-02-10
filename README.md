# mungr

get mungr

```js
const mungr = require('mungr')
```

make a mungr

```js
productMungr = mungr({
  name: String,
  price: Number
})
```

use it

```js
const products = [{name: 'dog', price: '22'}, {name: 'lollipop', price: '5'}]
return products.map(productMungr) // [{name: 'dog', price: 22}, {name: 'lollipop', price: 5}]
```

whatever


