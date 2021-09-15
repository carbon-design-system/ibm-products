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
  PasswordInput,
  InlineLoading,
  Form,
  Button,
} from 'carbon-components-react';
import {
  InformationFilled16,
  Copy16,
  ErrorFilled16,
} from '@carbon/icons-react';
import { APIKeyDownloader } from './APIKeyDownloader';
import { pkg } from '../../settings';

import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { isRequiredIf } from '../../global/js/utils/props-helper';
import uuidv4 from '../../global/js/utils/uuidv4';

const componentName = 'APIKeyModal';

export let APIKeyModal = forwardRef(
  (
    {
      apiKey,
      apiKeyLabel,
      apiKeyName,
      body,
      className,
      closeButtonText,
      copyButtonText,
      copyErrorText,
      copyIconDescription,
      customSteps,
      downloadBodyText,
      downloadFileName,
      downloadFileType,
      downloadLinkText,
      editButtonText,
      editSuccess,
      editSuccessTitle,
      editing,
      error,
      errorText,
      generateButtonText,
      generateSuccessBody,
      generateSuccessTitle,
      generateTitle,
      hasAPIKeyVisibilityToggle,
      hasDownloadLink,
      hideAPIKeyLabel,
      loading,
      loadingText,
      modalLabel,
      nameHelperText,
      nameLabel,
      namePlaceholder,
      nameRequired,
      nextStepButtonText,
      onClose,
      onCopy,
      onRequestEdit,
      onRequestGenerate,
      open,
      previousStepButtonText,
      showAPIKeyLabel,
      ...rest
    },
    ref
  ) => {
    const [copyError, setCopyError] = useState(false);
    const [name, setName] = useState(apiKeyName);
    const [currentStep, setCurrentStep] = useState(0);
    const inputRef = useRef();
    const copyRef = useRef();
    const apiKeyInputId = useRef(uuidv4());
    const nameInputId = useRef(uuidv4());
    const hasSteps = Boolean(customSteps.length);
    const apiKeyLoaded = apiKey && !loading;
    const hasNextStep = hasSteps && currentStep < customSteps.length - 1;
    const hasPreviousStep = hasSteps && currentStep !== 0;
    const copyButtonProps = {
      renderIcon: Copy16,
      iconDescription: copyIconDescription,
      ref: copyRef,
    };
    const blockClass = `${pkg.prefix}--apikey-modal`;

    useEffect(() => {
      if (inputRef.current && open) {
        inputRef.current.focus();
      }
    }, [open]);

    useEffect(() => {
      if (copyRef.current && open && apiKeyLoaded) {
        copyRef.current.focus();
      }
    }, [open, apiKeyLoaded]);

    const isPrimaryButtonDisabled = () => {
      if (loading) {
        return true;
      }
      if (hasSteps && 'valid' in customSteps[currentStep]) {
        return !customSteps[currentStep].valid;
      }
      if (!hasSteps && nameRequired && !name) {
        return true;
      }
      return false;
    };

    const getPrimaryButtonText = () => {
      if (hasNextStep) {
        return nextStepButtonText;
      }
      if (apiKeyLoaded) {
        return copyButtonText;
      }
      if (editing) {
        return editButtonText;
      }
      return generateButtonText;
    };

    const getSecondaryButtonText = () => {
      if (hasPreviousStep && !apiKeyLoaded) {
        return previousStepButtonText;
      }
      return closeButtonText;
    };

    const getTitle = () => {
      if (editing && editSuccess) {
        return editSuccessTitle;
      }
      if (apiKeyLoaded) {
        return generateSuccessTitle;
      }
      if (hasSteps) {
        return customSteps[currentStep].title;
      }
      return generateTitle;
    };

    const setNameHandler = (evt) => {
      setName(evt.target.value);
    };

    const onCloseHandler = () => {
      setName('');
      setCurrentStep(0);
      onClose();
    };

    const submitHandler = async () => {
      if (hasNextStep) {
        setCurrentStep(currentStep + 1);
      } else if (apiKeyLoaded) {
        if (onCopy) {
          onCopy(apiKey);
        } else {
          try {
            await navigator.clipboard.writeText(apiKey);
          } catch (e) {
            console.error(e);
            setCopyError(true);
          }
        }
      } else if (editing) {
        onRequestEdit(name);
      } else {
        onRequestGenerate(name);
      }
    };

    const onBackHandler = () => {
      if (hasPreviousStep && !apiKeyLoaded) {
        setCurrentStep(currentStep - 1);
      } else {
        onCloseHandler();
      }
    };

    return (
      <ComposedModal
        {...rest}
        {...{ open, ref, ...getDevtoolsProps(componentName) }}
        className={cx(className, blockClass)}
        onClose={onCloseHandler}
        size="sm"
        aria-label={modalLabel}
        preventCloseOnClickOutside>
        <ModalHeader
          className={`${blockClass}__header`}
          title={getTitle()}
          label={modalLabel}
        />
        <ModalBody className={`${blockClass}__body-container`}>
          {hasSteps && !apiKeyLoaded ? (
            customSteps[currentStep].content
          ) : (
            <>
              {body && <p className={`${blockClass}__body`}>{body}</p>}
              {!editing && apiKey && hasAPIKeyVisibilityToggle && (
                <PasswordInput
                  value={apiKey}
                  labelText={apiKeyLabel}
                  id={apiKeyInputId.current}
                  showPasswordLabel={showAPIKeyLabel}
                  hidePasswordLabel={hideAPIKeyLabel}
                  tooltipPosition="left"
                />
              )}
              {!editing && apiKey && !hasAPIKeyVisibilityToggle && (
                <TextInput
                  value={apiKey}
                  labelText={apiKeyLabel}
                  id={apiKeyInputId.current}
                />
              )}
              {(editing || (!apiKeyLoaded && nameRequired)) && (
                <Form onSubmit={submitHandler}>
                  <TextInput
                    helperText={nameHelperText}
                    placeholder={namePlaceholder}
                    labelText={nameLabel}
                    onChange={setNameHandler}
                    value={name}
                    id={nameInputId.current}
                    disabled={loading}
                    ref={inputRef}
                    required={nameRequired}
                  />
                </Form>
              )}
              {loading && (
                <InlineLoading
                  description={loadingText}
                  className={`${blockClass}__loader`}
                />
              )}
              {(copyError || error) && (
                <div className={`${blockClass}__messaging`}>
                  <div className={`${blockClass}__error-icon`}>
                    <ErrorFilled16 />
                  </div>
                  <p className={`${blockClass}__messaging-text`}>
                    {copyError ? copyErrorText : errorText}
                  </p>
                </div>
              )}
              {apiKeyLoaded && (
                <div className={`${blockClass}__messaging`}>
                  <InformationFilled16 />
                  {hasDownloadLink ? (
                    <APIKeyDownloader
                      apiKey={apiKey}
                      body={downloadBodyText}
                      fileName={downloadFileName}
                      linkText={downloadLinkText}
                      fileType={downloadFileType}
                    />
                  ) : (
                    <div className={`${blockClass}__messaging-text`}>
                      {generateSuccessBody}
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
            {...(apiKeyLoaded ? copyButtonProps : {})}
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

const customStepsRequiredProps = (type) =>
  isRequiredIf(
    type,
    ({ customSteps }) => customSteps && customSteps.length > 1
  );

const editRequiredProps = (type) =>
  isRequiredIf(type, ({ editing }) => editing);

const downloadRequiredProps = (type) =>
  isRequiredIf(type, ({ hasDownloadLink }) => hasDownloadLink);

// Return a placeholder if not released and not enabled by feature flag
APIKeyModal = pkg.checkComponentEnabled(APIKeyModal, componentName);

APIKeyModal.propTypes = {
  /**
   * the api key that's displayed to the user when a request to create is fulfilled.
   */
  apiKey: PropTypes.string,
  /**
   * label for the text input that holds the api key.
   */
  apiKeyLabel: PropTypes.string,
  /**
   * the name of the api key. should only be supplied in edit mode.
   */
  apiKeyName: PropTypes.string,
  /**
   * body content for the modal
   */
  body: PropTypes.string,
  /**
   * optional class name
   */
  className: PropTypes.string,
  /**
   * text for the close button
   */
  closeButtonText: PropTypes.string,
  /**
   * text for the copy button
   */
  copyButtonText: PropTypes.string,
  /**
   * Error message for when the copy function fails
   */
  copyErrorText: PropTypes.string,
  /**
   * text description for the copy button icon
   */
  copyIconDescription: PropTypes.string,
  /**
   * if you need more options for key creation beyond just the name use custom steps to obtain whatever data is required.
   */
  customSteps: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * designates if the step has passed whatever validation rules are in place.
       */
      valid: PropTypes.bool,
      /**
       * designates content is the JSX that holds whatever inputs you need
       */
      content: PropTypes.node,
      /**
       * designates the title that's displayed at the top of the modal for each step
       */
      title: PropTypes.string,
    })
  ),
  /**
   * the content that appears that indicates the key is downloadable
   */
  downloadBodyText: downloadRequiredProps(PropTypes.string),
  /**
   * designates the name of downloadable json file with the key. if not specified will default to 'apikey'
   */
  downloadFileName: downloadRequiredProps(PropTypes.string),
  /**
   * designates the file type for the downloadable key
   */
  downloadFileType: downloadRequiredProps(PropTypes.oneOf(['txt', 'json'])),
  /**
   * anchor text for the download link
   */
  downloadLinkText: downloadRequiredProps(PropTypes.string),
  /**
   * text for the edit button
   */
  editButtonText: editRequiredProps(PropTypes.string),
  /**
   * designates if the edit request was successful
   */
  editSuccess: editRequiredProps(PropTypes.bool),
  /**
   * title for a successful edit
   */
  editSuccessTitle: editRequiredProps(PropTypes.string),
  /**
   * designates if the modal is in the edit mode
   */
  editing: PropTypes.bool,
  /**
   * designates if an error has occurred in a request
   */
  error: PropTypes.bool,
  /**
   * text to display if an error has occurred
   */
  errorText: PropTypes.string,
  /**
   * default primary button text for modal in assumed default mode create or generate.
   * in create mode this is the button text prior to supplying an api key, which then
   * uses copyButtonText
   */
  generateButtonText: PropTypes.string,
  /**
   * content to display if generate request was successful
   */
  generateSuccessBody: PropTypes.node,
  /**
   * title for a successful key generation
   */
  generateSuccessTitle: PropTypes.string,
  /**
   * default title for the modal in generate key mode
   */
  generateTitle: PropTypes.string,
  /**
   * designates if the api input has the visibility toggle enabled
   */
  hasAPIKeyVisibilityToggle: PropTypes.bool,
  /**
   * designates if user is able to download the api key
   */
  hasDownloadLink: PropTypes.bool,
  /**
   * label text that's displayed when hovering over visibility toggler to hide key
   */
  hideAPIKeyLabel: PropTypes.string,
  /**
   * designates if the modal is in a loading state via a request or some other in progress operation
   */
  loading: PropTypes.bool,
  /**
   * text that displays while modal is in the loading state
   */
  loadingText: PropTypes.string,
  /**
   * general label text for modal
   */
  modalLabel: PropTypes.string,
  /**
   * helper text for name input
   */
  nameHelperText: PropTypes.string,
  /**
   * label for api key name input
   */
  nameLabel: PropTypes.string,
  /**
   * placeholder text for api key name input
   */
  namePlaceholder: PropTypes.string,
  /**
   * designates if a name is required or not for key generation. NOTE- if using custom steps set this to false since you will be using your own validation
   */
  nameRequired: PropTypes.bool,
  /**
   * text that displays in the primary button when using custom steps to indicate to the user that there is a next step
   */
  nextStepButtonText: customStepsRequiredProps(PropTypes.string),
  /**
   * handler for on modal close
   */
  onClose: PropTypes.func,
  /**
   * Optional callback if you want to use your own copy function instead of the build in one
   * onCopy(apiKey)
   */
  onCopy: PropTypes.func,
  /**
   * handler for api key edit
   */
  onRequestEdit: PropTypes.func,
  /**
   * handler for api key generation
   */
  onRequestGenerate: PropTypes.func,
  /**
   * designates if modal is open or closed
   */
  open: PropTypes.bool.isRequired,
  /**
   * text that displays in the secondary button when using custom steps to indicate to the user that there is a previous step
   */
  previousStepButtonText: customStepsRequiredProps(PropTypes.string),
  /**
   * label text that's displayed when hovering over visibility toggler to show key
   */
  showAPIKeyLabel: PropTypes.string,
};

APIKeyModal.defaultProps = {
  apiKeyName: '',
  customSteps: [],
  error: false,
  hasAPIKeyVisibilityToggle: false,
  hasDownloadLink: false,
  loading: false,
  nameRequired: false,
  open: false,
};

APIKeyModal.displayName = componentName;
