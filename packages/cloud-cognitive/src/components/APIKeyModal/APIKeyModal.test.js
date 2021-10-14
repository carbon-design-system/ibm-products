//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { APIKeyModal } from '.';

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

const componentName = APIKeyModal.displayName;
const defaultProps = {
  apiKey: '',
  apiKeyLabel: 'api key label',
  apiKeyName: '',
  body: 'modal body',
  className: 'class-test',
  closeButtonText: 'close',
  copyButtonText: 'copy',
  copyIconDescription: 'copy icon description',
  customSteps: [],
  downloadBodyText: 'download body',
  downloadFileName: 'filename',
  downloadFileType: 'json',
  downloadLinkText: 'download link text',
  editButtonText: 'edit button',
  editSuccess: false,
  editSuccessTitle: 'edited successfully',
  editing: false,
  error: false,
  errorText: 'an error occurred',
  generateButtonText: 'create button',
  generateSuccessBody: 'created successfully body',
  generateSuccessTitle: 'created successfully title',
  generateTitle: 'create title',
  hasAPIKeyVisibilityToggle: true,
  hasDownloadLink: true,
  hideAPIKeyLabel: 'hide key',
  loading: false,
  loadingText: 'loading',
  modalLabel: 'modal label',
  nameHelperText: 'name helper',
  nameLabel: 'name label',
  namePlaceholder: 'name placeholder',
  nameRequired: true,
  nextStepButtonText: 'next step',
  onClose: () => {},
  onRequestGenerate: () => {},
  open: true,
  previousStepButtonText: 'previous step',
  showAPIKeyLabel: 'show key',
};

URL.createObjectURL = jest.fn(() => Promise.resolve('download-link'));

