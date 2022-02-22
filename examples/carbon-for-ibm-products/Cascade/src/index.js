import React from 'react';
import { render } from 'react-dom';

// This example uses this CSS build to minimize CodeSandBox transpile times
import '@carbon/ibm-products/css/index-full-carbon.css';
import './_index.scss';

import { Example } from './Example/Example';
import { Button } from 'carbon-components-react';

const handleRestartClick = () =>
  document.getAnimations().forEach((anim) => anim.play());

render(
  <>
    <Button kind="secondary" onClick={handleRestartClick}>
      Restart animations
    </Button>
    <div className="app">
      <Example />
    </div>
  </>,
  document.getElementById('root')
);
