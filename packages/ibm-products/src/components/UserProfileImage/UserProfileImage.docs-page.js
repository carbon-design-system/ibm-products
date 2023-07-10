import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';
import * as stories from './UserProfileImage.stories';

const DocsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        story: stories.Default,
      },
      {
        story: stories.WithGroupIcon,
        description: `By passing in icon prop with a value of \`group\`, the avatar will display the group icon`,
      },
      {
        story: stories.WithInitials,
        description: `When passing a display name to the component, the display name will be distilled down to the first and last initials of the display name. \`Thomas Watson\` and \`Thomas J. Watson\` will both display \`TW\` as the initials.`,
      },
    ]}
  />
);

export default DocsPage;
