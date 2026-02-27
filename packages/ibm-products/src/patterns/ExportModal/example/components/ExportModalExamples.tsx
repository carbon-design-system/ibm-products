/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect } from 'react';
import {
  Button,
  ComposedModal,
  FormGroup,
  Loading,
  ModalBody,
  ModalFooter,
  ModalHeader,
  RadioButton,
  RadioButtonGroup,
  TextInput,
} from '@carbon/react';
import { CheckmarkFilled, ErrorFilled } from '@carbon/react/icons';

// Local wait utility
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const StandardExportModal = () => {
  const [isOpen, setOpen] = useState(false);
  const [name, setName] = useState('Sample02.pdf');
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);

  const submitted = loading || error || successful;

  const blockClass = 'export-modal';
  const onCloseHandler = () => {
    setOpen(false);
    setSuccessful(false);
    setError(false);
  };

  const onSubmitHandler = async () => {
    setLoading(true);
    await wait(1000);
    setSuccessful(true);
    setLoading(false);
  };
  const primaryButtonDisabled = loading || !name;

  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
      {isOpen && (
        <ComposedModal
          open={isOpen}
          size="sm"
          preventCloseOnClickOutside
          onClose={onCloseHandler}
        >
          <ModalHeader
            className={`${blockClass}__header`}
            title="Export"
            closeModal={onCloseHandler}
          />
          <ModalBody className={`${blockClass}__body-container`}>
            {!submitted && (
              <TextInput
                id="export-file-name"
                labelText="File name"
                value={name}
                onChange={(evt) => setName(evt.target.value)}
              />
            )}

            <div aria-live="polite" className={`${blockClass}__messaging`}>
              {loading && (
                <>
                  <Loading
                    aria-live="off"
                    description=""
                    small
                    withOverlay={false}
                  />
                  <p>Exporting file...</p>
                </>
              )}
              {successful && (
                <>
                  <CheckmarkFilled
                    size={16}
                    className={`${blockClass}__checkmark-icon`}
                  />
                  <p>The file has been exported.</p>
                </>
              )}
              {error && (
                <>
                  <ErrorFilled
                    size={16}
                    className={`${blockClass}__error-icon`}
                  />
                  <p>errorServer error 500</p>
                </>
              )}
            </div>
          </ModalBody>
          {!submitted && (
            <ModalFooter className={`${blockClass}__footer`}>
              <Button type="button" kind="secondary" onClick={onCloseHandler}>
                Cancel
              </Button>
              <Button
                type="submit"
                kind="primary"
                onClick={onSubmitHandler}
                disabled={primaryButtonDisabled}
              >
                Export
              </Button>
            </ModalFooter>
          )}
        </ComposedModal>
      )}
    </>
  );
};

export const ExportModalWithExtensionValidation = () => {
  const [isOpen, setOpen] = useState(false);
  const [name, setName] = useState('Sample02.pdf');
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);

  const submitted = loading || error || successful;

  const blockClass = 'export-modal';

  const onCloseHandler = () => {
    setOpen(false);
    setSuccessful(false);
    setError(false);
  };

  const onSubmitHandler = async () => {
    setLoading(true);
    await wait(1000);
    setSuccessful(true);
    setLoading(false);
  };

  const hasInvalidExtension = () => {
    const validExtensions = ['pdf'];
    if (!validExtensions || !validExtensions.length) {
      return false;
    }
    if (!name.includes('.')) {
      return true;
    }
    const ext = name.split('.').pop();
    if (!ext || !validExtensions.includes(ext)) {
      return true;
    }
    return false;
  };

  const primaryButtonDisabled = loading || !name || hasInvalidExtension();

  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
      {isOpen && (
        <ComposedModal open={isOpen} size="sm" onClose={onCloseHandler}>
          <ModalHeader
            className={`${blockClass}__header`}
            title="Export"
            closeModal={onCloseHandler}
          />
          <ModalBody className={`${blockClass}__body-container`}>
            {!submitted && (
              <p className={`${blockClass}__body`}>
                File must be exported in a PDF format.
              </p>
            )}
            {!submitted && (
              <TextInput
                id="export-file-name-validation"
                labelText="File name"
                value={name}
                onChange={(evt) => setName(evt.target.value)}
                invalid={hasInvalidExtension()}
                invalidText="File must have valid extension .pdf"
              />
            )}

            <div aria-live="polite" className={`${blockClass}__messaging`}>
              {loading && (
                <>
                  <Loading
                    aria-live="off"
                    description=""
                    small
                    withOverlay={false}
                  />
                  <p>Exporting file...</p>
                </>
              )}
              {successful && (
                <>
                  <CheckmarkFilled
                    size={16}
                    className={`${blockClass}__checkmark-icon`}
                  />
                  <p>The file has been exported.</p>
                </>
              )}
              {error && (
                <>
                  <ErrorFilled
                    size={16}
                    className={`${blockClass}__error-icon`}
                  />
                  <p>errorServer error 500</p>
                </>
              )}
            </div>
          </ModalBody>
          {!submitted && (
            <ModalFooter className={`${blockClass}__footer`}>
              <Button type="button" kind="secondary" onClick={onCloseHandler}>
                Cancel
              </Button>
              <Button
                type="submit"
                kind="primary"
                onClick={onSubmitHandler}
                disabled={primaryButtonDisabled}
              >
                Export
              </Button>
            </ModalFooter>
          )}
        </ComposedModal>
      )}
    </>
  );
};

