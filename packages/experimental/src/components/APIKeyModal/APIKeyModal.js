import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, TextInput, InlineLoading, Form } from 'carbon-components-react';
import { InformationFilled16 } from '@carbon/icons-react';
import { APIKeyDownloader } from '../APIKeyDownloader';
import { Canary } from '../_Canary';
import { pkg } from '../../settings';
const componentName = 'APIKeyModal';

export const APIKeyModal = !pkg.isComponentEnabled(componentName)
  ? // Return canary if not released or flag not set
    () => <Canary component={componentName} />
  : // Main component code...
    ({
      apiKey,
      apiKeyInputId,
      apiKeyLabel,
      apiKeyVisibility,
      copyButtonText,
      createButtonText,
      customSteps,
      createHeader,
      downloadBodyText,
      downloadLinkText,
      downloadable,
      downloadableFileName,
      loading,
      loadingMessage,
      modalBody,
      modalLabel,
      nameHelperText,
      nameInputId,
      nameLabel,
      namePlaceholder,
      nameRequired,
      nextStepButtonText,
      onRequestClose,
      onRequestSubmit,
      open,
      previousStepButtonText,
      secondaryButtonText,
      successBody,
      successHeader,
      stepHeaders,
    }) => {
      const [name, setName] = useState('');
      const [currentStep, setCurrentStep] = useState(0);
      const inputRef = useRef();
      const hasSteps = Boolean(customSteps.length);

      useEffect(() => {
        if (inputRef.current && open) inputRef.current.focus();
      }, [open]);

      const getPrimaryButtonStatus = () => {
        if (loading) return true;
        if (hasSteps && 'valid' in customSteps[currentStep])
          return !customSteps[currentStep].valid;
        if (nameRequired && !name) return true;
        return false;
      };

      const getPrimaryButtonText = () => {
        if (apiKey) return copyButtonText;
        if (hasNextStep) return nextStepButtonText;
        return createButtonText;
      };

      const getSecondaryButtonText = () => {
        if (hasPreviousStep && !apiKeyLoaded) return previousStepButtonText;
        return secondaryButtonText;
      };

      const getHeader = () => {
        if (apiKeyLoaded) return successHeader;
        else if (hasSteps) return stepHeaders[currentStep];
        return createHeader;
      };

      const setNameHandler = (evt) => {
        setName(evt.target.value);
      };

      const submitHandler = (evt) => {
        if (hasNextStep) setCurrentStep(currentStep + 1);
        else if (apiKeyLoaded) {
          navigator.clipboard.writeText(apiKey);
          onCloseHandler();
        } else {
          evt.preventDefault();
          onRequestSubmit();
        }
      };

      const onCloseHandler = () => {
        setName('');
        setCurrentStep(0);
        onRequestClose();
      };

      const onBackHandler = () => {
        if (hasPreviousStep && !apiKeyLoaded) setCurrentStep(currentStep - 1);
        else onCloseHandler();
      };

      const primaryButtonDisabled = getPrimaryButtonStatus();
      const apiKeyLoaded = apiKey && !loading;
      const hasNextStep = hasSteps && currentStep < customSteps.length - 1;
      const hasPreviousStep = hasSteps && currentStep !== 0;

      return (
        <Modal
          className={`${pkg.prefix}--apikey-modal`}
          open={open}
          modalHeading={getHeader()}
          primaryButtonText={getPrimaryButtonText()}
          secondaryButtonText={getSecondaryButtonText()}
          onRequestSubmit={submitHandler}
          primaryButtonDisabled={primaryButtonDisabled}
          onRequestClose={onCloseHandler}
          onSecondarySubmit={onBackHandler}
          modalLabel={hasPreviousStep ? modalLabel : ''}>
          {hasSteps && !apiKeyLoaded ? (
            customSteps[currentStep].content
          ) : (
            <>
              {modalBody && (
                <p className={`${pkg.prefix}--apikey-modal-body`}>
                  {modalBody}
                </p>
              )}
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
                  className={`${pkg.prefix}--apikey-modal-loader`}
                />
              )}
              {apiKeyLoaded && (
                <div className={`${pkg.prefix}--apikey-modal-messaging`}>
                  <InformationFilled16 />
                  {downloadable ? (
                    <APIKeyDownloader
                      apiKey={apiKey}
                      bodyText={downloadBodyText}
                      fileName={downloadableFileName}
                      linkText={downloadLinkText}
                    />
                  ) : (
                    <div
                      className={`${pkg.prefix}--apikey-modal-messaging-text`}>
                      {successBody}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </Modal>
      );
    };

APIKeyModal.displayName = componentName;
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
   * text for the copy button
   */
  copyButtonText: PropTypes.string,
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
   * specifies if the api key creation is loading
   */
  loading: PropTypes.bool,
  /**
   * loading message for when the api key is loading
   */
  loadingMessage: PropTypes.string,
  /**
   * content for modal body
   */
  modalBody: PropTypes.string,
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
  onRequestClose: PropTypes.func,
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
  successBody: PropTypes.node,
  /**
   * modal header for a successful api key creation
   */
  successHeader: PropTypes.string,
};

APIKeyModal.defaultProps = {
  apiKey: '',
  apiKeyInputId: '',
  apiKeyLabel: '',
  apiKeyVisibility: false,
  copyButtonText: '',
  customSteps: [],
  downloadBodyText: '',
  downloadLinkText: '',
  downloadable: false,
  downloadableFileName: '',
  createButtonText: '',
  createHeader: '',
  loading: false,
  loadingMessage: '',
  modalBody: '',
  modalLabel: '',
  nameHelperText: '',
  nameInputId: '',
  nameLabel: '',
  namePlaceholder: '',
  nameRequired: false,
  onRequestClose: () => {},
  onRequestSubmit: () => {},
  open: false,
  secondaryButtonText: '',
  stepHeaders: [],
  successBody: '',
  successHeader: '',
};
