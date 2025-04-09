/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import StackBlitzSDK from '@stackblitz/sdk';
import sdk, { Project } from '@stackblitz/sdk';
import { index, main, packageJson, style, viteConfig } from './configFiles';
import * as carbonComponentsReact from '@carbon/react';
import * as carbonIconsReact from '@carbon/icons-react';
const iconsNames = Object.keys(carbonIconsReact);
let componentNames;
let mainComponentName;

export const stackblitzPrefillConfig = async (
  code: any,
  componentName: string,
  // components: Array<string>, // Add all required components to be imported from @carbon/react
  // icons: Array<string> // Add all required icons to be imported from @carbon/icons-react
  customImport: string
) => {
  const { args } = code;
  mainComponentName = componentName;
  const productComponents = await import('../src/index');
  componentNames = Object.keys(productComponents);
  const storyCode = filterStoryCode(
    code.parameters.docs.source.originalSource,
    args
  );
  const app = appGenerator(storyCode, customImport, args);

  const stackblitzFileConfig: Project = {
    title: 'Carbon demo',
    description:
      'Run official live example code for a Carbon component, created by Carbon Design System on StackBlitz',
    template: 'node',
    files: {
      'package.json': packageJson,
      'index.html': index,
      'vite.config.js': viteConfig,
      'src/main.jsx': main,
      'src/App.jsx': app,
      'src/index.scss': style,
    },
  };

  StackBlitzSDK.openProject(stackblitzFileConfig, {
    newWindow: true,
    openFile: 'src/App.jsx',
  });
};

const filterStoryCode = (storyCode, args) => {
  let storyCodeUpdated = storyCode
    .replace(/^\s*args\s*=>\s*{\s*|}\s*;?\s*$/g, '')
    .replace(/^\s*\(\)\s*=>\s*{/g, '')
    .replace(/^\s*args\s*=>/g, 'return')
    .replace(/^"|"$/g, '')
    .replace(/{\.\.\.args}/g, '')
    .replace(/onChange=\{(args\.onChange|action\('onChange'\))\}\s*/g, '')
    .replace(/onClick=\{(args\.onClick|action\('onClick'\))\}\s*/g, '');
  // Replace args properties with values
  Object.entries(args).forEach(([key, value]) => {
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const templateLiteralRegex = new RegExp(
      `\\$\\{\\s*args\\.${escapedKey}\\s*\\}`,
      'g'
    );
    const jsxAttributeRegex = new RegExp(
      `(=\\s*)\\{args\\.${escapedKey}\\}`,
      'g'
    );
    const stringInTemplateRegex = new RegExp(
      `\`\\$\\{args\\.${escapedKey}\\}\``,
      'g'
    );
    if (typeof value === 'string') {
      // Replace template literals with plain strings
      storyCodeUpdated = storyCodeUpdated.replace(templateLiteralRegex, value);
      // Replace JSX attributes with plain strings
      storyCodeUpdated = storyCodeUpdated.replace(
        jsxAttributeRegex,
        `$1"${value}"`
      );
      // Replace string-in-template cases with plain strings
      storyCodeUpdated = storyCodeUpdated.replace(
        stringInTemplateRegex,
        `"${value}"`
      );
    } else {
      const valueStr = JSON.stringify(value);
      const regex = new RegExp(`args\\.${escapedKey}`, 'g');
      storyCodeUpdated = storyCodeUpdated.replace(regex, valueStr);
    }
  });
  storyCodeUpdated = storyCodeUpdated.replace(/`([^`]+)`/g, '"$1"');
  const hasDestructuring = /const\s*{\s*[^}]*\s*}\s*=\s*args\s*;?/.test(
    storyCodeUpdated
  );
  const hasRestSpread = /{\s*\.{3}rest\s*}/.test(storyCodeUpdated);

  if (!hasDestructuring && !hasRestSpread) {
    const regex = new RegExp(`<(${mainComponentName})(\\s|>)`);
    storyCodeUpdated = storyCodeUpdated.replace(regex, `<$1 {...args}$2`);
  }
  return storyCodeUpdated;
};

const findComponentImports = (
  componentNames: Array<string>,
  storyCode: string
) => {
  return componentNames.filter((componentName) => {
    const regex = new RegExp(`<${componentName}\\b`, 'g');
    return regex.test(storyCode);
  });
};

const findIconImports = (iconNames: Array<string>, storyCode: string) => {
  return iconNames.filter((iconName) => {
    const regexComponent = new RegExp(`<${iconName}\\b`, 'g');
    const regexCurlBraces = new RegExp(`{\\s*${iconName}\\s*}`, 'g');
    const regexObjectValue = new RegExp(`:\\s*${iconName}\\b`, 'g');
    const regexImport = new RegExp(
      `import\\s+.*\\b${iconName}\\b.*from\\s+['"]@my-icons['"]`,
      'g'
    );

    if (
      (regexComponent.test(storyCode) ||
        regexCurlBraces.test(storyCode) ||
        regexObjectValue.test(storyCode)) &&
      regexImport.test(storyCode) &&
      !componentNames.includes(iconName)
    ) {
      return iconName;
    }
  });
};

const appGenerator = (storyCode, customImport, args) => {
  const matchedComponents = findComponentImports(componentNames, storyCode);
  const matchedIcons = findIconImports(iconsNames, storyCode);
  const carbonComponentNames = Object.keys(carbonComponentsReact);
  const matchedCarbonComponents = findComponentImports(
    carbonComponentNames,
    storyCode
  );
  // Generate App.jsx code
  const formattedArgs = `const args = ${JSON.stringify(args, null, 2)};`;
  const app = `
  import React from 'react';
  ${customImport ? customImport : ''}
  import { ${matchedComponents} } from "@carbon/ibm-products";
  import { ${matchedCarbonComponents} } from "@carbon/react";
  ${matchedIcons.length > 0 ? `import { ${matchedIcons} } from "@carbon/icons-react";` : ''}
  const storyClass = 'example'
  export default function App() {
    ${formattedArgs}
    ${storyCode}
  }
  `;
  return app;
};
