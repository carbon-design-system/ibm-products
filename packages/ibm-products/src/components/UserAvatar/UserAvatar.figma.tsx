/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { User } from '@carbon/react/icons';
import figma from '@figma/code-connect';
import { UserAvatar } from './UserAvatar';

figma.connect(
  UserAvatar,
  'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=15368-59379&t=lbewdWdJ4JB5izcw-4',
  {
    variant: { Type: 'Image' },
    props: {
      name: figma.string('Initials text'),
      size: figma.enum('Size', {
        'Extra large': 'xl',
        Large: 'lg',
        Medium: 'md',
        Small: 'sm',
      }),
    },
    example: (props) => (
      <UserAvatar
        image="/path/to/image"
        imageDescription="Alt text for image"
        tooltipAlignment="bottom"
        tooltipText={`${props.name}, more info here`}
        {...props}
      />
    ),
  }
);

figma.connect(
  UserAvatar,
  'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=15368-59379&t=lbewdWdJ4JB5izcw-4',
  {
    // variant: { Type: 'Icon' },
    // props: {
    //   name: figma.string('Initials text'),
    //   size: figma.enum('Size', {
    //     'Extra large': 'xl',
    //     Large: 'lg',
    //     Medium: 'md',
    //     Small: 'sm',
    //   }),
    },
    example: (props) => (
      <UserAvatar
        renderIcon={User}
        tooltipAlignment="bottom"
        tooltipText={`${props.name}, more info here`}
        {...props}
      />
    ),
  }
);
