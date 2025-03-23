/**
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
function Add(a, b) {
  // TODO : add comment for below code
  if(typeof a !== "number" && typeof b !== "number") return;
  const sum = a + b;
  return sum;
}

export default Add;
