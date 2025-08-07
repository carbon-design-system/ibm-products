/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, describe, it, vi, beforeEach } from 'vitest';
import { fixture, html, oneEvent } from '@open-wc/testing';

import './index';
import CDSInterstitialScreen from './interstitial-screen';
import CDSInterstitialScreenHeader from './interstitial-screen-header';
import CDSInterstitialScreenBodyItem from './interstitial-screen-body-item';
import CDSInterstitialScreenFooter from './interstitial-screen-footer';
import CDSInterstitialScreenBody from './interstitial-screen-body';
import { interstitialDetailsSignal } from './interstitial-screen-context';

const templateSingleStep = (args: any = {}) => {
  return html`
    <c4p-interstitial-screen ?fullscreen=${args.fullscreen} ?open=${args.open}>
      <c4p-interstitial-screen-header
        header-title="Use case-specific title"
        header-subtitle="Use case-specific sub title"
        closeIconDescription="Close"
      ></c4p-interstitial-screen-header>

      <c4p-interstitial-screen-body>
        <c4p-interstitial-screen-body-item id="${1}">
          <div
            role="complementary"
            aria-label="Use case-specific heading"
            class="c4p--interstitial-screen-view"
          >
            <section class="bodyText">body text</section>
          </div></c4p-interstitial-screen-body-item
        >
      </c4p-interstitial-screen-body>

      <c4p-interstitial-screen-footer></c4p-interstitial-screen-footer>
    </c4p-interstitial-screen>
  `;
};

