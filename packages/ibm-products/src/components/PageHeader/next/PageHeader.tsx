/* eslint-disable react-hooks/rules-of-hooks */
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
  useLayoutEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  RefObject,
  forwardRef,
} from 'react';
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
  OperationalTag,
  Popover,
  PopoverContent,
  Tag,
  unstable_Text as Text,
  usePrefix,
  IconButtonProps,
  IconButton,
  BreadcrumbItemProps,
  BreadcrumbItem,
  BreadcrumbProps,
  Breadcrumb,
} from '@carbon/react';
import { breakpoints } from '@carbon/layout';
import { blockClass } from '../PageHeaderUtils';
import { createOverflowHandler } from '@carbon/utilities';
import { TYPES } from '@carbon/react/es/components/Tag/Tag';
import { useOverflowItems } from '../../../global/js/hooks/useOverflowItems';
import { useId } from '../../../global/js/utils/useId';
import { ChevronUp } from '@carbon/react/icons';
import { PageHeaderContext, PageHeaderRefs, usePageHeader } from './context';
import { getHeaderOffset, scrollableAncestor } from './utils';
import { pkg } from '../../../settings';

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
    useEffect(() => {
      if (componentRef?.current && refs?.contentRef?.current) {
        const pageHeaderContentHeight = refs?.contentRef?.current?.offsetHeight;
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refs]);

    const [fullyCollapsed, setFullyCollapsed] = useState(false);
    const [titleClipped, setTitleClipped] = useState(false);

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

      if (refs?.contentRef.current) {
        contentObserver.observe(refs?.contentRef.current);
      }

      if (refs?.titleRef.current) {
        titleObserver.observe(refs?.titleRef.current);
      }

      return () => {
        if (!refs?.contentRef?.current) {
          return;
        }
        contentObserver.unobserve(refs?.contentRef.current);
        if (!refs?.titleRef?.current) {
          return;
        }
        contentObserver.unobserve(refs?.titleRef.current);
      };
    }, [refs, componentRef]);
    return (
      <PageHeaderContext.Provider
        value={{ refs, setRefs, fullyCollapsed, titleClipped }}
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
  });

  return (
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
  const { setRefs } = usePageHeader();
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

  const [isEllipsisApplied, setIsEllipsisApplied] = useState(false);

  const isEllipsisActive = (element: HTMLHeadingElement) => {
    setIsEllipsisApplied(element.offsetHeight < element.scrollHeight);
    return element.offsetHeight < element.scrollHeight;
  };

  useLayoutEffect(() => {
    titleRef.current && isEllipsisActive(titleRef.current);
  }, [title]);

  return (
    <div className={classNames} ref={componentRef} {...other}>
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
                      as="h4"
                      className={`${blockClass}__content__title`}
                    >
                      {title}
                    </Text>
                  </DefinitionTooltip>
                ) : (
                  <Text
                    ref={titleRef}
                    as="h4"
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
    </div>
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
  const classNames = classnames(
    {
      [`${blockClass}__content__page-actions`]: true,
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
  useLayoutEffect(() => {
    if (menuButtonVisibility && offsetRef.current) {
      const width = offsetRef.current.offsetWidth;
      document.documentElement.style.setProperty(
        '--page-header-title-grid-width',
        `${width}px`
      );
    }
  }, [menuButtonVisibility]);

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
interface TagItem {
  type: keyof typeof TYPES;
  text: string;
  size?: 'sm' | 'md' | 'lg';
  id: string;
}

interface PageHeaderTabBarProps {
  children?: React.ReactNode;
  className?: string;
  tags?: TagItem[];
  scroller?: React.ReactNode;
}

const PageHeaderTabBar = React.forwardRef<
  HTMLDivElement,
  PageHeaderTabBarProps
>(function PageHeaderTabBar(
  { className, children, tags = [], scroller, ...other }: PageHeaderTabBarProps,
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
  if (!tags.length) {
    return (
      <div className={classNames} ref={ref} {...other}>
        <Grid>
          <Column lg={16} md={8} sm={4}>
            {children}
            {renderScroller()}
          </Column>
        </Grid>
      </div>
    );
  }

  const [openPopover, setOpenPopover] = useState(false);
  const tagSize = tags[0]?.size || 'md';
  const instanceId = useId('PageHeaderTabBar');
  const tagsWithIds = useMemo(() => {
    return tags.map((tag, index) => ({
      ...tag,
      id: tag.id || `tag-${index}-${instanceId}`,
    }));
  }, [instanceId, tags]);

  const tagsContainerRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef<HTMLDivElement>(null);
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

  // overflow items hook
  const {
    visibleItems = [],
    hiddenItems = [],
    itemRefHandler = () => {},
  } = useOverflowItems<TagItem>(
    tagsWithIds,
    tagsContainerRef as React.RefObject<HTMLDivElement>,
    offsetRef as React.RefObject<HTMLDivElement>
  ) || {
    visibleItems: [],
    hiddenItems: [],
    itemRefHandler: () => {},
  };

  const handleOverflowClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenPopover((prev) => !prev);
  }, []);

  // Function to render tags
  const renderTags = () => (
    <div className={`${blockClass}__tags`} ref={tagsContainerRef}>
      {visibleItems.map((tag) => (
        <Tag
          key={tag.id}
          ref={(node) => itemRefHandler(tag.id, node)}
          type={tag.type}
          size={tag.size}
          className={`${blockClass}__tag-item`}
        >
          {tag.text}
        </Tag>
      ))}

      {hiddenItems.length > 0 && (
        <Popover
          open={openPopover}
          onRequestClose={() => setOpenPopover(false)}
        >
          <OperationalTag
            onClick={handleOverflowClick}
            aria-expanded={openPopover}
            text={`+${hiddenItems.length}`}
            size={tagSize}
          />
          <PopoverContent className="tag-popover-content">
            <div className={`${blockClass}__tags-popover-list`}>
              {hiddenItems.map((tag) => (
                <Tag key={tag.id} type={tag.type} size={tag.size}>
                  {tag.text}
                </Tag>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );

  return (
    <div className={classNames} ref={ref} {...other}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div
            className={classnames(`${blockClass}__tab-bar--tablist`, {
              [`${pkg.prefix}--page-header__tab-bar--with-scroller`]:
                !!scroller,
            })}
          >
            {children}
            {tags.length > 0 && renderTags()}
            {renderScroller()}
          </div>
        </Column>
      </Grid>
    </div>
  );
});
PageHeaderTabBar.displayName = 'PageHeaderTabBar';

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
        }
      )}
    >
      {children}
    </BreadcrumbItem>
  );
});

const PageHeaderBreadcrumbOverflow = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, children, ...other }, ref) => {
    const fallbackRef = useRef<Breadcrumb | null>(null);
    const componentRef = ref ?? fallbackRef;
    // Initialize overflow resize handler
    useEffect(() => {
      if (!componentRef) {
        return;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
      <Breadcrumb
        className={classnames(
          className,
          `${pkg.prefix}--page-header-breadcrumb-overflow`
        )}
        ref={componentRef}
        {...other}
      >
        {children}
      </Breadcrumb>
    );
  }
);

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
};
