//cspell: disable
/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './index';
import styles from './story-styles.scss?lit';
import mdx from './string-formatter.mdx';
import CDSStringFormatter from './string-formatter';

const storyPrefix = 'string-formatter-stories__';

const defaultTemplate = {
  args: {
    lines: 2,
    text: 'Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.',
  },
  argTypes: {
    lines: {
      control: {
        type: 'number',
      },
    },
  },
  render: (args) => {
    const { lines, text } = args;

    return html`
      <style>
        ${styles}
      </style>
      <p>
        <c4p-string-formatter value=${text} lines=${lines} />
      </p>
    `;
  },
};

export const Default = {
  ...defaultTemplate,
};

const meta = {
  title: 'Experimental/StringFormatter',
  component: 'c4p-string-formatter',
};

export default meta;
