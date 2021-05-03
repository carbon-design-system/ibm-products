import { prepareProps } from './props-helper';

const defaults = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
const props = { e: 9, f: 10, g: 11, h: 12, i: 13, j: 14, k: 15, l: 16 };
const overrides = { c: 17, d: 18, g: 19, h: 20, k: 21, l: 22, o: 23, p: 24 };
const block = ['b', 'd', 'f', 'h', 'n', 'p'];

describe('prepareProps', () => {
  it('applies correct defaults and overrides and blocks values', () => {
    const result = prepareProps(defaults, props, block, 'j', 'l', overrides);

    // defaulted
    expect(result.a).toEqual(1);
    // defaulted, blocked
    expect(Object.hasOwnProperty.call(result, 'b')).toBeFalsy();
    // defaulted, overridden
    expect(result.c).toEqual(17);
    // defaulted, blocked, overridden
    expect(result.d).toEqual(18);
    // defaulted, set
    expect(result.e).toEqual(9);
    // defaulted, set, blocked
    expect(Object.hasOwnProperty.call(result, 'f')).toBeFalsy();
    // defaulted, set, overridden
    expect(result.g).toEqual(19);
    // defaulted, set, blocked, overridden
    expect(result.h).toEqual(20);
    // set
    expect(result.i).toEqual(13);
    // set, blocked
    expect(Object.hasOwnProperty.call(result, 'j')).toBeFalsy();
    // set, overridden
    expect(result.k).toEqual(21);
    // set, blocked, overridden
    expect(result.l).toEqual(22);
    //
    expect(Object.hasOwnProperty.call(result, 'm')).toBeFalsy();
    // blocked
    expect(Object.hasOwnProperty.call(result, 'n')).toBeFalsy();
    // overridden
    expect(result.o).toEqual(23);
    // blocked, overridden
    expect(result.p).toEqual(24);
  });
});
