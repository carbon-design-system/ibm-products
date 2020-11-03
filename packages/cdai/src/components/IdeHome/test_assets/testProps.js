//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import product_graphic from './Artboard.svg';
import {
  Add32 as AddIcon,
  Information32 as information,
  Application32 as application,
} from '@carbon/icons-react';
import React from 'react';
import { idAttribute } from '../../../component_helpers/IDHelper';

const placeholderOnClick = () => true;

export const coreConfigFunc = (customProps = {}) => {
  return {
    headerOne: 'Welcome to IBM <Product Name Here>',
    headerTwo: "Let's get you going..",
    headerGraphic: {
      imgSrc: product_graphic,
      imgAlt: 'My image alt text',
      imgClassName: 'ide--home-storybook-header',
    },
    ...customProps,
  };
};

export const gettingStartedSetFunc = (
  interactionFunction = placeholderOnClick
) => {
  return {
    id: 'getting_started',
    setHeading: 'Getting Started',
    tasks: [
      {
        taskId: 'simulated',
        cardSize: 'standard',
        taskHeadingTitle: 'Create an instance of',
        taskHeading: 'AppConnect',
        taskHeadingDescription:
          'Secure, control and accelerate delivery of APIs',
        taskSubtext: 'Create a simulated topic here',
        taskGraphic: AddIcon,
        onInteract: interactionFunction,
      },
      {
        taskId: 'topic_create',
        cardSize: 'standard',
        taskHeading: 'Create a topic',
        taskSubtext: 'Create a topic here',
        taskGraphic: AddIcon,
        onInteract: interactionFunction,
      },
      {
        taskId: 'schema',
        cardSize: 'standard',
        taskHeading: 'Create a schema',
        taskSubtext: 'Create a schema here',
        taskGraphic: AddIcon,
        onInteract: interactionFunction,
      },
      {
        taskId: 'sample_app',
        cardSize: 'standard',
        taskHeading: 'Create a sample application',
        taskSubtext: 'Generate a sample app quickly and easily',
        taskGraphic: application,
        onInteract: interactionFunction,
      },
      {
        // no size specified - should be defaulted to standard
        taskId: 'basics',
        taskHeading: 'Product Basics',
        taskSubtext: 'Discover this offering',
        taskGraphic: information,
        onInteract: interactionFunction,
      },
    ],
  };
};

export const disabledCardSet = () => {
  return {
    id: 'custom_cards',
    setHeading: 'Custom card example',
    tasks: [
      {
        taskId: 'custom_card_1',
        cardSize: 'standard',
        taskHeading: 'Create a topic',
        taskGraphic: AddIcon,
        taskLinks: [{ text: 'Create instance', href: '#' }],
        onInteract: () => {},
        disabled: true,
        tooltipText:
          "You don't have access to this content. Please contact admin for support. ",
      },
    ],
  };
};

export const secondaryGraphicCardSet = () => {
  return {
    id: 'external_icon_type_cards',
    setHeading: 'External icon type card example',
    tasks: [
      {
        taskId: 'external_icon_type_card_1',
        cardSize: 'standard',
        taskHeading: 'External icon type card',
        taskGraphic: AddIcon,
        onInteract: placeholderOnClick,
        secondaryGraphic: 'external',
      },
    ],
  };
};

export const recentTasksSetFunc = (
  interactionFunction = placeholderOnClick
) => {
  return {
    id: 'recent_tasks',
    setHeading: 'Your recent tasks',
    tasks: [
      {
        taskId: 'recent_product_task',
        cardSize: 'standard',
        taskHeading: 'A recent user task tile',
        taskSubtext: "Detect and provide a user's common activities",
        onInteract: interactionFunction,
      },
      {
        taskId: 'withlinks',
        cardSize: 'standard',
        taskHeading: 'View all objects',
        taskLinks: [
          { text: '7 started', href: '#started' },
          { text: '6 stopped', href: '#stopped' },
          { text: '3 incomplete', href: '#incomplete' },
        ],
        taskGraphic: information,
        onInteract: interactionFunction,
      },
    ],
  };
};

export const cardWidthSetFunc = (interactionFunction = placeholderOnClick) => {
  return {
    id: 'my_set_id',
    setHeading: 'Custom tasks',
    tasks: [
      {
        taskId: 'standard',
        cardSize: 'standard',
        taskHeading: 'Standard card',
        taskSubtext: 'This is a standard card size',
        taskGraphic: AddIcon,
        onInteract: interactionFunction,
      },
      {
        taskId: 'large',
        cardSize: 'large',
        taskHeading: 'Large card',
        taskSubtext:
          'This is a large card, which will be twice the width of a standard card',
        taskGraphic: AddIcon,
        onInteract: interactionFunction,
      },
      {
        taskId: 'standard_2',
        cardSize: 'standard',
        taskHeading: 'Standard card',
        taskSubtext: 'This is a standard card size',
        taskGraphic: AddIcon,
        onInteract: interactionFunction,
      },
    ],
  };
};

