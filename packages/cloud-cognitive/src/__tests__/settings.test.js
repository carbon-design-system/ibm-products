/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { pkg } from '../settings';
import { shallow } from 'enzyme';

const name = 'settings';

describe(name, () => {
  it('uses the default css prefix', () => {
    expect(pkg.prefix).toEqual('exp');
  });

  it('can use custom prefix with a react component', async () => {
    pkg.prefix = 'my-prefix';
    pkg._silenceWarnings(true);
    pkg.component.ExampleComponent = true;

    // dynamic import so we can modify the import on the component before using it
    const { ExampleComponent } = await import('../components/ExampleComponent');
    const wrapper = shallow(
      <ExampleComponent
        primaryButtonLabel="primary"
        secondaryButtonLabel="secondary"
      />
    );

    expect(wrapper.find('.my-prefix--example-component')).toHaveLength(1);
  });
});
