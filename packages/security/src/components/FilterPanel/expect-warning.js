/**
 * @file Filter panel test utilities.
 * @copyright IBM Security 2021
 */

import { render } from '@testing-library/react';

export default function expectWarning(ui) {
  const { fn, spyOn } = jest;

  test('calls an unactionable prop deprecation warning', () => {
    const warn = spyOn(console, 'warn').mockImplementation(fn());

    render(ui);

    expect(warn).toBeCalledWith(
      'Warning: \nThe prop `wrapperClassName` for Checkbox will be deprecated in V11 in favor of `className`. `className` will then be placed on the outer wrapper.'
    );

    warn.mockRestore();
  });
}
