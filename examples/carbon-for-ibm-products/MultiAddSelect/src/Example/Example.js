import React, { useState } from 'react';

// ----------------------------------------------------
// This is an example showing use of the
// SingleAddSelect component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import { MultiAddSelect } from '@carbon/ibm-products';
import { Button } from 'carbon-components-react';
const blockClass = `c4p--add-select__meta-panel`;

const defaultProps = {
  className: 'placeholder-class',
  clearFiltersText: 'Clear filters',
  closeIconDescription: 'Close',
  columnInputPlaceholder: 'Find',
  description: 'Select business terms from the list',
  globalSearchLabel: 'global search label',
  globalSearchPlaceholder: 'Find business terms',
  illustrationTheme: 'light',
  influencerTitle: 'Selected business terms',
  items: {
    entries: [
      {
        id: '1',
        value: '1',
        title: 'item 1',
        subtitle: 'item 1 subtitle',
        meta: (
          <div className={`${blockClass}-entry`}>
            <p className={`${blockClass}-entry-title`}>html support</p>
            <p className={`${blockClass}-entry-body`}>
              also supports nodes in the meta attribute
            </p>
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
            title: 'description',
            value: 'description text',
          },
          {
            id: 'secondary_category',
            title: 'secondary category',
            value: 'knowledge accelerator',
          },
        ],
      },
      {
        id: '3',
        value: '3',
        title: 'item 3',
        subtitle: 'item 3 subtitle',
      },
    ],
  },
  itemsLabel: 'Business terms',
  metaIconDescription: 'View meta information',
  metaPanelTitle: 'Personal information',
  navIconDescription: 'View children',
  noResultsTitle: 'No results',
  noSelectionDescription:
    'Select a term to include the full set of the governance artifacts it contains in the governance scope.',
  noSelectionTitle: 'No business terms selected',
  noResultsDescription: 'Try again',
  onCloseButtonText: 'Cancel',
  onSubmit: (selections) => console.log(selections),
  onSubmitButtonText: 'Add',
  searchResultsTitle: 'Search results',
  title: 'Add business terms',
};

export const Example = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <MultiAddSelect
        {...defaultProps}
        open={open}
        onClose={() => setOpen(false)}
      />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </div>
  );
};
