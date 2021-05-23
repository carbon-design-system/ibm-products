/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { APIKeyModal } from '.';

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

const { name } = APIKeyModal;
const defaultProps = {
  apiKey: '123-456-789',
  apiKeyInputId: 'apiKeyInput',
  apiKeyLabel: 'API key',
  copyButtonText: 'Copy',
  open: true,
  secondaryButtonText: 'Close',
  successBody: (
    <p>
      This is your unique API key and is non-recoverable. If you lose this API
      key, you will have to reset it.
    </p>
  ),
  successHeader: 'API key successully created',
};

const standardProps = {
  ...defaultProps,
  apiKey: '',
  apiKeyVisibility: true,
  createButtonText: 'Generate API key',
  createHeader: 'Generate an API key',
  downloadBodyText:
    'This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.',
  downloadLinkText: 'Download as JSON',
  downloadable: true,
  downloadableFileName: 'apikey',
  loadingMessage: 'your key is being created. please wait...',
  loading: false,
  modalBody:
    'Optional description text. To connect securely to {{product}}, your application or tool needs an API key with permission to access the cluster and resources.',
  nameHelperText:
    'Providing the application name will help you idenfity your api key later.',
  nameInputId: 'nameInput',
  nameLabel: 'Name your application',
  namePlaceholder: 'Application name',
  nameRequired: true,
  onRequestClose: () => {},
  onRequestSubmit: () => {},
  open: true,
};

describe(name, () => {
  it('renders with minimal setup', () => {
    const { click } = fireEvent;
    const { container } = render(<APIKeyModal {...defaultProps} />);
    const copyBtn = container.querySelector('.bx--btn--primary');
    click(copyBtn);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('123-456-789');
  });

  it('renders with standard setup', () => {
    const { click, change } = fireEvent;
    const { fn } = jest;
    const onRequestSubmit = fn();
    const props = {
      ...standardProps,
      onRequestSubmit,
    };

    const { getByText, container, rerender } = render(
      <APIKeyModal {...props} />
    );

    const nameInput = container.querySelector('.bx--text-input');
    const generateBtn = getByText('Generate API key');

    change(nameInput, { target: { value: 'testkey' } });
    click(generateBtn);
    expect(onRequestSubmit).toHaveBeenCalled();

    rerender(<APIKeyModal {...props} loading />);
    expect(getByText(props.loadingMessage)).toBeVisible();
    rerender(<APIKeyModal {...props} apiKey="444-444-444-444" />);
    const copyBtn = getByText('Copy');
    click(copyBtn);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      '444-444-444-444'
    );
  });

  it('renders with steps setup', () => {
    const { click } = fireEvent;
    const { fn } = jest;
    const onRequestSubmit = fn();
    const onRequestClose = fn();
    const customSteps = [
      {
        valid: true,
        content: <input type="text" value="a" placeholder="input a" readOnly />,
      },
      {
        valid: true,
        content: <input type="text" value="b" placeholder="input b" readOnly />,
      },
      {
        valid: false,
        content: <input type="text" value="c" placeholder="input c" readOnly />,
      },
    ];
    const props = {
      ...standardProps,
      onRequestSubmit,
      onRequestClose,
      customSteps,
      previousStepButtonText: 'Previous step',
      nextStepButtonText: 'Next step',
      downloadable: false,
    };

    const { rerender, getByPlaceholderText, getByText } = render(
      <APIKeyModal {...props} />
    );

    // step 1
    expect(getByPlaceholderText('input a')).toBeVisible();
    expect(getByText('Next step')).toBeVisible();
    expect(getByText('Close')).toBeVisible();

    // advance to step 2
    click(getByText('Next step'));
    expect(getByPlaceholderText('input b')).toBeVisible();
    expect(getByText(props.nextStepButtonText)).toBeVisible();
    expect(getByText(props.previousStepButtonText)).toBeVisible();

    // go back to step 1
    click(getByText(props.previousStepButtonText));
    expect(getByPlaceholderText('input a')).toBeVisible();
    expect(getByText(props.nextStepButtonText)).toBeVisible();
    expect(getByText(props.secondaryButtonText)).toBeVisible();

    // advance to step 2
    click(getByText(props.nextStepButtonText));
    expect(getByPlaceholderText('input b')).toBeVisible();
    expect(getByText(props.nextStepButtonText)).toBeVisible();
    expect(getByText(props.previousStepButtonText)).toBeVisible();

    // advance to step 3
    click(getByText(props.nextStepButtonText));
    expect(getByPlaceholderText('input c')).toBeVisible();
    expect(getByText(props.createButtonText)).toBeVisible();
    expect(getByText(props.previousStepButtonText)).toBeVisible();

    // submit invalid form
    click(getByText(props.createButtonText));
    expect(onRequestSubmit).not.toHaveBeenCalled();

    // submit valid form
    customSteps[2].valid = true;
    rerender(<APIKeyModal {...props} customSteps={customSteps} />);
    click(getByText(props.createButtonText));
    expect(onRequestSubmit).toHaveBeenCalled();
    rerender(<APIKeyModal {...props} />);
    rerender(<APIKeyModal {...props} apiKey="abc-123" successBody="Success" />);
    expect(getByText('Success')).toBeVisible();
    click(getByText(props.secondaryButtonText));
    expect(onRequestClose).toHaveBeenCalled();
  });
});
