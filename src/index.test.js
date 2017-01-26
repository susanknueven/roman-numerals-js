import {romanReader} from './index';

describe('single values', () => {
  it('should find value of i', () => {
    expect(romanReader("i")).toBe(1);
  });
  it('should find value of ii', () => {
    expect(romanReader("ii")).toBe(2);
  });
});