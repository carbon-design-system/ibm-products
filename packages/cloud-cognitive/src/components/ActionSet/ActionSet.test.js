/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expectMultipleError } from '../../global/js/utils/test-helper';

import { pkg } from '../../settings';

import { Loading } from 'carbon-components-react';

import uuidv4 from '../../global/js/utils/uuidv4';

import { ActionSet } from '.';

const blockClass = `${pkg.prefix}--action-set`;
const componentName = ActionSet.displayName;

const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();
const label1 = `Secondary button ${uuidv4()}`;
const action1 = { label: label1, kind: 'secondary' };
const label2 = `Primary button ${uuidv4()}`;
const action2 = { label: label2 };
const label3 = `Ghost button ${uuidv4()}`;
const action3 = { label: label3, kind: 'ghost' };
const label4 = `Another secondary button ${uuidv4()}`;
const action4 = { label: label4, kind: 'secondary' };

const getByRoleAndLabel = (role, label) =>
  screen.getByRole(role, { name: label });

const primaryButton = 'bx--btn--primary';
const secondaryButton = 'bx--btn--secondary';
const ghostButton = 'bx--btn--ghost';

describe(componentName, () => {
  it('renders a component ActionSet', () => {
    render(<ActionSet actions={[]} />);
    expect(screen.getByRole('presentation')).toHaveClass(blockClass);
  });

  it('renders one action button', () => {
    render(<ActionSet actions={[action1]} />);
    getByRoleAndLabel('button', label1);
  });

  it('renders three action buttons', () => {
    render(<ActionSet size="lg" actions={[action1, action2, action3]} />);
    expect(getByRoleAndLabel('button', label1)).toHaveClass(secondaryButton);
    expect(getByRoleAndLabel('button', label2)).toHaveClass(primaryButton);
    expect(getByRoleAndLabel('button', label3)).toHaveClass(ghostButton);
  });

  it('renders ghost button first and primary button last', () => {
    render(
      <ActionSet size="max" actions={[action1, action2, action3, action4]} />
    );
    const buttons = screen.getAllByRole('button');
    expect(buttons[0].textContent).toEqual(label3);
    expect(buttons[1].textContent).toEqual(label1);
    expect(buttons[2].textContent).toEqual(label4);
    expect(buttons[3].textContent).toEqual(label2);
  });

  it('renders primary button first when stacking', () => {
    render(<ActionSet size="xs" actions={[action1, action2]} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0].textContent).toEqual(label2);
    expect(buttons[1].textContent).toEqual(label1);
  });

  it('renders primary button first when stacking whichever way round they are supplied', () => {
    render(<ActionSet size="xs" actions={[action2, action1]} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0].textContent).toEqual(label2);
    expect(buttons[1].textContent).toEqual(label1);
  });

  it('rejects too many buttons using the custom validator', () =>
    expectMultipleError(
      [
        'Invalid prop `actions` supplied to `ActionSet`: you cannot have more than three actions',
        'Invalid prop `kind` of value `danger` supplied to `ActionSetButton`',
      ],
      () => {
        render(
          <ActionSet
            actions={[action2, action2, action3, action3, { kind: 'danger' }]}
          />
        );
      }
    ));

  it('applies className to an action button', () => {
    render(<ActionSet actions={[{ ...action1, className }, action2]} />);
    expect(getByRoleAndLabel('button', label1)).toHaveClass(className);
    expect(getByRoleAndLabel('button', label2)).not.toHaveClass(className);
  });

  it('renders a loading button', () => {
    render(<ActionSet actions={[{ ...action1, loading: true }]} />);
    const loader = Loading.defaultProps.description;
    expect(screen.getByRole('button').textContent).toEqual(
      `${label1}${loader}${loader}`
    );
  });

  it('reports clicks on an action button', () => {
    const onClick = jest.fn();
    render(<ActionSet actions={[{ ...action1, onClick }]} />);
    expect(onClick).toBeCalledTimes(0);
    userEvent.click(getByRoleAndLabel('button', label1));
    expect(onClick).toBeCalledTimes(1);
  });

  it('adds additional properties to an action button', () => {
    render(<ActionSet actions={[{ ...action1, 'data-testid': dataTestId }]} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an action button', () => {
    const ref = React.createRef();
    render(<ActionSet actions={[{ ...action1, ref }, action2]} />);
    expect(ref.current).toEqual(getByRoleAndLabel('button', label1));
  });

  it('applies className to the containing node', () => {
    render(<ActionSet className={className} />);
    expect(screen.getByRole('presentation')).toHaveClass(className);
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

const v = (size, props, propName, componentName) =>
  ActionSet.validateActions(() => size)(props, propName, componentName);
const prop = `prop-${uuidv4()}`;

const primary = { kind: 'primary' };
const secondary = { kind: 'secondary' };
const danger = { kind: 'danger' };
const ghost = { kind: 'ghost' };
const dangerPrimary = { kind: 'danger--primary' };
const dangerGhost = { kind: 'danger--ghost' };
const dangerTertiary = { kind: 'danger--tertiary' };
const tertiary = { kind: 'tertiary' };

const props = {
  0: { [prop]: [] },
  1: { [prop]: [primary] },
  2: { [prop]: [primary, secondary] },
  3: { [prop]: [primary, secondary, secondary] },
  4: { [prop]: [primary, secondary, secondary, secondary] },
  5: { [prop]: [primary, secondary, secondary, secondary, secondary] },
  primary: { [prop]: [primary] },
  secondary: { [prop]: [secondary] },
  danger: { [prop]: [danger] },
  ghost: { [prop]: [ghost] },
  dangerPrimary: { [prop]: [dangerPrimary] },
  dangerGhost: { [prop]: [dangerGhost] },
  dangerTertiary: { [prop]: [dangerTertiary] },
  tertiary: { [prop]: [tertiary] },
  twoPrimaries: { [prop]: [primary, primary] },
  twoGhosts: { [prop]: [ghost, ghost] },
  psg: { [prop]: [primary, secondary, ghost] },
};

describe(`${componentName}.validateActions`, () => {
  it('rejects more than three actions for an extra small size', () => {
    expect(v('xs', props[1], prop, componentName)).toBeNull();
    expect(v('xs', props[2], prop, componentName)).toBeNull();
    expect(v('xs', props[3], prop, componentName)).toBeNull();
    expect(v('xs', props[4], prop, componentName)).toBeInstanceOf(Error);
  });

  it('rejects more than three actions for a small size', () => {
    expect(v('sm', props[1], prop, componentName)).toBeNull();
    expect(v('sm', props[2], prop, componentName)).toBeNull();
    expect(v('sm', props[3], prop, componentName)).toBeNull();
    expect(v('sm', props[4], prop, componentName)).toBeInstanceOf(Error);
  });

  it('rejects more than three actions for a medium size', () => {
    expect(v('md', props[1], prop, componentName)).toBeNull();
    expect(v('md', props[2], prop, componentName)).toBeNull();
    expect(v('md', props[3], prop, componentName)).toBeNull();
    expect(v('md', props[4], prop, componentName)).toBeInstanceOf(Error);
  });

  it('rejects more than four actions for a large size', () => {
    expect(v('lg', props[1], prop, componentName)).toBeNull();
    expect(v('lg', props[2], prop, componentName)).toBeNull();
    expect(v('lg', props[3], prop, componentName)).toBeNull();
    expect(v('lg', props[4], prop, componentName)).toBeNull();
    expect(v('lg', props[5], prop, componentName)).toBeInstanceOf(Error);
  });

  it('rejects more than four actions for a max size', () => {
    expect(v('max', props[1], prop, componentName)).toBeNull();
    expect(v('max', props[2], prop, componentName)).toBeNull();
    expect(v('max', props[3], prop, componentName)).toBeNull();
    expect(v('max', props[4], prop, componentName)).toBeNull();
    expect(v('max', props[5], prop, componentName)).toBeInstanceOf(Error);
  });

  it('rejects more than one primary kind', () => {
    expect(v('md', props.primary, prop, componentName)).toBeNull();
    expect(v('md', props.twoPrimaries, prop, componentName)).toBeInstanceOf(
      Error
    );
  });

  it('rejects more than one ghost kind', () => {
    expect(v('md', props.ghost, prop, componentName)).toBeNull();
    expect(v('md', props.twoGhosts, prop, componentName)).toBeInstanceOf(Error);
  });

  it('rejects ghost kind with other kinds for extra small, small, medium size', () => {
    expect(v('xs', props.psg, prop, componentName)).toBeInstanceOf(Error);
    expect(v('sm', props.psg, prop, componentName)).toBeInstanceOf(Error);
    expect(v('md', props.psg, prop, componentName)).toBeInstanceOf(Error);
    expect(v('lg', props.psg, prop, componentName)).toBeNull();
    expect(v('max', props.psg, prop, componentName)).toBeNull();
  });

  it('rejects any kind other than primary, secondary, ghost', () => {
    expect(v('md', props.primary, prop, componentName)).toBeNull();
    expect(v('md', props.secondary, prop, componentName)).toBeNull();
    expect(v('md', props.danger, prop, componentName)).toBeInstanceOf(Error);
    expect(v('md', props.ghost, prop, componentName)).toBeNull();
    expect(v('md', props.dangerPrimary, prop, componentName)).toBeInstanceOf(
      Error
    );
    expect(v('md', props.dangerGhost, prop, componentName)).toBeInstanceOf(
      Error
    );
    expect(v('md', props.dangerTertiary, prop, componentName)).toBeInstanceOf(
      Error
    );
    expect(v('md', props.tertiary, prop, componentName)).toBeInstanceOf(Error);
    expect(v('md', props.twoPrimaries, prop, componentName)).toBeInstanceOf(
      Error
    );
    expect(v('md', props.twoGhosts, prop, componentName)).toBeInstanceOf(Error);
  });
});
