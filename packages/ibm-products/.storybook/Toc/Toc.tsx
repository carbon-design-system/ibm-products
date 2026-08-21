/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  forwardRef,
  PropsWithChildren,
  useCallback,
  useContext,
  useImperativeHandle,
  useReducer,
  useState,
} from 'react';

interface iToc extends PropsWithChildren {
  children: React.ReactNode;
}

enum TocActionType {
  ADD = 'add',
  REMOVE = 'remove',
  RESET = 'reset',
}
interface TocAction {
  type: `${TocActionType}`;
  payload: number;
}
interface iTocContext {
  activeIds: number[];
  scrollToSectionIndex: number;
  scrollToSection: (idx: number) => void;
  dispatch: React.Dispatch<TocAction>;
}

const TocContext = React.createContext<iTocContext | undefined>(undefined);

const Toc = forwardRef((props: iToc, ref) => {
  const { children } = props;
  const activeIDReducer = (activeIds: number[], action: TocAction) => {
    const uniqueIds = [...new Set(activeIds)];
    const { type, payload } = action;
    switch (type) {
      case TocActionType.ADD:
        return [...uniqueIds, payload];
      case TocActionType.REMOVE:
        return uniqueIds.filter((tmpID) => tmpID !== payload);
      case TocActionType.RESET:
        return [];
      default:
        return [...uniqueIds];
    }
  };
  const [activeIds, dispatch] = useReducer(activeIDReducer, []);
  const [scrollToSectionIndex, setScrollToSectionIndex] = useState(0);
  const scrollToSection = (idx: number) => {
    setScrollToSectionIndex(idx);
  };

  const resetToc = useCallback(() => {
    dispatch({
      type: 'reset',
      payload: -1,
    });
  }, []);

  useImperativeHandle(
    ref as React.RefObject<void>,
    () => ({
      reset() {
        resetToc();
      },
    }),
    [resetToc]
  );

  return (
    <TocContext.Provider
      value={{
        activeIds,
        scrollToSectionIndex,
        scrollToSection,
        dispatch,
      }}
    >
      {children}
    </TocContext.Provider>
  );
});

Toc.displayName = 'Toc';

const useToc = () => {
  const ctx = useContext(TocContext);
  if (!ctx) {
    throw new Error(
      `The "useToc" hook must be used within a TocContext provider (Toc component). `
    );
  }
  return ctx;
};

export { Toc, useToc };
