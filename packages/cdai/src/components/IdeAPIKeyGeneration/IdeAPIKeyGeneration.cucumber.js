//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

const { cucumber } = require('gherkin-jest');
const { HookType } = require('stucumber');

jest.mock('../../component_helpers/Clipboard');

import { IdeAPIKeyGeneration } from '.';
import * as props from './test_assets/testProps.js';
import { idAttributeSelector } from '../../component_helpers/IDHelper';
import { copyToClipboard } from '../../component_helpers/Clipboard';

cucumber.defineRule('Setup of the IdeAPIKeyGeneration world', (world) => {
  world.componentToRender = IdeAPIKeyGeneration;
});

// common teardown
cucumber.addHook(HookType.AfterScenarios, () => {
  copyToClipboard.mockClear();
});

cucumber.addHook(HookType.AfterFeatures, () => {
  copyToClipboard.mockRestore();
});

cucumber.defineRule('a core configuration and no steps', (world) => {
  world.defaultProps = props.coreConfigFunc();
});

cucumber.defineRule(
  'a core configuration with a descriptive name step',
  (world) => {
    world.defaultProps = {
      ...props.coreConfigFunc(),
      ...props.descriptiveNameStepConfigFunc(),
    };
  }
);

cucumber.defineRule('a core configuration with custom steps', (world) => {
  world.defaultProps = {
    ...props.coreConfigFunc(),
    ...props.customStepsConfigFunc(),
  };
});

cucumber.defineRule(
  'a core configuration with a descriptive name step and custom steps',
  (world) => {
    world.defaultProps = {
      ...props.coreConfigFunc(),
      ...props.descriptiveNameStepConfigFunc(),
      ...props.customStepsConfigFunc(),
    };
  }
);

cucumber.defineRule(
  'the callback property {string} is specified',
  (world, callbackName) => {
    world.callbacks = { ...world.callbacks, [callbackName]: jest.fn() };
    world.props = {
      ...world.props,
      [callbackName]: world.callbacks[callbackName],
    };
  }
);

cucumber.defineRule(
  'the descriptiveNameStep property {string} with value {string} is specified',
  (world, propName, propValue) => {
    world.props = {
      ...world.props,
      descriptiveNameStep: {
        ...world.defaultProps.descriptiveNameStep,
        [propName]: propValue,
      },
    };
  }
);

cucumber.defineRule(
  'the descriptiveNameStep {string} property changes to the value {string}',
  (world, propName, propValue) => {
    const descriptiveNameStep = {
      ...world.defaultProps.descriptiveNameStep,
      [propName]: propValue,
    };

    world.mountedComponent.setProps({
      descriptiveNameStep,
    });
  }
);

cucumber.defineRule(
  'the {string} element is rendered with a {string} property set to {string}',
  (world, elementName, propertyName, value) => {
    const element = world.mountedComponent.find(
      idAttributeSelector(`IdeAPIKeyGeneration-${elementName}`)
    );
    expect(element.exists()).toBe(true);
    expect(element.props()[propertyName]).toBe(value);
  }
);

cucumber.defineRule(
  'the {string} element is rendered with a {string} property set to false',
  (world, elementName, propertyName) => {
    const element = world.mountedComponent.find(
      idAttributeSelector(`IdeAPIKeyGeneration-${elementName}`)
    );
    expect(element.exists()).toBe(true);
    expect(element.props()[propertyName]).toBe(false);
  }
);

cucumber.defineRule(
  'the {string} element is rendered with a {string} property set to true',
  (world, elementName, propertyName) => {
    const element = world.mountedComponent.find(
      idAttributeSelector(`IdeAPIKeyGeneration-${elementName}`)
    );
    expect(element.exists()).toBe(true);
    expect(element.props()[propertyName]).toBe(true);
  }
);

cucumber.defineRule(
  'the {string} element is rendered with no {string} property',
  (world, elementName, propertyName) => {
    const element = world.mountedComponent.find(
      idAttributeSelector(`IdeAPIKeyGeneration-${elementName}`)
    );
    expect(element.exists()).toBe(true);
    expect(element.props()[propertyName]).toBeUndefined();
  }
);

