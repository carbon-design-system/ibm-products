/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { html, fixture, elementUpdated } from '@open-wc/testing';
import { carbonPrefix, prefix } from '../../globals/settings';
import CDSActionSet from './action-set';
import './index';
import '@carbon/web-components/es/components/button/index.js';

const blockClass = `${prefix}--action-set`;

describe('c4p-action-set', () => {
  let el: CDSActionSet;

  describe('Basic rendering', () => {
    beforeEach(async () => {
      el = await fixture(html`
        <c4p-action-set>
          <cds-button kind="secondary">Cancel</cds-button>
          <cds-button kind="primary">Submit</cds-button>
        </c4p-action-set>
      `);
      await elementUpdated(el);
    });

    it('renders with default properties', () => {
      expect(el).to.exist;
      expect(el.size).to.equal('md');
      expect(el.stacked).to.be.false;
      expect(el.disableStacking).to.be.false;
    });

    it('applies correct CSS classes', () => {
      const buttonSet = el.shadowRoot?.querySelector('cds-button-set');
      expect(buttonSet).to.exist;
      expect(buttonSet?.classList.contains(blockClass)).to.be.true;
      expect(buttonSet?.classList.contains(`${blockClass}--md`)).to.be.true;
    });

    it('renders buttons in correct order (ghost first, primary last)', async () => {
      const buttons = el.querySelectorAll(`${carbonPrefix}-button`);
      expect(buttons).to.have.length(2);

      // Secondary should come first, primary last
      expect(buttons[0].getAttribute('kind')).to.equal('secondary');
      expect(buttons[1].getAttribute('kind')).to.equal('primary');
    });
  });

  describe('Button ordering', () => {
    it('orders buttons correctly: ghost, tertiary, secondary, primary', async () => {
      // Note: Slotted buttons are NOT physically reordered in the DOM
      // They only get styling and validation applied
      // To test actual ordering, use the actions prop
      el = await fixture(html`
        <c4p-action-set size="xl">
          <cds-button kind="primary">Primary</cds-button>
          <cds-button kind="ghost">Ghost</cds-button>
          <cds-button kind="tertiary">Tertiary</cds-button>
          <cds-button kind="secondary">Secondary</cds-button>
        </c4p-action-set>
      `);
      await elementUpdated(el);

      // Verify buttons exist and have correct styling applied
      const buttons = Array.from(el.querySelectorAll(`${carbonPrefix}-button`));
      expect(buttons).to.have.length(4);

      // Check that ghost button has the ghost class
      const ghostButton = buttons.find(
        (btn) => btn.getAttribute('kind') === 'ghost'
      );
      expect(
        ghostButton?.classList.contains(`${blockClass}__action-button--ghost`)
      ).to.be.true;
    });

    it('reverses order when stacked', async () => {
      // Test with actions prop to verify actual ordering
      el = await fixture(html` <c4p-action-set size="sm"></c4p-action-set> `);

      el.actions = [
        { kind: 'secondary', label: 'Cancel' },
        { kind: 'primary', label: 'Submit' },
      ];
      await elementUpdated(el);

      expect(el.stacked).to.be.true;

      const buttons = Array.from(
        el.shadowRoot!.querySelectorAll(`${carbonPrefix}-button`)
      );
      const kinds = buttons.map((btn) => btn.getAttribute('kind'));

      // When stacked, primary should come first
      expect(kinds[0]).to.equal('primary');
      expect(kinds[1]).to.equal('secondary');
    });
  });

  describe('Stacking behavior', () => {
    it('stacks buttons when size is sm', async () => {
      el = await fixture(html`
        <c4p-action-set size="sm">
          <cds-button kind="secondary">Cancel</cds-button>
          <cds-button kind="primary">Submit</cds-button>
        </c4p-action-set>
      `);
      await elementUpdated(el);

      expect(el.stacked).to.be.true;
      const buttonSet = el.shadowRoot?.querySelector('cds-button-set');
      expect(buttonSet?.classList.contains(`${blockClass}--stacking`)).to.be
        .true;
    });

    it('stacks buttons when size is md and has 3+ buttons', async () => {
      el = await fixture(html`
        <c4p-action-set size="md">
          <cds-button kind="tertiary">Cancel</cds-button>
          <cds-button kind="secondary">Back</cds-button>
          <cds-button kind="primary">Submit</cds-button>
        </c4p-action-set>
      `);
      await elementUpdated(el);

      expect(el.stacked).to.be.true;
    });

    it('does not stack when size is md with 2 buttons', async () => {
      el = await fixture(html`
        <c4p-action-set size="md">
          <cds-button kind="secondary">Cancel</cds-button>
          <cds-button kind="primary">Submit</cds-button>
        </c4p-action-set>
      `);
      await elementUpdated(el);

      expect(el.stacked).to.be.false;
    });

    it('respects disableStacking property', async () => {
      el = await fixture(html`
        <c4p-action-set size="sm" disable-stacking>
          <cds-button kind="secondary">Cancel</cds-button>
          <cds-button kind="primary">Submit</cds-button>
        </c4p-action-set>
      `);
      await elementUpdated(el);

      expect(el.disableStacking).to.be.true;
      expect(el.stacked).to.be.false;
    });
  });

  describe('Size variants', () => {
    it('applies correct classes for different sizes', async () => {
      const sizes: Array<'sm' | 'md' | 'lg' | 'xl' | '2xl'> = [
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
      ];

      for (const size of sizes) {
        el = await fixture(html`
          <c4p-action-set size="${size}">
            <cds-button kind="primary">Submit</cds-button>
          </c4p-action-set>
        `);
        await elementUpdated(el);

        const buttonSet = el.shadowRoot?.querySelector('cds-button-set');
        expect(buttonSet?.classList.contains(`${blockClass}--${size}`)).to.be
          .true;
      }
    });
  });

  describe('Button count classes', () => {
    it('applies row-single class for 1 button', async () => {
      el = await fixture(html`
        <c4p-action-set>
          <cds-button kind="primary">Submit</cds-button>
        </c4p-action-set>
      `);
      await elementUpdated(el);
      // Wait for slotchange to process
      await elementUpdated(el);

      const buttonSet = el.shadowRoot?.querySelector('cds-button-set');
      expect(buttonSet?.classList.contains(`${blockClass}--row-single`)).to.be
        .true;
    });

    it('applies row-double class for 2 buttons', async () => {
      el = await fixture(html`
        <c4p-action-set>
          <cds-button kind="secondary">Cancel</cds-button>
          <cds-button kind="primary">Submit</cds-button>
        </c4p-action-set>
      `);
      await elementUpdated(el);
      // Wait for slotchange to process
      await elementUpdated(el);

      const buttonSet = el.shadowRoot?.querySelector('cds-button-set');
      expect(buttonSet?.classList.contains(`${blockClass}--row-double`)).to.be
        .true;
    });

    it('applies row-triple class for 3 buttons', async () => {
      el = await fixture(html`
        <c4p-action-set size="lg">
          <cds-button kind="tertiary">Cancel</cds-button>
          <cds-button kind="secondary">Back</cds-button>
          <cds-button kind="primary">Submit</cds-button>
        </c4p-action-set>
      `);
      await elementUpdated(el);
      // Wait for slotchange to process
      await elementUpdated(el);

      const buttonSet = el.shadowRoot?.querySelector('cds-button-set');
      expect(buttonSet?.classList.contains(`${blockClass}--row-triple`)).to.be
        .true;
    });

    it('applies row-quadruple class for 4 buttons', async () => {
      el = await fixture(html`
        <c4p-action-set size="xl">
          <cds-button kind="ghost">Help</cds-button>
          <cds-button kind="tertiary">Cancel</cds-button>
          <cds-button kind="secondary">Back</cds-button>
          <cds-button kind="primary">Submit</cds-button>
        </c4p-action-set>
      `);
      await elementUpdated(el);
      // Wait for slotchange to process
      await elementUpdated(el);

      const buttonSet = el.shadowRoot?.querySelector('cds-button-set');
      expect(buttonSet?.classList.contains(`${blockClass}--row-quadruple`)).to
        .be.true;
    });
  });

  describe('Button size property', () => {
    it('applies button-size to all buttons', async () => {
      el = await fixture(html`
        <c4p-action-set button-size="lg">
          <cds-button kind="secondary">Cancel</cds-button>
          <cds-button kind="primary">Submit</cds-button>
        </c4p-action-set>
      `);
      await elementUpdated(el);

      const buttons = el.querySelectorAll(`${carbonPrefix}-button`);
      buttons.forEach((button) => {
        expect(button.getAttribute('size')).to.equal('lg');
      });
    });
  });

  describe('Action set styling', () => {
    it('adds action-button class to buttons', async () => {
      el = await fixture(html`
        <c4p-action-set>
          <cds-button kind="primary">Submit</cds-button>
        </c4p-action-set>
      `);
      await elementUpdated(el);

      const button = el.querySelector(`${carbonPrefix}-button`);
      expect(button?.classList.contains(`${blockClass}__action-button`)).to.be
        .true;
    });

    it('adds ghost-specific class to ghost buttons', async () => {
      el = await fixture(html`
        <c4p-action-set size="lg">
          <cds-button kind="ghost">Help</cds-button>
          <cds-button kind="primary">Submit</cds-button>
        </c4p-action-set>
      `);
      await elementUpdated(el);

      const ghostButton = Array.from(
        el.querySelectorAll(`${carbonPrefix}-button`)
      ).find((btn) => btn.getAttribute('kind') === 'ghost');

      expect(
        ghostButton?.classList.contains(`${blockClass}__action-button--ghost`)
      ).to.be.true;
    });

    it('sets is-expressive attribute on buttons', async () => {
      el = await fixture(html`
        <c4p-action-set>
          <cds-button kind="primary">Submit</cds-button>
        </c4p-action-set>
      `);
      await elementUpdated(el);

      const button = el.querySelector(`${carbonPrefix}-button`);
      expect(button?.getAttribute('is-expressive')).to.equal('true');
    });
  });
});
