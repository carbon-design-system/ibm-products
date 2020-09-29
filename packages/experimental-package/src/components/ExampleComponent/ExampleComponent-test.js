/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';

import { ExampleComponent } from './ExampleComponent';

const { name } = ExampleComponent;

describe(name, () => {
  let wrapper;

  const primaryClickMock = jest.fn();
  const secondaryClickMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<ExampleComponent />);
  });

  test('should have no accessibility violations', async () => {
    const { container } = render(<ExampleComponent />);

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(name);
  });

  it('primary and secondary clicks not called', () => {
    wrapper.find('Button').at(0).props().onClick();
    expect(secondaryClickMock).not.toHaveBeenCalled();
    wrapper.find('Button').at(1).props().onClick();
    expect(primaryClickMock).not.toHaveBeenCalled();
  });

  it('primary and secondary clicks called', () => {
    wrapper.setProps({
      onPrimaryClick: primaryClickMock,
      onSecondaryClick: secondaryClickMock,
    });
    wrapper.find('Button').at(0).props().onClick();
    expect(secondaryClickMock).toHaveBeenCalled();
    wrapper.find('Button').at(1).props().onClick();
    expect(primaryClickMock).toHaveBeenCalled();
  });
});
