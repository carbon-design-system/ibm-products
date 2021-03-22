/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import '../../enable-all'; // must come before component is imported (directly or indirectly)

import uuidv4 from '../../global/js/utils/uuidv4';

import { ExampleComponent } from '.';

const blockClass = `${pkg.prefix}--example-component`;
const componentName = ExampleComponent.displayName;

const { click } = fireEvent;

const borderColor = '#acefed';
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();
const primaryButtonLabel = `hello, world (${uuidv4()})`;
const secondaryButtonLabel = `goodbye (${uuidv4()})`;

describe(componentName, () => {
  it('renders a component ExampleComponent', () => {
    const { container } = render(
      <ExampleComponent {...{ primaryButtonLabel, secondaryButtonLabel }} />
    );
    expect(container.querySelector(`.${blockClass}`)).not.toBeNull();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <ExampleComponent {...{ primaryButtonLabel, secondaryButtonLabel }} />
    );
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders the borderColor property`, () => {
    const { container } = render(
      <ExampleComponent
        {...{ primaryButtonLabel, secondaryButtonLabel, borderColor }}
      />
    );
    const style = window.getComputedStyle(
      container.querySelector(`.${blockClass}`)
    );
    expect(style.getPropertyValue(`--${pkg.prefix}-border-color`)).toEqual(
      borderColor
    );
  });

  it(`renders the boxedBorder property`, () => {
    const { container } = render(
      <ExampleComponent
        {...{ primaryButtonLabel, secondaryButtonLabel }}
        boxedBorder
      />
    );
    expect(
      container.querySelector(`.${blockClass}--boxed-set`)
    ).toBeInTheDocument();
  });

  it('adds className to the containing node', () => {
    const { container } = render(
      <ExampleComponent
        {...{ primaryButtonLabel, secondaryButtonLabel, className }}
      />
    );
    expect(container.querySelector(`.${className}`)).toBeInTheDocument();
  });

  it(`renders the disabled property`, () => {
    const { container } = render(
      <ExampleComponent
        {...{ primaryButtonLabel, secondaryButtonLabel }}
        disabled
      />
    );
    expect(
      container.querySelector(`.${blockClass}__primary-button`)
    ).toHaveProperty('disabled');
  });

  it('notifies a click on each button', () => {
    const primaryHandler = jest.fn();
    const secondaryHandler = jest.fn();
    const { container } = render(
      <ExampleComponent
        {...{ primaryButtonLabel, secondaryButtonLabel }}
        onPrimaryClick={primaryHandler}
        onSecondaryClick={secondaryHandler}
      />
    );
    const primaryButton = container.querySelector(
      `.${blockClass}__primary-button`
    );
    const secondaryButton = container.querySelector(
      `.${blockClass}__secondary-button`
    );
    click(primaryButton);
    click(secondaryButton);
    expect(primaryHandler).toBeCalledTimes(1);
    expect(secondaryHandler).toBeCalledTimes(1);
  });

  it('renders the primaryButtonLabel and secondaryButtonLabel properties', () => {
    render(
      <ExampleComponent {...{ primaryButtonLabel, secondaryButtonLabel }} />
    );
    expect(screen.getByText(primaryButtonLabel)).toBeTruthy();
    expect(screen.getByText(secondaryButtonLabel)).toBeTruthy();
  });

  it('renders the primaryKind and secondaryKind properties', () => {
    const { container } = render(
      <ExampleComponent
        {...{ primaryButtonLabel, secondaryButtonLabel }}
        primaryKind="danger"
        secondaryKind="tertiary"
      />
    );
    expect(
      container.querySelector(`.${blockClass}__primary-button.bx--btn--danger`)
    ).toBeInTheDocument();
    expect(
      container.querySelector(
        `.${blockClass}__secondary-button.bx--btn--tertiary`
      )
    ).toBeInTheDocument();
  });

  it('renders the size property', () => {
    const { container } = render(
      <ExampleComponent
        {...{ primaryButtonLabel, secondaryButtonLabel }}
        size="small"
      />
    );
    expect(
      container.querySelector(`.${blockClass}__primary-button.bx--btn--sm`)
    ).toBeInTheDocument();
  });

  it('adds additional properties to the containing node', () => {
    const { container } = render(
      <ExampleComponent
        {...{ primaryButtonLabel, secondaryButtonLabel }}
        data-testid={dataTestId}
      />
    );
    expect(
      container.querySelector(`.${blockClass}[data-testid="${dataTestId}"]`)
    ).toBeInTheDocument();
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(
      <ExampleComponent
        {...{ primaryButtonLabel, ref, secondaryButtonLabel }}
      />
    );
    expect(ref.current.classList.contains(blockClass)).toBeTruthy();
  });
});
