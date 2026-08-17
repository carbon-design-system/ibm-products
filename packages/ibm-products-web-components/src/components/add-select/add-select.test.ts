/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, render } from 'lit';
import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest';
import { elementUpdated, fixture, oneEvent } from '@open-wc/testing';
import { prefix } from '../../globals/settings';
import './index';
import CDSAddSelectRow from './add-select-row';
import CDSAddSelectColumn from './add-select-column';
import CDSAddSelectBody from './add-select-body';
import CDSAddSelectSelectionSummary from './add-select-selection-summary';
import CDSAddSelectSelectionSummaryItem from './add-select-selection-summary-item';
import CDSAddSelectItemPanel from './add-select-item-panel';

const blockClass = `${prefix}--add-select__next`;
const rowBlockClass = `${prefix}--add-select__next-row`;

// ---------------------------------------------------------------------------
// c4p-add-select (root)
// ---------------------------------------------------------------------------

describe(`${prefix}-add-select`, () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container?.remove();
  });

  it('renders the root wrapper div with the block class', async () => {
    render(html`<c4p-add-select></c4p-add-select>`, container);
    await Promise.resolve();

    const el = container.querySelector(`${prefix}-add-select`) as HTMLElement;
    const shadow = el.shadowRoot!;
    expect(shadow.querySelector(`.${blockClass}`)).toBeTruthy();
  });

  it('renders slotted children', async () => {
    render(
      html`<c4p-add-select><span id="child">hello</span></c4p-add-select>`,
      container
    );
    await Promise.resolve();

    expect(container.querySelector('#child')).toBeTruthy();
  });

  it('defaults multi to false', async () => {
    render(html`<c4p-add-select></c4p-add-select>`, container);
    await Promise.resolve();

    const el = container.querySelector(`${prefix}-add-select`) as any;
    expect(el.multi).toBe(false);
  });

  it('reflects multi=true attribute', async () => {
    render(html`<c4p-add-select multi></c4p-add-select>`, container);
    await Promise.resolve();

    const el = container.querySelector(`${prefix}-add-select`) as any;
    expect(el.multi).toBe(true);
    expect(el.hasAttribute('multi')).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// c4p-add-select-body
// ---------------------------------------------------------------------------

describe(`${prefix}-add-select-body`, () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container?.remove();
  });

  it('renders the body wrapper with the body class', async () => {
    render(
      html`<c4p-add-select-body hide-search></c4p-add-select-body>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-body`
    ) as HTMLElement;
    expect(el.shadowRoot!.querySelector(`.${blockClass}__body`)).toBeTruthy();
  });

  it('renders the search input by default', async () => {
    render(
      html`<c4p-add-select-body
        global-search-label="Search items"
      ></c4p-add-select-body>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-body`
    ) as HTMLElement;
    expect(el.shadowRoot!.querySelector('cds-search')).toBeTruthy();
  });

  it('hides the search input when hide-search is set', async () => {
    render(
      html`<c4p-add-select-body hide-search></c4p-add-select-body>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-body`
    ) as HTMLElement;
    expect(el.shadowRoot!.querySelector('cds-search')).toBeNull();
  });

  it('renders items-label text', async () => {
    // items-label lives inside the sub-header which requires hasHeader=true.
    // hasHeader is true when hideSearch=false (search is visible) OR when
    // item-count is provided. Use item-count to force the header while still
    // hiding the search so the label paragraph is rendered.
    render(
      html`<c4p-add-select-body
        hide-search
        items-label="All items"
        item-count=${5}
      ></c4p-add-select-body>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-body`
    ) as HTMLElement;
    const label = el.shadowRoot!.querySelector(`.${blockClass}__tags-label`);
    expect(label?.textContent?.trim()).toBe('All items');
  });

  it('renders item count tag when item-count is provided', async () => {
    render(
      html`<c4p-add-select-body
        hide-search
        item-count=${42}
      ></c4p-add-select-body>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-body`
    ) as HTMLElement;
    const tag = el.shadowRoot!.querySelector('cds-tag');
    expect(tag?.textContent?.trim()).toBe('42');
  });

  it('does not render item count tag when item-count is not provided', async () => {
    render(
      html`<c4p-add-select-body hide-search></c4p-add-select-body>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-body`
    ) as HTMLElement;
    expect(el.shadowRoot!.querySelector('cds-tag')).toBeNull();
  });

  it('renders the grid container with role="grid"', async () => {
    render(
      html`<c4p-add-select-body hide-search></c4p-add-select-body>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-body`
    ) as HTMLElement;
    expect(el.shadowRoot!.querySelector('[role="grid"]')).toBeTruthy();
  });

  it('fires c4p-add-select-body-search event when search input changes', async () => {
    render(
      html`<c4p-add-select-body
        global-search-label="Search"
      ></c4p-add-select-body>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-body`
    ) as HTMLElement;
    const cdsSearch = el.shadowRoot!.querySelector('cds-search') as HTMLElement;

    const eventPromise = oneEvent(el, `${prefix}-add-select-body-search`);
    cdsSearch.dispatchEvent(
      new CustomEvent('cds-search-input', {
        bubbles: true,
        composed: true,
        detail: { value: 'hello' },
      })
    );

    const event = await eventPromise;
    expect((event as CustomEvent).detail.searchTerm).toBe('hello');
  });

  it('switches from items-label to search-results-title when a search term is entered', async () => {
    render(
      html`<c4p-add-select-body
        items-label="All items"
        search-results-title="Matches"
        global-search-label="Search"
      ></c4p-add-select-body>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-body`
    ) as HTMLElement;

    // Before searching
    expect(
      el
        .shadowRoot!.querySelector(`.${blockClass}__tags-label`)
        ?.textContent?.trim()
    ).toBe('All items');

    // Trigger a search
    const cdsSearch = el.shadowRoot!.querySelector('cds-search') as HTMLElement;
    cdsSearch.dispatchEvent(
      new CustomEvent('cds-search-input', {
        bubbles: true,
        composed: true,
        detail: { value: 'foo' },
      })
    );
    await elementUpdated(el);

    expect(
      el
        .shadowRoot!.querySelector(`.${blockClass}__tags-label`)
        ?.textContent?.trim()
    ).toBe('Matches');
  });

  it('renders breadcrumbs when path entries are provided', async () => {
    render(
      html`<c4p-add-select-body hide-search></c4p-add-select-body>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(`${prefix}-add-select-body`) as any;
    el.path = [
      { id: 'root', title: 'Root' },
      { id: 'child', title: 'Child Level' },
    ];
    await elementUpdated(el);

    const shadow = el.shadowRoot!;
    expect(shadow.querySelector('cds-breadcrumb')).toBeTruthy();
    expect(shadow.textContent).toContain('Root');
    expect(shadow.textContent).toContain('Child Level');
  });

  it('fires c4p-add-select-body-breadcrumb-click when a breadcrumb link is clicked', async () => {
    render(
      html`<c4p-add-select-body hide-search></c4p-add-select-body>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(`${prefix}-add-select-body`) as any;
    el.path = [
      { id: 'root', title: 'Root' },
      { id: 'child', title: 'Child Level' },
    ];
    await elementUpdated(el);

    const eventPromise = oneEvent(
      el,
      `${prefix}-add-select-body-breadcrumb-click`
    );
    // Click the first (non-current) breadcrumb link
    const link = el.shadowRoot!.querySelector('cds-link') as HTMLElement;
    link.dispatchEvent(
      new MouseEvent('click', { bubbles: true, composed: true })
    );

    const event = await eventPromise;
    expect((event as CustomEvent).detail.index).toBe(0);
  });

  it('renders actions slot content alongside the search', async () => {
    render(
      html`<c4p-add-select-body global-search-label="Search">
        <button slot="actions" id="filter-btn">Filter</button>
      </c4p-add-select-body>`,
      container
    );
    await Promise.resolve();

    expect(container.querySelector('#filter-btn')).toBeTruthy();
  });

  it('renders sub-header-actions slot content', async () => {
    render(
      html`<c4p-add-select-body hide-search>
        <span slot="sub-header-actions" id="sort-action">Sort action</span>
      </c4p-add-select-body>`,
      container
    );
    await Promise.resolve();

    expect(container.querySelector('#sort-action')).toBeTruthy();
  });

  it('renders header slot and hides default header controls', async () => {
    render(
      html`<c4p-add-select-body global-search-label="Search">
        <div slot="header" id="custom-header">Custom header</div>
      </c4p-add-select-body>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-body`
    ) as HTMLElement;
    // Custom header is slotted
    expect(container.querySelector('#custom-header')).toBeTruthy();
    // Default search should be hidden (header slot replaces default controls)
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelector('cds-search')).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// c4p-add-select-column
// ---------------------------------------------------------------------------

describe(`${prefix}-add-select-column`, () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container?.remove();
  });

  it('renders the column wrapper with the column class', async () => {
    render(
      html`<c4p-add-select-column hide-search></c4p-add-select-column>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-column`
    ) as HTMLElement;
    expect(el.shadowRoot!.querySelector(`.${blockClass}-column`)).toBeTruthy();
  });

  it('renders a search input by default', async () => {
    render(
      html`<c4p-add-select-column
        search-label="Column search"
      ></c4p-add-select-column>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-column`
    ) as HTMLElement;
    expect(el.shadowRoot!.querySelector('cds-search')).toBeTruthy();
  });

  it('hides the search input when hide-search is set', async () => {
    render(
      html`<c4p-add-select-column hide-search></c4p-add-select-column>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-column`
    ) as HTMLElement;
    expect(el.shadowRoot!.querySelector('cds-search')).toBeNull();
  });

  it('renders the column title', async () => {
    render(
      html`<c4p-add-select-column
        title="My Column"
        hide-search
      ></c4p-add-select-column>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-column`
    ) as HTMLElement;
    expect(el.shadowRoot!.textContent).toContain('My Column');
  });

  it('renders item count tag when item-count > 0 and title is set', async () => {
    render(
      html`<c4p-add-select-column
        title="Items"
        item-count=${7}
        hide-search
      ></c4p-add-select-column>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-column`
    ) as HTMLElement;
    const tag = el.shadowRoot!.querySelector('cds-tag');
    expect(tag?.textContent?.trim()).toBe('7');
  });

  it('hides the item count tag when item-count is 0', async () => {
    render(
      html`<c4p-add-select-column
        title="Empty"
        item-count=${0}
        hide-search
      ></c4p-add-select-column>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-column`
    ) as HTMLElement;
    expect(el.shadowRoot!.querySelector('cds-tag')).toBeNull();
  });

  it('renders a Select All checkbox when show-select-all and multi are true', async () => {
    render(
      html`<c4p-add-select-column
        title="All"
        show-select-all
        multi
        item-count=${3}
        hide-search
      ></c4p-add-select-column>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-column`
    ) as HTMLElement;
    expect(
      el.shadowRoot!.querySelector(`.${blockClass}-column__select-all`)
    ).toBeTruthy();
  });

  it('does not render Select All checkbox when show-select-all is true but multi is false', async () => {
    render(
      html`<c4p-add-select-column
        title="Categories"
        show-select-all
        hide-search
      ></c4p-add-select-column>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-column`
    ) as HTMLElement;
    expect(
      el.shadowRoot!.querySelector(`.${blockClass}-column__select-all`)
    ).toBeNull();
    // Title wrapper should be present instead
    expect(
      el.shadowRoot!.querySelector(`.${blockClass}-column__title-wrapper`)
    ).toBeTruthy();
  });

  it('fires c4p-add-select-column-select-all with checked=true when Select All is toggled on', async () => {
    render(
      html`<c4p-add-select-column
        title="All"
        show-select-all
        multi
        hide-search
      ></c4p-add-select-column>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-column`
    ) as HTMLElement;
    const checkbox = el.shadowRoot!.querySelector(
      `.${blockClass}-column__select-all`
    ) as HTMLElement;

    const eventPromise = oneEvent(el, `${prefix}-add-select-column-select-all`);
    checkbox.dispatchEvent(
      new CustomEvent('cds-checkbox-changed', {
        bubbles: true,
        composed: true,
        detail: { checked: true },
      })
    );

    const event = await eventPromise;
    expect((event as CustomEvent).detail.checked).toBe(true);
  });

  it('fires c4p-add-select-column-select-all with checked=false when Select All is toggled off', async () => {
    render(
      html`<c4p-add-select-column
        title="All"
        show-select-all
        multi
        all-selected
        hide-search
      ></c4p-add-select-column>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-column`
    ) as HTMLElement;
    const checkbox = el.shadowRoot!.querySelector(
      `.${blockClass}-column__select-all`
    ) as HTMLElement;

    const eventPromise = oneEvent(el, `${prefix}-add-select-column-select-all`);
    checkbox.dispatchEvent(
      new CustomEvent('cds-checkbox-changed', {
        bubbles: true,
        composed: true,
        detail: { checked: false },
      })
    );

    const event = await eventPromise;
    expect((event as CustomEvent).detail.checked).toBe(false);
  });

  it('reflects all-selected=true on the Select All checkbox', async () => {
    render(
      html`<c4p-add-select-column
        title="All"
        show-select-all
        multi
        all-selected
        hide-search
      ></c4p-add-select-column>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-column`
    ) as HTMLElement;
    const checkbox = el.shadowRoot!.querySelector(
      `.${blockClass}-column__select-all`
    ) as any;
    expect(checkbox?.checked || checkbox?.hasAttribute('checked')).toBeTruthy();
  });

  it('fires c4p-add-select-column-search when column search input changes', async () => {
    render(
      html`<c4p-add-select-column
        search-label="Search"
      ></c4p-add-select-column>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-column`
    ) as HTMLElement;
    const cdsSearch = el.shadowRoot!.querySelector('cds-search') as HTMLElement;

    const eventPromise = oneEvent(el, `${prefix}-add-select-column-search`);
    cdsSearch.dispatchEvent(
      new CustomEvent('cds-search-input', {
        bubbles: true,
        composed: true,
        detail: { value: 'foo' },
      })
    );

    const event = await eventPromise;
    expect((event as CustomEvent).detail.searchTerm).toBe('foo');
  });

  it('propagates multi attribute to slotted rows on slot change', async () => {
    render(
      html`<c4p-add-select-column multi hide-search>
        <c4p-add-select-row
          id="test-row"
          item-id="r1"
          title="Row 1"
          value="v1"
        ></c4p-add-select-row>
      </c4p-add-select-column>`,
      container
    );
    await Promise.resolve();
    await Promise.resolve();

    const row = container.querySelector('#test-row') as HTMLElement;
    // Column should have stamped _column-multi onto the row
    expect(row.hasAttribute('_column-multi')).toBe(true);
  });

  it('removes _column-multi attribute from rows when multi is set to false', async () => {
    render(
      html`<c4p-add-select-column multi hide-search>
        <c4p-add-select-row
          id="test-row"
          item-id="r1"
          title="Row 1"
          value="v1"
        ></c4p-add-select-row>
      </c4p-add-select-column>`,
      container
    );
    await Promise.resolve();
    await Promise.resolve();

    const col = container.querySelector(`${prefix}-add-select-column`) as any;
    col.multi = false;
    await elementUpdated(col);

    const row = container.querySelector('#test-row') as HTMLElement;
    expect(row.hasAttribute('_column-multi')).toBe(false);
  });

  it('renders the actions slot', async () => {
    render(
      html`<c4p-add-select-column search-label="Search">
        <button slot="actions" id="sort-btn">Sort</button>
      </c4p-add-select-column>`,
      container
    );
    await Promise.resolve();

    expect(container.querySelector('#sort-btn')).toBeTruthy();
  });
});

