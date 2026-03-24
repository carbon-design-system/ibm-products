/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Keyboard navigation utilities for AddSelect components
 */

export const KEYS = {
  ARROW_DOWN: 'ArrowDown',
  ARROW_UP: 'ArrowUp',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_LEFT: 'ArrowLeft',
  ENTER: 'Enter',
  SPACE: ' ',
  HOME: 'Home',
  END: 'End',
  TAB: 'Tab',
  ESCAPE: 'Escape',
} as const;

/**
 * Check if an element is focusable
 */
export const isFocusable = (element: HTMLElement): boolean => {
  if (!element) {
    return false;
  }

  const tabindex = element.getAttribute('tabindex');
  return tabindex !== null && tabindex !== '-1';
};

/**
 * Get all focusable elements within a container
 */
export const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  if (!container) {
    return [];
  }

  const selector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',');

  return Array.from(container.querySelectorAll(selector)) as HTMLElement[];
};

/**
 * Focus the first focusable element in a container
 */
export const focusFirstElement = (container: HTMLElement): void => {
  const elements = getFocusableElements(container);
  if (elements.length > 0) {
    elements[0].focus();
  }
};

/**
 * Focus the last focusable element in a container
 */
export const focusLastElement = (container: HTMLElement): void => {
  const elements = getFocusableElements(container);
  if (elements.length > 0) {
    elements[elements.length - 1].focus();
  }
};

/**
 * Normalize items for hierarchical navigation
 */
export interface NormalizedItem {
  id: string;
  title: string;
  value: string;
  subtitle?: string;
  parentId?: string;
  children?: NormalizedItem[];
  [key: string]: any;
}

export const normalizeItems = (
  items: any[],
  parentId: string = ''
): NormalizedItem[] => {
  return items.map((item) => {
    const normalized: NormalizedItem = {
      id: item.id,
      title: item.title,
      value: item.value,
      subtitle: item.subtitle,
      parentId,
      ...item,
    };

    if (item.children && Array.isArray(item.children)) {
      normalized.children = normalizeItems(item.children, item.id);
    }

    return normalized;
  });
};

/**
 * Flatten hierarchical items for search
 */
export const flattenItems = (items: NormalizedItem[]): NormalizedItem[] => {
  const flattened: NormalizedItem[] = [];

  const flatten = (itemList: NormalizedItem[]) => {
    itemList.forEach((item) => {
      flattened.push(item);
      if (item.children) {
        flatten(item.children);
      }
    });
  };

  flatten(items);
  return flattened;
};

/**
 * Filter items by search term
 */
export const filterItems = (
  items: NormalizedItem[],
  searchTerm: string
): NormalizedItem[] => {
  if (!searchTerm) {
    return items;
  }

  const term = searchTerm.toLowerCase();
  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(term) ||
      item.subtitle?.toLowerCase().includes(term) ||
      item.value.toLowerCase().includes(term)
  );
};

/**
 * Get item by ID from hierarchical structure
 */
export const getItemById = (
  items: NormalizedItem[],
  id: string
): NormalizedItem | null => {
  for (const item of items) {
    if (item.id === id) {
      return item;
    }
    if (item.children) {
      const found = getItemById(item.children, id);
      if (found) {
        return found;
      }
    }
  }
  return null;
};

/**
 * Build navigation path from root to item
 */
export const buildPath = (
  items: NormalizedItem[],
  itemId: string
): Array<{ id: string; title: string }> => {
  const path: Array<{ id: string; title: string }> = [];

  const findPath = (itemList: NormalizedItem[], targetId: string): boolean => {
    for (const item of itemList) {
      if (item.id === targetId) {
        path.push({ id: item.id, title: item.title });
        return true;
      }
      if (item.children) {
        path.push({ id: item.id, title: item.title });
        if (findPath(item.children, targetId)) {
          return true;
        }
        path.pop();
      }
    }
    return false;
  };

  findPath(items, itemId);
  return path;
};

// Made with Bob
