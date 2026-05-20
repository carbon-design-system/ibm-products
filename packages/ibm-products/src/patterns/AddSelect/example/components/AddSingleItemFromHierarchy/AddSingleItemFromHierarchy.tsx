/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  forwardRef,
  ForwardedRef,
  ReactNode,
  useState,
  useMemo,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ToastNotification, Tag } from '@carbon/react';
import { breakpoints } from '@carbon/layout';
import { AddSelect } from '../../../../../components/AddSelect/next';
import { AddSelectData, AddSelectItem } from '@carbon/ibm-products-primitives';
import { Tearsheet } from '../../../../../components/Tearsheet/next';
import { useMatchMedia } from '../../../../../global/js/hooks/useMatchMedia';
import './AddSingleItemFromHierarchy.scss';

const blockClass = `add-single-item-from-hierarchy-pattern`;

/**
 * AddSingleItemFromHierarchy Pattern - A complete pattern with wide Tearsheet for single selection
 * with hierarchical navigation and side panel for item details
 */

export interface AddSingleItemFromHierarchyProps {
  /**
   * Whether the tearsheet is open
   */
  open: boolean;
  /**
   * Callback to set open state
   */
  setOpen: (open: boolean) => void;
  /**
   * Array of hierarchical items to display
   */
  items: AddSelectItem[];
  /**
   * Callback when an item is submitted
   */
  onSubmit?: (itemId: string, value: string, item?: AddSelectItem) => void;
  /**
   * Title for the tearsheet
   */
  title?: string;
  /**
   * Description for the tearsheet
   */
  description?: ReactNode;
  /**
   * Label for items section
   */
  itemsLabel?: string;
  /**
   * Global search label
   */
  globalSearchLabel?: string;
  /**
   * Global search placeholder
   */
  globalSearchPlaceholder?: string;
  /**
   * Search results title
   */
  searchResultsTitle?: string;
  /**
   * No results title
   */
  noResultsTitle?: string;
  /**
   * No results description
   */
  noResultsDescription?: string;
  /**
   * Root breadcrumb title
   */
  rootBreadcrumbTitle?: string;
  /**
   * Primary button text
   */
  primaryButtonText?: string;
  /**
   * Secondary button text
   */
  secondaryButtonText?: string;
  /**
   * Success notification title
   */
  successNotificationTitle?: string;
  /**
   * Success notification subtitle template
   */
  successNotificationSubtitle?: string;
  /**
   * Side panel title
   */
  sidePanelTitle?: string;
  /**
   * Side panel description label
   */
  sidePanelDescriptionLabel?: string;
  /**
   * Side panel details label
   */
  sidePanelDetailsLabel?: string;
  /**
   * Side panel tags label
   */
  sidePanelTagsLabel?: string;
  /**
   * Placeholder for column search
   */
  columnSearchPlaceholder?: string;
  /**
   * Column title
   */
  columnTitle?: string;
  /**
   * Optional class name
   */
  className?: string;
}

/**
 * Navigation level interface for tracking hierarchy
 */
interface NavigationLevel {
  items: AddSelectItem[];
  parentId: string;
  parentTitle: string;
}

/**
 * Controlled Column Component
 * Renders a single column with items, controlled by parent state
 */
interface ColumnProps {
  items: AddSelectItem[];
  columnSearchPlaceholder?: string;
  columnTitle: string;
  level: number;
  dataManager: AddSelectData;
  onNavigate?: (
    itemId: string,
    title: string,
    children: AddSelectItem[]
  ) => void;
  selectedItems: Set<string>;
}

const ControlledColumn: React.FC<ColumnProps> = ({
  items,
  columnSearchPlaceholder = 'Find',
  columnTitle,
  level,
  dataManager,
  onNavigate,
  selectedItems,
}) => {
  const [columnSearchTerm, setColumnSearchTerm] = useState('');

  // Filter items based on column search
  const filteredItems = useMemo(() => {
    if (!columnSearchTerm) {
      return items;
    }
    return items.filter((item) => {
      const titleMatch = item.title
        ?.toLowerCase()
        .includes(columnSearchTerm.toLowerCase());
      const valueMatch = item.value
        ?.toLowerCase()
        .includes(columnSearchTerm.toLowerCase());
      return titleMatch || valueMatch;
    });
  }, [items, columnSearchTerm]);

  const handleColumnSearch = (term: string) => {
    setColumnSearchTerm(term);
  };

  // Handle navigation to children
  const handleNavigate = (itemId: string, title: string, parentId: string) => {
    const parent = items.find((item) => item.id === itemId);
    const children = parent?.children?.entries || [];

    if (children.length > 0) {
      onNavigate?.(itemId, title, children);
    }
  };

  return (
    <AddSelect.Column
      title={columnTitle}
      searchPlaceholder={columnSearchPlaceholder}
      onSearch={handleColumnSearch}
      itemCount={filteredItems.length}
      multi={false}
      onNavigate={handleNavigate}
    >
      {filteredItems.map((item) => {
        const hasChildren =
          item.children?.entries && item.children.entries.length > 0;
        return (
          <AddSelect.Row
            key={item.id}
            itemId={item.id}
            title={item.title || ''}
            subtitle={item.subtitle}
            value={item.value || ''}
            icon={item.icon}
            disabled={item.disabled}
            hasChildren={hasChildren}
          />
        );
      })}
    </AddSelect.Column>
  );
};

