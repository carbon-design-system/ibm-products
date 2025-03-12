/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, test } from 'vitest';
import { Kind } from './types';
import { html } from 'lit';
// import '@carbon/ibm-products-web-components/es/components/full-page-error/full-page-error';
import { screen } from 'shadow-dom-testing-library';

// query utilities:
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  waitFor,
} from '@testing-library/dom';
import CDSFullPageError, { blockClass } from './full-page-error';
import '@testing-library/jest-dom';

const defaultProps = {
  class: 'custom-class',
  label: 'Error ###',
  title: '[Error title]',
  description: 'This is a description',
  kind: Kind.Custom,
  children: html`
    <a class="cds--link" href="#">– Forwarding link 1</a>
    <br />
    <a class="cds--link" href="#">– Forwarding link 2</a>
  `,
};

const elementName = 'c4p-full-page-error';

describe(elementName, () => {
  let element: CDSFullPageError;

  beforeEach(() => {
    element = document.createElement(elementName);
    element.setAttribute('class', defaultProps.class);
    element.setAttribute('label', defaultProps.label);
    element.setAttribute('title', defaultProps.title);
    element.setAttribute('description', defaultProps.description);
    element.setAttribute('kind', defaultProps.kind);
  });

  test('should render full page error', async () => {
    document.body.appendChild(element);
    expect(element).toBeInTheDocument();
  });

  it.skip('has no accessibility violations', async () => {
    expect(element).to.be.accessible();
  });

  it('should render children content', async () => {
    const childNode = `<p>hello</p>`;
    element.innerHTML = childNode;
    document.body.appendChild(element);

    // expect element to have child node
    expect(element).toContainHTML(childNode);
  });

  it('applies a class to the containing node', async () => {
    const className = 'a-test-class';

    element.setAttribute('class', className);
    document.body.appendChild(element);

    expect(element).toHaveClass(className);

    // expect(
    //   element.shadowRoot?.querySelector('[role="main"]')?.hasAttribute('class')
    // );
    // expect(
    //   element.shadowRoot
    //     ?.querySelector('[role="main"]')
    //     ?.classList.contains(className)
    // ).toBe(true);
  });

  // it('renders an error label', async () => {
  //   const element: CDSFullPageError = await fixture(template());

  //   expect(element.label).toBe(defaultProps.label);
  //   expect(
  //     element.shadowRoot
  //       ?.querySelector(`.${blockClass}__label`)
  //       ?.textContent?.includes(defaultProps.label)
  //   ).toBeTruthy();
  // });

  // it('renders a description', async () => {
  //   const element: CDSFullPageError = await fixture(template());

  //   expect(element.description).toBe(defaultProps.description);
  //   expect(
  //     element.shadowRoot?.querySelector(`.${blockClass}__description`)
  //       ?.textContent
  //   ).toBe(defaultProps.description);
  // });

  // it('renders a title', async () => {
  //   const element: CDSFullPageError = await fixture(template());

  //   expect(element.title).toBe(defaultProps.title);
  //   expect(
  //     element.shadowRoot
  //       ?.querySelector(`.${blockClass}__title`)
  //       ?.textContent?.includes(defaultProps.title)
  //   ).toBeTruthy();
  // });

  // it('renders custom svg illustration if kind is custom', async () => {
  //   const element: CDSFullPageError = await fixture(template());

  //   expect(element.kind).toBe(defaultProps.kind);
  //   expect(
  //     element.shadowRoot
  //       ?.querySelector(`.${blockClass}__svg-container svg`)
  //       ?.classList.contains(`${blockClass}__custom`)
  //   ).toBeTruthy();
  // });

  // it('renders 404 svg illustration if kind is 404', async () => {
  //   const element: CDSFullPageError = await fixture(
  //     template({ ...defaultProps, kind: Kind.Error404 })
  //   );

  //   expect(element.kind).toBe(Kind.Error404);
  //   expect(
  //     element.shadowRoot
  //       ?.querySelector(`.${blockClass}__svg-container svg`)
  //       ?.classList.contains(`${blockClass}__404`)
  //   ).toBeTruthy();
  // });

  // it('renders 403 svg illustration if kind is 403', async () => {
  //   const element: CDSFullPageError = await fixture(
  //     template({ ...defaultProps, kind: Kind.Error403 })
  //   );

  //   expect(element.kind).toBe(Kind.Error403);
  //   expect(
  //     element.shadowRoot
  //       ?.querySelector(`.${blockClass}__svg-container svg`)
  //       ?.classList.contains(`${blockClass}__403`)
  //   ).toBeTruthy();
  // });
});
