# IdeHTTPErrors

Renders a generic HTTP error page.

- All text content is user customizable
- Backgrounds are provided for 403 and 404 pages, a generic background is provided for other page types, does NOT support custom backgrounds
- Page elements are automatically positioned based on Carbon grids and breakpoints

See https://pages.github.ibm.com/ide-design-guidelines/ide-design-guidelines-v2/patterns/http-errors/usage for more info.

## Carbon elements used

- Grid
- Link
- Typography
- Spacing

## Component details

The component will render without any user-defined props, but it is recommended to provide at least the `title` and `description` props (they default to `CHANGE ME` if not defined).

### `background`: number

The background image to use when rendering the component. If defined, must be 403 or 404. If undefined, a generic background image is used.

Custom backgrounds are NOT supported.

### `title`: string

The text to render in the title section. Defaults to 'CHANGE ME' if undefined. Typically a pre-translated string similar to `Error 403`. See https://pages.github.ibm.com/ide-design-guidelines/ide-design-guidelines-v2/patterns/http-errors/usage for recommended conventions.

Throws an error if a non-string value is provided.

### `description`: string

The text to render in the description section. Defaults to 'CHANGE ME' if undefined. See https://pages.github.ibm.com/ide-design-guidelines/ide-design-guidelines-v2/patterns/http-errors/usage for recommended conventions.

Throws an error if a non-string value is provided.

### `details`: string

The text to render in the details section. Does not render if undefined. See https://pages.github.ibm.com/ide-design-guidelines/ide-design-guidelines-v2/patterns/http-errors/usage for recommended conventions.

Throws an error if a non-string value is provided.

### `links`: {text: String, url: String} | [{text: String, url: String}, ...]

The hyperlink(s) to render in the links section. Does not render if undefined. A link object or array of link objects is expected. For example:

Defined as an object:
```
<IdeHTTPError
  links={{
    text: 'Custom text', // What you want the user to see when the link is rendered
    url: 'http://custom-location', // Where you want the user to be redirected to when they click the link
  }}
/>
```

Defined as an array:
```
<IdeHTTPError
  links={[
    {
      text: 'Custom text 1',
      url: 'http://custom-location-1',
    },
    {
      text: 'Custom text 2',
      url: 'http://custom-location-2',
    },
  ]}
/>
```

Throws an error if a non-object or a non-array value is provided.
Throws an error if the `text` or `url` props in the link object definitions are defined with non-String values.

## Remaining items to implement/designed

- None

# Change history

|          Date | Change                                            | Contributed by, Product                    |
| ------------: | :------------------------------------------------ | :----------------------------------------- |
|  Oct  9, 2019 | First contribution of the IdeHTTPErrors component | Simon Ho (simonho@ca.ibm.com), API Connect |
|  Jan 10, 2020 | Allow user-defined values for all props           | Simon Ho (simonho@ca.ibm.com), API Connect |
