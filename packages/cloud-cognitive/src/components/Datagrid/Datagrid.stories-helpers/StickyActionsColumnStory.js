import React, { useState, useEffect } from 'react';
import { Datagrid, useActionsColumn, useDatagrid, useStickyColumn } from '..';
import { defaultHeader, makeData, Wrapper } from './common';

const StickyActionsColumn = () => {
  const columns = React.useMemo(
    () => [
      ...defaultHeader,
      {
        Header: '',
        accessor: 'actions',
        sticky: 'right',
        width: 60,
        isAction: true,
      },
    ],
    []
  );
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState('click action menu');
  const onActionClick = (actionId, row) => {
    const { original } = row;
    setMsg(
      `Clicked [${actionId}] on row: <${original.firstName} ${original.lastName}>`
    );
  };
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = () =>
      new Promise((resolve) => {
        setIsFetching(true);
        setTimeout(() => {
          setData(data.concat(makeData(30, 5, 2)));
          resolve();
        }, 1000);
      }).then(() => setIsFetching(false));
    fetchData();
  }, [data]);

  const datagridState = useDatagrid(
    {
      columns,
      data,
      isFetching,
      rowActions: [
        {
          id: 'edit',
          itemText: 'Edit',
          onClick: onActionClick,
        },
        {
          id: 'vote',
          itemText: 'Vote',
          onClick: onActionClick,
          shouldHideMenuItem: (row) => row.original.age <= 18,
        },
        {
          id: 'retire',
          itemText: 'Retire',
          onClick: onActionClick,
          disabled: false,
          shouldDisableMenuItem: (row) => row.original.age <= 60,
        },
        {
          id: 'delete',
          itemText: 'Delete',
          hasDivider: true,
          isDelete: true,
          onClick: onActionClick,
        },
      ],
    },
    useStickyColumn,
    useActionsColumn
  );
  return (
    <Wrapper>
      <h3>{msg}</h3>
      <Datagrid {...datagridState} />
      <p>More details documentation check the Notes section below</p>
    </Wrapper>
  );
};

StickyActionsColumn.story = {
  parameters: {
    notes: `
    Sticky column and actions column can be used at the same time like the demo above. Following is the doc for each of them.

    # Sticky column
    This will make the column mark with \`sticky: "right"\` to be sticky on the right.

    ## Incompatible with following plugins:
    - \`useInfiniteScroll\`

    ## Sample usage:
    
    1. include the \`useStickyColumn\` hook
    2. add \`sticky="right"\` to the column object

    \`\`\`js
    const columns = [
      ... // other columns
      {
        Header: "",
        accessor: "actions",
        sticky: "right",
        width: 60,
      },
    ]
    const datagridState = useDatagrid(
      {
        columns,
        data,
      },
      useStickyColumn
    );
    \`\`\`
    \`\`\`html
    <Datagrid {...datagridState} />
    \`\`\`

    # Actions column
    This will add OverflowMenu component to the cells on the column mark with \`isAction: true\`. Each action button callback will include the actionId and row object

    ## Sample usage:
    1. include \`useActionsColumn\` hook
    2. add \`isAction = true\` to the column object in which you which to add the overflow menu actions
    3. add \`rowActions = []\` array to the props
      - \`rowActions[].id\` for callback to identify the action is called
      - \`rowActions[].onClick(actionId: string, row: Row, event: ClickEvent)\` callback on menuitem clicked. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)
      - \`rowActions[].shouldHideMenuItem(row: Row)\` callback to hide this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)
      - \`rowActions[].shouldDisableMenuItem(row: Row)\` callback to disable this menuitem. [Row properties](https://react-table.tanstack.com/docs/api/useTable#row-properties)
        - This will override \`rowActions[].disabled\` (from Carbon) because \`shouldDisableMenuItem\` is more specific to the row.
      - each action object can take all the props from \`OverflowMenuItem\` props, see [carbon docs](https://react.carbondesignsystem.com/?path=/docs/components-overflowmenu--default#overflowmenu)

    \`\`\`js
    const columns = [
      ... // other columns
      {
        Header: "",
        accessor: "actions",
        isAction: true,
      },
    ]
    const onActionClick = (actionId, row, event) => {};
    const datagridState = useDatagrid(
      {
        columns,
        data,
        rowActions: [
          {
            id: 'edit',
            itemText: 'Edit',
            onClick: onActionClick
          },
          {
            id: 'hidden',
            itemText: 'Hidden item',
            onClick: onActionClick,
            shouldHideMenuItem: () => true,
          },
          {
            id: 'delete',
            itemText: 'Delete',
            hasDivider: true,
            isDelete: true,
            onClick: onActionClick
          },
        ]
      },
      useActionsColumn,
    );
    \`\`\`
    \`\`\`html
    <Datagrid {...datagridState} />
    \`\`\`
    `,
  },
};

export default StickyActionsColumn;
