/**
 * @file Important content area skeleton stories.
 * @copyright IBM Security 2019 - 2021
 */

import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../../.storybook';

import { ICASkeleton } from '../../..';

storiesOf(components('ICA'), module).add('Skeleton', () => <ICASkeleton />);
