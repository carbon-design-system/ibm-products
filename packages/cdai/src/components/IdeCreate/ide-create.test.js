//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { act } from 'react-dom/test-utils';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IdeCreate from './ide-create';
import IdeCreateStep from './ide-create-step';
import { settings } from 'carbon-components';
const { prefix } = settings;

configure({ adapter: new Adapter() });

const props = {
  pageTitle: 'Test',
  buttonTextFormAction: 'Create',
  buttonTextFormCancel: 'Cancel',
  buttonTextStepNext: 'Next',
  buttonTextStepBack: 'Back',
  breadCrumbUrl: '/',
  usePreCheck: true,
};

const propsWithCallback = {
  pageTitle: 'Test',
  buttonTextFormAction: 'Create',
  buttonTextFormCancel: 'Cancel',
  buttonTextStepNext: 'Next',
  buttonTextStepBack: 'Back',
  breadCrumbCallback: jest.fn(),
  usePreCheck: true,
};

const propsNoCancel = {
  pageTitle: 'Test',
  buttonTextFormAction: 'Create',
  buttonTextStepNext: 'Next',
  buttonTextStepBack: 'Back',
  usePreCheck: true,
};

it('should render correct contents', () => {
  const wrapper = mount(<IdeCreate {...props} />);
  expect(wrapper.find('.ide-create-container')).toHaveLength(1);
  const secondaryButton = wrapper.find(`.${prefix}--btn--secondary`);
  expect(secondaryButton).toHaveLength(1);
  const secondaryNode = secondaryButton.getDOMNode();
  expect(secondaryNode).toBeDefined();
  expect(secondaryNode.textContent).toBe(props.buttonTextFormCancel);
  wrapper.unmount();
});

it('should render correct contents with a launch out link', () => {
  props.externalLink = true;
  const wrapper = mount(<IdeCreate {...props} />);
  expect(wrapper.find('.ide-create-container')).toHaveLength(1);
  const primaryButton = wrapper.find(`.${prefix}--btn--primary`);
  expect(primaryButton.props().renderIcon).not.toEqual(null);
  wrapper.unmount();
});

it('should render correct contents with no cancel step', () => {
  const wrapper = mount(<IdeCreate {...propsNoCancel} />);
  expect(wrapper.find('.ide-create-container')).toHaveLength(1);
  const secondaryButton = wrapper.find(`.${prefix}--btn--secondary`);
  expect(secondaryButton).toHaveLength(0);
  props.buttonTextStepNext = 'Next';
  wrapper.unmount();
});

it('should render correct contents with hidden next button', () => {
  props.buttonTextStepNext = '';
  const wrapper = mount(
    <IdeCreate {...props}>
      <IdeCreateStep />
      <IdeCreateStep />
    </IdeCreate>
  );
  expect(wrapper.find('.ide-create-container')).toHaveLength(1);
  const secondaryButton = wrapper.find(`.${prefix}--btn--secondary`);
  expect(secondaryButton).toHaveLength(1);
  const secondaryNode = secondaryButton.getDOMNode();
  expect(secondaryNode).toBeDefined();
  expect(secondaryNode.textContent).toBe(props.buttonTextFormCancel);
  props.buttonTextStepNext = 'Next';
  wrapper.unmount();
});

it('should move to the next panel', () => {
  const wrapper = mount(
    <IdeCreate {...props}>
      <IdeCreateStep />
      <IdeCreateStep />
    </IdeCreate>
  );
  const instance = wrapper.instance();
  instance.setNextPage();
  expect(instance.state.step).toBe(1);
  const primaryButton = wrapper.find(`.${prefix}--btn--primary`);
  expect(primaryButton).toHaveLength(1);
  const primaryNode = primaryButton.getDOMNode();
  expect(primaryNode).toBeDefined();
  expect(primaryNode.textContent).toBe(props.buttonTextFormAction);
  wrapper.unmount();
});

it('should disable the next button when stepNextDisabled is true', () => {
  const wrapper = mount(
    <IdeCreate {...props} stepNextDisabled={true}>
      <IdeCreateStep />
      <IdeCreateStep />
    </IdeCreate>
  );
  const primaryButton = wrapper.find(`.${prefix}--btn--primary`);
  expect(primaryButton.props().disabled).toBe(true);
  const instance = wrapper.instance();
  instance.setNextPage();
  expect(instance.state.step).toBe(0);
  wrapper.unmount();
});

