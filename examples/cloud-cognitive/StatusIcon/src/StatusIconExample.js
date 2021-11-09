import React, { useState, useContext } from 'react';
import {
  Dropdown,
  RadioButtonGroup,
  RadioButton,
} from 'carbon-components-react';

import { StatusIcon } from '@carbon/ibm-cloud-cognitive/es/components/StatusIcon';
import { ThemeContext } from './Theme/ThemeContext';

const kinds = [
  'fatal',
  'critical',
  'major-warning',
  'minor-warning',
  'undefined',
  'unknown',
  'normal',
  'info',
  'in-progress',
  'running',
  'pending',
];

export const StatusIconExample = () => {
  const theme = useContext(ThemeContext);
  const [selectedStatusIconKind, setSelectedStatusIconKind] = useState(
    kinds[0]
  );
  const [size, setSize] = useState('xlg');
  const useDarkThemeStatusIcon =
    theme.state.currentTheme.value === 'carbon-theme--g90' ||
    theme.state.currentTheme.value === 'carbon-theme--g100';
  return (
    <>
      <div className="ccs-status-dropdown">
        <Dropdown
          ariaLabel="Select a status icon"
          id="status-icon-kind-dropdown"
          items={kinds}
          onChange={(event) => setSelectedStatusIconKind(event.selectedItem)}
          selectedItem={selectedStatusIconKind}
          label="Select a Status icon"
          titleText="Select a Status icon"
        />
        <RadioButtonGroup
          legendText="Select a size"
          name="radio-button-group"
          defaultSelected={size}
          onChange={(value) => setSize(value)}
        >
          <RadioButton labelText="Small" value="sm" id="small" />
          <RadioButton labelText="Medium" value="md" id="medium" />
          <RadioButton labelText="Large" value="lg" id="large" />
          <RadioButton labelText="Extra large" value="xlg" id="extra-large" />
        </RadioButtonGroup>
      </div>
      <StatusIcon
        iconDescription={selectedStatusIconKind}
        kind={selectedStatusIconKind}
        size={size}
        theme={useDarkThemeStatusIcon ? 'dark' : 'light'}
      />
    </>
  );
};
