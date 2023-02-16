import React, { useState } from 'react';

// ----------------------------------------------------
// This is an example showing use of the
// SingleAddSelect component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import { SingleAddSelect } from '@carbon/ibm-products';
import { Button } from 'carbon-components-react';

import { pkg } from '@carbon/ibm-products';
// Must be done before first use of SingleAddSelect
pkg.component.SingleAddSelect = true;

const defaultProps = {
  className: 'placeholder-class',
  description: 'select a category lorem ipsum',
  globalSearchLabel: 'global search label',
  globalSearchPlaceholder: 'Find categories',
  illustrationTheme: 'light',
  items: {
    entries: [
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
    ],
  },
  itemsLabel: 'Categories',
  navIconDescription: 'View children',
  noResultsTitle: 'No results',
  noResultsDescription: 'Try again',
  onCloseButtonText: 'Cancel',
  onSubmit: (selection) => console.log(selection),
  onSubmitButtonText: 'Select',
  searchResultsTitle: 'Search results',
  title: 'Select category',
};

export const Example = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <SingleAddSelect
        {...defaultProps}
        open={open}
        onClose={() => setOpen(false)}
      />
      <Button onClick={() => setOpen(true)}>Launch AddSelect</Button>
    </div>
  );
};