it('should move to the next panel using internal function', () => {
  const wrapper = mount(
    <IdeCreate {...props}>
      <IdeCreateStep />
      <IdeCreateStep />
    </IdeCreate>
  );
  const instance = wrapper.instance();
  instance._handleNextButton();
  expect(instance.state.step).toBe(1);
  const primaryButton = wrapper.find(`.${prefix}--btn--primary`);
  expect(primaryButton).toHaveLength(1);
  const primaryNode = primaryButton.getDOMNode();
  expect(primaryNode).toBeDefined();
  expect(primaryNode.textContent).toBe(props.buttonTextFormAction);
  wrapper.unmount();
});

it('should not move to the next panel using internal function when disabled', () => {
  const wrapper = mount(<IdeCreate {...props} stepNextDisabled={true} />);
  const instance = wrapper.instance();
  instance._handleNextButton();
  expect(instance.state.step).toBe(0);
  wrapper.unmount();
});

it('should move to the previous panel', () => {
  const wrapper = mount(<IdeCreate {...props} />);
  const instance = wrapper.instance();
  instance.setNextPage();
  expect(instance.state.step).toBe(1);
  instance._handleBackButton();
  expect(instance.state.step).toBe(0);
  const secondaryButton = wrapper.find(`.${prefix}--btn--secondary`);
  expect(secondaryButton).toHaveLength(1);
  const secondaryNode = secondaryButton.getDOMNode();
  expect(secondaryNode).toBeDefined();
  expect(secondaryNode.textContent).toBe(props.buttonTextFormCancel);
  wrapper.unmount();
});

it('should render single panel for form only', () => {
  props.usePreCheck = false;
  const wrapper = mount(
    <IdeCreate {...props}>
      <IdeCreateStep />
    </IdeCreate>
  );
  const primaryButton = wrapper.find(`.${prefix}--btn--primary`);
  expect(primaryButton).toHaveLength(1);
  const primaryNode = primaryButton.getDOMNode();
  expect(primaryNode).toBeDefined();
  expect(primaryNode.textContent).toBe(props.buttonTextFormAction);
  props.usePreCheck = true;
  wrapper.unmount();
});

it('should set action button disabled', () => {
  const wrapper = mount(
    <IdeCreate {...props}>
      <IdeCreateStep />
      <IdeCreateStep />
    </IdeCreate>
  );
  const instance = wrapper.instance();
  instance.setNextPage();
  instance.setActionButtonDisabled(true);
  const primaryButton = wrapper.find(`.${prefix}--btn--primary`);
  expect(primaryButton).toHaveLength(1);
  const primaryNode = primaryButton.getDOMNode();
  expect(primaryNode).toBeDefined();
  expect(primaryNode.disabled).toBeTruthy();
  wrapper.unmount();
});

it('should set action button disabled when formActionDisabled is true', () => {
  const wrapper = mount(
    <IdeCreate {...props} formActionDisabled={true}>
      <IdeCreateStep />
      <IdeCreateStep />
    </IdeCreate>
  );
  const instance = wrapper.instance();
  instance.setNextPage();
  let primaryButton = wrapper.find(`.${prefix}--btn--primary`);
  expect(primaryButton).toHaveLength(1);
  let primaryNode = primaryButton.getDOMNode();
  expect(primaryNode).toBeDefined();
  expect(primaryNode.disabled).toBeTruthy();
  wrapper.setProps({ formActionDisabled: false });
  wrapper.update();
  primaryButton = wrapper.find(`.${prefix}--btn--primary`);
  expect(primaryButton).toHaveLength(1);
  primaryNode = primaryButton.getDOMNode();
  expect(primaryNode).toBeDefined();
  expect(primaryNode.disabled).toBeFalsy();
  wrapper.unmount();
});

it('should have default callback functions', () => {
  const wrapper = mount(<IdeCreate {...props} />);
  const instance = wrapper.instance();
  expect(instance.props.onFormAction).toBeDefined();
  expect(instance.props.onCancel).toBeDefined();
  instance.props.onFormAction();
  instance.props.onCancel();
  wrapper.unmount();
});

