/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import styles from './_story-styles.scss?inline';
import DocsPage from './DeleteAndRemove.mdx';
import {
  HighImpactDeletionExample,
  HighImpactDeletionWithConnectedItemsExample,
  HighImpactBatchDeletionExample,
  MediumImpactDeletionExample,
  LowImpactDeletionExample,
} from './example/components/DeleteAndRemoveExamples';

export default {
  title: 'Patterns/Delete and remove',
  component: () => {},
  tags: ['autodocs'],
  parameters: {
    styles,
    docs: {
      page: DocsPage,
    },
  },
};

const HighImpactDeletionPattern = (args) => {
  return <HighImpactDeletionExample {...args} />;
};

export const highImpactDeletion = HighImpactDeletionPattern.bind({});
highImpactDeletion.storyName = 'High impact deletion';
highImpactDeletion.args = {};

const HighImpactDeletionWithConnectedItemsPattern = (args) => {
  return <HighImpactDeletionWithConnectedItemsExample {...args} />;
};

export const highImpactDeletionWithConnectedItems =
  HighImpactDeletionWithConnectedItemsPattern.bind({});
highImpactDeletionWithConnectedItems.storyName =
  'Deletion with connected items';
highImpactDeletionWithConnectedItems.args = {};

const HighImpactBatchDeletionPattern = (args) => {
  return <HighImpactBatchDeletionExample {...args} />;
};

export const highImpactBatchDeletion = HighImpactBatchDeletionPattern.bind({});
highImpactBatchDeletion.storyName = 'Batch deletion';
highImpactBatchDeletion.args = {};

const MediumImpactDeletionPattern = (args) => {
  return <MediumImpactDeletionExample {...args} />;
};

export const mediumImpactDeletion = MediumImpactDeletionPattern.bind({});
mediumImpactDeletion.storyName = 'Medium impact deletion';
mediumImpactDeletion.args = {};

const LowImpactDeletionPattern = (args) => {
  return <LowImpactDeletionExample {...args} />;
};

export const lowImpactDeletion = LowImpactDeletionPattern.bind({});
lowImpactDeletion.storyName = 'Low impact deletion';
lowImpactDeletion.args = {};
