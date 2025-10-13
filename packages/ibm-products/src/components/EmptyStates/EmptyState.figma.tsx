/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { EmptyState } from './EmptyState';
import figma from '@figma/code-connect';
import { Add } from '@carbon/icons-react';

figma.connect(
  EmptyState,
  'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=420-2434&t=lbewdWdJ4JB5izcw-4',
  {
    props: {
      action: figma.boolean('Button', {
        true: {
          text: 'Button',
          onClick: () => console.log("clicked empty state action button'),"),
          renderIcon: (props) => <Add size={20} {...props} />,
          iconDescription: 'Add icon',
        },
        false: undefined,
      }),
      link: figma.boolean('Link', {
        true: {
          text: 'Link',
          href: 'https://www.carbondesignsystem.com',
          target: '_blank',
        },
        false: undefined,
      }),
      size: figma.enum('Size', {
        Large: 'lg',
        Small: 'sm',
      }),
      illustrationPosition: figma.enum('Illustration position', {
        Top: 'top',
        Right: 'right',
        Left: 'left',
        Bottom: 'bottom',
      }),
      illustration: figma.boolean('Illustration', {
        true: './path/to/illustration.svg',
        false: undefined,
      }),
      title: figma.string('Title text'),
      subtitle: figma.string('Subtitle text'),
    },
    example: (props) => (
      <EmptyState
        title={props.title}
        subtitle={props.subtitle}
        size={props.size}
        illustrationPosition={props.illustrationPosition}
        illustration={props.illustration}
        action={props.action}
        link={props.link}
      ></EmptyState>
    ),
  }
);
