/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { generateActions } from '../../../examples/set-of-actions/src/example-data';
import '../../../examples/set-of-actions/src';
import styles from './story-styles.scss?lit';

const argTypes = {
  // actionsCount: {
  //   control: { type: 'number' },
  //   description: 'Number of actions to display',
  // },
  actionSize: {
    control: { type: 'radio' },
    options: ['sm', 'md', 'lg'],
  },
  onClick: { action: 'onClick' },
};

const defaultProps = {
  // actionsCount: 16,
  actionSize: 'md',
};

const renderActionsTemplate = (args) => {
  const { actionsCount, actionSize, onClick } = args;
  const actionsData = generateActions({
    count: 16,
    size: actionSize,
    onClick,
  });

  return html`
    <style>
      ${styles}
    </style>
    <div class="example">
      <div class="annotation parent">
        <div class="annotation__label">Parent container</div>
        <div class="annotation__content">
          <set-of-actions .actionsData=${actionsData}></set-of-actions>
        </div>
      </div>
    </div>
  `;
};

export const SetOfActions = {
  args: {
    ...defaultProps,
  },
  argTypes,
  render: renderActionsTemplate,
};

const meta = {
  title: 'Patterns/Overflow',
};

export default meta;