export const AddSingleItemFromHierarchy = forwardRef<
  HTMLDivElement,
  AddSingleItemFromHierarchyProps
>(
  (
    {
      open,
      setOpen,
      items,
      onSubmit,
      title = 'Add asset',
      description = 'Select asset from the list lorem ipsum dolor infotext.',
      itemsLabel = 'Assets',
      globalSearchLabel = 'Find assets',
      globalSearchPlaceholder = 'Find assets',
      searchResultsTitle = 'Search results',
      noResultsTitle = 'No results found',
      noResultsDescription = 'Try adjusting your search or browse categories',
      rootBreadcrumbTitle = 'Assets',
      primaryButtonText = 'Add',
      secondaryButtonText = 'Cancel',
      successNotificationTitle = 'Item Selected',
      successNotificationSubtitle = 'Selected: {value}',
      sidePanelTitle = 'Selected asset',
      sidePanelDescriptionLabel = 'Description',
      sidePanelDetailsLabel = 'Asset details',
      sidePanelTagsLabel = 'Tags',
      columnSearchPlaceholder = 'Find',
      columnTitle,
      className,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    // Initialize data manager
    const dataManager = useMemo(() => new AddSelectData(), []);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedId, setSelectedId] = useState<string>();
    const [selectedItem, setSelectedItem] = useState<AddSelectItem>();
    const [currentItems, setCurrentItems] = useState<AddSelectItem[]>([]);
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

    // Navigation state for breadcrumbs and column management
    const [navigationLevels, setNavigationLevels] = useState<NavigationLevel[]>(
      []
    );
    const [breadcrumbPath, setBreadcrumbPath] = useState<
      Array<{ id: string; title: string }>
    >([{ id: 'root', title: rootBreadcrumbTitle }]);

    // Calculate button size based on screen size
    const smMediaQuery = `(max-width: ${breakpoints.md.width})`;
    const isSm = useMatchMedia(smMediaQuery);
    const buttonSize = isSm ? 'xl' : '2xl';

    // Initialize data manager with items
    useEffect(() => {
      dataManager.setItems(items);
      setCurrentItems(items);
    }, [items, dataManager]);

    // Reset state when tearsheet opens
    useEffect(() => {
      if (open) {
        setSelectedId(undefined);
        setSelectedItem(undefined);
        setSearchTerm('');
        setNavigationLevels([]);
        setBreadcrumbPath([{ id: 'root', title: rootBreadcrumbTitle }]);
      }
    }, [open, rootBreadcrumbTitle]);

    // Handle item selection
    const handleItemSelect = (
      itemId: string,
      selected: boolean,
      value: string
    ) => {
      if (selected) {
        setSelectedId(itemId);
        const item = dataManager.getItem(itemId);
        setSelectedItem(item);
        dataManager.setSelectedItems(itemId, true);
      } else {
        setSelectedId(undefined);
        setSelectedItem(undefined);
        dataManager.clearSelections();
      }
    };

    // Handle global search
    const handleGlobalSearch = (term: string) => {
      setSearchTerm(term);

      if (term) {
        // Use the data manager's search functionality
        const results = dataManager.search(term, {
          caseSensitive: false,
          searchFields: ['title', 'value', 'subtitle'],
        });
        setCurrentItems(results);
        // Clear navigation when searching
        setNavigationLevels([]);
      } else {
        // Reset to root items
        setCurrentItems(items);
        setNavigationLevels([]);
        setBreadcrumbPath([{ id: 'root', title: rootBreadcrumbTitle }]);
      }
    };

    // Handle navigation to child level
    const handleNavigateToChild = (
      itemId: string,
      title: string,
      children: AddSelectItem[]
    ) => {
      // Add new level to navigation
      setNavigationLevels((prev) => [
        ...prev,
        {
          items: children,
          parentId: itemId,
          parentTitle: title,
        },
      ]);

      // Update breadcrumb path
      setBreadcrumbPath((prev) => [...prev, { id: itemId, title }]);
    };

    // Handle breadcrumb click to navigate back
    const handleBreadcrumbClick = (index: number) => {
      if (index === 0) {
        // Navigate back to root
        setNavigationLevels([]);
        setBreadcrumbPath([{ id: 'root', title: rootBreadcrumbTitle }]);
      } else {
        // Navigate to specific level (index - 1 because root is index 0)
        const targetLevelIndex = index - 1;
        setNavigationLevels((prev) => prev.slice(0, targetLevelIndex + 1));
        setBreadcrumbPath((prev) => prev.slice(0, index + 1));
      }
    };

    // Create selected items set
    const selectedItems = useMemo(() => {
      const set = new Set<string>();
      if (selectedId) {
        set.add(selectedId);
      }
      return set;
    }, [selectedId]);

    // Handle close
    const handleClose = () => {
      setOpen(false);
    };

    // Handle submit
    const handleSubmit = () => {
      if (selectedId && selectedItem) {
        onSubmit?.(selectedId, selectedItem.value || '', selectedItem);
        handleClose();

        // Show success notification
        const message = successNotificationSubtitle.replace(
          '{value}',
          selectedItem.value || selectedItem.title || ''
        );
        setNotificationMessage(message);
        setShowNotification(true);
      }
    };

    // Render side panel content using renderItem prop
    const renderSidePanelContent = (item: AddSelectItem) => {
      return (
        <div className={`${blockClass}__side-panel-content`}>
          {/* Item header with icon and title */}
          <div className={`${blockClass}__side-panel-header`}>
            {item.icon && (
              <div className={`${blockClass}__side-panel-icon`}>
                {item.icon}
              </div>
            )}
            <div className={`${blockClass}__side-panel-title-section`}>
              <h4 className={`${blockClass}__side-panel-item-title`}>
                {item.title}
              </h4>
              {item.subtitle && (
                <p className={`${blockClass}__side-panel-item-subtitle`}>
                  {item.subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Description section */}
          {item.meta?.description && (
            <div className={`${blockClass}__side-panel-section`}>
              <h5 className={`${blockClass}__side-panel-section-title`}>
                {sidePanelDescriptionLabel}
              </h5>
              <p className={`${blockClass}__side-panel-description`}>
                {item.meta.description}
              </p>
            </div>
          )}

          {/* Asset details section */}
          {item.meta?.details && (
            <div className={`${blockClass}__side-panel-section`}>
              <h5 className={`${blockClass}__side-panel-section-title`}>
                {sidePanelDetailsLabel}
              </h5>
              <div className={`${blockClass}__side-panel-details`}>
                {Object.entries(item.meta.details).map(([key, value]) => (
                  <div
                    key={key}
                    className={`${blockClass}__side-panel-detail-item`}
                  >
                    <span className={`${blockClass}__side-panel-detail-key`}>
                      {key}:
                    </span>{' '}
                    <span className={`${blockClass}__side-panel-detail-value`}>
                      {String(value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags section */}
          {item.meta?.tags && item.meta.tags.length > 0 && (
            <div className={`${blockClass}__side-panel-section`}>
              <h5 className={`${blockClass}__side-panel-section-title`}>
                {sidePanelTagsLabel}
              </h5>
              <div className={`${blockClass}__side-panel-tags`}>
                {item.meta.tags.map((tag: string, index: number) => (
                  <Tag key={index} type="gray" size="sm">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    };

    return (
      <>
        <Tearsheet
          ref={ref}
          open={open}
          onClose={handleClose}
          variant="wide"
          summaryContentWidth="22.5rem"
          className={cx(blockClass, className)}
          {...rest}
        >
          <Tearsheet.Header hideCloseButton>
            <Tearsheet.HeaderContent title={title}>
              <p slot="description">{description}</p>
            </Tearsheet.HeaderContent>
          </Tearsheet.Header>

          <Tearsheet.Body>
            <Tearsheet.MainContent>
              <AddSelect
                multi={false}
                onItemSelect={handleItemSelect}
                selectedItems={selectedItems}
              >
                <AddSelect.Body
                  itemsLabel={itemsLabel}
                  globalSearchLabel={globalSearchLabel}
                  globalSearchPlaceholder={globalSearchPlaceholder}
                  searchResultsTitle={searchResultsTitle}
                  itemCount={currentItems.length}
                  onSearch={handleGlobalSearch}
                  path={searchTerm ? [] : breadcrumbPath}
                  onBreadcrumbClick={handleBreadcrumbClick}
                >
                  <AddSelect.Content layout="horizontal">
                    {currentItems.length > 0 ? (
                      <>
                        {/* First column - root level */}
                        <ControlledColumn
                          items={currentItems}
                          columnSearchPlaceholder={columnSearchPlaceholder}
                          columnTitle={columnTitle || itemsLabel}
                          level={1}
                          dataManager={dataManager}
                          onNavigate={handleNavigateToChild}
                          selectedItems={selectedItems}
                        />

                        {/* Additional columns based on navigation levels */}
                        {navigationLevels.map((navLevel, index) => (
                          <ControlledColumn
                            key={`${navLevel.parentId}-${index}`}
                            items={navLevel.items}
                            columnSearchPlaceholder={columnSearchPlaceholder}
                            columnTitle={navLevel.parentTitle}
                            level={index + 2}
                            dataManager={dataManager}
                            onNavigate={handleNavigateToChild}
                            selectedItems={selectedItems}
                          />
                        ))}
                      </>
                    ) : (
                      <div className={`${blockClass}__no-results`}>
                        <h4>{noResultsTitle}</h4>
                        <p>{noResultsDescription}</p>
                      </div>
                    )}
                  </AddSelect.Content>
                </AddSelect.Body>
              </AddSelect>
            </Tearsheet.MainContent>

            {/* Side panel for selected item details using SelectionSummary - always visible */}
            <Tearsheet.SummaryContent className="summary-content-no-padding">
              <AddSelect.SelectionSummary
                title={sidePanelTitle}
                showCount={false}
                selectedItems={selectedItem ? [selectedItem] : []}
                renderItem={renderSidePanelContent}
                emptyState={
                  <div className={`${blockClass}__empty-state`}>
                    <p className={`${blockClass}__empty-state-text`}>
                      Select an item to view details
                    </p>
                  </div>
                }
              />
            </Tearsheet.SummaryContent>
          </Tearsheet.Body>

          <Tearsheet.Footer
            actions={[
              {
                kind: 'secondary',
                label: secondaryButtonText,
                onClick: handleClose,
              },
              {
                kind: 'primary',
                label: primaryButtonText,
                onClick: handleSubmit,
                disabled: !selectedId,
              },
            ]}
            buttonSize={buttonSize}
          />
        </Tearsheet>

        {showNotification && (
          <ToastNotification
            aria-label="closes notification"
            caption={new Date().toLocaleTimeString()}
            className="notification"
            kind="success"
            lowContrast
            onClose={() => setShowNotification(false)}
            role="status"
            statusIconDescription="notification"
            subtitle={notificationMessage}
            title={successNotificationTitle}
          />
        )}
      </>
    );
  }
);

AddSingleItemFromHierarchy.propTypes = {
  className: PropTypes.string,
  columnSearchPlaceholder: PropTypes.string,
  columnTitle: PropTypes.string,
  description: PropTypes.node,
  globalSearchLabel: PropTypes.string,
  globalSearchPlaceholder: PropTypes.string,
  /**@ts-ignore */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.shape({
        entries: PropTypes.array,
      }),
      disabled: PropTypes.bool,
      icon: PropTypes.node,
      id: PropTypes.string.isRequired,
      meta: PropTypes.object,
      subtitle: PropTypes.string,
      title: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  itemsLabel: PropTypes.string,
  noResultsDescription: PropTypes.string,
  noResultsTitle: PropTypes.string,
  /**@ts-ignore */
  onSubmit: PropTypes.func,
  open: PropTypes.bool.isRequired,
  primaryButtonText: PropTypes.string,
  rootBreadcrumbTitle: PropTypes.string,
  searchResultsTitle: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  /**@ts-ignore */
  setOpen: PropTypes.func.isRequired,
  sidePanelDescriptionLabel: PropTypes.string,
  sidePanelDetailsLabel: PropTypes.string,
  sidePanelTagsLabel: PropTypes.string,
  sidePanelTitle: PropTypes.string,
  successNotificationSubtitle: PropTypes.string,
  successNotificationTitle: PropTypes.string,
  title: PropTypes.string,
};

AddSingleItemFromHierarchy.displayName = 'AddSingleItemFromHierarchy';

// Made with Bob
