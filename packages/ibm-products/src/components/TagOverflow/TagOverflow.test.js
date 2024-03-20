/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { TagOverflow } from '.';
import { FiveTags, ManyTags } from './TagOverflow.stories';

const blockClass = `${pkg.prefix}--tag-overflow`;
const componentName = TagOverflow.displayName;

// values to use
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();
const tagWidth = 60;

describe(componentName, () => {
  const { ResizeObserver } = window;

  beforeEach(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));

    window.innerWidth = 500;
    fireEvent(window, new Event('resize'));
  });

  afterEach(() => {
    window.ResizeObserver = ResizeObserver;
  });

  it('renders a component TagOverflow', async () => {
    render(<TagOverflow> </TagOverflow>);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<TagOverflow> </TagOverflow>);
    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', async () => {
    render(<TagOverflow className={className}> </TagOverflow>);
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', async () => {
    render(<TagOverflow data-testid={dataTestId}> </TagOverflow>);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    render(<TagOverflow ref={ref}> </TagOverflow>);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', async () => {
    render(<TagOverflow data-testid={dataTestId}> </TagOverflow>);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  it('Renders all as visible tags when space available', async () => {
    const tagCount = FiveTags.args.items.length;
    window.innerWidth = tagWidth * tagCount + 40;

    render(<FiveTags {...FiveTags.args} />);

    const firstTagLabel = FiveTags.args.items[0].label;
    const lastTagLabel = FiveTags.args.items[tagCount - 1].label;

    // first and last should be visible
    screen.getByText(firstTagLabel, {
      selector: `.${blockClass}__item--tag span`,
    });

    screen.getByText(lastTagLabel, {
      selector: `.${blockClass}__item--tag span`,
    });
  });

  it('Obeys max visible', async () => {
    render(<ManyTags {...ManyTags.args} maxVisible={5} />);

    expect(
      screen.getAllByText(/Tag [0-9]+/, {
        selector: `.${blockClass}__item--tag span`,
      }).length
    ).toEqual(5);
  });
});
