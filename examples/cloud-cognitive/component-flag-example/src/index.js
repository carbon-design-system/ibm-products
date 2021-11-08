import React from 'react';
import { render } from 'react-dom';

import './index.scss';

// config.js enables components that have not yet been reviewed/released
// but which we want to use in their 'canary' form. Note that that has to
// be done in an import so that it happens before all component imports.

import './config'; // must come before @carbon/ibm-cloud-cognitive... imports
import { ExampleComponent } from '@carbon/ibm-cloud-cognitive/es';

const App = () => (
  <div className="app">
    <ExampleComponent
      boxedBorder={false}
      borderColor="red"
      primaryButtonLabel="canary"
      secondaryButtonLabel="example"
    />
  </div>
);

render(<App />, document.getElementById('root'));
