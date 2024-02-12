/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useState } from 'react';

import { action } from '@storybook/addon-actions';

import { pkg } from '../../settings';

import {
  Button,
  Form,
  FormGroup,
  TextInput,
  unstable__Slug as Slug,
  unstable__SlugContent as SlugContent,
} from '@carbon/react';

import { TearsheetNarrow, deprecatedProps } from './TearsheetNarrow';

import {
  actionsOptions,
  actionsLabels,
  actionsMapping,
} from '../ActionSet/actions.js';

import { getDeprecatedArgTypes } from '../../global/js/utils/props-helper';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import styles from './_storybook-styles.scss';

// import mdx from './Tearsheet.mdx';

export default {
  title: getStoryTitle(TearsheetNarrow.displayName),
  component: TearsheetNarrow,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', styles /* docs: { page: mdx } */ },
  argTypes: {
    ...getDeprecatedArgTypes(deprecatedProps),
    actions: {
      control: { type: 'select', labels: actionsLabels },
      options: actionsOptions,
      mapping: actionsMapping(
        {
          primary: 'Create',
          secondary: 'Close',
          secondary2: 'Save',
          ghost: 'Cancel',
        },
        action
      ),
    },
    description: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    onClose: { control: { disable: true } },
    open: { control: { disable: true } },
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

// Test values for props.

const closeIconDescription = 'Close the tearsheet';

const description =
  'This is a description for the tearsheet, providing an opportunity to \
  describe the flow.';

const label = 'The label of the tearsheet';

const mainContent = (
  <div className="tearsheet-stories__narrow-content-block">
    <Form>
      <p>Main content</p>
      <FormGroup legendText="">
        <TextInput id="tss-ft1" labelText="Enter an important value here" />
      </FormGroup>
    </Form>
  </div>
);

const title = 'Title of the tearsheet';

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
// eslint-disable-next-line react/prop-types
const Template = ({ actions, slug, ...args }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const wiredActions = Array.prototype.map.call(actions, (action) => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: (evt) => {
          setOpen(false);
          previousClick(evt);
        },
      };
    }
    return action;
  });

  return (
    <>
      <style>{`.${pkg.prefix}--tearsheet { opacity: 0 }`};</style>
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <TearsheetNarrow
          {...args}
          actions={wiredActions}
          open={open}
          onClose={() => setOpen(false)}
          slug={slug && sampleSlug}
        >
          {mainContent}
        </TearsheetNarrow>
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const StackedTemplate = ({ actions, slug, ...args }) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const ref = useRef();

  const wiredActions1 = Array.prototype.map.call(actions, (action) => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: (evt) => {
          setOpen1(false);
          previousClick(evt);
        },
      };
    }
    return action;
  });

  const wiredActions2 = Array.prototype.map.call(actions, (action) => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: (evt) => {
          setOpen2(false);
          previousClick(evt);
        },
      };
    }
    return action;
  });

  const wiredActions3 = Array.prototype.map.call(actions, (action) => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: (evt) => {
          setOpen3(false);
          previousClick(evt);
        },
      };
    }
    return action;
  });

  return (
    <>
      <style>{`.${pkg.prefix}--tearsheet { opacity: 0 }`};</style>
      <div style={{ height: '3rem' }} data-reserve-space="for toggle buttons" />
      <div
        style={{
          display: 'flex',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10000,
        }}
      >
        <Button onClick={() => setOpen1(!open1)}>Toggle #1</Button>
        <Button onClick={() => setOpen2(!open2)}>Toggle #2</Button>
        <Button onClick={() => setOpen3(!open3)}>Toggle #3</Button>
      </div>
      <div ref={ref}>
        <TearsheetNarrow
          {...args}
          actions={wiredActions1}
          title="Tearsheet #1"
          open={open1}
          onClose={() => setOpen1(false)}
          slug={slug && sampleSlug}
        >
          <div className="tearsheet-stories__narrow-content-block">
            Main content 1
          </div>
        </TearsheetNarrow>
        <TearsheetNarrow
          {...args}
          actions={wiredActions2}
          title="Tearsheet #2"
          open={open2}
          onClose={() => setOpen2(false)}
          slug={slug && sampleSlug}
          selectorPrimaryFocus="#main-content"
        >
          <div className="tearsheet-stories__narrow-content-block">
            Main content 2
          </div>
        </TearsheetNarrow>
        <TearsheetNarrow
          {...args}
          actions={wiredActions3}
          title="Tearsheet #3"
          open={open3}
          onClose={() => setOpen3(false)}
          slug={slug && sampleSlug}
          selectorPrimaryFocus="#main-content"
        >
          <div className="tearsheet-stories__narrow-content-block">
            Main content 3
          </div>
        </TearsheetNarrow>
      </div>
    </>
  );
};

// Stories
export const tearsheetNarrow = prepareStory(Template, {
  storyName: 'Narrow tearsheet',
  args: {
    closeIconDescription,
    description,
    onClose: action('onClose called'),
    title,
    actions: 7,
  },
});

export const fullyLoaded = prepareStory(Template, {
  storyName: 'Narrow tearsheet with all header items',
  args: {
    closeIconDescription,
    description,
    hasCloseIcon: true,
    label,
    onClose: action('onClose called'),
    title,
    actions: 0,
    slug: 1,
  },
});

export const stacked = prepareStory(StackedTemplate, {
  storyName: 'Stacking narrow tearsheets',
  args: {
    closeIconDescription,
    description,
    height: 'lower',
    label,
    actions: 7,
  },
});
