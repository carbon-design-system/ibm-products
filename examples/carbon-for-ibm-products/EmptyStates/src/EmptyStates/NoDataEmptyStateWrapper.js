import React, { useContext } from 'react';
import { Add20 } from '@carbon/icons-react';
import { NoDataEmptyState } from '@carbon/ibm-cloud-cognitive';
import { ThemeContext } from '../Theme/ThemeContext';

export const NoDataEmptyStateWrapper = () => {
  const theme = useContext(ThemeContext);
  const useDarkModeIllustration =
    theme.state.currentTheme.value === 'carbon-theme--g90' ||
    theme.state.currentTheme.value === 'carbon-theme--g100';

  return (
    <NoDataEmptyState
      illustrationTheme={useDarkModeIllustration ? 'dark' : 'light'}
      size="sm"
      title="You don’t currently have any clusters"
      subtitle="We were unable to retrieve any data."
      action={{
        text: 'Create new',
        onClick: () => console.log('Action click'),
        renderIcon: Add20,
        iconDescription: 'Add icon',
      }}
      link={{
        text: 'View documentation',
        href: 'https://www.carbondesignsystem.com',
      }}
    />
  );
};
