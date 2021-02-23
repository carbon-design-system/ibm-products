import React from 'react';
import unwrapIfFragment from '../unwrap-if-fragment.js';

describe('unwrap-if-fragment', () => {
  it('Should handle a fragment with one child', () => {
    const child = 'a child';
    const children = [child];
    const result = unwrapIfFragment(<>{children.map((item) => item)}</>);

    expect(result).toEqual(children);
  });

  it('Should handle a fragment with multiple children', () => {
    const child = 'a child';
    const children = [child, child, child];
    const result = unwrapIfFragment(<>{children.map((item) => item)}</>);

    expect(result).toEqual(children);
  });

  it('Should handle a multiple fragments and children', () => {
    const child = 'a child';
    const children = [child, child, child];
    children.push([...children]);
    const result = unwrapIfFragment(<>{children.map((item) => item)}</>);

    expect(result).toEqual(children.flatMap((child) => child));
  });

  it('Should handle a nested fragments and children', () => {
    const child = 'a child';
    const children = [child, child, child];
    children.push([...children]);
    const result = unwrapIfFragment(
      <>
        <>{children.map((item) => item)}</>
        {child}
      </>
    );

    const expectedResult = children.flatMap((child) => child);
    expectedResult.push(child);
    expect(result).toEqual(expectedResult);
  });

  it('Should handle an array with a lone one child', () => {
    const child = 'a child';
    const result = unwrapIfFragment(child);

    expect(result).toEqual([child]);
  });

  it('Should handle an array with one child', () => {
    const child = 'a child';
    const children = [child];
    const result = unwrapIfFragment(child);

    expect(result).toEqual(children);
  });

  it('Should handle an array with multiple children', () => {
    const child = 'a child';
    const children = [child, child, child];
    const result = unwrapIfFragment(children);

    expect(result).toEqual(children);
  });

  it('Should handle an array with multiple children and levels', () => {
    const child = 'a child';
    const children = [child, child, child];
    children.push(...children);
    const result = unwrapIfFragment(children);

    expect(result).toEqual(children.flatMap((child) => child));
  });
});
