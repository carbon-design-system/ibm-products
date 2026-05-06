/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useMemo } from 'react';
import { Button, ToastNotification } from '@carbon/react';
import { breakpoints } from '@carbon/layout';
import { MultiAddSelect } from '../../components/MultiAddSelect';
import { AddSelectItem } from '@carbon/ibm-products-primitives';
import { Tearsheet } from '../../../../../components/Tearsheet/next';
import { AddSelect } from '../../../../../components/AddSelect/next';
import { NoDataEmptyState } from '../../../../../components/EmptyStates';
import { useMatchMedia } from '../../../../../global/js/hooks/useMatchMedia';
import './MultiAddSelect.scss';

// Sample data from MultiAddSelect.stories.jsx Default variant
const sampleItems: AddSelectItem[] = [
  {
    id: '1',
    value: '1',
    title: 'item 1',
    subtitle: 'item 1 subtitle',
    meta: (
      <div>
        <p style={{ fontWeight: 600 }}>HTML support</p>
        <p>Also supports nodes in the meta attribute</p>
      </div>
    ),
  },
  {
    id: '2',
    value: '2',
    title: 'item 2',
    meta: [
      {
        id: 'description',
        title: 'Description',
        value: 'Description text for item 2',
      },
      {
        id: 'secondary_category',
        title: 'Secondary category',
        value: 'Knowledge accelerator',
      },
    ],
  },
  {
    id: '3',
    value: '3',
    title: 'item 3',
    subtitle: 'item 3 subtitle',
  },
];

export const StandardMultiAddSelect = () => {
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
        return sampleItems.find((item) => item.id === id);
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
        return sampleItems.find((item) => item.id === id);
      })
      .filter((item): item is AddSelectItem => item !== undefined);
    setSelectedItems(items);
  };

  const handleSubmit = () => {
    if (selectedIds.length > 0) {
      console.log('Submitted:', { selectedIds, selectedValues });
      handleClose();
      const count = selectedIds.length;
      setNotificationMessage(
        `${count} business term${count > 1 ? 's' : ''} added`
      );
      setShowNotification(true);
    }
  };

  const handleShowInfo = (itemId: string) => {
    const item = sampleItems.find((i) => i.id === itemId);
    if (item && item.meta) {
      setInfoPanel({ item, show: true });
    }
  };

  const handleCloseInfo = () => {
    setInfoPanel({ item: null, show: false });
  };

  return (
    <div className="example-container">
      <h3>Multi Add Select Pattern Example</h3>
      <p>Click the button below to open the multi add select dialog.</p>

      <Button kind="primary" className="launch-button" onClick={handleOpen}>
        Add business terms
      </Button>

      <Tearsheet
        open={open}
        onClose={handleClose}
        variant="wide"
        summaryContentWidth="22.5rem"
      >
        <Tearsheet.Header hideCloseButton>
          <Tearsheet.HeaderContent title="Add business terms">
            <p slot="description">Select business terms from the list below</p>
          </Tearsheet.HeaderContent>
        </Tearsheet.Header>

        <Tearsheet.Body>
          <Tearsheet.MainContent>
            <MultiAddSelect
              items={sampleItems}
              itemsLabel="Business terms"
              globalSearchLabel="Search business terms"
              globalSearchPlaceholder="Find business terms"
              searchResultsTitle="Search results"
              selectedItemIds={selectedIds}
              onItemsSelect={handleSelect}
              onShowInfo={handleShowInfo}
              noResultsTitle="No results"
              noResultsDescription="Try again"
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
                  title="Selected business terms"
                  selectedItems={selectedItems}
                  emptyState={
                    <div style={{ marginBlockStart: '3rem' }}>
                      <NoDataEmptyState
                        illustrationTheme="light"
                        size="sm"
                        title="No business terms selected"
                        subtitle="Select a term to include the full set of the governance artifacts it contains in the governance scope."
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
