module.exports = function(mungrs) {
  return function(object) {
    var resultant = Object.assign({}, object)
    for (var key in mungrs) {
      if (key in object) {
        resultant[key] = mungrs[key](object[key])
      }
    }
    return resultant
  }
}
