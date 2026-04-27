/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { AddSelect } from '../AddSelect/AddSelect';
import styles from '../_storybook-styles.scss?inline';

import mdx from './AddSelectBreadcrumbs.mdx';

const DefaultStory = () => {
  const [path, setPath] = useState([
    { id: 'root', title: 'All Items' },
    { id: 'category-1', title: 'Category 1' },
    { id: 'subcategory-1', title: 'Subcategory 1' },
  ]);

  const handleBreadcrumbClick = (index: number) => {
    // Navigate back to the clicked level
    setPath(path.slice(0, index + 1));
    console.log('Navigated to:', path[index].title);
  };

  return (
    <div className="add-select-story-variant-container">
      <h4>Breadcrumb navigation</h4>
      <AddSelect>
        <AddSelect.Breadcrumbs
          path={path}
          onBreadcrumbClick={handleBreadcrumbClick}
        />
      </AddSelect>
    </div>
  );
};

/**
 * Story 1: Default
 * Shows breadcrumb navigation with clickable path
 */
export const Default = {
  render: () => <DefaultStory />,
};

export default {
  title: 'Preview/Add and select/AddSelectBreadcrumbs',
  component: AddSelect.Breadcrumbs,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="add-select-story-container">
        <Story />
      </div>
    ),
  ],
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};
