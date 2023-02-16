//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { IdeEmptyState } from '.';
import customImage from './test_assets/custom.lg.svg';
import * as jth from '../../component_helpers/jest_test_helper_functions.js';

describe('IdeEmptyState', () => {
  let component, unmount;
  const mountTestComponent = (props) => {
    const { getJSXForComponent, mountComponent } = jth;
    const test = mountComponent(
      getJSXForComponent(IdeEmptyState, {}, props),
      false
    );
    component = test.component;
    unmount = test.unmount;
  };
  afterEach(() => unmount && unmount());

  it('renders when no props are defined', () => {
    mountTestComponent();
    expect(component.getElements()).toMatchSnapshot();
  });

  const rendersWhenPropIsDefined = (propName, propValue, suffix) => {
    let name = `renders when the ${propName} prop is defined`;
    if (suffix) {
      name += ` as ${suffix}`;
    }
    it(name, () => {
      mountTestComponent({ [propName]: propValue });
      expect(component.getElements()).toMatchSnapshot();
    });
  };
  rendersWhenPropIsDefined('format', 'lg', 'lg');
  rendersWhenPropIsDefined('format', 'sm', 'sm');
  rendersWhenPropIsDefined('image', 'apiError', 'apiError');
  rendersWhenPropIsDefined('image', 'default', 'default');
  rendersWhenPropIsDefined('image', 'deploy', 'deploy');
  rendersWhenPropIsDefined('image', 'noSearchResults', 'noSearchResults');
  rendersWhenPropIsDefined('image', 'notAuthorized', 'notAuthorized');
  rendersWhenPropIsDefined(
    'image',
    { alt: 'Custom alt', className: 'custom-classname', src: customImage },
    'an object'
  );
  rendersWhenPropIsDefined(
    'image',
    () => customImage,
    'a function that returns an image'
  );
  rendersWhenPropIsDefined('title', 'Custom title', 'a string');
  rendersWhenPropIsDefined('body', 'Custom body', 'a string');
  rendersWhenPropIsDefined(
    'button',
    { kind: 'primary', onClick: () => {}, text: 'Custom text' },
    'an object'
  );
  rendersWhenPropIsDefined('button', () => '', 'a function');
  rendersWhenPropIsDefined(
    'links',
    { text: 'Custom link', url: 'http://ibm.com' },
    'an object'
  );
  rendersWhenPropIsDefined(
    'links',
    [
      { text: 'Custom link 1', url: 'http://ibm.com' },
      {
        text: 'Custom external link 2',
        url: 'http://ibm.com',
        target: '_blank',
      },
    ],
    'an array of objects'
  );
  rendersWhenPropIsDefined(
    'links',
    [
      {
        text: 'Custom link 1',
        url: '#',
        onClick: () => console.log('custom function'),
      },
    ],
    'an object'
  );
});
