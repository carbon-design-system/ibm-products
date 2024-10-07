/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useState } from 'react';

import { action } from '@storybook/addon-actions';

import { pkg } from '../../settings';

import {
  Button,
  ButtonSet,
  Dropdown,
  Form,
  FormGroup,
  Tab,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
  TextInput,
  unstable__Slug as Slug,
  unstable__SlugContent as SlugContent,
} from '@carbon/react';

import { Tearsheet, deprecatedProps } from './Tearsheet';
import {
  actionsOptions,
  actionsLabels,
  actionsMapping,
} from '../ActionSet/actions.js';

import { getDeprecatedArgTypes } from '../../global/js/utils/props-helper';
import styles from './_storybook-styles.scss?inline';
import { TearsheetNarrow } from './TearsheetNarrow';

// import mdx from './Tearsheet.mdx';

export default {
  title: 'IBM Products/Components/Tearsheet',
  component: Tearsheet,
  tags: ['autodocs'],
  parameters: { styles /* docs: { page: mdx } */, layout: 'fullscreen' },
  argTypes: {
    ...getDeprecatedArgTypes(deprecatedProps),
    actions: {
      control: { type: 'select', labels: actionsLabels },
      options: actionsOptions,
      mapping: actionsMapping(
        {
          primary: 'Replace',
          danger: 'Delete',
          secondary: 'Back',
          secondary2: 'Keep Both',
          dangerGhost: 'Abort',
          ghost: 'Cancel',
        },
        action
      ),
    },
    description: { control: { type: 'text' } },
    headerActions: {
      control: {
        type: 'select',
        labels: {
          0: 'none',
          1: 'drop-down',
          2: 'buttons',
        },
      },
      options: [0, 1, 2],
      mapping: {
        0: null,
        1: (
          <Dropdown
            id="tss-had"
            label="Choose an option"
            titleText="Choose an option"
            items={['option 1', 'option 2', 'option 3', 'option 4']}
          />
        ),
        2: (
          <ButtonSet>
            <Button kind="secondary" size="sm" style={{ width: 'initial' }}>
              Secondary
            </Button>
            <Button kind="primary" size="sm" style={{ width: 'initial' }}>
              Primary
            </Button>
          </ButtonSet>
        ),
      },
    },
    label: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    influencer: { control: { disable: true } },
    onClose: { control: { disable: true } },
    navigation: { control: { disable: true } },
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
  describe the flow over a couple of lines in the header of the tearsheet.';

const influencer = (
  <div className="tearsheet-stories__dummy-content-block">Influencer</div>
);

const label = 'The label of the tearsheet';

const mainContent = (
  <div className="tearsheet-stories__dummy-content-block">
    <Form>
      <p>Main content</p>
      <FormGroup legendId="tearsheet-form-group" legendText="FormGroup Legend">
        <TextInput
          id="tss-ft1"
          labelText="Enter an important value here"
          style={
            // stylelint-disable-next-line carbon/layout-token-use
            { marginBottom: '1em' }
          }
        />
        <TextInput
          id="tss-ft2"
          labelText="Here is an entry field:"
          style={
            // stylelint-disable-next-line carbon/layout-token-use
            { marginBottom: '1em' }
          }
        />
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

  const wiredActions =
    actions &&
    Array.prototype.map.call(actions, (action) => {
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

  const ref = useRef();

  return (
    <>
      <style>{`.${pkg.prefix}--tearsheet { opacity: 0 }`};</style>
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <Tearsheet
          {...args}
          actions={wiredActions}
          open={open}
          onClose={() => setOpen(false)}
          slug={slug && sampleSlug}
        >
          {mainContent}
        </Tearsheet>
      </div>
    </>
  );
};

const tabs = (
  <div className="tearsheet-stories__tabs">
    <TabList aria-label="Tab list">
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
      <Tab>Tab 4</Tab>
    </TabList>
  </div>
);

const TemplateWithNav = ({ actions, slug, ...args }) => {
  const [open, setOpen] = useState(false);

  const wiredActions =
    actions &&
    Array.prototype.map.call(actions, (action) => {
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

  const ref = useRef();

  return (
    <>
      <style>{`.${pkg.prefix}--tearsheet { opacity: 0 }`};</style>
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <Tabs onChange={action('Tab selection changed')}>
          <Tearsheet
            {...args}
            actions={wiredActions}
            open={open}
            onClose={() => setOpen(false)}
            slug={slug && sampleSlug}
          >
            <TabPanels>
              <TabPanel>Tab 1</TabPanel>
              <TabPanel>Tab 2</TabPanel>
              <TabPanel>Tab 3</TabPanel>
              <TabPanel>Tab 4</TabPanel>
            </TabPanels>
          </Tearsheet>
        </Tabs>
      </div>
    </>
  );
};

const ReturnFocusTemplate = ({ actions, slug, ...args }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef();

  const wiredActions =
    actions &&
    Array.prototype.map.call(actions, (action) => {
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

  const ref = useRef();

  return (
    <>
      <style>{`.${pkg.prefix}--tearsheet { opacity: 0 }`};</style>
      <Button ref={buttonRef} onClick={() => setOpen(true)}>
        Open Tearsheet
      </Button>
      <div ref={ref}>
        <Tearsheet
          {...args}
          actions={wiredActions}
          open={open}
          onClose={() => setOpen(false)}
          slug={slug && sampleSlug}
          launcherButtonRef={buttonRef}
        >
          {mainContent}
        </Tearsheet>
      </div>
    </>
  );
};

const FirstElementDisabledTemplate = ({ actions, slug, ...args }) => {
  const [open, setOpen] = useState(false);

  const wiredActions =
    actions &&
    Array.prototype.map.call(actions, (action) => {
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

  const ref = useRef();

  return (
    <>
      <style>{`.${pkg.prefix}--tearsheet { opacity: 0 }`};</style>
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <Tearsheet
          {...args}
          actions={wiredActions}
          open={open}
          onClose={() => setOpen(false)}
          slug={slug && sampleSlug}
        >
          <div className="tearsheet-stories__dummy-content-block">
            <Form>
              <p>Main content</p>
              <FormGroup
                legendId="tearsheet-form-group"
                legendText="FormGroup Legend"
              >
                <TextInput
                  id="tss-ft1"
                  labelText="Enter an important value here"
                  style={
                    // stylelint-disable-next-line carbon/layout-token-use
                    { marginBottom: '1em' }
                  }
                  disabled
                />
                <TextInput
                  id="tss-ft2"
                  labelText="Here is an entry field:"
                  style={
                    // stylelint-disable-next-line carbon/layout-token-use
                    { marginBottom: '1em' }
                  }
                />
              </FormGroup>
            </Form>
          </div>
        </Tearsheet>
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const StackedTemplate = ({ mixedSizes, actions, slug, ...args }) => {
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

  const VariableSizeTearsheet = mixedSizes ? TearsheetNarrow : Tearsheet;

  return (
    <>
      <style>{`.${pkg.prefix}--tearsheet { opacity: 0 }`};</style>
      <div style={{ height: '3rem' }} data-reserve-space="for toggle buttons" />
      <ButtonSet
        style={{
          display: 'flex',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10000,
        }}
      >
        <Button onClick={() => setOpen1(!open1)}>
          Toggle&nbsp;tearsheet&nbsp;1
        </Button>
        <Button onClick={() => setOpen2(!open2)}>
          Toggle&nbsp;tearsheet&nbsp;2
        </Button>
        {!mixedSizes && (
          <Button onClick={() => setOpen3(!open3)}>
            Toggle&nbsp;tearsheet&nbsp;3
          </Button>
        )}
      </ButtonSet>
      <div ref={ref}>
        <Tearsheet
          {...args}
          actions={wiredActions1}
          headerActions={
            <ButtonSet>
              <Button
                kind="primary"
                size="sm"
                style={{ width: 'initial' }}
                onClick={() => setOpen2(true)}
                disabled={open2}
              >
                Open tearsheet 2
              </Button>
            </ButtonSet>
          }
          title="Tearsheet 1"
          open={open1}
          onClose={() => setOpen1(false)}
          selectorPrimaryFocus="#stacked-input-1"
          slug={slug && sampleSlug}
        >
          <div className="tearsheet-stories__dummy-content-block">
            Main content 1
            <TextInput
              id="stacked-input-1"
              labelText="Enter an important value here"
            />
          </div>
        </Tearsheet>
        <VariableSizeTearsheet
          {...args}
          actions={wiredActions2}
          headerActions={
            <ButtonSet>
              <Button
                kind="primary"
                size="sm"
                style={{ width: 'initial' }}
                onClick={() => setOpen3(true)}
                disabled={open3}
              >
                Open tearsheet 3
              </Button>
            </ButtonSet>
          }
          title="Tearsheet 2"
          open={open2}
          onClose={() => setOpen2(false)}
          selectorPrimaryFocus="#stacked-input-2"
          slug={slug && sampleSlug}
        >
          <div className="tearsheet-stories__dummy-content-block">
            Main content 2
            <TextInput
              id="stacked-input-2"
              labelText="Enter an important value here"
            />
          </div>
        </VariableSizeTearsheet>
        {!mixedSizes && (
          <Tearsheet
            {...args}
            actions={wiredActions3}
            title="Tearsheet 3"
            open={open3}
            onClose={() => setOpen3(false)}
            selectorPrimaryFocus="#stacked-input-3"
            slug={slug && sampleSlug}
          >
            <div className="tearsheet-stories__dummy-content-block">
              Main content 3
              <TextInput
                id="stacked-input-3"
                labelText="Enter an important value here"
              />
            </div>
          </Tearsheet>
        )}
      </div>
    </>
  );
};

// Stories
export const tearsheet = Template.bind({});
tearsheet.storyName = 'Tearsheet';
tearsheet.args = {
  closeIconDescription,
  description,
  onClose: action('onClose called'),
  title,
  actions: 7,
  selectorPrimaryFocus: '#tss-ft1',
};

export const withNavigation = TemplateWithNav.bind({});
withNavigation.storyName = 'Tearsheet with navigation';
withNavigation.args = {
  closeIconDescription,
  description,
  label,
  navigation: tabs,
  onClose: action('onClose called'),
  title,
  actions: 7,
};

export const withInfluencer = Template.bind({});
withInfluencer.storyName = 'Tearsheet with influencer';
withInfluencer.args = {
  closeIconDescription,
  description,
  influencer,
  influencerPosition: 'left',
  influencerWidth: 'narrow',
  onClose: action('onClose called'),
  title,
  actions: 7,
};

export const ReturnFocusToOpenButton = ReturnFocusTemplate.bind({});
ReturnFocusToOpenButton.args = {
  closeIconDescription,
  description,
  onClose: action('onClose called'),
  title,
  actions: 7,
};

export const firstElementDisabled = FirstElementDisabledTemplate.bind({});
firstElementDisabled.storyName = 'First Element Disabled';
firstElementDisabled.args = {
  closeIconDescription,
  hasCloseIcon: true,
  description,
  onClose: action('onClose called'),
  title,
  actions: 7,
  selectorPrimaryFocus: '#tss-ft1',
};

export const fullyLoaded = TemplateWithNav.bind({});
fullyLoaded.storyName = 'Tearsheet with all header items and influencer';
fullyLoaded.args = {
  closeIconDescription,
  description,
  hasCloseIcon: true,
  headerActions: 2,
  influencer,
  influencerPosition: 'left',
  influencerWidth: 'narrow',
  label,
  navigation: tabs,
  onClose: action('onClose called'),
  title,
  actions: 0,
  slug: 1,
};

// eslint-disable-next-line react/prop-types
export const stacked = StackedTemplate.bind({});
stacked.storyName = 'Stacking tearsheets';
stacked.args = {
  closeIconDescription,
  description,
  height: 'lower',
  influencer,
  label,
  actions: 7,
};

export const stackedMixedSizes = StackedTemplate.bind({});
stackedMixedSizes.storyName = 'Stacking tearsheets, different sizes';
stackedMixedSizes.args = {
  mixedSizes: true,
  closeIconDescription,
  description,
  height: 'lower',
  influencer,
  label,
  actions: 7,
};
