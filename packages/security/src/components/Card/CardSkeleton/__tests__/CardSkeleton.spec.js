/**
 * @file Card skeleton tests.
 * @copyright IBM Security 2020
 */

import React from 'react';
import renderWithinLandmark from '../../../../../config/jest/helpers/renderWithinLandmark';

import { CardSkeleton } from '../../../..';

describe('CardSkeleton', () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(<CardSkeleton />);
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('CardSkeleton');
  });
});