it('should call the callback functions', () => {
  props.usePreCheck = false;
  const onCancel = jest.fn();
  props.onCancel = onCancel;
  const onFormAction = jest.fn();
  props.onFormAction = onFormAction;
  const wrapper = mount(
    <IdeCreate {...props}>
      <IdeCreateStep />
    </IdeCreate>
  );
  const primaryButton = wrapper.find(`.${prefix}--btn--primary`);
  expect(primaryButton).toHaveLength(1);
  primaryButton.simulate('click');
  expect(onFormAction).toHaveBeenCalled();
  const secondaryButton = wrapper.find(`.${prefix}--btn--secondary`);
  expect(secondaryButton).toHaveLength(1);
  secondaryButton.simulate('click');
  expect(onCancel).toHaveBeenCalledTimes(1);
  const breadcrumb = wrapper.find(`.${prefix}--link`);
  expect(breadcrumb).toHaveLength(1);
  breadcrumb.simulate('click');
  expect(onCancel).toHaveBeenCalledTimes(1);
  wrapper.setProps({ useCancelOnBreadCrumb: true });
  breadcrumb.simulate('click');
  expect(onCancel).toHaveBeenCalledTimes(2);
  props.usePreCheck = true;
  wrapper.unmount();
});

it('should call consumers callback on breadcrumb is no breadCrumbURL, but defined breadCrumbCallback', () => {
  const wrapper = mount(
    <IdeCreate {...propsWithCallback}>
      <IdeCreateStep />
    </IdeCreate>
  );
  const breadcrumb = wrapper.find(`.${prefix}--link`);
  expect(breadcrumb).toHaveLength(1);
  breadcrumb.simulate('click');
  expect(propsWithCallback.breadCrumbCallback).toHaveBeenCalledTimes(1);
  wrapper.unmount();
});

it('should respond to scroll', () => {
  const wrapper = mount(<IdeCreate {...props} />);
  const instance = wrapper.instance();
  act(() => {
    global.window.dispatchEvent(new Event('scroll'));
  });
  expect(instance.state.fixedHeader).toBe(false);
  wrapper.unmount();
});

it('should handle scroll beyond top limit', () => {
  let getBoundingClientRectBak = Element.prototype.getBoundingClientRect;
  let testTopOffset = 0;
  /* IdeCreate uses getBoundingClientRect to calculate it's position but since
  enzyme doesn't support layout we need to mock it in order to test that the
  component reacts to changing top values */
  Element.prototype.getBoundingClientRect = jest.fn(() => {
    return {
      width: 0,
      height: 0,
      top: testTopOffset,
      left: 0,
      bottom: 0,
      right: 0,
    };
  });
  const wrapper = mount(<IdeCreate {...props} />);
  const instance = wrapper.instance();
  act(() => {
    global.window.dispatchEvent(new Event('scroll'));
  });
  expect(instance.state.fixedHeader).toBe(false);
  testTopOffset = -1;
  act(() => {
    global.window.dispatchEvent(new Event('scroll'));
  });
  expect(instance.state.fixedHeader).toBe(true);
  testTopOffset = -100;
  act(() => {
    global.window.dispatchEvent(new Event('scroll'));
  });
  expect(instance.state.fixedHeader).toBe(true);
  testTopOffset = 100;
  act(() => {
    global.window.dispatchEvent(new Event('scroll'));
  });
  expect(instance.state.fixedHeader).toBe(false);

  Element.prototype.getBoundingClientRect = getBoundingClientRectBak;
  wrapper.unmount();
});

it('should show sub-title', () => {
  props.subTitle = 'Sub-title';
  const wrapper = mount(<IdeCreate {...props} />);
  const subTitle = wrapper.find('.ide-create-form-subtitle');
  expect(subTitle).toHaveLength(1);
  props.subTitle = '';
  wrapper.unmount();
});

