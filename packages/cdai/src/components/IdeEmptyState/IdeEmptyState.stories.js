//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { storiesOf } from '@storybook/react';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';
import sidebar from './README.md';
import { withInfo } from '@storybook/addon-info';
import { object, select, text, withKnobs } from '@storybook/addon-knobs';
import { IdeEmptyState } from '.';
import { action } from '@storybook/addon-actions';
import customLgImage from './test_assets/custom.lg.svg';
import customSmImage from './test_assets/custom.sm.svg';
import styles from './_storybook.scss';

storiesOf(getComponentLabel('IdeEmptyState'), module)
  .addParameters({ readme: { sidebar } })
  .addParameters({ styles })
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <IdeEmptyState
      {...{
        format: select('format', ['sm', 'lg'], 'lg'),
        image: select(
          'image',
          ['apiError', 'default', 'deploy', 'noSearchResults', 'notAuthorized'],
          'default'
        ),
        title: text('title'),
        body: text('body'),
        button: object('button', {
          kind: 'primary',
          text: 'CHANGE ME',
          onClick: action('Clicked'),
        }),
        links: object('links', [
          { text: 'Custom link 1', url: 'http://ibm.com' },
          {
            text: 'Custom external link 2',
            url: 'http://ibm.com',
            target: '_blank',
          },
        ]),
      }}
    />
  ))
  .add('Custom image: object', () => (
    <IdeEmptyState
      {...{
        image: {
          alt: 'Custom alt',
          className: 'custom-classname',
          src: customLgImage,
        },
      }}
    />
  ))
  .add('Custom image: function', () => (
    <IdeEmptyState
      {...{
        format: 'sm',
        image: (className) => (
          <img
            {...{
              alt: 'Custom alt',
              className,
              src: customSmImage,
            }}
          />
        ),
      }}
    />
  ))
  .add('Custom button: function', () => (
    <IdeEmptyState
      {...{
        button: () => (
          <button type="button" onClick={action('Clicked')}>
            Custom button
          </button>
        ),
      }}
    />
  ))
  .add('Custom links: function', () => (
    <IdeEmptyState
      {...{
        links: object('links', [
          {
            text: 'Custom link whith a function',
            url: '#',
            onClick: () => console.log('This link has a custom function'),
          },
          { text: 'Custom link whithout a function', url: '#' },
        ]),
      }}
    />
  ));
