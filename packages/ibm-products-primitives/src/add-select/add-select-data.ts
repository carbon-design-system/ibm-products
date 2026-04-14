/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Status types for items in the hierarchical data structure
 */
export type ItemStatus = 'checked' | 'unchecked' | 'intermediate';

/**
 * Interface for hierarchical data items
 */
export interface HierarchicalItem {
  id: string;
  title?: string;
  value?: string;
  selected?: boolean;
  status?: ItemStatus;
  children?: {
    entries: HierarchicalItem[];
  };
  [key: string]: any; // Allow additional properties
}

/**
 * Options for search functionality
 */
export interface SearchOptions {
  caseSensitive?: boolean;
  searchFields?: string[]; // Fields to search in (default: ['title', 'value'])
}

/**
 * AddSelectData - A lightweight, framework-agnostic utility for managing hierarchical data
 *
 * This utility provides standard APIs for common operations such as setting, selecting,
 * traversing, searching, and sorting hierarchical data structures. It encapsulates data
 * logic separate from UI, allowing both React and Web Components to reuse the same
 * data management functions.
 */
export class AddSelectData {
  private items: HierarchicalItem[] = [];
  private itemMap: Map<string, HierarchicalItem> = new Map();
  private parentMap: Map<string, string> = new Map(); // child id -> parent id

  /**
   * Initialize or replace the hierarchical data
   * @param items - Array of hierarchical items
   */
  setItems(items: HierarchicalItem[]): void {
    this.items = items;
    this._buildMaps(items);
  }

  /**
   * Get the full list of items
   * @returns Array of all items
   */
  getItems(): HierarchicalItem[] {
    return this.items;
  }

  /**
   * Retrieve a single item by its id
   * @param id - The item id
   * @returns The item or undefined if not found
   */
  getItem(id: string): HierarchicalItem | undefined {
    return this.itemMap.get(id);
  }

  /**
   * Update a given item with new properties
   * @param id - The item id
   * @param newProperties - Properties to update
   * @returns true if item was found and updated, false otherwise
   */
  setItem(id: string, newProperties: Partial<HierarchicalItem>): boolean {
    const item = this.itemMap.get(id);
    if (!item) {
      return false;
    }

    Object.assign(item, newProperties);
    return true;
  }

  /**
   * Returns an array of items marked as selected
   * @returns Array of selected items
   */
  getSelectedItems(): HierarchicalItem[] {
    const selected: HierarchicalItem[] = [];
    this._traverseItems(this.items, (item) => {
      if (item.selected) {
        selected.push(item);
      }
    });
    return selected;
  }

  /**
   * Mark one or more items (by id) as selected
   * @param ids - Single id or array of ids to select
   * @param exclusive - If true, deselect all other items (default: false)
   */
  setSelectedItems(ids: string | string[], exclusive: boolean = false): void {
    const idArray = Array.isArray(ids) ? ids : [ids];

    if (exclusive) {
      // Deselect all items first
      this._traverseItems(this.items, (item) => {
        item.selected = false;
        item.status = 'unchecked';
      });
    }

    // Select specified items
    idArray.forEach((id) => {
      const item = this.itemMap.get(id);
      if (item) {
        item.selected = true;
        item.status = 'checked';
      }
    });
  }

  /**
   * Get direct children of a node
   * @param id - The parent item id
   * @returns Array of child items or empty array if no children
   */
  getItemChildren(id: string): HierarchicalItem[] {
    const item = this.itemMap.get(id);
    return item?.children?.entries || [];
  }

  /**
   * Get the parent of a node
   * @param id - The child item id
   * @returns The parent item or undefined if no parent (root level)
   */
  getItemParent(id: string): HierarchicalItem | undefined {
    const parentId = this.parentMap.get(id);
    return parentId ? this.itemMap.get(parentId) : undefined;
  }

  /**
   * Get all ancestors (parents up to the root) of a node
   * @param id - The item id
   * @returns Array of ancestor items from immediate parent to root
   */
  getItemParents(id: string): HierarchicalItem[] {
    const parents: HierarchicalItem[] = [];
    let currentId: string | undefined = id;

    while (currentId) {
      const parentId = this.parentMap.get(currentId);
      if (!parentId) {
        break;
      }

      const parent = this.itemMap.get(parentId);
      if (parent) {
        parents.push(parent);
      }
      currentId = parentId;
    }

    return parents;
  }

  /**
   * Retrieve the selected state status of an item
   * @param id - The item id
   * @returns The status or undefined if item not found
   */
  getItemStatus(id: string): ItemStatus | undefined {
    const item = this.itemMap.get(id);
    return item?.status;
  }

