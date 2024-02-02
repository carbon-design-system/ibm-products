// cspell:words grafana

import React, { useState } from 'react';

// ----------------------------------------------------
// This is an example showing use of the
// SearchBar component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import { SearchBar } from '@carbon/ibm-products';

import './_example.scss';

export const Example = () => {
  const defaultProps = {
    clearButtonLabelText: 'Clear',
    placeHolderText: 'Search...',
    submitLabel: 'Search',
    onChange: (newVal) => console.log('onChange: ', newVal),
    onSubmit: (newVal) => console.log('onSubmit: ', newVal),
  };

  return <SearchBar {...defaultProps} />;
};

export default Example;
