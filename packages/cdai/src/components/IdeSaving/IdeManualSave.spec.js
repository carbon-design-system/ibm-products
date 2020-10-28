//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { Button } from 'carbon-components-react';
import * as jth from '../../component_helpers/jest_test_helper_functions.js';

import { IdeManualSave } from '.';

describe('IdeManualSave', () => {
  let unmount;

  const mountTestComponent = (defaultProps = {}, props = {}) => {
    const test = jth.mountComponent(
      jth.getJSXForComponent(IdeManualSave, defaultProps, props)
    );
    unmount = test.unmount;
    return test.component;
  };

  afterEach(() => {
    // if unmount defined, call it to clear up any mounted component
    unmount && unmount();
  });

  it('renders save state', () => {
    const wrapper = mountTestComponent({
      state: 'save',
      saveText: 'save',
      cancelText: 'cancel',
    });
    expect(wrapper.find('.ide-manual-save').length).toEqual(1);
    expect(wrapper.find(Button).length).toEqual(2);
    expect(wrapper.find('.ide-manual-save__save-button').text()).toEqual(
      'save'
    );
    expect(wrapper.find('.ide-manual-save__cancel-button').text()).toEqual(
      'cancel'
    );
    expect(
      wrapper.find('.ide-manual-save__cancel-button').props().disabled
    ).toEqual(false);
  });

  it('renders saved state', () => {
    const wrapper = mountTestComponent({
      state: 'saved',
      saveText: 'saved',
      cancelText: 'cancel',
    });
    expect(wrapper.find('.ide-manual-save').length).toEqual(1);
    expect(wrapper.find(Button).length).toEqual(2);
    expect(wrapper.find('.ide-manual-save__save-button').text()).toEqual(
      'saved'
    );
    expect(wrapper.find('.ide-manual-save__cancel-button').text()).toEqual(
      'cancel'
    );
    expect(
      wrapper.find('.ide-manual-save__cancel-button').props().disabled
    ).toEqual(true);
  });

  it('calls click handlers', () => {
    const onSave = jest.fn();
    const onCancel = jest.fn();
    const wrapper = mountTestComponent({
      state: 'save',
      saveText: 'save',
      cancelText: 'cancel',
      onSave: onSave,
      onCancel: onCancel,
    });
    expect(wrapper.find('.ide-manual-save').length).toEqual(1);
    wrapper.find('.ide-manual-save__save-button').simulate('click');
    expect(onSave).toHaveBeenCalled();

    wrapper.find('.ide-manual-save__cancel-button').simulate('click');
    expect(onCancel).toHaveBeenCalled();
  });
});
