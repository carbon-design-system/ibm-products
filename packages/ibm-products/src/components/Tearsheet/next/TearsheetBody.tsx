/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {
  ForwardedRef,
  forwardRef,
  ReactNode,
  useContext,
  useRef,
} from 'react';

import { blockClass, TearsheetContext } from './context';
import { SidePanel } from '../../SidePanel';
import { Layer } from '@carbon/react';
import { useCollapsible } from '../../../global/js/hooks/useCollapsible';
/**
 * ----------------
 * TearsheetBody
 * ----------------
 */

export interface TearsheetBodyProps {
  /**
   * Optional static content for body
   */
  children?: ReactNode;
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className?: string;
  /**
   *You can provide content either through a callback (contentRenderer) or as static children—but not both.
   * If both are provided, contentRenderer always takes precedence. This optional callback should return the content
   * to be rendered in the body section, which can be either a single element or an array of elements based on your needs.
   * If internal state access isn’t required, you can simply use static children instead
   */
}

const TearsheetBody = forwardRef<HTMLDivElement, TearsheetBodyProps>(
  ({ children, className }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={`${blockClass}__body ${className}`} ref={ref}>
        {children}
      </div>
    );
  }
);

export interface MainContentProps {
  children: ReactNode;
  className?: string;
}
/**
 * ----------------
 * MainContent
 * ----------------
 */
export const MainContent = forwardRef<HTMLDivElement, MainContentProps>(
  ({ children, className, ...rest }, ref: ForwardedRef<HTMLDivElement>) => {
    const localRef = useRef<HTMLDivElement>(null);
    const mainContentRef = ref || localRef;

    const { setFullyCollapsed, disableHeaderCollapse } =
      useContext(TearsheetContext);

    const container =
      typeof mainContentRef === 'function'
        ? null
        : (mainContentRef?.current ?? null);

    const collapseHeader = (collapse: boolean) => {
      if (container) {
        if (collapse) {
          const canScroll = container.scrollHeight > container.clientHeight; // collapse header only when there is scroll

          if (canScroll) {
            setFullyCollapsed?.(true);
          }
        } else if (container.scrollTop === 0) {
          // expand header when scroll reaches top
          setFullyCollapsed?.(false);
        }
      }
    };

    useCollapsible({
      container,
      triggerCollapse: collapseHeader,
      disableHeaderCollapse,
    });

    return (
      <Layer
        withBackground
        className={`${blockClass}__main-content  ${className}`}
        ref={mainContentRef}
        {...rest}
      >
        {children}
      </Layer>
    );
  }
);

/**
 * ----------------
 * SummaryContent
 * ----------------
 */
export interface SummaryContentProps {
  children: ReactNode;
  className?: string;
  /**
   * In mobile screens right side details section wont be visible by default. This prop can be toggled to open/close right panel in this case.
   */
  summaryPanelOpen?: boolean;
  /**
   * Specify a handler for closing the side panel.
   * This handler closes the modal, e.g. changing `open` prop.
   */
  onSummaryPanelClose?(): void;
}
export const SummaryContent = forwardRef<HTMLDivElement, SummaryContentProps>(
  (
    { children, className, summaryPanelOpen = false, onSummaryPanelClose },
    ref
  ) => {
    const { isSm } = useContext(TearsheetContext);

    return !isSm ? (
      <div className={`${blockClass}__summary-content ${className}`} ref={ref}>
        <aside>{children}</aside>
      </div>
    ) : (
      <SidePanel
        size="sm"
        open={summaryPanelOpen}
        onRequestClose={onSummaryPanelClose}
      >
        {children}
      </SidePanel>
    );
  }
);

export interface InfluencerProps {
  children: ReactNode;
  className?: string;
  /**
   * In mobile screens right side details section wont be visible by default. This prop can be toggled to open/close right panel in this case.
   */
  influencerPanelOpen?: boolean;
  /**
   * Specify a handler for closing the side panel.
   * This handler closes the modal, e.g. changing `open` prop.
   */
  onInfluencerPanelClose?(): void;
}
export const Influencer = forwardRef<HTMLDivElement, InfluencerProps>(
  (
    {
      children,
      className,
      influencerPanelOpen = false,
      onInfluencerPanelClose,
    },
    ref
  ) => {
    const { isSm } = useContext(TearsheetContext);

    return !isSm ? (
      <aside className={`${blockClass}__influencer ${className}`} ref={ref}>
        {children}
      </aside>
    ) : (
      <SidePanel
        size="sm"
        open={influencerPanelOpen}
        onRequestClose={onInfluencerPanelClose}
        placement="left"
      >
        {children}
      </SidePanel>
    );
  }
);

export default TearsheetBody;
