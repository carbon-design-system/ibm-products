/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { Button } from '@carbon/react';
import { SingleAddSelect } from '../components/SingleAddSelect';
import { HierarchicalItem } from '../../../../global/js/utils/AddSelect/add-select-data';
import { Tearsheet } from '../../../../components/Tearsheet/next';

// Sample hierarchical data matching the Web Components example
const sampleItems: HierarchicalItem[] = [
  {
    id: '1',
    title: 'Kansas',
    value: 'kansas',
  },
  {
    id: '2',
    title: 'Texas',
    value: 'texas',
  },
  {
    id: '3',
    title: 'Florida',
    value: 'florida',
  },
  {
    id: '4',
    title: 'California',
    value: 'california',
    children: {
      entries: [
        {
          id: '5',
          title: 'Los Angeles',
          value: 'la',
          children: {
            entries: [
              {
                id: '6',
                title: 'Beverly Hills',
                value: 'bh',
              },
              {
                id: '7',
                title: 'Malibu',
                value: 'malibu',
                children: {
                  entries: [
                    {
                      id: '8',
                      title: 'Malibu Rd',
                      value: 'malibu-rd',
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          id: '9',
          title: 'San Francisco',
          value: 'sf',
        },
      ],
    },
  },
  {
    id: '10',
    title: 'New York',
    value: 'ny',
    children: {
      entries: [
        {
          id: '11',
          title: 'Manhattan',
          value: 'manhattan',
        },
        {
          id: '12',
          title: 'Brooklyn',
          value: 'brooklyn',
        },
      ],
    },
  },
];

export const StandardSingleAddSelect = () => {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleOpen = () => {
    setOpen(true);
    setSelectedId('');
    setSelectedValue('');
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (itemId: string, value: string) => {
    console.log('Selected:', { itemId, value });
    setSelectedId(itemId);
    setSelectedValue(value);
  };

  const handleSubmit = () => {
    if (selectedId) {
      console.log('Submitted:', { selectedId, selectedValue });
      handleClose();
    }
  };

  const handleNavigate = (itemId: string, title: string, parentId: string) => {
    console.log('Navigate to:', { itemId, title, parentId });
  };

  return (
    <div>
      <h3>Single Add Select Pattern Example</h3>
      <p>Click the button below to open the single add select dialog.</p>

      <Button kind="primary" onClick={handleOpen}>
        Select a category
      </Button>

      {selectedValue && (
        <p style={{ marginTop: '1rem' }}>
          <strong>Selected:</strong> {selectedValue}
        </p>
      )}

      <Tearsheet open={open} onClose={handleClose} variant="narrow">
        <Tearsheet.Header>
          <Tearsheet.HeaderContent title="Select category">
            <p slot="description">Choose one category from the list below</p>
          </Tearsheet.HeaderContent>
        </Tearsheet.Header>

        <Tearsheet.Body>
          <Tearsheet.MainContent>
            <SingleAddSelect
              items={sampleItems}
              itemsLabel="Categories"
              globalSearchLabel="Search categories"
              globalSearchPlaceholder="Search..."
              searchResultsTitle="Search results"
              rootBreadcrumbTitle="Categories"
              selectedItemId={selectedId}
              onItemSelect={handleSelect}
              onNavigate={handleNavigate}
              noResultsTitle="No results found"
              noResultsDescription="Try adjusting your search or browse categories"
            />
          </Tearsheet.MainContent>
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
              label: 'Select',
              onClick: handleSubmit,
              disabled: !selectedId,
            },
          ]}
        />
      </Tearsheet>
    </div>
  );
};
