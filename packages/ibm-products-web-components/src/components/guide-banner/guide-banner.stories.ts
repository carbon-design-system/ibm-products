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
  getNextSibling,
  getPreviousSibling,
} from '../../utilities/snapscroll';
import { iconLoader } from '@carbon/web-components/es/globals/internal/icon-loader.js';
import ChevronRight16 from '@carbon/icons/es/chevron--right/';
import ChevronLeft16 from '@carbon/icons/es/chevron--left/';

const argTypes = {};

const blockClass = 'guide-banner-story';

const items = Array(10)
  .fill({})
  .map((_, idx) => {
    return {
      titleText: 'Title text',
      descriptionText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices, erat ut cursus porta, erat mi lobortis lectus, et tristique sapien mi eget arcu. Maecenas gravida commodo urna, vel mollis sapien aliquam id. Pellentesque id metus vestibulum, sodales eros quis, rhoncus sem. Praesent felis justo, cursus eu malesuada vitae, ornare ac lectus. Curabitur non urna ut erat tincidunt ullamcorper. Cras id sapien justo. Pellentesque consequat mollis ex sit amet aliquet.`,
      idx,
    };
  });

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
    if (getNextSibling()) {
      nextBtn?.removeAttribute('disabled');
    } else {
      nextBtn?.setAttribute('disabled', '');
    }

    const previousBtn = document.getElementById('previous-btn');
    if (getPreviousSibling()) {
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
                <div slot="title">${item.titleText} ${item.idx + 1}</div>
                <div slot="description">${item.descriptionText}</div>
                <cds-button kind="ghost">Read more</cds-button>
              </c4p-guide-banner-element>
            `
          )}
        </div>
      </div>
      <div class="footer" slot="footer">
        <div class="footer-left">
          <cds-button kind="ghost" class="${blockClass}__toggle-button"
            >${open ? collapseText : expandText}</cds-button
          >
        </div>
        <div class="footer-right">
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
