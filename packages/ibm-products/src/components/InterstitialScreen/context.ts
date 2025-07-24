import { createContext } from 'react';
import { InterstitialScreenContextType } from './InterstitialScreen';

export const InterstitialScreenContext =
  createContext<InterstitialScreenContextType>({ progStep: 0, stepCount: 0 });
