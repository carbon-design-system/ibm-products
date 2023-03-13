/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2022
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import { useState } from 'react';
<<<<<<< HEAD
import { getInitialStateFromFilters } from '../utils';

const useInitialStateFromFilters = (filters) => {
  const [state, setState] = useState(getInitialStateFromFilters(filters));
=======
import { FLYOUT } from '../constants';
import { getInitialStateFromFilters } from '../utils';

const useInitialStateFromFilters = (filters, variation = FLYOUT) => {
  const [state, setState] = useState(
    getInitialStateFromFilters(filters, variation)
  );
>>>>>>> b1256ee15584a536b87ff6bef3242a13b22a6212

  return [state, setState];
};

export default useInitialStateFromFilters;
