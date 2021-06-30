import { ExampleComponent } from '@carbon/ibm-cloud-cognitive';
import React from 'react';
import { render } from 'react-dom';

import '@carbon/ibm-cloud-cognitive/css/index.min.css';

const App = () => <ExampleComponent />;

render(<App />, document.getElementById('root'));
