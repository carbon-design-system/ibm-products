//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { IdeHome } from '.';
import {
  withCustomSetTabFunc,
  withCustomSetSectionFunc,
  withNoTasksOrRenderFunc,
  withCollapsibleAbility,
  tasksValidImage,
  withOneSetToRender,
} from './test_assets/testProps.js';
import { idAttributeSelector } from '../../component_helpers/IDHelper';
import * as jth from '../../component_helpers/jest_test_helper_functions.js';
import { settings } from 'carbon-components';
const { prefix } = settings;

describe('IdeHome unit tests', () => {
  let component, unmount;

  const mountTestComponent = (defaultProps = {}, props = {}) => {
    let test = jth.mountComponent(
      jth.getJSXForComponent(IdeHome, defaultProps, props)
    );
    component = test.component;
    unmount = test.unmount;
    return test;
  };

  afterEach(() => {
    // if unmount defined, call it to clear up any mounted component
    unmount && unmount();
  });

  it('IdeHome tollerates no props being provided, and renders with defaults', () => {
    const testClassNames = {
      'IdeHome-Header-Text': [
        'ide-home-heading-container',
        `${prefix}--col-sm-1`,
        `${prefix}--col-md-2`,
        `${prefix}--col-lg-6`,
        `${prefix}--col-xlg-6`,
        `${prefix}--col-max-6`,
      ],
      'IdeHome-Header-Image': [
        'ide-home-image-container',
        `${prefix}--col-sm-3`,
        `${prefix}--col-md-6`,
        `${prefix}--col-lg-10`,
        `${prefix}--col-xlg-10`,
        `${prefix}--col-max-10`,
      ],
    };
    mountTestComponent();
    expect(component.getElements()).toMatchSnapshot();
    for (let [id, classNames] of Object.entries(testClassNames)) {
      classNames.map((className) => {
        expect(
          component.find(idAttributeSelector(id)).hasClass(className)
        ).toEqual(true);
      });
    }
  });

  it('IdeHome renders user custom content when render function is provided', () => {
    const props = withCustomSetTabFunc();
    mountTestComponent(null, props);
    expect(component.exists(idAttributeSelector('tab1')));
    expect(component.exists(idAttributeSelector('tab2')));
  });

  it('IdeHome renders task image when valid react element is provided', () => {
    const props = tasksValidImage();
    mountTestComponent(null, props);
    expect(component.exists('ide-home-tile-img'));
  });

  it('IdeHome renders default sets when render function is not provided', () => {
    const props = withNoTasksOrRenderFunc();
    mountTestComponent(null, props);
    expect(component.exists(idAttributeSelector('tab1')));
    expect(component.exists(idAttributeSelector('tab2')));
  });

  it('IdeHome renders sets as sections when multipleSetType prop is `section`', () => {
    const props = withCustomSetSectionFunc();
    mountTestComponent(null, props);
    expect(component.exists(idAttributeSelector('section1')));
    expect(component.exists(idAttributeSelector('section2')));
  });

  it('IdeHome renders just 1 set if 1 provided', () => {
    const props = withOneSetToRender();
    mountTestComponent(null, props);
    expect(component.exists(idAttributeSelector('tab1')));
  });

  it('IdeHome renders collapsible version of the banner', () => {
    const testClassNames = {
      'IdeHome-Header-Text': [
        'ide-home-heading-container',
        `${prefix}--col-sm-2`,
        `${prefix}--col-md-3`,
        `${prefix}--col-lg-6`,
        `${prefix}--col-xlg-6`,
        `${prefix}--col-max-6`,
      ],
      'IdeHome-Header-Image': [
        'ide-home-image-container',
        `${prefix}--col-sm-2`,
        `${prefix}--col-md-3`,
        `${prefix}--col-lg-8`,
        `${prefix}--col-xlg-8`,
        `${prefix}--col-max-8`,
      ],
      'IdeHome-header-toggle-container': [
        'ide-home-header-toggle-container',
        `${prefix}--col-sm-1`,
        `${prefix}--col-md-2`,
        `${prefix}--col-lg-2`,
        `${prefix}--col-xlg-2`,
        `${prefix}--col-max-2`,
      ],
    };
    const props = withCollapsibleAbility();
    mountTestComponent(null, props);
    expect(component.exists(idAttributeSelector('IdeHome-header-toggle')));
    for (let [id, classNames] of Object.entries(testClassNames)) {
      classNames.map((className) => {
        expect(
          component.find(idAttributeSelector(id)).hasClass(className)
        ).toEqual(true);
      });
    }
  });

  it('renders the collapsed banner when the toggle is pressed', () => {
    const testClassNames = {
      'IdeHome-Header-Text': [
        'ide-home-heading-container',
        `${prefix}--col-sm-3`,
        `${prefix}--col-md-6`,
        `${prefix}--col-lg-14`,
        `${prefix}--col-xlg-14`,
        `${prefix}--col-max-14`,
      ],
      'IdeHome-header-toggle-container': [
        'ide-home-header-toggle-container',
        `${prefix}--col-sm-1`,
        `${prefix}--col-md-2`,
        `${prefix}--col-lg-2`,
        `${prefix}--col-xlg-2`,
        `${prefix}--col-max-2`,
      ],
    };
    let props = withCollapsibleAbility();
    props.headerCollapsed = true;
    mountTestComponent(null, props);
    expect(
      component.find(idAttributeSelector('IdeHome-Header')).prop('className')
    ).toEqual(`collapsed ide-home-header ${prefix}--row`);
    for (let [id, classNames] of Object.entries(testClassNames)) {
      classNames.map((className) => {
        expect(
          component.find(idAttributeSelector(id)).hasClass(className)
        ).toEqual(true);
      });
    }
  });

  it('collapses the banner when the toggle is pressed and calls the callback', () => {
    const props = withCollapsibleAbility();
    const mockHeaderHandleCollapseFunc = jest.fn();
    props.headerHandleCollapseFunc = mockHeaderHandleCollapseFunc;
    mountTestComponent(null, props);
    expect(component.exists(idAttributeSelector('IdeHome-header-toggle')));
    component
      .find(idAttributeSelector('IdeHome-header-toggle'))
      .simulate('click');
    expect(mockHeaderHandleCollapseFunc).toHaveBeenCalled();
  });

  it('collapses the banner and calls the callback twice when the toggle is pressed twice', () => {
    const props = withCollapsibleAbility();
    const mockHeaderHandleCollapseFunc = jest.fn();
    props.headerHandleCollapseFunc = mockHeaderHandleCollapseFunc;
    mountTestComponent(null, props);
    expect(component.exists(idAttributeSelector('IdeHome-header-toggle')));
    component
      .find(idAttributeSelector('IdeHome-header-toggle'))
      .simulate('click');
    expect(mockHeaderHandleCollapseFunc).toHaveBeenCalled();
    component
      .find(idAttributeSelector('IdeHome-header-toggle'))
      .simulate('click');
    expect(mockHeaderHandleCollapseFunc).toHaveBeenCalled();
  });
});
