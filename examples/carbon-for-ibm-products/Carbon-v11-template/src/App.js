import React, { useState, useEffect } from 'react';
import { Datagrid, useDatagrid, PageHeader } from '@carbon/ibm-products';
import { Pagination } from '@carbon/react';
import { ThemeDropdown } from './ThemeSelector/ThemeDropdown';
import PageWrapper from './PageWrapper';
import './app.scss';

const DatagridPagination = ({ state, setPageSize, gotoPage, rows }) => {
  const updatePagination = ({ page, pageSize }) => {
    setPageSize(pageSize);
    gotoPage(page - 1); // Carbon is non-zero-based
  };

  return (
    <Pagination
      page={state.pageIndex + 1} // react-table is zero-based
      pageSize={state.pageSize}
      pageSizes={state.pageSizes || [10, 20, 30, 40, 50]}
      totalItems={rows.length}
      onChange={updatePagination}
    />
  );
};

function App() {
  const [commentData, setCommentData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchCommentsJSON() {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments'
      );
      const comments = await response.json();
      return comments;
    }
    fetchCommentsJSON().then((comments) => {
      setCommentData(comments);
      setLoading(false);
    });
  }, []);

  const defaultHeader = [
    {
      Header: 'Post id',
      accessor: 'postId',
    },
    {
      Header: 'Id',
      accessor: 'id',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Name',
      accessor: 'name',
      Cell: ({ cell: { value } }) => (
        <span className="custom-cell-wrapper">{value}</span>
      ),
    },
    {
      Header: 'Comment body',
      accessor: 'body',
    },
  ];

  const columns = React.useMemo(() => defaultHeader, []);
  const emptyStateTitle = 'Empty state title';
  const emptyStateDescription =
    'Description text explaining why this card is empty.';
  const datagridState = useDatagrid({
    className: 'grid-wrapper',
    columns,
    data: commentData,
    emptyStateTitle,
    emptyStateDescription,
    isFetching: loading,
    DatagridPagination,
    initialState: {
      pageSize: 10,
      pageSizes: [5, 10, 25, 50],
    },
  });

  return (
    <PageWrapper>
      <PageHeader
        title="Sample Carbon for IBM Products template using Carbon v11"
        subtitle="Included as an example, is the Datagrid component."
      />
      <Datagrid datagridState={datagridState} />
      <ThemeDropdown />
    </PageWrapper>
  );
}

export default App;
