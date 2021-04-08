/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';

import { pkg, carbon } from '../../settings';
import '../../utils/enable-all';

import uuidv4 from '../../global/js/utils/uuidv4';

import { StatusIcon } from '.';

const blockClass = `${pkg.prefix}--about-modal`;
const { componentName } = StatusIcon.displayName;

const testProps = {
  kind: 'fatal',
  iconDescription: 'fatal',
  size: 'small',
  theme: 'light',
};
const className = `class-${uuidv4()}`;
const renderComponent = ({ ...rest }) => {
  <StatusIcon
    {...rest}
    kind="fatal"
    iconDescription="fatal"
    size="small"
    theme="light"
  />;
};

describe(componentName, () => {
  it('renders a component StatusIcon', () => {
    renderComponent();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <StatusIcon
        kind="fatal"
        iconDescription="fatal"
        size="small"
        theme="light"
      />
    );
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the root node', () => {
    const { container } = renderComponent({ className });
    expect(container.querySelector(`.${blockClass}`)).toHaveClass(className);
  });

  it('applies the proper className when `kind` prop of `fatal` is passed', () => {
    const { container } = renderComponent();
    expect(container.querySelector(`.${blockClass}`)).toHaveClass(
      `${blockClass}--light-fatal`
    );
  });

  test('adds a class to the containing node', () => {
    const className = 'className';
    expect(
      render(
        <StatusIcon
          className={className}
          kind="fatal"
          iconDescription="fatal"
          size="small"
          theme="light"
        />
      ).container.querySelector(`.${className}`)
    ).toBeInTheDocument();
  });

  test('adds additional props to the containing node', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <StatusIcon
          kind="fatal"
          iconDescription="fatal"
          size="small"
          theme="light"
          data-testid={dataTestId}
        />
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });

  test('adds type prop to component', () => {
    const dataTestId = 'dataTestId';

    expect(
      render(
        <StatusIcon
          kind="fatal"
          iconDescription="fatal"
          size="small"
          theme="light"
          data-testid={dataTestId}
        />
      ).getByTestId(dataTestId)
    ).toBeInTheDocument();
  });
});
