import { useLayoutEffect, useState, RefObject, ReactNode } from 'react';

interface Props {
  longRef: RefObject<HTMLElement>;
  shortRef: RefObject<HTMLElement>;
  text: string | ReactNode;
}

const useOverflow = (props: Props): boolean => {
  const { longRef, shortRef, text } = props;
  const [isEllipsisApplied, setIsEllipsisApplied] = useState<boolean>(false);

  useLayoutEffect(() => {
    const isEllipsisActive = () => {
      if (longRef?.current) {
        return longRef.current?.offsetWidth < longRef.current?.scrollWidth;
      } else if (shortRef.current) {
        return shortRef.current?.offsetWidth < shortRef.current?.scrollWidth;
      }

      return false;
    };
    setIsEllipsisApplied(isEllipsisActive());
  }, [longRef, shortRef, text]);

  return isEllipsisApplied;
};

export default useOverflow;
