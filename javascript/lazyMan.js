/*
 * lazyMan的几个关键点
 * 1.实现链式调用(执行每个函数时返回this，通过this来调用下一个函数)
 * 2.在链式执行函数时通过即时函数形成的闭包把每个函数的任务返回回来，然后push进任务栈
 * 3.sleep和sleepFirst都是通过返回一个定时函数(延迟任务栈中的下一个任务执行)
 *   只不过sleepFirst在将这个任务push进任务栈的时候，插了一个队，直接插到队首去了
 */
function _lazyMan (name) {
  var self = this
  self.task = []
  var fn = (function (n) {
    return function () {
      console.log('Hi ' + n + ', you are welcome')
      self.next()
    }
  })(name)
  self.task.push(fn)
  setTimeout(function () {
    self.next()
  }, 0) 
}

_lazyMan.prototype.next = function () {
  var fn = this.task.shift()
  fn()
}
 
_lazyMan.prototype.sleep = function (delay) {
  var self = this
  var fn = (function () {
    return function () {
      setTimeout(function () {
        self.next()
      }, delay)
    }
  })()
  this.task.push(fn)
  return this
}

_lazyMan.prototype.sleepFirst = function (delay) {
  var self = this
  var fn = (function () {
    return function () {
      setTimeout(function () {
        self.next()
      }, delay)
    }
  })()
  this.task.unshift(fn)
  return this
}

_lazyMan.prototype.eat = function (food) {
  var fn = (function (food) {
    return function () {
      console.log('eat ' + food)
    }
  })(food)
  this.task.push(fn)
  return this
}

function lazyMan (name) {
  return new _lazyMan(name)
}

lazyMan('sujunfei').sleepFirst(5000).eat('beaf')
