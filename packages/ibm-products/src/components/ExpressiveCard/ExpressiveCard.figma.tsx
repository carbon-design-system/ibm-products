/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { ExpressiveCard } from './ExpressiveCard';
import figma from '@figma/code-connect';

figma.connect(
  ExpressiveCard,
  'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=9053-414333',
  {
    props: {
      actionIcons: figma.instance('Action icons'),
      decorator: figma.instance('Decorator'),
      description: figma.string('Description'),
      label: figma.string('Label'),
      media: figma.instance('Media'),
      mediaPosition: figma.enum('Options', {
        top: 'Top',
        left: 'Left',
      }),
      pictogram: figma.instance('Pictogram'),
      primaryButtonIcon: figma.instance('Primary button icon'),
      primaryButtonKind: figma.enum('Primary button kind', {
        primary: 'Primary',
        ghost: 'Ghost',
      }),
      primaryButtonText: figma.string('Primary button text'),
      secondaryButtonIcon: figma.instance('Secondary button icon'),
      secondaryButtonKind: figma.enum('Secondary button kind', {
        secondary: 'Secondary',
        ghost: 'Ghost',
      }),
      secondaryButtonText: figma.string('Secondary button text'),
      slug: figma.instance('Slug'),
      title: figma.string('Title'),
    },
    example: (props) => <ExpressiveCard {...props} />,
  }
);
