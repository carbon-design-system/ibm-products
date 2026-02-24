/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useRef, RefObject, useEffect } from 'react';
import classnames from 'classnames';
import { blockClass } from '../PageHeaderUtils';
import { PageHeaderContext, PageHeaderRefs } from './context';
import { getHeaderOffset } from './utils';
import { pkg } from '../../../settings';
import { useResizeObserver } from '../../../global/js/hooks/useResizeObserver';

// Import separated child components
import {
  PageHeaderBreadcrumbBar,
  type PageHeaderBreadcrumbBarProps,
} from './PageHeaderBreadcrumbBar';
import {
  PageHeaderContent,
  type PageHeaderContentProps,
} from './PageHeaderContent';
import {
  PageHeaderContentPageActions,
  type PageHeaderContentPageActionsProps,
} from './PageHeaderContentPageActions';
import {
  PageHeaderContentText,
  type PageHeaderContentTextProps,
} from './PageHeaderContentText';
import {
  PageHeaderHeroImage,
  type PageHeaderHeroImageProps,
} from './PageHeaderHeroImage';
import {
  PageHeaderTabBar,
  type PageHeaderTabBarProps,
} from './PageHeaderTabBar';
import {
  PageHeaderTagOverflow,
  type PageHeaderTagOverflowProps,
} from './PageHeaderTagOverflow';
import {
  PageHeaderScrollButton,
  type PageHeaderScrollButtonProps,
} from './PageHeaderScrollButton';
import { PageHeaderTitleBreadcrumb } from './PageHeaderTitleBreadcrumb';
import {
  PageHeaderBreadcrumbOverflow,
  type PageHeaderBreadcrumbOverflowProps,
} from './PageHeaderBreadcrumbOverflow';

/**
 * ----------
 * PageHeader
 * ----------
 */
export interface PageHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  function PageHeader({ className, children, ...other }: PageHeaderProps, ref) {
    const [refs, setRefs] = useState<PageHeaderRefs>({});
    const [pageActionsInstance, setPageActionsInstance] =
      useState<React.ReactNode | null>(null);
    const tempRef = useRef<HTMLDivElement>(null);
    const componentRef = (ref ?? tempRef) as RefObject<HTMLDivElement>;
    const classNames = classnames(
      {
        [`${blockClass}`]: true,
        [`${blockClass}__next`]: true,
      },
      className
    );

    // Used to set CSS custom property with PageHeaderContent height to be used
    // for sticky positioning
    useResizeObserver(componentRef, () => {
      if (componentRef?.current) {
        // It's possible we don't have the content element
        // in which case we set it's height to 0
        const pageHeaderContentHeight =
          refs?.contentRef?.current?.offsetHeight ?? 0;
        const totalHeaderOffset = getHeaderOffset(componentRef?.current);
        componentRef?.current.style.setProperty(
          `--${pkg.prefix}-page-header-header-top`,
          `${(Math.round(pageHeaderContentHeight) - totalHeaderOffset) * -1}px`
        );
        componentRef?.current.style.setProperty(
          `--${pkg.prefix}-page-header-breadcrumb-top`,
          `${totalHeaderOffset}px`
        );
      }
    });

    const [fullyCollapsed, setFullyCollapsed] = useState(false);
    const [titleClipped, setTitleClipped] = useState(false);
    const [contentActionsClipped, setContentActionsClipped] = useState(false);
    const [breadcrumbActionsClipped, setBreadcrumbActionsClipped] =
      useState(false);

