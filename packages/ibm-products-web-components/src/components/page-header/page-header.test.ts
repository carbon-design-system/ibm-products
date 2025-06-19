/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, describe, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import Bee32 from '@carbon/web-components/es/icons/bee/32.js';
import CDSPageHeader from './page-header';
import CDSPageHeaderBreadcrumb from './page-header-breadcrumb';
import CDSPageHeaderTabs from './page-header-tabs';
import CDSTabs from '@carbon/web-components/es/components/tabs/tabs';
import './index';

describe('c4p-page-header', function () {
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
          <c4p-page-header-content title="Page header content title">
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
          <c4p-page-header-content title="Page header content title">
            ${Bee32({ slot: 'icon' })}
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
          <c4p-page-header-content title="Page header content title">
            <c4p-page-header-content-text>
              Content text
            </c4p-page-header-content-text>
          </c4p-page-header-content>
        </c4p-page-header>
      `);

      const inner = el.querySelector('c4p-page-header-content-text');
      expect(inner?.textContent).to.include('Content text');
    });

    it('should render contextual actions', async () => {
      const el: CDSPageHeader = await fixture(html`
        <c4p-page-header>
          <c4p-page-header-content title="Page header content title">
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
          <c4p-page-header-content title="Page header content title">
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
});
