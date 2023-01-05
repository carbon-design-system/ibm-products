import React from 'react';

// ----------------------------------------------------
// This is an example showing use of the
// Cascade component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import { Cascade } from '@carbon/ibm-products';

import './_example.scss';

export const Example = () => (
  <Cascade style={{ maxWidth: '728px' }}>
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
  </Cascade>
);
