/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { sectionTitle } from '../../config';
import { ErrorPage } from '..';
import styles from './_index.scss';

export const Default = (props) => <ErrorPage {...props} />;

const {
  defaultProps: { backgroundImage, labels, statusCode, ...defaultProps },
} = ErrorPage;

const statusCodes = [403, 404, 500, statusCode];

export default {
  title: `${sectionTitle}/ErrorPage`,
  component: ErrorPage,
  parameters: { layout: 'fullscreen', styles },
  args: {
    ...defaultProps,
    links: [
      {
        id: '0',
        href: '#',
        text: 'Link',
      },
    ],
    statusCode: statusCodes[0],
  },
  argTypes: {
    statusCode: {
      control: { type: 'select', options: statusCodes },
    },
  },
};
