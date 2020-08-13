/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { breakpoints } from '@carbon/layout';
import marked from 'marked';
import React from 'react';

import readme from '../../../README.md';

const {
  lg: { margin, width },
} = breakpoints;

export const README = () => (
  <main
    dangerouslySetInnerHTML={{ __html: marked(readme) }}
    style={{ margin, maxWidth: width }}
  />
);

export default {
  title: 'Getting Started',
};
