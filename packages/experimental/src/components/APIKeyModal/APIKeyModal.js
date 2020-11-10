import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, TextInput, InlineLoading } from 'carbon-components-react';
import { InformationFilled16 } from '@carbon/icons-react';
import APIKeyDownloader from './APIKeyDownloader';
import { expPrefix } from '../../global/js/settings';

export const APIKeyModal = ({
  apiKey,
  apiKeyInputId,
  apiKeyLabel,
  copyButtonText,
  downloadBodyText,
  downloadLinkText,
  downloadable,
  downloadableFileName,
  generateButtonText,
  generateHeader,
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
  const primaryButtonText = apiKey ? copyButtonText : generateButtonText;
  const apiKeyLoaded = apiKey && !loading;
  const submitHandler = () => {
    if (apiKeyLoaded) navigator.clipboard.writeText(apiKey);
    else onRequestSubmit(name);
  };
  const header = apiKeyLoaded ? successHeader : generateHeader;
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
        <InlineLoading description={loadingMessage} />
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
  apiKey: PropTypes.string,
  apiKeyInputId: PropTypes.string,
  apiKeyLabel: PropTypes.string,
  copyButtonText: PropTypes.string,
  downloadBodyText: PropTypes.string,
  downloadLinkText: PropTypes.string,
  downloadable: PropTypes.bool,
  downloadableFileName: PropTypes.string,
  generateButtonText: PropTypes.string,
  generateHeader: PropTypes.string,
  loading: PropTypes.bool,
  loadingMessage: PropTypes.string,
  modalBody: PropTypes.string,
  nameHelperText: PropTypes.string,
  nameInputId: PropTypes.string,
  nameLabel: PropTypes.string,
  namePlaceholder: PropTypes.string,
  nameRequired: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onRequestSubmit: PropTypes.func,
  open: PropTypes.bool,
  secondaryButtonText: PropTypes.string,
  successBody: PropTypes.node,
  successHeader: PropTypes.string,
  visibilityToggler: PropTypes.bool,
};
