const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value = '') {
    this.arr.push(value);
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.arr.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1)
    return this     
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const final = this.arr.map((elem) => `( ${elem} )`).join('~~');
    this.arr = [];
    return final;
  }
};

module.exports = {
  chainMaker
};
