import {NotImplementedError} from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  const result = {
    turns: 1,
    seconds: 0
  }

  for (let i = 1; i < disksNumber; i++) {
    result.turns = result.turns * 2 + 1;
  }

  result.seconds = Math.floor(result.turns / turnsSpeed * 3600);

  return result;
}