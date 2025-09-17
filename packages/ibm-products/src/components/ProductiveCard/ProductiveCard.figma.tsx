/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { ProductiveCard } from './ProductiveCard';
import figma from '@figma/code-connect';

figma.connect(
  ProductiveCard,
  'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=5970-355091',
  {
    props: {
      actionIcons: figma.string('Action icons'),
      actionsPlacement: figma.enum('Actions placement', {
        top: 'Top',
        bottom: 'Bottom',
      }),
      children: figma.string('Children'),
      className: figma.string('Classname'),
      clickZone: figma.enum('Click zone', {
        one: 'One',
        two: 'Two',
        three: 'Three',
      }),
      decorator: figma.string('Decorator'),
      description: figma.string('Description'),
      iconDescription: figma.string('Icon description'),
      label: figma.string('Label'),
      onClick: figma.string('On click'),
      onKeyDown: figma.string(''),
      onPrimaryButtonClick: figma.string('On primary button click'),
      onSecondaryButtonClick: figma.string('On secondary button click'),
      overflowActions: figma.string('Overflow actions'),
      overflowAriaLabel: figma.string('Overflow actions aria label'),
      primaryButtonDisabled: figma.boolean('Primary button disabled'),
      primaryButtonHref: figma.string('Primary button href'),
      primaryButtonIcon: figma.string('Primary button icon'),
      primaryButtonPlacement: figma.enum('Primary button placement', {
        top: 'Top',
        bottom: 'Bottom',
      }),
      primaryButtonText: figma.string('Primary button text'),
      secondaryButtonHref: figma.string('Secondary button href'),
      secondaryButtonIcon: figma.string('Secondary button icon'),
      secondaryButtonPlacement: figma.enum('Secondary button placement', {
        top: 'Top',
        bottom: 'Bottom',
      }),
      secondaryButtonText: figma.string('Secondary button text'),
      slug: figma.string('Slug'),
      title: figma.string('Title'),
      titleSize: figma.enum('Title size', {
        default: 'Default',
        large: 'Large',
      }),
    },
    example: (props) => <ProductiveCard {...props} />,
  }
);
