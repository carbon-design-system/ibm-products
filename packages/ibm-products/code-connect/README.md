# Figma Code Connect for @carbon/ibm-products

[Code Connect](https://developers.figma.com/docs/code-connect/) links the IBM
Products Figma library components to their counterparts in
`@carbon/ibm-products`. In Figma Dev Mode, selecting a component instance shows
a code snippet that reflects the properties set on that instance.

The files in this folder use the Code Connect
[Template API](https://developers.figma.com/docs/code-connect/template-api/)
(`figma.selectedInstance` and `` figma.code`...` ``) instead of the legacy
framework parser syntax (`figma.connect(Component, url, { props, example })`).
Figma stops updating and supporting the framework parsers after 17 August 2026.

## Folder convention

Each component has its own folder. Files are not colocated with the component
source and are not published to npm.

```sh
packages/ibm-products/code-connect/ComponentName/ComponentName.figma.ts
```

A template file maps exactly one Figma node. When a component has several Figma
nodes, create one file per node (for example
`ConditionBuilderHierarchical.figma.ts` and
`ConditionBuilderNonHierarchical.figma.ts`).

## Type checking

The folder has its own `tsconfig.json` that only type-checks the templates:

```sh
npx tsc -p packages/ibm-products/code-connect/tsconfig.json
```

## Publishing

Publishing runs automatically when changes are merged into `main`. To test
locally, create a Figma personal access token and expose it through the
`FIGMA_ACCESS_TOKEN` environment variable. Never write the token to a file or
commit it.

```sh
export FIGMA_ACCESS_TOKEN=<your token>
cd packages/ibm-products
npx figma connect publish --dry-run
```

Publish a single component folder instead of the entire set:

```sh
npx figma connect publish --dir packages/ibm-products/code-connect/BigNumber
```
