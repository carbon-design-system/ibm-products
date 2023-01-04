import React, { useContext } from 'react';
import { Add } from '@carbon/icons-react';
import { UnauthorizedEmptyState } from '@carbon/ibm-products';
import { ThemeContext } from '../../ThemeSelector/ThemeContext';

export const UnauthorizedEmptyStateWrapper = () => {
  const theme = useContext(ThemeContext);
  const useDarkModeIllustration =
    theme.state.currentTheme.value === 'carbon-theme--g90' ||
    theme.state.currentTheme.value === 'carbon-theme--g100';

  return (
    <UnauthorizedEmptyState
      illustrationTheme={useDarkModeIllustration ? 'dark' : 'light'}
      size="sm"
      title="You don't have have permission to view this"
      subtitle="We were unable to retrieve any data."
      action={{
        text: 'Create new',
        onClick: () => console.log('Action click'),
        renderIcon: (props) => <Add {...props} size={20} />,
        iconDescription: 'Add icon',
      }}
      link={{
        text: 'View documentation',
        href: 'https://www.carbondesignsystem.com',
      }}
    />
  );
};
