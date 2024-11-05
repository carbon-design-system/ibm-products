/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';
import * as stories from './CreateSidePanel.stories';

const DocsPage = () => {
  return (
    <StoryDocsPage
      altGuidelinesHref={[
        {
          href: 'https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage/#side-panel',
          label: 'Carbon create flows side panel usage guidelines',
        },
      ]}
      blocks={[
        {
          story: stories.Default,
        },
        {
          title: 'Form validation',
          description: `All forms, including that within the \`CreateSidePanel\` should follow @carbon/ibm-products
guidelines for form validation.

This includes the following:

- The \`Submit\` button in the side panel should be disabled, until all required
  inputs are filled in and valid
- All required inputs should _only_ throw an invalid error _after_ the element
  loses focus
- All optional form fields should have an \`(optional)\` text at the end of the
  input \`labelText\`. Optional should always be in parentheses

You can find more information on how to validate your form fields in
[Carbon's Form usage page](https://www.carbondesignsystem.com/components/form/usage).`,
        },
      ]}
    />
  );
};

export default DocsPage;
