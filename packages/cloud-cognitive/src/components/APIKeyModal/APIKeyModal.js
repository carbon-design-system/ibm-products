//
// Copyright IBM Corp. 2021, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState, useRef, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  ComposedModal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  TextInput,
  InlineLoading,
  Form,
  Button,
} from 'carbon-components-react';
import {
  InformationFilled16,
  Copy16,
  ErrorFilled16,
} from '@carbon/icons-react';
import { APIKeyDownloader } from '../APIKeyDownloader';
import { pkg } from '../../settings';
const componentName = 'APIKeyModal';

export let APIKeyModal = forwardRef(
  (
    {
      apiKey,
      apiKeyInputId,
      apiKeyLabel,
      apiKeyVisibility,
      className,
      copyButtonText,
      createButtonText,
      customSteps,
      createHeader,
      downloadBodyText,
      downloadLinkText,
      downloadable,
      downloadableFileName,
      error,
      errorMessage,
      loading,
      loadingMessage,
      body,
      modalLabel,
      nameHelperText,
      nameInputId,
      nameLabel,
      namePlaceholder,
      nameRequired,
      nextStepButtonText,
      onClose,
      onRequestSubmit,
      open,
      previousStepButtonText,
      secondaryButtonText,
      successBody,
      successHeader,
      stepHeaders,
      ...rest
    },
    ref
  ) => {
    const [name, setName] = useState('');
    const [currentStep, setCurrentStep] = useState(0);
    const inputRef = useRef();
    const hasSteps = Boolean(customSteps.length);
    const apiKeyLoaded = apiKey && !loading;
    const hasNextStep = hasSteps && currentStep < customSteps.length - 1;
    const hasPreviousStep = hasSteps && currentStep !== 0;

    useEffect(() => {
      if (inputRef.current && open) {
        inputRef.current.focus();
      }
    }, [open]);

    const isPrimaryButtonDisabled = () => {
      if (loading) {
        return true;
      }
      if (hasSteps && 'valid' in customSteps[currentStep]) {
        return !customSteps[currentStep].valid;
      }
      if (nameRequired && !name) {
        return true;
      }
      return false;
    };

    const getPrimaryButtonText = () => {
      if (apiKey) {
        return copyButtonText;
      }
      if (hasNextStep) {
        return nextStepButtonText;
      }
      return createButtonText;
    };

    const getSecondaryButtonText = () => {
      if (hasPreviousStep && !apiKeyLoaded) {
        return previousStepButtonText;
      }
      return secondaryButtonText;
    };

    const getHeader = () => {
      if (apiKeyLoaded) {
        return successHeader;
      } else if (hasSteps) {
        return stepHeaders[currentStep];
      }
      return createHeader;
    };

    const setNameHandler = (evt) => {
      setName(evt.target.value);
    };

    const onCloseHandler = () => {
      setName('');
      setCurrentStep(0);
      onClose();
    };

    const submitHandler = (evt) => {
      if (hasNextStep) {
        setCurrentStep(currentStep + 1);
      } else if (apiKeyLoaded) {
        navigator.clipboard.writeText(apiKey);
      } else {
        evt.preventDefault();
        onRequestSubmit();
      }
    };

    const onBackHandler = () => {
      if (hasPreviousStep && !apiKeyLoaded) {
        setCurrentStep(currentStep - 1);
      } else {
        onCloseHandler();
      }
    };

    const blockClass = `${pkg.prefix}--apikey-modal`;

    return (
      <ComposedModal
        {...rest}
        {...{ open, ref }}
        className={cx(className, blockClass)}
        onClose={onCloseHandler}
        size="sm"
        preventCloseOnClickOutside>
        <ModalHeader
          className={`${blockClass}__header`}
          title={getHeader()}
          label={hasPreviousStep ? modalLabel : ''}
        />
        <ModalBody className={`${blockClass}__body-container`}>
          {hasSteps && !apiKeyLoaded ? (
            customSteps[currentStep].content
          ) : (
            <>
              {body && <p className={`${blockClass}__body`}>{body}</p>}
              {apiKey && apiKeyVisibility && (
                <TextInput.PasswordInput
                  value={apiKey}
                  labelText={apiKeyLabel}
                  id={apiKeyInputId}
                />
              )}
              {apiKey && !apiKeyVisibility && (
                <TextInput
                  value={apiKey}
                  labelText={apiKeyLabel}
                  id={apiKeyInputId}
                />
              )}
              {nameRequired && !apiKeyLoaded && (
                <Form onSubmit={submitHandler}>
                  <TextInput
                    helperText={nameHelperText}
                    placeholder={namePlaceholder}
                    labelText={nameLabel}
                    onChange={(evt) => setNameHandler(evt)}
                    value={name}
                    id={nameInputId}
                    disabled={loading}
                    ref={inputRef}
                  />
                </Form>
              )}
              {loading && (
                <InlineLoading
                  description={loadingMessage}
                  className={`${blockClass}__loader`}
                />
              )}
              {error && (
                <div className={`${blockClass}__messaging`}>
                  <div className={`${blockClass}__error-icon`}>
                    <ErrorFilled16 />
                  </div>
                  <p className={`${blockClass}__messaging-text`}>
                    {errorMessage}
                  </p>
                </div>
              )}
              {apiKeyLoaded && (
                <div className={`${blockClass}__messaging`}>
                  <InformationFilled16 />
                  {downloadable ? (
                    <APIKeyDownloader
                      apiKey={apiKey}
                      bodyText={downloadBodyText}
                      fileName={downloadableFileName}
                      linkText={downloadLinkText}
                    />
                  ) : (
                    <div className={`${blockClass}__messaging-text`}>
                      {successBody}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </ModalBody>
        <ModalFooter className={`${blockClass}__footer`}>
          <Button type="button" kind="secondary" onClick={onBackHandler}>
            {getSecondaryButtonText()}
          </Button>
          <Button
            {...(apiKeyLoaded ? { renderIcon: Copy16 } : {})}
            type="submit"
            kind="primary"
            onClick={submitHandler}
            disabled={isPrimaryButtonDisabled()}>
            {getPrimaryButtonText()}
          </Button>
        </ModalFooter>
      </ComposedModal>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
APIKeyModal = pkg.checkComponentEnabled(APIKeyModal, componentName);

APIKeyModal.propTypes = {
  /**
   * the api key the user receives
   */
  apiKey: PropTypes.string,
  /**
   * id for the api key input field
   */
  apiKeyInputId: PropTypes.string,
  /**
   * label for the api key input field
   */
  apiKeyLabel: PropTypes.string,
  /**
   * specifies if the api key input should use the password type toggle
   */
  apiKeyVisibility: PropTypes.bool,
  /**
   * content for modal body
   */
  body: PropTypes.string,
  /**
   * Optional classname
   */
  className: PropTypes.string,
  /**
   * text for the copy button
   */
  copyButtonText: PropTypes.string.isRequired,
  /**
   * button text for the create key button
   */
  createButtonText: PropTypes.string,
  /**
   * modal header for the create a key screen
   */
  createHeader: PropTypes.string,
  /**
   * an array that contains the custom step content and if the step has passed validation
   */
  customSteps: PropTypes.arrayOf(
    PropTypes.shape({
      valid: PropTypes.bool,
      content: PropTypes.node,
    })
  ),
  /**
   * text fot the download message
   */
  downloadBodyText: PropTypes.string,
  /**
   * text for the download link
   */
  downloadLinkText: PropTypes.string,
  /**
   * specifies if the api key is downloadable or not
   */
  downloadable: PropTypes.bool,
  /**
   * specifies the filename for downloadable api keys
   */
  downloadableFileName: PropTypes.string,
  /**
   * specifices if an error has occured
   */
  error: PropTypes.bool,
  /**
   * message to display when modal in an error state
   */
  errorMessage: PropTypes.string,
  /**
   * specifies if the api key creation is loading
   */
  loading: PropTypes.bool,
  /**
   * loading message for when the api key is loading
   */
  loadingMessage: PropTypes.string,
  /**
   * Label for modal
   */
  modalLabel: PropTypes.string,
  /**
   * helper text for name input
   */
  nameHelperText: PropTypes.string,
  /**
   * id for name input
   */
  nameInputId: PropTypes.string,
  /**
   * label for name input
   */
  nameLabel: PropTypes.string,
  /**
   * placeholder for name input
   */
  namePlaceholder: PropTypes.string,
  /**
   * specifices if a name is required. If you are using custom steps DO NOT use this for validation.
   * use the `valid` prop in the `customSteps` prop array for validation. see `customSteps` for additional information.
   */
  nameRequired: PropTypes.bool,
  /**
   * Specifies text for next step button
   */
  nextStepButtonText: PropTypes.string,
  /**
   * function to close the modal
   */
  onClose: PropTypes.func,
  /**
   * function that is called to create the api key
   */
  onRequestSubmit: PropTypes.func,
  /**
   * specifies if the modal is open or not
   */
  open: PropTypes.bool,
  /**
   * Specifices text for previous step button
   */
  previousStepButtonText: PropTypes.string,
  /**
   * text for the close button
   */
  secondaryButtonText: PropTypes.string,
  /**
   * Modal header for individual steps
   */
  stepHeaders: PropTypes.arrayOf(PropTypes.string),
  /**
   * content for when an api key is created successfully
   */
  successBody: PropTypes.node.isRequired,
  /**
   * modal header for a successful api key creation
   */
  successHeader: PropTypes.string.isRequired,
};

APIKeyModal.defaultProps = {
  apiKeyVisibility: false,
  customSteps: [],
  downloadable: false,
  loading: false,
  nameRequired: false,
  open: false,
  stepHeaders: [],
};

APIKeyModal.displayName = componentName;
