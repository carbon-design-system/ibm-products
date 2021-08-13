//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import cx from 'classnames';

import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { ButtonSetWithOverflow } from '.';
// import { ButtonMenu, ButtonMenuItem } from '../ButtonMenu';
import { ChevronDown16 } from '@carbon/icons-react';
import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react';

// Carbon and package components we use.
import { carbon } from '../../settings';
import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(ButtonSetWithOverflow.displayName),
  component: ButtonSetWithOverflow,
  argTypes: {
    containerWidth: {
      control: { type: 'range', min: 20, max: 800, step: 10 },
    },
  },
  decorators: [(story) => <div className="ccs-sb__display-box">{story()}</div>],
  parameters: {
    styles,
  },
};

const buttons = [
  {
    key: 'danger-button',
    kind: 'danger',
    onClick: action('Danger'),
    label: 'Danger',
  },
  {
    key: 'secondary-button',
    kind: 'secondary',
    onClick: action('Secondary'),
    label: 'Secondary',
  },
  {
    key: 'primary-button',
    kind: 'primary',
    onClick: action('Primary'),
    label: 'Primary',
  },
];

const buttonSetOverflowLabel = 'Button set overflow';

const Template = (argsIn) => {
  const { containerWidth, ...args } = { ...argsIn };
  return (
    <div style={{ width: containerWidth }}>
      <ButtonSetWithOverflow {...args} />
    </div>
  );
};

export const Default = prepareStory(Template, {
  args: {
    buttons,
    buttonSetOverflowLabel,
    containerWidth: 600,
  },
});

const customButtons = [
  {
    key: 'custom item',
    custom: (
      <OverflowMenu
        className="custom-node"
        menuOptionsClass="custom-node__options"
        size="field"
        kind="danger"
        renderIcon={() => (
          <div
            className={cx([
              'custom-node__trigger',
              `${carbon.prefix}--btn`,
              `${carbon.prefix}--btn--danger`,
              `${carbon.prefix}--btn--field`,
            ])}>
            Danger zone
            <ChevronDown16
              aria-hidden="true"
              aria-label="Button menu"
              className={`${carbon.prefix}--btn__icon`}
            />
          </div>
        )}>
        <OverflowMenuItem
          isDelete={true}
          itemText="Delete"
          onClick={action(`Delete`)}></OverflowMenuItem>
        <OverflowMenuItem
          isDelete={true}
          kind="danger"
          itemText="Delete children"
          onClick={action(`Delete children`)}></OverflowMenuItem>
      </OverflowMenu>
    ),
  },
  {
    key: 'secondary-button',
    kind: 'secondary',
    onClick: action('Secondary'),
    label: 'Secondary',
  },
  {
    key: 'primary-button',
    kind: 'primary',
    onClick: action('Primary'),
    label: 'Primary',
  },
];

export const Custom = prepareStory(Template, {
  args: {
    buttons: customButtons,
    buttonSetOverflowLabel,
    containerWidth: 600,
  },
});
