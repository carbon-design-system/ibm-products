import { useEffect } from 'react';

export const useRetrieveFormTitles = ({ formContext, formNumber, title }) => {
  useEffect(() => {
    if (formContext) {
      formContext.setFormTitles((prev) => {
        const prevTitle = prev[formNumber];
        if (prevTitle !== title) {
          const clone = [...prev];
          clone[formNumber] = title;
          return clone;
        }
        return prev;
      });
    }
  }, [title, formContext, formNumber]);
};
