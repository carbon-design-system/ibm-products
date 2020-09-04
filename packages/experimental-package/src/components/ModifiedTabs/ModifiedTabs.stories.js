//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useEffect, useRef, useState } from 'react';

import { ModifiedTabs } from '.';

import styles from './_index.scss'; // import index in case more files are added later.

export default {
  title: 'Experimental/ModifiedTabs',
  component: ModifiedTabs,
  parameters: { styles, layout: 'fullscreen' },
};

const Template = (args) => {
  const [tabs, setTabs] = useState([]);
  const lastTabId = useRef(0);

  const addTab = (tabId) => {
    setTabs((prevState) => [
      ...prevState,
      {
        id: `tab-${tabId}`,
        label: `Tab ${tabId}`,
        content: <div style={{ color: 'green' }}>Content for tab {tabId}</div>,
      },
    ]);
  };

  const handleCloseTab = (tabId) => {
    setTabs(tabs.filter((tab) => tab.id !== tabId));
  };

  const handleNewTab = () => {
    lastTabId.current += 1;
    addTab(lastTabId.current);
  };

  useEffect(() => {
    while (lastTabId.current < 4) {
      lastTabId.current += 1;
      addTab(lastTabId.current);
    }
  }, []);

  return (
    <ModifiedTabs
      {...args}
      tabs={tabs}
      onCloseTab={handleCloseTab}
      onNewTab={handleNewTab}
    />
  );
};

// const parameters = { styles };

export const Default = Template.bind({});
Default.args = {
  newTabLabel: 'Add new tab',
  newTabContent: 'Your new tab is being prepared...',
};
