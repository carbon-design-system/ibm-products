//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'carbon-components-react';
import { ModifiedTabLabelWithClose } from './ModifiedTabLabelWithClose';
import { ModifiedTabLabelNew } from './ModifiedTabLabelNew';

import { pkg } from '../../settings';
const componentName = 'ModifiedTabs';

// Default values for props
const defaults = {
  tabs: [
    {
      id: 'tab-1',
      label: 'Tab 1',
      content: <div>Iam am the content of tab 1.</div>,
      unsavedContent: false,
    },
  ],
  newTabLabel: 'New tab',
  newTabContent: 'Your new tab will be here soon',
  onNewTab: undefined,
  onCloseTab: undefined,
};

export let ModifiedTabs = ({
  tabs = defaults.tabs,
  newTabLabel = defaults.newTabLabel,
  newTabContent = defaults.newTabContent,
  onNewTab = defaults.onNewTab,
  onCloseTab = defaults.onCloseTab,
}) => {
  const handleNewTab = () => {
    if (onNewTab) {
      onNewTab();
      setTimeout(() => {
        // set focus to the new tab
        const tab = tabsRef.current.getTabAt(tabs.length);
        if (tab & tab.tabAnchor) {
          tab.tabAnchor.focus();
        }
      });
    }
  };

  const handleClose = (id) => {
    if (onCloseTab) {
      onCloseTab(id);
    }
  };

  const tabsRef = useRef(null);

  return (
    <Tabs className="modified-tabs" ref={tabsRef}>
      {tabs.map((tab) => (
        <Tab
          id={tab.id}
          key={tab.id}
          label={
            <ModifiedTabLabelWithClose
              label={tab.label}
              onClose={() => handleClose(tab.id)}
              unsavedContent={tab.unsavedContent}
            />
          }
        >
          <div className="some-content">{tab.content}</div>
        </Tab>
      ))}
      <Tab
        id="modified-tabs__tab-new"
        label={<ModifiedTabLabelNew label={newTabLabel} />}
        onClick={handleNewTab}
        onKeyUp={(ev) => ev.keyCode === 32 && handleNewTab()}
        role="button"
      >
        <div className="some-content">{newTabContent}</div>
      </Tab>
    </Tabs>
  );
};

// Return a placeholder if not released and not enabled by feature flag
ModifiedTabs = pkg.checkComponentEnabled(ModifiedTabs, componentName);

ModifiedTabs.propTypes = {
  /**
   * New tab content
   */
  newTabContent: PropTypes.object,
  /**
   * New tab label
   */
  newTabLabel: PropTypes.string,
  /**
   * Optional onCloseTab handler
   */
  onCloseTab: PropTypes.func,
  /**
   * New tab content
   */
  onNewTab: PropTypes.func,
  /**
   * Tabs array containing tab object { id, label, content }
   */
  tabs: PropTypes.array,
};

ModifiedTabs.displayName = componentName;
