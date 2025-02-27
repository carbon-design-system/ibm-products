/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it } from 'vitest';
import { html, fixture } from '@open-wc/testing';
import { SIDE_PANEL_PLACEMENT, SIDE_PANEL_SIZE } from './defs';
import { prefix } from '../../globals/settings';
import './index';

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

const blockClass = `${prefix}--side-panel`;

const template = (props = defaultProps) => html`
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
    await fixture(template());
    const elem = document.body.querySelector('c4p-side-panel' as any);
    expect(elem).toBeDefined();
  });

  it('should render a side panel on the left', async () => {
    const el = await fixture(
      template({ ...defaultProps, placement: SIDE_PANEL_PLACEMENT.LEFT })
    );
    const elem = document.body.querySelector('c4p-side-panel');
    expect(elem).toBeDefined();
    const placement = el?.getAttribute('placement');
    expect(placement).toBe('left');

    const dialogShadowEl = el?.shadowRoot?.querySelectorAll(
      `.${blockClass}`
    )?.[0];

    if (dialogShadowEl) {
      const transform = window.getComputedStyle(dialogShadowEl)?.transform;
      expect(transform).toBe('matrix(1, 0, 0, 1, -414, 0)');
    }
  });
});
