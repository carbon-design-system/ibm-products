import { useEffect, useState } from 'react';

const addFiltersToState = (filters) => {
  const initialFilterState = {};

  filters.forEach(({ type, column, props }) => {
    if (type === 'checkbox') {
      initialFilterState[column] = props.Checkbox.map(
        ({ id, labelText, value }) => ({
          id,
          labelText,
          value,
          selected: false,
        })
      );
    } else if (type === 'date') {
      initialFilterState[column] = [undefined, undefined];
    } else if (type === 'number') {
      initialFilterState[column] = 0;
    } else if (type === 'radio') {
      initialFilterState[column] = '';
    } else if (type === 'dropdown') {
      initialFilterState[column] = '';
    }
  });

  return initialFilterState;
};

const useInitialStateFromFilters = (filters) => {
  const [state, setState] = useState(addFiltersToState(filters));

  useEffect(() => {
    setState(addFiltersToState(filters));
  }, [filters]);

  return [state, setState];
};

export default useInitialStateFromFilters;
