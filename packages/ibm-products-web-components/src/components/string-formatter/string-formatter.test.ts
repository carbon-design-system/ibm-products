/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

vi.mock('@carbon/icons/lib/close/20', () => vi.fn().mockReturnValue({}));
import { describe, it, vi, expect } from 'vitest';
import { fixture, html, expect as owcExpect } from '@open-wc/testing';
import { render } from 'lit';
import CDSStringFormatter, { blockClass } from './string-formatter';

const defaultProps = {
  lines: 2,
  text: 'Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page. Modify the behavior of the button by changing its event properties. Small buttons may be used when there is not enough space for a regular sized button. This issue is most found in tables. Small button should have three words or less. When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are always paired with text.',
};

const template = (props: any = defaultProps) => html`
  <c4p-string-formatter value=${props.text} lines=${props.lines}>
  </c4p-string-formatter>
`;

const elementName = 'c4p-string-formatter';

describe(elementName, () => {
  it('should render string formatter', async () => {
    const element = render(template(), document.body);
    expect(element).toBeDefined();
  });
});
