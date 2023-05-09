import React from 'react';

// ----------------------------------------------------
// This is an example showing use of the
// Cascade component
// from the @carbon/ibm-products component library.
// ----------------------------------------------------

import { Cascade } from '@carbon/ibm-products';
import { Button } from '@carbon/react';

import './_example.scss';

export const Example = () => {
  const handleRestartClick = () =>
    document.getAnimations().forEach((anim) => anim.play());

  return (<>      
    <Button kind="secondary" onClick={handleRestartClick}>
      Restart animations
    </Button>

    <Cascade style={{ 'max-width': '728px' }}>
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
      <div className="box" />
    </Cascade>
    </>  
  );
}

export default Example;
