// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=15368-59379
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products-web-components/src/components/user-avatar/user-avatar.ts
// component=c4p-user-avatar

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';
import { renderStringAttribute } from '../template-helpers';

const instance = figma.selectedInstance;

const colorMap: Record<string, { primary: string; secondary: string }> = {
  cyan: { primary: 'order-1-cyan', secondary: 'order-7-cyan' },
  gray: { primary: 'order-2-gray', secondary: 'order-8-gray' },
  green: { primary: 'order-3-green', secondary: 'order-9-green' },
  magenta: { primary: 'order-4-magenta', secondary: 'order-10-magenta' },
  purple: { primary: 'order-5-purple', secondary: 'order-11-purple' },
  teal: { primary: 'order-6-teal', secondary: 'order-12-teal' },
};

function createTemplate() {
  const name = instance.getString('Initials text');
  const size = instance.getEnum('Size', {
    'Extra large': 'xl',
    Large: 'lg',
    Medium: 'md',
    Small: 'sm',
  });

  const tooltipInstance = instance.findInstance('Tooltip');
  let tooltipText: string | undefined;
  let tooltipAlignment: string | undefined;
  if (tooltipInstance.type !== 'ERROR') {
    tooltipText = tooltipInstance.getString('Tooltip text');
    tooltipAlignment = tooltipInstance.getEnum('🚫 Position', {
      Top: 'top',
      Right: 'right',
      Bottom: 'bottom',
      Left: 'left',
    });
  }

  const backgroundInstance = instance.findInstance('Background');
  let backgroundColor: string | undefined;
  if (backgroundInstance.type !== 'ERROR') {
    const color = backgroundInstance.getEnum('Color', {
      Cyan: 'cyan',
      Gray: 'gray',
      Green: 'green',
      Magenta: 'magenta',
      Purple: 'purple',
      Teal: 'teal',
    });
    const sequence = backgroundInstance.getEnum('Sequence', {
      Primary: 'primary',
      Secondary: 'secondary',
    });
    if (color && sequence && colorMap[color]) {
      backgroundColor = colorMap[color][sequence];
    }
  }

  const type = instance.getEnum('Type', {
    Image: 'Image',
    Initials: 'Initials',
    'Single user': 'Single user',
    'User group': 'User group',
  });

  if (type === 'Image') {
    return {
      id: 'c4p-user-avatar',
      imports: [
        "import '@carbon/ibm-products-web-components/es/components/user-avatar/index.js';",
      ],
      example: figma.code`<c4p-user-avatar${renderStringAttribute(
        'tooltip-alignment',
        tooltipAlignment
      )}${renderStringAttribute(
        'tooltip-text',
        tooltipText
      )}${renderStringAttribute('name', name)}${renderStringAttribute(
        'size',
        size
      )} image="/path/to/image" image-description="Alt text for image">
</c4p-user-avatar>`,
      metadata: { nestable: true },
    };
  }

  if (type === 'Single user') {
    return {
      id: 'c4p-user-avatar',
      imports: [
        "import '@carbon/ibm-products-web-components/es/components/user-avatar/index.js';",
        "import iconLoader from '@carbon/web-components/es/globals/internal/icon-loader.js';",
        "import User from '@carbon/icons/es/user/16';",
      ],
      example: figma.code`<c4p-user-avatar${renderStringAttribute(
        'tooltip-alignment',
        tooltipAlignment
      )}${renderStringAttribute(
        'tooltip-text',
        tooltipText
      )}${renderStringAttribute('name', name)}${renderStringAttribute(
        'size',
        size
      )}${renderStringAttribute('background-color', backgroundColor)}>
  <!-- Icon loaded via iconLoader helper from '@carbon/web-components' -->
  \${iconLoader(User, { slot: 'rendericon' })}
</c4p-user-avatar>`,
      metadata: { nestable: true },
    };
  }

  if (type === 'User group') {
    return {
      id: 'c4p-user-avatar',
      imports: [
        "import '@carbon/ibm-products-web-components/es/components/user-avatar/index.js';",
        "import iconLoader from '@carbon/web-components/es/globals/internal/icon-loader.js';",
        "import Group from '@carbon/icons/es/group/16';",
      ],
      example: figma.code`<c4p-user-avatar${renderStringAttribute(
        'tooltip-alignment',
        tooltipAlignment
      )}${renderStringAttribute(
        'tooltip-text',
        tooltipText
      )}${renderStringAttribute('name', name)}${renderStringAttribute(
        'size',
        size
      )}${renderStringAttribute('background-color', backgroundColor)}>
  <!-- Icon loaded via iconLoader helper from '@carbon/web-components' -->
  \${iconLoader(Group, { slot: 'rendericon' })}
</c4p-user-avatar>`,
      metadata: { nestable: true },
    };
  }

  // Default: Initials
  return {
    id: 'c4p-user-avatar',
    imports: [
      "import '@carbon/ibm-products-web-components/es/components/user-avatar/index.js';",
    ],
    example: figma.code`<c4p-user-avatar${renderStringAttribute(
      'tooltip-alignment',
      tooltipAlignment
    )}${renderStringAttribute(
      'tooltip-text',
      tooltipText
    )}${renderStringAttribute('name', name)}${renderStringAttribute(
      'size',
      size
    )}${renderStringAttribute('background-color', backgroundColor)}>
</c4p-user-avatar>`,
    metadata: { nestable: true },
  };
}

export default createTemplate();
