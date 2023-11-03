import React from 'react';
import { StoryDocsPage } from '../../global/js/utils/StoryDocsPage';
import * as stories from './Datagrid.stories';
import toolbarScreenshot from './storybook-assets/datagrid-actions-example.png';

export const DocsPage = () => (
  <StoryDocsPage
    blocks={[
      {
        title: 'Getting started',
        description: `You can use the \`Datagrid\` component to create various kinds of Carbon data tables. Simply import the \`Datagrid\` along with any accompanying hooks (listed below) depending on what extensions you'd like to be included.`,
        source: {
          code: `import {
  Datagrid,
  useDatagrid,
  useInfiniteScroll,
  useNestedRows,
  useSelectRows,
  useExpandedRow,
  useOnRowClick,
  useSortableColumns,
  useRowIsMouseOver,
  useColumnRightAlign,
  useDisableSelectRows,
  useStickyColumn,
  useActionsColumn,
  useCustomizeColumns,
  useSelectAllWithToggle,
  useColumnCenterAlign,
  useColumnOrder,
  useEditableCell,
  useFiltering,
  useFilterContext
} from '@carbon/ibm-products';`,
        },
      },
      {
        title: 'Basic',
        description: `Here is a basic usage example. The following component will render the datagrid seen below, with pagination and some toolbar actions. One of the key pieces to building the \`Datagrid\` is the \`useDatagrid\` hook, this will give you all of the state/props required to render a \`Datagrid\`.`,
      },
      {
        subTitle: 'Multi line wrap',
        description:
          'This setting enables the table cell text wrap to two lines. This can be turned on for only one column in the datagrid or for every column.',
        source: {
          language: 'jsx',
          code: `
          import { Datagrid, useDatagrid } from '@carbon/ibm-products';

const App = () => {
  const columns = React.useMemo(() => defaultHeader, []); // These are the columns that will be used by the datagrid
  const [data] = useState(makeData(10)); // This is the data that will be rendered by the datagrid

  const columns = React.useMemo(
    () => [
      ...defaultHeader,
      {
        Header: 'Someone 11',
        accessor: 'someone11',
        multiLineWrap: true, //If \`multiLineWrap\` is required only for specific columns
      },
    ],
    []
  );

  const datagridState = useDatagrid({
    columns,
    data,
    multiLineWrapAll: true, // If \`multiLineWrap\` is required for all columns in data grid
  });

  return <Datagrid datagridState={datagridState} />;
};
          `,
        },
      },
      {
        story: stories.BasicUsage,
      },
      {
        title: 'Column structure',
        description: `The columns that are passed to the \`useDatagrid\` hook will have the following structure:`,
        source: {
          language: 'jsx',
          code: `
          const columns = [
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
];`,
        },
      },
      {
        description: `To change the default/initial width of a column, add a \`width\` property to the column.`,
        source: {
          language: 'jsx',
          code: `
          const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName',
    width: 120,
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
    width: 180,
  },
];
          `,
        },
      },
      {
        description:
          'If needed, it is also possible to wrap each cell in a containing element. See below:',
        source: {
          language: 'jsx',
          code: `
          const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
    Cell: ({ cell: { value } }) => (
      <span className="custom-cell-wrapper">{value}</span>
    ),
  },
];
          `,
        },
      },
      {
        description:
          "There is also an optional resize callback when resizing columns, allowing you to save the widths of columns that have been resized. The resize callback returns the column that was just resized and it's width, in addition to all of the columns that have been resized and their widths.",
        source: {
          language: 'jsx',
          code: `
useDatagrid({
  columns,
  data,
  onColResizeEnd: (currentColumn, allColumns) =>
      console.log(currentColumn, allColumns),
});
          `,
        },
      },
      {
        description:
          'Disabling the resizable columns is possible by specifying `disableResizing: true` within the `useDatagrid` hook.',
        source: {
          language: 'jsx',
          code: `
useDatagrid({
  columns,
  data,
  disableResizing: true,
});
          `,
        },
      },
      {
        title: 'Rendering the table toolbar',
        image: (
          <img
            src={toolbarScreenshot}
            alt="Datagrid highlighting toolbar area"
          />
        ),
        description: `In some of the examples you will see a component named \`DatagridActions\` passed to the \`useDatagrid\` hook. This component will render the table toolbar and is something that you will need to create on your own and then provide it to the \`useDatagrid\` hook. You can reference the \`DatagridActions\` that we have [created for our stories](https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/Datagrid/utils/DatagridActions.js) when building your own.`,
      },
      {
        title: 'Empty',
        story: stories.EmptyState,
        description: `The \`Datagrid\` supports empty states, when the data prop passed to the \`useDatagrid\` hook is an empty array.
        `,
        source: {
          language: 'jsx',
          code: `
import { Datagrid, useDatagrid } from '@carbon/ibm-products';

const App = () => {
  const columns = React.useMemo(() => defaultHeader, []); // These are the columns that will be used by the datagrid
  const [data] = useState([]); // This is the data that will be rendered by the datagrid

  const datagridState = useDatagrid({
    columns,
    data,
    emptyStateTitle: 'Empty state title',
    emptyStateDescription: 'Description explaining why table is empty',
    emptyStateSize: 'lg', // See empty state size options from the EmptyState component
  });

  return <Datagrid datagridState={datagridState} />;
};
          `,
        },
      },
      {
        title: 'Auto size column to fit content',
        description: `The \`getAutoSizedColumnWidth\` utility function can be used to auto size columns based on it's content. The width will be set to that of the largest cell in the column or the column header, whichever is greater. If this is not used, the width will be set to the default column width (150px) or the value passed to the \`width\` property in the column definition. See example below:`,
        source: {
          code: `
import { Datagrid, useDatagrid, getAutoSizedColumnWidth } from '@carbon/ibm-products';

...

const myColumns = [
  {
    Header: 'Column 1',
    accessor: 'column_1',
    width: getAutoSizedColumnWidth(rows, 'column_1', 'Column 1'),
  }
]

...
          `,
        },
      },
      {
        title: 'Disabling select rows',
        description: `
        Disabling select rows allows you to choose which rows will be disabled in the table.

- Include the \`useDisableSelectRows\` hook in the \`endPlugins\` property of \`useDatagrid\`.
- Add the \`shouldDisableSelectRow\` to the \`useDatagrid\` hook, this will be a function that returns the row indexes that will be disabled.
        `,
        source: {
          code: `
const [data] = useState(makeData(10));
const columns = React.useMemo(() => getColumns(data), []);
const datagridState = useDatagrid(
  {
    columns,
    data,
    DatagridActions,
    DatagridBatchActions,
    endPlugins: [useDisableSelectRows],
    shouldDisableSelectRow: (row) => row.id % 2 === 0,
    disableSelectAll: true,
  },
  useSelectRows
);

return <Datagrid datagridState={datagridState} />;
          `,
        },
      },
      {
        title: 'Infinite scroll',
        description: `Infinite scroll is supported via the \`useInfiniteScroll\` hook. This hook will allow you to fetch more data to display to the user after a certain scroll threshold. The \`useInfiniteScroll\` hook can also be used to support virtualized data, this is required when working with large amounts of data, only rendering the rows that need to be visible in the component at a point in time.`,
      },
      {
        description: `Infinite scroll:
- Include \`useInfiniteScroll\` hook
- Add \`fetchMoreData\` property to \`useDatagrid\`, this will be a function that is called when the scroll threshold is met. Optionally change the height of the grid with the \`virtualHeight\` property.`,
        source: {
          code: `
const datagridState = useDatagrid(
  {
    columns,
    data,
    isFetching,
    fetchMoreData: fetchData,
    virtualHeight: 540,
    emptyStateTitle: 'Empty state title',
    emptyStateDescription: 'Description explaining why the table is empty',
  },
  useInfiniteScroll
);`,
        },
      },
      {
        description: `Virtualized data:
- Include \`useInfiniteScroll\` hook
- The Datagrid will know to use virtualized data just by providing the \`useInfiniteScroll\` hook
        `,
        source: {
          code: `
const [data] = useState(makeData(10000));
const columns = React.useMemo(() => getColumns(data), []);
const datagridState = useDatagrid(
  {
    columns,
    data,
  },
  useInfiniteScroll
);
          `,
        },
      },
      {
        title: 'Detect row hover',
        description: `There may be cases when you want to detect if a user is hovering on a particular row. In this case, use the \`useRowIsMouseOver\` hook.
- Include the \`useRowIsMouseOver\` hook
- When hover is detected on a row, a property called \`isMouseOver\` is changed from \`false\` to \`true\` within that row.
        `,
      },
      {
        title: 'Select items across all pages',
        description: `By default, selecting all items with paginated rows will result in just the current page rows being selected. Incorporating the \`useSelectAllWithToggle\` hook will provide the option to select all rows across all pages.
- Include \`useSelectAllWithToggle\` and \`useSelectRows\` hook
- Add the \`selectAllToggle\` property to the \`useDatagrid\` hook
- Optionally pass in labels to ensure proper translation
- Optionally pass in \`onSelectAllRoss\`, function that will be called via the select all rows checkbox \`onChange\`
        `,
        source: {
          code: `
const [data] = useState(makeData(100));
const columns = React.useMemo(() => getColumns(data), []);
const [areAllSelected, setAreAllSelected] = useState(false);
const datagridState = useDatagrid(
  {
    columns,
    data,
    initialState: {
      pageSize: 10,
      pageSizes: [5, 10, 25, 50],
    },
    selectAllToggle: {
      labels: {
        allRows: 'Select all',
        allPageRows: 'Select all on page',
      },
      onSelectAllRows: setAreAllSelected,
    },
    DatagridPagination,
    DatagridActions,
    DatagridBatchActions,
  },
  useSelectRows,
  useSelectAllWithToggle
);

return (
  <Datagrid datagridState={datagridState} />
);
          `,
        },
      },
      {
        title: 'Selecting rows',
        description: `When building a Datagrid that requires selectable rows, use the \`useSelectRows\` hook.
- Include \`useSelectRows\` hook
- Add \`onRowSelect\` to the \`useDatagrid\` hook, this is a callback function called when on a row's selection checkbox onChange, and sends back the row object and the event
        `,
        source: {
          code: `
const [data] = useState(makeData(10));
const columns = React.useMemo(() => getColumns(data), []);
const datagridState = useDatagrid(
  {
    columns,
    data,
    onRowSelect: (row, event) => console.log(row, event),
  },
  useSelectRows
);

return <Datagrid datagridState={datagridState} />;
          `,
        },
      },
      {
        description: `The select all checkbox can be optionally hidden by settings the \`hideSelectAll\` property to \`true\` in the \`useDatagrid\` hook.`,
        source: {
          code: `
const datagridState = useDatagrid(
  {
    columns,
    data,
    onRowSelect: (row, event) => console.log(row, event),
    hideSelectAll: true,
  },
  useSelectRows
);
          `,
        },
      },
      {
        description: `Datagrid also provides the option to use radio selection in cases where only one row should be selected at a time. Additionally, you can have preselected row/rows, see example below.`,
        source: {
          code: `
const [data] = useState(makeData(10));
const columns = React.useMemo(() => getColumns(data), []);
const datagridState = useDatagrid(
  {
    columns,
    data,
    radio: true,
    onRadioSelect: (row) => console.log(\`Row clicked\`),
    initialState: {
      selectedRowIds: {
        3: true,
      },
    },
  },
  useSelectRows
);

return <Datagrid datagridState={datagridState} />;
          `,
        },
      },
      {
        title: 'Sortable columns',
        description: `To add sortable columns to your Datagrid, simply add the \`useSortableColumns\` hook. This will allow each column header to be clickable and sort each column in either ascending or descending order.
- Include \`useSortableColumns\` hook
        `,
        source: {
          code: `
const [data] = useState(makeData(10));
const columns = React.useMemo(() => getColumns(data), []);
const datagridState = useDatagrid(
  {
    columns,
    data,
    ascendingSortableLabelText: 'none',
    descendingSortableLabelText: 'ascending',
    defaultSortableLabelText: 'descending',
  },
  useSortableColumns
);

return <Datagrid datagridState={datagridState} />;
          `,
        },
      },
      {
        title: 'Sticky column',
        description: `Sticky columns can be useful when you have many columns that create a horizontal scroll and you have important data in the first or last column that you always want to be visible.
- Include the \`useStickyColumn\` hook
- Sticky columns can _only_ be applied to the first and the last columns in the Datagrid. To have the first column stick, add \`sticky: 'left'\` to the first column definition. To have the last column stick, add \`sticky: 'right'\` to the last column definition.
        `,
        source: {
          code: `
const columns = [
  {
    Header: 'First column',
    accessor: 'first_column',
    sticky: 'left',
  },
  {
    ...
  },
  {
    ...
  }
];
const datagridState = useDatagrid(
  {
    columns,
    data,
  },
  useStickyColumn
);

return <Datagrid datagridState={datagridState} />;
          `,
        },
      },
    ]}
  />
);