    // Intersection Observer setup, tracks if the PageHeaderContent is visible on page.
    // If it is not visible, we should set fully collapsed to true so that the
    // scroller button will know if it is clicked to expand rather than
    // collapse the header.
    useEffect(() => {
      if (!refs?.contentRef || !componentRef?.current) {
        return;
      }
      const totalHeaderOffset = getHeaderOffset(componentRef?.current);
      const predefinedContentPadding = 24;
      const contentObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target === refs?.contentRef!.current) {
              setFullyCollapsed(!entry.isIntersecting);
            }
          });
        },
        {
          root: null,
          rootMargin: `${(predefinedContentPadding + totalHeaderOffset + 40) * -1}px 0px 0px 0px`,
          threshold: 0.1,
        }
      );

      if (!refs?.titleRef?.current) {
        return;
      }
      const totalTitleHeight = refs?.titleRef.current.offsetHeight;
      const titleObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target === refs?.titleRef!.current) {
              setTitleClipped(!entry.isIntersecting);
            }
          });
        },
        {
          root: null,
          rootMargin: `${(predefinedContentPadding + totalTitleHeight + totalHeaderOffset + 24) * -1}px 0px 0px 0px`,
          threshold: 0.1,
        }
      );

      if (!refs?.contentActions?.current) {
        return;
      }
      const contentActionsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target === refs?.contentActions!.current) {
              setContentActionsClipped(!entry.isIntersecting);
              setBreadcrumbActionsClipped(entry.isIntersecting);
            }
          });
        },
        {
          root: null,
          rootMargin: `${(predefinedContentPadding + totalHeaderOffset + 24) * -1}px 0px 0px 0px`,
          threshold: 0.1,
        }
      );

      if (refs?.contentRef?.current) {
        contentObserver.observe(refs.contentRef.current);
      }

      if (refs?.titleRef?.current) {
        titleObserver.observe(refs.titleRef.current);
      }

      if (refs?.contentActions?.current) {
        contentActionsObserver.observe(refs.contentActions.current);
      }

      return () => {
        contentObserver.disconnect();
        titleObserver.disconnect();
        contentActionsObserver.disconnect();
      };
    }, [refs?.contentRef, refs?.titleRef, refs?.contentActions, componentRef]);

    return (
      <PageHeaderContext.Provider
        value={{
          refs,
          setRefs,
          pageActionsInstance,
          setPageActionsInstance,
          fullyCollapsed,
          titleClipped,
          contentActionsClipped,
          breadcrumbActionsClipped,
        }}
      >
        <div className={classNames} ref={componentRef} {...other}>
          {children}
        </div>
      </PageHeaderContext.Provider>
    );
  }
);
PageHeader.displayName = 'PageHeader';

/**
 * -------
 * Exports
 * -------
 */
const Root = PageHeader;
Root.displayName = 'PageHeader.Root';

const BreadcrumbBar = PageHeaderBreadcrumbBar;
BreadcrumbBar.displayName = 'PageHeaderBreadcrumbBar';

const Content = PageHeaderContent;
Content.displayName = 'PageHeaderContent';

const ContentPageActions = PageHeaderContentPageActions;
ContentPageActions.displayName = 'PageHeaderContentPageActions';

const ContentText = PageHeaderContentText;
ContentText.displayName = 'PageHeaderContentText';

const HeroImage = PageHeaderHeroImage;
HeroImage.displayName = 'PageHeaderHeroImage';

const TabBar = PageHeaderTabBar;
TabBar.displayName = 'PageHeaderTabBar';

const ScrollButton = PageHeaderScrollButton;
ScrollButton.displayName = 'PageHeaderScrollButton';

const TitleBreadcrumb = PageHeaderTitleBreadcrumb;
TitleBreadcrumb.displayName = 'PageHeaderTitleBreadcrumb';

const BreadcrumbOverflow = PageHeaderBreadcrumbOverflow;
BreadcrumbOverflow.displayName = 'PageHeaderBreadcrumbOverflow';

const TagOverflow = PageHeaderTagOverflow;
TagOverflow.displayName = 'PageHeaderTagOverflow';

export {
  // direct exports
  PageHeader,
  PageHeaderBreadcrumbBar,
  PageHeaderContent,
  PageHeaderContentPageActions,
  PageHeaderContentText,
  PageHeaderHeroImage,
  PageHeaderTabBar,
  PageHeaderScrollButton,
  PageHeaderTitleBreadcrumb,
  PageHeaderBreadcrumbOverflow,
  PageHeaderTagOverflow,
  // namespaced
  Root,
  BreadcrumbBar,
  Content,
  ContentPageActions,
  ContentText,
  HeroImage,
  TabBar,
  ScrollButton,
  TitleBreadcrumb,
  BreadcrumbOverflow,
  TagOverflow,
};
export type {
  PageHeaderBreadcrumbBarProps,
  PageHeaderContentProps,
  PageHeaderContentPageActionsProps,
  PageHeaderContentTextProps,
  PageHeaderHeroImageProps,
  PageHeaderTabBarProps,
  PageHeaderScrollButtonProps,
  PageHeaderTagOverflowProps,
  PageHeaderBreadcrumbOverflowProps,
};
