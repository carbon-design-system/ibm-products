/**
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {
  type ComponentType,
  type FunctionComponent,
  useEffect,
  useState,
  useRef,
  useCallback,
  RefObject,
  forwardRef,
} from 'react';
import { useIsomorphicEffect } from '../../../global/js/hooks';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  AspectRatio,
  Column,
  DefinitionTooltip,
  Grid,
  MenuItem,
  MenuItemProps,
  MenuButton,
  Popover,
  PopoverContent,
  unstable_Text as Text,
  usePrefix,
  IconButtonProps,
  IconButton,
  BreadcrumbItemProps,
  BreadcrumbItem,
  BreadcrumbProps,
  Breadcrumb,
  Section,
  Heading,
} from '@carbon/react';
import { breakpoints } from '@carbon/layout';
import { blockClass } from '../PageHeaderUtils';
import { createOverflowHandler as localOverflowHandler } from './overflowHandler';
import { createOverflowHandler } from '@carbon/utilities';
import { ChevronUp } from '@carbon/react/icons';
import { PageHeaderContext, PageHeaderRefs, usePageHeader } from './context';
import { getHeaderOffset, scrollableAncestor } from './utils';
import { pkg } from '../../../settings';
import { useResizeObserver } from '../../../global/js/hooks/useResizeObserver';

/**
 * ----------
 * PageHeader
 * ----------
 */
