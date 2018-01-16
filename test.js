var test = require('tape')
var randPerm = require('./index.js')
var unique = require('uniq')

function isValid(arr) {
  var testArray = [].concat(arr)

  unique(testArray)

  if (arr.length === testArray.length) {
    for (let i = 0; i < arr.length; i++) {
      if (!(arr[i] >= 0 && arr[i] < arr.length)) {
        return false
      }
    }
    return true
  } else {
    return false
  }
}

test('test valid cases', function (t) {
  t.ok(isValid(randPerm(5)))
  t.ok(isValid(randPerm(10)))
  t.ok(isValid(randPerm(12)))
  t.ok(isValid(randPerm(3)))
  t.ok(isValid(randPerm(1)))
  t.ok(isValid(randPerm(9)))
  t.end()
})

test('test invalid cases', function (t) {
  var data1 = [3, 5, 4, 8, 2]
  t.notOk(isValid(data1))

  var data2 = [353, 555, 4, 646, 353]
  t.notOk(isValid(data2))

  var data3 = [0, 2, 1, 3, 4, 5, 5]
  t.notOk(isValid(data3))

  t.end()
})