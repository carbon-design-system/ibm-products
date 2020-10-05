//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { idePrefix } from './settings';
import { shallow } from 'enzyme';

describe('settings', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('uses the default css prefix', () => {
    expect(idePrefix).toEqual('ide');
  });

  it('can use custom prefix with a react component', async () => {
    jest.mock('./settings', () => ({
      idePrefix: 'my-prefix',
    }));
    // dynamic import so we can modify the import on the component before using it
    const { IdeButton } = await import('../../components/IdeButton');
    const wrapper = shallow(<IdeButton iconAnimation="rotate-180-anti" />);
    expect(wrapper.find('.my-prefix-btn--rotate-180-anti')).toHaveLength(1);
  });
});
