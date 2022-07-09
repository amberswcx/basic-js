const { NotImplementedError } = require('../extensions/index.js');

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