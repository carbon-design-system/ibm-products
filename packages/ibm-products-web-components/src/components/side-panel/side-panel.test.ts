/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

vi.mock('@carbon/icons/lib/close/20', () => vi.fn().mockReturnValue({}));
import { describe, expect, it, vi } from 'vitest';
import { render, html } from 'lit';
import { SIDE_PANEL_PLACEMENT, SIDE_PANEL_SIZE } from './defs';

const defaultProps = {
  animateTitle: true,
  includeOverlay: true,
  slideIn: false,
  selectorInitialFocus: '',
  label: '',
  open: true,
  placement: SIDE_PANEL_PLACEMENT.RIGHT,
  preventCloseOnClickOutside: false,
  selectorPageContent: '',
  size: SIDE_PANEL_SIZE.MEDIUM,
  title: 'Side panel title',
};

const template = (props = defaultProps) =>
  html`
    <c4p-side-panel
      ?animate-title=${props.animateTitle}
      ?include-overlay=${props.includeOverlay && !props.slideIn}
      selector-initial-focus=${props.selectorInitialFocus}
      label-text="${props.label}"
      ?open=${props.open}
      placement=${props.placement}
      ?prevent-close-on-click-outside=${props.preventCloseOnClickOutside}
      selector-page-content=${props.selectorPageContent}
      size=${props.size}
      ?slide-in=${props.slideIn}
      .title=${props.title}
    >
      content
    </c4p-side-panel>
  `;

describe('c4p-side-panel', () => {
  it('should render a side panel', async () => {
    render(template(), document.body);
    await Promise.resolve();
    const elem = document.body.querySelector('c4p-side-panel' as any);
    expect(elem).toBeDefined();
  });
});
