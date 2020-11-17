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

const TemplateWithState = (args) => {
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line
  const setKeyHandler = async (resourceName) => {
    setLoading(true);
    const timeout = () => new Promise((resolve) => setTimeout(resolve, 2000));
    await timeout();
    setApiKey('111-111-111-111');
    setLoading(false);
  };
  const onCloseHandler = () => {
    setApiKey('');
    setOpen(false);
  };
  const modalToggler = () => {
    setOpen(!open);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <APIKeyModal
          {...args}
          apiKey={apiKey}
          loading={loading}
          onRequestClose={onCloseHandler}
          onRequestSubmit={setKeyHandler}
          open={open}
        />,
        document.body
      )}
      <Button onClick={modalToggler}>Add API key</Button>
    </>
  );
};

const StateWrapper = (args) => <TemplateWithState {...args} />;

export const Standard = StateWrapper.bind({});
Standard.args = {
  ...defaultProps,
  apiKeyVisibility: true,
  createButtonText: 'Generate API key',
  createHeader: 'Generate an API key',
  downloadBodyText:
    'This is your unique API key and is non-recoverable. If you lose this API key, you will have to reset it.',
  downloadLinkText: 'Download as JSON',
  downloadable: true,
  downloadableFileName: 'apikey',
  loadingMessage: 'your key is being created. please wait...',
  modalBody:
    'Optional description text. To connect securely to {{product}}, your application or tool needs an API key with permission to access the cluster and resources.',
  nameHelperText:
    'Providing the application name will help you idenfity your api key later.',
  nameInputId: 'nameInput',
  nameLabel: 'Name your application',
  namePlaceholder: 'Application name',
  nameRequired: true,
};

export const Minimal = Template.bind({});
Minimal.args = {
  ...defaultProps,
};
