/**
 * @file Important Content Area (ICA) skeleton tests.
 * @copyright IBM Security 2019
 */

import React from 'react';

import renderWithinLandmark from '../../../../../config/jest/helpers/renderWithinLandmark';

import ICASkeleton from '../ICASkeleton';

describe('ICASkeleton', () => {
  test('should have no Axe or DAP violations', async () => {
    const { container } = renderWithinLandmark(<ICASkeleton />);
    await expect(container).toHaveNoAxeViolations();
    await expect(container).toHaveNoDAPViolations('ICASkeleton');
  });
});
