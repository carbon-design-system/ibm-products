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
  useContext,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ToastNotification } from '@carbon/react';
import { breakpoints } from '@carbon/layout';
import { AddSelect } from '../../../../../components/AddSelect/next';
import { AddSelectData, AddSelectItem } from '@carbon/ibm-products-primitives';
import { AddSelectContext } from '../../../../../components/AddSelect/next/context';
import { Tearsheet } from '../../../../../components/Tearsheet/next';
import { NoDataEmptyState } from '../../../../../components/EmptyStates';
import { useMatchMedia } from '../../../../../global/js/hooks/useMatchMedia';
import './MultiAddSelectWithHierarchy.scss';

const blockClass = `multi-add-select-hierarchy-pattern`;

/**
 * MultiAddSelectWithHierarchy Pattern - A complete pattern with Tearsheet for multi-selection with hierarchy
 * Uses recursive column generation to display hierarchy levels side-by-side
 */

export interface MultiAddSelectWithHierarchyProps {
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
   * Callback when items are submitted
   */
  onSubmit?: (itemIds: string[], values: string[]) => void;
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
   * Title for the selection summary panel
   */
  selectionSummaryTitle?: string;
  /**
   * Empty state title when no items selected
   */
  noSelectionTitle?: string;
  /**
   * Empty state description when no items selected
   */
  noSelectionDescription?: string;
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
   * Success notification subtitle template (use {count} for item count)
   */
  successNotificationSubtitle?: string;
  /**
   * Placeholder for column search
   */
  columnSearchPlaceholder?: string;
  /**
   * Column title
   */
  columnTitle?: string;
  /**
   * Root breadcrumb title
   */
  rootBreadcrumbTitle?: string;
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
  onShowInfo?: (itemId: string) => void;
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
  onSelectAll?: (itemIds: string[], selected: boolean) => void;
}

const ControlledColumn: React.FC<ColumnProps> = ({
  items,
  onShowInfo,
  columnSearchPlaceholder = 'Find',
  columnTitle,
  level,
  dataManager,
  onNavigate,
  selectedItems,
  onSelectAll,
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

  // Check if all items in this column are selected
  const allSelected = useMemo(() => {
    if (filteredItems.length === 0) return false;
    return filteredItems.every((item) => selectedItems.has(item.id));
  }, [filteredItems, selectedItems]);

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

  // Handle select all for this column
  const handleSelectAll = (checked: boolean) => {
    const itemIds = filteredItems.map((item) => item.id);
    onSelectAll?.(itemIds, checked);
  };

  return (
    <AddSelect.Column
      title={columnTitle}
      searchPlaceholder={columnSearchPlaceholder}
      onSearch={handleColumnSearch}
      itemCount={filteredItems.length}
      multi={true}
      onNavigate={handleNavigate}
      showSelectAll={true}
      allSelected={allSelected}
      onSelectAll={handleSelectAll}
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
            hasInfoPanel={!!item.meta}
            onInfoPanelClick={onShowInfo}
          />
        );
      })}
    </AddSelect.Column>
  );
};

export const MultiAddSelectWithHierarchy = forwardRef<
  HTMLDivElement,
  MultiAddSelectWithHierarchyProps
