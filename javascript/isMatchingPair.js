function isMatchingPair (str) {
  let reg = /[\{\}\(\)\[\]]/g
  var matchReg = /(\{\}|\(\)|\[\])/
  let tmpStr = ''
  if (str.match(reg)) {
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(reg)) {
        tmpStr += str[i]
      }
    }
    let tmpStrLen = tmpStr.length
    for (let m = 0; m < tmpStrLen / 2; m++) {
      if (!matchReg.test(tmpStr[m] + tmpStr[tmpStrLen - 1 - m])) {
        return false
      }
    }
    return true
  }
  return true
}

isMatchingPair('(strx){[xx]') // return false
isMatchingPair('(strx{}xx)') // return true