/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createContext, RefObject, useContext } from 'react';

/**
 * -------------
 * Context setup
 * -------------
 */

export type PageHeaderRefs = {
  contentRef?: RefObject<HTMLDivElement>;
  titleRef?: RefObject<HTMLDivElement>;
};

type PageHeaderContextType = {
  refs?: PageHeaderRefs;
  setRefs: React.Dispatch<React.SetStateAction<PageHeaderRefs>>;
  fullyCollapsed?: boolean;
  titleClipped?: boolean;
};

export const PageHeaderContext = createContext<
  PageHeaderContextType | undefined
>({
  fullyCollapsed: false,
  setRefs: () => {},
  refs: {},
  titleClipped: false,
});

export function usePageHeader() {
  const context = useContext(PageHeaderContext);
  if (!context) {
    throw new Error(
      'Page header context was not provided or hook was used outside of the Page header component.'
    );
  }
  return context;
}
