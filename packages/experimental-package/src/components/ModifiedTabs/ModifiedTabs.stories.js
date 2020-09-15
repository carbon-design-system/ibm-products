import { _4K16 } from '@carbon/icons-react';
//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useState } from 'react';

import { ModifiedTabs } from '.';

import styles from './_index.scss'; // import index in case more files are added later.

export default {
  title: 'Experimental/ModifiedTabs',
  component: ModifiedTabs,
  parameters: { styles },
};

const Template = (args) => {
  const [tabs, setTabs] = useState([]);

  const addTab = (tabId) => {
    setTabs((prevState) => [
      ...prevState,
      {
        id: `tab-${tabId}`,
        label: `Tab ${tabId}`,
        content: (
          <div style={{ color: '#00ff00' }}>Content for tab {tabId}</div>
        ),
      },
    ]);
  };

  const handleCloseTab = (tabId) => {
    setTabs(tabs.filter((tab) => tab.id !== tabId));
  };

  const handleNewTab = () => {
    addTab(tabs.length + 1);
  };

  useEffect(() => {
    for (let i = 1; i < 5; i++) {
      addTab(i);
    }
  }, []);

  return (
    <div
      style={{
        maxWidth: '100%',
        width: '600px',
        padding: '30px',
        overflow: 'hidden',
      }}>
      <ModifiedTabs
        {...args}
        tabs={tabs}
        onCloseTab={handleCloseTab}
        onNewTab={handleNewTab}
      />
    </div>
  );
};

// const parameters = { styles };

export const Default = Template.bind({});
Default.args = {
  newTabLabel: 'Add new tab',
  newTabContent: <div>Your new tab is being prepared...</div>,
};
