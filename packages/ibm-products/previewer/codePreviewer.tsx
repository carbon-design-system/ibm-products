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
export const stackblitzPrefillConfig = async (
  code: any,
  args: Record<string, any>,
  // components: Array<string>, // Add all required components to be imported from @carbon/react
  // icons: Array<string> // Add all required icons to be imported from @carbon/icons-react
  customImport: string
) => {
  const productComponents = await import('../src/index');
  const componentNames = Object.keys(productComponents);
  let storyCode = code.parameters.docs.source.originalSource
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

    // Case 1: Template literal with args (${args.title})
    const templateLiteralRegex = new RegExp(
      `\\$\\{\\s*args\\.${escapedKey}\\s*\\}`,
      'g'
    );

    // Case 2: Direct JSX attribute (title={args.title})
    const jsxAttributeRegex = new RegExp(
      `(=\\s*)\\{args\\.${escapedKey}\\}`,
      'g'
    );

    // Case 3: String literal in template (`${args.title}`)
    const stringInTemplateRegex = new RegExp(
      `\`\\$\\{args\\.${escapedKey}\\}\``,
      'g'
    );

    if (typeof value === 'string') {
      // Replace template literals with plain strings
      storyCode = storyCode.replace(templateLiteralRegex, value);

      // Replace JSX attributes with plain strings
      storyCode = storyCode.replace(jsxAttributeRegex, `$1"${value}"`);

      // Replace string-in-template cases with plain strings
      storyCode = storyCode.replace(stringInTemplateRegex, `"${value}"`);
    } else {
      const valueStr = JSON.stringify(value);
      const regex = new RegExp(`args\\.${escapedKey}`, 'g');
      storyCode = storyCode.replace(regex, valueStr);
    }
  });
  storyCode = storyCode.replace(/`([^`]+)`/g, '"$1"');

  // Function to find all matches
  const findComponentImports = (
    componentNames: Array<string>,
    storyCode: string
  ) => {
    return componentNames.filter((componentName) => {
      // Grab the component and add the "<" resulting in"`<ComponentName`
      const regex = new RegExp(`<${componentName}\\b`, 'g');
      // Check if the component exists in the `storyCode`
      return regex.test(storyCode);
    });
  };

  // Get all matched components
  // const componentNames = Object.keys(productComponents);
  const matchedComponents = findComponentImports(componentNames, storyCode);

  // Function to find all matches
  const findIconImports = (iconNames: Array<string>, storyCode: string) => {
    return iconNames.filter((iconName) => {
      // Grab the component to convert in "<Component" and "{Component}"
      const regexComponent = new RegExp(`<${iconName}\\b`, 'g');
      const regexCurlBraces = new RegExp(`{\\s*${iconName}\\s*}`, 'g');
      const regexObjectValue = new RegExp(`:\\s*${iconName}\\b`, 'g');
      const regexImport = new RegExp(
        `import\\s+.*\\b${iconName}\\b.*from\\s+['"]@my-icons['"]`,
        'g'
      );

      // Check if the component exists in the `storyCode`
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

  // Get all matched icons

  const matchedIcons = findIconImports(iconsNames, storyCode);

  const carbonComponentNames = Object.keys(carbonComponentsReact);
  const matchedCarbonComponents = findComponentImports(
    carbonComponentNames,
    storyCode
  );

  const extractStory = storyCode.match(
    /<StoryWrapper\b[^>]*>([\s\S]*?)<\/StoryWrapper>/g
  );
  const extractedStoryCode = extractStory
    ? extractStory.map((match) =>
        match.replace(/<\/?StoryWrapper\b[^>]*>/g, '')
      )
    : [];

  // Generate App.jsx code
  const app = `
  import React from 'react';
  ${customImport ? customImport : ''}
  import { ${matchedComponents} } from "@carbon/ibm-products";
  import { ${matchedCarbonComponents} } from "@carbon/react";
  ${matchedIcons.length > 0 ? `import { ${matchedIcons} } from "@carbon/icons-react";` : ''}
  export default function App() {
  return(
    <>
    ${extractedStoryCode}
    </>
    );
  }
  `;

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
