/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { TearsheetNarrow } from './TearsheetNarrow';
import figma from '@figma/code-connect';

figma.connect(
  TearsheetNarrow,
  'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=9837%3A338231',
  {
    props: {
      // No matching props could be found for these Figma properties:
      // "buttons": figma.boolean('Buttons'),
      // "layers": figma.boolean('Layers'),
      // "type": figma.enum('Type', {
      //   "Default": "default"
      // })
    },
    example: (props) => <TearsheetNarrow />,
  }
);
