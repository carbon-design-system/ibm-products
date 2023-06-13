import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';
import * as stories from './UserProfileImage.stories';

const docsPage = () => (
  <StoryDocsPage
    guidelinesHref="https://pages.github.ibm.com/cdai-design/pal/patterns/user-profile-images/usage"
    hasCodedExample={true}
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
    includeAllStories={true}
  />
);

export default docsPage;
