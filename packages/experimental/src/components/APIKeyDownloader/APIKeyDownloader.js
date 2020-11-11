import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { expPrefix } from '../../global/js/settings';

export const APIKeyDownloader = ({ apiKey, bodyText, fileName, linkText }) => {
  const [linkProps, setLinkProps] = useState('');

  useEffect(() => {
    const generateLinkProps = async () => {
      const data = { apiKey };
      const json = JSON.stringify(data);
      const blob = new Blob([json], { type: 'application/json' });
      const href = await URL.createObjectURL(blob);
      const download = `${fileName || 'apikey'}.json`;
      const props = {
        href,
        download,
      };
      setLinkProps(props);
    };

    generateLinkProps();
  }, [apiKey, fileName]);

  return (
    <p className={`${expPrefix}--apikey-modal-messaging-text`}>
      {bodyText} <a {...linkProps}>{linkText}</a>
    </p>
  );
};

APIKeyDownloader.propTypes = {
  apiKey: PropTypes.string,
  bodyText: PropTypes.string,
  className: PropTypes.string,
  fileName: PropTypes.string,
  linkText: PropTypes.string,
};