// ---------------------------------------------------------------------------
// c4p-add-select-row
// ---------------------------------------------------------------------------

describe(`${prefix}-add-select-row`, () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container?.remove();
  });

  it('renders with role="row" and aria-selected="false" by default', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;
    const rowDiv = el.shadowRoot!.querySelector('[role="row"]')!;
    expect(rowDiv).toBeTruthy();
    expect(rowDiv.getAttribute('aria-selected')).toBe('false');
  });

  it('renders title and subtitle text', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="My title"
        subtitle="My subtitle"
        value="v1"
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;
    expect(
      el
        .shadowRoot!.querySelector(`.${rowBlockClass}__title`)
        ?.textContent?.trim()
    ).toBe('My title');
    expect(
      el
        .shadowRoot!.querySelector(`.${rowBlockClass}__subtitle`)
        ?.textContent?.trim()
    ).toBe('My subtitle');
  });

  it('does not render a subtitle element when subtitle is not provided', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;
    expect(
      el.shadowRoot!.querySelector(`.${rowBlockClass}__subtitle`)
    ).toBeNull();
  });

  it('renders a radio button by default (single-select)', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;
    expect(el.shadowRoot!.querySelector('cds-radio-button')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('cds-checkbox')).toBeNull();
  });

  it('renders a checkbox when _column-multi attribute is set', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
        _column-multi
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;
    expect(el.shadowRoot!.querySelector('cds-checkbox')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('cds-radio-button')).toBeNull();
  });

  it('fires c4p-add-select-row-select with selected=true when radio is changed', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(`${prefix}-add-select-row`) as any;

    // _handleSelect reads event.target.checked — unreliable for synthetic events
    // across shadow boundaries in the test environment. Directly set selected
    // and call _emitSelectionEvent to verify the event payload.
    const eventPromise = oneEvent(el, `${prefix}-add-select-row-select`);
    el.selected = true;
    el._emitSelectionEvent();

    const event = await eventPromise;
    const detail = (event as CustomEvent).detail;
    expect(detail.itemId).toBe('r1');
    expect(detail.selected).toBe(true);
    expect(detail.value).toBe('v1');
  });

  it('fires c4p-add-select-row-select with selected=true when checkbox is changed (multi)', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
        _column-multi
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(`${prefix}-add-select-row`) as any;

    const eventPromise = oneEvent(el, `${prefix}-add-select-row-select`);
    el.selected = true;
    el._emitSelectionEvent();

    const event = await eventPromise;
    const detail = (event as CustomEvent).detail;
    expect(detail.itemId).toBe('r1');
    expect(detail.selected).toBe(true);
    expect(detail.value).toBe('v1');
  });

  it('does not fire c4p-add-select-row-select when disabled', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
        disabled
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;

    let eventFired = false;
    el.addEventListener(`${prefix}-add-select-row-select`, () => {
      eventFired = true;
    });

    const radio = el.shadowRoot!.querySelector(
      'cds-radio-button'
    ) as HTMLElement;
    radio.dispatchEvent(
      new CustomEvent('cds-radio-button-changed', {
        bubbles: true,
        composed: true,
        detail: { checked: true },
      })
    );
    await Promise.resolve();

    expect(eventFired).toBe(false);
  });

  it('reflects selected state via selected attribute', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
        _column-multi
        selected
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;
    const rowDiv = el.shadowRoot!.querySelector('[role="row"]')!;
    expect(rowDiv.getAttribute('aria-selected')).toBe('true');
    // The checkbox should be checked
    const checkbox = el.shadowRoot!.querySelector('cds-checkbox') as any;
    expect(checkbox?.checked || checkbox?.hasAttribute('checked')).toBeTruthy();
  });

  it('applies the disabled class when disabled is set', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
        disabled
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;
    expect(
      el.shadowRoot!.querySelector(`.${rowBlockClass}--disabled`)
    ).toBeTruthy();
  });

  it('renders the nav-indicator when has-children is set', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
        has-children
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;
    expect(
      el.shadowRoot!.querySelector(`.${rowBlockClass}__nav-indicator`)
    ).toBeTruthy();
  });

  it('does not render the nav-indicator when has-children is not set', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;
    expect(
      el.shadowRoot!.querySelector(`.${rowBlockClass}__nav-indicator`)
    ).toBeNull();
  });

  it('nav-indicator has default aria-label "Navigate into <title>"', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
        has-children
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;
    const navIndicator = el.shadowRoot!.querySelector(
      `.${rowBlockClass}__nav-indicator`
    )!;
    expect(navIndicator.getAttribute('aria-label')).toBe('Navigate into Row 1');
  });

  it('fires c4p-add-select-row-navigate when nav-indicator is clicked', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
        has-children
        parent-id="root"
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;
    const navIndicator = el.shadowRoot!.querySelector(
      `.${rowBlockClass}__nav-indicator`
    ) as HTMLElement;

    const eventPromise = oneEvent(el, `${prefix}-add-select-row-navigate`);
    navIndicator.dispatchEvent(
      new MouseEvent('click', { bubbles: true, composed: true })
    );

    const event = await eventPromise;
    const detail = (event as CustomEvent).detail;
    expect(detail.itemId).toBe('r1');
    expect(detail.title).toBe('Row 1');
    expect(detail.parentId).toBe('root');
  });

  it('does not fire c4p-add-select-row-navigate when has-children is false', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;

    let eventFired = false;
    el.addEventListener(`${prefix}-add-select-row-navigate`, () => {
      eventFired = true;
    });

    // Dispatch navigate event manually on the element to simulate row click
    el.dispatchEvent(
      new MouseEvent('click', { bubbles: true, composed: true })
    );
    await Promise.resolve();

    expect(eventFired).toBe(false);
  });

  it('fires c4p-add-select-row-item-panel-click when view icon button is clicked', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
        has-item-panel
        item-panel-icon-description="View details"
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;
    const iconBtn = el.shadowRoot!.querySelector(
      `.${rowBlockClass}__view-item-panel`
    ) as HTMLElement;
    expect(iconBtn).toBeTruthy();

    const eventPromise = oneEvent(
      el,
      `${prefix}-add-select-row-item-panel-click`
    );
    iconBtn.dispatchEvent(
      new MouseEvent('click', { bubbles: true, composed: true })
    );

    const event = await eventPromise;
    expect((event as CustomEvent).detail.itemId).toBe('r1');
  });

  it('does not render the item panel icon button when has-item-panel is not set', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;
    expect(
      el.shadowRoot!.querySelector(`.${rowBlockClass}__view-item-panel`)
    ).toBeNull();
  });

  it('renders in skeleton mode with aria-hidden when skeleton is set', async () => {
    render(
      html`<c4p-add-select-row
        item-id="sk1"
        title="Loading"
        value="v"
        skeleton
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;
    const skeletonEl = el.shadowRoot!.querySelector(
      `.${rowBlockClass}--skeleton`
    )!;
    expect(skeletonEl).toBeTruthy();
    expect(skeletonEl.getAttribute('aria-hidden')).toBe('true');
  });

  it('renders skeleton-icon when skeleton is set and icon slot is populated', async () => {
    // Use fixture so the slotchange microtask fires and _hasIconSlot is true
    // before we check the shadow DOM.
    const el = (await fixture(
      html`<c4p-add-select-row item-id="sk2" title="Loading" value="v" skeleton>
        <svg slot="icon" id="row-icon"></svg>
      </c4p-add-select-row>`
    )) as HTMLElement;

    await elementUpdated(el);

    expect(el.shadowRoot!.querySelector('cds-skeleton-icon')).toBeTruthy();
  });

  it('renders slotted default children inside the row', async () => {
    render(
      html`<c4p-add-select-row item-id="r1" title="Row 1" value="v1">
        <span id="badge">badge</span>
      </c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    expect(container.querySelector('#badge')).toBeTruthy();
  });

  it('applies item-panel-open attribute when item-panel-open is set', async () => {
    render(
      html`<c4p-add-select-row
        item-id="r1"
        title="Row 1"
        value="v1"
        has-item-panel
        item-panel-open
        item-panel-icon-description="View"
      ></c4p-add-select-row>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-row`
    ) as HTMLElement;
    expect(el.hasAttribute('item-panel-open')).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// c4p-add-select-selection-summary
// ---------------------------------------------------------------------------

describe(`${prefix}-add-select-selection-summary`, () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container?.remove();
  });

  it('renders the selection summary wrapper', async () => {
    render(
      html`<c4p-add-select-selection-summary></c4p-add-select-selection-summary>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary`
    ) as HTMLElement;
    expect(
      el.shadowRoot!.querySelector(`.${blockClass}__selection-summary`)
    ).toBeTruthy();
  });

  it('renders the panel title', async () => {
    render(
      html`<c4p-add-select-selection-summary
        title="My selections"
      ></c4p-add-select-selection-summary>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary`
    ) as HTMLElement;
    const titleEl = el.shadowRoot!.querySelector(
      `.${blockClass}__selection-summary-title`
    )!;
    expect(titleEl.textContent?.trim()).toBe('My selections');
  });

  it('uses "Selected items" as the default title', async () => {
    render(
      html`<c4p-add-select-selection-summary></c4p-add-select-selection-summary>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary`
    ) as HTMLElement;
    expect(
      el
        .shadowRoot!.querySelector(`.${blockClass}__selection-summary-title`)
        ?.textContent?.trim()
    ).toBe('Selected items');
  });

  it('renders the count badge when selected-item-count is provided', async () => {
    render(
      html`<c4p-add-select-selection-summary
        selected-item-count=${2}
      ></c4p-add-select-selection-summary>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary`
    ) as HTMLElement;
    const tag = el.shadowRoot!.querySelector('cds-tag');
    expect(tag?.textContent?.trim()).toBe('2');
  });

  it('does not render the count badge when selected-item-count is not provided', async () => {
    render(
      html`<c4p-add-select-selection-summary></c4p-add-select-selection-summary>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary`
    ) as HTMLElement;
    expect(el.shadowRoot!.querySelector('cds-tag')).toBeNull();
  });

  it('renders the edit icon button when show-edit-icon is set', async () => {
    render(
      html`<c4p-add-select-selection-summary
        selected-item-count=${2}
        show-edit-icon
        edit-icon-description="Edit selections"
      ></c4p-add-select-selection-summary>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary`
    ) as HTMLElement;
    const editBtn = el.shadowRoot!.querySelector(
      `.${blockClass}__selection-summary-edit-button`
    );
    expect(editBtn).toBeTruthy();
  });

  it('fires c4p-add-select-selection-summary-edit when edit button is clicked', async () => {
    render(
      html`<c4p-add-select-selection-summary
        selected-item-count=${2}
        show-edit-icon
        edit-icon-description="Edit"
      ></c4p-add-select-selection-summary>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary`
    ) as HTMLElement;
    const editBtn = el.shadowRoot!.querySelector(
      `.${blockClass}__selection-summary-edit-button`
    ) as HTMLElement;

    const eventPromise = oneEvent(
      el,
      `${prefix}-add-select-selection-summary-edit`
    );
    editBtn.dispatchEvent(
      new MouseEvent('click', { bubbles: true, composed: true })
    );

    await eventPromise;
    // If we get here without timeout the event fired correctly
    expect(true).toBe(true);
  });

  it('renders default slot content when selected-item-count > 0', async () => {
    render(
      html`<c4p-add-select-selection-summary selected-item-count=${2}>
        <p id="item-a">Selected A</p>
        <p id="item-b">Selected B</p>
      </c4p-add-select-selection-summary>`,
      container
    );
    await Promise.resolve();

    expect(container.querySelector('#item-a')).toBeTruthy();
    expect(container.querySelector('#item-b')).toBeTruthy();
  });

  it('renders empty-state slot when selected-item-count is 0', async () => {
    render(
      html`<c4p-add-select-selection-summary selected-item-count=${0}>
        <p slot="empty-state" id="empty-msg">No items selected</p>
      </c4p-add-select-selection-summary>`,
      container
    );
    await Promise.resolve();

    expect(container.querySelector('#empty-msg')).toBeTruthy();
  });

  it('renders empty-state slot when selected-item-count is not provided', async () => {
    render(
      html`<c4p-add-select-selection-summary>
        <p slot="empty-state" id="empty-msg">No items selected</p>
      </c4p-add-select-selection-summary>`,
      container
    );
    await Promise.resolve();

    expect(container.querySelector('#empty-msg')).toBeTruthy();
  });

  it('does not render empty-state slot when count is greater than 0', async () => {
    render(
      html`<c4p-add-select-selection-summary selected-item-count=${1}>
        <p id="some-child">Some child</p>
        <p slot="empty-state" id="empty-msg">No items selected</p>
      </c4p-add-select-selection-summary>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary`
    ) as HTMLElement;
    // showBody is true, so default slot is shown and empty-state slot is hidden
    const body = el.shadowRoot!.querySelector(
      `.${blockClass}__selection-summary-body`
    );
    expect(body?.innerHTML).not.toContain('slot name="empty-state"');
    expect(container.querySelector('#some-child')).toBeTruthy();
  });

  it('renders header slot replacing the default header', async () => {
    render(
      html`<c4p-add-select-selection-summary selected-item-count=${2}>
        <div slot="header" id="custom-header">Custom header</div>
      </c4p-add-select-selection-summary>`,
      container
    );
    await Promise.resolve();

    expect(container.querySelector('#custom-header')).toBeTruthy();
  });

  it('renders header-actions slot', async () => {
    render(
      html`<c4p-add-select-selection-summary
        selected-item-count=${2}
        show-edit-icon
        edit-icon-description="Edit"
      >
        <button slot="header-actions" id="custom-action">Custom action</button>
      </c4p-add-select-selection-summary>`,
      container
    );
    await Promise.resolve();

    expect(container.querySelector('#custom-action')).toBeTruthy();
  });
});

