/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef, useState } from 'react';

import styles from './_storybook-styles.scss';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { TearsheetShell, deprecatedProps } from './TearsheetShell';
import { getDeprecatedArgTypes } from '../../global/js/utils/props-helper';
import { Button } from '@carbon/react';

// import mdx from './TearsheetShell.mdx';

export default {
  title: getStoryTitle(TearsheetShell.displayName),
  component: TearsheetShell,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    styles /* docs: { page: mdx } */,
  },
  argTypes: {
    ...getDeprecatedArgTypes(deprecatedProps),
    portalTarget: { control: { disable: true } },
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
const Template = ({ open: _open, ...args }, context) => {
  const ref = useRef();
  const [open, setOpen] = useState(context.viewMode !== 'docs' && _open);
  const [beenOpen, setBeenOpen] = useState(false);
  useEffect(() => setBeenOpen(beenOpen || open), [open, beenOpen]);

  return (
    <div ref={ref}>
      <Button onClick={() => setOpen(true)}>
        {beenOpen ? 'Reopen the' : 'Open the'} context.component.componentName
      </Button>{' '}
      <TearsheetShell
        className={className}
        {...args}
        open={open}
        onClose={() => setOpen(false)}
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
