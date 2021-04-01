/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render } from '@testing-library/react';
import React from 'react';

import { pkg } from '../../settings';
import '../../utils/enable-all';

import uuidv4 from '../../global/js/utils/uuidv4';

import { HTTPError404 } from './HTTPError404';

const blockClass = `${pkg.prefix}--http-errors`;
const componentName = HTTPError404.displayName;

const dataTestId = uuidv4();

describe(componentName, () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<HTTPError404 title="Test heading" />);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  }, 80000);

  it('Renders the component `HTTPErrors` if flag is enabled', () => {
    const { container } = render(<HTTPError404 />);

    expect(container.querySelector(`.${blockClass}`)).not.toBeNull();
  });

  it('adds a class to the containing node', () => {
    const className = 'className';

    expect(
      render(<HTTPError404 className={className} />).container.querySelector(
        `.${className}`
      )
    ).toBeInTheDocument();
  });

  it('adds additional properties to the containing node', () => {
    const { container } = render(<HTTPError404 data-testid={dataTestId} />);
    expect(
      container.querySelector(`.${blockClass}[data-testid="${dataTestId}"]`)
    ).toBeInTheDocument();
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<HTTPError404 ref={ref} />);
    expect(ref.current.classList.contains(blockClass)).toBeTruthy();
  });
});
