const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
// array of domains (domains)
// and returns the object with the appearances of the DNS.

  let appearancesOfDNS = {};

  domains.forEach(domain => {
    const domainList = domain.split('.');
    let dns = '';

    for (let i = domainList.length - 1; i >= 0; i--) {
      dns += '.' + domainList[i];
      if (!(dns in appearancesOfDNS)) {
        appearancesOfDNS[dns] = 1;
      } else {
        appearancesOfDNS[dns]++;
      }
    }
  });

  return appearancesOfDNS;
}

module.exports = {
  getDNSStats
};