/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

vi.mock('@carbon/icons/lib/close/20', () => vi.fn().mockReturnValue({}));
import { describe, expect, it, vi } from 'vitest';
import { render, html } from 'lit';

const template = () => html` <c4p-about-modal> </c4p-about-modal> `;

describe('c4p-about-modal', () => {
  it('should render about modal', async () => {
    render(template(), document.body);
    await Promise.resolve();
    const elem = document.body.querySelector('c4p-about-modal' as any);
    expect(elem).toBeDefined();
  });
});
