/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { pkg, carbon } from '../settings';
import { shallow } from 'enzyme';

const name = 'settings';

describe(name, () => {
  it('uses the default css prefix', () => {
    expect(pkg.prefix).toEqual('c4p');
  });

  it('can use custom prefix with a react component', async () => {
    const prefix = 'my-prefix';
    pkg.prefix = prefix;

    // dynamic import so we can modify the import on the component before using it
    const { StatusIcon } = await import('../components/StatusIcon');
    const wrapper = shallow(
      <StatusIcon
        kind="fatal"
        size="sm"
        theme="light"
        iconDescription="Fatal"
      />
    );
    expect(wrapper.hasClass(`${prefix}--status-icon`)).toEqual(true);
  });

  it('Supplies carbon theme token values', () => {
    expect(carbon.themes.g10.text01).not.toBe(null);
    expect(carbon.themes.g10.text01).toMatch(/#[0-9a-fA-F]+/);
  });

  it('Supplies carbon layout token values', () => {
    expect(carbon.themes.g10.spacing01).not.toBe(null);
    expect(carbon.themes.g10.spacing01).toMatch(/[0-9.]+rem/);
  });

  it('Supplies carbon type', () => {
    expect(carbon.themes.g10.caption01).not.toBe(null);
    expect(carbon.themes.g10.caption01.fontSize).toMatch(/[0-9.]+rem/);
    expect(carbon.themes.g10.caption01.fontWeight).toBeGreaterThan(0);
    expect(carbon.themes.g10.caption01.letterSpacing).toMatch(/[0-9.]+px/);
    expect(carbon.themes.g10.caption01.lineHeight).toBeGreaterThan(0);
  });
});
