/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, screen } from '@testing-library/react';
import React from 'react';

import { pkg } from '../../settings';

import uuidv4 from '../../global/js/utils/uuidv4';

import { HTTPError404 } from './HTTPError404';
import { HTTPError403 } from './HTTPError403';
import { HTTPErrorOther } from './HTTPErrorOther';

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

  it('should render the HTTPError404 component', () => {
    const ref = React.createRef();
    const errorCodeLabel = uuidv4();
    const description = uuidv4();
    const { container } = render(
      <HTTPError404
        title="Test title"
        errorCodeLabel={errorCodeLabel}
        description={description}
        links={[
          {
            text: 'Carbon Design System',
            url: 'https://www.carbondesignsystem.com',
          },
          {
            text: 'IBM Cloud and Cognitive component library',
            url: 'https://github.com/carbon-design-system/ibm-cloud-cognitive',
          },
        ]}
        ref={ref}
        data-testid={dataTestId}
      />
    );
    expect(screen.getByText(errorCodeLabel));
    expect(screen.getByText(description));
    expect(screen.getByText('IBM Cloud and Cognitive component library'));
    expect(ref.current.classList.contains(blockClass)).toBeTruthy();
    expect(
      container.querySelector(`.${blockClass}[data-testid="${dataTestId}"]`)
    ).toBeInTheDocument();
  });
  it('should render the HTTPError403 component', () => {
    const ref = React.createRef();
    const errorCodeLabel = uuidv4();
    const description = uuidv4();
    const { container } = render(
      <HTTPError403
        title="Test title"
        errorCodeLabel={errorCodeLabel}
        description={description}
        links={[
          {
            text: 'Carbon Design System',
            url: 'https://www.carbondesignsystem.com',
          },
          {
            text: 'IBM Cloud and Cognitive component library',
            url: 'https://github.com/carbon-design-system/ibm-cloud-cognitive',
          },
        ]}
        ref={ref}
        data-testid={dataTestId}
      />
    );
    expect(screen.getByText(errorCodeLabel));
    expect(screen.getByText(description));
    expect(screen.getByText('IBM Cloud and Cognitive component library'));
    expect(ref.current.classList.contains(blockClass)).toBeTruthy();
    expect(
      container.querySelector(`.${blockClass}[data-testid="${dataTestId}"]`)
    ).toBeInTheDocument();
  });
  it('should render the HTTPErrorOther component', () => {
    const ref = React.createRef();
    const errorCodeLabel = uuidv4();
    const description = uuidv4();
    const { container } = render(
      <HTTPErrorOther
        title="Test title"
        errorCodeLabel={errorCodeLabel}
        description={description}
        links={[
          {
            text: 'Carbon Design System',
            url: 'https://www.carbondesignsystem.com',
          },
          {
            text: 'IBM Cloud and Cognitive component library',
            url: 'https://github.com/carbon-design-system/ibm-cloud-cognitive',
          },
        ]}
        ref={ref}
        data-testid={dataTestId}
      />
    );
    expect(screen.getByText(errorCodeLabel));
    expect(screen.getByText(description));
    expect(screen.getByText('IBM Cloud and Cognitive component library'));
    expect(ref.current.classList.contains(blockClass)).toBeTruthy();
    expect(
      container.querySelector(`.${blockClass}[data-testid="${dataTestId}"]`)
    ).toBeInTheDocument();
  });
});
