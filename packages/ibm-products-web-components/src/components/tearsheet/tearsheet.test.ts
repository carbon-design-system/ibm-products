/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

vi.mock('@carbon/icons/lib/close/20', () => vi.fn().mockReturnValue({}));
import { describe, expect, it, vi } from 'vitest';
import { render, html } from 'lit';

const defaultProps = {
  actionItems: `
    <cds-button key="ghost" slot="actions" kind="ghost">Ghost</cds-button>
    <cds-button key="secondary" slot="actions" kind="secondary">Secondary</cds-button>
    <cds-button key="primary" slot="actions" kind="primary">Primary</cds-button>
    `,
  headerActions: '',
  content: `<div>
          <h5>Section</h5>
          <div>
            <cds-text-input
              label="Input A"
              id="tearsheet-story-text-input-a"
            ></cds-text-input>
            <cds-text-input
              label="Input B"
              id="tearsheet-story-text-input-b"
            ></cds-text-input>
          </div>
          <div">
            <cds-text-input
              label="Input C"
              id="tearsheet-story-text-input-c"
            ></cds-text-input>
            <cds-text-input
              label="Input D"
              id="tearsheet-story-text-input-d"
            ></cds-text-input>
          </div>
          <div>
            <cds-textarea
              label="Notes"
              value="This is a text area"
            ></cds-textarea>
            <cds-textarea
              label="Notes"
              value="This is a text area"
            ></cds-textarea>
            <cds-textarea
              label="Notes"
              value="This is a text area"
            ></cds-textarea>
          </div>
        </div>`,
  label: `<span slot="label">Optional label for context</span>`,
  open: false,
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
};

const template = (props = defaultProps) =>
  html`
    <c4p-tearsheet
      selector-initial-focus=${props.selectorInitialFocus}
      ?open=${props.open}
      influencer-placement=${props.influencerPlacement}
      influencer-width=${props.influencerWidth}
      ?prevent-close-on-click-outside=${props.preventCloseOnClickOutside}
      width=${props.width}
    >
      <!-- default slotted content -->
      ${props.content}

      <!-- slotted header label -->
      ${props.label}

      <!-- slotted header title -->
      ${props.title ? html`<span slot="title">${props.title}</span>` : ''}

      <!-- slotted header description -->
      ${props.description
        ? html`<span slot="description">${props.description}</span>`
        : ''}

      <!-- slotted action in header cds-buttons -->
      ${props.headerActions}

      <!-- slotted action items cds-buttons -->
      ${props.actionItems}

      <!-- slotted slug -->
      ${props.slug}

      <!-- slotted header-navigation -->
      ${props.headerNavigation}

      <!-- slotted influencer -->
      ${props.influencer}
    </c4p-tearsheet>
  `;

describe('c4p-tearsheet', () => {
  it('should render a tearsheet', async () => {
    render(template(), document.body);
    await Promise.resolve();
    const elem = document.body.querySelector('c4p-tearsheet' as any);
    expect(elem).toBeDefined();
  });
});
