/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';
import {
  TextInput,
  NumberInput,
  TextArea,
  Dropdown,
} from 'carbon-components-react';

import { pkg, carbon } from '../../settings';
import '../../enable-all'; // must come before component is imported (directly or indirectly)

import uuidv4 from '../../global/js/utils/uuidv4';

const blockClass = `${pkg.prefix}--create-modal`;

import { CreateModal } from '.';
const componentName = CreateModal.displayName;

const className = `class-${uuidv4()}`;
const title = 'This is a test title';
const subtitle = 'This is a test subtitle';
const description =
  'This is a test description. It has several lines. It should render a modal.';
const dataTestId = uuidv4();
const onCloseReturnsTrue = jest.fn(() => true);
const onCloseReturnsFalse = jest.fn(() => false);
const { click } = fireEvent;

const children = [
  <TextInput
    key="form-field-1"
    id="1"
    labelText="Text input label"
    helperText="Helper text goes here"
    placeholder="Placeholder"
  />,
  <NumberInput
    key="form-field-2"
    id="1"
    className="create-modal--storybook-input"
    label="Number input label"
    helperText="Optional helper text goes here"
    min={0}
    max={50}
    value={1}
  />,
  <Dropdown
    key="form-field-3"
    id="default"
    titleText="Dropdown label"
    helperText="This is some helper text"
    label="Dropdown menu options"
    items={['Option 0', 'Option 1', 'Option 2']}
  />,
  <TextArea
    key="form-field-4"
    id="1"
    placeholder="Placeholder text"
    labelText="Text area label"
    helperText="Optional helper text"
  />,
];

describe(name, () => {
  it('renders a component CreateModal', () => {
    const { container } = render(
      <CreateModal open {...{ title, subtitle, description }}>
        <TextInput
          key="form-field-1"
          id="1"
          labelText="Text input label"
          helperText="Helper text goes here"
          placeholder="Placeholder"
        />
      </CreateModal>
    );
    expect(container.querySelector(`.${blockClass}`)).not.toBeNull();
  });

  it('renders title and description', () => {
    render(
      <CreateModal open {...{ title, subtitle, description }}>
        <TextInput
          key="form-field-1"
          id="1"
          labelText="Text input label"
          helperText="Helper text goes here"
          placeholder="Placeholder"
        />
      </CreateModal>
    );
    expect(
      screen.getByText(title) && screen.getByText(description)
    ).toBeTruthy();
  });

  it('applies className to the root node', () => {
    const { container } = render(
      <CreateModal open {...{ className, title, subtitle, description }}>
        <TextInput
          key="form-field-1"
          id="1"
          labelText="Text input label"
          helperText="Helper text goes here"
          placeholder="Placeholder"
        />
      </CreateModal>
    );
    const createModal = container.querySelector(`.${carbon.prefix}--modal`);
    expect(createModal.classList.contains(className)).toBeTruthy();
  });

  it('is visible when open is true', () => {
    const { container } = render(
      <CreateModal open {...{ className, title, subtitle, description }}>
        <TextInput
          key="form-field-1"
          id="1"
          labelText="Text input label"
          helperText="Helper text goes here"
          placeholder="Placeholder"
        />
      </CreateModal>
    );
    const createModal = container.querySelector(`.${carbon.prefix}--modal`);
    expect(createModal.classList.contains('is-visible')).toBeTruthy();
  });

  it('renders a form element that wraps children', () => {
    const { container } = render(
      <CreateModal open {...{ className, title, subtitle, description }}>
        <TextInput
          key="form-field-1"
          id="1"
          labelText="Text input label"
          helperText="Helper text goes here"
          placeholder="Placeholder"
        />
      </CreateModal>
    );
    const modalContent = container.querySelector(
      `.${carbon.prefix}--modal-content`
    );
    expect(modalContent.contains('.bx--form').toEqual(true));
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <CreateModal open {...{ className, title, subtitle, description }}>
        <TextInput
          key="form-field-1"
          id="1"
          labelText="Text input label"
          helperText="Helper text goes here"
          placeholder="Placeholder"
        />
      </CreateModal>
    );
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });
});
