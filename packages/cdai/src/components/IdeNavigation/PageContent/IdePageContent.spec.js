//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import IdePageContent from './IdePageContent';
import { withBleedClass, withChildren } from './test_assets/testProps.js';

describe('IdePageContent unit tests', () => {
  let component, unmount;

  const mountTestComponent = (defaultProps = {}, props = {}) => {
    let test = jth.mountComponent(
      jth.getJSXForComponent(IdePageContent, defaultProps, props)
    );
    component = test.component;
    unmount = test.unmount;
  };

  afterEach(() => {
    // if unmount defined, call it to clear up any mounted component
    unmount && unmount();
  });

  it('renders the expected structure with no props provided', () => {
    mountTestComponent();
    expect(component.getElements()).toMatchSnapshot();
  });

  it('renders the expected structure with all provided', () => {
    mountTestComponent({ ...withBleedClass, ...withChildren });
    expect(component.getElements()).toMatchSnapshot();
  });
});
