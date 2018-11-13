function Promise (func) {
  var self = this
  self.data = null
  self.reason = null
  self.status = 'pending'
  self.resolvedCb = []
  self.rejectedCb = []

  function resolve (data) {
    if (self.status === 'pending') {
      self.status = 'resolved'
      self.data = data

      for (let i = 0; i < resolvedCb.length; i++) {
        resolvedCb[i](data)
      }
    }
  }

  function reject (reason) {
    if (self.status === 'pending') {
      self.status = 'rejected'
      self.reason = reason

      for (let i = 0; i < rejectedCb.length; i++) {
        rejectedCb[i](reason)
      }
    }
  }

  func(resolve, reject)
}

Promise.prototype.then = function (onResolved, onRejected) {
  var self = this

  if (self.status === 'pending') {
    return
  }

  if (self.status === 'resolved') {
    return new Promise(function (resolve, reject) {
      try {
        var x = onResolved(self.data)

        if (x instanceof Promise) {
          x.then(resolve, reject)
        }

        resolve(x)
      } catch (e) {
        reject(e)        
      }
    })
  }

  if (self.status === 'rejected') {
    return new Promise(function (resolve, reject) {
      try {
        var x = onRejected(self.reason)

        if (x instanceof Promise) {
          x.then(resolve, reject)
        }

        reject(x)
      } catch (e) {
        reject(e)
      }
    })
  }
}