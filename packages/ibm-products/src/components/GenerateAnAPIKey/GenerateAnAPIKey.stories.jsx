/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Button, Modal, TextInput } from '@carbon/react';
import styles from './_storybook-styles.scss?inline';
import DocsPage from './GenerateAnAPIKey.mdx';

export default {
  title: 'Patterns/Generate an API key',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: DocsPage,
    },
  },
};

const Template = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState('');

  const fetchKey = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setKey('082be29c-3622-4276-bc58-695e2a12bd93');
    toggleModal();
  };

  const copyKey = async () => {
    try {
      await navigator.clipboard.writeText(key);
    } catch (e) {
      console.error(e);
    }
  };

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div className="app">
      <Button onClick={fetchKey}>
        {loading ? 'Generating...' : 'Generate'}
      </Button>
      <Modal
        open={open}
        onRequestClose={toggleModal}
        modalHeading="API key successfully created"
        primaryButtonText="Copy"
        secondaryButtonText="Close"
        onRequestSubmit={copyKey}
      >
        <TextInput value={key} readOnly />
        <p>
          This is your unique API key and is non-recoverable. If you lose this
          API key, you will have to reset it.
        </p>
      </Modal>
    </div>
  );
};

export const InstantGeneration = Template.bind({});
InstantGeneration.storyName = 'Instant generation';
InstantGeneration.args = {};
