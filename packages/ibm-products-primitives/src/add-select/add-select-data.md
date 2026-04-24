# AddSelectData Utility

A lightweight, framework-agnostic JavaScript library for manipulating and
processing hierarchical data. This utility provides standard APIs for common
operations such as setting, selecting, traversing, searching, and sorting
hierarchical data structures.

## Purpose

The AddSelectData utility encapsulates data logic separate from UI components,
allowing both React and Web Components to reuse the same data management
functions. This promotes code reusability and maintainability across different
frameworks.

## Installation

```typescript
import { AddSelectData, AddSelectItem } from '@carbon/ibm-products-primitives';
```

## Data Structure

The utility works with hierarchical items that follow this interface:

```typescript
interface AddSelectItem {
  id: string;
  title?: string;
  value?: string;
  selected?: boolean;
  status?: 'checked' | 'unchecked' | 'intermediate';
  children?: {
    entries: AddSelectItem[];
  };
  [key: string]: any; // Allow additional properties
}
```

## API Reference

### Core Methods

#### `setItems(items: AddSelectItem[]): void`

Initialize or replace the hierarchical data.

```typescript
const dataManager = new AddSelectData();
dataManager.setItems([
  { id: '1', title: 'Item 1', value: 'item1' },
  { id: '2', title: 'Item 2', value: 'item2' },
]);
```

#### `getItems(): AddSelectItem[]`

Get the full list of items.

```typescript
const allItems = dataManager.getItems();
```

#### `getItem(id: string): AddSelectItem | undefined`

Retrieve a single item by its id.

```typescript
const item = dataManager.getItem('1');
```

#### `setItem(id: string, newProperties: Partial<AddSelectItem>): boolean`

Update a given item with new properties. Returns `true` if successful.

```typescript
dataManager.setItem('1', { title: 'Updated Title' });
```

### Selection Methods

#### `getSelectedItems(): AddSelectItem[]`

Returns an array of items marked as selected.

```typescript
const selected = dataManager.getSelectedItems();
```

#### `setSelectedItems(ids: string | string[], exclusive?: boolean): void`

Mark one or more items (by id) as selected. If `exclusive` is true, deselects
all other items.

```typescript
// Single selection
dataManager.setSelectedItems('1');

// Multiple selection
dataManager.setSelectedItems(['1', '2']);

// Exclusive selection (single-select mode)
dataManager.setSelectedItems('3', true);
```

#### `isSelected(id: string): boolean`

Check whether an item is selected.

```typescript
if (dataManager.isSelected('1')) {
  console.log('Item 1 is selected');
}
```

#### `clearSelections(): void`

Clear all selections.

```typescript
dataManager.clearSelections();
```

### Hierarchy Methods

#### `getItemChildren(id: string): AddSelectItem[]`

Get direct children of a node.

```typescript
const children = dataManager.getItemChildren('parent-id');
```

#### `getItemParent(id: string): AddSelectItem | undefined`

Get the parent of a node.

```typescript
const parent = dataManager.getItemParent('child-id');
```

#### `getItemParents(id: string): AddSelectItem[]`

Get all ancestors (parents up to the root) of a node.

```typescript
const ancestors = dataManager.getItemParents('deeply-nested-id');
```

#### `hasChildren(id: string): boolean`

Check if an item has children.

```typescript
if (dataManager.hasChildren('1')) {
  console.log('Item has children');
}
```

#### `getItemDepth(id: string): number`

Get the depth/level of an item in the hierarchy (0 for root level).

```typescript
const depth = dataManager.getItemDepth('nested-item');
```

#### `getItemDescendants(id: string): AddSelectItem[]`

Get all descendant items of a node.

```typescript
const descendants = dataManager.getItemDescendants('parent-id');
```

### Status Methods

#### `getItemStatus(id: string): ItemStatus | undefined`

Retrieve the selected state status of an item. Status can be 'checked',
'unchecked', or 'intermediate'.

```typescript
const status = dataManager.getItemStatus('1');
```

#### `setItemStatus(id: string, status: ItemStatus): boolean`

Set or update the status of an item. Returns `true` if successful.

```typescript
dataManager.setItemStatus('1', 'checked');
```

### Search and Sort Methods

#### `search(query: string, options?: SearchOptions): AddSelectItem[]`

Search items based on a query and return matching items.

```typescript
// Basic search
const results = dataManager.search('search term');

// Case-sensitive search
const results = dataManager.search('Search Term', { caseSensitive: true });

// Search in specific fields
const results = dataManager.search('term', {
  searchFields: ['title', 'value', 'description'],
});
```

**SearchOptions:**

- `caseSensitive?: boolean` - Default: `false`
- `searchFields?: string[]` - Default: `['title', 'value']`

#### `sort(compareFn: (a, b) => number, recursive?: boolean): void`

Sort items based on a comparator function.

```typescript
// Sort by title
dataManager.sort((a, b) => a.title!.localeCompare(b.title!));

// Sort recursively (including children)
dataManager.sort((a, b) => a.title!.localeCompare(b.title!), true);
```

## Usage Example

```typescript
import { AddSelectData, AddSelectItem } from '@carbon/ibm-products-primitives';

// Initialize the data manager
const dataManager = new AddSelectData();

// Set up hierarchical data
const items: AddSelectItem[] = [
  {
    id: '1',
    title: 'California',
    value: 'ca',
    children: {
      entries: [
        { id: '1-1', title: 'Los Angeles', value: 'la' },
        { id: '1-2', title: 'San Francisco', value: 'sf' },
      ],
    },
  },
  {
    id: '2',
    title: 'Texas',
    value: 'tx',
  },
];

dataManager.setItems(items);

// Select an item
dataManager.setSelectedItems('1-1', true);

// Search for items
const searchResults = dataManager.search('los');

// Navigate hierarchy
const children = dataManager.getItemChildren('1');
const parent = dataManager.getItemParent('1-1');

// Check selection
if (dataManager.isSelected('1-1')) {
  console.log('Los Angeles is selected');
}
```

## Integration with Web Components

The utility is designed to work seamlessly with Lit-based Web Components:

```typescript
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { AddSelectData, AddSelectItem } from '@carbon/ibm-products-primitives';

@customElement('my-component')
export class MyComponent extends LitElement {
  private dataManager = new AddSelectData();

  @state()
  private items: AddSelectItem[] = [];

  constructor() {
    super();
    this.dataManager.setItems(this.items);
  }

  private handleSearch(query: string) {
    this.items = this.dataManager.search(query);
  }

  private handleSelect(id: string) {
    this.dataManager.setSelectedItems(id, true);
    this.requestUpdate();
  }
}
```

## Benefits

1. **Framework Agnostic**: Works with any JavaScript framework or vanilla JS
2. **Type Safe**: Full TypeScript support with comprehensive type definitions
3. **Efficient**: Uses internal maps for O(1) lookups
4. **Flexible**: Supports custom properties and extensible data structures
5. **Comprehensive**: Covers all common hierarchical data operations
6. **Well Tested**: Includes comprehensive unit tests

## Testing

The utility includes comprehensive unit tests covering all methods. Run tests
with:

```bash
npm test -- add-select-data.spec.ts
```

## License

Copyright IBM Corp. 2026

This source code is licensed under the Apache-2.0 license found in the LICENSE
file in the root directory of this source tree.
