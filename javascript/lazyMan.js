lazyMan('sujunfei').sleep(100).eat('beaf')

function _lazyMan () {
  this.task = []
  this.task.push()
  return 
}

_lazyMan.prototype.sayHi = function (name) {
  console.log('Hi ' + name + ', you are welcome')
}

_lazyMan.prototype.next = function () {
  this.task[0]()
  this.task.shift()
}
 
_lazyMan.prototype.sleep = function (delay) {
  var self = this
  setTimeout(function () {
    self.task[0]()
  }, delay)
}

_lazyMan.prototype.sleepFirst = function () {

}

_lazyMan.prototype.eat = function () {

}


function lazyMan () {
  return new _lazyMan()
}