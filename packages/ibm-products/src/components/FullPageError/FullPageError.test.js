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
  it('renders a component FullPageError', () => {
    render(<FullPageError {...defaultProps} />);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', () => {
    const { container } = render(<FullPageError {...defaultProps} />);
    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  it('renders children', () => {
    render(<FullPageError {...defaultProps}>{children}</FullPageError>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it('applies className to the containing node', () => {
    render(<FullPageError {...defaultProps} />);
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<FullPageError {...defaultProps} />);
    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<FullPageError {...defaultProps} ref={ref} />);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<FullPageError {...defaultProps} />);
    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  it('renders error label', () => {
    render(<FullPageError {...defaultProps} />);
    expect(screen.getByText('↳ ' + errorLabel)).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<FullPageError {...defaultProps} />);
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<FullPageError {...defaultProps} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders custom error content when kind is "custom"', () => {
    render(<FullPageError {...defaultProps} kind="custom" />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText('↳ ' + errorLabel)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('renders 403 error content with provided description', () => {
    render(<FullPageError {...defaultProps} kind="403" />);
    expect(screen.getByText('Access denied')).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('renders 404 error content with provided description', () => {
    render(<FullPageError {...defaultProps} kind="404" />);
    expect(screen.getByText('Page not found')).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('renders default 403 error content when kind is "403" and no description provided', () => {
    render(<FullPageError {...defaultProps} kind="403" description="" />);
    expect(screen.getByText(/Access denied/i)).toBeInTheDocument();
    expect(
      screen.getByText(/You are not authorized to access the requested page/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Please verify that you are logged in to the hosting environment and your access permissions are correct/i
      )
    ).toBeInTheDocument();
  });

  it('renders default 404 error content when kind is "404" and no description provided', () => {
    render(<FullPageError {...defaultProps} kind="404" description="" />);
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(
      screen.getByText(/The page you requested has moved or is unavailable/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Please check the URL or search the site for the requested content/i
      )
    ).toBeInTheDocument();
  });
});
