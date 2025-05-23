// cspell:words grafana

import React from 'react';

// ----------------------------------------------------
// This is an example showing use of the
// FullPageError component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------
import { FullPageError } from '@carbon/ibm-products';
import { Link } from '@carbon/react';
import './_example.scss';
export const Example = () => (
  <FullPageError
    kind="custom"
    children={
      <>
        <Link href={'/'}>– Forwarding Link 1</Link>
        <br />
        <Link href={'/'}>– Forwarding Link 1</Link>
      </>
    }
    title="[Error title]"
    label="Error ###"
    // cSpell:dictionaries lorem-ipsum
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  />
);

export default Example;
