import {backspace, calculate, handleClick, reset} from "./logic";

describe('business logic', () => {
  it('should return an empty string', () => {
    expect(reset()).toEqual('');
  });

  it('should remove the last character of the results string', () => {
    expect(backspace('1234')).toEqual('123');
  });

  describe('calculate', () => {
    it('should add when double negative is passed', () => {
      expect(calculate('1--1')).toEqual('2');
    });

    it('should return error on invalid operation', () => {
      expect(calculate('1+*-1')).toEqual('error');
    });

    it('should fallback to string on invalid eval', () => {
      expect(calculate('**&^%')).toEqual('error');
    });
  });

  describe('handleClick', () => {
    it('should return result on "="', () => {
      expect(handleClick('=', '1+1')).toEqual('2');
    });

    it('should reset on "C"', () => {
      expect(handleClick('C', '1+1')).toEqual('');
    });

    it('should remove last char on "CE"', () => {
      expect(handleClick('CE', '1+1+1')).toEqual('1+1+');
    });

    it('should return updated input', () => {
      expect(handleClick('1', '1+1+')).toEqual('1+1+1');
    });
  });
});