/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it } from 'vitest';
import { html } from '@open-wc/testing';
import { render } from 'lit';
import './index';

const template = () => html`
  <c4p-notification-panel> </c4p-notification-panel>
`;

describe('c4p-notification-panel', () => {
  it('should render notification modal', async () => {
    const element = render(template(), document.body);
    expect(element).toBeDefined();
  });
});
