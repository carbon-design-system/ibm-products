//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@carbon/react';
import { ModifiedTabLabelWithClose } from './ModifiedTabLabelWithClose';
import { ModifiedTabLabelNew } from './ModifiedTabLabelNew';

import { pkg } from '../../settings';
const blockClass = `${pkg.prefix}--modified-tabs`;
const componentName = 'ModifiedTabs';

// Default values for props
const defaults = {
  newTabLabel: 'New tab',
  newTabContent: 'Your new tab will be here soon',
  onNewTab: undefined,
  onCloseTab: undefined,
  tabs: [],
};

export let ModifiedTabs = forwardRef(
  (
    {
      className,
      tabs = defaults.tabs,
      newTabLabel = defaults.newTabLabel,
      newTabContent = defaults.newTabContent,
      onNewTab = defaults.onNewTab,
      onCloseTab = defaults.onCloseTab,
      tabListAriaLabel,
    },
    ref
  ) => {
    const tabsRef = useRef();
    const localRef = ref || tabsRef;

    const handleNewTab = () => {
      if (onNewTab) {
        onNewTab();
        setTimeout(() => {
          // set focus to the new tab
          const addNewTabButton = localRef.current.querySelector(
            `.${blockClass}__tab-new`
          );
          const tab = addNewTabButton?.previousSibling;
          tab?.focus();
        });
      }
    };

    const handleClose = (id) => {
      if (onCloseTab) {
        onCloseTab(id);
      }
    };

    return (
      <div className={cx(blockClass, className)} ref={localRef}>
        <Tabs className="modified-tabs">
          <TabList aria-label={tabListAriaLabel}>
            {tabs.map((tab) => (
              <Tab key={tab.id}>
                <ModifiedTabLabelWithClose
                  label={tab.label}
                  onClose={() => handleClose(tab.id)}
                  unsavedContent={tab.unsavedContent}
                />
              </Tab>
            ))}
            <Tab
              id="modified-tabs__tab-new"
              onClick={handleNewTab}
              onKeyUp={(ev) => ev.keyCode === 32 && handleNewTab()}
              role="button"
              className={`${blockClass}__tab-new`}
            >
              <ModifiedTabLabelNew label={newTabLabel} />
            </Tab>
          </TabList>
          <TabPanels>
            {tabs.map((tab) => (
              <TabPanel key={tab.id} id={tab.id}>
                <div className={`${blockClass}__tab-content`}>
                  {tab.content?.()}
                </div>
              </TabPanel>
            ))}
            <TabPanel>
              <div className={`${blockClass}__tab-content`}>
                {newTabContent}
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    );
  }
);

// Return a placeholder if not released and not enabled by feature flag
ModifiedTabs = pkg.checkComponentEnabled(ModifiedTabs, componentName);

ModifiedTabs.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
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
   * Tab list aria label, passed to Carbon TabList
   */
  tabListAriaLabel: PropTypes.string.isRequired,
  /**
   * Tabs array containing tab object { id, label, content }
   */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.node,
      content: PropTypes.func,
      unsavedContent: PropTypes.bool,
    })
  ).isRequired,
};

ModifiedTabs.displayName = componentName;