export const customCardContentSetFunc = (
  interactionFunction = placeholderOnClick
) => {
  return {
    id: 'custom_cards',
    setHeading: 'Custom card example',
    tasks: [
      {
        taskId: 'custom_card_1',
        cardSize: 'standard',
        taskHeading: 'Create a topic',
        renderFunc: () => (
          <div>
            My custom content. The content of this card is defined in my code
            using my own JSX!
          </div>
        ),
        onInteract: interactionFunction,
      },
    ],
  };
};

export const tasksValidImage = () => {
  return {
    id: 'custom_cards',
    setHeading: 'Custom card example',
    headerGraphic: <img alt="" />,
    tasks: [
      {
        taskId: 'custom_card_1',
        cardSize: 'standard',
        taskHeading: 'Create a topic',
        taskGraphic: AddIcon,
        taskLinks: [{ text: 'Create instance', href: '#' }],
        onInteract: () => {},
      },
    ],
  };
};

export const customInitialTabFunc = () => {
  return {
    id: 'initial tab',
    setHeading: 'Initial Tab',
    renderFunc: () => <div {...idAttribute('tab1')}> Tab 1 Content</div>,
  };
};

export const customSecondTabFunc = () => {
  return {
    id: 'second_tab',
    setHeading: 'Second Tab',
    renderFunc: () => <div {...idAttribute('tab2')}>Tab 2 Content</div>,
  };
};

export const customInitialSectionFunc = () => {
  return {
    id: 'first_section',
    setHeading: 'First Section',
    renderFunc: () => (
      <div {...idAttribute('section1')}> Section 1 Content</div>
    ),
  };
};

export const customSecondSectionFunc = () => {
  return {
    id: 'second_section',
    setHeading: 'Second Section',
    renderFunc: () => <div {...idAttribute('section2')}>Section 2 Content</div>,
  };
};

export const customSecondTabNoRenderFunc = () => {
  return {
    id: 'second_tab',
    setHeading: 'Second Tab',
  };
};

export const withCustomSetTabFunc = () => {
  return {
    sets: [customInitialTabFunc(), customSecondTabFunc()],
  };
};

export const withOneSetToRender = () => {
  return {
    sets: [customInitialTabFunc()],
  };
};

export const withNoTasksOrRenderFunc = () => {
  return {
    sets: [customInitialTabFunc(), customSecondTabNoRenderFunc()],
  };
};

export const withCustomSetSectionFunc = () => {
  return {
    sets: [customInitialSectionFunc(), customSecondSectionFunc()],
    multipleSetType: 'section',
  };
};

export const tasksForEachIdeCardType = () => ({
  id: 'idecard_types_example',
  setHeading:
    'Examples of how different task properties map to IDE Cards rendered',
  tasks: [
    // idecard type specified via `cardType`
    {
      taskId: 'ide_card',
      taskHeading: 'IdeCard type (text) provided via `cardType`',
      cardType: 'text', // type specified
      onInteract: () => {},
    },
    // custom card content
    {
      taskId: 'custom_card',
      taskHeading: 'Custom Card',
      renderFunc: () => (
        <div>Custom content IdeCard case, by providing `renderFunc`</div>
      ),
      onInteract: () => {},
    },
    // link
    {
      taskId: 'link_card',
      taskHeading: 'Ide Card link by providing `taskLinks`',
      taskLinks: [{ text: 'Create instance', href: '#' }],
      onInteract: () => {},
    },
    // external link
    {
      taskId: 'external_link_card',
      cardHref: '#',
      taskHeading:
        'Ide Card external link by providing `cardHref` and `cardLinkType`',
      cardLinkType: 'external',
      onInteract: () => {},
    },
    // default/no metadata provided - text
    {
      taskId: 'no_type',
      taskHeading:
        'Default IdeCard type when none specified  - defaults to text',
      onInteract: () => {},
    },
  ],
});

export const withAllIdeCardTypes = () => ({
  sets: [tasksForEachIdeCardType()],
});

// Only used in tests, as the stories use knobs now
export const withCollapsibleAbility = () => {
  return {
    id: 'second_tab',
    setHeading: 'Second Tab',
    headerCollapsible: true,
    headerCollapsed: false,
    headerHandleCollapseFunc: () => {},
  };
};
