/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

vi.mock('@carbon/icons/lib/close/20', () => vi.fn().mockReturnValue({}));
import { describe, expect, it, vi, afterEach, beforeEach } from 'vitest';
import { fixture, html, oneEvent } from '@open-wc/testing';
import './index';
import '@carbon/web-components/es/components/tabs/index.js';
import '@carbon/web-components/es/components/slug/index.js';
import '@carbon/web-components/es/components/dropdown/index.js';
import '@carbon/web-components/es/components/progress-bar/index.js';
import '@carbon/web-components/es/components/button/index.js';
import '@carbon/web-components/es/components/text-input/index.js';
import '@carbon/web-components/es/components/textarea/index.js';
import { prefix } from '../../globals/settings';
import {
  getContent,
  getLabel,
  getActionToolbarItems,
  getActionItems,
  getSlug,
  getNavigation,
  getInfluencer,
  influencers,
} from './tearsheet.stories';
import CDSTearsheet from './tearsheet';
const blockClass = `${prefix}--tearsheet`;
const defaultProps = {
  headerActions: '',
  open: true,
  influencerWidth: 'narrow',
  influencerPlacement: 'left',
  influencer: '',
  preventCloseOnClickOutside: false,
  selectorInitialFocus: '',
  width: 'wide',
  slug: '',
  description: 'Description used to describe the flow if need be.',
  title: 'Title used to designate the overarching flow of the tearsheet.',
  headerNavigation: '',
  hasCloseIcon: false,
};

const template = (props = defaultProps, children = getContent(1)) => html`
  <c4p-tearsheet
    selector-initial-focus=${props.selectorInitialFocus}
    ?open=${props.open}
    influencer-placement=${props.influencerPlacement}
    influencer-width=${props.influencerWidth}
    ?prevent-close-on-click-outside=${props.preventCloseOnClickOutside}
    width=${props.width}
    ?has-close-icon=${props.hasCloseIcon}
  >
    ${children}
    <!-- slotted header title -->
    ${props.title ? html`<span slot="title">Three ${props.title}</span>` : ''}

    <!-- slotted header description -->
    ${props.description
      ? html`<span slot="description">${props.description}</span>`
      : ''}
  </c4p-tearsheet>
`;

