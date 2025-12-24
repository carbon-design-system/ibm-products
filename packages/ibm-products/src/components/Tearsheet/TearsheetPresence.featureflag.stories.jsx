/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Button, ButtonSet } from '@carbon/react';
import { action } from 'storybook/actions';
import { Tearsheet } from './Tearsheet';
import { FeatureFlags } from '../FeatureFlags';
import { Annotation } from '../../../.storybook/Annotation';
import LinkTo from '@storybook/addon-links/react';

export default {
  title: 'Components/Tearsheet/Feature Flags',
  component: Tearsheet,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <FeatureFlags enablePresence={true}>
        <Story />
      </FeatureFlags>
    ),
  ],
};

// Test values for props
const closeIconDescription = 'Close the tearsheet';
const title = 'Title of the tearsheet';
const mainContent = <div style={{ padding: '1rem' }}>Main content</div>;

const Template = ({ actions, decorator, slug, ...args }, context) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(context.viewMode !== 'docs'), 0);
  }, []);

  const wiredActions =
    actions &&
    Array.prototype.map.call(actions, (action) => {
      if (action.label === 'Close') {
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

  const ref = useRef(undefined);

  return (
    <>
      <Annotation
        type="feature-flags"
        text={
          <span>
            This story is rendered with{' '}
            <LinkTo kind="Preview/FeatureFlags" story="docs">
              enable-presence
            </LinkTo>{' '}
            enabled
          </span>
        }
      >
        <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      </Annotation>
      <div ref={ref}>
        <Tearsheet
          {...args}
          actions={wiredActions}
          open={open}
          onClose={() => setOpen(false)}
        >
          {mainContent}
        </Tearsheet>
      </div>
    </>
  );
};

export const enablePresence = Template.bind({});
enablePresence.storyName = 'Enable Presence';
enablePresence.args = {
  closeIconDescription,
  description:
    'This tearsheet demonstrates the enablePresence feature flag behavior.',
  onClose: action('onClose called'),
  title,
  actions: [
    {
      kind: 'secondary',
      label: 'Close',
      onClick: action('Close clicked'),
    },
    {
      kind: 'primary',
      label: 'Submit',
      onClick: action('Submit clicked'),
    },
  ],
};

// Stacked Template
const StackedTemplate = (
  { mixedSizes, actions, decorator, description, slug, ...args },
  context
) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const ref = useRef();
  const openButton1 = useRef();
  const openButton2 = useRef();
  const openButton3 = useRef();

  const wiredActions1 = Array.prototype.map.call(actions, (action) => {
    if (action.label === 'Close') {
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
    if (action.label === 'Close') {
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
    if (action.label === 'Close') {
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

  const VariableSizeTearsheet = mixedSizes ? Tearsheet : Tearsheet;

  useEffect(() => {
    setTimeout(() => {
      setOpen1(context.viewMode !== 'docs');
      setOpen2(context.viewMode !== 'docs');
      setOpen3(context.viewMode !== 'docs');
    }, 0);
  }, [context.viewMode]);

  return (
    <>
      <Annotation
        type="feature-flags"
        text={
          <span>
            This story is rendered with{' '}
            <LinkTo kind="Preview/FeatureFlags" story="docs">
              enable-presence
            </LinkTo>{' '}
            enabled
          </span>
        }
      >
        <Button onClick={() => setOpen1(!open1)} ref={openButton1}>
          Toggle&nbsp;tearsheet&nbsp;1
        </Button>
      </Annotation>
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
                ref={openButton2}
              >
                Open tearsheet 2
              </Button>
            </ButtonSet>
          }
          title="Tearsheet 1"
          open={open1}
          onClose={() => setOpen1(false)}
          launcherButtonRef={openButton1}
        >
          {mainContent}
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
                ref={openButton3}
              >
                Open tearsheet 3
              </Button>
            </ButtonSet>
          }
          title="Tearsheet 2"
          open={open2}
          onClose={() => setOpen2(false)}
          launcherButtonRef={openButton2}
        >
          {mainContent}
        </VariableSizeTearsheet>
        {!mixedSizes && (
          <Tearsheet
            {...args}
            actions={wiredActions3}
            title="Tearsheet 3"
            open={open3}
            onClose={() => setOpen3(false)}
            launcherButtonRef={openButton3}
          >
            {mainContent}
          </Tearsheet>
        )}
      </div>
    </>
  );
};

export const stackedTearsheets = StackedTemplate.bind({});
stackedTearsheets.storyName = 'Stacking Tearsheets';
stackedTearsheets.args = {
  closeIconDescription,
  description: 'Stacked tearsheets with enable-presence feature flag',
  onClose: action('onClose called'),
  title,
  actions: [
    {
      kind: 'secondary',
      label: 'Close',
      onClick: action('Close clicked'),
    },
    {
      kind: 'primary',
      label: 'Submit',
      onClick: action('Submit clicked'),
    },
  ],
};
