/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';
import * as stories from './UserProfileImage.stories';

const DocsPage = () => (
  <StoryDocsPage
    // cspell:disable-next-line
    deprecationNotice="This component will soon be deprecated, Please migrate to [UserAvatar](?path=/docs/ibm-products-components-user-avatar-useravatar--docs#migration-from-userprofileimage)."
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
