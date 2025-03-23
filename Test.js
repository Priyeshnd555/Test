/**
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function Add(a, b) {
  if(!Boolean(a) || Boolean(b)) return null
  if(typeof a !== "number" && typeof b !== "number") return null;
  const sum = a + b;
  return sum;
}

export default Add;
