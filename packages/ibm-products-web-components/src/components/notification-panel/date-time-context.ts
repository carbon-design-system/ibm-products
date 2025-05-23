import { createContext } from '@lit/context';
type DateTimeLocale = string;
export const dateTimeLocaleContext =
  createContext<DateTimeLocale>('dateTimeLocale');
