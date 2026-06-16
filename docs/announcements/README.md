# Announcements

This folder contains announcement markdown files that are automatically
displayed in the Storybook Announcements page.

## How to Add a New Announcement

1. **Create a new markdown file** in this folder with a descriptive filename:

   - Format: `YYYY-MM-short-description.md`
   - Example: `2026-06-new-component.md`

2. **Add metadata** at the top of the file:

```markdown
---
title: Your Announcement Title
date: YYYY-MM
tags:
  - label: Preview
    type: purple
  - label: Breaking Change
    type: red
order: 1
---

# Your Announcement Content

Write your announcement content here using standard markdown...
```

### front-matter Fields

- **title** (required): The title shown in the table of contents
- **date** (required): Date in YYYY-MM format
- **tags** (optional): Array of tag objects with:
  - `label`: Tag text
  - `type`: Tag color (`red`, `purple`, `blue`, `green`, `gray`, etc.)
- **order** (required): Numeric order for sorting (lower numbers appear first)

### Supported Markdown Features

- Headers (`#`, `##`, `###`)
- Bold (`**text**`)
- Italic (`*text*`)
- Links (`[text](url)`)
- Inline code (`` `code` ``)
- Code blocks (` ```language ... ``` `)
- Lists (`- item`)
- Horizontal rules (`---`)

### Tag Types

Common tag types and their use cases:

- `red` - Breaking changes, critical updates
- `purple` - Preview/experimental features
- `blue` - New features
- `green` - Improvements, enhancements
- `gray` - Deprecations, general info

## Example Announcement

```markdown
---
title: New Tearsheet Component Available
date: 2026-07
tags:
  - label: New Feature
    type: blue
  - label: Preview
    type: purple
order: 1
---

# 🎉 New Tearsheet Component

We're excited to announce the new Tearsheet component...

## Key Features

- Feature 1
- Feature 2

## Code Example

\`\`\`jsx <Tearsheet data={data} columns={columns} /> \`\`\`

## Learn More

Visit our [documentation](https://example.com) for more details.
```

## Automatic Display

Once you add a markdown file to this folder:

1. It will be **automatically detected** by the Storybook build system via
   symlink
2. The front matter will be parsed for metadata
3. The announcement will appear in the **Overview/Announcements** story
4. Announcements are sorted by the `order` field (ascending)
5. README.md is automatically excluded from rendering

No code changes are needed - just add your markdown file and it will appear!

## File Naming Convention

Use descriptive filenames that include:

- Date (YYYY-MM)
- Brief description
- Lowercase with hyphens

Examples:

- `2026-06-tearsheet-component.md`
- `2025-09-canary-removal.md`
- `2026-07-new-Tearsheet.md`

## Location & Symlink

This folder is located at: `docs/announcements/`

A symlink exists at
`packages/ibm-products/.storybook/Announcements/announcements/` that points to
this folder, allowing Storybook to access the files during build.

### For Maintainers

The symlink is created with:

```bash
ln -s ../../../../../docs/announcements packages/ibm-products/.storybook/Announcements/announcements
```

This allows announcements to live in the central `docs/` folder while being
accessible to Storybook's build system.
