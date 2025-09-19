/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { UserAvatar } from './UserAvatar';
import figma from '@figma/code-connect';

const instances = [
  {
    type: 'Image, xl',
    url: 'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=15368-59380',
    name: 'Miles Davis',
  },
  {
    type: 'Initials, xl',
    url: 'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=15368-59389',
    name: 'Miles Davis',
  },
  {
    type: 'Icon, xl',
    url: 'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=15368-59404',
    name: 'Miles Davis',
  },
];

instances.forEach(({ url, type, ...rest }) => {
  figma.connect(UserAvatar, url, {
    variant: { Type: type },
    props: {
      ...rest,
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
        tooltipText="Miles David, musician"
        tooltipAlignment="bottom"
        className="my-user-avatar"
        {...props}
      />
    ),
  });
});
