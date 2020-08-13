/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import marked from 'marked';
import React from 'react';

import readme from '../../../README.md';

export const README = () => (
  <main dangerouslySetInnerHTML={{ __html: marked(readme) }} />
);

export default {
  title: 'Getting Started',
};
