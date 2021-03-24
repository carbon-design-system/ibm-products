/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import '../../enable-all'; // must come before component is imported (directly or indirectly)
import uuidv4 from '../../global/js/utils/uuidv4';
import { pkg } from '../../settings';
import { EmptyState } from '.';
import { NoDataEmptyState } from './NoDataEmptyState';
import CustomIllustration from './story_assets/empty-state-bright-magnifying-glass.svg';

const dataTestId = uuidv4();
const blockClass = `${pkg.prefix}--empty-state`;
const { name } = EmptyState;

describe(name, () => {
  it('should render empty state header and call the action', () => {
    const { click } = fireEvent;
    const { fn } = jest;
    const onActionHandler = fn();

    const { getByText } = render(
      <EmptyState
        heading="Empty state heading"
        subtext="Empty state subtext"
        actionText="Create new"
        actionType="tertiary"
        onActionEvent={onActionHandler}
      />
    );

    click(getByText('Create new'));
    expect(onActionHandler).toBeCalled();
  });

  it('should render a clickable link and match rendered url to linkUrl prop', () => {
    const { getByText, container } = render(
      <EmptyState
        heading="Empty state heading"
        subtext="Empty state subtext"
        linkText="View documentation"
        linkUrl="https://www.carbondesignsystem.com/"
      />
    );
    const { click } = fireEvent;
    const link = container.querySelector('a').href;
    click(getByText('View documentation'));
    expect(link.length && link).toEqual('https://www.carbondesignsystem.com/');
  });

  it('should render heading by passing string', () => {
    const { getByText } = render(
      <EmptyState heading="Empty state heading" subtext="Empty state subtext" />
    );
    expect(getByText('Empty state heading')).toBeTruthy();
  });

  it('should render heading by passing node', () => {
    const { getByText } = render(
      <EmptyState
        heading={<h3>Custom heading</h3>}
        subtext="Empty state subtext"
      />
    );
    expect(getByText('Custom heading')).toBeTruthy();
  });

  it('should render subtext by passing string', () => {
    const { getByText } = render(
      <EmptyState heading="Empty state header" subtext="Empty state subtext" />
    );
    expect(getByText('Empty state subtext')).toBeTruthy();
  });

  it('should render subtext by passing node', () => {
    const { getByText } = render(
      <EmptyState
        heading="Empty state header"
        subtext={<p>This is the subtext of the empty state</p>}
      />
    );
    expect(getByText('This is the subtext of the empty state')).toBeTruthy();
  });

  it('should render empty state with illustration', () => {
    const { container } = render(<NoDataEmptyState />);
    const renderedSvg = container.querySelector('svg');
    expect(renderedSvg).toBeTruthy();
  });

  it('should render a custom illustration', () => {
    const { container } = render(
      <EmptyState illustration={CustomIllustration} />
    );
    const customIllustrationElement = container.querySelector('img');
    expect(customIllustrationElement).toBeTruthy();
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<EmptyState ref={ref} />);
    expect(ref.current.classList.contains(blockClass)).toBeTruthy();
  });

  it('adds additional properties to the containing node', () => {
    const { container } = render(<EmptyState data-testid={dataTestId} />);
    expect(
      container.querySelector(`.${blockClass}[data-testid="${dataTestId}"]`)
    ).toBeInTheDocument();
  });
});