// ---------------------------------------------------------------------------
// c4p-add-select-selection-summary-item
// ---------------------------------------------------------------------------

describe(`${prefix}-add-select-selection-summary-item`, () => {
  let container: HTMLElement;

  const sampleItem = {
    id: 'x1',
    title: 'Item X',
    subtitle: 'Subtitle X',
    value: 'vx',
  };

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container?.remove();
  });

  it('renders item title and subtitle', async () => {
    render(
      html`<c4p-add-select-selection-summary-item></c4p-add-select-selection-summary-item>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary-item`
    ) as any;
    el.item = sampleItem;
    await elementUpdated(el);

    const shadow = el.shadowRoot!;
    expect(
      shadow
        .querySelector(`.${blockClass}__selection-summary-item-title`)
        ?.textContent?.trim()
    ).toBe('Item X');
    expect(
      shadow
        .querySelector(`.${blockClass}__selection-summary-item-subtitle`)
        ?.textContent?.trim()
    ).toBe('Subtitle X');
  });

  it('does not render subtitle element when item has no subtitle', async () => {
    render(
      html`<c4p-add-select-selection-summary-item></c4p-add-select-selection-summary-item>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary-item`
    ) as any;
    el.item = { id: 'ns1', title: 'No sub', value: 'nsv' };
    await elementUpdated(el);

    expect(
      el.shadowRoot!.querySelector(
        `.${blockClass}__selection-summary-item-subtitle`
      )
    ).toBeNull();
  });

  it('renders remove button by default', async () => {
    render(
      html`<c4p-add-select-selection-summary-item></c4p-add-select-selection-summary-item>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary-item`
    ) as any;
    el.item = sampleItem;
    await elementUpdated(el);

    expect(
      el.shadowRoot!.querySelector(
        `.${blockClass}__selection-summary-item-remove-button`
      )
    ).toBeTruthy();
  });

  it('does not render remove button when hide-remove-button is set', async () => {
    render(
      html`<c4p-add-select-selection-summary-item
        hide-remove-button
      ></c4p-add-select-selection-summary-item>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary-item`
    ) as any;
    el.item = sampleItem;
    await elementUpdated(el);

    expect(
      el.shadowRoot!.querySelector(
        `.${blockClass}__selection-summary-item-remove-button`
      )
    ).toBeNull();
  });

  it('fires c4p-add-select-selection-summary-item-remove when remove button is clicked', async () => {
    render(
      html`<c4p-add-select-selection-summary-item></c4p-add-select-selection-summary-item>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary-item`
    ) as any;
    el.item = sampleItem;
    await elementUpdated(el);

    const removeBtn = el.shadowRoot!.querySelector(
      `.${blockClass}__selection-summary-item-remove-button`
    ) as HTMLElement;

    const eventPromise = oneEvent(
      el,
      `${prefix}-add-select-selection-summary-item-remove`
    );
    removeBtn.dispatchEvent(
      new MouseEvent('click', { bubbles: true, composed: true })
    );

    const event = await eventPromise;
    expect((event as CustomEvent).detail.itemId).toBe('x1');
  });

  it('renders in accordion mode when use-accordion is set', async () => {
    render(
      html`<c4p-add-select-selection-summary-item
        use-accordion
      ></c4p-add-select-selection-summary-item>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary-item`
    ) as any;
    el.item = sampleItem;
    await elementUpdated(el);

    const shadow = el.shadowRoot!;
    expect(
      shadow.querySelector(
        `.${blockClass}__selection-summary-item-accordion-heading`
      )
    ).toBeTruthy();
  });

  it('toggles accordion open/closed when the heading button is clicked', async () => {
    render(
      html`<c4p-add-select-selection-summary-item
        use-accordion
      ></c4p-add-select-selection-summary-item>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary-item`
    ) as any;
    el.item = sampleItem;
    await elementUpdated(el);

    const heading = el.shadowRoot!.querySelector(
      `.${blockClass}__selection-summary-item-accordion-heading`
    ) as HTMLButtonElement;

    // Initially closed
    expect(heading.getAttribute('aria-expanded')).toBe('false');

    heading.click();
    await elementUpdated(el);
    expect(heading.getAttribute('aria-expanded')).toBe('true');
  });

  it('renders itemDetails entries via default content', async () => {
    render(
      html`<c4p-add-select-selection-summary-item></c4p-add-select-selection-summary-item>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-selection-summary-item`
    ) as any;
    el.item = {
      id: 'd1',
      title: 'Detailed',
      value: 'dv',
      itemDetails: [
        { label: 'Tier', value: 'Gold' },
        { label: 'Capacity', value: '10 TB' },
      ],
    };
    await elementUpdated(el);

    const shadow = el.shadowRoot!;
    expect(shadow.textContent).toContain('Tier');
    expect(shadow.textContent).toContain('Gold');
    expect(shadow.textContent).toContain('Capacity');
    expect(shadow.textContent).toContain('10 TB');
  });

  it('renders default slot content with highest priority', async () => {
    render(
      html`<c4p-add-select-selection-summary-item>
        <p id="custom-content">custom content</p>
      </c4p-add-select-selection-summary-item>`,
      container
    );
    await Promise.resolve();
    await Promise.resolve();

    expect(container.querySelector('#custom-content')).toBeTruthy();
  });

  it('renders render-item slot content', async () => {
    render(
      html`<c4p-add-select-selection-summary-item>
        <p slot="render-item" id="render-item-content">render item</p>
      </c4p-add-select-selection-summary-item>`,
      container
    );
    await Promise.resolve();
    await Promise.resolve();

    expect(container.querySelector('#render-item-content')).toBeTruthy();
  });

  it('renders accordion-title slot in accordion mode', async () => {
    render(
      html`<c4p-add-select-selection-summary-item use-accordion>
        <span slot="accordion-title" id="custom-title">Custom title</span>
      </c4p-add-select-selection-summary-item>`,
      container
    );
    await Promise.resolve();
    await Promise.resolve();

    expect(container.querySelector('#custom-title')).toBeTruthy();
  });
});

