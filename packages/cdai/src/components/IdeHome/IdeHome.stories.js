//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IdeHome } from '.';
import IDEHomeReadme from './README.md';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import {
  coreConfigFunc,
  gettingStartedSetFunc,
  recentTasksSetFunc,
  cardWidthSetFunc,
  customCardContentSetFunc,
  disabledCardSet,
  withNoTasksOrRenderFunc,
  withCustomSetTabFunc,
  secondaryGraphicCardSet,
  withAllIdeCardTypes,
} from './test_assets/testProps.js';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';
import styles from './_storybook.scss';

const onInteractPlaceholder = (tileId) => action()(tileId + ' interaction');

const coreConfig = coreConfigFunc({
  className: 'storybook--use-width', // for purpose of appearance in the storybook, take all width available
});

const withOneSet = {
  sets: [gettingStartedSetFunc(onInteractPlaceholder)],
};

const withTwoSets = {
  sets: [
    gettingStartedSetFunc(onInteractPlaceholder),
    recentTasksSetFunc(onInteractPlaceholder),
  ],
};

const withTwoSetsAsSections = {
  sets: [
    gettingStartedSetFunc(onInteractPlaceholder),
    recentTasksSetFunc(onInteractPlaceholder),
  ],
  multipleSetType: 'section',
};

const withTwoSetsSecondSelected = {
  sets: [
    gettingStartedSetFunc(onInteractPlaceholder),
    {
      ...recentTasksSetFunc(onInteractPlaceholder),
      ...{ startSelected: true },
    }, // spread the startSelected into this second sets
  ],
};

const withWidthSet = {
  sets: [cardWidthSetFunc(onInteractPlaceholder)],
};

const withCustomCardContentSet = {
  sets: [customCardContentSetFunc(onInteractPlaceholder)],
};

const withDisabledCardSet = {
  sets: [disabledCardSet()],
};

const withExternalCardSet = {
  sets: [secondaryGraphicCardSet()],
};

const withCustomSetTabFuncConfig = withCustomSetTabFunc();
const withNoTasksOrRenderFuncConfig = withNoTasksOrRenderFunc();

const configWithStorybookInteractions = () => {
  return {
    headerCollapsible: boolean('Toggle collapsible?', false),
    headerCollapsed: boolean('Toggle header?', false),
    headerButtonTextExpand: text('Show more', 'Show more'),
    headerButtonTextCollapse: text('Show less', 'Show less'),
    headerHandleCollapseFunc: () => action()('toggle triggered'),
  };
};

storiesOf(getComponentLabel('IdeHome'), module)
  .addDecorator(withKnobs)
  .addParameters({ styles, layout: 'fullscreen' })
  .addParameters({
    readme: {
      sidebar: IDEHomeReadme,
    },
  })
  .add('With core configuration', () => <IdeHome {...coreConfig} />, {
    info: {
      text: 'Core/minimum configuration. Use this to enable the header elements, but then add your own content below. Useful if you do not require tiles.',
    },
  })
  .add(
    'With collapsible ability',
    () => <IdeHome {...coreConfig} {...configWithStorybookInteractions()} />,
    {
      info: {
        text: 'Core/minimum configuration and with collapsible ability. In this scenario a Show more/Show Less button will appear which will toggle between the classic and the compressed version.',
      },
    }
  )
  .add('With one set', () => <IdeHome {...coreConfig} {...withOneSet} />, {
    info: {
      text: 'Core configuration with one subsection. As there is only one section, no Tabs are rendered to select another set of tasks.',
    },
  })
  .add(
    'With two or more sets arranged as tabs',
    () => <IdeHome {...coreConfig} {...withTwoSets} />,
    {
      info: {
        text: 'Core configuration with multiple subsections.',
      },
    }
  )
  .add(
    'With two or more sets arranged as sections',
    () => <IdeHome {...coreConfig} {...withTwoSetsAsSections} />,
    {
      info: {
        text: 'Core configuration with multiple subsections.',
      },
    }
  )
  .add(
    'With two or more sets arranged as tabs, specifying a starting set to render',
    () => <IdeHome {...coreConfig} {...withTwoSetsSecondSelected} />,
    {
      info: {
        text: 'Core configuration with multiple subsections, specifying a custom initial render point. This is provided by the `startSelected` key on the set.',
      },
    }
  )
  .add(
    'Specifying tasks which require different widths',
    () => <IdeHome {...coreConfig} {...withWidthSet} />,
    {
      info: {
        text: 'Core configuration with multiple tasks. These tasks specify the cardSize property, which then changes the rendered cards width. Note: small cards, called for in the pattern, have not yet been implemented.',
      },
    }
  )
  .add(
    'Specifying custom card content',
    () => <IdeHome {...coreConfig} {...withCustomCardContentSet} />,
    {
      info: {
        text: 'Core configuration with a task which has a custom render function. Passed as a callback, this allows bespoke content to appear in the card - use this to provide application specific content to the user.',
      },
    }
  )
  .add(
    'Specifying disabled card',
    () => <IdeHome {...coreConfig} {...withDisabledCardSet} />,
    {
      info: {
        text: 'Core configuration with a set containing a card which is disabled. Disabled flag of the task has been passed in as true and the tooltipText was also passed in to display the tooltip on the disabled link on click. ',
      },
    }
  )
  .add(
    'Specifying card with external link icon type',
    () => <IdeHome {...coreConfig} {...withExternalCardSet} />,
    {
      info: {
        text: 'Core configuration with a set containing a card with icon type set to "external" which forces the launch out icon to display.',
      },
    }
  )
  .add(
    'Specifying custom tab content',
    () => <IdeHome {...coreConfig} {...withCustomSetTabFuncConfig} />,
    {
      info: {
        text: 'Custom Tab Content using the callback renderFunc(). This function can be used to display custom user content under a tab.',
      },
    }
  )
  .add(
    'Specifying tabs with no render function or tasks',
    () => <IdeHome {...coreConfig} {...withNoTasksOrRenderFuncConfig} />,
    {
      info: {
        text: 'No tasks and no render function. This is to display the behaviour if the user specifies a set, but no tasks or render function.',
      },
    }
  )
  .add(
    'Task type to IdeCard rendering',
    () => <IdeHome {...coreConfig} {...withAllIdeCardTypes()} />,
    {
      info: {
        text: 'Shows how the provided task data changes the type of IdeCard rendered by the landing page',
      },
    }
  );
