const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const prev = arr[i - 1];
    const current = arr[i];
    const next = arr[i + 1];
    const last = result[result.length - 1];

    if (current === '--double-next') {
      if (next) result.push(next);
    } else if (current === '--double-prev') {
      if (prev && last !== 'empty') result.push(prev);
    } else if (current === '--discard-next') {
      if (next) {
        result.push('empty');
        i++;
      }
    } else if (current === '--discard-prev') {
      if (prev && last !== 'empty') result.pop();
    } else if (last === 'empty') {
      result.pop();
      result.push(current);
    } else {
      result.push(current);

    }
  }
  return result;
}

module.exports = {
  transform
};
