/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { EmptyState } from '.';
import CustomIllustration from './EmptyStateIllustrations/light/error.svg';

const { name } = EmptyState;

describe(name, () => {
  test('should render empty state header and call the action', () => {
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

  test('should render a clickable link and match rendered url to linkUrl prop', () => {
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

  test('should render heading by passing string', () => {
    const { getByText } = render(
      <EmptyState heading="Empty state heading" subtext="Empty state subtext" />
    );
    expect(getByText('Empty state heading')).toBeTruthy();
  });

  test('should render heading by passing node', () => {
    const { getByText } = render(
      <EmptyState
        heading={<h3>Custom heading</h3>}
        subtext="Empty state subtext"
      />
    );
    expect(getByText('Custom heading')).toBeTruthy();
  });

  test('should render subtext by passing string', () => {
    const { getByText } = render(
      <EmptyState heading="Empty state header" subtext="Empty state subtext" />
    );
    expect(getByText('Empty state subtext')).toBeTruthy();
  });

  test('should render subtext by passing node', () => {
    const { getByText } = render(
      <EmptyState
        heading="Empty state header"
        subtext={<p>This is the subtext of the empty state</p>}
      />
    );
    expect(getByText('This is the subtext of the empty state')).toBeTruthy();
  });

  test('should render empty state with illustration', () => {
    const { container } = render(<EmptyState illustration="nodata" />);
    const renderedSvg = container.querySelector('img');
    expect(renderedSvg).toBeTruthy();
  });

  test('should render svg as default illustration', () => {
    const { container } = render(<EmptyState illustration="nodata" />);
    const renderedSvgSrc = container.querySelector('img').src;
    expect(renderedSvgSrc.substr(renderedSvgSrc.length - 4)).toEqual('.svg');
  });

  test('should render a custom illustration', () => {
    const { container } = render(
      <EmptyState illustration={CustomIllustration} />
    );
    const customIllustrationElement = container.querySelector('img');
    expect(customIllustrationElement).toBeTruthy();
  });
});
