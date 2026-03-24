/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { SingleAddSelect } from '../components/SingleAddSelect';

const sampleItems = [
  {
    id: '1',
    title: 'Option 1',
    value: 'option-1',
    subtitle: 'First option',
  },
  {
    id: '2',
    title: 'Option 2',
    value: 'option-2',
    subtitle: 'Second option',
  },
  {
    id: '3',
    title: 'Option 3',
    value: 'option-3',
    subtitle: 'Third option',
  },
  {
    id: '4',
    title: 'Option 4',
    value: 'option-4',
    subtitle: 'Fourth option',
  },
  {
    id: '5',
    title: 'Option 5',
    value: 'option-5',
    subtitle: 'Fifth option',
    disabled: true,
  },
];

export const StandardSingleAddSelect = () => {
  const [selectedId, setSelectedId] = useState<string>('');

  const handleSelect = (itemId: string, value: string) => {
    console.log('Selected:', { itemId, value });
    setSelectedId(itemId);
  };

  return (
    <div style={{ height: '500px' }}>
      <SingleAddSelect
        items={sampleItems}
        itemsLabel="Select an option"
        globalSearchLabel="Search options"
        globalSearchPlaceholder="Search..."
        selectedItemId={selectedId}
        onItemSelect={handleSelect}
      />
    </div>
  );
};

// Made with Bob
