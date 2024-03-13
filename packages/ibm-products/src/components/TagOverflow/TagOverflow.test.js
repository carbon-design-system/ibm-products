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
import { FiveTags } from './TagOverflow.stories';

const blockClass = `${pkg.prefix}--tag-overflow`;
const componentName = TagOverflow.displayName;

// values to use
const className = `class-${uuidv4()}`;
// TODO: add test cases
describe(componentName, () => {

  const { ResizeObserver } = window;

  beforeEach(() => {
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));

    window.innerWidth = 500;
    fireEvent(window, new Event('resize'))
  });

  afterEach(() => {
    window.ResizeObserver = ResizeObserver;
  });

  it('renders a component TagOverflow', async () => {
    render(<FiveTags {...FiveTags.args}> </FiveTags>);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  // it('has no accessibility violations', async () => {
  //   const { container } = render(<TagOverflow> </TagOverflow>);
  //   expect(container).toBeAccessible(componentName);
  //   expect(container).toHaveNoAxeViolations();
  // });

  it('applies className to the containing node', async () => {
    render(<FiveTags {...FiveTags.args} className={className}> </FiveTags>);
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  // it('adds additional props to the containing node', async () => {
  //   render(<TagOverflow data-testid={dataTestId}> </TagOverflow>);
  //   screen.getByTestId(dataTestId);
  // });

  // it('forwards a ref to an appropriate node', async () => {
  //   const ref = React.createRef();
  //   render(<TagOverflow ref={ref}> </TagOverflow>);
  //   expect(ref.current).toHaveClass(blockClass);
  // });

  // it('adds the Devtools attribute to the containing node', async () => {
  //   render(<TagOverflow data-testid={dataTestId}> </TagOverflow>);

  //   expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
  //     componentName
  //   );
  // });
});