interface PageHeaderProps {
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
          rootMargin: `${(predefinedContentPadding + totalTitleHeight + totalHeaderOffset + 48) * -1}px 0px 0px 0px`,
          threshold: 0.1,
        }
      );

      if (refs?.contentRef.current) {
        contentObserver.observe(refs?.contentRef.current);
      }

      if (refs?.titleRef.current) {
        titleObserver.observe(refs?.titleRef.current);
      }
      if (refs?.contentActions.current) {
        contentActionsObserver.observe(refs?.contentActions.current);
      }

      return () => {
        if (!refs?.contentRef?.current) {
          return;
        }
        contentObserver.unobserve(refs?.contentRef.current);
        if (!refs?.titleRef?.current) {
          return;
        }
        titleObserver.unobserve(refs?.titleRef.current);
        if (!refs?.contentActions?.current) {
          return;
        }
        contentActionsObserver.unobserve(refs?.contentActions.current);
      };
    }, [refs, componentRef]);

    return (
      <PageHeaderContext.Provider
        value={{
          refs,
          setRefs,
          fullyCollapsed,
          pageActionsInstance,
          setPageActionsInstance,
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
 * -----------------------
 * PageHeaderBreadcrumbBar
 * -----------------------
 */
interface PageHeaderBreadcrumbBarProps {
  /**
   * `true` by default to render BreadcrumbBar bottom border.
   */
  border?: boolean;
  children?: React.ReactNode;
  className?: string;
  /**
   * Provide an optional icon to render in front of the PageHeaderContent's title.
   */
  renderIcon?: ComponentType | FunctionComponent;
  /**
   * The PageHeaderBreadcrumbBar's content actions
   */
  contentActions?: React.ReactNode;
  /**
   * `true` to set content actions flush against page actions
   */
  contentActionsFlush?: boolean;
  /**
   * The PageHeaderContent's page actions
   */
  pageActions?: React.ReactNode;
  /**
   * `true` to set page actions flush with page
   */
  pageActionsFlush?: boolean;
}
const PageHeaderBreadcrumbBar = React.forwardRef<
  HTMLDivElement,
  PageHeaderBreadcrumbBarProps
>(function PageHeaderBreadcrumbBar(
  {
    border = true,
    className,
    children,
    renderIcon: IconElement,
    contentActions,
    contentActionsFlush,
    pageActions,
    pageActionsFlush,
    ...other
  }: PageHeaderBreadcrumbBarProps,
  ref
) {
  const context = usePageHeader();
  const { pageActionsInstance: globalActions, contentActionsClipped } = context;
  const classNames = classnames(
    {
      [`${blockClass}__breadcrumb-bar`]: true,
      [`${blockClass}__breadcrumb-bar-border`]: border,
      [`${blockClass}__breadcrumb__actions-flush`]: pageActionsFlush,
    },
    className
  );

  const contentActionsClasses = classnames({
    [`${blockClass}__breadcrumb__content-actions`]: !contentActionsFlush,
    [`${blockClass}__breadcrumb__content-actions-with-global-actions`]:
      !!globalActions,
    [`${blockClass}__breadcrumb__content-actions-with-global-actions--show`]:
      contentActionsClipped,
  });

  return (
    <PageHeaderContext.Provider
      value={{
        ...context,
        isContentActionsInBreadcrumbBar: true,
      }}
    >
      <div className={classNames} ref={ref} {...other}>
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <div className={`${blockClass}__breadcrumb-container`}>
              <div className={`${blockClass}__breadcrumb-wrapper`}>
                {IconElement && (
                  <div className={`${blockClass}__breadcrumb__icon`}>
                    <IconElement />
                  </div>
                )}
                {children}
              </div>
              <div className={`${blockClass}__breadcrumb__actions`}>
                <div className={contentActionsClasses}>{contentActions}</div>
                {pageActions}
              </div>
            </div>
          </Column>
        </Grid>
      </div>
    </PageHeaderContext.Provider>
  );
});
PageHeaderBreadcrumbBar.displayName = 'PageHeaderBreadcrumbBar';

/**
 * -----------------
 * PageHeaderContent
 * -----------------
 */
interface PageHeaderContentProps {
  /**
   * Provide child elements to be rendered inside PageHeaderContent.
   */
  children?: React.ReactNode;
  /**
   * Specify an optional className to be added to your PageHeaderContent
   */
  className?: string;
  /**
   * Provide an optional icon to render in front of the PageHeaderContent's title.
   */
  renderIcon?: ComponentType | FunctionComponent;
  /**
   * The PageHeaderContent's title
   */
  title: string;
  /**
   * The PageHeaderContent's contextual actions
   */
  contextualActions?: React.ReactNode;
  /**
   * The PageHeaderContent's page actions
   */
  pageActions?: React.ReactNode;
}

const PageHeaderContent = React.forwardRef<
  HTMLDivElement,
  PageHeaderContentProps
>(function PageHeaderContent(
  {
    className,
    children,
    title,
    renderIcon: IconElement,
    contextualActions,
    pageActions,
    ...other
  }: PageHeaderContentProps,
  ref
) {
  const contentRef = useRef<HTMLDivElement>(null);
  const componentRef = (ref ?? contentRef) as RefObject<HTMLDivElement>;
  const { setRefs, setPageActionsInstance } = usePageHeader();
  const classNames = classnames(
    {
      [`${blockClass}__content`]: true,
    },
    className
  );
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (componentRef?.current) {
      setRefs((prev) => ({ ...prev, contentRef: componentRef, titleRef }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pageActions) {
      setPageActionsInstance(pageActions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageActions]);

  const [isEllipsisApplied, setIsEllipsisApplied] = useState(false);

  const isEllipsisActive = (element: HTMLHeadingElement) => {
    setIsEllipsisApplied(element.offsetHeight < element.scrollHeight);
    return element.offsetHeight < element.scrollHeight;
  };

  useIsomorphicEffect(() => {
    titleRef.current && isEllipsisActive(titleRef.current);
  }, [title]);

  return (
    <Section as="div" className={classNames} ref={componentRef} {...other}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div className={`${blockClass}__content__title-wrapper`}>
            <div className={`${blockClass}__content__start`}>
              <div className={`${blockClass}__content__title-container`}>
                {IconElement && (
                  <div className={`${blockClass}__content__icon`}>
                    <IconElement />
                  </div>
                )}

                {isEllipsisApplied ? (
                  <DefinitionTooltip definition={title}>
                    <Text
                      ref={titleRef}
                      as={Heading}
                      className={`${blockClass}__content__title`}
                    >
                      {title}
                    </Text>
                  </DefinitionTooltip>
                ) : (
                  <Text
                    ref={titleRef}
                    as={Heading}
                    className={`${blockClass}__content__title`}
                  >
                    {title}
                  </Text>
                )}
              </div>
              {contextualActions && (
                <div className={`${blockClass}__content__contextual-actions`}>
                  {contextualActions}
                </div>
              )}
            </div>
            {pageActions}
          </div>
          {children}
        </Column>
      </Grid>
    </Section>
  );
});
PageHeaderContent.displayName = 'PageHeaderContent';

PageHeaderContent.propTypes = {
  /**
   * Provide child elements to be rendered inside PageHeaderContent.
   */
  children: PropTypes.node,
  /**
   * Specify an optional className to be added to your PageHeaderContent
   */
  className: PropTypes.string,
  /**
   * The PageHeaderContent's contextual actions
   */
  contextualActions: PropTypes.node,
  /**
   * The PageHeaderContent's page actions
   */
  pageActions: PropTypes.node,
  /**
   * Provide an optional icon to render in front of the PageHeaderContent's title.
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * The PageHeaderContent's subtitle
   */
  subtitle: PropTypes.string,
  /**
   * The PageHeaderContent's title
   */
  title: PropTypes.string.isRequired,
};

/**
 * ----------------
 * PageHeaderContentPageActions
 * ----------------
 */
interface PageHeaderContentPageActionsProps {
  /**
   * Provide child elements to be rendered inside PageHeaderContentPageActions.
   */
  children?: React.ReactNode;
  /**
   * Specify an optional className to be added to your PageHeaderContentPageActions
   */
  className?: string;
  /**
   * The PageHeaderContent's page actions collapsible Menu button label
   */
  menuButtonLabel?: string;
  /**
   * The PageHeaderContent's page actions
   */
  actions?: React.ReactNode;
}
const PageHeaderContentPageActions = ({
  className,
  children,
  menuButtonLabel = 'Actions',
  actions,
  ...other
}: PageHeaderContentPageActionsProps) => {
  const {
    setRefs,
    contentActionsClipped,
    breadcrumbActionsClipped,
    isContentActionsInBreadcrumbBar: isInBreadcrumbBar,
  } = usePageHeader();
  const classNames = classnames(
    `${blockClass}__content__page-actions`,
    {
      // Revisit this:
      // May want to only add this class if there are content actions in the breadcrumb bar as well
      [`${blockClass}__content__page-actions--clipped`]: isInBreadcrumbBar
        ? breadcrumbActionsClipped
        : contentActionsClipped,
    },
    className
  );

  type action = {
    id: string;
    onClick?: () => void;
    body: React.ReactNode;
    menuItem: MenuItemProps;
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef<HTMLDivElement>(null);
  const [menuButtonVisibility, setMenuButtonVisibility] = useState(false);
  const [hiddenItems, setHiddenItems] = useState<action[]>([]);

  // need to set the grid columns width based on the menu button's width
  // to avoid overlapping when resizing
  useIsomorphicEffect(() => {
    if (menuButtonVisibility && offsetRef.current) {
      const width = offsetRef.current.offsetWidth;
      document.documentElement.style.setProperty(
        '--page-header-title-grid-width',
        `${width}px`
      );
    }
  }, [menuButtonVisibility]);

  useEffect(() => {
    if (isInBreadcrumbBar) {
      setRefs((prev) => ({ ...prev, breadcrumbActions: containerRef }));
    } else {
      setRefs((prev) => ({ ...prev, contentActions: containerRef }));
    }
  }, [isInBreadcrumbBar, setRefs]);

  useEffect(() => {
    if (!containerRef.current || !Array.isArray(actions)) {
      return;
    }
    createOverflowHandler({
      container: containerRef.current,
      // exclude the hidden menu button from children
      maxVisibleItems: containerRef.current.children.length - 1,
      onChange: (visible, hidden) => {
        setHiddenItems(actions?.slice(visible.length));

        if (hidden.length > 0) {
          setMenuButtonVisibility(true);
        }
      },
    });
  }, [actions]);

  return (
    <div className={classNames} ref={containerRef} {...other}>
      {Array.isArray(actions) && (
        <>
          {actions.map((action) => (
            <div key={action.id}>
              {React.cloneElement(action.body, {
                ...action.body.props,
                onClick: action.onClick,
              })}
            </div>
          ))}
          <span data-offset data-hidden ref={offsetRef}>
            <MenuButton
              menuAlignment="bottom-end"
              label={menuButtonLabel}
              size="md"
            >
              {[...hiddenItems].reverse().map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={item.onClick}
                  {...item.menuItem}
                />
              ))}
            </MenuButton>
          </span>
        </>
      )}
    </div>
  );
};

PageHeaderContentPageActions.displayName = 'PageHeaderContentPageActions';
PageHeaderContentPageActions.propTypes = {
  /**
   * The PageHeaderContent's page actions
   */
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  /**
   * Provide child elements to be rendered inside PageHeaderContentPageActions.
   */
  children: PropTypes.node,
  /**
   * Specify an optional className to be added to your PageHeaderContentPageActions
   */
  className: PropTypes.string,
  /**
   * The PageHeaderContent's collapsible Menu button label
   */
  menuButtonLabel: PropTypes.string,
};

/**
 * ----------------
 * PageHeaderContentText
 * ----------------
 */
interface PageHeaderContentTextProps {
  /**
   * Provide child elements to be rendered inside PageHeaderContentText.
   */
  children?: React.ReactNode;
  /**
   * Specify an optional className to be added to your PageHeaderContentText
   */
  className?: string;
  /**
   * The PageHeaderContent's subtitle
   */
  subtitle?: string;
}
const PageHeaderContentText = ({
  className,
  children,
  subtitle,
  ...other
}: PageHeaderContentTextProps) => {
  const classNames = classnames(
    {
      [`${blockClass}__content__body`]: true,
    },
    className
  );

  return (
    <div className={classNames} {...other}>
      {subtitle && (
        <Text as="h3" className={`${blockClass}__content__subtitle`}>
          {subtitle}
        </Text>
      )}
      {children}
    </div>
  );
};

PageHeaderContentText.displayName = 'PageHeaderContentText';
PageHeaderContentText.propTypes = {
  /**
   * Provide child elements to be rendered inside PageHeaderContentText.
   */
  children: PropTypes.node,
  /**
   * Specify an optional className to be added to your PageHeaderContentText
   */
  className: PropTypes.string,
  /**
   * The PageHeaderContent's subtitle
   */
  subtitle: PropTypes.string,
};

/**
 * ----------------
 * PageHeaderHeroImage
 * ----------------
 */
interface PageHeaderHeroImageProps {
  /**
   * Provide child elements to be rendered inside PageHeaderHeroImage.
   */
  children?: React.ReactNode;
  /**
   * Specify an optional className to be added to your PageHeaderHeroImage
   */
  className?: string;
}
const PageHeaderHeroImage = ({
  className,
  children,
  ...other
}: PageHeaderHeroImageProps) => {
  const [lgBreakpoint, setLgBreakpoint] = useState(false);

  const classNames = classnames(
    {
      [`${blockClass}__hero-image`]: true,
    },
    className
  );

  const lgMediaQuery = `(min-width: ${breakpoints.lg.width})`;

  useEffect(() => {
    const listener = (event: MediaQueryListEvent) => {
      setLgBreakpoint(event.matches);
    };

    const mediaQueryList = window.matchMedia(lgMediaQuery);

    mediaQueryList.addEventListener('change', listener);

    setLgBreakpoint(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [lgMediaQuery]);

  return (
    <AspectRatio
      className={classNames}
      {...other}
      ratio={lgBreakpoint ? '2x1' : '3x2'}
    >
      {children}
    </AspectRatio>
  );
};
PageHeaderHeroImage.displayName = 'PageHeaderHeroImage';
PageHeaderHeroImage.propTypes = {
  /**
   * Provide child elements to be rendered inside PageHeaderHeroImage.
   */
  children: PropTypes.node,
  /**
   * Specify an optional className to be added to your PageHeaderHeroImage
   */
  className: PropTypes.string,
};

/**
 * ----------------
 * PageHeaderTabBar
 * ----------------
 */

interface PageHeaderTabBarProps {
  children?: React.ReactNode;
  className?: string;
  tags?: React.ReactNode;
  scroller?: React.ReactNode;
}

const PageHeaderTabBar = React.forwardRef<
  HTMLDivElement,
  PageHeaderTabBarProps
>(function PageHeaderTabBar(
  { className, children, tags, scroller, ...other }: PageHeaderTabBarProps,
  ref
) {
  const classNames = classnames(
    {
      [`${blockClass}__tab-bar`]: true,
    },
    className
  );

  const renderScroller = () =>
    scroller && (
      <div className={`${pkg.prefix}--page-header--scroller-button-container`}>
        {scroller}
      </div>
    );

  // Early return if no tags are provided
  if (!tags) {
    return (
      <div className={classNames} ref={ref} {...other}>
        <Grid condensed>
          <Column lg={16} md={8} sm={4}>
            {children}
            {renderScroller()}
          </Column>
        </Grid>
      </div>
    );
  }

  return (
    <div className={classNames} ref={ref} {...other}>
      <Grid condensed>
        <Column lg={16} md={8} sm={4}>
          <div
            className={classnames(`${blockClass}__tab-bar--tablist`, {
              [`${pkg.prefix}--page-header__tab-bar--with-scroller`]:
                !!scroller,
            })}
          >
            {children}
            {tags}
            {renderScroller()}
          </div>
        </Column>
      </Grid>
    </div>
  );
});
PageHeaderTabBar.displayName = 'PageHeaderTabBar';

interface PageHeaderTagOverflowProps {
  // Maybe scope this more to only accept tag or operational tag children
  children: React.ReactNode;
  renderOverflowTag?: (
    hiddenBreadcrumbs: HTMLElement[],
    handleOverflowClick: (event: React.MouseEvent) => void,
    openPopover: boolean
  ) => React.ReactElement;
  renderPopoverContent?: (
    hiddenBreadcrumbs: HTMLElement[]
  ) => React.ReactElement;
}

const PageHeaderTagOverflow = React.forwardRef<
  HTMLDivElement,
  PageHeaderTagOverflowProps
>(({ renderOverflowTag, renderPopoverContent, children }, ref) => {
  const [openPopover, setOpenPopover] = useState(false);
  const [hiddenTags, setHiddenTags] = useState<HTMLElement[]>([]);

  const localRef = useRef<HTMLDivElement>(null);
  const tagsContainerRef = (ref || localRef) as RefObject<HTMLDivElement>;
  // To close popover when window resizes
  useEffect(() => {
    const handleResize = () => {
      // Close the popover when window resizes to prevent unwanted opens
      setOpenPopover(false);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOverflowClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenPopover((prev) => !prev);
  }, []);

  useEffect(() => {
    localOverflowHandler({
      container: tagsContainerRef.current!,
      onChange: (_, hidden) => {
        setHiddenTags(hidden);
      },
    });
    // Don't want ref in dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={tagsContainerRef}
      className={classnames(
        `${pkg.prefix}--page-header--tag-overflow-container`,
        {
          [`${pkg.prefix}--page-header--tag-overflow-container__has-no-hidden-items`]:
            !hiddenTags.length,
        }
      )}
    >
      {children}
      <Popover
        open={openPopover}
        onRequestClose={() => setOpenPopover(false)}
        data-fixed
        className={classnames(
          `${pkg.prefix}--page-header--tag-overflow-popover`,
          {
            [`${pkg.prefix}--page-header--tag-overflow-popover__hidden`]:
              !hiddenTags.length,
          }
        )}
      >
        {renderOverflowTag?.(hiddenTags, handleOverflowClick, openPopover)}
        <PopoverContent>
          <div className={`${blockClass}__tags-popover-list`}>
            {renderPopoverContent?.(hiddenTags)}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
});

PageHeaderTagOverflow.displayName = 'PageHeaderTagOverflow';

interface PageHeaderScrollButtonProps extends IconButtonProps {
  collapseText?: string;
  expandText?: string;
}

const PageHeaderScrollButton = React.forwardRef<
  HTMLDivElement,
  PageHeaderScrollButtonProps
>(function PageHeaderExpander(
  {
    className,
    children,
    label,
    onClick,
    collapseText = 'Collapse',
    expandText = 'Expand',
    ...other
  }: PageHeaderScrollButtonProps,
  ref
) {
  const { refs, fullyCollapsed } = usePageHeader();

  const handleScroller = (isFullyCollapsed: boolean) => {
    if (!refs?.contentRef?.current) {
      return;
    }
    const scrollableTarget = scrollableAncestor(
      refs?.contentRef.current
    ) as HTMLElement;

    // Page header content is not fully collapsed
    if (!isFullyCollapsed) {
      const pageHeaderContentHeight = refs?.contentRef.current.offsetHeight;
      scrollableTarget?.scrollTo({
        top: pageHeaderContentHeight, // headerTopValue, check if breadcrumb bar is included
        behavior: 'smooth',
      });
    } else {
      // Page header content is fully collapsed
      scrollableTarget?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <IconButton
      ref={ref}
      label={fullyCollapsed ? expandText : collapseText}
      size="md"
      kind="ghost"
      autoAlign
      {...other}
      onClick={(event) => {
        onClick?.(event);
        handleScroller(!!fullyCollapsed);
      }}
      className={classnames(
        className,
        `${pkg.prefix}--page-header--scroller-button`
      )}
    >
      <ChevronUp
        className={classnames(
          `${pkg.prefix}--page-header--scroller-button-icon`,
          {
            [`${pkg.prefix}--page-header--scroller-button-icon-collapsed`]:
              fullyCollapsed,
          }
        )}
      />
    </IconButton>
  );
});

const PageHeaderTitleBreadcrumb = forwardRef<
  HTMLLIElement,
  BreadcrumbItemProps
>(({ className, children, ...other }, ref) => {
  const { titleClipped, refs } = usePageHeader();
  return (
    <BreadcrumbItem
      ref={ref}
      isCurrentPage
      {...other}
      className={classnames(
        className,
        `${pkg.prefix}--page-header-title-breadcrumb`,
        {
          [`${pkg.prefix}--page-header-title-breadcrumb-show`]:
            titleClipped && refs?.titleRef,
          [`${pkg.prefix}--page-header-title-breadcrumb-show__with-content-element`]:
            !!refs?.contentRef,
          [`${pkg.prefix}--page-header-title-breadcrumb-show__without-content-element`]:
            !refs?.contentRef,
        }
      )}
    >
      {children}
    </BreadcrumbItem>
  );
});

interface PageHeaderBreadcrumbOverflowProps extends BreadcrumbProps {
  renderOverflowBreadcrumb?: (
    hiddenBreadcrumbs: HTMLElement[]
  ) => React.ReactElement<BreadcrumbItemProps>;
}
// This component is a wrapper for the Breadcrumb, and renders breadcrumb items as children
// including the overflow breadcrumb item. The overflowHandler determines what elements
// are visible and hidden and passes the hidden elements back to the render prop used
// to display the overflow breadcrumb
const PageHeaderBreadcrumbOverflow = forwardRef<
  HTMLElement,
  PageHeaderBreadcrumbOverflowProps
>(({ renderOverflowBreadcrumb, className, children, ...other }, ref) => {
  const [hiddenBreadcrumbs, setHiddenBreadcrumbs] = React.useState<
    HTMLElement[]
  >([]);
  const fallbackRef = useRef<Breadcrumb | null>(null);
  const componentRef = (ref ?? fallbackRef) as RefObject<Breadcrumb>;

  // Initialize overflow resize handler
  const carbonPrefix = usePrefix();
  useEffect(() => {
    if (!componentRef) {
      return;
    }
    const breadcrumbList = componentRef?.current.querySelector(
      `.${carbonPrefix}--breadcrumb`
    ) as HTMLOListElement;
    localOverflowHandler({
      container: breadcrumbList,
      onChange: (_, hidden) => {
        setHiddenBreadcrumbs(hidden);
      },
    });
    // Don't want ref or carbon prefix in dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderChildren = () => {
    // Only BreadcrumbItems and TitleBreadcrumbs are valid children
    const filteredBreadcrumbs = React.Children.toArray(children).filter(
      (child) => {
        if (React.isValidElement(child)) {
          return child.type === BreadcrumbItem || PageHeaderTitleBreadcrumb;
        }
      }
    );
    // We need to clone the renderProp for the overflow breadcrumb item
    // to place it before the title breadcrumb according to the design
    if (filteredBreadcrumbs) {
      const overflowBreadcrumb = renderOverflowBreadcrumb?.(hiddenBreadcrumbs);
      interface overflowBreadcrumbItemProps extends BreadcrumbItemProps {
        'data-fixed'?: boolean;
      }
      // If no overflow breadcrumb provided, return here with the rest of the children
      if (!overflowBreadcrumb) {
        return children;
      }
      const clonedTitleBreadcrumb = React.cloneElement(
        overflowBreadcrumb as React.ReactElement<overflowBreadcrumbItemProps>,
        {
          key: 'cloned overflow breadcrumb item',
          'data-fixed': true,
          className: classnames(
            `${pkg.prefix}--page-header-breadcrumb-overflow-item`,
            {
              [`${pkg.prefix}--page-header-overflow-breadcrumb-item-with-items`]:
                hiddenBreadcrumbs.length,
            }
          ),
        }
      );
      const clonedChildren = [...filteredBreadcrumbs];
      clonedChildren.splice(
        filteredBreadcrumbs.length - 1,
        0,
        clonedTitleBreadcrumb
      ); // second to last position
      return clonedChildren;
    }
    return children;
  };

  return (
    <Breadcrumb
      className={classnames(
        className,
        `${pkg.prefix}--page-header-breadcrumb-overflow`
      )}
      ref={componentRef}
      {...other}
    >
      {renderChildren()}
    </Breadcrumb>
  );
});

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
  PageHeaderProps,
  PageHeaderBreadcrumbBarProps,
  PageHeaderContentProps,
  PageHeaderContentPageActionsProps,
  PageHeaderContentTextProps,
  PageHeaderHeroImageProps,
  PageHeaderTabBarProps,
  PageHeaderScrollButtonProps,
  PageHeaderTagOverflowProps,
};
