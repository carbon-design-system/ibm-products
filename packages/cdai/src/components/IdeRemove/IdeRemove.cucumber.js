//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

const { cucumber } = require('gherkin-jest');
import { IdeRemove } from '.';
import * as props from './test_assets/testProps.js';
import { idAttributeSelector } from '../../component_helpers/IDHelper';
import { MEDIUM_IMPACT } from './IdeRemove';

cucumber.defineRule('Setup of the IdeRemove world', (world) => {
  world.componentToRender = IdeRemove;
});

cucumber.defineRule('a high impact removal IdeRemove component', (world) => {
  const mockFunctions = {
    onCancel: jest.fn(),
    onDelete: jest.fn(),
    onClose: jest.fn(),
  };
  world.ideInteractionCb = mockFunctions;
  world.props = {
    ...props.withHighImpact,
    ...mockFunctions,
  };
});

cucumber.defineRule('the remove button is disabled', (world) => {
  expect(
    world.mountedComponent.find('Modal').props().primaryButtonDisabled
  ).toBe(true);
});

cucumber.defineRule('when i enter the name of the item', (world) => {
  world.mountedComponent
    .find(idAttributeSelector('IdeRemove-modal-body-high-impact-textfield'))
    .simulate('change', { target: { value: props.testResourceName } });
});

cucumber.defineRule('the remove button is enabled', (world) => {
  expect(
    world.mountedComponent.find('Modal').props().primaryButtonDisabled
  ).toBe(false);
});

cucumber.defineRule('the deletion occurs when clicked', (world) => {
  expect(
    world.mountedComponent.find('Modal').props().primaryButtonDisabled
  ).toBe(false);
  // only do this is the button is not disabled
  world.mountedComponent.find('Modal').props().onRequestSubmit();
  // verify our mock delete was called
  expect(world.props.onDelete).toHaveBeenCalled();
});

cucumber.defineRule(
  'a complete set of {string} properties for the IdeRemove component',
  (world, propertySet) => {
    const mockFunctions = {
      onCancel: jest.fn(),
      onDelete: jest.fn(),
      onClose: jest.fn(),
    };

    let propSet;

    switch (propertySet) {
      default:
      case 'medium impact':
        propSet = props.withMediumImpact;
        break;
      case 'hight impact':
        propSet = props.withHighImpact;
        break;
    }

    world.ideInteractionCb = mockFunctions;
    world.props = {
      ...propSet,
      ...mockFunctions,
    };
  }
);

cucumber.defineRule(
  'the content of the IdeRemove component is rendered as expected',
  (world) => {
    // validate structure and content
    expect(
      world.mountedComponent.exists(idAttributeSelector(`IdeRemove-root`))
    ).toBe(true);
    expect(
      world.mountedComponent.exists(idAttributeSelector(`IdeRemove-modal`))
    ).toBe(true);
    expect(
      world.mountedComponent.exists(idAttributeSelector(`IdeRemove-modal-body`))
    ).toBe(true);
    expect(
      world.mountedComponent
        .find(idAttributeSelector(`IdeRemove-modal-body`))
        .text()
    ).toBe(props.coreConfig().deleteContent.body);
    if (world.props.removeType === MEDIUM_IMPACT) {
      // medium impact, confirm no text field
      expect(
        world.mountedComponent.exists(
          idAttributeSelector(`IdeRemove-modal-body-high-impact-textfield`)
        )
      ).toBe(false);
    } else {
      // high impact, confirm text field
      expect(
        world.mountedComponent.exists(
          idAttributeSelector(`IdeRemove-modal-body-high-impact-textfield`)
        )
      ).toBe(true);
    }
  }
);
