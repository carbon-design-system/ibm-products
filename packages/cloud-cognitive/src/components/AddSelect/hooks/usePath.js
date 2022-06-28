import { useState } from 'react';

const usePath = (itemsLabel) => {
  const [path, setPath] = useState([
    {
      id: 'base_of_path',
      title: itemsLabel || '',
    },
  ]);

  const handler = (id, title, parentId) => {
    if (path.find((entry) => entry.id === id)) {
      return;
    }

    const pathEntry = {
      id,
      title,
      ...(parentId && { parentId }),
    };

    if (path.find((entry) => entry.parentId === parentId)) {
      const parentIdx = path.findIndex((entry) => entry.id === parentId);
      const pathCopy = [...path];
      pathCopy.length = parentIdx + 1;
      setPath([...pathCopy, pathEntry]);
    } else {
      setPath([...path, pathEntry]);
    }
  };

  const pathClickHandler = (idx) => {
    const pathCopy = [...path];
    pathCopy.length = idx + 1;
    setPath([...pathCopy]);
  };

  return {
    path,
    setPath: handler,
    pathOnclick: pathClickHandler,
  };
};

export default usePath;
