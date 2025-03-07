/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

import * as stories from './InlineTip.stories';

const DocsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        story: stories.inlineTip,
      },
      {
        story: stories.inlineTipNarrow,
      },
      {
        title: 'Stackblitz example with Animated Media',
        description: `[![Example with Animated media](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/examples/carbon-for-ibm-products/InlineTipWithAnimatedMedia)
`,
      },
    ]}
  />
);

export default DocsPage;
