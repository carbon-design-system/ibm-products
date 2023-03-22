/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2020
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import { useCallback, useEffect } from 'react';
import debounce from 'lodash/debounce';
import useParentDimensions from './useParentDimensions';
import useResizeTable from './useResizeTable';

import { pkg } from '../../settings';

const useInfiniteScroll = (hooks) => {
  useParentDimensions(hooks);
  useResizeTable(hooks);

  useEffect(() => {
    pkg.checkReportFeatureEnabled('Datagrid.useInfiniteScroll');
  }, []);

  const useInstance = (instance) => {
    const { isFetching, tableHeight, innerListRef, fetchMoreData, tableId } =
      instance;
    const tableElement = document.querySelector(`#${tableId}`);
    const totalTableHeight = tableHeight || tableElement?.clientHeight;

    const loadMoreThreshold = 200;

    const emptyFetchData = () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchMore = useCallback(
      debounce(fetchMoreData || emptyFetchData, 3000, {
        leading: true,
        trailing: false,
      }),
      [fetchMoreData]
    );
    const onScroll = ({ scrollDirection, scrollOffset }) => {
      if (innerListRef && innerListRef.current) {
        if (
          !isFetching &&
          scrollDirection === 'forward' &&
          scrollOffset + totalTableHeight >=
            innerListRef.current.clientHeight - loadMoreThreshold
        ) {
          if (fetchMoreData) {
            fetchMore();
          }
        }
      }
    };

    Object.assign(instance, {
      onScroll,
      withVirtualScroll: true,
    });
  };

  hooks.useInstance.push(useInstance);
};

export default useInfiniteScroll;
