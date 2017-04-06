function judgeType (obj) {
  return Object.prototype.toString.call(obj)
}

function isArray (arr) {
  return judgeType(arr) === '[object Array]'
}

function isStaictObject (obj) {
  return judgeType(obj) === '[object Object]'
}

function deepCopy (source, dest) {
  if (!isArray(source) && !isStaictObject(source)) {
    throw 'the source you support can not be copied'
  }

  var copySource = isArray(source) ? [] : {}
  for (var prop in source) {
    if (source.hasOwnProperty(prop)) {
      if (isArray(source[prop]) || isStaictObject(source[prop])) {
        copySource[prop] = deepCopy(source[prop])
      } else {
        copySource[prop] = source[prop]
      }
    }
  }

  return copySource
}

var testObj = {
  name: 'sujunfei',
  obj: {
    attr: '123',
    method: function () {
      console.log('123')
    }
  },
  arr: [1, 2, [3, 4]]
}

var copyObj = deepCopy('123')
copyObj.name = 'jinjingjing'
copyObj.obj.attr = '234'
copyObj.arr[2] = 3
console.log(copyObj)
console.log(testObj)