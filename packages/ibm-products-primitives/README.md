# @carbon/ibm-products-primitives

> **Private Package**: Internal framework-agnostic primitives for Carbon for IBM
> Products

This is a **private package** that provides framework-agnostic
JavaScript/TypeScript utilities and primitives shared internally between
`@carbon/ibm-products` and `@carbon/ibm-products-web-components` packages.

## ⚠️ Important Notice

**This package is not intended for direct public consumption.** It is a private,
internal dependency used by:

- `@carbon/ibm-products` - React components
- `@carbon/ibm-products-web-components` - Web Components

These consumer packages selectively re-export only the necessary utilities for
public usage. End users should import from the appropriate consumer package
rather than directly from `@carbon/ibm-products-primitives`.

## Purpose

The `@carbon/ibm-products-primitives` package serves as a shared foundation
that:

- **Enables Code Reusability**: Provides common business logic and utilities
  shared between React and Web Components implementations
- **Improves Maintainability**: Establishes a single source of truth for
  framework-agnostic logic
- **Ensures Framework Agnosticism**: Contains pure TypeScript/JavaScript with no
  framework dependencies
- **Provides Type Safety**: Offers full TypeScript support with comprehensive
  type definitions
- **Supports Selective Exposure**: Allows consumer packages to re-export only
  the utilities appropriate for public use

## Available Utilities

### AddSelectData

A lightweight utility for managing hierarchical data structures with support for
selection, traversal, searching, and sorting.

```typescript
import { AddSelectData, AddSelectItem } from '@carbon/ibm-products-primitives';

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

## Internal Usage

This package is consumed internally by the following packages:

### @carbon/ibm-products (React)

The React package imports primitives and selectively re-exports utilities that
are appropriate for public consumption:

```typescript
// Internal usage within @carbon/ibm-products
import { AddSelectData, AddSelectItem } from '@carbon/ibm-products-primitives';

function MyComponent() {
  const [dataManager] = useState(() => new AddSelectData());

  useEffect(() => {
    dataManager.setItems(myData);
  }, [myData]);

  // Use dataManager methods...
}

// Public re-export (example)
export { AddSelectData, AddSelectItem } from '@carbon/ibm-products-primitives';
```

### @carbon/ibm-products-web-components

The Web Components package similarly imports and selectively re-exports:

```typescript
// Internal usage within @carbon/ibm-products-web-components
import { AddSelectData, AddSelectItem } from '@carbon/ibm-products-primitives';

@customElement('my-component')
export class MyComponent extends LitElement {
  private dataManager = new AddSelectData();

  @state()
  private items: AddSelectItem[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.dataManager.setItems(this.items);
  }

  // Use dataManager methods...
}

// Public re-export (example)
export { AddSelectData, AddSelectItem } from '@carbon/ibm-products-primitives';
```

## For End Users

**Do not install or import from this package directly.** Instead, use the
appropriate consumer package:

### React Users

```typescript
// ✅ Correct - Import from @carbon/ibm-products
import { AddSelectData } from '@carbon/ibm-products';

// ❌ Incorrect - Do not import directly
import { AddSelectData } from '@carbon/ibm-products-primitives';
```

### Web Components Users

```typescript
// ✅ Correct - Import from @carbon/ibm-products-web-components
import { AddSelectData } from '@carbon/ibm-products-web-components';

// ❌ Incorrect - Do not import directly
import { AddSelectData } from '@carbon/ibm-products-primitives';
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

This package is part of the Carbon for IBM Products monorepo. As a **private
internal package**, it is not published to npm independently. Changes to this
package should be made with consideration for both consumer packages
(`@carbon/ibm-products` and `@carbon/ibm-products-web-components`).

Please follow the [contribution guidelines](../../docs/MAINTAINER_GUIDELINES.md)
when making changes.

### Guidelines for Maintainers

When working with this package:

1. **Keep it Framework-Agnostic**: Ensure all code remains free of
   framework-specific dependencies
2. **Consider Both Consumers**: Changes should work for both React and Web
   Components implementations
3. **Document Public APIs**: Clearly document which utilities are intended for
   public re-export
4. **Maintain Type Safety**: Provide comprehensive TypeScript types for all
   exports
5. **Test Thoroughly**: Ensure changes don't break either consumer package
6. **Coordinate Re-exports**: When adding new utilities, coordinate with
   maintainers of consumer packages to determine appropriate public exposure

## License

Licensed under the Apache-2.0 license. See [LICENSE](./LICENSE) for details.

## Related Packages

- [@carbon/ibm-products](../ibm-products) - React components
- [@carbon/ibm-products-web-components](../ibm-products-web-components) - Web
  Components
- [@carbon/ibm-products-styles](../ibm-products-styles) - Shared styles
