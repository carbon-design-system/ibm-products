//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { IdeSideNavLink, IdeSideNavMenu } from './IdeNavigationItems';
import * as jth from '../../component_helpers/jest_test_helper_functions.js';

describe('IdeNavigationItem unit tests', () => {
  let component, unmount;

  const mountTestComponent = (testComponent, defaultProps = {}, props = {}) => {
    let test = jth.mountComponent(
      jth.getJSXForComponent(testComponent, defaultProps, props)
    );
    component = test.component;
    unmount = test.unmount;
  };

  afterEach(() => {
    // if unmount defined, call it to clear up any mounted component
    unmount && unmount();
  });

  it('IdeSideNavLink the expected structure with no props provided', () => {
    mountTestComponent(IdeSideNavLink);
    expect(component.hasClass('undefined')).toBe(false); // confirm if no className passed we dont put undefined in
    expect(component.hasClass('ide-navigation--altHover-link')).toBe(true);
    expect(component.props().large).toBe(true);
  });

  it('IdeSideNavMenu the expected structure with no props provided', () => {
    mountTestComponent(IdeSideNavMenu);
    expect(component.hasClass('undefined')).toBe(false); // confirm if no className passed we dont put undefined in
    expect(component.hasClass('ide-navigation--altHover-menu')).toBe(true);
    expect(component.props().large).toBe(true);
  });

  it('IdeSideNavLink is gets the expected props', () => {
    mountTestComponent(IdeSideNavLink, { myProp: true, className: 'foo' });
    // check expected prop and classname are added
    expect(component.props().large).toBe(true);
    expect(component.hasClass('ide-navigation--altHover-link')).toBe(true);
    // other props passed through
    expect(component.props().myProp).toBe(true);
    expect(component.hasClass('foo')).toBe(true);
  });

  it('IdeSideNavMenu is gets the expected props', () => {
    mountTestComponent(IdeSideNavMenu, { myProp: true, className: 'foo' });
    // check expected prop and classname are added
    expect(component.props().large).toBe(true);
    expect(component.hasClass('ide-navigation--altHover-menu')).toBe(true);
    // other props passed through
    expect(component.props().myProp).toBe(true);
    expect(component.hasClass('foo')).toBe(true);
  });
});
