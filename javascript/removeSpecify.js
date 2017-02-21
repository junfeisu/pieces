/*
 * 这个函数是用来数组去除指定的元素（指定元素在数组中有重复值）
 * 指定数组去重一般来说的思想就是（进行倒序遍历，这样在删除指定元素时,不会影响到其后面元素的index）
 *   如果是顺序遍历删除某个元素时，就会影响后面的元素的index
 */
function removeSpecify () {
  var hasArg =arguments.length
  var tmpArr = []
  if (hasArg) {
    tmpArr = arguments[0].slice(0)
  }
  if (hasArg > 1) {
    for (var i = tmpArr.length; i >= 0; i--) {
      for (var m = 1; m < arguments.length; m++) {
        if (tmpArr[i] === arguments[m]) {
          tmpArr.splice(i, 1)
        }
      }
    }
  }
  return tmpArr
} 

var result = removeSpecify(['a', 1, 2, 3, '1', 'a'], 'a', 1)
console.log(result)