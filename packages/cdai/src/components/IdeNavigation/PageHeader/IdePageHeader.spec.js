//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import IdePageHeader from './IdePageHeader';
import {
  pageHeaderCoreProps,
  withSubtitle,
  bespokeJSXProp,
} from './test_assets/testProps.js';
import * as jth from '../../component_helpers/jest_test_helper_functions.js';

describe('IdePageHeader unit tests', () => {
  let component, unmount;

  const mountTestComponent = (defaultProps = {}, props = {}) => {
    let test = jth.mountComponent(
      jth.getJSXForComponent(IdePageHeader, defaultProps, props)
    );
    component = test.component;
    unmount = test.unmount;
  };

  afterEach(() => {
    // if unmount defined, call it to clear up any mounted component
    unmount && unmount();
  });

  it('renders the expected structure', () => {
    mountTestComponent({ ...pageHeaderCoreProps, ...bespokeJSXProp });
    expect(component.getElements()).toMatchSnapshot();
  });

  it('renders the subtitle structure', () => {
    mountTestComponent({ ...pageHeaderCoreProps, ...withSubtitle });
    expect(component.getElements()).toMatchSnapshot();
  });
});
