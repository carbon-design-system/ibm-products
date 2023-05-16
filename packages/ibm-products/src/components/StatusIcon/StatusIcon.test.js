/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';

import { pkg } from '../../settings';

import uuidv4 from '../../global/js/utils/uuidv4';

import { StatusIcon } from '.';

const blockClass = `${pkg.prefix}--status-icon`;
const componentName = StatusIcon.displayName;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

const iconSizes = [
  { input: 'sm', output: '16' },
  { input: 'md', output: '20' },
  { input: 'lg', output: '24' },
  { input: 'xlg', output: '32' },
];

const iconTypes = [
  'fatal',
  'critical',
  'major-warning',
  'minor-warning',
  'undefined',
  'unknown',
  'normal',
  'info',
  'in-progress',
  'running',
  'pending',
];

const iconThemes = ['light', 'dark'];

const renderComponent = ({ ...rest } = {}) =>
  render(
    <StatusIcon
      {...rest}
      kind="fatal"
      iconDescription="fatal"
      size="sm"
      theme="light"
    />
  );

describe(componentName, () => {
  it('renders a component StatusIcon', () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = renderComponent();
    await expect(container).toBeAccessible(componentName, 'scan_label');
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the root node', () => {
    const { container } = renderComponent({ className });
    expect(container.querySelector(`.${className}`)).toBeInTheDocument();
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    renderComponent({ ref });
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds additional properties to the containing node', () => {
    renderComponent({ 'data-testid': dataTestId });
    screen.getByTestId(dataTestId);
  });

  it('adds the Devtools attribute to the containing node', () => {
    renderComponent({ 'data-testid': dataTestId });

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  iconTypes.forEach((kind) => {
    it(`applies the proper className when kind prop of ${kind} is passed`, () => {
      const { container } = render(
        <StatusIcon
          kind={kind}
          iconDescription={kind}
          size="sm"
          theme="light"
        />
      );
      const element = container.querySelector(
        `.${blockClass}--light.${blockClass}--light-${kind}`
      );
      const hasKindProp = element.className.baseVal.includes(`${kind}`);
      expect(hasKindProp).toBeTruthy();
    });
  });

  iconTypes.forEach((label) => {
    it(`applies the proper title element when icon label of ${label} is passed`, () => {
      const { container } = render(
        <StatusIcon
          kind={label}
          iconDescription={label}
          size="sm"
          theme="light"
        />
      );
      const element = container.querySelector(
        `.${blockClass}--light.${blockClass}--light-${label}`
      );
      const hasIconDescriptionProp = element.querySelector('title').textContent;
      expect(hasIconDescriptionProp).toBeTruthy();
    });
  });

  iconThemes.forEach((theme) => {
    it(`applies the proper className when theme prop of ${theme} is passed`, () => {
      const { container } = render(
        <StatusIcon
          kind="fatal"
          iconDescription="fatal"
          size="sm"
          theme={theme}
        />
      );
      const element = container.querySelector(
        `.${blockClass}--${theme}.${blockClass}--${theme}-fatal`
      );
      const hasThemeProp = element.className.baseVal.includes(`${theme}`);
      expect(hasThemeProp).toBeTruthy();
    });
  });

  iconSizes.forEach(({ input, output }) => {
    it(`changes element size when size prop of ${input} is passed`, () => {
      const { container } = render(
        <StatusIcon
          kind="fatal"
          iconDescription="fatal"
          size={input}
          theme="light"
        />
      );
      const element = container.querySelector(
        `.${blockClass}--light.${blockClass}--light-fatal`
      );
      const iconHeight = element.getAttribute('height');
      expect(iconHeight).toEqual(output);
    });
  });
});
