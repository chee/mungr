module.exports = function mungr(constructors) {
  function hasAll(canon, candidate) {
    let ok = true
    for (key in canon) {
      if (!candidate.hasOwnProperty(key)) {
	ok = false
      }
    }
    return ok
  }
  function check(object1, object2) {
    return hasAll(object1, object2) && hasAll(object2, object1)
  }
  return function mung(object) {
    if (!check(object, constructors)) throw 'lol sorry, this object does not match the interface'
    // this way the resultant always still matches the interface
    const resultant = Object.assign({}, object)
    for (key in constructors) {
      if (typeof object[key] != 'undefined') {
        resultant[key] = constructors[key](object[key])
      }
    }
    return resultant
  }
}

