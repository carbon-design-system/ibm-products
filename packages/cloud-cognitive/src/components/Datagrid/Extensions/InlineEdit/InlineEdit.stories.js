/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Copyright IBM Corp. 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { CodeSnippet } from 'carbon-components-react';
import { Edit16, TrashCan16 } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import {
  getStoryTitle,
  prepareStory,
} from '../../../../global/js/utils/story-helper';
import { Datagrid, useDatagrid, useInlineEdit } from '../../index';
import { pkg } from '../../../../settings';
import styles from '../../_storybook-styles.scss';
import mdx from '../../Datagrid.mdx';
import { makeData } from '../../utils/makeData';
import { ARG_TYPES } from '../../utils/getArgTypes';
import { getInlineEditColumns } from '../../utils/getInlineEditColumns';

const storyBlockClass = `storybook-${pkg.prefix}--datagrid`;

export default {
  title: `${getStoryTitle(Datagrid.displayName)}/Extensions/InlineEdit`,
  component: Datagrid,
  parameters: {
    styles,
    docs: { page: mdx },
  },
  argTypes: {
    featureFlags: {
      table: {
        disable: true,
      },
    },
  },
};

const sharedDatagridProps = {
  emptyStateTitle: 'Empty state title',
  emptyStateDescription: 'Description text explaining why table is empty',
  emptyStateSize: 'lg',
  gridTitle: 'Data table title',
  gridDescription: 'Additional information if needed',
  useDenseHeader: false,
  rowSize: 'lg',
  rowSizes: [
    {
      value: 'xl',
      labelText: 'Extra large',
    },
    {
      value: 'lg',
      labelText: 'Large',
    },
    {
      value: 'md',
      labelText: 'Medium',
    },
    {
      value: 'xs',
      labelText: 'Small',
    },
  ],
  onRowSizeChange: (value) => {
    console.log('row size changed to: ', value);
  },
  rowActions: [
    {
      id: 'edit',
      itemText: 'Edit',
      icon: Edit16,
      onClick: action('Clicked row action: edit'),
    },

    {
      id: 'delete',
      itemText: 'Delete',
      icon: TrashCan16,
      isDelete: true,
      onClick: action('Clicked row action: delete'),
    },
  ],
};

const InlineEditUsage = ({ ...args }) => {
  const [data, setData] = useState(makeData(10));
  const columns = React.useMemo(() => getInlineEditColumns(), []);

  // Warnings are ordinarily silenced in storybook, add this to test.
  pkg._silenceWarnings(false);
  pkg.feature['Datagrid.useInlineEdit'] = true;
  pkg._silenceWarnings(true);

  const datagridState = useDatagrid(
    {
      columns,
      data,
      onDataUpdate: setData,
      ...args.defaultGridProps,
    },
    useInlineEdit
  );

  return (
    <div>
      <Datagrid datagridState={datagridState} />
      <p>
        The following inline edit columns incorporate validation:
        <CodeSnippet
          className={`${storyBlockClass}__validation-code-snippet`}
          type="inline"
          hideCopyButton
        >
          first_name
        </CodeSnippet>
        <CodeSnippet
          className={`${storyBlockClass}__validation-code-snippet`}
          type="inline"
          hideCopyButton
        >
          last_name
        </CodeSnippet>
        <CodeSnippet
          className={`${storyBlockClass}__validation-code-snippet`}
          type="inline"
          hideCopyButton
        >
          age
        </CodeSnippet>
        <CodeSnippet
          className={`${storyBlockClass}__validation-code-snippet`}
          type="inline"
          hideCopyButton
        >
          visits
        </CodeSnippet>
      </p>
    </div>
  );
};

const InlineEditTemplateWrapper = ({ ...args }) => {
  return <InlineEditUsage defaultGridProps={{ ...args }} />;
};

const inlineEditUsageControlProps = {
  gridTitle: sharedDatagridProps.gridTitle,
  gridDescription: sharedDatagridProps.gridDescription,
  useDenseHeader: sharedDatagridProps.useDenseHeader,
};
const basicUsageStoryName = 'With inline edit';
export const InlineEditUsageStory = prepareStory(InlineEditTemplateWrapper, {
  storyName: basicUsageStoryName,
  argTypes: {
    gridTitle: ARG_TYPES.gridTitle,
    gridDescription: ARG_TYPES.gridDescription,
    useDenseHeader: ARG_TYPES.useDenseHeader,
  },
  args: {
    ...inlineEditUsageControlProps,
    featureFlags: ['Datagrid.useInlineEdit'],
  },
});
