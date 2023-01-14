/*
 * Licensed Materials - Property of IBM
 * 5724-Q36
 * (c) Copyright IBM Corp. 2022
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 */
import { useEffect, useContext } from 'react';
import { FilterContext } from '../FilterProvider';

/**
 * Subscribes to the filter event emitter
 * @param  {string} type - the type of event to call
 * @param  {Function} callback - a callback to run when the event is dispatched
 */
const useSubscribeToEventEmitter = (type, callback) => {
  const { EventEmitter } = useContext(FilterContext);

  useEffect(function subscribeToEmitter() {
    // This event is emitted from the DatagridToolbar component when clearFilters is clicked in FilterSummary
    EventEmitter.subscribe(type, callback);
  });
};

export default useSubscribeToEventEmitter;
