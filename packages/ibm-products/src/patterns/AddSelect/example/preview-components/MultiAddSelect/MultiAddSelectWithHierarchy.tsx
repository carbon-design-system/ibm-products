/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useMemo } from 'react';
import { Button, ToastNotification } from '@carbon/react';
import { breakpoints } from '@carbon/layout';
import { AddSelectItem, AddSelectData } from '@carbon/ibm-products-primitives';
import { Tearsheet } from '../../../../../components/Tearsheet/next';
import { AddSelect } from '../../../../../components/AddSelect/next';
import { NoDataEmptyState } from '../../../../../components/EmptyStates';
import { useMatchMedia } from '../../../../../global/js/hooks/useMatchMedia';
import { Document } from '@carbon/react/icons';
import { MultiAddSelectWithHierarchy as MultiAddSelectHierarchyComponent } from '../../components/MultiAddSelectWithHierarchy';
import './MultiAddSelect.scss';
import './MultiAddSelectWithHierarchy.scss';

// Hierarchical data from MultiAddSelect.stories.jsx WithHierarchy variant
const hierarchicalItems: AddSelectItem[] = [
  {
    id: '1',
    value: 'folder 1',
    title: 'folder 1',
    children: {
      entries: [
        {
          id: '1-1',
          value: 'file1.pdf',
          title: 'file1.pdf',
          fileType: 'pdf',
          size: '100',
          icon: (props) => <Document size={16} {...props} />,
          tag: 'business',
          children: {
            entries: [
              {
                id: '9000',
                value: '9000.html',
                title: '9000.html',
                fileType: 'html',
                size: '9000',
                icon: (props) => <Document size={16} {...props} />,
              },
            ],
          },
        },
        {
          id: '1-2',
          value: 'index.js',
          title: 'index.js',
          fileType: 'js',
          size: '200',
          icon: (props) => <Document size={16} {...props} />,
        },
        {
          id: '1-3',
          value: 'sitemap.xml',
          title: 'sitemap.xml',
          fileType: 'xml',
          size: '10',
          icon: (props) => <Document size={16} {...props} />,
        },
      ],
    },
  },
  {
    id: '2',
    value: 'folder 2',
    title: 'folder 2',
    children: {
      entries: [
        {
          id: '7000',
          value: '7000.html',
          title: '7000.html',
          fileType: 'html',
          size: '7000',
          icon: (props) => <Document size={16} {...props} />,
        },
      ],
    },
  },
];

