/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

vi.mock('@carbon/icons/lib/close/20', () => vi.fn().mockReturnValue({}));
import { describe, expect, it, vi } from 'vitest';
import { render, html } from 'lit';
import { Kind } from './types';

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

const template = (props: any = defaultProps) => html`
  <c4p-full-page-error
    label=${props.label}
    class=${props.class}
    title=${props.title}
    description=${props.description}
    kind=${props.kind}
  >
    ${props.children}
  </c4p-full-page-error>
`;

const elementName = 'c4p-full-page-error';

describe(elementName, () => {
  it('should render full page error', async () => {
    render(template(), document.body);
    await Promise.resolve();
    const element = document.body.querySelector(elementName);
    expect(element).toBeDefined();
  });

  it('should render children content', async () => {
    render(template(), document.body);
    await Promise.resolve();
    const element = document.body.querySelector(elementName);
    expect(element?.hasChildNodes()).toBeTruthy();
  });

  it('applies a class to the containing node', async () => {
    const props = { class: 'test-class' };
    render(template(props), document.body);
    await Promise.resolve();
    const element = document.body.querySelector(elementName);

    element?.classList.contains('test-class');
  });
});
