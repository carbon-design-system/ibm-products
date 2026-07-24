/**
 * @license
 *
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { prefix } from '../../globals/settings';

export const storyPrefix = 'tearsheet-preview-stories';

export const toggleButton = () => {
  document
    .querySelector(`${prefix}-preview-tearsheet`)
    ?.toggleAttribute('open');
};

export const toggleInfluencerPanel = () => {
  const influencer = document.querySelector(`${prefix}-tearsheet-influencer`);
  if (influencer) {
    influencer.toggleAttribute('influencer-panel-open');
  }
};

export const toggleSummaryPanel = () => {
  const summaryContent = document.querySelector(
    `${prefix}-tearsheet-summary-content`
  );
  if (summaryContent) {
    summaryContent.toggleAttribute('summary-panel-open');
  }
};

export const getDecorator = (decorator) => {
  switch (decorator) {
    case 'WITH_AI_LABEL':
      return html`
        <cds-ai-label alignment="bottom-right" slot="decorator">
          <div slot="body-text">
            <p class="secondary">AI Explained</p>
            <h2 class="ai-label-heading">84%</h2>
            <p class="secondary bold">Confidence score</p>
            <p class="secondary">Any description goes here</p>
            <hr />
            <p class="secondary">Model type</p>
            <p class="bold">Foundation model</p>
          </div>
        </cds-ai-label>
      `;
    default:
      return;
  }
};

export const getFooterActions = () => [
  {
    kind: 'ghost',
    label: 'Cancel',
    onClick: toggleButton,
  },
  {
    kind: 'secondary',
    label: 'Back',
  },
  {
    kind: 'primary',
    label: 'Submit',
  },
];

export const description = html`<c4p-truncated-text
  slot="description"
  lines="2"
  type="expand"
  expand-label="Read more"
  collapse-label="Read less"
  id="header-description__truncatedText"
  value="Buttons are used to initialize an action, either in the background or foreground of an experience. There are several kinds of buttons. Primary buttons should be used for the principle call to action on the page. Secondary buttons should be used for secondary actions on each page. Danger buttons should be used for a negative action (such as Delete) on the page"
></c4p-truncated-text>`;

export const summaryContent = html`<div class="${storyPrefix}__summary-content">
  <h6>Summary content</h6>
  <div>
    <label>item 1</label>
    <p>item description</p>
  </div>
  <div>
    <label>item 2</label>
    <p>item description</p>
  </div>
  <div>
    <label>item 3</label>
    <p>item description</p>
  </div>
  <div>
    <label>item 4</label>
    <p>item description</p>
  </div>
  <div>
    <label>item 5</label>
    <p>item description</p>
  </div>
</div>`;

export const dummyContent = html`<section class="main-content">
  <h4>Main content heading</h4>

  <div class="${storyPrefix}text-inputs">
    <cds-text-input
      label="Enter an important value here"
      id="input1"
    ></cds-text-input>
    <cds-text-input
      label="Here is an entry field:"
      id="tss-ft2"
    ></cds-text-input>
  </div>

  <div class="${storyPrefix}text-inputs">
    <cds-text-input
      label="Enter an important value here"
      id="tss-ft1"
    ></cds-text-input>
    <cds-text-input
      label="Here is an entry field:"
      id="tss-ft2-2"
    ></cds-text-input>
  </div>

  <div class="${storyPrefix}text-inputs">
    <cds-text-input
      label="Enter an important value here"
      id="tss-ft3"
    ></cds-text-input>
    <cds-text-input
      label="Here is an entry field:"
      id="tss-ft4"
    ></cds-text-input>
  </div>

  <div class="${storyPrefix}textarea-container">
    <cds-textarea label="Notes" value="This is a text area"></cds-textarea>
    <cds-textarea label="Notes" value="This is a text area"></cds-textarea>
    <cds-textarea label="Notes" value="This is a text area"></cds-textarea>
    <cds-textarea label="Notes" value="This is a text area"></cds-textarea>
  </div>
</section>`;

// Made with Bob
