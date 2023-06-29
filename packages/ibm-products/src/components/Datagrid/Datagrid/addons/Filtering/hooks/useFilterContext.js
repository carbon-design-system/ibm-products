import { FilterContext } from '../FilterProvider';
import { useContext } from 'react';

const useFilterContext = () => {
  // get the context
  const context = useContext(FilterContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error('useFilterContext was used outside of its Provider');
  }

  return context;
};

export default useFilterContext;