  /**
   * Set or update the status of an item
   * @param id - The item id
   * @param status - The new status
   * @returns true if item was found and updated, false otherwise
   */
  setItemStatus(id: string, status: ItemStatus): boolean {
    const item = this.itemMap.get(id);
    if (!item) {
      return false;
    }

    item.status = status;
    item.selected = status === 'checked';
    return true;
  }

  /**
   * Check whether an item is selected
   * @param id - The item id
   * @returns true if selected, false otherwise
   */
  isSelected(id: string): boolean {
    const item = this.itemMap.get(id);
    return item?.selected === true;
  }

  /**
   * Search items based on a query and return matching items
   * @param query - The search query string
   * @param options - Search options
   * @returns Array of matching items
   */
  search(query: string, options: SearchOptions = {}): HierarchicalItem[] {
    const { caseSensitive = false, searchFields = ['title', 'value'] } =
      options;

    if (!query) {
      return [];
    }

    const searchTerm = caseSensitive ? query : query.toLowerCase();
    const results: HierarchicalItem[] = [];

    this._traverseItems(this.items, (item) => {
      for (const field of searchFields) {
        const fieldValue = item[field];
        if (fieldValue) {
          const valueToSearch = caseSensitive
            ? String(fieldValue)
            : String(fieldValue).toLowerCase();

          if (valueToSearch.includes(searchTerm)) {
            results.push(item);
            break; // Don't add the same item multiple times
          }
        }
      }
    });

    return results;
  }

  /**
   * Sort items based on a comparator function
   * @param compareFn - Comparison function for sorting
   * @param recursive - If true, sort children recursively (default: false)
   */
  sort(
    compareFn: (a: HierarchicalItem, b: HierarchicalItem) => number,
    recursive: boolean = false
  ): void {
    this.items.sort(compareFn);

    if (recursive) {
      this._sortRecursive(this.items, compareFn);
    }

    // Rebuild maps after sorting
    this._buildMaps(this.items);
  }

  /**
   * Clear all selections
   */
  clearSelections(): void {
    this._traverseItems(this.items, (item) => {
      item.selected = false;
      item.status = 'unchecked';
    });
  }

  /**
   * Get the depth/level of an item in the hierarchy
   * @param id - The item id
   * @returns The depth (0 for root level items) or -1 if not found
   */
  getItemDepth(id: string): number {
    if (!this.itemMap.has(id)) {
      return -1;
    }

    let depth = 0;
    let currentId: string | undefined = id;

    while (currentId) {
      const parentId = this.parentMap.get(currentId);
      if (!parentId) {
        break;
      }
      depth++;
      currentId = parentId;
    }

    return depth;
  }

  /**
   * Check if an item has children
   * @param id - The item id
   * @returns true if item has children, false otherwise
   */
  hasChildren(id: string): boolean {
    const item = this.itemMap.get(id);
    return !!(item?.children?.entries && item.children.entries.length > 0);
  }

  /**
   * Get all descendant items of a node
   * @param id - The parent item id
   * @returns Array of all descendant items
   */
  getItemDescendants(id: string): HierarchicalItem[] {
    const item = this.itemMap.get(id);
    if (!item?.children?.entries) {
      return [];
    }

    const descendants: HierarchicalItem[] = [];
    this._traverseItems(item.children.entries, (child) => {
      descendants.push(child);
    });

    return descendants;
  }

  /**
   * Build internal maps for efficient lookups
   * @private
   */
  private _buildMaps(items: HierarchicalItem[], parentId?: string): void {
    if (!parentId) {
      // Clear maps when building from root
      this.itemMap.clear();
      this.parentMap.clear();
    }

    items.forEach((item) => {
      this.itemMap.set(item.id, item);

      if (parentId) {
        this.parentMap.set(item.id, parentId);
      }

      if (item.children?.entries) {
        this._buildMaps(item.children.entries, item.id);
      }
    });
  }

  /**
   * Traverse all items and apply a callback function
   * @private
   */
  private _traverseItems(
    items: HierarchicalItem[],
    callback: (item: HierarchicalItem) => void
  ): void {
    items.forEach((item) => {
      callback(item);
      if (item.children?.entries) {
        this._traverseItems(item.children.entries, callback);
      }
    });
  }

  /**
   * Sort items recursively
   * @private
   */
  private _sortRecursive(
    items: HierarchicalItem[],
    compareFn: (a: HierarchicalItem, b: HierarchicalItem) => number
  ): void {
    items.forEach((item) => {
      if (item.children?.entries) {
        item.children.entries.sort(compareFn);
        this._sortRecursive(item.children.entries, compareFn);
      }
    });
  }
}
