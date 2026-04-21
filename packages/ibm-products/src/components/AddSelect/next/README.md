# AddSelect - Composable Components

This directory contains the composable version of the AddSelect components.

## Overview

The composable AddSelect provides a flexible, component-based approach to
building add/select interfaces. Instead of a monolithic component, you can
compose the UI using smaller, focused components.

## Components

### Core Components

- **`AddSelect`** - Main wrapper component that provides context
- **`AddSelect.Body`** - Contains the search, breadcrumbs, and content area
- **`AddSelect.List`** - Container for items with keyboard navigation
- **`AddSelect.Item`** - Individual selectable item
- **`AddSelect.Breadcrumbs`** - Navigation breadcrumbs for hierarchical data

## Usage

### Basic Composable Usage

```jsx
import { AddSelect } from '@carbon/ibm-products';

function MyComponent() {
  const [selectedItems, setSelectedItems] = useState(new Set());

  const handleItemSelect = (itemId, selected, value) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(itemId);
    } else {
      newSelected.delete(itemId);
    }
    setSelectedItems(newSelected);
  };

  return (
    <AddSelect
      multi={true}
      onItemSelect={handleItemSelect}
      selectedItems={selectedItems}
    >
      <AddSelect.Body
        itemsLabel="Items"
        globalSearchLabel="Search"
        itemCount={items.length}
      >
        <AddSelect.List>
          {items.map((item) => (
            <AddSelect.Item
              key={item.id}
              itemId={item.id}
              title={item.title}
              value={item.value}
              subtitle={item.subtitle}
            />
          ))}
        </AddSelect.List>
      </AddSelect.Body>
    </AddSelect>
  );
}
```

## Features

### Keyboard Navigation

The `AddSelect.List` component provides full keyboard navigation:

- **Arrow Up/Down** - Navigate between items
- **Arrow Right** - Navigate into children (if available)
- **Enter/Space** - Select/deselect item
- **Ctrl+Home** - Jump to first item
- **Ctrl+End** - Jump to last item

### Search

Built-in search functionality with:

- Real-time filtering
- Search results display
- Clear visual feedback

## Utilities

The `utils.ts` file provides helper functions:

- `normalizeItems` - Normalize item structure
- `flattenItems` - Flatten hierarchical items
- `filterItems` - Filter items by search term
- `getItemById` - Find item by ID
- `buildPath` - Build navigation path

## Comparison with Legacy Components

### Legacy (Monolithic)

```jsx
<AddSelect
  items={items}
  multi={true}
  open={true}
  onSubmit={handleSubmit}
  // ... many more props
/>
```

### Composable (New)

```jsx
<AddSelect multi onItemSelect={handleSelect}>
  <AddSelect.Body itemsLabel="Items">
    <AddSelect.List>
      {items.map((item) => (
        <AddSelect.Item {...item} />
      ))}
    </AddSelect.List>
  </AddSelect.Body>
</AddSelect>
```

## Benefits

1. **Flexibility** - Compose exactly what you need
2. **Customization** - Easy to customize individual parts
3. **Reusability** - Components can be reused in different contexts
4. **Type Safety** - Full TypeScript support
5. **Accessibility** - Built-in keyboard navigation and ARIA attributes

## Migration Guide

To migrate from legacy AddSelect to composable:

1. Replace `<AddSelect>` with `<AddSelect>` wrapper
2. Add `<AddSelect.Body>` for the main content area
3. Add `<AddSelect.List>` for the item container
4. Map items to `<AddSelect.Item>` components
5. Update event handlers to use new callback signatures
