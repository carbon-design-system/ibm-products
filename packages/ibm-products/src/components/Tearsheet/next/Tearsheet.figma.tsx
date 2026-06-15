/**
 * Copyright IBM Corp. 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { preview__Tearsheet as Tearsheet } from '@carbon/ibm-products';
import figma from '@figma/code-connect';
import { Bee } from '@carbon/react/icons';
import { Button, TabList, Tab } from '@carbon/react';

const headerProps = {
  hideCloseButton: figma.enum('Style', {
    'Passive - With close icon': false,
    'Transactional - No close icon': true,
  }),
  title: figma.string('Title'),
  description: figma.boolean('Description', {
    true: figma.nestedProps('Description', {
      text: figma.string('Description text'),
    }),
    false: undefined,
  }),
  label: figma.boolean('Label', {
    true: figma.textContent('Label'),
    false: undefined,
  }),
  titleStart: figma.boolean('Title leading slot', {
    true: <Bee size={16} />,
    false: undefined,
  }),
  actions: figma.boolean('Actions', {
    true: (
      <Tearsheet.HeaderActions
        menuButtonProps={{
          label: 'Actions',
          kind: 'tertiary',
        }}
      >
        <Tearsheet.HeaderActionItem overflowItemLabel="Action 1">
          <Button kind="tertiary" size="sm">
            Action 1
          </Button>
        </Tearsheet.HeaderActionItem>
        <Tearsheet.HeaderActionItem overflowItemLabel="Action 2">
          <Button kind="tertiary" size="sm">
            Action 2
          </Button>
        </Tearsheet.HeaderActionItem>
      </Tearsheet.HeaderActions>
    ),
    false: undefined,
  }),
  tabs: figma.boolean('Tabs', {
    true: (
      <Tearsheet.NavigationBar
        scroller={<Tearsheet.ScrollButton label="Header collapse/expand" />}
      >
        <TabList aria-label="Tab list">
          <Tab>Tab label</Tab>
          <Tab>Tab label</Tab>
          <Tab>Tab label</Tab>
        </TabList>
      </Tearsheet.NavigationBar>
    ),
    false: undefined,
  }),
};

// Wide Tearsheet
figma.connect(
  Tearsheet,
  'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=9837%3A338113',
  {
    props: {
      header: figma.nestedProps('_Tearsheet header', {
        ...headerProps,
      }),
      influencer: figma.boolean('Left panel', {
        true: (
          <Tearsheet.Influencer>
            Rendered on the left, spanning the full height. Can be used to
            display a vertical progress indicator or similar elements.
          </Tearsheet.Influencer>
        ),
        false: undefined,
      }),
      summary: figma.boolean('Right panel', {
        true: (
          <Tearsheet.SummaryContent>
            Rendered next to the main content area, this section can be used to
            display summary details or related information.
          </Tearsheet.SummaryContent>
        ),
        false: undefined,
      }),

      children: figma.children('Slot'),
      actions: figma.boolean('Buttons', {
        true: figma.nestedProps('R:2 | Tearsheet footer item', {
          value: figma.enum('Buttons', {
            '1': [
              {
                key: 1,
                kind: 'primary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked primary'),
              },
            ],
            '2': [
              {
                key: 1,
                kind: 'primary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked primary'),
              },
              {
                key: 2,
                kind: 'secondary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked secondary'),
              },
            ],
            '3': [
              {
                key: 1,
                kind: 'primary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked primary'),
              },
              {
                key: 2,
                kind: 'secondary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked secondary'),
              },
              {
                key: 3,
                kind: 'ghost' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked ghost'),
              },
            ],
            '4': [
              {
                key: 1,
                kind: 'primary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked primary'),
              },
              {
                key: 2,
                kind: 'secondary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked secondary'),
              },
              {
                key: 3,
                kind: 'tertiary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked tertiary'),
              },
              {
                key: 4,
                kind: 'ghost' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked ghost'),
              },
            ],
          }),
        }),
        false: { value: undefined },
      }),
    },
    example: (props) => (
      <Tearsheet open>
        <Tearsheet.Header hideCloseButton={props.header.hideCloseButton}>
          <Tearsheet.HeaderContent
            title={props.header.title}
            description={props.header.description?.text}
            label={props.header.label}
            titleStart={props.header.titleStart}
            headerActions={props.header.actions}
          />

          {props.header.tabs}
        </Tearsheet.Header>

        {props.influencer}

        <Tearsheet.Body>
          <Tearsheet.MainContent>
            This is the main content area.
            {props.children}
          </Tearsheet.MainContent>
          {props.summary}
        </Tearsheet.Body>

        <Tearsheet.Footer actions={props.actions.value} />
      </Tearsheet>
    ),
  }
);

// Narrow tearsheet
figma.connect(
  Tearsheet,
  'https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=9837-338231',
  {
    props: {
      header: figma.nestedProps('_Tearsheet header', { ...headerProps }),
      children: figma.children('Slot'),
      actions: figma.boolean('Buttons', {
        true: figma.nestedProps('R:2 | Tearsheet footer item', {
          value: figma.enum('Buttons', {
            '1': [
              {
                key: 1,
                kind: 'primary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked primary'),
              },
            ],
            '2': [
              {
                key: 1,
                kind: 'primary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked primary'),
              },
              {
                key: 2,
                kind: 'secondary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked secondary'),
              },
            ],
            '3': [
              {
                key: 1,
                kind: 'primary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked primary'),
              },
              {
                key: 2,
                kind: 'secondary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked secondary'),
              },
              {
                key: 3,
                kind: 'ghost' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked ghost'),
              },
            ],
            '4': [
              {
                key: 1,
                kind: 'primary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked primary'),
              },
              {
                key: 2,
                kind: 'secondary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked secondary'),
              },
              {
                key: 3,
                kind: 'tertiary' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked tertiary'),
              },
              {
                key: 4,
                kind: 'ghost' as const,
                label: 'Button',
                loading: false,
                onClick: () => console.log('clicked ghost'),
              },
            ],
          }),
        }),
        false: { value: undefined },
      }),
    },
    example: (props) => (
      <Tearsheet open variant="narrow">
        <Tearsheet.Header hideCloseButton={props.header.hideCloseButton}>
          <Tearsheet.HeaderContent
            title={props.header.title}
            description={props.header.description?.text}
            label={props.header.label}
            titleStart={props.header.titleStart}
            headerActions={props.header.actions}
          />
          {props.header.tabs}
        </Tearsheet.Header>

        <Tearsheet.Body>
          <Tearsheet.MainContent>
            This is the main content area.
            {props.children}
          </Tearsheet.MainContent>
        </Tearsheet.Body>

        <Tearsheet.Footer actions={props.actions.value} />
      </Tearsheet>
    ),
  }
);
