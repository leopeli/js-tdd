/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const calc = require('../src/main');

describe('Calc', () => {
  context('Smoke tests', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist;
    });
    it('should exist the method sum', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });
    it('should exist the method sub', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });
    it('should exist the method mult', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });
    it('should exist the method div', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });
  });
  context('Sum', () => {
    it('should return 4 when sum(2, 2)', () => {
      expect(calc.sum(2, 2)).to.equal(4);
    });
    it('should return 30 when sum(10, 10, 10)', () => {
      expect(calc.sum(10, 10, 10)).to.equal(30);
    });
  });
  context('Sub', () => {
    it('should return 4 when sub(6, 2)', () => {
      expect(calc.sub(6, 2)).to.equal(4);
    });
    it('should return -10 when sub(5, 15)', () => {
      expect(calc.sub(5, 15)).to.equal(-10);
    });
  });
  context('mult', () => {
    it('should return 16 whem mult(4, 4)', () => {
      expect(calc.mult(4, 4)).to.equal(16);
    });
    it('should return 8 when mult(2, 2, 2)', () => {
      expect(calc.mult(2, 2, 2)).to.equal(8);
    });
  });
  context('Div', () => {
    it('should return 3 when div(9, 3)', () => {
      expect(calc.div(9, 3)).to.equal(3);
    });
    it('should return `Não é possivel divisão por zero` when divisor is zero', () => {
      expect(calc.div(4, 0, 2)).to.equal('Não é possivel divisão por zero');
    });
  });
});
