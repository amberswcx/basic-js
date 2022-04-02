const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  isChainCreated() {
    if (!this.chain) this.chain = [];
  },
  getLength() {
    return this.chain.length;
  },
  addLink(...value) {
    this.isChainCreated();

    if (value.length !== 0) {
      this.chain.push(`( ${value[0]} )`);
    } else {
      this.chain.push(`( )`);
    }
    return chainMaker;
  },
  removeLink(position) {
    this.isChainCreated();

    if (!Number.isFinite(position) || !Number.isInteger(position) || position < 1 || position > this.chain.length) {
      delete this.chain;
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    this.isChainCreated();

    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    const resultChain = this.chain.join('~~');
    delete this.chain;
    return resultChain;
  }
};

module.exports = {
  chainMaker
};
