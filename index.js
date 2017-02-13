function hasAll(candidate, canon) {
  let ok = true
  for (key in canon) {
    if (!candidate.hasOwnProperty(key)) {
      ok = false
    }
  }
  return ok
}

module.exports = mungrs => object => {
  const resultant = Object.assign({}, object)
  for (key in mungrs) {
    if (typeof object[key] != 'undefined') {
      resultant[key] = mungrs[key](object[key])
    }
  }
  return resultant
}

