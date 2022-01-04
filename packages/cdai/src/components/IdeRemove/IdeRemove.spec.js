//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { IdeRemove } from '.';
import * as props from './test_assets/testProps.js';
import * as jth from '../../component_helpers/jest_test_helper_functions.js';

describe('IdeRemove unit tests', () => {
  let component, unmount;

  const mountTestComponent = (defaultProps = {}, props = {}) => {
    let test = jth.mountComponent(
      jth.getJSXForComponent(IdeRemove, defaultProps, props)
    );
    component = test.component;
    unmount = test.unmount;
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    // if unmount defined, call it to clear up any mounted component
    unmount && unmount();
    // reset clocks
    jest.clearAllTimers();
  });

  describe('view tests', () => {
    it('IdeRemove tolerates no props being provided, and renders with defaults', () => {
      mountTestComponent();
      expect(component.getElements()).toMatchSnapshot();
    });

    it('IdeRemove renders an alternative state if provided post delete', () => {
      mountTestComponent(props.configWithPostDeleteContent());
      component.setState({ didDelete: true });
      expect(component.getElements()).toMatchSnapshot();
    });
  });

  describe('unit tests', () => {
    it('textFieldChange() does nothing is the incorrect event object is passed', () => {
      mountTestComponent();
      const componentInstance = component.instance();
      const startingValue = componentInstance.state.itemName;
      componentInstance.textFieldChange(); // invoked the function with nothing
      expect(componentInstance.state.itemName).toEqual(startingValue);
      componentInstance.textFieldChange({ target: {} }); // invoked the function with partial shape
      expect(componentInstance.state.itemName).toEqual(startingValue);
    });

    it('textFieldChange() updates state when a valid event object is passed', () => {
      mountTestComponent();
      const componentInstance = component.instance();
      const startingValue = componentInstance.state.itemName;
      const testValue = 'test text';
      componentInstance.textFieldChange({ target: { value: testValue } });
      expect(componentInstance.state.itemName).not.toEqual(startingValue);
      expect(componentInstance.state.itemName).toEqual(testValue);
    });
  });
});
