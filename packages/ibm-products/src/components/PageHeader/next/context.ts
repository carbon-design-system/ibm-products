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
  contentRef?: RefObject<HTMLDivElement | null>;
  titleRef?: RefObject<HTMLHeadingElement | null>;
  contentActions?: RefObject<HTMLDivElement | null>;
  breadcrumbActions?: RefObject<HTMLDivElement | null>;
};

type PageHeaderContextType = {
  refs?: PageHeaderRefs;
  setRefs: React.Dispatch<React.SetStateAction<PageHeaderRefs>>;
  pageActionsInstance?: React.ReactNode;
  setPageActionsInstance: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  fullyCollapsed?: boolean;
  titleClipped?: boolean;
  contentActionsClipped?: boolean;
  breadcrumbActionsClipped?: boolean;
  isContentActionsInBreadcrumbBar?: boolean;
};

export const PageHeaderContext = createContext<
  PageHeaderContextType | undefined
>({
  fullyCollapsed: false,
  setRefs: () => {},
  refs: {},
  titleClipped: false,
  contentActionsClipped: false,
  pageActionsInstance: null,
  setPageActionsInstance: () => {},
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
