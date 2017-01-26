import {romanReader} from './index';

describe('single values', () => {
  it('should find value of i', () => {
    expect(romanReader("i")).toBe(1);
  });
  it('should find value of v', () => {
    expect(romanReader("v")).toBe(5);
  });
  it('should find value of x', () => {
    expect(romanReader("x")).toBe(10);
  });
});

describe('added values', () => {
  it('should find value of ii', () => {
    expect(romanReader("ii")).toBe(2);
  });
  it('should find value of xx', () => {
    expect(romanReader("xx")).toBe(20);
  });
  it('should find value of viii', () => {
    expect(romanReader("viii")).toBe(8);
  });
});

describe('subtracted values', () => {
  it('should find value of iv', () => {
    expect(romanReader("iv")).toBe(4);
  });
});