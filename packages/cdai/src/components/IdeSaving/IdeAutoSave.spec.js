//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { Icon } from 'carbon-components-react';
import * as jth from '../../component_helpers/jest_test_helper_functions.js';

import { IdeAutoSave } from '.';

describe('IdeAutoSave', () => {
  let unmount;

  const mountTestComponent = (defaultProps = {}, props = {}) => {
    const test = jth.mountComponent(
      jth.getJSXForComponent(IdeAutoSave, defaultProps, props)
    );
    unmount = test.unmount;
    return test.component;
  };

  afterEach(() => {
    // if unmount defined, call it to clear up any mounted component
    unmount && unmount();
  });

  it('renders default state', () => {
    const wrapper = mountTestComponent({
      state: 'default',
      text: 'defaultText',
    });
    expect(wrapper.find('.ide-auto-save').length).toEqual(1);
    expect(wrapper.find(Icon).length).toEqual(0);
    expect(wrapper.find('.ide-auto-save__text').text()).toEqual('defaultText');
  });

  it('renders failed state with icon', () => {
    const wrapper = mountTestComponent({ state: 'failed', text: 'failedText' });
    expect(wrapper.find('.ide-auto-save').length).toEqual(1);
    expect(wrapper.find(Icon).length).toEqual(1);
    expect(wrapper.find('.ide-auto-save__text').text()).toEqual('failedText');
  });
});
