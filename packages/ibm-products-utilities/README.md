# @carbon/ibm-products-utilities

> Framework-agnostic utilities for Carbon for IBM Products

This package provides framework-agnostic JavaScript/TypeScript utilities and
primitives that can be shared across both React and Web Components
implementations of Carbon for IBM Products.

## Installation

```bash
npm install @carbon/ibm-products-utilities
```

or

```bash
yarn add @carbon/ibm-products-utilities
```

## Purpose

The `@carbon/ibm-products-primitives` package encapsulates business logic and
data management utilities that are independent of any UI framework. This
promotes:

- **Code Reusability**: Share the same logic between React and Web Components
- **Maintainability**: Single source of truth for business logic
- **Framework Agnostic**: Pure TypeScript/JavaScript with no framework
  dependencies
- **Type Safety**: Full TypeScript support with comprehensive type definitions

## Available Utilities

### AddSelectData

A lightweight utility for managing hierarchical data structures with support for
selection, traversal, searching, and sorting.

```typescript
import {
  AddSelectData,
  HierarchicalItem,
} from '@carbon/ibm-products-primitives';

const dataManager = new AddSelectData();
dataManager.setItems([
  { id: '1', title: 'Item 1', value: 'item1' },
  { id: '2', title: 'Item 2', value: 'item2' },
]);

// Select items
dataManager.setSelectedItems('1');

// Search
const results = dataManager.search('Item 1');

// Navigate hierarchy
const children = dataManager.getItemChildren('1');
```

[View full AddSelectData documentation](./src/add-select/add-select-data.md)

## Usage

### With React

```typescript
import {
  AddSelectData,
  HierarchicalItem,
} from '@carbon/ibm-products-primitives';

function MyComponent() {
  const [dataManager] = useState(() => new AddSelectData());

  useEffect(() => {
    dataManager.setItems(myData);
  }, [myData]);

  // Use dataManager methods...
}
```

### With Web Components (Lit)

```typescript
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import {
  AddSelectData,
  HierarchicalItem,
} from '@carbon/ibm-products-primitives';

@customElement('my-component')
export class MyComponent extends LitElement {
  private dataManager = new AddSelectData();

  @state()
  private items: HierarchicalItem[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.dataManager.setItems(this.items);
  }

  // Use dataManager methods...
}
```

## Package Structure

```
@carbon/ibm-products-primitives/
├── es/                    # ESM build output
├── lib/                   # CommonJS build output
├── src/
│   ├── add-select/       # AddSelect utility
│   │   ├── add-select-data.ts
│   │   ├── add-select-data.spec.ts
│   │   ├── add-select-data.md
│   │   └── index.ts
│   └── index.ts          # Main entry point
├── package.json
├── tsconfig.json
└── README.md
```

## Development

### Building

```bash
yarn build
```

### Testing

```bash
yarn test
```

### Adding New Primitives

When adding new primitives to this package:

1. Create a new directory under `src/` (e.g., `src/my-primitive/`)
2. Add your implementation file (e.g., `my-primitive.ts`)
3. Add tests (e.g., `my-primitive.spec.ts`)
4. Add documentation (e.g., `my-primitive.md`)
5. Create a barrel export (`index.ts`)
6. Export from the main `src/index.ts`

Example structure:

```
src/my-primitive/
├── index.ts
├── my-primitive.ts
├── my-primitive.spec.ts
└── my-primitive.md
```

## Contributing

This package is part of the Carbon for IBM Products monorepo and is published to
npm. Please follow the
[contribution guidelines](../../docs/MAINTAINER_GUIDELINES.md) when making
changes.

## License

Licensed under the Apache-2.0 license. See [LICENSE](./LICENSE) for details.

## Related Packages

- [@carbon/ibm-products](../ibm-products) - React components
- [@carbon/ibm-products-web-components](../ibm-products-web-components) - Web
  Components
- [@carbon/ibm-products-styles](../ibm-products-styles) - Shared styles
