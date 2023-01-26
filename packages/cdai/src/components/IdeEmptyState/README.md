# IdeEmptyState

> If you are migrating from a version before 0.7.16, it is recommended to start
> from scratch as major (breaking) API updates have gone in. See below for
> details.

Empty states are moments in an app where there is no data to display to the
user. They are most commonly seen the first time a user interacts with a product
or page, but can be used when data has been deleted or is unavailable.

See https://www.carbondesignsystem.com/patterns/empty-states-pattern/ for more
info.

## Carbon elements used

- Layout
- Typography
- Spacing

## Component details

All props are optional, but it is recommended to change the `title` prop
(because it defaults to `CHANGE ME`). A default image is always rendered. Other
props do not render if left undefined.

### `format`: String (Optional)

The format to use when rendering (sm = vertical, lg = horizontal). Defaults to
`lg` if undefined.

- `sm`
- `lg` (Default)

### `image`: String (Optional)

The image to use when rendering. Defaults to `default` if undefined.

#### String

If defined as a string, it must be one of;

- `apiError`
- `default` (Default)
- `deploy`
- `noSearchResults`
- `notAuthorized`

#### Object

If defined as an object, it must look like:

```
{
  alt: '...', (String, optional, defaults to '')
  className: '...', (String, optional)
  src: '...', (String, required)
}
```

##### alt: String

The HTML alt attribute to render with the image.

##### className: String

Additional user-defined classnames to attach to the image.

##### src: String (Required)

The source of the image to render.

#### Function

A user-defined function that returns an image to render. Use for complex cases
where you need full control (see storybook for an example). It is NOT
RECOMMENDED to use this unless you absolutely have to deviate from the standard
designs.

```
<IdeEmptyState
  image={className => (
    <img
      alt='Custom alt'
      className={`${className} custom-classnames`}
      src={customImage}
    />
  )}
/>
```

### `title`: String (Optional)

The text rendered in the 1st row of the content area. Defaults to `CHANGE ME` if
undefined. Must be pre-translated.

### `body`: String (Optional)

The text rendered in the 2nd row of the content area. Does not render if
undefined. Must be pre-translated.

### `button`: Function OR Object (Optional)

The primary action button rendered in the 3rd row of the content area. Does not
render if undefined.

#### Object

Renders a basic Carbon button.

```
{
  kind: '...', (String, optional, defaults to `primary`)
  onClick: () => {}, (Function, optional)
  text: '...',  (String, required)
}
```

##### kind: String (Required)

The Carbon style to use when rendering. Options are INTENTIONALLY limited. If
defined, it must be one of:

- `primary` (Default)
- `tertiary`

##### onClick: Function (Required)

The event handler for when the button is clicked.

##### text: String (Required)

The text to use when rendering. Must be pre-translated.

#### Function

A user-defined function that returns a button to render. Use for complex cases
where you need full control (see storybook for an example). It is NOT
RECOMMENDED to use this unless you absolutely have to deviate from the standard
designs.

### `links`: Object OR Array (Optional)

The links rendered in the 4th row of the content area. Does not render if
undefined.

#### Object

A link object.

```
{
  text: '...', (String, required)
  url: '...', (String, required)
}
```

##### text: String (Required)

The text to display when rendering the link. Must be pre-translated.

##### url: String (Required)

The link's destination.

#### Array

An array of links objects.

```
[
  {
    text: '...', (String, required)
    url: '...', (String, required)
    onClick: () => ..., (Function, optional)
  },
  {
    text: '...', (String, required)
    url: '...', (String, required)
  },
]
```

##### text: String (Required)

The text to display when rendering the link. Must be pre-translated.

##### url: String (Required)

The link's destination.

##### onClick: Function (Optional)

The optional event handler for when the button is clicked.

## Remaining items to implement/designed

- a11y
- i18n

# Change history

|         Date | Change                                                           | Contributed by, Product |
| -----------: | :--------------------------------------------------------------- | :---------------------- |
| Feb 21, 2020 | Enhance image prop to allow custom images                        | Simon Ho / API Connect  |
|  Feb 6, 2020 | Refactor entire component based on new designs (BREAKING CHANGE) | Simon Ho / API Connect  |
| Sep 25, 2019 | Refactor SVG rendering                                           | Simon Ho / API Connect  |
|  Sep 9, 2019 | First contribution of the IdeEmptyState component                | Simon Ho / API Connect  |
