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
      showPasswordLabel,
      successBody,
      successHeader,
      stepHeaders,
      ...rest
    },
    ref
  ) => {
    const [name, setName] = useState('');
    const [currentStep, setCurrentStep] = useState(0);
    const [isPrimaryButtonDisabled, setIsPrimaryButtonDisabled] =
      useState(false);
    const [primaryButtonText, setPrimaryButtonText] = useState('');
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

    useEffect(() => {
      if (loading) {
        setIsPrimaryButtonDisabled(true);
      } else if (hasSteps && 'valid' in customSteps[currentStep]) {
        setIsPrimaryButtonDisabled(!customSteps[currentStep].valid);
      } else if (!hasSteps && nameRequired && !name) {
        setIsPrimaryButtonDisabled(true);
      } else {
        setIsPrimaryButtonDisabled(false);
      }
    }, [loading, hasSteps, customSteps, currentStep, nameRequired, name]);

    useEffect(() => {
      if (apiKey) {
        setPrimaryButtonText(copyButtonText);
      } else if (hasNextStep) {
        setPrimaryButtonText(nextStepButtonText);
      } else {
        setPrimaryButtonText(createButtonText);
      }
    }, [
      apiKey,
      copyButtonText,
      hasNextStep,
      nextStepButtonText,
      createButtonText,
    ]);

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
                  showPasswordLabel={showPasswordLabel}
                  tooltipPosition="left"
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
            disabled={isPrimaryButtonDisabled}>
            {primaryButtonText}
          </Button>
        </ModalFooter>
      </ComposedModal>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
APIKeyModal = pkg.checkComponentEnabled(APIKeyModal, componentName);

APIKeyModal.propTypes = {
  apiKey: PropTypes.string,
  apiKeyInputId: PropTypes.string,
  apiKeyLabel: PropTypes.string,
  apiKeyVisibility: PropTypes.bool,
  body: PropTypes.string,
  className: PropTypes.string,
  copyButtonText: PropTypes.string.isRequired,
  createButtonText: PropTypes.string,
  createHeader: PropTypes.string,
  customSteps: PropTypes.arrayOf(
    PropTypes.shape({
      valid: PropTypes.bool,
      content: PropTypes.node,
    })
  ),
  downloadBodyText: PropTypes.string,
  downloadLinkText: PropTypes.string,
  downloadable: PropTypes.bool,
  downloadableFileName: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool,
  loadingMessage: PropTypes.string,
  modalLabel: PropTypes.string,
  nameHelperText: PropTypes.string,
  nameInputId: PropTypes.string,
  nameLabel: PropTypes.string,
  namePlaceholder: PropTypes.string,
  nameRequired: PropTypes.bool,
  nextStepButtonText: PropTypes.string,
  onClose: PropTypes.func,
  onRequestSubmit: PropTypes.func,
  open: PropTypes.bool,
  previousStepButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  showPasswordLabel: PropTypes.string,
  stepHeaders: PropTypes.arrayOf(PropTypes.string),
  successBody: PropTypes.node.isRequired,
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
