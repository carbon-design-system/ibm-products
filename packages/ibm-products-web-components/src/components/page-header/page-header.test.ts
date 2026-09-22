/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, describe, it, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import Bee32 from '@carbon/icons/es/bee/32.js';
import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';
import CDSPageHeader from './page-header';
import CDSPageHeaderBreadcrumb from './page-header-breadcrumb';
import CDSPageHeaderTabs from './page-header-tabs';
import CDSTabs from '@carbon/web-components/es/components/tabs/tabs';
import { carbonPrefix, prefix } from '../../globals/settings';
import './index';

import image1 from './_story-assets/2x1.jpg';
import image2 from './_story-assets/3x2.jpg';
import { breakpoints } from '@carbon/layout';

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}));

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

describe('c4p-page-header', function () {
  it('should find custom css properties to initialize sticky positioning', async () => {
    const pageHeader: CDSPageHeader = await fixture(
      html`<c4p-page-header>
        <c4p-page-header-breadcrumb>
          <cds-breadcrumb>
            <cds-breadcrumb-item href="/#">Breadcrumb 1</cds-breadcrumb-item>
            <cds-breadcrumb-item href="#">Breadcrumb 2</cds-breadcrumb-item>
          </cds-breadcrumb>
        </c4p-page-header-breadcrumb>
        <c4p-page-header-content
          title="Page header content title"
          title-level="h1"
        >
        </c4p-page-header-content>
      </c4p-page-header>`
    );
    await pageHeader.updateComplete;
    await new Promise((resolve) => setTimeout(resolve, 0));
    const contentHeight = getComputedStyle(pageHeader).getPropertyValue(
      `--${prefix}-page-header-header-top`
    );
    const breadcrumbPosition = getComputedStyle(pageHeader).getPropertyValue(
      `--${prefix}-page-header-breadcrumb-top`
    );

    expect(parseFloat(contentHeight)).toBeTypeOf('number');
    expect(parseFloat(breadcrumbPosition)).toBeTypeOf('number');
  });

  describe('c4p-page-header-scroller', () => {
    it('should collapse the page header/scroll', async () => {
      const pageHeader: CDSPageHeader = await fixture(
        html`<main style="height: 200vh;" aria-label="Header">
          <c4p-page-header>
            <c4p-page-header-breadcrumb .border=${true}>
              <cds-breadcrumb>
                <cds-breadcrumb-item href="/#"
                  >Breadcrumb 1</cds-breadcrumb-item
                >
                <cds-breadcrumb-item href="#">Breadcrumb 2</cds-breadcrumb-item>
              </cds-breadcrumb>
            </c4p-page-header-breadcrumb>
            <c4p-page-header-content
              title="Page header content title"
              title-level="h1"
            >
            </c4p-page-header-content>
            <c4p-page-header-tabs>
              <c4p-page-header-scroller slot="scroller">
              </c4p-page-header-scroller>
              <cds-tabs value="tab-1">
                <cds-tab id="tab-1" target="tab-panel-1" value="tab-1"
                  >Tab 1</cds-tab
                >
              </cds-tabs>
            </c4p-page-header-tabs>
          </c4p-page-header>
          <div class="tabs-demo">
            <div
              id="tab-panel-1"
              role="tabpanel"
              aria-labelledby="tab-1"
              hidden
            >
              Tab Panel 1
            </div>
          </div>
        </main>`
      );
      await pageHeader.updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      const scrollerButton = pageHeader.querySelector(
        `${prefix}-page-header-scroller`
      ) as HTMLElement;
      const iconButton = scrollerButton?.shadowRoot?.querySelector(
        `${carbonPrefix}-icon-button`
      ) as HTMLElement;
      expect(scrollerButton).toBeDefined();
      expect(iconButton?.textContent?.trim()).toBe('Collapse');
      const breadcrumbBar = pageHeader.querySelector(
        `${prefix}-page-header-breadcrumb`
      ) as HTMLElement;
      expect(breadcrumbBar.hasAttribute('border')).toBe(true);
      const scrollButtonElement =
        scrollerButton.shadowRoot?.querySelector('cds-icon-button');
      (scrollButtonElement as HTMLButtonElement).click();
    });
  });

  describe('c4p-page-header-breadcrumb', () => {
    it('should place className on the outermost element', async () => {
      const el: CDSPageHeaderBreadcrumb = await fixture(
        html`<c4p-page-header-breadcrumb
          class="custom-class"
        ></c4p-page-header-breadcrumb>`
      );
      expect(el.getAttribute('class')).to.equal('custom-class');
    });

    it('should render breadcrumb items', async () => {
      const el: CDSPageHeaderBreadcrumb = await fixture(html`
        <c4p-page-header-breadcrumb>
          <cds-breadcrumb>
            <cds-breadcrumb-item href="/#">Breadcrumb 1</cds-breadcrumb-item>
            <cds-breadcrumb-item href="#">Breadcrumb 2</cds-breadcrumb-item>
          </cds-breadcrumb>
        </c4p-page-header-breadcrumb>
      `);

      await el.updateComplete;

      const breadcrumbItems = el.querySelectorAll('cds-breadcrumb-item');
      expect(breadcrumbItems.length).to.equal(2);
    });

    it('should render title breadcrumb item', async () => {
      const el: CDSPageHeaderBreadcrumb = await fixture(html`
        <c4p-page-header-breadcrumb>
          <cds-breadcrumb>
            <cds-breadcrumb-item href="/#">Breadcrumb 1</cds-breadcrumb-item>
            <cds-breadcrumb-item href="#">Breadcrumb 2</cds-breadcrumb-item>
            <c4p-page-header-title-breadcrumb>
              Virtual Machine DAL
            </c4p-page-header-title-breadcrumb>
          </cds-breadcrumb>
        </c4p-page-header-breadcrumb>
      `);

      await el.updateComplete;

      const titleBreadcrumb = el.querySelectorAll(
        'c4p-page-header-title-breadcrumb'
      );
      expect(titleBreadcrumb).to.exist;
    });

    it('should render content actions', async () => {
      const el: CDSPageHeaderBreadcrumb = await fixture(html`
        <c4p-page-header-breadcrumb>
          <div slot="content-actions">
            <button class="content-action-item">Button</button>
          </div>
          <cds-breadcrumb>
            <cds-breadcrumb-item href="/#">Breadcrumb 1</cds-breadcrumb-item>
            <cds-breadcrumb-item href="#">Breadcrumb 2</cds-breadcrumb-item>
          </cds-breadcrumb>
        </c4p-page-header-breadcrumb>
      `);

      await el.updateComplete;

      const elem = el.querySelector('.content-action-item');
      expect(elem).to.exist;
    });

    it('should render page actions', async () => {
      const el: CDSPageHeaderBreadcrumb = await fixture(html`
        <c4p-page-header-breadcrumb>
          <div slot="page-actions">
            <button class="page-action-item">Button</button>
          </div>
          <cds-breadcrumb>
            <cds-breadcrumb-item href="/#">Breadcrumb 1</cds-breadcrumb-item>
            <cds-breadcrumb-item href="#">Breadcrumb 2</cds-breadcrumb-item>
          </cds-breadcrumb>
        </c4p-page-header-breadcrumb>
      `);

      await el.updateComplete;

      const elem = el.querySelector('.page-action-item');
      expect(elem).to.exist;
    });
  });

  describe('c4p-page-header-content', () => {
    it('should render a title', async () => {
      const el: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content
            title="Page header content title"
            title-level="h1"
          >
          </c4p-page-header-content>
        </c4p-page-header>
      `);

      const content = el.querySelector(`c4p-page-header-content`);
      const title = content?.shadowRoot?.querySelector(
        '.c4p--page-header__content__title'
      );
      expect(title).to.exist;
      expect(title?.textContent?.trim()).toBe('Page header content title');
    });

    it('should render an icon', async () => {
      const el: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content
            title="Page header content title"
            title-level="h1"
          >
            ${iconLoader(Bee32, { slot: 'icon' })}
          </c4p-page-header-content>
        </c4p-page-header>
      `);

      await el.updateComplete;

      const content = el.querySelector('c4p-page-header-content');
      const slot = content?.shadowRoot?.querySelector(
        'slot[name="icon"]'
      ) as HTMLSlotElement;
      const assigned = slot.assignedNodes({ flatten: true });

      const icon = assigned.find(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE &&
          (node as Element).tagName.toLowerCase() === 'svg'
      );

      expect(icon).to.exist;
    });

    it('should render children', async () => {
      const el: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content
            title="Page header content title"
            title-level="h1"
          >
            <c4p-page-header-content-text>
              Content text
            </c4p-page-header-content-text>
          </c4p-page-header-content>
        </c4p-page-header>
      `);

      const inner = el.querySelector('c4p-page-header-content-text');
      expect(inner?.textContent).to.include('Content text');
    });

    it('should render content text with subtitle', async () => {
      const el: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content
            title="Page header content title"
            title-level="h1"
          >
            <c4p-page-header-content-text
              subtitle="Content text subtitle"
              subtitle-level="h2"
            >
              Content text
            </c4p-page-header-content-text>
          </c4p-page-header-content>
        </c4p-page-header>
      `);

      const inner = el.querySelector('c4p-page-header-content-text');
      expect(inner?.textContent).to.include('Content text');
      const subtitleHeader = el.querySelector(
        `.${prefix}--page-header__content__subtitle`
      );
      expect(subtitleHeader).toBeDefined();
    });

    it('should render contextual actions', async () => {
      const el: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content
            title="Page header content title"
            title-level="h1"
          >
            <div slot="contextual-actions">
              <div>action 1</div>
              <div>action 2</div>
              <div>action 3</div>
            </div>
            <c4p-page-header-content-text>
              Content text
            </c4p-page-header-content-text>
          </c4p-page-header-content>
        </c4p-page-header>
      `);

      const content = el.querySelector('c4p-page-header-content');
      const slot = content?.shadowRoot?.querySelector(
        'slot[name="contextual-actions"]'
      ) as HTMLSlotElement;
      const assigned = slot?.assignedNodes({ flatten: true });

      const actions = (assigned[0] as Element).querySelectorAll('div');

      expect(actions.length).to.equal(3);
      expect(actions[0].textContent).to.include('action 1');
      expect(actions[1].textContent).to.include('action 2');
      expect(actions[2].textContent).to.include('action 3');
    });

    it('should render page actions', async () => {
      const el: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content
            title="Page header content title"
            title-level="h1"
          >
            <button slot="page-actions">page actions</button>
            <c4p-page-header-content-text>
              Content text
            </c4p-page-header-content-text>
          </c4p-page-header-content>
        </c4p-page-header>
      `);

      const content = el.querySelector('c4p-page-header-content');
      const slot = content?.shadowRoot?.querySelector(
        'slot[name="page-actions"]'
      ) as HTMLSlotElement;

      const assigned = slot.assignedNodes({ flatten: true });

      const button = assigned.find(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE &&
          (node as Element).tagName.toLowerCase() === 'button'
      );

      expect(button).to.exist;
      expect(button?.textContent).to.include('page actions');
    });

    it('should render page header hero image', async () => {
      const el: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content title="Page header content title" title-level="h1">
            <button slot="page-actions">page actions</button>
            <c4p-page-header-content-text>
              Content text
            </c4p-page-header-content-text>
          </c4p-page-header-content>
          <c4p-page-header-hero-image>
            <picture>
              <source
                srcset="${image1}"
                media=${`(min-width: ${breakpoints.lg.width})`}
              ></source>
              <source
                srcset="${image2}"
                media=${`(max-width: ${breakpoints.lg.width})`}
              ></source>
              <img
                src="${image1}"
                alt="a default image"
                style="max-width:100%;height:auto"
              />
            </picture>
          </c4p-page-header-hero-image>
        </c4p-page-header>
      `);

      const heroImageComponent = el.querySelector('c4p-page-header-hero-image');
      expect(heroImageComponent).toBeTruthy();
    });
  });

  describe('c4p-page-header-content title slot', () => {
    it('should render custom title slot content in place of the title attribute', async () => {
      const el: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content title="Attribute title">
            <span slot="title" class="custom-title">Custom title node</span>
          </c4p-page-header-content>
        </c4p-page-header>
      `);

      const content = el.querySelector('c4p-page-header-content') as any;
      await content?.updateComplete;

      const titleSlot = content?.shadowRoot?.querySelector(
        'slot[name="title"]'
      ) as HTMLSlotElement;
      const assigned = titleSlot?.assignedNodes({ flatten: true });

      const customTitle = assigned.find(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE &&
          (node as Element).classList.contains('custom-title')
      );
      expect(customTitle).to.exist;
      expect(customTitle?.textContent?.trim()).toBe('Custom title node');
    });

    it('should suppress the title attribute heading when the title slot is populated', async () => {
      const el: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content title="Attribute title">
            <span slot="title">Custom title node</span>
          </c4p-page-header-content>
        </c4p-page-header>
      `);

      const content = el.querySelector('c4p-page-header-content') as any;
      await content?.updateComplete;

      // The generated heading (h1/h2/…) should not be present when the slot is used
      const generatedHeading = content?.shadowRoot?.querySelector(
        `.${prefix}--page-header__content__title`
      );
      expect(generatedHeading).to.not.exist;
    });

    it('should still render the title attribute heading when the title slot is empty', async () => {
      const el: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content title="Attribute title" title-level="h1">
          </c4p-page-header-content>
        </c4p-page-header>
      `);

      const content = el.querySelector('c4p-page-header-content') as any;
      await content?.updateComplete;

      const generatedHeading = content?.shadowRoot?.querySelector(
        `.${prefix}--page-header__content__title`
      );
      expect(generatedHeading).to.exist;
      expect(generatedHeading?.textContent?.trim()).toBe('Attribute title');
    });
  });

  describe('c4p-page-header-breadcrumbs-set breadcrumb-content slot', () => {
    it('should render custom breadcrumb-content slot in the title breadcrumb', async () => {
      const el = await fixture(html`
        <c4p-page-header-breadcrumbs-set
          title="Attribute title"
          .breadcrumbsData="${[{ text: 'Home', href: '#' }]}"
        >
          <span slot="breadcrumb-content" class="custom-bc">Custom BC</span>
        </c4p-page-header-breadcrumbs-set>
      `);

      await (el as any).updateComplete;

      // The slotted node must be reachable in light DOM
      const customBc = el.querySelector('.custom-bc');
      expect(customBc).to.exist;
      expect(customBc?.textContent?.trim()).toBe('Custom BC');
    });

    it('should render the breadcrumb-content slot via the shadow slot element', async () => {
      const el = await fixture(html`
        <c4p-page-header-breadcrumbs-set
          title="Attribute title"
          .breadcrumbsData="${[{ text: 'Home', href: '#' }]}"
        >
          <span slot="breadcrumb-content">Custom BC</span>
        </c4p-page-header-breadcrumbs-set>
      `);

      await (el as any).updateComplete;

      const bcSlot = el.shadowRoot?.querySelector(
        'slot[name="breadcrumb-content"]'
      ) as HTMLSlotElement;
      expect(bcSlot).to.exist;

      const assigned = bcSlot?.assignedNodes({ flatten: true });
      expect(assigned.length).toBeGreaterThan(0);
      expect(assigned[0].textContent?.trim()).toBe('Custom BC');
    });

    it('should show truncated text when breadcrumb-content slot is empty', async () => {
      const el = await fixture(html`
        <c4p-page-header-breadcrumbs-set
          title="Page title"
          .breadcrumbsData="${[{ text: 'Home', href: '#' }]}"
        ></c4p-page-header-breadcrumbs-set>
      `);

      await (el as any).updateComplete;

      const truncatedText = el.shadowRoot?.querySelector('c4p-truncated-text');
      expect(truncatedText).to.exist;
      expect(truncatedText?.getAttribute('value')).toBe('Page title');
    });

    it('should hide truncated text when breadcrumb-content slot is populated', async () => {
      const el = await fixture(html`
        <c4p-page-header-breadcrumbs-set
          title="Page title"
          .breadcrumbsData="${[{ text: 'Home', href: '#' }]}"
        >
          <span slot="breadcrumb-content">Custom BC</span>
        </c4p-page-header-breadcrumbs-set>
      `);

      await (el as any).updateComplete;
      // Trigger slotchange processing
      await new Promise((resolve) => setTimeout(resolve, 0));
      await (el as any).updateComplete;

      const truncatedText = el.shadowRoot?.querySelector('c4p-truncated-text');
      expect(truncatedText).to.not.exist;
    });
  });

  describe('c4p-page-header-content-text subtitle-content slot', () => {
    it('should render the subtitle-content slot inside the subtitle heading', async () => {
      const el = await fixture(html`
        <c4p-page-header-content-text>
          <span slot="subtitle-content" class="custom-subtitle"
            >Rich subtitle</span
          >
        </c4p-page-header-content-text>
      `);

      await (el as any).updateComplete;

      const customSubtitle = el.querySelector('.custom-subtitle');
      expect(customSubtitle).to.exist;
      expect(customSubtitle?.textContent?.trim()).toBe('Rich subtitle');
    });

    it('should render the subtitle-content slot via the shadow slot element', async () => {
      const el = await fixture(html`
        <c4p-page-header-content-text>
          <span slot="subtitle-content">Rich subtitle</span>
        </c4p-page-header-content-text>
      `);

      await (el as any).updateComplete;

      const subtitleSlot = el.shadowRoot?.querySelector(
        'slot[name="subtitle-content"]'
      ) as HTMLSlotElement;
      expect(subtitleSlot).to.exist;

      const assigned = subtitleSlot?.assignedNodes({ flatten: true });
      expect(assigned.length).toBeGreaterThan(0);
      expect(assigned[0].textContent?.trim()).toBe('Rich subtitle');
    });

    it('should render the subtitle attribute text when no subtitle-content slot is used', async () => {
      const el = await fixture(html`
        <c4p-page-header-content-text
          subtitle="Plain subtitle"
          subtitle-level="h2"
        >
        </c4p-page-header-content-text>
      `);

      await (el as any).updateComplete;

      const subtitleEl = el.shadowRoot?.querySelector(
        `.${prefix}--page-header__content__subtitle`
      );
      expect(subtitleEl).to.exist;
      expect(subtitleEl?.textContent?.trim()).toBe('Plain subtitle');
    });

    it('should not render the subtitle heading when both subtitle attribute and slot are empty', async () => {
      const el = await fixture(html`
        <c4p-page-header-content-text></c4p-page-header-content-text>
      `);

      await (el as any).updateComplete;

      const subtitleEl = el.shadowRoot?.querySelector(
        `.${prefix}--page-header__content__subtitle`
      );
      expect(subtitleEl).to.not.exist;
    });

    it('should suppress the subtitle attribute when the subtitle-content slot is populated', async () => {
      const el = await fixture(html`
        <c4p-page-header-content-text subtitle="Plain subtitle">
          <span slot="subtitle-content">Rich subtitle</span>
        </c4p-page-header-content-text>
      `);

      await (el as any).updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));
      await (el as any).updateComplete;

      const subtitleEl = el.shadowRoot?.querySelector(
        `.${prefix}--page-header__content__subtitle`
      );
      // The subtitle heading is rendered because slot content is present
      expect(subtitleEl).to.exist;
      // The plain attribute text must NOT appear as a direct shadow text node
      expect(subtitleEl?.textContent?.trim()).not.toBe('Plain subtitle');

      // The slot element is present and the slotted node is assigned
      const subtitleSlot = subtitleEl?.querySelector(
        'slot[name="subtitle-content"]'
      ) as HTMLSlotElement;
      expect(subtitleSlot).to.exist;
      const assigned = subtitleSlot?.assignedNodes({ flatten: true });
      expect(assigned.length).toBeGreaterThan(0);
      expect(assigned[0].textContent?.trim()).toBe('Rich subtitle');
    });
  });

  describe('IntersectionObserver context updates', () => {
    it('should update fullyCollapsed context when content leaves viewport', async () => {
      // Capture the observer callbacks registered by c4p-page-header
      const observerCallbacks: IntersectionObserverCallback[] = [];
      IntersectionObserverMock.mockImplementation(
        (cb: IntersectionObserverCallback) => {
          observerCallbacks.push(cb);
          return { disconnect: vi.fn(), observe: vi.fn(), unobserve: vi.fn() };
        }
      );

      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content title="Title" title-level="h1">
          </c4p-page-header-content>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;

      // contentObserver is registered first (index 0)
      const contentObserverCb = observerCallbacks[0];
      expect(contentObserverCb).toBeDefined();

      // Simulate content leaving viewport → fullyCollapsed: true
      contentObserverCb(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
      expect((pageHeader as any).context.fullyCollapsed).toBe(true);

      // Simulate content re-entering → fullyCollapsed: false
      contentObserverCb(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
      expect((pageHeader as any).context.fullyCollapsed).toBe(false);
    });

    it('should update titleClipped context when title leaves viewport', async () => {
      const observerCallbacks: IntersectionObserverCallback[] = [];
      IntersectionObserverMock.mockImplementation(
        (cb: IntersectionObserverCallback) => {
          observerCallbacks.push(cb);
          return { disconnect: vi.fn(), observe: vi.fn(), unobserve: vi.fn() };
        }
      );

      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content title="Title" title-level="h1">
          </c4p-page-header-content>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;

      // titleObserver is registered second (index 1)
      const titleObserverCb = observerCallbacks[1];
      expect(titleObserverCb).toBeDefined();

      titleObserverCb(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
      expect((pageHeader as any).context.titleClipped).toBe(true);

      titleObserverCb(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
      expect((pageHeader as any).context.titleClipped).toBe(false);
    });

    it('should update contentActionsClipped context when actions leave viewport', async () => {
      const observerCallbacks: IntersectionObserverCallback[] = [];
      IntersectionObserverMock.mockImplementation(
        (cb: IntersectionObserverCallback) => {
          observerCallbacks.push(cb);
          return { disconnect: vi.fn(), observe: vi.fn(), unobserve: vi.fn() };
        }
      );

      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content title="Title" title-level="h1">
          </c4p-page-header-content>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;

      // actionsObserver is registered third (index 2)
      const actionsObserverCb = observerCallbacks[2];
      expect(actionsObserverCb).toBeDefined();

      actionsObserverCb(
        [{ isIntersecting: false } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
      expect((pageHeader as any).context.contentActionsClipped).toBe(true);

      actionsObserverCb(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
      expect((pageHeader as any).context.contentActionsClipped).toBe(false);
    });
  });

  describe('c4p-page-header-tabs disableStickyTabBar', () => {
    it('should add disable class to page-header when disable-sticky-tab-bar is set', async () => {
      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-tabs disable-sticky-tab-bar>
            <cds-tabs value="tab-1">
              <cds-tab id="tab-1" target="tab-panel-1" value="tab-1"
                >Tab 1</cds-tab
              >
            </cds-tabs>
          </c4p-page-header-tabs>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(
        pageHeader.classList.contains(
          `${prefix}--page-header--disable-sticky-tab-bar`
        )
      ).toBe(true);
    });

    it('should remove disable class from page-header when disable-sticky-tab-bar is toggled off', async () => {
      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-tabs disable-sticky-tab-bar>
            <cds-tabs value="tab-1">
              <cds-tab id="tab-1" target="tab-panel-1" value="tab-1"
                >Tab 1</cds-tab
              >
            </cds-tabs>
          </c4p-page-header-tabs>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      const tabsEl = pageHeader.querySelector(
        'c4p-page-header-tabs'
      ) as HTMLElement & { disableStickyTabBar: boolean };
      tabsEl.removeAttribute('disable-sticky-tab-bar');
      await (tabsEl as any).updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      expect(
        pageHeader.classList.contains(
          `${prefix}--page-header--disable-sticky-tab-bar`
        )
      ).toBe(false);
    });
  });

  describe('c4p-page-header-scroller scroll behavior', () => {
    it('should scroll to content height when not fully collapsed', async () => {
      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content title="Title" title-level="h1">
          </c4p-page-header-content>
          <c4p-page-header-tabs>
            <c4p-page-header-scroller
              slot="scroller"
            ></c4p-page-header-scroller>
            <cds-tabs value="tab-1">
              <cds-tab id="tab-1" target="tab-panel-1" value="tab-1"
                >Tab 1</cds-tab
              >
            </cds-tabs>
          </c4p-page-header-tabs>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      // scrollableAncestorInner falls back to document.scrollingElement in jsdom
      const scrollSpy = vi.fn();
      (document.scrollingElement as any).scrollTo = scrollSpy;

      const scroller = pageHeader.querySelector(
        `${prefix}-page-header-scroller`
      ) as HTMLElement;
      const iconBtn = scroller?.shadowRoot?.querySelector(
        'cds-icon-button'
      ) as HTMLElement;
      iconBtn?.click();

      expect(scrollSpy).toHaveBeenCalledWith(
        expect.objectContaining({ behavior: 'smooth' })
      );
    });

    it('should scroll to top when fully collapsed', async () => {
      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content title="Title" title-level="h1">
          </c4p-page-header-content>
          <c4p-page-header-tabs>
            <c4p-page-header-scroller
              slot="scroller"
            ></c4p-page-header-scroller>
            <cds-tabs value="tab-1">
              <cds-tab id="tab-1" target="tab-panel-1" value="tab-1"
                >Tab 1</cds-tab
              >
            </cds-tabs>
          </c4p-page-header-tabs>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      // Force fullyCollapsed: true on the root page header context
      (pageHeader as any).context = {
        ...(pageHeader as any).context,
        fullyCollapsed: true,
      };
      await pageHeader.updateComplete;

      const scrollSpy = vi.fn();
      (document.scrollingElement as any).scrollTo = scrollSpy;

      const scroller = pageHeader.querySelector(
        `${prefix}-page-header-scroller`
      ) as HTMLElement;
      const iconBtn = scroller?.shadowRoot?.querySelector(
        'cds-icon-button'
      ) as HTMLElement;
      iconBtn?.click();

      expect(scrollSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
  });

  describe('context propagation to child elements', () => {
    it('should add show class to content-actions wrapper when contentActionsClipped is true', async () => {
      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-breadcrumb>
            <div slot="content-actions">
              <button>Action</button>
            </div>
          </c4p-page-header-breadcrumb>
          <c4p-page-header-content title="Title" title-level="h1">
          </c4p-page-header-content>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;

      // Trigger contentActionsClipped via context
      (pageHeader as any).context = {
        ...(pageHeader as any).context,
        contentActionsClipped: true,
      };
      await pageHeader.updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      const breadcrumb = pageHeader.querySelector(
        `${prefix}-page-header-breadcrumb`
      ) as HTMLElement;
      await (breadcrumb as any).updateComplete;

      const actionsWrapper = breadcrumb.shadowRoot?.querySelector(
        `.${prefix}--page-header__breadcrumb__content-actions-with-global-actions`
      );
      expect(
        actionsWrapper?.classList.contains(
          `${prefix}--page-header__breadcrumb__content-actions-with-global-actions--show`
        )
      ).toBe(true);
    });

    it('should remove show class from content-actions wrapper when contentActionsClipped is false', async () => {
      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-breadcrumb>
            <div slot="content-actions">
              <button>Action</button>
            </div>
          </c4p-page-header-breadcrumb>
          <c4p-page-header-content title="Title" title-level="h1">
          </c4p-page-header-content>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;

      (pageHeader as any).context = {
        ...(pageHeader as any).context,
        contentActionsClipped: false,
      };
      await pageHeader.updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      const breadcrumb = pageHeader.querySelector(
        `${prefix}-page-header-breadcrumb`
      ) as HTMLElement;
      await (breadcrumb as any).updateComplete;

      const actionsWrapper = breadcrumb.shadowRoot?.querySelector(
        `.${prefix}--page-header__breadcrumb__content-actions-with-global-actions`
      );
      expect(
        actionsWrapper?.classList.contains(
          `${prefix}--page-header__breadcrumb__content-actions-with-global-actions--show`
        )
      ).toBe(false);
    });
  });

  describe('c4p-page-header-actions-set overflow', () => {
    it('should show overflow menu when actions do not fit', async () => {
      const el = await fixture(html`
        <c4p-page-header-actions-set
          style="width: 60px; display: block;"
          .actionsData="${[
            { label: 'Edit' },
            { label: 'Delete' },
            { label: 'Export' },
          ]}"
        >
          <button style="width: 80px;">Edit</button>
          <button style="width: 80px;">Delete</button>
          <button style="width: 80px;">Export</button>
        </c4p-page-header-actions-set>
      `);

      await (el as any).updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 200));
      await (el as any).updateComplete;

      const overflowMenu = el.shadowRoot?.querySelector('cds-overflow-menu');
      expect(overflowMenu).to.exist;
    });

    it('should include correct labels in overflow menu body', async () => {
      const el = await fixture(html`
        <c4p-page-header-actions-set
          style="width: 60px; display: block;"
          .actionsData="${[{ label: 'Edit' }, { label: 'Delete' }]}"
        >
          <button style="width: 80px;">Edit</button>
          <button style="width: 80px;">Delete</button>
        </c4p-page-header-actions-set>
      `);

      await (el as any).updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 200));
      await (el as any).updateComplete;

      const hiddenItems = (el as any).hiddenItems as { label: string }[];
      expect(hiddenItems.length).toBeGreaterThan(0);
      const labels = hiddenItems.map((i) => i.label);
      expect(labels).toContain('Delete');
    });
  });

  describe('c4p-page-header-tags-set overflow', () => {
    it('should show +N operational tag when tags overflow', async () => {
      const tags = Array.from({ length: 10 }, (_, i) => ({
        type: 'blue' as any,
        text: `Tag ${i}`,
        size: 'sm' as any,
      }));

      const el = await fixture(html`
        <c4p-page-header-tags-set
          style="width: 80px; display: block;"
          .tagsData="${tags}"
        ></c4p-page-header-tags-set>
      `);

      await (el as any).updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));
      await (el as any).updateComplete;

      const hiddenTags = (el as any).hiddenTags as unknown[];
      expect(hiddenTags.length).toBeGreaterThan(0);

      const overflowSpan = el.shadowRoot?.querySelector('[data-offset]');
      expect(overflowSpan).to.exist;
    });

    it('should open popover when +N tag is clicked', async () => {
      const tags = Array.from({ length: 10 }, (_, i) => ({
        type: 'blue' as any,
        text: `Tag ${i}`,
        size: 'sm' as any,
      }));

      const el = await fixture(html`
        <c4p-page-header-tags-set
          style="width: 80px; display: block;"
          .tagsData="${tags}"
        ></c4p-page-header-tags-set>
      `);

      await (el as any).updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));
      await (el as any).updateComplete;

      const operationalTag = el.shadowRoot?.querySelector(
        'cds-operational-tag'
      ) as HTMLElement;
      operationalTag?.click();
      await (el as any).updateComplete;

      expect((el as any).isPopoverOpen).toBe(true);
    });
  });

  describe('c4p-page-header-breadcrumbs-set overflow', () => {
    it('should show overflow menu when breadcrumbs do not fit', async () => {
      const breadcrumbs = Array.from({ length: 5 }, (_, i) => ({
        text: `Breadcrumb ${i}`,
        href: `#${i}`,
      }));

      const el = await fixture(html`
        <c4p-page-header-breadcrumbs-set
          style="width: 80px; display: block;"
          title="Page title"
          .breadcrumbsData="${breadcrumbs}"
        ></c4p-page-header-breadcrumbs-set>
      `);

      await (el as any).updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));
      await (el as any).updateComplete;

      const hiddenItems = (el as any).hiddenItems as unknown[];
      expect(hiddenItems.length).toBeGreaterThan(0);
    });

    it('should include correct items in breadcrumb overflow menu', async () => {
      const breadcrumbs = Array.from({ length: 5 }, (_, i) => ({
        text: `Breadcrumb ${i}`,
        href: `#${i}`,
      }));

      const el = await fixture(html`
        <c4p-page-header-breadcrumbs-set
          style="width: 80px; display: block;"
          title="Page title"
          .breadcrumbsData="${breadcrumbs}"
        ></c4p-page-header-breadcrumbs-set>
      `);

      await (el as any).updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));
      await (el as any).updateComplete;

      const overflowMenu = el.shadowRoot?.querySelector('cds-overflow-menu');
      expect(overflowMenu).to.exist;

      const hiddenItems = (el as any).hiddenItems as { text: string }[];
      if (hiddenItems.length > 0) {
        expect(hiddenItems[0].text).toMatch(/Breadcrumb/);
      }
    });
  });

  describe('c4p-page-header-tabs', () => {
    it('should render tabs', async () => {
      const el: CDSPageHeaderTabs = await fixture(
        html` <c4p-page-header-tabs>
          <cds-tabs value="tab-1">
            <cds-tab id="tab-1" target="tab-panel-1" value="tab-1"
              >Tab 1</cds-tab
            >
            <cds-tab id="tab-2" target="tab-panel-2" value="tab-2"
              >Tab 2</cds-tab
            >
          </cds-tabs>
        </c4p-page-header-tabs>`
      );

      const tabs = el.querySelector('cds-tabs') as CDSTabs;
      expect(tabs).to.exist;

      await tabs.updateComplete;

      const tab = tabs.querySelectorAll('cds-tab');
      expect(tab.length).to.equal(2);
      expect(tab[0].textContent).to.include('Tab 1');
      expect(tab[1].textContent).to.include('Tab 2');
    });

    it('should render tags', async () => {
      const el: CDSPageHeaderTabs = await fixture(
        html` <c4p-page-header-tabs>
          <div slot="tags">
            <cds-tag>Tag 1</cds-tag>
            <cds-tag>Tag 2</cds-tag>
          </div>
        </c4p-page-header-tabs>`
      );

      const slot = el?.shadowRoot?.querySelector(
        'slot[name="tags"]'
      ) as HTMLSlotElement;
      const assigned = slot?.assignedNodes({ flatten: true });

      const wrapper = assigned.find(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE &&
          (node as Element).tagName.toLowerCase() === 'div'
      );

      const tags = (wrapper as Element)?.querySelectorAll('cds-tag');

      expect(tags.length).to.equal(2);
      expect(tags[0].textContent).to.include('Tag 1');
      expect(tags[1].textContent).to.include('Tag 2');
    });
  });

  describe('full-width-grid and narrow-grid attributes', () => {
    it('should set fullWidthGrid on the context when full-width-grid attribute is set', async () => {
      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header full-width-grid>
          <c4p-page-header-content title="Title" title-level="h1">
          </c4p-page-header-content>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      expect((pageHeader as any).context.fullWidthGrid).toBe(true);
      expect((pageHeader as any).context.narrowGrid).toBe(false);
    });

    it('should set narrowGrid on the context when narrow-grid attribute is set', async () => {
      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header narrow-grid>
          <c4p-page-header-content title="Title" title-level="h1">
          </c4p-page-header-content>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      expect((pageHeader as any).context.narrowGrid).toBe(true);
      expect((pageHeader as any).context.fullWidthGrid).toBe(false);
    });

    it('should apply cds--css-grid--full-width class to breadcrumb grid when full-width-grid is set', async () => {
      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header full-width-grid>
          <c4p-page-header-breadcrumb>
            <cds-breadcrumb>
              <cds-breadcrumb-item href="#">Breadcrumb 1</cds-breadcrumb-item>
            </cds-breadcrumb>
          </c4p-page-header-breadcrumb>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      const breadcrumb = pageHeader.querySelector(
        `${prefix}-page-header-breadcrumb`
      ) as HTMLElement;
      await (breadcrumb as any).updateComplete;

      const grid = breadcrumb.shadowRoot?.querySelector(
        `.${carbonPrefix}--css-grid`
      );
      expect(
        grid?.classList.contains(`${carbonPrefix}--css-grid--full-width`)
      ).toBe(true);
    });

    it('should apply cds--css-grid--narrow class to breadcrumb grid when narrow-grid is set', async () => {
      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header narrow-grid>
          <c4p-page-header-breadcrumb>
            <cds-breadcrumb>
              <cds-breadcrumb-item href="#">Breadcrumb 1</cds-breadcrumb-item>
            </cds-breadcrumb>
          </c4p-page-header-breadcrumb>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      const breadcrumb = pageHeader.querySelector(
        `${prefix}-page-header-breadcrumb`
      ) as HTMLElement;
      await (breadcrumb as any).updateComplete;

      const grid = breadcrumb.shadowRoot?.querySelector(
        `.${carbonPrefix}--css-grid`
      );
      expect(
        grid?.classList.contains(`${carbonPrefix}--css-grid--narrow`)
      ).toBe(true);
    });

    it('should apply cds--css-grid--full-width class to content grid when full-width-grid is set', async () => {
      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header full-width-grid>
          <c4p-page-header-content title="Title" title-level="h1">
          </c4p-page-header-content>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      const content = pageHeader.querySelector(
        `${prefix}-page-header-content`
      ) as HTMLElement;
      await (content as any).updateComplete;

      const grid = content.shadowRoot?.querySelector(
        `.${carbonPrefix}--css-grid`
      );
      expect(
        grid?.classList.contains(`${carbonPrefix}--css-grid--full-width`)
      ).toBe(true);
    });

    it('should apply cds--css-grid--full-width class to tabs grid when full-width-grid is set', async () => {
      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header full-width-grid>
          <c4p-page-header-tabs>
            <cds-tabs value="tab-1">
              <cds-tab id="tab-1" target="tab-panel-1" value="tab-1"
                >Tab 1</cds-tab
              >
            </cds-tabs>
          </c4p-page-header-tabs>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      const tabs = pageHeader.querySelector(
        `${prefix}-page-header-tabs`
      ) as HTMLElement;
      await (tabs as any).updateComplete;

      const grid = tabs.shadowRoot?.querySelector(`.${carbonPrefix}--css-grid`);
      expect(
        grid?.classList.contains(`${carbonPrefix}--css-grid--full-width`)
      ).toBe(true);
    });

    it('should not apply modifier classes when neither attribute is set', async () => {
      const pageHeader: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-breadcrumb>
            <cds-breadcrumb>
              <cds-breadcrumb-item href="#">Breadcrumb 1</cds-breadcrumb-item>
            </cds-breadcrumb>
          </c4p-page-header-breadcrumb>
        </c4p-page-header>
      `);
      await pageHeader.updateComplete;
      await new Promise((resolve) => setTimeout(resolve, 0));

      const breadcrumb = pageHeader.querySelector(
        `${prefix}-page-header-breadcrumb`
      ) as HTMLElement;
      await (breadcrumb as any).updateComplete;

      const grid = breadcrumb.shadowRoot?.querySelector(
        `.${carbonPrefix}--css-grid`
      );
      expect(
        grid?.classList.contains(`${carbonPrefix}--css-grid--full-width`)
      ).toBe(false);
      expect(
        grid?.classList.contains(`${carbonPrefix}--css-grid--narrow`)
      ).toBe(false);
    });
  });
});
