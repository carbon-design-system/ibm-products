/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2022
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import { useState } from 'react';
import { getInitialStateFromFilters } from '../utils';

const useInitialStateFromFilters = (filters) => {
  const [state, setState] = useState(getInitialStateFromFilters(filters));

  return [state, setState];
};

export default useInitialStateFromFilters;