export const ExportModalWithPreformattedExtensions = () => {
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const [extension, setExtension] = useState('');

  const submitted = loading || error || successful;

  const blockClass = 'export-modal';

  const preformattedExtensions = [
    {
      extension: 'YAML',
      description: 'best for IBM managed cloud',
    },
    {
      extension: 'BAR',
      description: 'best for integration server',
    },
  ];

  useEffect(() => {
    if (!isOpen) {
      setExtension(preformattedExtensions[0].extension);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const onCloseHandler = () => {
    setOpen(false);
    setSuccessful(false);
    setError(false);
  };

  const onSubmitHandler = async () => {
    setLoading(true);
    await wait(1000);
    setSuccessful(true);
    setLoading(false);
  };

  const primaryButtonDisabled = loading;

  return (
    <>
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
      {isOpen && (
        <ComposedModal open={isOpen} size="sm" onClose={onCloseHandler}>
          <ModalHeader
            className={`${blockClass}__header`}
            title="Export"
            closeModal={onCloseHandler}
          />
          <ModalBody className={`${blockClass}__body-container`}>
            {!submitted && (
              <FormGroup legendText="Choose an export format">
                <RadioButtonGroup
                  orientation="vertical"
                  onChange={(value) => setExtension(value)}
                  valueSelected={extension}
                  name="extensions"
                  aria-label="extensions"
                >
                  {preformattedExtensions.map((o) => (
                    <RadioButton
                      key={o.extension}
                      id={o.extension}
                      value={o.extension}
                      labelText={`${o.extension} (${o.description})`}
                      data-modal-primary-focus
                    />
                  ))}
                </RadioButtonGroup>
              </FormGroup>
            )}

            <div aria-live="polite" className={`${blockClass}__messaging`}>
              {loading && (
                <>
                  <Loading
                    aria-live="off"
                    description=""
                    small
                    withOverlay={false}
                  />
                  <p>Exporting file...</p>
                </>
              )}
              {successful && (
                <>
                  <CheckmarkFilled
                    size={16}
                    className={`${blockClass}__checkmark-icon`}
                  />
                  <p>The file has been exported.</p>
                </>
              )}
              {error && (
                <>
                  <ErrorFilled
                    size={16}
                    className={`${blockClass}__error-icon`}
                  />
                  <p>errorServer error 500</p>
                </>
              )}
            </div>
          </ModalBody>
          {!submitted && (
            <ModalFooter className={`${blockClass}__footer`}>
              <Button type="button" kind="secondary" onClick={onCloseHandler}>
                Cancel
              </Button>
              <Button
                type="submit"
                kind="primary"
                onClick={onSubmitHandler}
                disabled={primaryButtonDisabled}
              >
                Export
              </Button>
            </ModalFooter>
          )}
        </ComposedModal>
      )}
    </>
  );
};
