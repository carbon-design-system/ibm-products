import React, { useState } from 'react';
import { render } from 'react-dom';
import { Dropdown } from 'carbon-components-react';
import { ThemeProvider } from './Theme/ThemeContext';

import './index.scss';

// config.js enables components that have not yet been reviewed/released
// but which we want to use in their 'canary' form. Note that that has to
// be done in an import so that it happens before all component imports.

import './config'; // must come before @carbon/ibm-cloud-cognitive... imports
import { DefaultEmptyStateWrapper } from './EmptyStates/DefaultEmptyStateWrapper';
import { ErrorEmptyStateWrapper } from './EmptyStates/ErrorEmptyStateWrapper';
import { NotificationsEmptyStateWrapper } from './EmptyStates/NotificationsEmptyWrapper';
import { NoDataEmptyStateWrapper } from './EmptyStates/NoDataEmptyStateWrapper';
import { NoTagsEmptyStateWrapper } from './EmptyStates/NoTagsEmptyStateWrapper';
import { NotFoundEmptyStateWrapper } from './EmptyStates/NotFoundEmptyStateWrapper';
import { UnauthorizedEmptyStateWrapper } from './EmptyStates/UnauthorizedEmptyStateWrapper';
import { ThemeDropdown } from './Theme/ThemeDropdown';

const App = () => {
  const emptyStateOptions = [
    'Default',
    'Error',
    'No data',
    'No tags',
    'Not found',
    'Notification',
    'Unauthorized',
  ];
  const [selectedEmptyState, setSelectedEmptyState] = useState();

  const renderSelectedEmptyState = () => {
    switch (selectedEmptyState) {
      case 'Default':
        return <DefaultEmptyStateWrapper />;
      case 'Error':
        return <ErrorEmptyStateWrapper />;
      case 'No data':
        return <NoDataEmptyStateWrapper />;
      case 'No tags':
        return <NoTagsEmptyStateWrapper />;
      case 'Not found':
        return <NotFoundEmptyStateWrapper />;
      case 'Notification':
        return <NotificationsEmptyStateWrapper />;
      case 'Unauthorized':
        return <UnauthorizedEmptyStateWrapper />;
      default:
        return <ErrorEmptyStateWrapper />;
    }
  };

  return (
    <div className="app">
      <Dropdown
        ariaLabel="Empty state"
        id="empty-states"
        items={emptyStateOptions}
        onChange={(event) => setSelectedEmptyState(event.selectedItem)}
        selectedItem={selectedEmptyState || emptyStateOptions[1]}
        label="Choose empty state"
        titleText="Choose empty state"
      />
      <div className="empty-state-wrapper">{renderSelectedEmptyState()}</div>
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
