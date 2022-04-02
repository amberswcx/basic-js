const {NotImplementedError} = require('../extensions/index.js');
const {assert} = require('chai');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //Given an array with heights, sort them except if the value is -1.
  for (let i = 0; i < arr.length; i++) {
    let flag = 0;
    for (let j = 0; j < arr.length - i; j++) {

      if (arr[j] === -1) continue; // skip

      let k = j + 1;

      if (arr[k] === -1) {
        while (arr[k] === -1) k++; // find next pair
      }

      if (arr[j] > arr[k]) {
        [arr[j], arr[k]] = [arr[k], arr[j]];
        flag = 1;
      }
    }
    if (flag === 0) break;
  }

  return arr;

}

module.exports = {
  sortByHeight
};
