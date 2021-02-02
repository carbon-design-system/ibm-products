//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
import React from 'react';
import { shallow, mount } from 'enzyme';

export const getJSXForComponent = (
  component,
  defaultProps = {},
  customProps = {}
) => {
  return React.createElement(component, { ...defaultProps, ...customProps });
};

export const mountComponent = (jsx, returnShallow = true) => {
  let component, componentInstance;

  if (returnShallow) {
    component = shallow(jsx);
  } else {
    component = mount(jsx);
  }

  componentInstance = component.instance();

  let unmount = () => {
    unmountComponent(component);
  };

  return {
    component,
    componentInstance,
    unmount,
  };
};

export const unmountComponent = (component) => {
  component && component.length > 0 && component.unmount();
};
