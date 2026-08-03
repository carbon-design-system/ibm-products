/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';
import * as stories from './CreateModal.stories';

const DocsPage = () => {
  return (
    <StoryDocsPage
      deprecationNotice="This component is deprecated and will be removed in the next major version."
      altDescription="The `CreateModal` component provides a way for a user to quickly generate a new resource. It is triggered by a user's action, appears on top of the main page content, and is persistent until dismissed. The purpose of this modal should be immediately apparent to the user, with a clear and obvious path to completion."
      altGuidelinesHref="https://pages.github.ibm.com/carbon/ibm-products/patterns/create-flows/usage#modal"
      blocks={[
        {
          story: stories.Default,
        },
        {
          title: 'Form validation',
          description: `All forms, including that within the \`CreateModal\` should follow @carbon/ibm-products guidelines
for form validation.

This includes the following:

- The \`Submit\` button in the modal should be disabled, until all required inputs
  are filled in and valid
- All required inputs should _only_ throw an invalid error _after_ the element
  loses focus
- All optional form fields should have an \`(optional)\` text at the end of the
  input \`labelText\`. Optional should always be in parentheses

You can find more information on how to validate your form fields in
[Carbon's Form usage page](https://www.carbondesignsystem.com/components/form/usage).`,
        },
        {
          title: 'Overriding Carbon theme',
          description: `The design recommendation is to use a dark theme for the CreateModal if the
application is currently using a light theme, and vice versa. The theme applied
to the CreateModal can easily be customized as follows:

In SCSS:`,
          source: {
            language: 'css',
            code: `  .#{$pkg-prefix}--create-modal {
    @include carbon--theme(
      $theme: $carbon--theme--g90
    );
  }`,
          },
        },
        {
          description: `Alternatively, the required Carbon theme can be set as above in a custom CSS
class which is then applied to the CreateModal using the \`className\` prop.`,
        },
      ]}
    />
  );
};

export default DocsPage;
