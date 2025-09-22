/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { OptionsTile } from './OptionsTile';
import figma from '@figma/code-connect';

figma.connect(
  OptionsTile,
  'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=36228-14503&t=AL5QssM8KsTELzh9-4',
  {
    props: {
	    title: figma.string('Heading text'),
	    summary: figma.string('Summary text'),
      size: figma.enum('Size', {
        Large: 'lg',
        XL: 'xl',
      }),
    },
    example: (props) => <OptionsTile {...props} />,
  }
);
