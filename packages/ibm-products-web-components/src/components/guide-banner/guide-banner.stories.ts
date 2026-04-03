/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// cspell:disable

import { html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { fn } from 'storybook/test';
import './index';
//@ts-ignore
import styles from './story-styles.scss?lit';
import {
  snapScroll,
  scrollNext,
  scrollPrevious,
  hasNextSiblingNotInView,
  hasPreviousSiblingNotInView,
} from '../../utilities/snapscroll';
import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';
import ChevronRight16 from '@carbon/icons/es/chevron--right/';
import ChevronLeft16 from '@carbon/icons/es/chevron--left/';
import Crossroads from '@carbon/icons/es/crossroads/16.js';

const argTypes = {};

const blockClass = 'guide-banner-story';

const items = [
  {
    titleText: 'Use-case specific heading',
    descriptionText:
      'Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.',
    buttonType: 'tertiary',
    buttonText: 'Show Me',
    hasIcon: true,
    idx: 0,
  },
  {
    titleText: 'Use-case specific heading',
    descriptionText:
      'Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.',
    buttonType: 'ghost',
    buttonText: 'Click me',
    idx: 1,
  },
  {
    titleText: 'Use-case specific heading',
    descriptionText:
      'Use-case specific content related to the heading that explains the concept or adds context.',
    buttonType: 'ghost',
    buttonText: 'Click me',
    idx: 2,
  },
  {
    titleText: 'Use-case specific heading',
    descriptionText:
      'Use-case specific content related to the heading that explains the concept or adds context. Use-case specific content related to the heading that explains the concept or adds context.',
    isLink: true,
    linkHref: 'https://www.ibm.com',
    buttonText: 'Learn more',
    idx: 3,
  },
  {
    titleText: 'Use-case specific heading',
    descriptionText:
      'Use-case specific content related to the heading that explains the concept or adds context.',
    isLink: true,
    linkHref: 'https://www.ibm.com',
    buttonText: 'Learn more',
    idx: 4,
  },
];

//@ts-ignore
const renderTemplate = (args) => {
  const {
    '@c4p-guidebanner-ontoggle': handleToggle,
    '@c4p-guidebanner-onclose': handleOnClose,
    collapseText,
    expandText,
    titleText,
    open,
  } = args;

  document.addEventListener('DOMContentLoaded', () => {
    snapScroll('.body', '.body-elm');
  });

  const nextHandler = () => {
    scrollNext();
  };

  const previousHandler = () => {
    scrollPrevious();
  };

  const scrollendHandler = () => {
    const nextBtn = document.getElementById('next-btn');
    if (hasNextSiblingNotInView()) {
      nextBtn?.removeAttribute('disabled');
    } else {
      nextBtn?.setAttribute('disabled', '');
    }

    const previousBtn = document.getElementById('previous-btn');
    if (hasPreviousSiblingNotInView()) {
      previousBtn?.removeAttribute('disabled');
    } else {
      previousBtn?.setAttribute('disabled', '');
    }
  };

  return html`
    <style>
      ${styles}
    </style>
    <c4p-guide-banner
      @c4p-guidebanner-toggle=${handleToggle}
      @c4p-guidebanner-close=${handleOnClose}
      class=${blockClass}
      collapseText=${collapseText}
      expandText=${expandText}
      ?open=${open}
      titleText=${titleText}
    >
      <div slot="body">
        <div class="body" dir="ltr" @scrollend=${scrollendHandler}>
          ${repeat(
            items,
            (item) => item.idx,
            (item) => html`
              <c4p-guide-banner-element class="body-elm">
                <div slot="title">${item.titleText}</div>
                <div slot="description">${item.descriptionText}</div>
                ${item.isLink
                  ? html`<cds-link href="${item.linkHref}" target="_blank"
                      >${item.buttonText}</cds-link
                    >`
                  : html`<cds-button kind="${item.buttonType}">
                      ${item.buttonText}
                      ${item.hasIcon
                        ? html`${iconLoader(Crossroads, { slot: 'icon' })}`
                        : ''}
                    </cds-button>`}
              </c4p-guide-banner-element>
            `
          )}
        </div>
      </div>
      <div class="footer" slot="footer">
        <div class="footer-left">
          <cds-button
            id="toggle-btn"
            kind="ghost"
            class="${blockClass}__toggle-button"
            @click=${(evt: MouseEvent) => {
              const guideBanner = (evt.target as HTMLElement)?.closest(
                'c4p-guide-banner'
              ) as any;
              const toggleBtn = evt.target as HTMLElement;
              const footerRight = document.querySelector(
                '.footer-right'
              ) as HTMLElement;
              if (guideBanner) {
                guideBanner._handleToggle();
                // Update button text and navigation visibility after toggle
                setTimeout(() => {
                  const btn = toggleBtn.closest('cds-button');
                  if (btn) {
                    btn.textContent = guideBanner.open
                      ? collapseText
                      : expandText;
                  }
                  // Show/hide navigation buttons based on open state
                  if (footerRight) {
                    footerRight.style.display = guideBanner.open
                      ? 'flex'
                      : 'none';
                  }
                }, 0);
              }
            }}
          >
            ${open ? collapseText : expandText}
          </cds-button>
        </div>
        <div class="footer-right" style="display: ${open ? 'flex' : 'none'}">
          <cds-button
            id="previous-btn"
            kind="ghost"
            class="${blockClass}__toggle-button"
            @click=${previousHandler}
            ?disabled=${true}
          >
            <span
              @click=${(evt: MouseEvent) => {
                evt.preventDefault();
              }}
            >
              ${iconLoader(ChevronLeft16, { slot: 'icon' })}
            </span>
          </cds-button>
          <cds-button
            id="next-btn"
            kind="ghost"
            class="${blockClass}__toggle-button"
            @click=${nextHandler}
            ?disabled=${false}
          >
            <span
              @click=${(evt: MouseEvent) => {
                evt.preventDefault();
              }}
            >
              ${iconLoader(ChevronRight16, { slot: 'icon' })}
            </span>
          </cds-button>
        </div>
      </div>
    </c4p-guide-banner>
  `;
};

export const Default = {
  args: {
    '@c4p-guidebanner-ontoggle': fn(),
    '@c4p-guidebanner-onclose': fn(),
    collapseText: 'Read less',
    expandText: 'Read more',
    titleText: 'Page-related heading that can stand on its own',
    open: true,
  },
  argTypes,
  render: renderTemplate,
};

const meta = {
  title: 'Components/GuideBanner',
};

export default meta;

export const Collapsible = {
  args: {
    '@c4p-guidebanner-ontoggle': fn(),
    '@c4p-guidebanner-onclose': fn(),
    collapseText: 'Read less',
    expandText: 'Read more',
    titleText: 'Page-related heading that can stand on its own',
    open: false,
  },
  render: renderTemplate,
};

export const WithCustomLabels = {
  args: {
    '@c4p-guidebanner-ontoggle': fn(),
    '@c4p-guidebanner-onclose': fn(),
    collapseText: 'Show less',
    expandText: 'Show more',
    titleText: 'Page-related heading that can stand on its own',
    open: true,
  },
  render: renderTemplate,
};

export const WithoutTitle = {
  args: {
    '@c4p-guidebanner-ontoggle': fn(),
    '@c4p-guidebanner-onclose': fn(),
    collapseText: 'Read less',
    expandText: 'Read more',
    titleText: '',
    open: true,
  },
  render: renderTemplate,
};
