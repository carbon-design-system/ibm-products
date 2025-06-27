/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';

const DocsPage = () => {
  return (
    <StoryDocsPage
      altGuidelinesHref={[
        {
          href: 'https://pages.github.ibm.com/carbon/ibm-products/patterns/delete-and-remove/usage/',
          label: 'Usage guidelines',
        },
        {
          href: 'https://www.carbondesignsystem.com/components/modal/usage',
          label: 'Carbon modal usage guidelines',
        },
        {
          href: 'https://react.carbondesignsystem.com/?path=/docs/components-modal',
          label: 'Carbon modal documentation',
        },
      ]}
    />
  );
};

export default DocsPage;
