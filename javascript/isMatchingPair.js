/*
 * 这个函数是用来检测字符串中大括号，方括号，圆括号的匹配是否合格，即(){}[]
 * 实现思路： 
 *   1.提出字符串中的所有括号
 *   2.检测括号的匹配是否正确(首尾对应index位置的括号能够形成一堆括号)
 */
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