//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { storiesOf } from '@storybook/react';
import IDECardReadme from './README.md';
import {
  defaultProps,
  linkCard,
  customCard,
  nodeContentCard,
  disabledCard,
  externalLinkCard,
  showExternalLinkIconCard,
} from './test_assets/testProps.js';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';
import styles from './_storybook.scss';
import { IdeCard } from '.';

storiesOf(getComponentLabel('IdeCard'), module)
  .addParameters({
    readme: {
      sidebar: IDECardReadme,
    },
  })
  .addParameters({ styles })
  .add('Standard card size', () => <IdeCard {...defaultProps} />, {
    info: {
      text:
        'Core/minimum configuration. Use this to enable the header elements, but then add your own content below. Useful if you do not require tiles.',
    },
  })
  .add(
    'Large card size',
    () => <IdeCard {...defaultProps} cardSize={'large'} />,
    {
      info: {
        text:
          'Core/minimum configuration. Use this to enable the header elements, but then add your own content below. Useful if you do not require tiles.',
      },
    }
  )
  .add('Link card', () => <IdeCard {...linkCard} />, {
    info: {
      text:
        'Core/minimum configuration. Use this to enable the header elements, but then add your own content below. Useful if you do not require tiles.',
    },
  })
  .add('External link card', () => <IdeCard {...externalLinkCard} />, {
    info: {
      text:
        'Core/minimum configuration. Use this to enable the header elements, but then add your own content below. Useful if you do not require tiles.',
    },
  })
  .add(
    'Show external link icon card',
    () => <IdeCard {...showExternalLinkIconCard} />,
    {
      info: {
        text:
          'Core/minimum configuration. Use this to enable the header elements, but then add your own content below. Useful if you do not require tiles.',
      },
    }
  )
  .add(
    'With custom content below heading',
    () => <IdeCard {...nodeContentCard} />,
    {
      info: {
        text:
          'Use this to enable the header elements, but then add your own content below. Useful if you do not require tiles.',
      },
    }
  )
  .add('With custom content', () => <IdeCard {...customCard} />, {
    info: {
      text:
        'Core/minimum configuration. Complete removes the tile presentation.',
    },
  })
  .add(
    'Standard card size - disabled',
    () => (
      <div>
        <IdeCard {...disabledCard} />
      </div>
    ),
    {
      info: {
        text:
          'Core/minimum configuration. Use this to enable the header elements, but then add your own content below. Useful if you do not require tiles.',
      },
    }
  );
