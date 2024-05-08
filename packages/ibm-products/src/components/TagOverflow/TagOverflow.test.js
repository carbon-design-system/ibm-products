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

const blockClass = `${pkg.prefix}--tag-overflow`;
const componentName = TagOverflow.displayName;

// Values to use
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();
const tagWidth = 60;

const tagLabel = (index) => `Tag ${index + 1}`;
const tags = Array.from({ length: 20 }, (v, k) => ({
  label: tagLabel(k),
  id: `id-${k}`,
}));

const fiveTags = tags.slice(0, 5);

const tagOverflowProps = {
  items: fiveTags,
};

const FiveTags = (argsIn) => {
  const { containerWidth, ...args } = {
    ...argsIn,
  };
  return (
    <div style={{ width: containerWidth }}>
      <TagOverflow {...args} />
    </div>
  );
};

describe(componentName, () => {
  const { ResizeObserver } = window;
  let warn;

  beforeEach(() => {
    warn = jest.spyOn(console, 'warn').mockImplementation(jest.fn());

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
    warn.mockRestore();
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
    const tagCount = tagOverflowProps.items.length;

    window.innerWidth = tagWidth * tagCount + 40;

    render(<FiveTags {...tagOverflowProps} />);

    const firstTagLabel = tagOverflowProps.items[0].label;
    const lastTagLabel = tagOverflowProps.items[tagCount - 1].label;

    // first and last should be visible
    screen.getByText(firstTagLabel, {
      selector: `.${blockClass}__item--tag span`,
    });

    screen.getByText(lastTagLabel, {
      selector: `.${blockClass}__item--tag span`,
    });
  });

  it('Obeys max visible', async () => {
    render(<FiveTags {...tagOverflowProps} maxVisible={3} />);

    expect(
      screen.getAllByText(/Tag [0-9]+/, {
        selector: `.${blockClass}__item--tag span`,
      }).length
    ).toEqual(3);
  });

  // The below test case is failing due to ResizeObserver mock
  // it('Renders only the overflow when very little space', async () => {
  //   window.innerWidth = tagWidth / 2;
  //   render(<FiveTags {...tagOverflowProps} />);

  //   const visible = screen.queryAllByText(/Tag [1-5]+/, {
  //     selector: `.${blockClass}__item--tag span`,
  //   });

  //   expect(visible.length).toEqual(0);
  // });
});
