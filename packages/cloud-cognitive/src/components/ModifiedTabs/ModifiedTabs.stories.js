import { _4K16 } from '@carbon/icons-react';
//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useState, useRef } from 'react';
import { action } from '@storybook/addon-actions';

import { Modal, RadioButton, RadioButtonGroup } from '@carbon/react';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { ModifiedTabs } from '.';
// import styles from './_storybook-styles.scss'; // import index in case more files are added later.

const commonStoryCode = {
  actionCloseTab: action('onCloseTab'),
  actionNewTab: action('onNewTab'),
  addTab(tabId, setTabs) {
    setTabs((prevState) => [
      ...prevState,
      {
        id: `tab-${tabId}`,
        label: `Tab ${tabId}`,
        content: () => (
          <div style={{ color: '#00ff00' }}>Content for tab {tabId}</div>
        ),
      },
    ]);
  },
};

export default {
  title: getStoryTitle(ModifiedTabs.displayName),
  component: ModifiedTabs,
  parameters: {},
};

const Template = (args) => {
  // tabs handling code
  const [tabs, setTabs] = useState([]);
  const nextTabId = useRef(1);
  const testRef = useRef();

  const { actionCloseTab, actionNewTab, addTab } = commonStoryCode;

  const handleNewTab = () => {
    actionNewTab();
    addTab(nextTabId.current, setTabs);
    nextTabId.current += 1;
  };

  const handleCloseTab = (tabId) => {
    actionCloseTab();
    setTabs(tabs.filter((tab) => tab.id !== tabId));
  };

  useEffect(() => {
    for (let i = 1; i < 5; i++) {
      addTab(nextTabId.current, setTabs);
      nextTabId.current += 1;
    }
  }, [addTab]);

  // template
  return (
    <div
      style={{
        maxWidth: '100%',
        width: '600px',
        padding: '30px',
        overflow: 'hidden',
      }}
    >
      <ModifiedTabs
        {...args}
        tabs={tabs}
        onCloseTab={handleCloseTab}
        onNewTab={handleNewTab}
        ref={testRef}
      />
    </div>
  );
};

// const parameters = { styles };
export const Default = prepareStory(Template, {
  args: {
    newTabLabel: 'Add new tab',
    newTabContent: <div>Your new tab is being prepared...</div>,
  },
});

// Example with external save prompt
const TemplateWithExternalSavePrompt = (args) => {
  // **** tabs handling code ****
  const [tabs, setTabs] = useState([]);
  const closingTabId = useRef(null);
  const nextTabId = useRef(1);

  const { actionCloseTab, actionNewTab, addTab } = commonStoryCode;

  const handleCloseTab = (tabId) => {
    actionCloseTab();
    closingTabId.current = tabId;
    setModalVisible(true);
  };

  const handleNewTab = () => {
    actionNewTab();
    addTab(nextTabId.current, setTabs);
    nextTabId.current += 1;
  };

  useEffect(() => {
    for (let i = 1; i < 5; i++) {
      addTab(nextTabId.current, setTabs);
      nextTabId.current += 1;
    }
  }, [addTab]);

  // ***** modal handling code ****
  const [modalVisible, setModalVisible] = useState(false);
  const handleCloseRequest = () => {
    setModalVisible(false);
  };
  const handleSubmitRequest = () => {
    // deal with save as needed
    setTabs(tabs.filter((tab) => tab.id !== closingTabId.current));
    closingTabId.current = null;

    setModalVisible(false);
  };
  const handleSecondarySubmit = () => {
    setModalVisible(false);
  };

  // template
  return (
    <div
      style={{
        maxWidth: '100%',
        width: '600px',
        padding: '30px',
        overflow: 'hidden',
      }}
    >
      <ModifiedTabs
        {...args.props}
        tabs={tabs}
        onCloseTab={handleCloseTab}
        onNewTab={handleNewTab}
      />

      <Modal
        modalHeading="Tab was closed"
        modalLabel="Just checking"
        data-test={modalVisible ? 'true' : 'false'}
        open={modalVisible}
        primaryButtonText="Continue"
        secondaryButtonText="Cancel"
        onRequestClose={handleCloseRequest}
        onRequestSubmit={handleSubmitRequest}
        onSecondarySubmit={handleSecondarySubmit}
      >
        <RadioButtonGroup defaultSelected="save" name="save-group">
          <RadioButton
            value="do-not-save"
            id="radio-do-not-save"
            labelText="Do not save"
          />
          <RadioButton value="save" id="radio-save" labelText="Save" />
        </RadioButtonGroup>
        <br />
        <p>Did you want to do anything with this?</p>
      </Modal>
    </div>
  );
};

export const WithExternalSavePrompt = prepareStory(
  TemplateWithExternalSavePrompt,
  {
    args: {
      props: {
        newTabLabel: 'Add new tab',
        newTabContent: <div>Your new tab is being prepared...</div>,
      },
    },
  }
);