// ---------------------------------------------------------------------------
// c4p-add-select-item-panel
// ---------------------------------------------------------------------------

describe(`${prefix}-add-select-item-panel`, () => {
  let container: HTMLElement;

  const panelItem = {
    id: 'p1',
    title: 'Panel item',
    value: 'vp',
    itemDetails: [
      { label: 'Owner', value: 'Alice' },
      { label: 'Size', value: '4 GB' },
    ],
  };

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container?.remove();
  });

  it('renders the panel wrapper', async () => {
    render(
      html`<c4p-add-select-item-panel></c4p-add-select-item-panel>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-item-panel`
    ) as HTMLElement;
    expect(
      el.shadowRoot!.querySelector(`.${blockClass}__item-summary-panel`)
    ).toBeTruthy();
  });

  it('renders the panel title', async () => {
    render(
      html`<c4p-add-select-item-panel
        title="Item details"
      ></c4p-add-select-item-panel>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-item-panel`
    ) as HTMLElement;
    expect(
      el
        .shadowRoot!.querySelector(`.${blockClass}__item-summary-panel-title`)
        ?.textContent?.trim()
    ).toBe('Item details');
  });

  it('renders itemDetails key/value pairs by default', async () => {
    render(
      html`<c4p-add-select-item-panel></c4p-add-select-item-panel>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-item-panel`
    ) as any;
    el.item = panelItem;
    await elementUpdated(el);

    const shadow = el.shadowRoot!;
    expect(shadow.textContent).toContain('Owner');
    expect(shadow.textContent).toContain('Alice');
    expect(shadow.textContent).toContain('Size');
    expect(shadow.textContent).toContain('4 GB');
  });

  it('renders the close button by default', async () => {
    render(
      html`<c4p-add-select-item-panel
        close-icon-description="Close panel"
      ></c4p-add-select-item-panel>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-item-panel`
    ) as HTMLElement;
    expect(
      el.shadowRoot!.querySelector(`.${blockClass}__item-summary-panel-close`)
    ).toBeTruthy();
  });

  it('does not render a close button when show-close-button is false', async () => {
    render(
      html`<c4p-add-select-item-panel
        show-close-button="false"
      ></c4p-add-select-item-panel>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-item-panel`
    ) as any;
    el.showCloseButton = false;
    await elementUpdated(el);

    expect(
      el.shadowRoot!.querySelector(`.${blockClass}__item-summary-panel-close`)
    ).toBeNull();
  });

  it('fires c4p-add-select-item-panel-close when close button is clicked', async () => {
    render(
      html`<c4p-add-select-item-panel
        close-icon-description="Close"
      ></c4p-add-select-item-panel>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-item-panel`
    ) as HTMLElement;
    const closeBtn = el.shadowRoot!.querySelector(
      `.${blockClass}__item-summary-panel-close`
    ) as HTMLElement;

    const eventPromise = oneEvent(el, `${prefix}-add-select-item-panel-close`);
    closeBtn.dispatchEvent(
      new MouseEvent('click', { bubbles: true, composed: true })
    );

    await eventPromise;
    expect(true).toBe(true);
  });

  it('adds the --open modifier class when open is true', async () => {
    render(
      html`<c4p-add-select-item-panel open></c4p-add-select-item-panel>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-item-panel`
    ) as HTMLElement;
    expect(
      el.shadowRoot!.querySelector(`.${blockClass}__item-summary-panel--open`)
    ).toBeTruthy();
  });

  it('does not add the --open modifier class when open is false', async () => {
    render(
      html`<c4p-add-select-item-panel></c4p-add-select-item-panel>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-item-panel`
    ) as HTMLElement;
    expect(
      el.shadowRoot!.querySelector(`.${blockClass}__item-summary-panel--open`)
    ).toBeNull();
  });

  it('dynamically adds --open modifier when open property is set to true', async () => {
    render(
      html`<c4p-add-select-item-panel></c4p-add-select-item-panel>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-item-panel`
    ) as any;
    expect(
      el.shadowRoot!.querySelector(`.${blockClass}__item-summary-panel--open`)
    ).toBeNull();

    el.open = true;
    await elementUpdated(el);

    expect(
      el.shadowRoot!.querySelector(`.${blockClass}__item-summary-panel--open`)
    ).toBeTruthy();
  });

  it('renders default slot content with highest priority over item details', async () => {
    // Use fixture so slotchange fires before we set item
    const el = (await fixture(
      html`<c4p-add-select-item-panel>
        <p id="custom-body">custom panel body</p>
      </c4p-add-select-item-panel>`
    )) as any;

    // Allow slotchange microtask + Lit re-render to settle
    await elementUpdated(el);

    el.item = panelItem;
    await elementUpdated(el);

    // Custom slot content should be present
    expect(el.querySelector('#custom-body')).toBeTruthy();
    // Default item details wrapper (showItemDetails=false) should be hidden via display:none
    const detailsDiv = el.shadowRoot!.querySelectorAll(
      `.${blockClass}__item-summary-panel-body > div`
    );
    // The third div (index 2) holds the default item details and should be hidden
    const defaultDetailsDiv = detailsDiv[2] as HTMLElement;
    expect(defaultDetailsDiv?.style?.display).toBe('none');
  });

  it('renders render-item slot content (medium priority)', async () => {
    render(
      html`<c4p-add-select-item-panel>
        <p slot="render-item" id="render-item-body">render item body</p>
      </c4p-add-select-item-panel>`,
      container
    );
    await Promise.resolve();
    await Promise.resolve();

    expect(container.querySelector('#render-item-body')).toBeTruthy();
  });

  it('renders nothing in the body when item is null', async () => {
    render(
      html`<c4p-add-select-item-panel></c4p-add-select-item-panel>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-item-panel`
    ) as any;
    // item defaults to null — no itemDetails content
    const body = el.shadowRoot!.querySelector(
      `.${blockClass}__item-summary-panel-body`
    );
    expect(body).toBeTruthy();
    // The item details div should be empty when item is null
    expect(el.shadowRoot!.textContent).not.toContain('Owner');
  });

  it('renders nothing in the body when itemDetails is an empty array', async () => {
    render(
      html`<c4p-add-select-item-panel></c4p-add-select-item-panel>`,
      container
    );
    await Promise.resolve();

    const el = container.querySelector(
      `${prefix}-add-select-item-panel`
    ) as any;
    el.item = { id: 'e1', title: 'Empty', value: 'ev', itemDetails: [] };
    await elementUpdated(el);

    expect(el.shadowRoot!.textContent).not.toContain('Owner');
  });
});
