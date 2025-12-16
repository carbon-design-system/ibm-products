/**
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import StackBlitzSDK from '@stackblitz/sdk';
import { Project } from '@stackblitz/sdk';
import {
  index,
  main,
  packageJson,
  style,
  tsconfig,
  viteConfig,
} from './configFiles';
import * as carbonComponentsWC from '@carbon/web-components/es/index.js';
import * as carbonIconsWC from '@carbon/icons';

const iconsNames = Object.keys(carbonIconsWC);
const carbonComponentNames = Object.keys(carbonComponentsWC);

let componentNames: string[];
interface ComponentSources {
  carbon: string[];
  ibmProducts: string[];
  icons: string[];
  unknown: string[];
}

interface previewerObject {
  story: any;
  customImports: string[];
  customFunctionDefs: string[];
  styles: string;
  title: string;
}
export const stackblitzPrefillConfig = async ({
  story,
  customImports = [],
  customFunctionDefs = [],
  styles,
  title,
}: previewerObject) => {
  const { args } = story;
  const productComponents = await import('../src/index');
  componentNames = Object.keys(productComponents);
  const storyCode = filterStoryCode(
    story.parameters.docs.source.originalSource,
    args
  );

  const app = await appGenerator(
    storyCode,
    customImports,
    customFunctionDefs,
    args
  );
  let styleImport = style;
  if (styles) {
    // This regex matches multi-line comments that start with /* and end with */
    // It specifically looks for comments containing common license keywords
    const licenseCommentRegex =
      /\/\*\*?\s*\n?(?:\s*\*[^\n]*\n)*\s*\*?\s*(?:copyright|license|licensed|apache|mit|ibm corp|found in the|root directory)[^*]*\*\//gi;
    styleImport += styles.replace(licenseCommentRegex, '');
  }

  const stackblitzFileConfig: Project = {
    title: title || 'Carbon demo (TypeScript)',
    description:
      'Run official live example code for a Carbon web component, created by Carbon Design System on StackBlitz using TypeScript',
    template: 'node',
    files: {
      'package.json': packageJson,
      'index.html': index,
      'vite.config.ts': viteConfig,
      'tsconfig.json': tsconfig,
      'src/main.ts': main,
      'src/App.ts': app,
      'src/index.scss': styleImport,
    },
  };

  StackBlitzSDK.openProject(stackblitzFileConfig, {
    newWindow: true,
    openFile: 'src/App.tsx',
  });
};

const filterStoryCode = (storyCode, args) => {
  let storyCodeUpdated = storyCode
    // Remove arrow functions
    .replace(/^\s*(\([^)]*\)|[\w]+)\s*=>\s*{\s*|}\s*;?\s*$/g, '')
    // Remove empty arrow wrappers
    .replace(/^\s*\(\)\s*=>\s*{/g, '')
    // adding const before `args =>` and remove argTypes
    .replace(/^\s*args\s*:\s*{/, 'const args = {')
    .replace(/^\s*argTypes\s*,?\s*$/m, '')
    // Remove ALL action() calls (including template literals and invocations)
    .replace(/action\(([^)]*)\)(\(\))?/g, '')
    // Replace ONLY `context.viewMode !== 'docs'` with `false` (your specific case)
    .replace(/context\.viewMode\s*!==\s*'docs'/g, 'false')
    // Remove quotes/action handlers (unchanged)
    .replace(/^"|"$/g, '')
    //Remove the args block and the render wrapper
    .replace(/{\s*args:\s*{[\s\S]*?}\s*,\s*render:\s*args\s*=>\s*{/, '')
    //replace the render closing braces
    .replace(/}\s*$/, '');

  Object.entries((args = args ?? {})).forEach(([key, value]) => {
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
      storyCodeUpdated = storyCodeUpdated.replace(
        templateLiteralRegex,
        JSON.stringify(value)
      );
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
  return storyCodeUpdated;
};

const appGenerator = async (
  storyCode: string,
  customImports: Array<string>,
  customFunctionDefs: Array<string>,
  args: any
) => {
  const {
    carbon: matchedCarbonComponents,
    ibmProducts: matchedComponents,
    icons: matchedIcons,
    unknown: unknownComponents,
  } = findComponentsInCode(storyCode);
  if (unknownComponents.length > 0) {
    storyCode = removeUnknownComponents(storyCode, unknownComponents);
  }

  const regex = /(\.\.\.\s*args)|(\{\s*[^}]*\.\.\.[^}]*\}\s*=\s*args)/;
  const hasArgs = regex.test(storyCode);

  const formattedArgs = `const args = ${JSON.stringify(args, null, 2)};`;

  // Generate App.jsx code
  const app = `

  import { LitElement, html } from 'lit';
  import { customElement } from 'lit/decorators.js';
  ${customImports?.length > 0 ? customImports?.map((customImport) => customImport) : ''}
  ${
    matchedComponents.length > 0
      ? matchedComponents
          .map(
            (comp) =>
              `import '@carbon/ibm-products-web-components/es/components/${comp}/index.js';`
          )
          .join('\n')
      : ''
  }
   ${
     matchedCarbonComponents.length > 0
       ? matchedCarbonComponents
           .map(
             (comp) =>
               `import '@carbon/web-components/es/components/${comp}/index.js';`
           )
           .join('\n')
       : ''
   }
  ${matchedIcons.length > 0 ? `import { ${matchedIcons.join(', ')} } from "@carbon/icons";` : ''}
  @customElement('my-app')
  export class MyApp extends LitElement {
    render() { 
      ${customFunctionDefs?.length > 0 ? customFunctionDefs.join('\n') : ''}
      ${hasArgs ? formattedArgs : ''}
    const prefix = 'c4p';
      ${storyCode}
    }
  }
`;

  return app.trim();
};

const findComponentsInCode = (code: string): ComponentSources => {
  const componentRegex = /<\s*((?:c4p|cds)-[a-z0-9-]+)(?=[\s>])/gi;
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
  //cds-button -> Button
  const normalizedCarbon = carbonComponentNames.map((name) =>
    name
      .replace(/^(cds)/i, '')
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join('')
  );

  //c4p-user-avatar -> UserAvatar
  const normalizedProducts = componentNames.map((name) =>
    name
      .replace(/^(CDS)/i, '')
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join('')
  );
  componentNamesInCode.forEach((component) => {
    //c4p-user-avatar to UserAvatar
    const normalized = component
      .replace(/^(c4p-|cds-)/i, '')
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join('');

    if (normalizedCarbon.includes(normalized)) {
      result.carbon.push(component.replace(/^(cds-)/i, ''));
    } else if (normalizedProducts.includes(normalized)) {
      result.ibmProducts.push(component.replace(/^(c4p-)/i, ''));
    } else if (iconsNames.includes(component)) {
      result.icons.push(component);
    } else {
      result.unknown.push(component);
    }
  });
  console.log(result);

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
