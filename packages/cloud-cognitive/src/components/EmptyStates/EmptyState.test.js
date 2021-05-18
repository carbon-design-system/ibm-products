/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import uuidv4 from '../../global/js/utils/uuidv4';
import { pkg } from '../../settings';
import { EmptyState } from '.';
import { NoDataEmptyState } from './NoDataEmptyState';
import { ErrorEmptyState } from './ErrorEmptyState';
import { NoTagsEmptyState } from './NoTagsEmptyState';
import { NotFoundEmptyState } from './NotFoundEmptyState';
import { NotificationsEmptyState } from './NotificationsEmptyState';
import { UnauthorizedEmptyState } from './UnauthorizedEmptyState';
import CustomIllustration from './story_assets/empty-state-bright-magnifying-glass.svg';

const dataTestId = uuidv4();
const blockClass = `${pkg.prefix}--empty-state`;
const { name } = EmptyState;

const defaultProps = {
  title: 'Empty state title',
  subtitle: 'Empty state subtitle',
};

describe(name, () => {
  it('should render empty state header and call the action', () => {
    const { click } = fireEvent;
    const { fn } = jest;
    const onActionHandler = fn();

    const { getByText } = render(
      <EmptyState
        actionText="Create new"
        onActionEvent={onActionHandler}
        {...defaultProps}
      />
    );

    click(getByText('Create new'));
    expect(onActionHandler).toBeCalled();
  });

  it('should render a clickable link and match rendered url to linkUrl prop', () => {
    const { getByText, container } = render(
      <EmptyState
        linkText="View documentation"
        linkUrl="https://www.carbondesignsystem.com/"
        {...defaultProps}
      />
    );
    const { click } = fireEvent;
    const link = container.querySelector('a').href;
    click(getByText('View documentation'));
    expect(link.length && link).toEqual('https://www.carbondesignsystem.com/');
  });

  it('should render title by passing string', () => {
    const { getByText } = render(<EmptyState {...defaultProps} />);
    expect(getByText('Empty state title')).toBeTruthy();
  });

  it('should render title by passing node', () => {
    const { getByText } = render(
      <EmptyState
        title={<h3>Custom title</h3>}
        subtitle="Empty state subtitle"
      />
    );
    expect(getByText('Custom title')).toBeTruthy();
  });

  it('should render subtitle by passing string', () => {
    const { getByText } = render(<EmptyState {...defaultProps} />);
    expect(getByText('Empty state subtitle')).toBeTruthy();
  });

  it('should render subtitle by passing node', () => {
    const { getByText } = render(
      <EmptyState
        title="Empty state header"
        subtitle={<p>This is the subtitle of the empty state</p>}
      />
    );
    expect(getByText('This is the subtitle of the empty state')).toBeTruthy();
  });

  it('should render a custom illustration', () => {
    const { container } = render(
      <EmptyState illustration={CustomIllustration} {...defaultProps} />
    );
    const customIllustrationElement = container.querySelector('img');
    expect(customIllustrationElement).toBeTruthy();
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<EmptyState ref={ref} {...defaultProps} />);
    expect(ref.current.classList.contains(blockClass)).toBeTruthy();
  });

  it('adds additional properties to the containing node', () => {
    const { container } = render(
      <EmptyState data-testid={dataTestId} {...defaultProps} />
    );
    expect(
      container.querySelector(`.${blockClass}[data-testid="${dataTestId}"]`)
    ).toBeInTheDocument();
  });

  it('should render the NoDataEmptyState', () => {
    const { container, rerender } = render(
      <NoDataEmptyState {...defaultProps} />
    );
    const renderedSvg = container.querySelector('svg');
    expect(renderedSvg).toBeTruthy();
    rerender(<NoDataEmptyState {...defaultProps} illustrationTheme="dark" />);
  });

  it('should render the ErrorEmptyState component', () => {
    const { container, rerender } = render(
      <ErrorEmptyState {...defaultProps} />
    );
    const renderedSvg = container.querySelector('svg');
    expect(renderedSvg).toBeTruthy();
    rerender(<ErrorEmptyState {...defaultProps} illustrationTheme="dark" />);
  });

  it('should render the NoTagsEmptyState component', () => {
    const { container, rerender } = render(
      <NoTagsEmptyState {...defaultProps} />
    );
    const renderedSvg = container.querySelector('svg');
    expect(renderedSvg).toBeTruthy();
    rerender(<NoTagsEmptyState {...defaultProps} illustrationTheme="dark" />);
  });
  it('should render the NotFoundEmptyState component', () => {
    const { container, rerender } = render(
      <NotFoundEmptyState {...defaultProps} />
    );
    const renderedSvg = container.querySelector('svg');
    expect(renderedSvg).toBeTruthy();
    rerender(<NotFoundEmptyState {...defaultProps} illustrationTheme="dark" />);
  });
  it('should render the NotificationsEmptyState component', () => {
    const { container, rerender } = render(
      <NotificationsEmptyState {...defaultProps} />
    );
    const renderedSvg = container.querySelector('svg');
    expect(renderedSvg).toBeTruthy();
    rerender(
      <NotificationsEmptyState {...defaultProps} illustrationTheme="dark" />
    );
  });
  it('should render the UnauthorizedEmptyState component', () => {
    const { container, rerender } = render(
      <UnauthorizedEmptyState {...defaultProps} />
    );
    const renderedSvg = container.querySelector('svg');
    expect(renderedSvg).toBeTruthy();
    rerender(
      <UnauthorizedEmptyState {...defaultProps} illustrationTheme="dark" />
    );
  });
});
