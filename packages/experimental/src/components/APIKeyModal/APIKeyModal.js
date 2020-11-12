import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, TextInput, InlineLoading } from 'carbon-components-react';
import { InformationFilled16 } from '@carbon/icons-react';
import { APIKeyDownloader } from '../APIKeyDownloader';
import { expPrefix } from '../../global/js/settings';

export const APIKeyModal = ({
  apiKey,
  apiKeyInputId,
  apiKeyLabel,
  copyButtonText,
  createButtonText,
  createHeader,
  downloadBodyText,
  downloadLinkText,
  downloadable,
  downloadableFileName,
  loading,
  loadingMessage,
  modalBody,
  nameHelperText,
  nameInputId,
  nameLabel,
  namePlaceholder,
  nameRequired,
  onRequestClose,
  onRequestSubmit,
  open,
  secondaryButtonText,
  successBody,
  successHeader,
  visibilityToggler,
}) => {
  const [name, setName] = useState('');
  const setNameHandler = (evt) => {
    setName(evt.target.value);
  };
  const primaryButtonDisabled = nameRequired && !name;
  const primaryButtonText = apiKey ? copyButtonText : createButtonText;
  const apiKeyLoaded = apiKey && !loading;
  const submitHandler = () => {
    if (apiKeyLoaded) navigator.clipboard.writeText(apiKey);
    else onRequestSubmit(name);
  };
  const header = apiKeyLoaded ? successHeader : createHeader;
  return (
    <Modal
      className={`${expPrefix}--apikey-modal`}
      open={open}
      modalHeading={header}
      primaryButtonText={primaryButtonText}
      secondaryButtonText={secondaryButtonText}
      onRequestSubmit={submitHandler}
      primaryButtonDisabled={primaryButtonDisabled}
      onRequestClose={onRequestClose}>
      {modalBody && (
        <p className={`${expPrefix}--apikey-modal-body`}>{modalBody}</p>
      )}
      {apiKey && visibilityToggler && (
        <TextInput.PasswordInput
          value={apiKey}
          labelText={apiKeyLabel}
          id={apiKeyInputId}
        />
      )}
      {apiKey && !visibilityToggler && (
        <TextInput value={apiKey} labelText={apiKeyLabel} id={apiKeyInputId} />
      )}
      {nameRequired && !apiKeyLoaded && (
        <TextInput
          helperText={nameHelperText}
          placeholder={namePlaceholder}
          labelText={nameLabel}
          onChange={(evt) => setNameHandler(evt)}
          value={name}
          id={nameInputId}
        />
      )}
      {nameRequired && !apiKey && loading && (
        <InlineLoading
          description={loadingMessage}
          className={`${expPrefix}--apikey-modal-loader`}
        />
      )}
      {apiKeyLoaded && (
        <div className={`${expPrefix}--apikey-modal-messaging`}>
          <InformationFilled16 />
          {downloadable ? (
            <APIKeyDownloader
              apiKey={apiKey}
              bodyText={downloadBodyText}
              fileName={downloadableFileName}
              linkText={downloadLinkText}
            />
          ) : (
            <div className={`${expPrefix}--apikey-modal-messaging-text`}>
              {successBody}
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};

APIKeyModal.propTypes = {
  /**
   * the api key the user recieves
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
   * specifices if a name is required or not
   */
  nameRequired: PropTypes.bool,
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
   * text for the close button
   */
  secondaryButtonText: PropTypes.string,
  /**
   * content for when an api key is created successfully
   */
  successBody: PropTypes.node,
  /**
   * modal header for a successful api key creation
   */
  successHeader: PropTypes.string,
  /**
   * specifies if the api key input should use the password type toggle
   */
  visibilityToggler: PropTypes.bool,
};

APIKeyModal.defaultProps = {
  apiKey: '',
  apiKeyInputId: '',
  apiKeyLabel: '',
  copyButtonText: '',
  downloadBodyText: '',
  downloadLinkText: '',
  downloadable: false,
  downloadableFileName: '',
  createButtonText: '',
  createHeader: '',
  loading: false,
  loadingMessage: '',
  modalBody: '',
  nameHelperText: '',
  nameInputId: '',
  nameLabel: '',
  namePlaceholder: '',
  nameRequired: false,
  onRequestClose: () => {},
  onRequestSubmit: () => {},
  open: false,
  secondaryButtonText: '',
  successBody: '',
  successHeader: '',
  visibilityToggler: false,
};
