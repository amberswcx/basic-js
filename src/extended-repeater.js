const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
//  str is a string to repeat;
// options is an object of options, that contains properties:
// repeatTimes sets the number of repetitions of the str;
// separator is a string separating repetitions of the str;

// addition is an additional string that will be added to each repetition of the str;
// additionRepeatTimes sets the number of repetitions of the addition;
// additionSeparator is a string separating repetitions of the addition.

  let {repeatTimes = '1', separator = '+', addition = '', additionRepeatTimes = '1', additionSeparator = '|'} = options;
  let resultStr = '';
  if (typeof str !== 'string') str = String(str);
  for (let i = 1; i <= repeatTimes; i++) {
    resultStr += str;
    for (let j = 1; j <= additionRepeatTimes; j++) {
      resultStr += addition;
      if (j < additionRepeatTimes) resultStr += additionSeparator;
    }
    if (i < repeatTimes) resultStr += separator;
  }

  return resultStr;
}

module.exports = {
  repeater
};


// console.log(repeater('STRING', {repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00'})==='STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS');