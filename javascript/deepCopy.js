function judgeType (obj) {
  return Object.prototype.toString.call(obj)
}

function deepCopy (obj) {
  var copyObj = {}
  var objType = judgeType(obj)
  if (objType !== '[object Object]' && objType !== '[object Array]') {
    return {}
  }
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      var propType = judgeType(obj[prop])
      if (propType === '[object Object]' || propType === '[object Array]') {
        copyObj[prop] = deepCopy(obj[prop])
      }
      copyObj[prop] = obj[prop]
    }
  }
  return copyObj
}

var testObj = {
  name: 'sujunfei',
  obj: {
    attr: 'test',
    method: function () {
      console.log('123')
    }
  },
  arr: [1, 2, [3, 4]]
}
