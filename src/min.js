export default min
/**
 * This method return the minimum value of the list that user gave
 *
 * @param {Array} list - get the minimum value of the list
 * @returns {Number} - the minimum value of the list
 */

function __getMin(minValue, value) {
  if (value < minValue) {
    minValue = value
  }
  return minValue
}

function min(list) {
  return list.reduce(__getMin, Number.POSITIVE_INFINITY)
}
