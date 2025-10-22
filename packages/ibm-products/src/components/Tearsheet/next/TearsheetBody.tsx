/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {
  ForwardedRef,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from 'react';

import { blockClass, TearsheetContext } from './context';
import { SidePanel } from '../../SidePanel';
import { Layer } from '@carbon/react';

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
    const scrollSentinelRef = useRef<HTMLDivElement>(null);

    const localRef = useRef<HTMLDivElement>(null);
    const mainContentRef = ref || localRef;

    const { setFullyCollapsed, disableHeaderCollapse } =
      useContext(TearsheetContext);

    useEffect(() => {
      // This logic controls the collapsible header based on scroll position.
      // We avoid relying solely on scroll events because of an edge case:
      // when the header is expanded, the content might be scrollable, but collapsing the header
      // can remove the scroll (since extra height is released). In that scenario,
      // no further scroll events would fire, leaving the component stuck in the collapsed state.

      const container =
        mainContentRef && 'current' in mainContentRef
          ? mainContentRef.current
          : null;
      if (!container || disableHeaderCollapse) {
        return;
      }

      let startY: number | null = null;
      let isDragging = false;

      const onPointerDown = (e: PointerEvent) => {
        startY = e.clientY;
        isDragging = true;
      };

      const onPointerMove = (e: PointerEvent) => {
        if (!isDragging || startY === null) {
          return;
        }

        const diffY = startY - e.clientY;
        if (diffY > 5) {
          collapseHeader(true, container);
        } else if (diffY < -5) {
          collapseHeader(false, container);
        }
      };

      const onPointerUp = () => {
        isDragging = false;
        startY = null;
        document.body.style.cursor = 'default';
      };

      const onWheel = (e: WheelEvent) => {
        if (e.deltaY > 0) {
          collapseHeader(true, container);
        } else if (e.deltaY < 0) {
          collapseHeader(false, container);
        }
      };

      container.addEventListener('pointerdown', onPointerDown);
      container.addEventListener('pointermove', onPointerMove);
      container.addEventListener('pointerup', onPointerUp);
      container.addEventListener('wheel', onWheel);

      // Cleanup on unmount
      return () => {
        container.removeEventListener('pointerdown', onPointerDown);
        container.removeEventListener('pointermove', onPointerMove);
        container.removeEventListener('pointerup', onPointerUp);
        container.removeEventListener('wheel', onWheel);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mainContentRef, setFullyCollapsed, disableHeaderCollapse]);

    const collapseHeader = (collapse: boolean, container) => {
      if (collapse) {
        const canScroll = container.scrollHeight > container.clientHeight;

        if (canScroll) {
          setFullyCollapsed?.(true);
        }
      } else if (container.scrollTop === 0) {
        setFullyCollapsed?.(false);
      }
    };

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
  rightPanelOpen?: boolean;
  /**
   * Specify a handler for closing the side panel.
   * This handler closes the modal, e.g. changing `open` prop.
   */
  onRightPanelClose?(): void;
}
export const SummaryContent = forwardRef<HTMLDivElement, SummaryContentProps>(
  ({ children, className, rightPanelOpen = false, onRightPanelClose }, ref) => {
    const { isSm } = useContext(TearsheetContext);

    return !isSm ? (
      <div className={`${blockClass}__summary-content ${className}`} ref={ref}>
        <aside>{children}</aside>
      </div>
    ) : (
      <SidePanel
        size="sm"
        open={rightPanelOpen}
        onRequestClose={onRightPanelClose}
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