cucumber.defineRule(
  'the {string} element is rendered with text {string}',
  (world, elementName, value) => {
    const element = world.mountedComponent.find(
      idAttributeSelector(`IdeAPIKeyGeneration-${elementName}`)
    );
    expect(element.exists()).toBe(true);
    expect(element.text()).toBe(value);
  }
);

cucumber.defineRule(
  'the {string} callback prop on the {string} element is invoked',
  (world, callback, elementName) => {
    const element = world.mountedComponent.find(
      idAttributeSelector(`IdeAPIKeyGeneration-${elementName}`)
    );
    expect(element.exists()).toBe(true);
    element.props()[callback]();
  }
);

cucumber.defineRule(
  'the {string} element is not rendered',
  (world, elementName) => {
    expect(
      world.mountedComponent
        .find(idAttributeSelector(`IdeAPIKeyGeneration-${elementName}`))
        .exists()
    ).toBe(false);
  }
);

cucumber.defineRule(
  'the modal has a {string} button with the label {string}',
  (world, buttonOrder, labelText) => {
    expect(
      world.mountedComponent
        .find(idAttributeSelector(`IdeAPIKeyGeneration`))
        .props()[`${buttonOrder}ButtonText`]
    ).toBe(labelText);
  }
);

cucumber.defineRule(
  'the modal has a {string} property with the value {string}',
  (world, propertyName, value) => {
    expect(
      world.mountedComponent
        .find(idAttributeSelector(`IdeAPIKeyGeneration`))
        .props()[propertyName]
    ).toBe(value);
  }
);

cucumber.defineRule(
  'the modal {string} button is {string}',
  (world, buttonOrder, state) => {
    expect(
      world.mountedComponent
        .find(idAttributeSelector(`IdeAPIKeyGeneration`))
        .props()[`${buttonOrder}ButtonDisabled`]
    ).toBe(state === 'disabled');
  }
);

cucumber.defineRule('I click on the {string} element', (world, elementName) => {
  world.mountedComponent
    .find(idAttributeSelector(`IdeAPIKeyGeneration-${elementName}`))
    .simulate('click', { preventDefault: jest.fn() });
});

const modalButtonCallbacks = {
  close: 'onRequestClose',
  secondary: 'onSecondarySubmit',
  primary: 'onRequestSubmit',
};

cucumber.defineRule(
  'I click on the modal {string} button',
  (world, buttonOrder) => {
    const modalButtonCallback = modalButtonCallbacks[buttonOrder];
    world.mountedComponent
      .find(idAttributeSelector(`IdeAPIKeyGeneration`))
      .props()
      // prettier clashes with the no-unexpected-multiline es-lint rule here
      // eslint-disable-next-line no-unexpected-multiline
      [modalButtonCallback]();
  }
);

cucumber.defineRule(
  'the {string} callback is invoked',
  (world, callbackName) => {
    expect(world.callbacks[callbackName]).toHaveBeenCalled();
  }
);

cucumber.defineRule(
  'the {string} callback is invoked with argument {int}',
  (world, callbackName, value) => {
    expect(world.callbacks[callbackName]).toBeCalled();
    expect(world.callbacks[callbackName].mock.calls[0][0]).toEqual(value);
    world.callbacks[callbackName].mockClear();
  }
);

cucumber.defineRule(
  'the {string} callback is invoked with an object with property {string} and value {string}',
  (world, callbackName, property, value) => {
    expect(world.callbacks[callbackName]).toBeCalled();
    expect(world.callbacks[callbackName].mock.calls[0][0][property]).toEqual(
      value
    );
  }
);

cucumber.defineRule(
  'the value {string} is copied to the clipboard',
  (world, value) => {
    expect(copyToClipboard).toHaveBeenCalled();
    // the cucumber library doesn't support strings with escaped " chars,
    // so we use ' chars instead and replace them here
    expect(copyToClipboard.mock.calls[0][1]).toEqual(value.replace(/'/g, '"'));
  }
);

cucumber.defineRule(
  'I type the value {string} into the {string} element',
  (world, value, elementName) => {
    world.mountedComponent
      .find(idAttributeSelector(`IdeAPIKeyGeneration-${elementName}`))
      .simulate('change', { target: { value } });
  }
);
