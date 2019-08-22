/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import {
  sum,
  sub,
  mult,
  div,
} from '../src/main';

describe('Calc', () => {
  context('Smoke tests', () => {
    it('should exist the method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });
    it('should exist the method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });
    it('should exist the method mult', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });
    it('should exist the method div', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });
  context('Sum', () => {
    it('should return 4 when sum(2, 2)', () => {
      expect(sum(2, 2)).to.equal(4);
    });
    it('should return 30 when sum(10, 10, 10)', () => {
      expect(sum(10, 10, 10)).to.equal(30);
    });
  });
  context('Sub', () => {
    it('should return 4 when sub(6, 2)', () => {
      expect(sub(6, 2)).to.equal(4);
    });
    it('should return -10 when sub(5, 15)', () => {
      expect(sub(5, 15)).to.equal(-10);
    });
  });
  context('mult', () => {
    it('should return 16 whem mult(4, 4)', () => {
      expect(mult(4, 4)).to.equal(16);
    });
    it('should return 8 when mult(2, 2, 2)', () => {
      expect(mult(2, 2, 2)).to.equal(8);
    });
  });
  context('Div', () => {
    it('should return 3 when div(9, 3)', () => {
      expect(div(9, 3)).to.equal(3);
    });
    it('should return `Não é possivel divisão por zero` when divisor is zero', () => {
      expect(div(4, 0, 2)).to.equal('Não é possivel divisão por zero');
    });
  });
});
