/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)

import uuidv4 from '../../global/js/utils/uuidv4';

import { ActionSet } from '.';

const blockClass = `${pkg.prefix}--action-set`;
const componentName = ActionSet.displayName;

const dataTestId = uuidv4();
const label1 = `Button ${uuidv4()}`;
const label2 = `Button ${uuidv4()}`;
const label3 = `Button ${uuidv4()}`;

describe(componentName, () => {
  it('renders a component ActionSet', () => {
    render(<ActionSet />);
    expect(screen.getByRole('presentation')).toHaveClass(blockClass);
  });

  it('renders one action button', () => {
    render(
      <ActionSet
        actions={[
          {
            label: label1,
            kind: 'primary',
          },
        ]}
      />
    );
    screen.getByRole('button', { name: label1 });
  });

  it('renders three action buttons', () => {
    render(
      <ActionSet
        actions={[
          {
            label: label1,
            kind: 'primary',
          },
          {
            label: label2,
            kind: 'secondary',
          },
          {
            label: label3,
            kind: 'ghost',
          },
        ]}
      />
    );
    expect(screen.getByRole('button', { name: label1 })).toHaveClass(
      'bx--btn--primary'
    );
    expect(screen.getByRole('button', { name: label2 })).toHaveClass(
      'bx--btn--secondary'
    );
    expect(screen.getByRole('button', { name: label3 })).toHaveClass(
      'bx--btn--ghost'
    );
  });

  it('renders a single ghost action button', () => {
    render(
      <ActionSet
        actions={[
          {
            label: label1,
            kind: 'ghost',
          },
        ]}
      />
    );
    expect(screen.getByRole('button', { name: label1 })).toHaveClass(
      'bx--btn--ghost'
    );
  });

  it('reports clicks on an action button', () => {
    const onClick = jest.fn();
    render(
      <ActionSet
        actions={[
          {
            label: label1,
            onClick: onClick,
          },
        ]}
      />
    );
    expect(onClick).toBeCalledTimes(0);
    userEvent.click(screen.getByRole('button', { name: label1 }));
    expect(onClick).toBeCalledTimes(1);
  });

  it('adds additional properties to the containing node', () => {
    render(<ActionSet data-testid={dataTestId} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<ActionSet ref={ref} />);
    expect(ref.current).toEqual(screen.getByRole('presentation'));
  });
});
