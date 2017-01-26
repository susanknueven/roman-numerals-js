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
  it('should find value of mmlvii', () => {
    expect(romanReader("mmlvii")).toBe(2057);
  });
});

describe('subtracted values', () => {
  it('should find value of iv', () => {
    expect(romanReader("iv")).toBe(4);
  });
  it('should find value of ix', () => {
    expect(romanReader("ix")).toBe(9);
  });
  it('should find value of xl', () => {
    expect(romanReader("xl")).toBe(40);
  });
  it('should find value of xxix', () => {
    expect(romanReader("xxix")).toBe(29);
  });
  it('should find value of cdxliv', () => {
    expect(romanReader("cdxliv")).toBe(444);
  });
});