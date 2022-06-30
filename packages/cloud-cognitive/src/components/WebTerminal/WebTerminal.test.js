/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Code, Copy } from '@carbon/icons-react';
import { expectWarn } from '../../global/js/utils/test-helper';

import { pkg } from '../../settings';

import uuidv4 from '../../global/js/utils/uuidv4';
import { documentationLinks } from './preview-components/documentationLinks';
import { WebTerminal } from '.';

const blockClass = `${pkg.prefix}--web-terminal`;
const name = WebTerminal.displayName;
const dataTestId = uuidv4();

describe(name, () => {
  test('Renders the component `WebTerminal` if flag is enabled', () => {
    const { container } = render(
      <WebTerminal
        closeTerminal={() => {}}
        open
        closeIconDescription="Close terminal"
      >
        Body content
      </WebTerminal>
    );

    expect(container.querySelector(`.${blockClass}`)).not.toBeNull();
  });

  test('should attach a custom class to the web terminal', () => {
    const testClassName = 'test-class-name';
    const { container } = render(
      <WebTerminal
        closeTerminal={() => {}}
        open
        className={testClassName}
        closeIconDescription="Close terminal"
      >
        Body content
      </WebTerminal>
    );
    expect(container.querySelector(`.${testClassName}`)).not.toBeNull();
  });
  test('should render child element content', () => {
    render(
      <WebTerminal
        closeTerminal={() => {}}
        open
        closeIconDescription="Close terminal"
      >
        Body content
      </WebTerminal>
    );
    expect(screen.getByText(/Body content/i)).toBeInTheDocument();
  });
  test('should call close terminal function', () => {
    const { click } = fireEvent;
    const onCloseHandler = jest.fn();
    render(
      <WebTerminal
        closeTerminal={onCloseHandler}
        open
        closeIconDescription="Close terminal"
      >
        Body content
      </WebTerminal>
    );

    click(screen.getByLabelText('Close terminal'));
    expect(onCloseHandler).toBeCalled();
  });

  test('should render documentation link text', () =>
    expectWarn(
      'Warning: The `light` prop for `OverflowMenu` is no longer needed and has been deprecated. It will be removed in the next major release. Use the Layer component instead.',
      () => {
        render(
          <WebTerminal
            closeTerminal={jest.fn()}
            open
            documentationLinks={documentationLinks}
            closeIconDescription="Close terminal"
          >
            Body content
          </WebTerminal>
        );
        const { click } = userEvent;
        click(screen.getByRole('button', { name: /description dropdown/i }));
        expect(screen.getByText(/Kubernetes docs/i));
      }
    ));

  it('adds additional properties to the containing node', () => {
    const { container } = render(
      <WebTerminal
        closeTerminal={jest.fn()}
        data-testid={dataTestId}
        open
        closeIconDescription="Close terminal"
      >
        Body content
      </WebTerminal>
    );
    expect(
      container.querySelector(`.${blockClass}[data-testid="${dataTestId}"]`)
    ).toBeInTheDocument();
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(
      <WebTerminal
        closeTerminal={jest.fn()}
        open
        ref={ref}
        closeIconDescription="Close terminal"
      >
        Body content
      </WebTerminal>
    );
    expect(ref.current.classList.contains(blockClass)).toBeTruthy();
  });

  it('should call the animationEnd event', () => {
    const { animationEnd } = fireEvent;
    const { rerender, container } = render(
      <WebTerminal
        closeTerminal={jest.fn()}
        open
        closeIconDescription="Close terminal"
      >
        Body content
      </WebTerminal>
    );
    const outerElement = container.querySelector(`.${blockClass}`);
    rerender(
      <WebTerminal
        closeTerminal={jest.fn()}
        open={false}
        closeIconDescription="Close terminal"
      >
        Body content
      </WebTerminal>
    );
    animationEnd(outerElement);
    expect(outerElement).toBeNull;
  });

  it('should render action icon buttons', () => {
    const { click } = userEvent;
    const deploymentButtonFn = jest.fn();
    const copyLogsButtonFn = jest.fn();
    render(
      <WebTerminal
        open
        closeIconDescription="Close terminal"
        closeTerminal={jest.fn()}
        actions={[
          {
            renderIcon: (props) => <Code size={16} {...props} />,
            onClick: deploymentButtonFn,
            iconDescription: 'Create new deployment',
          },
          {
            renderIcon: (props) => <Copy size={16} {...props} />,
            onClick: copyLogsButtonFn,
            iconDescription: 'Copy logs',
          },
        ]}
      >
        Body content
      </WebTerminal>
    );

    click(screen.getByRole('button', { name: /Create new deployment/i }));
    expect(deploymentButtonFn).toHaveBeenCalledTimes(1);

    click(screen.getByRole('button', { name: /Copy logs/i }));
    expect(copyLogsButtonFn).toHaveBeenCalledTimes(1);
  });
});
