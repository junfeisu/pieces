function asyncOneByOne (arr) {
  if (!arr instanceof Array) {
    console.error('传入的参数不是一个数组')
    return
  }
  function callback () {
    var hasNext = arr.length !== 0 
    if (hasNext) {
      arr.shift().call(null, callback)
    } else {
      console.log('done')
    }
  }
  callback()
}


function one(callback) {
  setTimeout(function (){
    console.log('first')
    callback()
  }, 2000)
}

function two(callback) {
  setTimeout(function (){
    console.log('second')
    callback()
  }, 0)
}

asyncOneByOne([one, two])