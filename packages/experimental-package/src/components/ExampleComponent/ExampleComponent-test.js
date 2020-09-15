import React from 'react';
import { shallow } from 'enzyme';
import { ExampleComponent } from './ExampleComponent';

describe('ExampleComponent', () => {
  let wrapper;
  const primaryClickMock = jest.fn();
  const secondaryClickMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<ExampleComponent />);
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
