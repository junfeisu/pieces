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