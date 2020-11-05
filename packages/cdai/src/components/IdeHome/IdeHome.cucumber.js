//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

const { cucumber } = require('gherkin-jest');
import { IdeHome } from '.';
import * as props from './test_assets/testProps.js';
import { idAttributeSelector } from '../../component_helpers/IDHelper';

const TASK_BASIC = 'Basics';
const TASK_RECENT = 'Recent tasks';
const TASK_ACC = 'Accelerators';
const TASK_CUSTOM = 'Custom';
const IDE_CARD = 'IDE_CARD';

const testSets = {
  [TASK_BASIC]: props.gettingStartedSetFunc,
  [TASK_RECENT]: props.recentTasksSetFunc,
  [TASK_ACC]: props.cardWidthSetFunc,
  [TASK_CUSTOM]: props.customCardContentSetFunc,
  [IDE_CARD]: props.tasksForEachIdeCardType,
};

cucumber.defineRule('Setup of the IdeHome world', (world) => {
  world.componentToRender = IdeHome;
});

const setHelper = (currentProps = {}, newSetToAdd) => {
  if (currentProps.sets) {
    return {
      sets: currentProps.sets.concat(newSetToAdd),
    };
  } else {
    return {
      sets: [newSetToAdd],
    };
  }
};

const getSetForActivity = (
  taskName = TASK_BASIC,
  interactFunction = () => true
) => testSets[taskName](interactFunction);

cucumber.defineRule(
  'a set of activities called {string}',
  (world, activitySet) => {
    world.ideInteractionCb = jest.fn();
    world.defaultProps = props.coreConfigFunc();
    world.props = setHelper(
      world.props,
      getSetForActivity(activitySet, world.ideInteractionCb)
    );
  }
);

cucumber.defineRule(
  'the {string} set is the selected tab',
  (world, setName) => {
    let propsToCheckFor = getSetForActivity(setName, world.ideInteractionCb);
    let indexOfSet = world.props.sets.findIndex((set) => {
      return set.id === propsToCheckFor.id;
    });
    expect(
      world.mountedComponent.find(idAttributeSelector(`IdeHome-Tabs`)).props()
        .selected
    ).toBe(indexOfSet);
  }
);

cucumber.defineRule(
  'the {string} activities set is rendered',
  (world, setName) => {
    let propsToCheckFor = getSetForActivity(setName, world.ideInteractionCb);
    let tabSelector = idAttributeSelector(`IdeHome-Tab-${propsToCheckFor.id}`);
    // confirm a tab for this set is present
    expect(world.mountedComponent.exists(tabSelector)).toBe(true);
    world.mountedComponent.simulate('click'); // click it to get items on screen
  }
);

cucumber.defineRule(
  'the {string} activities set is rendered only',
  (world, setName) => {
    let propsToCheckFor = getSetForActivity(setName, world.ideInteractionCb);
    let noMatchSelector = idAttributeSelector(
      `IdeHome-Tab-${propsToCheckFor.id}`
    );
    // as only one set, there should be no Tabs
    expect(world.mountedComponent.exists(noMatchSelector)).toBe(false);
  }
);

cucumber.defineRule(
  'the selected tab is changed to {string}',
  (world, setName) => {
    let propsToCheckFor = getSetForActivity(setName, world.ideInteractionCb);
    let tabSelector = idAttributeSelector(`IdeHome-Tab-${propsToCheckFor.id}`);
    // confirm a tab for this set is present
    expect(world.mountedComponent.exists(tabSelector)).toBe(true);
    world.mountedComponent.find(tabSelector).prop('onClick')({ type: 'click' }); // trigger the click handler directly, rather than using simulate (assume browser passes event through)
  }
);

cucumber.defineRule(
  'the callback is invoked with {string} task id as its parameter',
  (world, taskId) => {
    expect(world.ideInteractionCb).toBeCalled();
    expect(world.ideInteractionCb.mock.calls[0][0]).toEqual(taskId);
  }
);

cucumber.defineRule(
  'the property startSelected is added to the {string} set',
  (world, setId) => {
    world.props.sets.find((set) => {
      return set.id === setId;
    }).startSelected = true;
  }
);

cucumber.defineRule('I want to render sections rather than tabs', (world) => {
  world.props.multipleSetType = 'section';
});

cucumber.defineRule(
  'the {string} activities set is rendered as a section',
  (world, setName) => {
    let propsToCheckFor = getSetForActivity(setName, world.ideInteractionCb);
    let sectionSelector = idAttributeSelector(
      `IdeHome-Section-${propsToCheckFor.id}`
    );
    // confirm a section for this set is present
    expect(world.mountedComponent.exists(sectionSelector)).toBe(true);
  }
);

cucumber.defineRule('the expected IDECard components are rendered', (world) => {
  const { tasks } = getSetForActivity(IDE_CARD);

  // mapping of the card IDs from the tasks (in IDE_CARD) to the expected IdeCard type property given at render
  const expectedTypesById = {
    ide_card: 'text',
    custom_card: 'custom',
    link_card: 'link',
    external_link_card: 'externalLink',
    no_type: 'text',
  };

  tasks.forEach(({ taskId }) => {
    const selectorForCard = `IdeCard[cardId="${taskId}"]`;
    expect(world.mountedComponent.exists(selectorForCard)).toBe(true);
    const ideCardForTask = world.mountedComponent.find(selectorForCard);
    expect(ideCardForTask.props().cardType).toBe(expectedTypesById[taskId]);
  });
});
