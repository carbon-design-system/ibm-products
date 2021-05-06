//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { mount } from 'enzyme';

import { ContextHeader } from '.';

describe('ContextHeader', () => {
  it('Renders as expected', () => {
    const wrapper = mount(
      <ContextHeader name="name" namespace="namespace" task="High level task" />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper.find('.ide-context-header')).toHaveLength(1);
    expect(wrapper.find('.ide-context-header--name')).toHaveLength(1);
    expect(wrapper.find('.ide-context-header--name').text()).toEqual('name');
    expect(wrapper.find('.ide-context-header--namespace')).toHaveLength(1);
    expect(wrapper.find('.ide-context-header--namespace').text()).toEqual(
      'namespace'
    );
    expect(wrapper.find('.ide-context-header--task')).toHaveLength(1);
    expect(wrapper.find('.ide-context-header--task').text()).toEqual(
      'High level task'
    );
  });
});
