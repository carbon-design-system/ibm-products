# 🎉 New Tearsheet Component Now Available!

Hi team! 👋

We're excited to announce that the **new Tearsheet component** is now available
in preview and will soon be moving to stable! This is a complete re-imagining of
our Tearsheet component with significant improvements in architecture,
performance, and developer experience.

## 📍 Location

- **New (Preview)**: `packages/ibm-products/src/components/Tearsheet/next`
- **Legacy**: `packages/ibm-products/src/components/Tearsheet` (will be
  deprecated)

---

## ✨ Key Features & Improvements

### 🏗️ **Composable Architecture**

Built using the compound component pattern for maximum flexibility:

```jsx
<Tearsheet open={open} onClose={handleClose}>
  <Tearsheet.Header>
    <Tearsheet.HeaderContent title="Title" description="Description" />
  </Tearsheet.Header>
  <Tearsheet.Body>
    <Tearsheet.MainContent>{/* content */}</Tearsheet.MainContent>
  </Tearsheet.Body>
  <Tearsheet.Footer>{/* actions */}</Tearsheet.Footer>
</Tearsheet>
```

### ⚡ **Performance Optimizations**

- **Presence-based rendering**: Component unmounts from DOM after closing for
  optimal performance
- **Smooth animations**: Improved enter/exit transitions
- **Optional `keepMounted` prop**: Preserve component state when needed

### 📏 **Collapsible Header**

- Smart header that **automatically collapses on scroll** to maximize content
  space
- Can be disabled via `disableHeaderCollapse` prop
- Includes `<Tearsheet.ScrollButton />` for manual expand/collapse control

### 🎯 **Better Developer Experience**

- **Intuitive API**: Clear component boundaries with self-documenting structure
- **Full TypeScript support**: Better type inference and autocomplete
- **Flexible composition**: Mix and match components based on your needs

### 🧩 **Enhanced Component Structure**

Five distinct zones for maximum flexibility:

1. **Header** - Title, description, actions, and navigation
2. **Influencer** - Left sidebar (optional, full-height)
3. **Main Content** - Primary content area
4. **Summary Content** - Right sidebar (optional)
5. **Footer** - Action buttons

### 📱 **Responsive Design**

- Influencer and Summary panels automatically adapt to narrow viewports
- Side panel support for small screens via
  `influencerPanelOpen`/`summaryPanelOpen` props
- Seamless narrow variant support

### 🎨 **Advanced Features**

- **Stacking support**: Multiple tearsheets with `<StackProvider>`
- **Header actions**: Overflow menu for actions with `<Tearsheet.HeaderActions>`
- **Navigation bar**: Sticky navigation area for tabs/tags
- **AI Label integration**: Built-in decorator support
- **Portal control**: `disablePortal` prop for testing and context inheritance

---

## 🔄 Migration Path

### Quick Comparison

**Old Tearsheet:**

```jsx
<Tearsheet
  open={open}
  title="Title"
  description="Description"
  actions={[...]}
  influencer={<div>Influencer</div>}
  onClose={handleClose}
>
  <div>Main content</div>
</Tearsheet>
```

**New Tearsheet:**

```jsx
<Tearsheet open={open} onClose={handleClose}>
  <Tearsheet.Header>
    <Tearsheet.HeaderContent title="Title" description="Description" />
  </Tearsheet.Header>
  <Tearsheet.Influencer>
    <div>Influencer</div>
  </Tearsheet.Influencer>
  <Tearsheet.Body>
    <Tearsheet.MainContent>
      <div>Main content</div>
    </Tearsheet.MainContent>
  </Tearsheet.Body>
  <Tearsheet.Footer>
    <Button kind="secondary" onClick={handleCancel}>
      Cancel
    </Button>
    <Button kind="primary" onClick={handleSubmit}>
      Submit
    </Button>
  </Tearsheet.Footer>
</Tearsheet>
```

---

## 📚 Documentation

- **Full documentation**: Available in Storybook at
  `packages/ibm-products/src/components/Tearsheet/next/Tearsheet.mdx`
- **Usage guidelines**:
  https://pages.github.ibm.com/carbon/ibm-products/components/tearsheet/usage/
- **Migration guide**: Included in the MDX documentation with detailed examples

---

## 🚀 Getting Started

Import from the `next` directory:

```jsx
import { Tearsheet } from '@carbon/ibm-products/lib/components/Tearsheet/next';
```

Check out the Storybook examples for:

- Default tearsheet
- With influencer
- With tabs
- With steps
- Narrow variant
- Stacking tearsheets

---

## 💬 Feedback & Questions

We'd love to hear your feedback as you start using the new Tearsheet! Please:

- Try it out in your projects
- Report any issues or suggestions
- Share your migration experience

Feel free to reach out if you have any questions or need help with migration!

---

**Happy coding!** 🎨✨
