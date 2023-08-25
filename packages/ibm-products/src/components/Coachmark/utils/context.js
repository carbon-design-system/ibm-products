import { createContext, useContext } from 'react';

export const CoachmarkContext = createContext();

export const useCoachmark = () => {
  return useContext(CoachmarkContext);
};
