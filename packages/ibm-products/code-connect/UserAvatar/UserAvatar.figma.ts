// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=15368-59379&t=lbewdWdJ4JB5izcw-4
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/UserAvatar/UserAvatar.tsx
// component=UserAvatar

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

const instance = figma.selectedInstance;

function createTemplate() {
  const type = instance.getEnum('Type', {
    Image: 'image',
    Initials: 'initials',
    'Single user': 'single-user',
    'User group': 'user-group',
  });

  const size = instance.getEnum('Size', {
    'Extra large': 'xl',
    Large: 'lg',
    Medium: 'md',
    Small: 'sm',
  });
  const name = instance.getString('Initials text');

  const tooltip = instance.findInstance('Tooltip');
  let tooltipText: string | undefined;
  let tooltipAlignment: string | undefined;
  if (tooltip.type !== 'ERROR') {
    tooltipText = tooltip.getString('Tooltip text');
    tooltipAlignment = tooltip.getEnum('🚫 Position', {
      Top: 'top',
      Right: 'right',
      Bottom: 'bottom',
      Left: 'left',
    });
  }

  const background = instance.findInstance('Background');
  let backgroundColor: string | undefined;
  if (background.type !== 'ERROR') {
    // `backgroundColor` depends on both the Figma `Color` and `Sequence` variants.
    const sequence = (primary: string, secondary: string) =>
      background.getEnum('Sequence', {
        Primary: primary,
        Secondary: secondary,
      });
    backgroundColor = background.getEnum('Color', {
      Cyan: sequence('order-1-cyan', 'order-7-cyan'),
      Gray: sequence('order-2-gray', 'order-8-gray'),
      Green: sequence('order-3-green', 'order-9-green'),
      Magenta: sequence('order-4-magenta', 'order-10-magenta'),
      Purple: sequence('order-5-purple', 'order-11-purple'),
      Teal: sequence('order-6-teal', 'order-12-teal'),
    });
  }

  const imports = ["import { UserAvatar } from '@carbon/ibm-products';"];
  const tooltipProps = figma.code`${figma.helpers.react.renderProp(
    'tooltipAlignment',
    tooltipAlignment
  )}${figma.helpers.react.renderProp('tooltipText', tooltipText)}`;

  let example;
  if (type === 'image') {
    example = figma.code`<UserAvatar
  image="/path/to/image"
  imageDescription="Alt text for image"${tooltipProps}${figma.helpers.react.renderProp('size', size)}
/>`;
  } else {
    const isIcon = type === 'single-user' || type === 'user-group';
    const iconName = type === 'user-group' ? 'Group' : 'User';
    if (isIcon) {
      imports.push(`import { ${iconName} } from '@carbon/react/icons';`);
    }
    example = figma.code`<UserAvatar${
      isIcon
        ? figma.helpers.react.renderProp(
            'renderIcon',
            figma.helpers.react.identifier(iconName)
          )
        : ''
    }${tooltipProps}${figma.helpers.react.renderProp('name', name)}${figma.helpers.react.renderProp('size', size)}${figma.helpers.react.renderProp('backgroundColor', backgroundColor)}
/>`;
  }

  return {
    id: 'UserAvatar',
    imports,
    example,
    metadata: { nestable: true },
  };
}

export default createTemplate();
