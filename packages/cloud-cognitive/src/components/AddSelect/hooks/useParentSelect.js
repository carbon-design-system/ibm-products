import { useState } from 'react';

const useParentSelect = () => {
  const [parentSelected, setParentSelected] = useState(null);

  return {
    parentSelected,
    setParentSelected,
  };
};

export default useParentSelect;
