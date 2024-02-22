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
import {
  Button,
  unstable__Slug as Slug,
  unstable__SlugContent as SlugContent,
} from '@carbon/react';

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
    influencer: {
      control: {
        type: 'boolean',
      },
    },
    portalTarget: { control: { disable: true } },
    slug: {
      control: {
        type: 'select',
        labels: {
          0: 'No AI slug',
          1: 'with AI Slug',
        },
        default: 0,
      },
      options: [0, 1],
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
    }}
  >
    {Array.from({ length: 10 }, (_, k) => ({ key: `Paragraph-${k}` })).map(
      ({ key }) => (
        <p key={key}>
          This is not really Lorem Ipsum but the spell checker did not like the
          previous text with it&apos;s non-words which is why this unwieldy
          sentence, should one choose to call it that, here.
        </p>
      )
    )}
  </div>
);

const sampleSlug = (
  <Slug className="slug-container" size="xs">
    <SlugContent>
      <div>
        <p className="secondary">AI Explained</p>
        <h1>84%</h1>
        <p className="secondary bold">Confidence score</p>
        <p className="secondary">
          This is not really Lorem Ipsum but the spell checker did not like the
          previous text with it&apos;s non-words which is why this unwieldy
          sentence, should one choose to call it that, here.
        </p>
        <hr />
        <p className="secondary">Model type</p>
        <p className="bold">Foundation model</p>
      </div>
    </SlugContent>
  </Slug>
);

// Template.
const Template = ({ influencer, open: _open, slug, ...args }, context) => {
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
        influencer={
          influencer && (
            <div className="tearsheet-stories__dummy-content-block">
              Influencer
            </div>
          )
        }
        open={open}
        onClose={() => setOpen(false)}
        slug={slug && sampleSlug}
        title={'Tearsheet title'}
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