describe(componentName, () => {
  it('renders with standard visible props', () => {
    const { getByText, getByPlaceholderText } = render(
      <APIKeyModal {...defaultProps} />
    );
    getByText(defaultProps.body);
    getByText(defaultProps.closeButtonText);
    getByText(defaultProps.generateButtonText);
    getByText(defaultProps.generateTitle);
    getByText(defaultProps.modalLabel);
    getByText(defaultProps.nameLabel);
    getByPlaceholderText(defaultProps.namePlaceholder);
    getByText(defaultProps.nameHelperText);
  });

  it('renders with minimal setup', () => {
    const props = {
      ...defaultProps,
      nameRequired: false,
      hasDownloadLink: false,
      apiKey: '123-456-789',
    };
    const { click } = userEvent;
    const { getByText, container, getByLabelText } = render(
      <APIKeyModal {...props} />
    );
    expect(container.querySelector('.bx--text-input').value).toBe(props.apiKey);
    getByText(props.apiKeyLabel);
    click(container.querySelector('.bx--btn--primary'));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(props.apiKey);
    getByLabelText(defaultProps.copyIconDescription);
  });

  it('renders with standard setup', async () => {
    const { change } = fireEvent;
    const { click } = userEvent;
    const { fn } = jest;
    const onRequestGenerate = fn();
    const props = {
      ...defaultProps,
      onRequestGenerate,
    };

    const { getByText, container, rerender } = render(
      <APIKeyModal {...props} />
    );

    const nameInput = container.querySelector('.bx--text-input');
    const createButton = getByText(props.generateButtonText);

    change(nameInput, { target: { value: 'test-key' } });
    click(createButton);
    expect(onRequestGenerate).toHaveBeenCalledWith('test-key');

    rerender(<APIKeyModal {...props} loading />);
    getByText(props.loadingText);
    rerender(<APIKeyModal {...props} apiKey="444-444-444-444" />);
    await waitFor(() => getByText(props.downloadLinkText));
    getByText(props.downloadBodyText);
    expect(container.querySelector('.bx--text-input').value).toBe(
      '444-444-444-444'
    );
    click(getByText(props.copyButtonText));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      '444-444-444-444'
    );
  });

  it('displays an error message when a create error occurs', () => {
    const { change } = fireEvent;
    const { click } = userEvent;
    const { fn } = jest;
    const onRequestGenerate = fn();
    const props = {
      ...defaultProps,
      onRequestGenerate,
      errorText: 'an error occurred',
    };

    const { getByText, container, rerender } = render(
      <APIKeyModal {...props} />
    );

    const nameInput = container.querySelector('.bx--text-input');
    const createButton = getByText(props.generateButtonText);

    change(nameInput, { target: { value: 'test-key' } });
    click(createButton);
    expect(onRequestGenerate).toHaveBeenCalled();

    rerender(<APIKeyModal {...props} error />);
    getByText(props.errorText);
  });

  it('should be able to properly navigate a series of custom steps', () => {
    const { click } = userEvent;
    const { fn } = jest;
    const onRequestGenerate = fn();
    const onClose = fn();
    const customSteps = [
      {
        valid: true,
        content: <input type="text" value="a" placeholder="input a" readOnly />,
        title: 'step 1',
      },
      {
        valid: true,
        content: <input type="text" value="b" placeholder="input b" readOnly />,
        title: 'step 2',
      },
      {
        valid: false,
        content: <input type="text" value="c" placeholder="input c" readOnly />,
        title: 'step 3',
      },
    ];
    const props = {
      ...defaultProps,
      onRequestGenerate,
      onClose,
      customSteps,
      hasDownloadLink: false,
    };
    const { rerender, getByPlaceholderText, getByText, container } = render(
      <APIKeyModal {...props} />
    );

    // step 1
    getByPlaceholderText('input a');
    getByText(props.nextStepButtonText);
    getByText(props.closeButtonText);
    getByText(props.customSteps[0].title);

    // advance to step 2
    click(getByText(props.nextStepButtonText));
    getByPlaceholderText('input b');
    getByText(props.nextStepButtonText);
    getByText(props.previousStepButtonText);
    getByText(props.customSteps[1].title);

    // go back to step 1
    click(getByText(props.previousStepButtonText));
    getByPlaceholderText('input a');
    getByText(props.nextStepButtonText);
    getByText(props.closeButtonText);
    getByText(props.customSteps[0].title);

    // advance to step 2
    click(getByText(props.nextStepButtonText));
    getByPlaceholderText('input b');
    getByText(props.nextStepButtonText);
    getByText(props.previousStepButtonText);
    getByText(props.customSteps[1].title);

    // advance to step 3
    click(getByText(props.nextStepButtonText));
    getByPlaceholderText('input c');
    getByText(props.generateButtonText);
    getByText(props.previousStepButtonText);
    getByText(props.customSteps[2].title);

    // submit invalid form
    click(getByText(props.generateButtonText));
    expect(onRequestGenerate).not.toHaveBeenCalled();

    // submit valid form
    customSteps[2].valid = true;
    rerender(<APIKeyModal {...props} customSteps={customSteps} />);
    click(getByText(props.generateButtonText));
    expect(onRequestGenerate).toHaveBeenCalled();
    rerender(<APIKeyModal {...props} />);
    rerender(<APIKeyModal {...props} apiKey="abc-123" />);
    expect(container.querySelector('.bx--text-input').value).toBe('abc-123');
    getByText(props.generateSuccessBody);
    getByText(props.generateSuccessTitle);
    click(getByText(props.closeButtonText));
    expect(onClose).toHaveBeenCalled();
  });

  it('successfully edits', () => {
    const { change } = fireEvent;
    const { click } = userEvent;
    const { fn } = jest;
    const onRequestEdit = fn();
    const props = {
      ...defaultProps,
      editing: true,
      apiKeyName: 'test-key-1',
      onRequestEdit,
    };

    const { getByText, container, rerender } = render(
      <APIKeyModal {...props} />
    );

    const nameInput = container.querySelector('.bx--text-input');
    const editButton = getByText(props.editButtonText);
    expect(nameInput.value).toBe(props.apiKeyName);
    getByText(props.editButtonText);
    change(nameInput, { target: { value: 'new-key-name' } });
    click(editButton);
    expect(onRequestEdit).toHaveBeenCalledWith(nameInput.value);
    rerender(<APIKeyModal {...props} editSuccess />);
    getByText(props.editSuccessTitle);
  });

  it('toggles key visibility', async () => {
    const props = {
      ...defaultProps,
      apiKey: '555-555-555-555',
    };
    const { mouseOver } = fireEvent;
    const { click } = userEvent;
    const { getByText, container, rerender } = render(
      <APIKeyModal {...props} />
    );
    await waitFor(() => getByText(props.downloadLinkText));
    expect(container.querySelector('.bx--text-input').value).toBe(props.apiKey);
    expect(container.querySelector('.bx--text-input')).toHaveAttribute(
      'type',
      'password'
    );
    mouseOver(container.querySelector('.bx--icon-visibility-on'));
    await waitFor(() => getByText(defaultProps.showAPIKeyLabel));
    click(container.querySelector('.bx--icon-visibility-on'));
    mouseOver(container.querySelector('.bx--icon-visibility-off'));
    await waitFor(() => getByText(defaultProps.hideAPIKeyLabel));
    rerender(<APIKeyModal {...props} hasAPIKeyVisibilityToggle={false} />);
    await waitFor(() => getByText(props.downloadLinkText));
    expect(container.querySelector('.bx--text-input')).toHaveAttribute(
      'type',
      'text'
    );
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<APIKeyModal {...defaultProps} />);
    await expect(container).toBeAccessible(componentName);
    await expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', () => {
    const { container } = render(<APIKeyModal {...defaultProps} />);
    expect(container.firstChild).toHaveClass(defaultProps.className);
  });

  const dataTestId = 'data-testid';

  it('adds additional properties to the containing node', () => {
    render(<APIKeyModal {...defaultProps} data-testid={dataTestId} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<APIKeyModal {...defaultProps} ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<APIKeyModal {...defaultProps} data-testid={dataTestId} />);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
