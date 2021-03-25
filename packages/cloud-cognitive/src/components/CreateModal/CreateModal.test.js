/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';
import { TextInput } from 'carbon-components-react';

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

describe(componentName, () => {
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
