//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IDEFilterReadme from './README.md';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';
import styles from './_storybook.scss';
import { IdeFilter } from '.';
import { options, aceOptions } from './__fixtures__/options';
import { Idea16 } from '@carbon/icons-react';

storiesOf(getComponentLabel('IdeFilter'), module)
  .addParameters({
    readme: {
      sidebar: IDEFilterReadme,
    },
  })
  .addParameters({ styles, layout: 'fullscreen' })
  .add(
    'default example',
    () => (
      <div style={{ margin: '2rem 1rem 1rem 1rem' }}>
        <IdeFilter
          onChange={action('onChange')}
          options={options}
          placeholderText="Search for assets, people, tags or types..."
        />
      </div>
    ),
    {
      info: {
        text: 'Shows an IDE filter component.',
      },
    }
  )
  .add(
    'example with ACE categories',
    () => (
      <div style={{ margin: '2rem 1rem 1rem 1rem' }}>
        <IdeFilter
          onChange={action('onChange')}
          options={aceOptions}
          placeholderText="Search..."
          searchForText="Search ACE for"
        />
      </div>
    ),
    {
      info: {
        text: 'Shows an IDE filter component with ACE content.',
      },
    }
  )
  .add(
    'light example',
    () => (
      <div style={{ margin: '2rem 1rem 1rem 1rem' }}>
        <IdeFilter
          light
          onChange={action('onChange')}
          options={options}
          placeholderText="Search for assets, people, tags or types..."
        />
      </div>
    ),
    {
      info: {
        text: 'Shows an IDE filter component.',
      },
    }
  )
  .add(
    'custom icon',
    () => {
      const CustomIcon = (props) => <Idea16 {...props} />;
      return (
        <div style={{ margin: '2rem 1rem 1rem 1rem' }}>
          <IdeFilter
            onChange={action('onChange')}
            options={options}
            placeholderText="Search for assets, people, tags or types..."
            searchIcon={CustomIcon}
          />
        </div>
      );
    },
    {
      info: {
        text: 'Shows an IDE filter component.',
      },
    }
  );
