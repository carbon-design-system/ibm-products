/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, describe, it, vi, beforeEach } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './index';
import CDSCoachmark from './coachmark';
import CDSCoachmarkHeader from './coachmark-header';
import CDSCoachmarkBody from './coachmark-body';
import { coachmarkDetailsSignal } from './coachmark-context';
import { prefix, carbonPrefix } from '../../globals/settings';
import iconLoader from '@carbon/web-components/es/globals/internal/icon-loader';
import Crossroads from '@carbon/icons/es/crossroads/16.js';

const templateTooltip = (args: any = {}) => {
  const handleClick = () => {
    document.querySelector('c4p-coachmark')?.toggleAttribute('open');
  };
  return html`
    <c4p-coachmark
      .open=${args.open}
      align=${args.align}
      .position=${{ x: 150, y: 100 }}
    >
      <c4p-coachmark-beacon
        label="Show information"
        .expanded=${args.open}
        @c4p-coachmark-beacon-clicked=${handleClick}
        slot="trigger"
      >
      </c4p-coachmark-beacon>
      <c4p-coachmark-header
        class="coachmark-header"
        closeIconDescription="close icon"
      ></c4p-coachmark-header>
      <c4p-coachmark-body class="coachmark-body">
        <h2>Hello World</h2>
        <p>this is a description test</p>
        <cds-button size="sm">Done</cds-button>
      </c4p-coachmark-body>
    </c4p-coachmark>
  `;
};

const templateFloating = (args: any = {}) => {
  const handleClick = () => {
    document.querySelector('c4p-coachmark')?.toggleAttribute('open');
  };
  return html`
    <c4p-coachmark
      .open=${args.open}
      align=${args.align}
      ?floating=${args.floating}
    >
      <cds-button
        kind="tertiary"
        slot="trigger"
        class="trigger-btn"
        @click=${handleClick}
        >Show information ${iconLoader(Crossroads as any, { slot: 'icon' })}
      </cds-button>
      <c4p-coachmark-header
        closeIconDescription="close icon"
        dragIconDescription="drag icon"
        class="coachmark-header"
      ></c4p-coachmark-header>
      <c4p-coachmark-body class="coachmark-body">
        <h2>Hello World</h2>
        <p>this is a description test</p>
        <cds-button size="sm">Done</cds-button>
      </c4p-coachmark-body>
    </c4p-coachmark>
  `;
};
describe('c4p-coachmark', function () {
  const mockDetails = {
    open: false,
    floating: false,
  };
  beforeEach(() => {
    coachmarkDetailsSignal.get = vi.fn(() => mockDetails);
  });

  it('applies className to the containing node', async () => {
    const customClass = 'test';
    const el = await fixture(templateTooltip({ align: 'bottom', open: true }));
    el.classList.add(customClass);
    expect(el.getAttribute('class')).to.include(customClass);
  });

  it('should render tooltip variant with beacon and popover(includes header and body)', async () => {
    const el = await fixture<CDSCoachmark>(
      templateTooltip({ align: 'bottom', open: true })
    );

    //Beacon
    const beacon = el.querySelector('c4p-coachmark-beacon');
    expect(beacon).to.exist;
    expect(beacon?.getAttribute('label')).to.equal('Show information');

    // Header
    const header = el?.querySelector(
      `${prefix}-coachmark-header`
    ) as CDSCoachmarkHeader;
    const headerShadow = header.shadowRoot!;

    const headerSlot = headerShadow.querySelector('slot[name="header"]');
    expect(headerSlot).to.exist;

    const closeButton = headerShadow.querySelector(`${carbonPrefix}-button`);
    expect(closeButton).to.exist;

    // Popover
    const body = el?.querySelector(
      `${prefix}-coachmark-body`
    ) as CDSCoachmarkBody;

    const slot = body.shadowRoot?.querySelector('slot');
    expect(slot).to.exist;

    const heading = el.querySelector('h2');
    const paragraph = el.querySelector('p');
    const button = el.querySelector(`${carbonPrefix}-button`);

    expect(heading).to.exist;
    expect(heading?.textContent?.trim()).to.equal('Hello World');

    expect(paragraph).to.exist;
    expect(paragraph?.textContent?.trim()).to.equal(
      'this is a description test'
    );

    expect(button).to.exist;
    expect(button?.textContent?.trim()).to.equal('Done');
  });

  it('responds to close button and renders closeIconDescription', async () => {
    const el = (await fixture(
      templateTooltip({ align: 'bottom', open: true })
    )) as CDSCoachmark;
    expect(el?.open).toBeTruthy();
    const header = el?.querySelector(
      `${prefix}-coachmark-header`
    ) as CDSCoachmarkHeader;
    const headerShadow = header.shadowRoot!;

    const headerSlot = headerShadow.querySelector('slot[name="header"]');
    expect(headerSlot).to.exist;

    const closeButton = headerShadow.querySelector(
      `${carbonPrefix}-button`
    ) as HTMLElement;
    expect(closeButton).to.exist;
    expect(closeButton.hasAttribute('icondescription')).to.be.true;
    expect(closeButton.getAttribute('icondescription')).to.equal('close icon');

    closeButton?.click();

    await el.updateComplete;

    expect(coachmarkDetailsSignal.get().open).to.be.false;
  });

  it('responds to position attribute and updates the coachmark’s position accordingly for Tooltip variant.', async () => {
    const el = (await fixture(
      templateTooltip({ align: 'bottom', open: true })
    )) as CDSCoachmark;

    expect(el.style.transform).to.equal('translate(150px, 100px)');

    el.position = { x: 50, y: 20 };
    await el.updateComplete;

    expect(el.style.transform).to.equal('translate(50px, 20px)');
  });

  it('should render floating variant with button and popover(should include Drag icon)', async () => {
    mockDetails.floating = true;
    const el = await fixture<CDSCoachmark>(
      templateFloating({ align: 'bottom', open: true, floating: true })
    );
    expect(el?.floating).to.be.true;
    //Button
    const button = el.querySelector('cds-button');
    expect(button).to.exist;
    const contentText = button?.textContent?.trim();
    expect(contentText).to.equal('Show information');

    // Check if drag icon is present in Header
    const header = el?.querySelector(
      `${prefix}-coachmark-header`
    ) as CDSCoachmarkHeader;
    const headerShadow = header.shadowRoot!;

    const headerSlot = headerShadow.querySelector('slot[name="header"]');
    expect(headerSlot).to.exist;

    const buttons = headerShadow.querySelectorAll(`${carbonPrefix}-button`);
    expect(buttons[0].getAttribute('icondescription')).to.equal('drag icon');
  });
});
