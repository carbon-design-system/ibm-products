//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import * as jth from '../../component_helpers/jest_test_helper_functions.js';
import { IdeAPIKeyGeneration } from '.';

describe('IdeAPIKeyGeneration unit tests', () => {
  let component, unmount;

  const mountTestComponent = (defaultProps = {}, props = {}) => {
    let test = jth.mountComponent(
      jth.getJSXForComponent(IdeAPIKeyGeneration, defaultProps, props)
    );
    component = test.component;
    unmount = test.unmount;
  };

  afterEach(() => {
    // if unmount defined, call it to clear up any mounted component
    unmount && unmount();
  });

  it('IdeAPIKeyGeneration tolerates no props being provided, and renders with defaults', () => {
    mountTestComponent();
    expect(component.getElements()).toMatchSnapshot();
  });
});
