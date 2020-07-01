/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { select, text } from '@storybook/addon-knobs';
import React from 'react';

import { ErrorPage } from '..';

import './_index.scss';

const {
  defaultProps: { errorMessage, errorName, statusCode, title },
} = ErrorPage;

const statusCodes = [403, 404, 500, statusCode];

export const Default = () => (
  <ErrorPage
    errorMessage={text('Error message (errorMessage)', errorMessage)}
    errorName={text('Error name (errorName)', errorName)}
    links={[
      {
        id: 0,
        href: '#',
        text: text('Link text (links[0].text)', 'Link'),
      },
    ]}
    statusCode={select('Status code (statusCode)', statusCodes, statusCodes[0])}
    title={text('Title (title)', title)}
  />
);

export default {
  title: 'Security/ErrorPage',
  component: ErrorPage,
  parameters: { centered: { disable: true } },
};
