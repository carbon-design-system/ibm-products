/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import StackBlitzSDK from '@stackblitz/sdk';
import { Project } from '@stackblitz/sdk';
import { index, main, packageJson, style, viteConfig } from './configFiles';
import * as carbonComponentsReact from '@carbon/react';
import * as carbonIconsReact from '@carbon/icons-react';
const iconsNames = Object.keys(carbonIconsReact);
const carbonComponentNames = Object.keys(carbonComponentsReact);
let componentNames;
let mainComponentName;

interface ComponentSources {
  carbon: string[];
  ibmProducts: string[];
  icons: string[];
  unknown: string[];
}

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
      storyCodeUpdated = storyCodeUpdated.replace(templateLiteralRegex, value);
      storyCodeUpdated = storyCodeUpdated.replace(
        jsxAttributeRegex,
        `$1"${value}"`
      );
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

  if (mainComponentName && !hasDestructuring && !hasRestSpread) {
    const regex = new RegExp(`<(${mainComponentName})(\\s|>)`);
    storyCodeUpdated = storyCodeUpdated.replace(regex, `<$1 {...args}$2`);
  }
  return storyCodeUpdated;
};

const appGenerator = (storyCode: string, customImport: string, args: any) => {
  const {
    carbon: matchedCarbonComponents,
    ibmProducts: matchedComponents,
    icons: matchedIcons,
    unknown: unknownComponents,
  } = findComponentsInCode(storyCode);
  if (unknownComponents.length > 0) {
    storyCode = removeUnknownComponents(storyCode, unknownComponents);
  }
  // Generate App.jsx code
  const formattedArgs = `const args = ${JSON.stringify(args, null, 2)};`;
  const app = `
  import React from 'react';
  ${customImport ? customImport : ''}
  ${matchedComponents.length > 0 ? `import { ${matchedComponents.join(', ')} } from "@carbon/ibm-products";` : ''}
  ${matchedCarbonComponents.length > 0 ? `import { ${matchedCarbonComponents.join(', ')} } from "@carbon/react";` : ''}
  ${matchedIcons.length > 0 ? `import { ${matchedIcons.join(', ')} } from "@carbon/icons-react";` : ''}
  const storyClass = 'example'
  export default function App() {
    ${formattedArgs}
    ${storyCode}
  }
  `;
  return app;
};

const findComponentsInCode = (code: string): ComponentSources => {
  const componentRegex = /<([A-Z][a-zA-Z0-9]*)(?:\s|>)/g;
  const matches: string[] = [];

  let match: RegExpExecArray | null;
  while ((match = componentRegex.exec(code)) !== null) {
    matches.push(match[1]);
  }
  const componentNamesInCode = [...new Set(matches)];
  const result: ComponentSources = {
    carbon: [],
    ibmProducts: [],
    icons: [],
    unknown: [],
  };
  componentNamesInCode.forEach((component) => {
    if (carbonComponentNames.includes(component)) {
      result.carbon.push(component);
    } else if (componentNames.includes(component)) {
      result.ibmProducts.push(component);
    } else if (iconsNames.includes(component)) {
      result.icons.push(component);
    } else {
      result.unknown.push(component);
    }
  });
  return result;
};

const removeUnknownComponents = (storyCode, unknownComponents) => {
  const openingTagPattern = new RegExp(
    `<(${unknownComponents.join('|')})(\\s+[^>]*)?/?>`,
    'g'
  );
  const closingTagPattern = new RegExp(
    `</(${unknownComponents.join('|')})>`,
    'g'
  );
  let cleanedCode = storyCode.replace(openingTagPattern, '');
  cleanedCode = cleanedCode.replace(closingTagPattern, '');
  return cleanedCode;
};
