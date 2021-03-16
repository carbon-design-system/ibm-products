import React from 'react';
import unwrapIfFragment from '../unwrap-if-fragment.js';

const AChild = () => <div>A child</div>;

describe('unwrap-if-fragment', () => {
  it('Should handle a fragment with one child', () => {
    const children = [AChild];
    const result = unwrapIfFragment(<>{children.map((item) => item)}</>);

    expect(result).toEqual(children);
  });

  it('Should handle a fragment with multiple children', () => {
    const children = [AChild, AChild, AChild];
    const result = unwrapIfFragment(<>{children.map((item) => item)}</>);

    expect(result).toEqual(children);
  });

  it('Should handle a multiple fragments and children', () => {
    const children = [AChild, AChild, AChild];
    children.push([...children]);
    const result = unwrapIfFragment(<>{children.map((item) => item)}</>);

    expect(result).toEqual(children.flatMap((child) => child));
  });

  it('Should handle a nested fragments and children', () => {
    const children = [AChild, AChild, AChild];
    children.push([...children]);
    const result = unwrapIfFragment(
      <>
        <>{children.map((item) => item)}</>
        {AChild}
      </>
    );

    const expectedResult = children.flatMap((child) => child);
    expectedResult.push(AChild);
    expect(result).toEqual(expectedResult);
  });

  it('Should handle a lone child', () => {
    const result = unwrapIfFragment(AChild);

    expect(result).toEqual([AChild]);
  });

  it('Should handle an array with one child', () => {
    const children = [AChild];
    const result = unwrapIfFragment(AChild);

    expect(result).toEqual(children);
  });

  it('Should handle an array with multiple children', () => {
    const children = [AChild, AChild, AChild];
    const result = unwrapIfFragment(children);

    expect(result).toEqual(children);
  });

  it('Should handle an array with multiple children and levels', () => {
    const children = [AChild, AChild, AChild];
    children.push(...children);
    const result = unwrapIfFragment(children);

    expect(result).toEqual(children.flatMap((child) => child));
  });
});
