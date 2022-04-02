const {NotImplementedError} = require('../extensions/index.js');
const {assert} = require('chai');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let prev = str[0];
  let count = 1;
  let resultStr = '';

  const addStr = (n, x) => {
    resultStr += (count > 1) ? n + x : x;
  };

  for (let i = 1; i < str.length + 1; i++) {
    if (str[i] === prev) {
      count++;
    } else if (i === str.length) {
      addStr(count, prev);
    } else {
      addStr(count, prev);
      prev = str[i];
      count = 1;
    }
  }

  return resultStr;
}

module.exports = {
  encodeLine
};
