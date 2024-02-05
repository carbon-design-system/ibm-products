/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { FullPageError } from '.';

const blockClass = `${pkg.prefix}--full-page-error`;
const componentName = FullPageError.displayName;

// values to use
const children = `hello, world (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

const errorLabel = uuidv4();
const description = uuidv4();
const ref = React.createRef();
const title = uuidv4();
const defaultProps = {
  title,
  className,
  errorLabel,
  description,
  ref,
  'data-testid': dataTestId,
};

describe(componentName, () => {
  it('renders a component FullPageError', async () => {
    render(<FullPageError {...defaultProps}> </FullPageError>);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <FullPageError {...defaultProps}> </FullPageError>
    );
    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, async () => {
    render(<FullPageError {...defaultProps}>{children}</FullPageError>);
    screen.getByText(children);
  });

  it('applies className to the containing node', async () => {
    render(
      <FullPageError {...defaultProps} className={className}>
        {' '}
      </FullPageError>
    );
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', async () => {
    render(
      <FullPageError {...defaultProps} data-testid={dataTestId}>
        {' '}
      </FullPageError>
    );
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    render(
      <FullPageError {...defaultProps} ref={ref}>
        {' '}
      </FullPageError>
    );
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', async () => {
    render(
      <FullPageError {...defaultProps} data-testid={dataTestId}>
        {' '}
      </FullPageError>
    );

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
  it('renders error label', () => {
    render(<FullPageError {...defaultProps} />);
    screen.getByText(errorLabel);
  });

  it('renders description', () => {
    render(<FullPageError {...defaultProps} />);
    screen.getByText(description);
  });

  it('renders title', () => {
    render(<FullPageError {...defaultProps} />);
    screen.getByText(title);
  });
});
