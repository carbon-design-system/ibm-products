import { useCallback, useState, useEffect } from 'react';

const useFocus = (size) => {
  const [currentFocus, setCurrentFocus] = useState('');

  const handleKeyDown = useCallback(
    (e) => {
      const idx = currentFocus === '' ? -1 : currentFocus;
      if (e.keyCode === 40) {
        // Down arrow
        e.preventDefault();
        setCurrentFocus(idx === size - 1 ? 0 : idx + 1);
      } else if (e.keyCode === 38) {
        // Up arrow
        e.preventDefault();
        setCurrentFocus(idx === 0 ? size - 1 : idx - 1);
      }
    },
    [size, currentFocus, setCurrentFocus]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus];
};

export default useFocus;
