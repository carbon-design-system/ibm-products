# IdeFilter Component

## Purpose

To provide a consistent filter and search UX. The UX brings together the concept of filtering (a set of known, orthogonal categories, with various things within those categories), and plain-text search.

As the user types into the input, the list of options filters appropriately, highlighting the most appropriate match. If the user hits enter, the highlighted match is added as a tag in the input. If the match is an option, it will be rendered and removed from the list of options. If it isn't an option, it will be treated as a plain-text search.

### Carbon elements used

- Tags
- Colour tokens
- Icons

### Non-carbon elements used

- [react-select](https://react-select.com)

### Component properties

- options: a set of options, sorted into categories. Each category has a label and a set of options. Each option has a label and a value, and optionally a `type` - this `type` is a Carbon 10 tag type - which in the latest documentation consists of "red" | "magenta" | "purple" | "blue" | "cyan" | "teal" | "green" | "gray" | "cool-gray" | "warm-gray". Defaults to "gray". Each option may have additional properties - they will be ignored but retained by the component.

```json
[
  {
    "label": "Languages",
    "options": [
      { "type": "blue", "value": "en", "label": "English" },
      { "type": "blue", "value": "fr", "label": "French" }
    ]
  },
  {
    "label": "Sizes",
    "options": [
      { "type": "green", "value": "s", "label": "Small" },
      { "type": "green", "value": "m", "label": "Medium" },
      { "type": "green", "value": "l", "label": "Large" }
    ]
  }
]
```

- placeholderText: a string to be rendered as placeholder text in the input.
- onChange: a handler function for change events. It should take a single parameter which is the new value of the input. The value will be an array. Each element of the array will either be one of the options defined in the options property, or it will be of the following format, and show be treated as a plain-text search (with whatever semantics make sense in your use-case):

```json
{
  "label": "<user-entered-text>",
  "value": "<user-entered-text>",
  "__plaintext__": true
}
```
