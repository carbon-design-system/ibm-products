//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

import {
  prepareProps,
  allPropTypes,
  deprecateProp,
  deprecatePropUsage,
  isRequiredIf,
} from './props-helper';
import {
  expectWarn,
  expectError,
  deprecated,
  deprecatedUsage,
  required,
} from './test-helper';

describe('prepareProps', () => {
  const defaults = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
  const props = { e: 9, f: 10, g: 11, h: 12, i: 13, j: 14, k: 15, l: 16 };
  const overrides = { c: 17, d: 18, g: 19, h: 20, k: 21, l: 22, o: 23, p: 24 };
  const block = ['b', 'd', 'f', 'h', 'n', 'p'];

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

describe('deprecateProp and deprecatePropUsage', () => {
  const Component = () => null;
  Component.displayName = 'x';
  Component.propTypes = {
    a: deprecateProp(PropTypes.string, 'Explanation 1.'),
    b: PropTypes.string,
    c: deprecatePropUsage(
      PropTypes.shape({
        d: PropTypes.string,
      }),
      PropTypes.number,
      'Explanation 2.'
    ),
  };

  it('reports prop deprecated when deprecated prop is used', () =>
    expectWarn(deprecated('a', 'x', 'Explanation 1.'), () => {
      render(<Component a="fish" />);
    }));

  it('reports prop deprecated and invalid when deprecated prop is used with invalid value', () =>
    expectError(
      'Warning: Failed prop type: Invalid prop `a` of type `number` supplied to `x`, expected `string`.\n    in x',
      () =>
        expectWarn(deprecated('a', 'x', 'Explanation 1.'), () => {
          render(<Component a={42} />);
        })
    ));

  it('does not report prop deprecated when non-deprecated prop is used', () => {
    render(<Component b="fish" />);
  });

  it('reports prop usage deprecated when deprecated usage is used', () =>
    expectWarn(deprecatedUsage('c', 'x', 'Explanation 2.'), () => {
      render(<Component c={42} />);
    }));

  it('does not report prop usage deprecated when non-deprecated usage is used', () => {
    render(<Component c={{ d: 'fish' }} />);
  });

  it('does not report prop usage deprecated when incorrect non-deprecated usage is used', () =>
    expectError(
      'Warning: Failed prop type: Invalid prop `c.d` of type `number` supplied to `x`, expected `string`.\n    in x',
      () => {
        render(<Component c={{ d: 42 }} />);
      }
    ));

  it('does not report prop usage deprecated when invalid but non-deprecated usage is used', () =>
    expectError(
      'Warning: Failed prop type: Invalid prop `c` of type `string` supplied to `x`, expected `object`.\n    in x',
      () => {
        render(<Component c="fish" />);
      }
    ));
});

describe('allPropTypes', () => {
  const e1 = new Error();
  const e2 = new Error(
    'The prop `b` is marked as required in `Component X`, but its value is `null`.'
  );
  const e3 = new Error(
    'The prop `c` is marked as required in `Component X`, but its value is `undefined`.'
  );
  const p = () => null;
  const f = () => e1;
  const props = { a: '42', b: null };
  const args1 = [props, 'a', 'Component X', 'prop'];
  const args2 = [props, 'b', 'Component X', 'prop'];
  const args3 = [props, 'c', 'Component X', 'prop'];

  it('returns null only if all supplied type checkers return null', () => {
    expect(allPropTypes([f, f, f, f])(...args1)).toEqual(e1);
    expect(allPropTypes([p, f, f, f])(...args1)).toEqual(e1);
    expect(allPropTypes([p, p, f, f])(...args1)).toEqual(e1);
    expect(allPropTypes([p, p, p, f])(...args1)).toEqual(e1);
    expect(allPropTypes([p, p, p, p])(...args1)).toBeNull();
  });

  it('rejects null or undefined when marked required', () => {
    expect(allPropTypes([f, f, f, f]).isRequired(...args1)).toEqual(e1);
    expect(allPropTypes([f, f, f, f]).isRequired(...args2)).toEqual(e2);
    expect(allPropTypes([f, f, f, f]).isRequired(...args3)).toEqual(e3);
    expect(allPropTypes([p, f, f, f]).isRequired(...args1)).toEqual(e1);
    expect(allPropTypes([p, f, f, f]).isRequired(...args2)).toEqual(e2);
    expect(allPropTypes([f, f, f, f]).isRequired(...args3)).toEqual(e3);
    expect(allPropTypes([p, p, p, f]).isRequired(...args1)).toEqual(e1);
    expect(allPropTypes([p, p, p, f]).isRequired(...args2)).toEqual(e2);
    expect(allPropTypes([f, f, f, f]).isRequired(...args3)).toEqual(e3);
    expect(allPropTypes([p, p, p, p]).isRequired(...args1)).toBeNull();
    expect(allPropTypes([p, p, p, p]).isRequired(...args2)).toEqual(e2);
    expect(allPropTypes([f, f, f, f]).isRequired(...args3)).toEqual(e3);
  });
});

describe('isRequiredIf', () => {
  const Component = () => null;
  Component.propTypes = {
    a: isRequiredIf(PropTypes.string, ({ ctl }) => ctl === 'a'),
    b: PropTypes.string.isRequired.if(({ ctl }) => ctl === 'b'),
    ctl: PropTypes.string,
  };

  it('does not report required when condition false', () => {
    // any console error will cause the test to fail through global check
    render(<Component ctl="x" />);
  });

  it('reports required when condition true', () =>
    expectError(required('a', 'Component'), () => {
      render(<Component ctl="a" />);
    }));

  it('reports required when used as a decorator', () =>
    expectError(required('b', 'Component'), () => {
      render(<Component ctl="b" />);
    }));
});
