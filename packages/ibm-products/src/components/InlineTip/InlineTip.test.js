/**
 * Copyright IBM Corp. 2023, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
import userEvent from '@testing-library/user-event';

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { InlineTip, InlineTipButton, InlineTipLink } from '.';
import InlineTipImage from './assets/inline-tip-image.png';

const blockClass = `${pkg.prefix}--inline-tip`;
const componentName = InlineTip.displayName;

// values to use
const title = `title (${uuidv4()})`;
const children = `hello, world (${uuidv4()})`;
const buttonLabel = `Click me (${uuidv4()})`;
const closeButtonLabel = `Show me (${uuidv4()})`;
const linkLabel = `Learn more (${uuidv4()})`;
const readMoreLabel = `Read more (${uuidv4()})`;
const readLessLabel = `Read less (${uuidv4()})`;
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();

describe(componentName, () => {
  it('renders a component InlineTip', () => {
    render(<InlineTip title={title}> </InlineTip>);
    expect(screen.getByRole('main')).toHaveClass(blockClass);
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<InlineTip title={title}> </InlineTip>);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it(`renders children`, () => {
    render(<InlineTip title={title}>{children}</InlineTip>);
    screen.getByText(children);
  });

  it(`renders ghost button`, () => {
    render(
      <InlineTip
        title={title}
        secondaryButton={
          <InlineTipButton onClick={() => {}}>{buttonLabel}</InlineTipButton>
        }
      >
        {children}
      </InlineTip>
    );
    screen.getByText(buttonLabel);
  });

  it(`renders link`, () => {
    render(
      <InlineTip
        title={title}
        secondaryButton={
          <InlineTipLink href="https://www.ibm.com" target="_blank">
            {linkLabel}
          </InlineTipLink>
        }
      >
        {children}
      </InlineTip>
    );
    screen.getByText(linkLabel);
  });

  it(`renders icon button with 'x' icon`, () => {
    render(
      <InlineTip title={title} onClose={() => {}}>
        {children}
      </InlineTip>
    );
    expect(
      document.querySelector('.c4p--inline-tip__close-icon')
    ).toBeInTheDocument();
  });

  it(`renders tertiary button with 'crossroads' icon`, () => {
    render(
      <InlineTip title={title} closeButtonLabel={closeButtonLabel}>
        {children}
      </InlineTip>
    );
    screen.getByText(closeButtonLabel);
  });

  it(`renders collapsible, collapsed`, () => {
    render(
      <InlineTip
        title={title}
        collapsible
        expandButtonLabel={readMoreLabel}
        closeButtonLabel={readLessLabel}
      >
        {children}
      </InlineTip>
    );
    screen.getByText(readMoreLabel);
  });

  it(`renders collapsible, expanded`, () => {
    render(
      <InlineTip
        title={title}
        collapsible
        expandButtonLabel={readMoreLabel}
        closeButtonLabel={readLessLabel}
      >
        {children}
      </InlineTip>
    );
    userEvent.click(document.querySelector('button'));
    screen.getByText(readLessLabel);
  });

  it(`renders an image`, () => {
    render(
      <InlineTip
        title={title}
        media={{ render: () => <img alt="img" src={InlineTipImage} /> }}
      >
        {children}
      </InlineTip>
    );
    expect(document.querySelector('img')).toBeInTheDocument();
  });

  it(`renders in the narrow format`, () => {
    render(
      <InlineTip title={title} narrow>
        {children}
      </InlineTip>
    );
    expect(
      document.querySelector('.c4p--inline-tip__narrow')
    ).toBeInTheDocument();
  });

  it('applies className to the containing node', () => {
    render(
      <InlineTip title={title} className={className}>
        {children}
      </InlineTip>
    );
    expect(screen.getByRole('main')).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(
      <InlineTip title={title} data-testid={dataTestId}>
        {children}
      </InlineTip>
    );
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(
      <InlineTip title={title} ref={ref}>
        {children}
      </InlineTip>
    );
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(
      <InlineTip title={title} data-testid={dataTestId}>
        {children}
      </InlineTip>
    );

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
