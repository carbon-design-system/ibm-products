/**
 * Copyright IBM Corp. 2025
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
import styles from './_storybook-styles.scss?inline';
import mdx from './ImportAndUpload.mdx';
import wait from '../../global/js/utils/wait';
import { CheckmarkFilled, ErrorFilled } from '@carbon/react/icons';

export default {
  title: 'Patterns/Import And Upload Modal',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const StandardTemplate = () => {
  const [isOpen, setOpen] = useState(false);
  const [name, setName] = useState('Sample02.pdf');
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);

  const submitted = loading || error || successful;

  const blockClass = 'import-and-upload-modal';
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

export const Standard = StandardTemplate.bind({});
Standard.args = {};
