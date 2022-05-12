/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef } from 'react';

import styles from './_storybook-styles.scss';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { TearsheetShell, deprecatedProps } from './TearsheetShell';
import { getDeprecatedArgTypes } from '../../global/js/utils/props-helper';

import mdx from './TearsheetShell.mdx';

export default {
  title: getStoryTitle(TearsheetShell.displayName),
  component: TearsheetShell,
  parameters: { controls: { expanded: true }, styles, docs: { page: mdx } },
  argTypes: {
    ...getDeprecatedArgTypes(deprecatedProps),
    portalTargetCustomDomNode: {
      control: { type: 'boolean' },
      description:
        'Set portalTarget prop to specify dom node, defaults to document.body.',
    },
  },
};

const closeIconDescription = 'Close the tearsheet';

const className = 'client-class-1 client-class-2';

const dummyContent = (
  <div
    style={{
      // stylelint-disable-next-line carbon/layout-token-use
      padding: '50px',
      height: '400px',
      // stylelint-disable-next-line color-named
      background: 'pink',
    }}
  >
    Tearsheet content
  </div>
);

// Template.
const Template = ({ portalTargetCustomDomNode, ...args }) => {
  const ref = useRef();

  return (
    <div ref={ref}>
      <TearsheetShell
        className={className}
        {...args}
        portalTarget={portalTargetCustomDomNode ? ref.current : undefined}
      >
        {dummyContent}
      </TearsheetShell>
    </div>
  );
};

// Stories
export const AllAttributesSet = prepareStory(Template, {
  args: {
    closeIconDescription,
    height: 'normal',
    // onClose: () => false,
    open: true,
    size: 'narrow',
  },
});

export const NoAttributesSet = prepareStory(Template, {
  args: {
    size: 'wide',
  },
});
