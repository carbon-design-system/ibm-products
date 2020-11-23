# IdeAPIKeyGeneration Component

## Purpose

To provide a generic API Key generation component to any UI. The component
exposes a generated API key in a Carbon Modal with a number of optional steps
before generating the API key via a handler function.

### Feature file

Behaviours for this component are defined in
[src/components/IdeAPIKeyGeneration/IdeAPIKeyGeneration.feature](./IdeAPIKeyGeneration.feature)

### Carbon elements used

- type tokens for fonts
- theme - designed using `carbon--theme--g10`. Variables are set up to work with
  any other carbon/custom theme, as long as the carbon color variables are used

### Component details

The component renders a modal that displays the details for a generated API key,
including options for:

- An additional API key secret
- Allowing users to toggle the visibility of the API key
- Providing a secondary link to download the API key

It also supports pre-generation steps, including options for:

- Supplying a 'descriptive name'.
- Supplying a set of custom steps with their own rendering handler functions.

## Change history

| Date       | Change                                              | Contributed by / Product      |
| ---------- | --------------------------------------------------- | ----------------------------- |
| 23/07/2019 | First contribution of IdeAPIKeyGeneration component | Andrew Borley / Event Streams |
