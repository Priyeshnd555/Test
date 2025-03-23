/**
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function Add(a, b) {
  // NOTE: returns null if the arguments are not of type Number
  if(typeof a !== "number" && typeof b !== "number") return null;
  const sum = a + b;
  return sum;
}

export default Add;