it('should show sub-title only in fixed', () => {
  let getBoundingClientRectBak = Element.prototype.getBoundingClientRect;
  let testTopOffset = 0;
  /* IdeCreate uses getBoundingClientRect to calculate it's position but since
  enzyme doesn't support layout we need to mock it in order to test that the
  component reacts to changing top values */
  Element.prototype.getBoundingClientRect = jest.fn(() => {
    return {
      width: 0,
      height: 0,
      top: testTopOffset,
      left: 0,
      bottom: 0,
      right: 0,
    };
  });
  props.subTitle = 'Sub-title';
  const wrapper = mount(<IdeCreate {...props} subTitleFixedOnly={true} />);
  const instance = wrapper.instance();
  act(() => {
    global.window.dispatchEvent(new Event('scroll'));
  });
  expect(instance.state.fixedHeader).toBe(false);
  let subTitle = wrapper.find('.ide-create-form-subtitle');
  expect(subTitle).toHaveLength(0);

  testTopOffset = -100;
  act(() => {
    global.window.dispatchEvent(new Event('scroll'));
  });

  wrapper.update();

  subTitle = wrapper.find('.ide-create-form-subtitle');
  expect(subTitle).toHaveLength(1);

  props.subTitle = '';
  Element.prototype.getBoundingClientRect = getBoundingClientRectBak;
  wrapper.unmount();
});

it('should show progress indicator when there are multiple steps', () => {
  props.usePreCheck = false;
  const wrapper = mount(
    <IdeCreate {...props}>
      <IdeCreateStep label="one" />
      <IdeCreateStep label="two" />
    </IdeCreate>
  );
  const progress = wrapper.find('.ide-create-progress-container');
  expect(progress).toHaveLength(1);

  const steps = progress.find(`.${prefix}--progress-step`);
  expect(steps.length).toEqual(2);

  // click on second step
  steps.at(1).find('button').simulate('click');
  expect(wrapper.instance().state.step).toBe(1);

  props.usePreCheck = true;
  wrapper.unmount();
});

it('should show progress indicator when there are multiple steps and a pre-check', () => {
  const wrapper = mount(
    <IdeCreate {...props}>
      <IdeCreateStep />
      <IdeCreateStep label="one" />
      <IdeCreateStep label="two" />
    </IdeCreate>
  );
  const primaryButton = wrapper.find(`.${prefix}--btn--primary`);
  expect(primaryButton).toHaveLength(1);
  primaryButton.simulate('click');

  const progress = wrapper.find('.ide-create-progress-container');
  expect(progress).toHaveLength(1);

  const steps = progress.find(`.${prefix}--progress-step`);
  expect(steps.length).toEqual(2);

  // click on second step
  steps.at(1).find('button').simulate('click');
  expect(wrapper.instance().state.step).toBe(2);

  wrapper.setProps({ disableProgressOnChange: true });
  wrapper.update();
  steps.at(0).find('button').simulate('click');
  expect(wrapper.instance().state.step).toBe(2);

  wrapper.unmount();
});

it('_onProgressChange internal function should not update step when disabled ', () => {
  const wrapper = mount(
    <IdeCreate {...props} usePreCheck={false}>
      <IdeCreateStep />
      <IdeCreateStep />
    </IdeCreate>
  );
  const instance = wrapper.instance();
  const stepsDisabled = [false, true];
  instance._onProgressChange(1, stepsDisabled);
  expect(instance.state.step).toBe(0);
  wrapper.unmount();
});

it('should not click on a disabled step when usePreCheck is set', () => {
  const wrapper = mount(
    <IdeCreate {...props}>
      <IdeCreateStep />
      <IdeCreateStep label="one" />
      <IdeCreateStep label="two" disabled />
    </IdeCreate>
  );

  const primaryButton = wrapper.find(`.${prefix}--btn--primary`);
  expect(primaryButton).toHaveLength(1);
  primaryButton.simulate('click');

  const progress = wrapper.find('.ide-create-progress-container');
  expect(progress).toHaveLength(1);

  const steps = progress.find(`.${prefix}--progress-step`);
  expect(steps.length).toEqual(2);

  // click on second step - disabled
  steps.at(1).find('button').simulate('click');
  expect(wrapper.instance().state.step).toBe(1);
  wrapper.unmount();
});

it('validate no label on pre-check step', () => {
  const spy = jest.spyOn(console, 'error').mockImplementation();

  let wrapper;
  try {
    wrapper = mount(
      <IdeCreate {...props}>
        <IdeCreateStep label="wrong" />
      </IdeCreate>
    );
  } catch (e) {
    expect(spy).toBeCalled();
    expect(e.message).toEqual(
      'Error: label should not be set on first step when usePreCheck is set'
    );
  } finally {
    spy.mockRestore(); // Remove mock
    if (wrapper) {
      wrapper.unmount();
    }
  }
});
