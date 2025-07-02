/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, describe, it, afterEach } from 'vitest';
import { fixture, html, oneEvent } from '@open-wc/testing';
import { SIDE_PANEL_PLACEMENT, SIDE_PANEL_SIZE } from './defs';
import { prefix } from '../../globals/settings';
import './index';
import CDSSidePanel from './side-panel';
import {
  getActionItems,
  getActionToolbarItems,
  getContent,
  getSlug,
  getSubTitle,
} from './_story-assets';

import '@carbon/web-components/es/components/text-input/index.js';
import '@carbon/web-components/es/components/slug/index.js';

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
  hideCloseButton: false,
  size: SIDE_PANEL_SIZE.MEDIUM,
  title: 'Side panel title',
  condensedActions: false,
};

const blockClass = `${prefix}--side-panel`;

const template = (props = defaultProps, children = getContent(1)) => html`
  <c4p-side-panel
    ?animate-title=${props.animateTitle}
    ?include-overlay=${props.includeOverlay && !props.slideIn}
    selector-initial-focus=${props.selectorInitialFocus}
    label-text="${props.label}"
    ?open=${props.open}
    placement=${props.placement}
    ?prevent-close-on-click-outside=${props.preventCloseOnClickOutside}
    selector-page-content=${props.selectorPageContent}
    ?hide-close-button=${props.hideCloseButton}
    size=${props.size}
    ?slide-in=${props.slideIn}
    .title=${props.title}
  >
    ${children}
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
    // dispatch `cds-side-panel-beingclosed` and `cds-side-panel-closed` events on overlay element click
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
    // press the escape key
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

  it('should close side panel on the close button click', async () => {
    const sidePanel = (await fixture(template())) as CDSSidePanel;

    expect(sidePanel?.open).toBeTruthy();
    expect(sidePanel?.closeIconDescription).toBe('Close');
    // get the close button
    const closeButton = sidePanel.shadowRoot?.querySelector('cds-icon-button');
    // ensure the close button is present
    expect(closeButton).toBeDefined();

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

    // click on the close button
    closeButton?.dispatchEvent(new Event('click'));

    // listen to `cds-side-panel-beingclosed` and `cds-side-panel-closed` event
    // and take the details of events
    const { detail: beforeCloseDetail } = await eventBeforeClose;
    const { detail: closeDetail } = await eventClose;

    // make sure both events are triggered by overlay element
    expect(beforeCloseDetail?.triggeredBy).toBe(closeButton);
    expect(closeDetail?.triggeredBy).toBe(closeButton);

    // expect the side panel is closed
    expect(sidePanel?.open).toBeFalsy();
  });

  it('should render a slug', async () => {
    const sidePanel = (await fixture(
      template(defaultProps, getSlug(1))
    )) as CDSSidePanel;

    expect(sidePanel?.open).toBeTruthy();
    // ensure there is a slug present
    expect(sidePanel?._hasSlug).toBeTruthy();

    // locate slug element
    const slug = sidePanel.querySelector('cds-slug') as any;
    // expect the slug element is present
    expect(slug).toBeDefined();
    // expect the default slug size is xs
    expect(slug.size).toBe('xs');
  });

  it('should render navigation button', async () => {
    const sidePanel = (await fixture(
      template(defaultProps, getActionToolbarItems(1))
    )) as CDSSidePanel;

    expect(sidePanel?.open).toBeTruthy();
    // get the copy button
    const copyButton = Array.prototype.find.call(
      sidePanel?.querySelectorAll('cds-button'),
      (el) => el.innerHTML === 'Copy'
    );
    // expect copy button to be present
    expect(copyButton).toBeDefined();
  });

  it('should render a slide-in side panel', async () => {
    const sidePanel = (await fixture(
      template({ ...defaultProps, slideIn: true })
    )) as CDSSidePanel;

    expect(sidePanel.slideIn).toBeTruthy();
    expect(sidePanel.includeOverlay).toBeFalsy();

    // try to get the overlay element by class .c4p--side-panel__overlay
    const overlayElement = sidePanel?.shadowRoot?.querySelectorAll(
      `.${blockClass}__overlay`
    )?.[0];
    // expect the element is not present
    expect(overlayElement).not.toBeDefined();
  });

  it('should call the eventNavigateBack callback', async () => {
    const prevStep = () => {
      document
        .querySelector(`${prefix}-side-panel`)
        ?.setAttribute('current-step', '1');
    };

    const sidePanel = (await fixture(
      html`<c4p-side-panel
        ?animate-title=${defaultProps.animateTitle}
        ?condensed-actions=${defaultProps.condensedActions}
        current-step="1"
        ?include-overlay=${defaultProps.includeOverlay && !defaultProps.slideIn}
        selector-initial-focus=${defaultProps.selectorInitialFocus}
        label-text="${defaultProps.label}"
        ?open=${defaultProps.open}
        placement=${defaultProps.placement}
        ?prevent-close-on-click-outside=${defaultProps.preventCloseOnClickOutside}
        selector-page-content=${defaultProps.selectorPageContent}
        size=${defaultProps.size}
        ?slide-in=${defaultProps.slideIn}
        .title=${defaultProps.title}
        @c4p-side-panel-navigate-back=${prevStep}
      >${getContent(1)}</<c4p-side-panel`
    )) as CDSSidePanel;

    const backButton = sidePanel.shadowRoot?.querySelector(
      `.${prefix}--side-panel__navigation-back-button`
    );
    // create event listener
    const eventNavigateBack = oneEvent(
      sidePanel,
      (sidePanel as any).constructor.eventNavigateBack
    );
    // dispatch the event from click of back button
    backButton?.dispatchEvent(new Event('click'));
    // expect the detail object of eventNavigateBack method
    const { detail } = await eventNavigateBack;
    expect(detail).toBeDefined();
  });

  it('should render subtitle text', async () => {
    const sidePanel = (await fixture(
      template(defaultProps, getSubTitle(1))
    )) as CDSSidePanel;

    const subTitleText = sidePanel?.querySelector(
      `.${prefix}--side-panel__subtitle-text`
    );

    expect(subTitleText).toBeDefined();
  });

  it('should render at least one action item', async () => {
    const sidePanel = (await fixture(
      template(defaultProps, getActionItems(1))
    )) as CDSSidePanel;

    const actionItems = sidePanel.querySelectorAll(
      `.${prefix}--action-set__action-button`
    );

    expect(actionItems).toHaveLength(1);
  });

  it('should render only 3 action items even if too many items exists', async () => {
    const sidePanel = (await fixture(
      template(defaultProps, getActionItems(6))
    )) as CDSSidePanel;

    const actionItems = sidePanel.querySelectorAll(
      `.${prefix}--action-set__action-button`
    );

    expect(actionItems).toHaveLength(3);
  });

  it('should display a close button by default', async () => {
    const sidePanel = (await fixture(template())) as CDSSidePanel;
    expect(sidePanel?.open).toBeTruthy();

    // get the close button
    const closeButton = sidePanel.shadowRoot?.querySelector('cds-icon-button');
    // ensure the close button is present
    expect(closeButton).toBeDefined();
  });

  it('should not display a close button when hideCloseButton prop is set to true', async () => {
    const sidePanel = (await fixture(
      template({ ...defaultProps, hideCloseButton: true })
    )) as CDSSidePanel;

    expect(sidePanel?.open).toBeTruthy();
    expect(sidePanel?.hideCloseButton).toBeTruthy();

    // get the close button
    const closeButton = sidePanel.shadowRoot?.querySelector('cds-icon-button');
    // ensure the close button is not present
    expect(closeButton).to.be.null;
  });

  afterEach(() => {
    // Clears the DOM after each test
    document.body.innerHTML = '';
  });
});
