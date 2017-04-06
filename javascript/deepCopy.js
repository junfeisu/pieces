function judgeType (obj) {
  return Object.prototype.toString.call(obj)
}

function isArray (arr) {
  return judgeType(arr) === '[object Array]'
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isStaictObject (obj) {
  return judgeType(obj) === '[object Object]'
}

function deepCopy (source, dest, sourceStack, destStack) {
  if (!dest) {
    dest = source
    if (isArray(source)) {
      dest = deepCopy(source, [], sourceStack, destStack)
    } else if (isStaictObject(source)) {
      dest = deepCopy(source, {}, sourceStack, destStack)
    }
    console.log('dest is ' + JSON.stringify(dest))
  } else {
    sourceStack = sourceStack || []
    destStack = destStack || []

    var result
    if (isArray(source)) {
      dest.length = 0;
      for (var i = 0; i < source.length; i++) {
        result = deepCopy(source[i], null, sourceStack, destStack)
        dest.push(result)
      }
    } else {
      for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
          result = deepCopy(source[prop], null, sourceStack, destStack)
          dest[prop] = result
        }
      }
    }
    
  }
  return dest
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

var copyObj = deepCopy(testObj)
copyObj.name = 'jinjingjing'
copyObj.obj.attr = '234'
copyObj.arr[2] = 3
console.log(copyObj)
console.log(testObj)