export const MultiAddSelectWithHierarchy = () => {
  const [open, setOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<AddSelectItem[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [infoPanel, setInfoPanel] = useState<{
    item: AddSelectItem | null;
    show: boolean;
  }>({ item: null, show: false });

  // Initialize data manager
  const dataManager = useMemo(() => {
    const manager = new AddSelectData();
    manager.setItems(hierarchicalItems);
    return manager;
  }, []);

  // Calculate button size based on screen size
  const smMediaQuery = `(max-width: ${breakpoints.md.width})`;
  const isSm = useMatchMedia(smMediaQuery);
  const buttonSize = isSm ? 'xl' : '2xl';

  const handleOpen = () => {
    setOpen(true);
    setSelectedIds([]);
    setSelectedValues([]);
    setSelectedItems([]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (itemIds: string[], values: string[]) => {
    console.log('Selected:', { itemIds, values });
    setSelectedIds(itemIds);
    setSelectedValues(values);

    // Update selected items for display
    const items = itemIds
      .map((id) => {
        return dataManager.getItem(id);
      })
      .filter((item): item is AddSelectItem => item !== undefined);
    setSelectedItems(items);
  };

  const handleRemoveItem = (itemId: string) => {
    const newIds = selectedIds.filter((id) => id !== itemId);
    const newValues = selectedValues.filter(
      (_, index) => selectedIds[index] !== itemId
    );
    setSelectedIds(newIds);
    setSelectedValues(newValues);

    const items = newIds
      .map((id) => {
        return dataManager.getItem(id);
      })
      .filter((item): item is AddSelectItem => item !== undefined);
    setSelectedItems(items);
  };

  const handleSubmit = () => {
    if (selectedIds.length > 0) {
      console.log('Submitted:', { selectedIds, selectedValues });
      handleClose();
      const count = selectedIds.length;
      setNotificationMessage(`${count} item${count > 1 ? 's' : ''} added`);
      setShowNotification(true);
    }
  };

  const handleShowInfo = (itemId: string) => {
    const item = dataManager.getItem(itemId);
    if (item && item.meta) {
      setInfoPanel({ item, show: true });
    }
  };

  const handleCloseInfo = () => {
    setInfoPanel({ item: null, show: false });
  };

  return (
    <div className="example-container">
      <h3>Multi Add Select with Hierarchy Pattern Example</h3>
      <p>
        Click the button below to open the multi add select dialog with
        hierarchical navigation. Columns are automatically generated
        side-by-side as you navigate.
      </p>

      <Button kind="primary" className="launch-button" onClick={handleOpen}>
        Add files
      </Button>

      <Tearsheet
        open={open}
        onClose={handleClose}
        variant="wide"
        summaryContentWidth="22.5rem"
      >
        <Tearsheet.Header hideCloseButton>
          <Tearsheet.HeaderContent title="Add files">
            <p slot="description">
              Select files from the folders below. Click the chevron to navigate
              into folders.
            </p>
          </Tearsheet.HeaderContent>
        </Tearsheet.Header>

        <Tearsheet.Body>
          <Tearsheet.MainContent>
            <MultiAddSelectHierarchyComponent
              items={hierarchicalItems}
              itemsLabel="Files"
              globalSearchLabel="Search files"
              globalSearchPlaceholder="Find files"
              searchResultsTitle="Search results"
              selectedItemIds={selectedIds}
              onItemsSelect={handleSelect}
              onShowInfo={handleShowInfo}
              noResultsTitle="No results"
              noResultsDescription="Try again"
              columnSearchPlaceholder="Find"
            />
          </Tearsheet.MainContent>

          <Tearsheet.SummaryContent className="summary-content-no-padding">
            <AddSelect.SidePanel width="default">
              {infoPanel.show && infoPanel.item ? (
                <AddSelect.ItemInfoPanel
                  title="Item details"
                  item={infoPanel.item.meta}
                  onClose={handleCloseInfo}
                  closeIconDescription="Close details"
                />
              ) : (
                <AddSelect.SelectionSummaryPanel
                  title="Selected files"
                  selectedItems={selectedItems}
                  emptyState={
                    <div style={{ marginBlockStart: '3rem' }}>
                      <NoDataEmptyState
                        illustrationTheme="light"
                        size="sm"
                        title="No files selected"
                        subtitle="Select files to include them in your selection."
                      />
                    </div>
                  }
                >
                  {selectedItems.map((item) => (
                    <AddSelect.SelectionSummaryPanelItem
                      key={item.id}
                      item={item}
                      onRemove={handleRemoveItem}
                      useAccordion={true}
                    />
                  ))}
                </AddSelect.SelectionSummaryPanel>
              )}
            </AddSelect.SidePanel>
          </Tearsheet.SummaryContent>
        </Tearsheet.Body>

        <Tearsheet.Footer
          actions={[
            {
              kind: 'secondary',
              label: 'Cancel',
              onClick: handleClose,
            },
            {
              kind: 'primary',
              label: 'Add',
              onClick: handleSubmit,
              disabled: selectedIds.length === 0,
            },
          ]}
          buttonSize={buttonSize}
        />
      </Tearsheet>

      {showNotification && (
        <ToastNotification
          aria-label="closes notification"
          caption={new Date().toLocaleTimeString()}
          className="notification"
          kind="success"
          lowContrast
          onClose={() => setShowNotification(false)}
          role="status"
          statusIconDescription="notification"
          subtitle={notificationMessage}
          title="Success"
        />
      )}
    </div>
  );
};

// Made with Bob
