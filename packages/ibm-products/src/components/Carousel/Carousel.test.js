/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { Carousel } from '.';

const blockClass = `${pkg.prefix}--carousel`;
const componentName = Carousel.displayName;

// values to use
const children = `hello, world (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  // The Carousel component uses IntersectionObserver.
  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: () => null,
      unobserve: () => null,
    }));
  });

  it('renders a component Carousel', () => {
    render(<Carousel data-testid={dataTestId}> </Carousel>);
    expect(screen.getByTestId(dataTestId)).toHaveClass(blockClass);
  });

  // Skipping.
  // jsdom does not support features like ReactRef.current.clientWidth;
  it.skip('has no accessibility violations', async () => {
    const { container } = render(<Carousel> </Carousel>);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, () => {
    render(<Carousel>{children}</Carousel>);
    screen.getByText(children);
  });

  it('applies className to the containing node', () => {
    render(
      <Carousel data-testid={dataTestId} className={className}>
        {' '}
      </Carousel>
    );
    expect(screen.getByTestId(dataTestId)).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<Carousel data-testid={dataTestId}> </Carousel>);
    screen.getByTestId(dataTestId);
  });

  // We are using https://react.dev/reference/react/useImperativeHandle
  // to return only methods specific to the Carousel's functionality:
  // scrollNext, scrollPrev, scrollToReset, and scrollToView.
  it('forwards a ref to specific callback functions only', () => {
    const ref = React.createRef();
    render(<Carousel ref={ref}> </Carousel>);
    expect(ref.current.scrollNext).toBeDefined();
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<Carousel data-testid={dataTestId}> </Carousel>);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
