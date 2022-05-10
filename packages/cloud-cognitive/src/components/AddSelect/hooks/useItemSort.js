import { useState } from 'react';

export const useItemSort = () => {
  const [sortDirection, setSortDirection] = useState('');
  const [sortAttribute, setSortAttribute] = useState('');

  return {
    sortDirection,
    setSortDirection,
    sortAttribute,
    setSortAttribute,
  };
};
