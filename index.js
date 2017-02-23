module.exports = mungrs => object => {
  var resultant = Object.assign({}, object)
  for (var key in mungrs) {
    if (typeof object[key] != 'undefined') {
      resultant[key] = mungrs[key](object[key])
    }
  }
  return resultant
}
