/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

vi.mock('@carbon/icons/lib/close/20', () => vi.fn().mockReturnValue({}));
import { expect, describe, it, vi } from 'vitest';
import { fixture, html, oneEvent } from '@open-wc/testing';
import { SIDE_PANEL_PLACEMENT, SIDE_PANEL_SIZE } from './defs';
import { prefix } from '../../globals/settings';
import './index';
import CDSSidePanel from './side-panel';

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
    const sidePanel = (await fixture(template())) as CDSSidePanel;

    expect(sidePanel?.open).toBeTruthy();
    expect(sidePanel).toBeDefined();
  });

  it('should render a side panel on the left', async () => {
    const sidePanel = (await fixture(
      template({ ...defaultProps, placement: SIDE_PANEL_PLACEMENT.LEFT })
    )) as CDSSidePanel;

    expect(sidePanel?.placement).toBe('left');

    const dialogShadowEl = sidePanel?.shadowRoot?.querySelectorAll(
      `.${blockClass}`
    )?.[0];

    if (dialogShadowEl) {
      const transform = window.getComputedStyle(dialogShadowEl)?.transform;
      expect(transform).toBe('matrix(1, 0, 0, 1, -414, 0)');
    }
  });

  it('should render a side panel on the right', async () => {
    const sidePanel = (await fixture(template())) as CDSSidePanel;

    expect(sidePanel?.placement).toBe('right');

    const dialogShadowEl = sidePanel?.shadowRoot?.querySelectorAll(
      `.${blockClass}`
    )?.[0];

    if (dialogShadowEl) {
      const transform = window.getComputedStyle(dialogShadowEl)?.transform;
      expect(transform).toBe('matrix(1, 0, 0, 1, 414, 0)');
    }
  });

  it('should render a side panel with overlay and close when clicked outside', async () => {
    const sidePanel = (await fixture(template())) as CDSSidePanel;

    // Expect the side panel has include-overlay attribute
    expect(sidePanel?.includeOverlay).toBeTruthy();

    // get the overlay element by class .c4p--side-panel__overlay
    const overlayElement = sidePanel?.shadowRoot?.querySelectorAll(
      `.${blockClass}__overlay`
    )?.[0];
    // expect the element is present
    expect(overlayElement).toBeDefined();
    // ensure its tab index is -1
    expect(overlayElement?.getAttribute('tabindex')).toBe('-1');
    // ensure open attribute present
    expect(overlayElement?.hasAttribute('open')).toBeTruthy();
    // ensure the preventCloseOnClickOutside property is disabled
    expect(sidePanel?.preventCloseOnClickOutside).toBeFalsy();

    if (overlayElement) {
      // add event listener `cds-side-panel-beingclosed` event
      const eventBeforeClose = oneEvent(
        sidePanel,
        // getting event name ie., `cds-side-panel-beingclosed`
        (sidePanel as any).constructor.eventBeforeClose
      );
      // add event listener `cds-side-panel-closed` event
      const eventClose = oneEvent(
        sidePanel,
        // getting event name ie., `cds-side-panel-closed`
        (sidePanel as any).constructor.eventClose
      );
      // dispatch `cds-side-panel-beingclosed` event on overlay element click
      overlayElement?.dispatchEvent(new Event('click'));

      // listen to `cds-side-panel-beingclosed` and `cds-side-panel-closed` event
      // and take the details of events
      const { detail: beforeCloseDetail } = await eventBeforeClose;
      const { detail: closeDetail } = await eventClose;

      // make sure both events are triggered by overlay element
      expect(beforeCloseDetail?.triggeredBy).toBe(overlayElement);
      expect(closeDetail?.triggeredBy).toBe(overlayElement);

      // expect the side panel is closed
      expect(sidePanel?.open).toBeFalsy();
      // expect overlay also closed
      expect(overlayElement?.hasAttribute('open')).toBeFalsy();
    }
  });

  it('should close side panel on escape keydown', async () => {
    const sidePanel = (await fixture(template())) as CDSSidePanel;

    expect(sidePanel?.open).toBeTruthy();

    // add event listener `cds-side-panel-beingclosed` event
    const eventBeforeClose = oneEvent(
      sidePanel,
      // getting event name ie., `cds-side-panel-beingclosed`
      (sidePanel as any).constructor.eventBeforeClose
    );
    // add event listener `cds-side-panel-closed` event
    const eventClose = oneEvent(
      sidePanel,
      // getting event name ie., `cds-side-panel-closed`
      (sidePanel as any).constructor.eventClose
    );
    // dispatch `cds-side-panel-beingclosed` event on overlay element click
    document?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

    // listen to `cds-side-panel-beingclosed` and `cds-side-panel-closed` event
    // and take the details of events
    const { detail: beforeCloseDetail } = await eventBeforeClose;
    const { detail: closeDetail } = await eventClose;

    // make sure both events are triggered from document
    expect(beforeCloseDetail?.triggeredBy).toBe(document);
    expect(closeDetail?.triggeredBy).toBe(document);

    // expect the side panel is closed
    expect(sidePanel?.open).toBeFalsy();
  });
});
