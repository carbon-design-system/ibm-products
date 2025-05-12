/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import CDSTruncatedString from './truncated-string';
import './index';

const defaultProps = {
  lines: 2,
  text: 'Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page.',
  with: '',
};

const template = (props = defaultProps, templateWidth?: number) => {
  return html`
    <div style=${templateWidth ? `width: ${templateWidth}px;` : ''}>
      <c4p-truncated-string
        value=${props.text}
        lines=${props.lines}
        with=${props.with}
      ></c4p-truncated-string>
    </div>
  `;
};

describe('c4p-truncated-string', () => {
  it('renders a tooltip when text is truncated with tooltip', async () => {
    const wrapper = await fixture(
      template({ ...defaultProps, with: 'tooltip' }, 200)
    );

    const el = wrapper.querySelector(
      'c4p-truncated-string'
    ) as CDSTruncatedString;
    const tooltip = el.shadowRoot?.querySelector('cds-tooltip');
    expect(tooltip).toBeTruthy();
  });

  it('does not render a tooltip if the text fits', async () => {
    const wrapper = await fixture(
      template({ ...defaultProps, with: 'tooltip' }, 9000)
    );

    const el = wrapper.querySelector(
      'c4p-truncated-string'
    ) as CDSTruncatedString;

    const tooltip = el.shadowRoot?.querySelector('cds-tooltip');
    expect(tooltip).not.toBeTruthy();
  });

  it('tests lines prop/attribute with tooltip', async () => {
    for (let lines = 1; lines <= 4; lines++) {
      const wrapper = await fixture(
        template({ ...defaultProps, lines, with: 'tooltip' }, 600)
      );

      const el = wrapper.querySelector(
        'c4p-truncated-string'
      ) as CDSTruncatedString;
      await el.updateComplete;

      const tooltip = el.shadowRoot?.querySelector('cds-tooltip');
      if (lines <= 2) {
        expect(tooltip).toBeTruthy();
      } else {
        expect(tooltip).not.toBeTruthy();
      }
    }
  });
});
