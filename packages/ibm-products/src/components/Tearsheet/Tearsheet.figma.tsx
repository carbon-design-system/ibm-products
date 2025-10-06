/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { Tearsheet } from './Tearsheet';
import figma from '@figma/code-connect';

figma.connect(
  Tearsheet,
  'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=9837%3A338113',
  {
    props: {
      // No matching props could be found for these Figma properties:
      // "buttons": figma.boolean('Buttons'),
      // "rightPanel": figma.boolean('Right panel'),
      // "leftPanel": figma.boolean('Left panel'),
      // "layers": figma.boolean('Layers'),
      // "size": figma.enum('Size', {
      //   "Max (1584px)": "max--1584px-",
      //   "X-Large (1312px)": "x-large--1312px-",
      //   "Large (1056px)": "large--1056px-"
      // })
    },
    example: (props) => <Tearsheet />,
  }
);
