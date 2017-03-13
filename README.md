# rand-perm

returns an array of random permutation efficiently(O(n))

## Usage

### Installation

```sh
  $ npm install rand-perm
```

### Examples

```js
  var randPerm = require('rand-perm')

  console.log(randPerm(3)) // [ 2, 0, 1 ]
  console.log(randPerm(3)) // [ 1, 0, 2 ]

  console.log(randPerm(4)) // [ 0, 2, 1, 3 ]
  console.log(randPerm(4)) // [ 2, 0, 1, 3 ]

  console.log(randPerm(5)) // [ 1, 0, 4, 2, 3 ] 
  console.log(randPerm(5)) // [ 2, 0, 3, 1, 4 ] 
```
### API

#### `rand-perm(n)`
returns an array with elements from 0 to n shuffled 

## License

MIT