>(
  (
    {
      open,
      setOpen,
      items,
      onSubmit,
      title = 'Add items',
      description = 'Select items from the list below',
      itemsLabel = 'Items',
      globalSearchLabel = 'Search',
      globalSearchPlaceholder = 'Search items',
      searchResultsTitle = 'Search results',
      noResultsTitle = 'No results found',
      noResultsDescription = 'Try adjusting your search',
      selectionSummaryTitle = 'Selected items',
      noSelectionTitle = 'No items selected',
      noSelectionDescription = 'Select items from the list',
      primaryButtonText = 'Add',
      secondaryButtonText = 'Cancel',
      successNotificationTitle = 'Success',
      successNotificationSubtitle = '{count} item{plural} added',
      columnSearchPlaceholder = 'Find',
      columnTitle,
      rootBreadcrumbTitle = 'Items',
      className,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    // Initialize data manager
    const dataManager = useMemo(() => new AddSelectData(), []);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [currentItems, setCurrentItems] = useState<AddSelectItem[]>([]);
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [infoPanel, setInfoPanel] = useState<{
      item: AddSelectItem | null;
      show: boolean;
    }>({ item: null, show: false });

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
        setSelectedIds(new Set());
        setSearchTerm('');
        setInfoPanel({ item: null, show: false });
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
      const newSelectedIds = new Set(selectedIds);

      if (selected) {
        newSelectedIds.add(itemId);
        dataManager.setSelectedItems(itemId, true);
      } else {
        newSelectedIds.delete(itemId);
        dataManager.setSelectedItems(itemId, false);
      }

      setSelectedIds(newSelectedIds);
    };

    // Handle select all for a column
    const handleSelectAll = (itemIds: string[], selected: boolean) => {
      const newSelectedIds = new Set(selectedIds);

      itemIds.forEach((itemId) => {
        if (selected) {
          newSelectedIds.add(itemId);
          dataManager.setSelectedItems(itemId, true);
        } else {
          newSelectedIds.delete(itemId);
          dataManager.setSelectedItems(itemId, false);
        }
      });

      setSelectedIds(newSelectedIds);
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

    // Handle removing item from selection summary
    const handleRemoveItem = (itemId: string) => {
      const item = dataManager.getItem(itemId);
      if (item) {
        handleItemSelect(itemId, false, item.value || '');
      }
    };

    // Handle close
    const handleClose = () => {
      setOpen(false);
    };

    // Handle submit
    const handleSubmit = () => {
      if (selectedIds.size > 0) {
        const selectedIdsArray = Array.from(selectedIds);
        const selectedValues = selectedIdsArray.map((id) => {
          const item = dataManager.getItem(id);
          return item?.value || '';
        });

        onSubmit?.(selectedIdsArray, selectedValues);
        handleClose();

        // Show success notification
        const count = selectedIds.size;
        const message = successNotificationSubtitle
          .replace('{count}', count.toString())
          .replace('{plural}', count > 1 ? 's' : '');
        setNotificationMessage(message);
        setShowNotification(true);
      }
    };

    // Handle show info
    const handleShowInfo = (itemId: string) => {
      const item = dataManager.getItem(itemId);
      if (item && item.meta) {
        setInfoPanel({ item, show: true });
      }
    };

    // Handle close info
    const handleCloseInfo = () => {
      setInfoPanel({ item: null, show: false });
    };

    // Get selected items for display
    const selectedItemsForDisplay = useMemo(() => {
      return Array.from(selectedIds)
        .map((id) => dataManager.getItem(id))
        .filter((item): item is AddSelectItem => item !== undefined);
    }, [selectedIds, dataManager]);

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
                multi={true}
                onItemSelect={handleItemSelect}
                selectedItems={selectedIds}
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
                          onShowInfo={handleShowInfo}
                          columnSearchPlaceholder={columnSearchPlaceholder}
                          columnTitle={columnTitle || itemsLabel}
                          level={1}
                          dataManager={dataManager}
                          onNavigate={handleNavigateToChild}
                          selectedItems={selectedIds}
                          onSelectAll={handleSelectAll}
                        />

                        {/* Additional columns based on navigation levels */}
                        {navigationLevels.map((navLevel, index) => (
                          <ControlledColumn
                            key={`${navLevel.parentId}-${index}`}
                            items={navLevel.items}
                            onShowInfo={handleShowInfo}
                            columnSearchPlaceholder={columnSearchPlaceholder}
                            columnTitle={navLevel.parentTitle}
                            level={index + 2}
                            dataManager={dataManager}
                            onNavigate={handleNavigateToChild}
                            selectedItems={selectedIds}
                            onSelectAll={handleSelectAll}
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

            <Tearsheet.SummaryContent className="summary-content-no-padding">
              {infoPanel.show && infoPanel.item ? (
                <AddSelect.ItemSummaryPanel
                  title="Item details"
                  item={infoPanel.item.meta}
                  onClose={handleCloseInfo}
                  closeIconDescription="Close details"
                />
              ) : (
                <AddSelect.SelectionSummary
                  title={selectionSummaryTitle}
                  selectedItems={selectedItemsForDisplay}
                  emptyState={
                    <div style={{ marginBlockStart: '3rem' }}>
                      <NoDataEmptyState
                        illustrationTheme="light"
                        size="sm"
                        title={noSelectionTitle}
                        subtitle={noSelectionDescription}
                      />
                    </div>
                  }
                >
                  {selectedItemsForDisplay.map((item) => (
                    <AddSelect.SelectionSummaryItem
                      key={item.id}
                      item={item}
                      onRemove={handleRemoveItem}
                      useAccordion={true}
                    />
                  ))}
                </AddSelect.SelectionSummary>
              )}
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
                disabled: selectedIds.size === 0,
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

MultiAddSelectWithHierarchy.propTypes = {
  className: PropTypes.string,
  columnSearchPlaceholder: PropTypes.string,
  columnTitle: PropTypes.string,
  description: PropTypes.node,
  globalSearchLabel: PropTypes.string,
  globalSearchPlaceholder: PropTypes.string,
  /**@ts-ignore */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      icon: PropTypes.node,
      id: PropTypes.string.isRequired,
      meta: PropTypes.node,
      subtitle: PropTypes.string,
      title: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  itemsLabel: PropTypes.string,
  noResultsDescription: PropTypes.string,
  noResultsTitle: PropTypes.string,
  noSelectionDescription: PropTypes.string,
  noSelectionTitle: PropTypes.string,
  /**@ts-ignore */
  onSubmit: PropTypes.func,
  /**@ts-ignore */
  open: PropTypes.bool.isRequired,
  primaryButtonText: PropTypes.string,
  searchResultsTitle: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  selectionSummaryTitle: PropTypes.string,
  /**@ts-ignore */
  setOpen: PropTypes.func.isRequired,
  successNotificationSubtitle: PropTypes.string,
  successNotificationTitle: PropTypes.string,
  title: PropTypes.string,
};

MultiAddSelectWithHierarchy.displayName = 'MultiAddSelectWithHierarchy';
