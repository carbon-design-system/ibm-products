//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'carbon-components-react';
import { APIKeyModal } from '.';
import styles from './_storybook-styles.scss'; // import index in case more files are added later.
import mdx from './APIKeyModal.mdx';

export default {
  title: 'Experimental/APIKeyModal',
  component: APIKeyModal,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const defaultProps = {
  apiKey: '123-456-789',
  apiKeyInputId: 'apiKeyInput',
  apiKeyLabel: 'API key',
  copyButtonText: 'Copy',
  open: true,
  secondaryButtonText: 'Close',
  successBody: (
    <p>
      This is your unique API key and is non-recoverable. If you lose this API
      key, you will have to reset it.
    </p>
  ),
  successHeader: 'API key successully created',
};

const Template = (args) => {
  return <APIKeyModal {...args} />;
};

/**
 * Simple state manager for modals.
 */
/* eslint-disable react/prop-types */
const ModalStateManager = ({
  renderLauncher: LauncherContent,
  children: ModalContent,
}) => {
  const [open, setOpen] = useState(true);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const setKeyHandler = async (name) => {
    console.log(`some api call for ${name}`);
    setLoading(true);
    const timeout = () => new Promise((resolve) => setTimeout(resolve, 2000));
    await timeout();
    setApiKey('111-111-111-111');
    setLoading(false);
  };
  return (
    <>
      {!ModalContent || typeof document === 'undefined'
        ? null
        : ReactDOM.createPortal(
            <ModalContent
              apiKey={apiKey}
              loading={loading}
              open={open}
              setOpen={setOpen}
              setApiKey={setKeyHandler}
            />,
            document.body
          )}
      {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
    </>
  );
};

export const Standard = () => {
  return (
    <ModalStateManager
      renderLauncher={({ setOpen }) => (
        <Button onClick={() => setOpen(true)}>Launch modal</Button>
      )}>
      {({ open, setOpen, setApiKey, apiKey, loading }) => (
        <APIKeyModal
          {...defaultProps}
          apiKey={apiKey}
          downloadBodyText="This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it."
          downloadLinkText="Download as JSON"
          downloadable
          downloadableFileName="apikey"
          generateButtonText="Generate API key"
          generateHeader="Generate an API key"
          loadingMessage="your key is being created. please wait..."
          loading={loading}
          modalBody="Optional description text. To connect securely to {{product}}, your application or tool needs an API key with permission to access the cluster and resources."
          nameHelperText="Providing the application name will help you idenfity your api key later."
          nameInputId="nameInput"
          nameLabel="Name your application"
          namePlaceholder="Application name"
          nameRequired
          onRequestClose={() => setOpen(false)}
          onRequestSubmit={setApiKey}
          open={open}
          visibilityToggler
        />
      )}
    </ModalStateManager>
  );
};

export const Minimal = Template.bind({});
Minimal.args = {
  ...defaultProps,
};
