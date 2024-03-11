// cspell:words grafana

import React from 'react';

// ----------------------------------------------------
// This is an example showing use of the
// AboutModal component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import { FullPageError } from '@carbon/ibm-products';

import './_example.scss';

export const Example = () => (
  <div className="example">
    <CommonHeader className="header-area" />
    <div className="content-area">
      <FullPageError />
    </div>
  </div>
);

export default Example;
