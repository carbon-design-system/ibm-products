/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { pkg } from '../../settings';
import { documentationLinks } from './preview-components/documentationLinks';
import '../../enable-all'; // must come before component is imported (directly or indirectly)

const blockClass = `${pkg.prefix}-web-terminal`;

import { WebTerminal } from '.';
const name = WebTerminal.displayName;
describe(name, () => {
  test('Renders the component `WebTerminal` if flag is enabled', () => {
    const { container } = render(
      <WebTerminal setOpen={() => {}} closeTerminal={() => {}} open>
        Body content
      </WebTerminal>
    );

    expect(container.querySelector(`.${blockClass}`)).not.toBeNull();
  });

  test('should attach a custom class to the web terminal', () => {
    const testClassName = 'test-class-name';
    const { container } = render(
      <WebTerminal
        setOpen={() => {}}
        closeTerminal={() => {}}
        open
        className={testClassName}>
        Body content
      </WebTerminal>
    );
    expect(container.querySelector(`.${testClassName}`)).not.toBeNull();
  });
  test('should render child element content', () => {
    render(
      <WebTerminal setOpen={() => {}} closeTerminal={() => {}} open>
        Body content
      </WebTerminal>
    );
    expect(screen.getByText(/Body content/i)).toBeInTheDocument();
  });
  test('should call close terminal function', () => {
    const { click } = fireEvent;
    const onCloseHandler = jest.fn();
    const { container } = render(
      <WebTerminal setOpen={() => {}} closeTerminal={onCloseHandler} open>
        Body content
      </WebTerminal>
    );

    click(container.querySelector(`.${blockClass}__close-button`));
    expect(onCloseHandler).toBeCalled();
  });
  test('should render documentation link text', () => {
    render(
      <WebTerminal
        setOpen={() => {}}
        closeTerminal={jest.fn()}
        open
        documentationLinks={documentationLinks}>
        Body content
      </WebTerminal>
    );
    expect(screen.getByText(/Kube docs/i));
  });
});