const templateMultiStep = (args: any = {}) => {
  return html`
    <c4p-interstitial-screen ?fullscreen=${args.fullscreen} ?open="true">
      <c4p-interstitial-screen-header
        header-title="Use case-specific title"
        header-subtitle="Use case-specific sub title

"
      ></c4p-interstitial-screen-header>

      <c4p-interstitial-screen-body>
        <c4p-interstitial-screen-body-item id="${1}" stepTitle="step 1">
          <div
            role="complementary"
            aria-label="Use case-specific heading"
            class="c4p--interstitial-screen-view"
          >
            <section>
              <h1>Use case-specific heading 1</h1>
            </section>
          </div></c4p-interstitial-screen-body-item
        >
        <c4p-interstitial-screen-body-item id="${2}" stepTitle="step 2">
          <div
            role="complementary"
            aria-label="Use case-specific heading"
            class="c4p--interstitial-screen-view"
          >
            <section>
              <h1>Use case-specific heading 2</h1>
            </section>
          </div></c4p-interstitial-screen-body-item
        >
        <c4p-interstitial-screen-body-item id="${3}" stepTitle="step 3">
          <div
            role="complementary"
            aria-label="Use case-specific heading"
            class="c4p--interstitial-screen-view"
          >
            <section>
              <h1>Use case-specific heading 3</h1>
            </section>
          </div></c4p-interstitial-screen-body-item
        >
      </c4p-interstitial-screen-body>

      <c4p-interstitial-screen-footer></c4p-interstitial-screen-footer>
    </c4p-interstitial-screen>
  `;
};
const prefix = 'c4p';
describe('c4p-interstitial-screen', function () {
  it('should render single step modal variant', async () => {
    const el = await fixture<CDSInterstitialScreen>(
      templateSingleStep({ fullscreen: false, open: true })
    );

    // Header
    const header = el.shadowRoot?.querySelector(
      `${prefix}-interstitial-screen-header`
    ) as CDSInterstitialScreenHeader;
    const headerShadow = header.shadowRoot!;
    const headerTitle = headerShadow.querySelector('h1')?.textContent?.trim();
    const headerSubTitle = headerShadow
      .querySelector('h2')
      ?.textContent?.trim();

    expect(headerTitle).to.equal('Use case-specific title');
    expect(headerSubTitle).to.equal('Use case-specific sub title');

    // Body
    const body = el.shadowRoot?.querySelector(
      `${prefix}-interstitial-screen-body`
    ) as CDSInterstitialScreenBody;
    const bodyItem = body?.querySelector(
      `${prefix}-interstitial-screen-body-item`
    ) as CDSInterstitialScreenBodyItem;
    const contentText = bodyItem
      ?.querySelector('.bodyText')
      ?.textContent?.trim();

    expect(contentText).to.equal('body text');

    // Footer
    const footer = el.shadowRoot?.querySelector(
      `${prefix}-interstitial-screen-footer`
    ) as CDSInterstitialScreenFooter;
    const footerShadow = footer.shadowRoot!;
    const startButtonText = footerShadow
      .querySelector('cds-button')
      ?.textContent?.trim();

    expect(startButtonText).to.equal('Get Started');
  });

  it('responds to hasCloseIcon and renders closeIconDescription', async () => {
    const el = (await fixture(
      templateSingleStep({ open: true, fullscreen: false })
    )) as CDSInterstitialScreen;
    expect(el?.open).toBeTruthy();
    const header = el.shadowRoot?.querySelector(
      `${prefix}-interstitial-screen-header`
    ) as CDSInterstitialScreenHeader;
    expect(header?.closeIconDescription).toBe('Close');
    const headerEle = header.shadowRoot?.querySelector('cds-modal-header');
    expect(headerEle).to.exist;

    const closeButton = headerEle?.shadowRoot
      ?.querySelector('slot')
      ?.assignedNodes({ flatten: true })
      .find(
        (node) => node.nodeName.toLowerCase() === 'cds-modal-close-button'
      ) as HTMLElement;

    expect(closeButton).to.exist;

    // Capture both events
    const beforeClosePromise = oneEvent(el, 'c4p-interstitial-beingclosed');
    const closePromise = oneEvent(el, 'c4p-interstitial-closed');

    closeButton?.click();

    await el.updateComplete;

    // Wait for the first event
    const beforeCloseEvent = await beforeClosePromise;
    expect(beforeCloseEvent.type).to.equal('c4p-interstitial-beingclosed');
    expect(beforeCloseEvent.defaultPrevented).to.be.false;

    // Wait for the second event
    const closeEvent = await closePromise;
    expect(closeEvent.type).to.equal('c4p-interstitial-closed');

    expect(el?.open).to.be.false;
  });

  it('should render multi step modal variant', async () => {
    const el = await fixture<CDSInterstitialScreen>(
      templateMultiStep({ fullscreen: false, open: false })
    );

    //verify c4p-interstitial-opened is dispatched

    const eventPromise = oneEvent(el, 'c4p-interstitial-opened');

    el.open = true;
    await el.updateComplete;

    const event = await eventPromise;

    expect(event).to.exist;
    expect(event.type).to.equal('c4p-interstitial-opened');

    // Header
    const header = el.shadowRoot?.querySelector(
      `${prefix}-interstitial-screen-header`
    ) as CDSInterstitialScreenHeader;
    const headerShadow = header.shadowRoot!;
    const headerTitle = headerShadow.querySelector('h1')?.textContent?.trim();
    const headerSubTitle = headerShadow
      .querySelector('h2')
      ?.textContent?.trim();

    expect(headerTitle).to.equal('Use case-specific title');
    expect(headerSubTitle).to.equal('Use case-specific sub title');

    //progress indicator
    const progressIndicatorStepsLength = headerShadow?.querySelector(
      `cds-progress-indicator`
    )?.children.length;
    expect(progressIndicatorStepsLength).to.be.equal(3);

    //check step 1 is active
    const step1 = headerShadow?.querySelector(`cds-progress-indicator`)
      ?.children[0];
    expect(step1?.getAttribute('label')).to.equal('step 1');
    expect(step1?.getAttribute('state')).to.equal('current');

    // check content is of step 1
    const body = el.shadowRoot?.querySelector(
      `${prefix}-interstitial-screen-body`
    ) as CDSInterstitialScreenBody;
    const bodyItem = body?.querySelector(
      `${prefix}-interstitial-screen-body-item`
    ) as CDSInterstitialScreenBodyItem;
    const contentText = bodyItem?.querySelector('h1')?.textContent?.trim();

    expect(contentText).to.equal('Use case-specific heading 1');
  });

  it('step navigation using footer action buttons ', async () => {
    const el = await fixture<CDSInterstitialScreen>(
      templateMultiStep({ fullscreen: false, open: true })
    );

    // Header
    const header = el.shadowRoot?.querySelector(
      `${prefix}-interstitial-screen-header`
    ) as CDSInterstitialScreenHeader;
    const headerShadow = header.shadowRoot!;

    //check step 1 is active
    const step1 = headerShadow?.querySelector(`cds-progress-indicator`)
      ?.children[0];
    expect(step1?.getAttribute('label')).to.equal('step 1');
    expect(step1?.getAttribute('state')).to.equal('current');

    // check content is of step 1
    const body = el.shadowRoot?.querySelector(
      `${prefix}-interstitial-screen-body`
    ) as CDSInterstitialScreenBody;
    const bodyItem = body?.querySelector(
      `${prefix}-interstitial-screen-body-item`
    ) as CDSInterstitialScreenBodyItem;
    const contentText = bodyItem?.querySelector('h1')?.textContent?.trim();
    expect(contentText).to.equal('Use case-specific heading 1');

    //click on next button and verify step 2 is reached
    const footer = el.shadowRoot?.querySelector(
      `${prefix}-interstitial-screen-footer`
    ) as CDSInterstitialScreenFooter;
    const footerShadow = footer.shadowRoot!;
    const nextButton = footerShadow.querySelector(
      '.c4p--interstitial-screen--next-btn'
    ) as HTMLButtonElement;
    nextButton?.click();
    await new Promise((resolve) => setTimeout(resolve, 500));

    // check step 2 is reached
    const step2 = headerShadow?.querySelector(`cds-progress-indicator`)
      ?.children[1];
    expect(step2?.getAttribute('label')).to.equal('step 2');
    expect(step2?.getAttribute('state')).to.equal('current');

    nextButton?.click();
    await new Promise((resolve) => setTimeout(resolve, 500));

    // check step 3 is reached
    const step3 = headerShadow?.querySelector(`cds-progress-indicator`)
      ?.children[2];
    expect(step3?.getAttribute('label')).to.equal('step 3');
    expect(step3?.getAttribute('state')).to.equal('current');

    //check back button and start button is visible
    const backButton = footerShadow.querySelector(
      '.c4p--interstitial-screen--prev-btn'
    ) as HTMLButtonElement;
    expect(backButton).to.exist;

    //click back and go to prev step 2
    backButton?.click();
    await new Promise((resolve) => setTimeout(resolve, 500));

    // check step 2 is reached

    expect(step2?.getAttribute('label')).to.equal('step 2');
    expect(step2?.getAttribute('state')).to.equal('current');

    // next button clicked
    nextButton?.click();
    await new Promise((resolve) => setTimeout(resolve, 500));

    const startButton = footerShadow.querySelector(
      '.c4p--interstitial-screen--start-btn'
    ) as HTMLButtonElement;
    expect(startButton).to.exist;

    //close component by clicking on start button
    startButton?.click();

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(el?.open).to.be.false;
  });

  it('should render single step fullscreen variant', async () => {
    const el = await fixture<CDSInterstitialScreen>(
      templateSingleStep({ fullscreen: true, open: true })
    );

    expect(el?.isFullScreen).to.be.true;
    const style = getComputedStyle(el!);
    expect(style.position).to.equal('fixed');

    // Header
    const header = el?.querySelector(
      `${prefix}-interstitial-screen-header`
    ) as CDSInterstitialScreenHeader;
    expect(header).to.exist;

    // Body
    const body = el?.querySelector(
      `${prefix}-interstitial-screen-body`
    ) as CDSInterstitialScreenBody;
    expect(body).to.exist;

    const footer = el?.querySelector(
      `${prefix}-interstitial-screen-footer`
    ) as CDSInterstitialScreenHeader;
    expect(footer).to.exist;
  });

  describe('handleAction', () => {
    let component: CDSInterstitialScreenFooter;

    const mockCarouselAPI = {
      next: vi.fn(),
      prev: vi.fn(),
    };

    const mockDetails = {
      currentStep: 1,
      stepDetails: [
        { stepTitle: 'Step 1', id: 1 },
        { stepTitle: 'Step 2', id: 2 },
        { stepTitle: 'Step 3', id: 3 },
      ],
      carouselAPI: mockCarouselAPI,
      isFullScreen: false,
      disableActions: {
        next: false,
        back: false,
        cancel: false,
      },
    };

    beforeEach(() => {
      component = new CDSInterstitialScreenFooter();
      component.asyncAction = true;

      interstitialDetailsSignal.get = vi.fn(() => mockDetails);
      mockCarouselAPI.next.mockClear();
      mockCarouselAPI.prev.mockClear();
    });

    it('should dispatch "c4p-on-action" and proceed when allowed', async () => {
      const dispatchSpy = vi
        .spyOn(component, 'dispatchEvent')
        .mockImplementation((event) => {
          expect(event.type).toBe('c4p-on-action');
          (event as CustomEvent).detail.proceed(true);
          return true;
        });

      await component['handleAction']('next');

      expect(dispatchSpy).toHaveBeenCalled();
      expect(mockCarouselAPI.next).toHaveBeenCalled();
      expect(component.loadingAction).toBe('');
    });

    it('should cancel if proceed(false) is called', async () => {
      vi.spyOn(component, 'dispatchEvent').mockImplementation((event) => {
        expect(event.type).toBe('c4p-on-action');
        (event as CustomEvent).detail.proceed(false);
        return true;
      });

      await component['handleAction']('next');

      expect(mockCarouselAPI.next).not.toHaveBeenCalled();
      expect(component.loadingAction).toBe('');
    });

    it('should cancel if event is canceled (dispatchEvent returns false)', async () => {
      vi.spyOn(component, 'dispatchEvent').mockReturnValue(false);

      await component['handleAction']('next');

      expect(mockCarouselAPI.next).not.toHaveBeenCalled();
    });

    it('should call prev if actionType is "back"', async () => {
      vi.spyOn(component, 'dispatchEvent').mockImplementation((event) => {
        (event as CustomEvent).detail.proceed(true);
        return true;
      });

      await component['handleAction']('back');

      expect(mockCarouselAPI.prev).toHaveBeenCalled();
    });

    it('should call _handleUserInitiatedClose if actionType is not "next" or "back"', async () => {
      (component as any)._handleUserInitiatedClose = vi.fn();

      vi.spyOn(component, 'dispatchEvent').mockImplementation((event) => {
        (event as CustomEvent).detail.proceed(true);
        return true;
      });

      await component['handleAction']('skip');

      expect((component as any)._handleUserInitiatedClose).toHaveBeenCalledWith(
        'skip'
      );
    });
  });
});
