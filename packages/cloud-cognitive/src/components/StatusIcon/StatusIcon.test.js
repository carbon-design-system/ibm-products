/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import React from 'react';

import { pkg } from '../../settings';
import '../../utils/enable-all';

import uuidv4 from '../../global/js/utils/uuidv4';

import { StatusIcon } from '.';

const blockClass = `${pkg.prefix}--status-icon`;
const { componentName } = StatusIcon.displayName;
const className = `class-${uuidv4()}`;
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

describe(componentName, () => {
  it('renders a component StatusIcon', () => {
    const { container } = render(
      <StatusIcon
        className={className}
        kind="fatal"
        iconDescription="fatal"
        size="sm"
        theme="light"
      />
    );
    expect(container).toBeInTheDocument();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <StatusIcon
        kind="fatal"
        iconDescription="fatal"
        size="sm"
        theme="light"
      />
    );
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  }, 80000);

  it('applies className to the root node', () => {
    const className = 'className';
    const { container } = render(
      <StatusIcon
        className={className}
        kind="fatal"
        iconDescription="fatal"
        size="sm"
        theme="light"
      />
    );
    expect(container.querySelector(`.${className}`)).toBeInTheDocument();
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
      const hasKindProp = element.className.includes(`${kind}`);
      expect(hasKindProp).toBeTruthy();
    });
  });

  iconTypes.forEach((desc) => {
    it(`applies the proper title element when icon description of ${desc} is passed`, () => {
      const { container } = render(
        <StatusIcon
          kind={desc}
          iconDescription={desc}
          size="sm"
          theme="light"
        />
      );
      const element = container.querySelector(
        `.${blockClass}--light.${blockClass}--light-${desc} .${blockClass}__icon`
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
      const hasThemeProp = element.className.includes(`${theme}`);
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
        `.${blockClass}--light.${blockClass}--light-fatal .${blockClass}__icon`
      );
      const iconHeight = element.getAttribute('height');
      expect(iconHeight).toEqual(output);
    });
  });
});
