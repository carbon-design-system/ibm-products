/**
 * @file String formatter tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';
import renderWithinLandmark from '../../../../config/jest/helpers/renderWithinLandmark';

import { StringFormatter } from '../../..';
import { namespace } from '../StringFormatter';

describe('StringFormatter', () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(
      <StringFormatter
        value="This is a long test string that would normally be truncated."
        truncate
        lines={2}
        width="50px"
      />
    );
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('StringFormatter');
  });

  test('should add a custom class', () => {
    const { getByText } = render(
      <StringFormatter value="test content" className="custom-class" />
    );
    expect(getByText(/test content/i)).toHaveClass('custom-class');
  });

  test('should truncate text via the `truncate` prop', () => {
    const { container } = render(
      <StringFormatter value="test content" truncate />
    );
    expect(
      container.querySelector(`.${namespace}--truncate`)
    ).toHaveTextContent(/test content/i);
  });

  // Does not work:
  // test('should apply correct style attribute when `lines` provided', () => {
  //   const { getAllByText } = render(
  //     <StringFormatter value="test content" lines={4} />
  //   );
  //   expect(getAllByText(/test content/i)[0]).toHaveStyle('-webkit-link-clamp: 4');
  // });

  test('should apply correct style attribute when `width` provided', () => {
    const { getAllByText } = render(
      <StringFormatter value="test content" width="200px" />
    );
    expect(getAllByText(/test content/i)[0]).toHaveStyle('max-width: 200px;');
  });
});
