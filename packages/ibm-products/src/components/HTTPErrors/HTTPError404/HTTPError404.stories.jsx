/**
 * Copyright IBM Corp. 2021, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { HTTPError404 } from '.';
import { StoryDocsPage } from '../../../global/js/utils/StoryDocsPage';
import { Annotation } from '../../../../.storybook/Annotation';
import styles from '../_storybook-styles.scss?inline';

const storyClass = 'http-error-stories';

export default {
  title: 'Deprecated/HTTP errors/HTTPError404',
  component: HTTPError404,
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: () => (
        <StoryDocsPage
          altGuidelinesHref="https://pages.github.ibm.com/cdai-design/pal/patterns/http-errors/usage#404-error"
          blocks={[
            {
              story: withAllPropsSet,
            },
          ]}
        />
      ),
    },
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  return (
    <Annotation
      type="deprecation-notice"
      text={
        <div>
          This component is deprecated and will be removed in the next major
          version. Please migrate to{' '}
          <a href="https://ibm-products.carbondesignsystem.com/?path=/docs/ibm-products-patterns-full-page-error-fullpageerror--docs">
            FullPageError
          </a>{' '}
          by running{' '}
          <code>
            npx @carbon/upgrade migrate ibm-products-update-http-errors --write
          </code>
        </div>
      }
    >
      <div className={`${storyClass}__viewport`}>
        <HTTPError404 {...args} />
      </div>
    </Annotation>
  );
};

/**
 * TODO: Declare one or more examples per template.
 * NOTE: Complete list of examples should match designed use cases
 */
export const withAllPropsSet = Template.bind({});
withAllPropsSet.args = {
  errorCodeLabel: 'Error 404',
  title: 'Page not found',
  description: 'The page you are looking for was not found.',
  links: [
    {
      text: 'Carbon Design System',
      href: 'https://www.carbondesignsystem.com',
    },
    {
      text: 'Carbon for IBM Products component library',
      href: 'https://github.com/carbon-design-system/ibm-products',
    },
  ],
};
