import React, { useContext, useState } from 'react';
import { render } from 'react-dom';
import { ThemeProvider, ThemeContext } from './Theme/ThemeContext';
import { ThemeDropdown } from './Theme/ThemeDropdown';
import {
  Dropdown,
  RadioButtonGroup,
  RadioButton,
  TextInput,
} from 'carbon-components-react';

import './index.scss';

// config.js enables components that have not yet been reviewed/released
// but which we want to use in their 'canary' form. Note that that has to
// be done in an import so that it happens before all component imports.

import './config'; // must come before @carbon/ibm-cloud-cognitive... imports
import { UserProfileImage } from '@carbon/ibm-cloud-cognitive';

const colors = [
  'light-cyan',
  'dark-cyan',
  'light-gray',
  'dark-gray',
  'light-green',
  'dark-green',
  'light-magenta',
  'dark-magenta',
  'light-purple',
  'dark-purple',
  'light-teal',
  'dark-teal',
];

const App = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [size, setSize] = useState('xlg');
  const [initials, setInitials] = useState('Thomas J. Watson');
  const theme = useContext(ThemeContext);
  const useDarkTheme =
    theme.state.currentTheme.value === 'carbon-theme--g90' ||
    theme.state.currentTheme.value === 'carbon-theme--g100';
  return (
    <div className="app">
      <div className="ccs-color-dropdown">
        <Dropdown
          ariaLabel="Background color dropdown"
          id="bg-color-dropdown"
          items={colors}
          onChange={(event) => setSelectedColor(event.selectedItem)}
          selectedItem={selectedColor}
          label="Select a color"
          titleText="Select a color"
        />
        <RadioButtonGroup
          legendText="Select a size"
          name="radio-button-group"
          defaultSelected={size}
          onChange={(value) => setSize(value)}
        >
          <RadioButton labelText="Medium" value="md" id="medium" />
          <RadioButton labelText="Large" value="lg" id="large" />
          <RadioButton labelText="Extra large" value="xlg" id="extra-large" />
        </RadioButtonGroup>
        <TextInput
          id="user-profile-image-initials-value"
          labelText="Set initials"
          value={initials}
          onChange={(event) => setInitials(event.target.value)}
        />
      </div>
      <UserProfileImage
        backgroundColor={selectedColor}
        theme={useDarkTheme ? 'dark' : 'light'}
        size={size}
        initials={initials}
        tooltipText={initials}
      />
      <ThemeDropdown />
    </div>
  );
};

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
