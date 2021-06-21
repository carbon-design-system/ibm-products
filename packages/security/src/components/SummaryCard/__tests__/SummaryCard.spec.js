/**
 * @file Summary card tests.
 * @copyright IBM Security 2020 - 2021
 */

import { Folder20 } from '@carbon/icons-react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import renderWithinLandmark from '../../../../config/jest/helpers/renderWithinLandmark';

import {
  SummaryCard,
  SummaryCardAction,
  SummaryCardBody,
  SummaryCardFooter,
  SummaryCardHeader,
  Tooltip,
} from '../../..';

import { carbonPrefix } from '../../../globals/namespace';
import { namespace as headerNamespace } from '../SummaryCardHeader/SummaryCardHeader';

describe('SummaryCard', () => {
  test('should have no Axe or DAP violations`', async () => {
    const { container } = renderWithinLandmark(
      <SummaryCard>
        <SummaryCardHeader
          title="test summary card title"
          status={
            <Tooltip showIcon iconDescription="test status icon description">
              test status tooltip content
            </Tooltip>
          }
          truncate
        />
        <SummaryCardBody>test card body content</SummaryCardBody>
        <SummaryCardFooter>
          <SummaryCardAction
            expandedContent="test expanded action content"
            renderIcon={Folder20}
          >
            test button label that is long and will be truncated
          </SummaryCardAction>
          <SummaryCardAction
            iconDescription="test action icon description"
            renderIcon={Folder20}
            hasIconOnly
            tooltipPosition="bottom"
            tooltipAlignment="center"
          />
        </SummaryCardFooter>
      </SummaryCard>
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('SummaryCard');
  });

  test('should have no Axe or DAP violations when the expandable content is shown`', async () => {
    const { container, getByText } = renderWithinLandmark(
      <SummaryCard>
        <SummaryCardHeader title="test summary card title" />
        <SummaryCardBody>test card body content</SummaryCardBody>
        <SummaryCardFooter>
          <SummaryCardAction
            expandedContent="test expanded action content"
            renderIcon={Folder20}
          >
            test button
          </SummaryCardAction>
        </SummaryCardFooter>
      </SummaryCard>
    );

    // Click on the action button to show expanded content.
    userEvent.click(getByText(/test button/i).closest('button'));

    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations(
      'SummaryCard with expandable content'
    );
  });

  test('should cycle summary card elements in tab order', () => {
    const { getByLabelText, getByText } = render(
      <SummaryCard>
        <SummaryCardHeader
          title="test summary card title"
          status={
            <Tooltip showIcon iconDescription="test status icon description">
              test status tooltip content
            </Tooltip>
          }
          truncate
        />
        <SummaryCardBody>test card body content</SummaryCardBody>
        <SummaryCardFooter>
          <SummaryCardAction
            expandedContent="test expanded action content"
            renderIcon={Folder20}
          >
            test button label that is long and will be truncated
          </SummaryCardAction>
          <SummaryCardAction
            iconDescription="test action icon description"
            renderIcon={Folder20}
            hasIconOnly
            tooltipPosition="bottom"
            tooltipAlignment="center"
          />
        </SummaryCardFooter>
      </SummaryCard>
    );

    const titleSelector = document.querySelector(
      `.${headerNamespace}__title button.${carbonPrefix}--tooltip--a11y`
    );

    userEvent.tab();

    // The title.
    // Because this title has a tooltip, its content is wrapped in a span.
    // Also, the title text is duplicated in the tooltip.
    // So we must use a selector:
    expect(titleSelector).toHaveFocus();

    userEvent.tab();

    // The status icon in the heading:
    expect(getByLabelText(/test status icon description/i)).toHaveFocus();

    userEvent.tab();

    // The first action button:
    expect(
      getByText(
        /test button label that is long and will be truncated/i
      ).closest('button')
    ).toHaveFocus();

    userEvent.tab();

    // The second action button (which is an icon-only button):
    expect(
      getByLabelText(/test action icon description/i).closest('button')
    ).toHaveFocus();

    userEvent.tab();
    userEvent.tab();

    // Loop complete.
    // The title.
    expect(titleSelector).toHaveFocus();
  });

  test('should accept a custom class name', () => {
    const { container } = render(
      <SummaryCard className="custom-class">test content</SummaryCard>
    );
    expect(container.firstElementChild).toHaveClass('custom-class');
  });

  test('should accept children', () => {
    const { queryByText } = render(<SummaryCard>test content</SummaryCard>);
    expect(queryByText(/test content/i)).toBeVisible();
  });

  test('should pass through extra props via spread attribute', () => {
    const { queryByTestId } = render(
      <SummaryCard data-testid="test-id">test content</SummaryCard>
    );
    expect(queryByTestId('test-id')).toBeVisible();
  });
});
