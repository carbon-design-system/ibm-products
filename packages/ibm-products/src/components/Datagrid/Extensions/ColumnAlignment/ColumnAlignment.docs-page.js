import React from 'react';
import { StoryDocsPage } from '../../../../global/js/utils/StoryDocsPage';

export const DocsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        description: `The default column alignment in the \`Datagrid\` is left, however there is support for center and right aligned as well. See [design guidance](https://pages.github.ibm.com/cdai-design/pal/components/data-table/column-alignment/usage) for details around when to change default column alignment.

To utilize center or right aligned columns refer to the steps below:

  - Include \`useColumnCenterAlign\` or \`useColumnRightAlign\` hook/s.
  - Add \`rightAlignedColumn\` or \`centerAlignedColumn\` to the column object in which you which to change the default column alignment.
        `,
        source: {
          language: 'jsx',
          code: `
import {
  Datagrid,
  useDatagrid,
  useColumnCenterAlign,
  useColumnRightAlign,
} from '@carbon/ibm-products';

const defaultColumns = [
  ...defaultCols,
  {
    Header: 'Bonus',
    accessor: 'bonus',
    width: 120,
    rightAlignedColumn: true,
  },
  {
    Header: 'Status',
    accessor: 'status_icon',
    width: 100,
    centerAlignedColumn: true,
  },
];

const App = () => {
  const columns = React.useMemo(() => [...defaultHeader], []);
  const [data] = useState(makeData(10));

  const datagridState = useDatagrid(
    {
      columns,
      data,
      initialState: {
        pageSize: 10,
        pageSizes: [5, 10, 25, 50],
      },
      DatagridActions,
      DatagridPagination,
    },
    useColumnCenterAlign,
    useColumnRightAlign
  );

  return <Datagrid datagridState={datagridState} />;
};
          `,
        },
      },
    ]}
  />
);
