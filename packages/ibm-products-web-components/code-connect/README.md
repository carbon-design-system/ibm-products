# Figma Code Connect for @carbon/ibm-products-web-components

[Code Connect](https://developers.figma.com/docs/code-connect/) links the IBM
Products Figma library components to their counterparts in
`@carbon/ibm-products-web-components`. In Figma Dev Mode, selecting a component
instance shows a code snippet that reflects the properties set on that instance.

The files in this folder use the Code Connect
[Template API](https://developers.figma.com/docs/code-connect/template-api/)
(`figma.selectedInstance` and `` figma.code`...` ``) instead of the legacy
framework parser syntax (`figma.connect(url, { props, example })`). Figma stops
updating and supporting the framework parsers after 17 August 2026.

## Folder convention

Each component has its own kebab-case folder that matches the folder in
`src/components/`. Files are not colocated with the component source and are not
published to npm.

```sh
packages/ibm-products-web-components/code-connect/<kebab-name>/<kebab-name>.figma.ts
```

A template file maps exactly one Figma node. Shared helpers for rendering
attributes live in `template-helpers.ts`.

## Type checking

The folder has its own `tsconfig.json` that only type-checks the templates:

```sh
npx tsc -p packages/ibm-products-web-components/code-connect/tsconfig.json
```

## Publishing

Publishing runs automatically when changes are merged into `main`. To test
locally, create a Figma personal access token and expose it through the
`FIGMA_ACCESS_TOKEN` environment variable. Never write the token to a file or
commit it.

```sh
export FIGMA_ACCESS_TOKEN=<your token>
cd packages/ibm-products-web-components
npx figma connect publish --dry-run
```

Publish a single component folder instead of the entire set:

```sh
npx figma connect publish --dir packages/ibm-products-web-components/code-connect/options-tile
```
