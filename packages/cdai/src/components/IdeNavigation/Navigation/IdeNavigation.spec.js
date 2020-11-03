//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import IdeNavigation from './IdeNavigation';
import { navigationCoreProps } from './test_assets/testProps.js';
import { idAttributeSelector } from '../../../component_helpers/IDHelper';

describe('IdeNavigation unit tests', () => {
  let component, unmount;

  const mountTestComponent = (defaultProps = {}, props = {}) => {
    let test = jth.mountComponent(
      jth.getJSXForComponent(IdeNavigation, defaultProps, props)
    );
    component = test.component;
    unmount = test.unmount;
  };

  afterEach(() => {
    // if unmount defined, call it to clear up any mounted component
    unmount && unmount();
  });

  describe('view tests', () => {
    it('renders the expected structure with no props provided', () => {
      mountTestComponent();
      expect(component.getElements()).toMatchSnapshot();
    });

    it('renders the expected structure with all provided', () => {
      mountTestComponent({ ...navigationCoreProps });
      expect(component.getElements()).toMatchSnapshot();
    });

    it('adds the expected classes when the side nav is hidden via prop', () => {
      mountTestComponent({ showFirstLevel: false });
      expect(
        component
          .find(idAttributeSelector('IdeNavigation--left-nav'))
          .hasClass('ide-navigation__hide-nav')
      ).toBe(true);
      expect(
        component
          .find(idAttributeSelector('IdeNavigation--content'))
          .hasClass('ide-navigation--content__hide-nav')
      ).toBe(true);
    });
  });

  describe('function tests', () => {
    it('toggle() when invoked flips the expanded state', () => {
      mountTestComponent();
      const componentInstance = component.instance();
      let startingExpandedState = componentInstance.state.expanded;
      componentInstance.toggle();
      expect(componentInstance.state.expanded).toBe(!startingExpandedState);
    });

    it('if controlled, the parent component dictates expanded state, and gets called on navigation interaction', () => {
      const mockToggle = jest.fn();
      mountTestComponent({ expanded: true, onToggle: mockToggle });
      expect(
        component.find(idAttributeSelector('IdeNavigation--left-nav')).props()
          .expanded
      ).toBe(true); // as we have provided it
      component
        .find(idAttributeSelector('IdeNavigation--left-nav-toggle'))
        .props()
        .onToggle(); // trigger the callback
      expect(mockToggle).toHaveBeenCalled(); // and confirm our callback is invoked on toggle
    });
  });
});