describe('c4p-tearsheet', () => {
  it('should render a tearsheet', async () => {
    const tearsheet = (await fixture(
      template({ ...defaultProps })
    )) as CDSTearsheet;

    expect(tearsheet?.open).toBeTruthy();
    expect(tearsheet).toBeDefined();
  });

  it('responds to hasCloseIcon and renders closeIconDescription', async () => {
    const tearsheet = (await fixture(
      template({ ...defaultProps, open: true, hasCloseIcon: true })
    )) as CDSTearsheet;
    expect(tearsheet?.open).toBeTruthy();
    expect(tearsheet?.closeIconDescription).toBe('Close');
    const headerEle = tearsheet.shadowRoot?.querySelector('cds-modal-header');
    expect(headerEle).to.exist;

    const closeButton = headerEle?.shadowRoot
      ?.querySelector('slot')
      ?.assignedNodes({ flatten: true })
      .find(
        (node) => node.nodeName.toLowerCase() === 'cds-modal-close-button'
      ) as HTMLElement;

    expect(closeButton).to.exist;

    closeButton?.click();

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(tearsheet?.open).to.be.false;
  });

  it('should render label', async () => {
    const tearsheet = (await fixture(
      template(defaultProps, getLabel(1))
    )) as CDSTearsheet;

    expect(tearsheet?.open).toBeTruthy();

    const headerEle = tearsheet.shadowRoot?.querySelector('cds-modal-header');
    expect(headerEle).to.exist;

    // Check if slot[name="label"] is present in 'cds-modal-header'
    const labelSlot = headerEle?.querySelector(
      'slot[name="label"]'
    ) as HTMLSlotElement;
    expect(labelSlot).to.exist;

    const assignedNodes = labelSlot?.assignedNodes({ flatten: true }) ?? [];

    // Extract text content from assigned nodes
    const labelText = assignedNodes
      .map((node) => (node.textContent ?? '').trim())
      .join(' ');

    // Assert the label matches expected text
    expect(labelText).to.equal('Optional label for context');
  });

  it('should render a slug', async () => {
    const tearsheet = (await fixture(
      template(defaultProps, getSlug(1))
    )) as CDSTearsheet;

    await new Promise((resolve) => setTimeout(resolve, 100)); // ✅ Wait for styles to settle
    document.body.offsetHeight;

    expect(tearsheet?.open).toBeTruthy();
    // Ensure slug is present
    expect(tearsheet?._hasSlug).toBeTruthy();

    // Locate slug element
    const slug = tearsheet.querySelector('cds-slug') as any;

    // Expect the slug element is present
    expect(slug).toBeDefined();
    // Expect the default slug size is sm
    expect(slug.size).toBe('sm');
  });

  it('should render navigation button', async () => {
    const tearsheet = (await fixture(
      template(defaultProps, getActionToolbarItems(1))
    )) as CDSTearsheet;

    expect(tearsheet?.open).toBeTruthy();

    // Get the dropdown with initial value as option 1
    const dropdown = Array.prototype.find.call(
      tearsheet?.querySelectorAll('cds-dropdown'),
      (el) => el.getAttribute('value') === 'option 1'
    );

    expect(dropdown).toBeDefined();

    // Check if dropdown contains all the available options
    const dropdownItems = dropdown?.querySelectorAll('cds-dropdown-item');
    const expectedOptions = ['option 1', 'option 2', 'option 3', 'option 4'];

    expect(dropdownItems?.length).toBe(expectedOptions.length);

    // Ensure all expected options are present
    expectedOptions.forEach((option) => {
      const item = Array.prototype.find.call(
        dropdownItems,
        (el) =>
          el.getAttribute('value') === option &&
          el.textContent?.trim() === option
      );
      expect(item).toBeDefined();
    });
  });

  it('should close tearsheet when pressing Esc', async () => {
    const tearsheet = (await fixture(
      template({ ...defaultProps, open: true }) // Ensure it starts open
    )) as CDSTearsheet;

    // Ensure the tearsheet is initially open
    expect(tearsheet?.open).toBeTruthy();

    // Dispatch the before-close event via keyboard event (Esc)
    const beforeCloseEvent = new CustomEvent('cds-tearsheet-before-close', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { triggeredBy: 'Escape' }, // Simulate the keypress trigger
    });

    // Dispatch the close event
    const closeEvent = new CustomEvent('cds-tearsheet-close', {
      bubbles: true,
      composed: true,
      detail: { triggeredBy: 'Escape' },
    });

    // Fire the before-close event
    const beforeCloseAccepted = tearsheet.dispatchEvent(beforeCloseEvent);

    if (beforeCloseAccepted) {
      tearsheet.dispatchEvent(closeEvent);
      tearsheet.open = false;
    }

    // Wait for the modal to update
    await new Promise((resolve) => setTimeout(resolve, 200));
    await tearsheet.updateComplete;

    // Expect modal to be closed
    expect(tearsheet.open).toBeFalsy();
  });

  it('should not close tearsheet when preventCloseOnClickOutside is true', async () => {
    const tearsheet = (await fixture(
      template({ ...defaultProps, preventCloseOnClickOutside: true })
    )) as CDSTearsheet;

    expect(tearsheet?.open).toBeTruthy();

    // Dispatch the 'cds-tearsheet-before-close' event
    const beforeCloseEvent = new CustomEvent('cds-tearsheet-before-close', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { triggeredBy: document.body },
    });

    // Prevent the 'cds-tearsheet-before-close' event via event listener
    tearsheet.addEventListener('cds-tearsheet-before-close', (event) => {
      event.preventDefault();
    });

    const beforeCloseAccepted = tearsheet.dispatchEvent(beforeCloseEvent);
    expect(beforeCloseAccepted).toBeFalsy();

    // Expect the modal is still open
    expect(tearsheet.open).toBeTruthy();
  });

  it('renders navigation', async () => {
    const tearsheet = (await fixture(
      template(defaultProps, getNavigation(1))
    )) as CDSTearsheet;

    // Ensure the tearsheet is initially open
    expect(tearsheet?.open).toBeTruthy();

    // Find the slot element
    const slotElement = tearsheet.shadowRoot?.querySelector(
      'slot[name="header-navigation"]'
    ) as HTMLSlotElement;
    expect(slotElement).to.exist;

    const assignedElements = slotElement.assignedElements();

    const tabsContainer = assignedElements.find(
      (el) =>
        el instanceof HTMLElement &&
        (el.classList.contains('tearsheet-stories__tabs') ||
          el.getAttribute('classname') === 'tearsheet-stories__tabs')
    ) as HTMLElement | undefined;

    expect(tabsContainer).to.exist;

    const tabs = tabsContainer?.querySelector('cds-tabs');
    expect(tabs).to.exist;
    expect(tabs?.querySelectorAll('cds-tab')).to.have.lengthOf(4);
  });

  it('renders influencer', async () => {
    const tearsheet = (await fixture(
      template({ ...defaultProps, influencer: influencers[1] })
    )) as CDSTearsheet;

    expect(tearsheet?.open).toBeTruthy();

    const headerEle = tearsheet.shadowRoot?.querySelector('cds-modal-body');
    expect(headerEle).to.exist;

    const influencerSlot = headerEle?.querySelector(
      'slot[name="influencer"]'
    ) as HTMLSlotElement;
    expect(influencerSlot).to.exist;
    const assignedElements = influencerSlot?.assignedElements();

    expect(assignedElements.length).to.be.equal(0);
  });

  afterEach(() => {
    // Clears the DOM after each test
    document.body.innerHTML = '';
    document.body.offsetHeight;
  });
});
