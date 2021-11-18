import { pkg, ExampleComponent } from '@carbon/ibm-cloud-cognitive';

import React from 'react';
import { render } from 'react-dom';

import '@carbon/ibm-cloud-cognitive/css/index.min.css';

// To enable canary component uncomment the following line
// pkg.component.ExampleComponent = true;
const App = () => (
  <ExampleComponent primaryButtonLabel="OK" secondaryButtonLabel="Cancel" />
);

render(<App />, document.getElementById('root'));
