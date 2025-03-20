/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useRef, useState } from 'react';
// TODO: import action to handle events if required.
// import { action } from '@storybook/addon-actions';
import { Wikis } from '@carbon/react/icons';
import { ConditionBuilder } from '.';
import mdx from './ConditionBuilder.mdx';

import styles from './_storybook-styles.scss?inline';
import {
  inputData,
  inputDataDynamicOptions,
  inputDataForCustomOperator,
} from './assets/sampleInput';
import {
  sampleDataStructure_nonHierarchical,
  sampleDataStructure_Hierarchical,
  initialStateWithCustomOperators,
} from './assets/SampleData';
import uuidv4 from '../../global/js/utils/uuidv4';
import { HIERARCHICAL_VARIANT, NON_HIERARCHICAL_VARIANT } from './utils/util';
import { Button } from '@carbon/react';
import { Tearsheet } from '../Tearsheet';
export default {
  title: 'Experimental/Components/ConditionBuilder',
  component: ConditionBuilder,
  tags: ['autodocs'],

  parameters: {
    layout: 'fullscreen',
    styles,
    docs: {
      page: mdx,
    },
  },
};

const getContinents = () => {
  return [
    {
      label: 'Africa',
      id: 'Africa',
    },
    {
      label: 'Antarctica',
      id: 'Antarctica',
    },
    {
      label: 'Asia',
      id: 'Asia',
    },
    {
      label: 'Australia',
      id: 'Australia',
    },
    {
      label: 'Europe',
      id: 'Europe',
    },
  ];
};

const getRegions = () => {
  return [
    {
      label: 'Afghanistan',
      id: 'AF',
      icon: Wikis,
    },
    {
      label: 'Albania',
      id: 'AL',
      icon: Wikis,
    },
    {
      label: 'Algeria',
      id: 'AG',
      icon: Wikis,
    },
    {
      label: 'Andorra',
      id: 'AN',
      icon: Wikis,
    },
  ];
};

const getColors = () => {
  return [
    {
      label: 'black',
      id: 'black',
    },
    {
      label: 'silver',
      id: 'silver',
    },
    {
      label: 'gray',
      id: 'gray',
    },
    {
      label: 'white',
      id: 'white',
    },
    {
      label: 'maroon',
      id: 'maroon',
    },
    {
      label: 'red',
      id: 'red',
    },
    {
      label: 'purple',
      id: 'purple',
    },
    {
      label: 'fuchsia',
      id: 'fuchsia',
    },
    {
      label: 'green',
      id: 'green',
    },
    {
      label: 'lime',
      id: 'lime',
    },
    {
      label: 'olive',
      id: 'olive',
    },
    {
      label: 'yellow',
      id: 'yellow',
    },
    {
      label: 'navy',
      id: 'navy',
    },
    {
      label: 'blue',
      id: 'blue',
    },
    {
      label: 'teal',
      id: 'teal',
    },
    {
      label: 'aqua',
      id: 'aqua',
    },
  ];
};

const getOptions = async (conditionState, { property }) => {
  switch (property) {
    case 'continent':
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(getContinents());
        }, 2000);
      });
    case 'region':
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(getRegions());
        }, 2000);
      });
    case 'color':
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(getColors());
        }, 2000);
      });
    default:
      return [];
  }
};
const requiredProps = {
  startConditionLabel: 'Add condition',
  popOverSearchThreshold: 4,
  getConditionState: (rootState) => {
    console.log(rootState);
  },
};

const actions = [
  {
    id: uuidv4(),
    label: 'Add item to cart',
  },
  { id: uuidv4(), label: 'Proceed item to checkout' },
];

const translateWithId = (key) => {
  const translationsObject = {
    ifText: 'if',
    addConditionText: 'Add condition',
    addConditionGroupText: 'Add condition group',
    addSubgroupText: 'Add subgroup',
  };

  return translationsObject[key];
};
/**
 * TODO: Declare template(s) for one or more scenarios.
 */

const ConditionBuilderTemplate = (args) => {
  const ref = useRef(undefined);
  return <ConditionBuilder {...args} ref={ref} {...requiredProps} />;
};
const ConditionBuilderTemplate1 = (args) => {
  const ref = useRef(undefined);
  // return <ConditionBuilder {...args} ref={ref} {...requiredProps} />;
  const [showTearsheet, setShowTearsheet] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowTearsheet(!showTearsheet)}
        kin="primary"
        size="sm"
      >
        Open
      </Button>
      <Tearsheet
        onClose={() => setShowTearsheet(false)}
        title="tearsheet"
        open={showTearsheet}
        test-id="queryTearsheet"
      >
        <ConditionBuilder
          popOverSearchThreshold={4}
          initialState={{
            state: {
              operator: 'or',
              groups: [
                {
                  groupOperator: 'and',
                  statement: 'ifAll',
                  id: 1,
                  conditions: [
                    {
                      operator: '',
                      value: '',
                      id: 1,
                      property: '',
                      popoverToOpen: 'propertyField',
                    },
                  ],
                },
              ],
            },
            enabledDefault: true,
          }}
          //variant="Hierarchical"
          inputConfig={{
            properties: [
              {
                id: 'owner',
                label: 'Owner',
                type: 'textarea',
                config: {},
              },
              {
                id: 'modified_on',
                label: 'Modified On',
                type: 'date',
                config: {},
              },
              {
                id: 'asset_size',
                label: 'Asset Size',
                type: 'textarea',
                config: {},
              },
              {
                id: 'parent_folder_id',
                label: 'Parent Folder Id',
                type: 'textarea',
                config: {},
              },
              {
                id: 'format',
                label: 'Format',
                type: 'textarea',
                config: {},
              },
              {
                id: 'rating',
                label: 'Rating',
                type: 'number',
                config: {
                  min: 0,
                  step: 1,
                  unit: '',
                },
              },
              {
                id: 'description',
                label: 'Description',
                type: 'textarea',
                config: {},
              },
              {
                id: 'asset_id',
                label: 'Asset Id',
                type: 'textarea',
                config: {},
              },
              {
                id: 'source',
                label: 'Source',
                type: 'textarea',
                config: {},
              },
              {
                id: 'identity_key',
                label: 'Identity Key',
                type: 'textarea',
                config: {},
              },
              {
                id: 'origin_country',
                label: 'Origin Country',
                type: 'textarea',
                config: {},
              },
              {
                id: 'asset_category',
                label: 'Asset Category',
                type: 'textarea',
                config: {},
              },
              {
                id: 'total_ratings',
                label: 'Total Ratings',
                type: 'textarea',
                config: {},
              },
              {
                id: 'created_on',
                label: 'Created On',
                type: 'date',
                config: {},
              },
              {
                id: 'asset_state',
                label: 'Asset State',
                type: 'textarea',
                config: {},
              },
              {
                id: 'container_type',
                label: 'Container Type',
                type: 'textarea',
                config: {},
              },
              {
                id: 'name',
                label: 'Name',
                type: 'textarea',
                config: {},
              },
              {
                id: 'asset_type',
                label: 'Asset Type',
                type: 'textarea',
                config: {},
              },
              {
                id: 'rov',
                label: 'Rov',
                type: 'textarea',
                config: {},
              },
              {
                id: 'modified_by',
                label: 'Modified By',
                type: 'textarea',
                config: {},
              },
              {
                id: 'source_additional_info',
                label: 'Source Additional Info',
                type: 'textarea',
                config: {},
              },
              {
                id: 'container_id',
                label: 'Container Id',
                type: 'textarea',
                config: {},
              },
              {
                id: 'created_on.Containers',
                label: 'Containers / Created On',
                type: 'date',
                config: {},
              },
              {
                id: 'container_type.Containers',
                label: 'Containers / Container Type',
                type: 'textarea',
                config: {},
              },
              {
                id: 'name.Containers',
                label: 'Containers / Name',
                type: 'textarea',
                config: {},
              },
              {
                id: 'description.Containers',
                label: 'Containers / Description',
                type: 'textarea',
                config: {},
              },
              {
                id: 'is_governed.Containers',
                label: 'Containers / Is Governed',
                type: 'option',
                config: {
                  options: [
                    {
                      id: 'true',
                      label: 'True',
                    },
                    {
                      id: 'false',
                      label: 'False',
                    },
                  ],
                },
              },
              {
                id: 'created_by.Containers',
                label: 'Containers / Created By',
                type: 'textarea',
                config: {},
              },
              {
                id: 'tag_name.Asset Tags',
                label: 'Asset Tags / Tag Name',
                type: 'textarea',
                config: {},
              },
              {
                id: 'role.Asset Collaborators',
                label: 'Asset Collaborators / Role',
                type: 'textarea',
                config: {},
              },
              {
                id: 'user_id.Asset Collaborators',
                label: 'Asset Collaborators / User Id',
                type: 'textarea',
                config: {},
              },
              {
                id: 'is_group.Asset Collaborators',
                label: 'Asset Collaborators / Is Group',
                type: 'option',
                config: {
                  options: [
                    {
                      id: 'true',
                      label: 'True',
                    },
                    {
                      id: 'false',
                      label: 'False',
                    },
                  ],
                },
              },
              {
                id: 'modified_on.Associated Artifacts.Artifacts',
                label: 'Associated Artifacts/ Artifacts / Modified On',
                type: 'date',
                config: {},
              },
              {
                id: 'effective_start.Associated Artifacts.Artifacts',
                label: 'Associated Artifacts/ Artifacts / Effective Start',
                type: 'date',
                config: {},
              },
              {
                id: 'artifact_type.Associated Artifacts.Artifacts',
                label: 'Associated Artifacts/ Artifacts / Artifact Type',
                type: 'textarea',
                config: {},
              },
              {
                id: 'rds_values_total_counts.Associated Artifacts.Artifacts',
                label:
                  'Associated Artifacts/ Artifacts / Rds Values Total Counts',
                type: 'number',
                config: {
                  min: 0,
                  step: 1,
                  unit: '',
                },
              },
              {
                id: 'system_id.Associated Artifacts.Artifacts',
                label: 'Associated Artifacts/ Artifacts / System Id',
                type: 'textarea',
                config: {},
              },
              {
                id: 'description.Associated Artifacts.Artifacts',
                label: 'Associated Artifacts/ Artifacts / Description',
                type: 'textarea',
                config: {},
              },
              {
                id: 'version_id.Associated Artifacts.Artifacts',
                label: 'Associated Artifacts/ Artifacts / Version Id',
                type: 'textarea',
                config: {},
              },
              {
                id: 'primary_category_id.Associated Artifacts.Artifacts',
                label: 'Associated Artifacts/ Artifacts / Primary Category Id',
                type: 'textarea',
                config: {},
              },
              {
                id: 'created_by.Associated Artifacts.Artifacts',
                label: 'Associated Artifacts/ Artifacts / Created By',
                type: 'textarea',
                config: {},
              },
              {
                id: 'effective_end.Associated Artifacts.Artifacts',
                label: 'Associated Artifacts/ Artifacts / Effective End',
                type: 'date',
                config: {},
              },
              {
                id: 'created_on.Associated Artifacts.Artifacts',
                label: 'Associated Artifacts/ Artifacts / Created On',
                type: 'date',
                config: {},
              },
              {
                id: 'name.Associated Artifacts.Artifacts',
                label: 'Associated Artifacts/ Artifacts / Name',
                type: 'textarea',
                config: {},
              },
              {
                id: 'modified_by.Associated Artifacts.Artifacts',
                label: 'Associated Artifacts/ Artifacts / Modified By',
                type: 'textarea',
                config: {},
              },
              {
                id: 'assignment_date.Associated Artifacts',
                label: 'Associated Artifacts / Assignment Date',
                type: 'date',
                config: {},
              },
              {
                id: 'system_id.Associated Artifacts',
                label: 'Associated Artifacts / System Id',
                type: 'textarea',
                config: {},
              },
              {
                id: 'confidence.Associated Artifacts',
                label: 'Associated Artifacts / Confidence',
                type: 'number',
                config: {
                  min: 0,
                  step: 1,
                  unit: '',
                },
              },
              {
                id: 'specification.Associated Artifacts',
                label: 'Associated Artifacts / Specification',
                type: 'textarea',
                config: {},
              },
              {
                id: 'assigned_by.Associated Artifacts',
                label: 'Associated Artifacts / Assigned By',
                type: 'textarea',
                config: {},
              },
              {
                id: 'assignment_state.Associated Artifacts',
                label: 'Associated Artifacts / Assignment State',
                type: 'textarea',
                config: {},
              },
              {
                id: 'modified_on.Related Artifacts',
                label: 'Related Artifacts / Modified On',
                type: 'date',
                config: {},
              },
              {
                id: 'effective_start.Related Artifacts',
                label: 'Related Artifacts / Effective Start',
                type: 'date',
                config: {},
              },
              {
                id: 'artifact_type.Related Artifacts',
                label: 'Related Artifacts / Artifact Type',
                type: 'textarea',
                config: {},
              },
              {
                id: 'rds_values_total_counts.Related Artifacts',
                label: 'Related Artifacts / Rds Values Total Counts',
                type: 'number',
                config: {
                  min: 0,
                  step: 1,
                  unit: '',
                },
              },
              {
                id: 'system_id.Related Artifacts',
                label: 'Related Artifacts / System Id',
                type: 'textarea',
                config: {},
              },
              {
                id: 'description.Related Artifacts',
                label: 'Related Artifacts / Description',
                type: 'textarea',
                config: {},
              },
              {
                id: 'version_id.Related Artifacts',
                label: 'Related Artifacts / Version Id',
                type: 'textarea',
                config: {},
              },
              {
                id: 'primary_category_id.Related Artifacts',
                label: 'Related Artifacts / Primary Category Id',
                type: 'textarea',
                config: {},
              },
              {
                id: 'created_by.Related Artifacts',
                label: 'Related Artifacts / Created By',
                type: 'textarea',
                config: {},
              },
              {
                id: 'effective_end.Related Artifacts',
                label: 'Related Artifacts / Effective End',
                type: 'date',
                config: {},
              },
              {
                id: 'created_on.Related Artifacts',
                label: 'Related Artifacts / Created On',
                type: 'date',
                config: {},
              },
              {
                id: 'name.Related Artifacts',
                label: 'Related Artifacts / Name',
                type: 'textarea',
                config: {},
              },
              {
                id: 'modified_by.Related Artifacts',
                label: 'Related Artifacts / Modified By',
                type: 'textarea',
                config: {},
              },
              {
                id: 'owner.Related Assets',
                label: 'Related Assets / Owner',
                type: 'textarea',
                config: {},
              },
              {
                id: 'modified_on.Related Assets',
                label: 'Related Assets / Modified On',
                type: 'date',
                config: {},
              },
              {
                id: 'asset_size.Related Assets',
                label: 'Related Assets / Asset Size',
                type: 'textarea',
                config: {},
              },
              {
                id: 'parent_folder_id.Related Assets',
                label: 'Related Assets / Parent Folder Id',
                type: 'textarea',
                config: {},
              },
              {
                id: 'identity_key.Related Assets',
                label: 'Related Assets / Identity Key',
                type: 'textarea',
                config: {},
              },
              {
                id: 'origin_country.Related Assets',
                label: 'Related Assets / Origin Country',
                type: 'textarea',
                config: {},
              },
              {
                id: 'created_on.Related Assets',
                label: 'Related Assets / Created On',
                type: 'date',
                config: {},
              },
              {
                id: 'quality_score.Container Data Assets',
                label: 'Container Data Assets / Quality Score',
                type: 'number',
                config: {
                  min: 0,
                  step: 1,
                  unit: '',
                },
              },
              {
                id: 'number_of_records.Container Data Assets',
                label: 'Container Data Assets / Number Of Records',
                type: 'number',
                config: {
                  min: 0,
                  step: 1,
                  unit: '',
                },
              },
              {
                id: 'reviewed_on.Container Data Assets',
                label: 'Container Data Assets / Reviewed On',
                type: 'date',
                config: {},
              },
              {
                id: 'last_profile_time.Container Data Assets',
                label: 'Container Data Assets / Last Profile Time',
                type: 'date',
                config: {},
              },
              {
                id: 'source_container_id.Container Data Assets',
                label: 'Container Data Assets / Source Container Id',
                type: 'textarea',
                config: {},
              },
            ],
          }}
        />
      </Tearsheet>
    </>
  );
};

/**
 * TODO: Declare one or more stories, generally one per design scenario.
 * NB no need for a 'Playground' because all stories have all controls anyway.
 */
const statementConfigCustom = [
  {
    id: 'if',
    connector: 'and',
    label: 'if',
  },
  {
    id: 'exclIf',
    connector: 'or',
    label: 'excl. if',
  },
];

export const conditionBuilder = ConditionBuilderTemplate.bind({});
conditionBuilder.storyName = 'Condition Builder';
conditionBuilder.args = {
  inputConfig: inputData,
  variant: NON_HIERARCHICAL_VARIANT,
};

export const conditionBuilderDynamicOptions = ConditionBuilderTemplate.bind({});
conditionBuilderDynamicOptions.storyName = 'With dynamic options';
conditionBuilderDynamicOptions.args = {
  inputConfig: inputDataDynamicOptions,
  getOptions: getOptions,
  variant: NON_HIERARCHICAL_VARIANT,
};

export const conditionBuilderWithInitialState = ConditionBuilderTemplate1.bind(
  {}
);
conditionBuilderWithInitialState.storyName = 'With initial state';
conditionBuilderWithInitialState.args = {
  initialState: {
    state: sampleDataStructure_nonHierarchical,
    enabledDefault: true,
  },
  inputConfig: inputData,
  variant: NON_HIERARCHICAL_VARIANT,
  translateWithId: translateWithId,
};

export const conditionBuilderWithCustomStatements =
  ConditionBuilderTemplate.bind({});
conditionBuilderWithCustomStatements.storyName =
  'With Custom statement configuration';
conditionBuilderWithCustomStatements.args = {
  inputConfig: inputData,
  variant: NON_HIERARCHICAL_VARIANT,
  translateWithId: translateWithId,
  statementConfigCustom: statementConfigCustom,
};

export const conditionBuilderWithCustomOperators =
  ConditionBuilderTemplate.bind({});
conditionBuilderWithCustomOperators.storyName =
  'With Custom operator configuration';
conditionBuilderWithCustomOperators.args = {
  inputConfig: inputDataForCustomOperator,
  initialState: {
    state: initialStateWithCustomOperators,
    enabledDefault: true,
  },
  variant: NON_HIERARCHICAL_VARIANT,
  translateWithId: translateWithId,
};

export const conditionBuilderWithActions = ConditionBuilderTemplate.bind({});
conditionBuilderWithActions.storyName = 'With Actions';
conditionBuilderWithActions.args = {
  inputConfig: inputData,
  variant: NON_HIERARCHICAL_VARIANT,
  actions: actions,
  getActionsState: (actionState) => {
    console.log('action state', actionState);
  },
};

export const conditionBuilderHierarchical = ConditionBuilderTemplate.bind({});
conditionBuilderHierarchical.storyName = 'Condition Builder (Hierarchical)';
conditionBuilderHierarchical.args = {
  inputConfig: inputData,
  variant: HIERARCHICAL_VARIANT,
};
export const conditionBuilderWithInitialStateHierarchical =
  ConditionBuilderTemplate.bind({});
conditionBuilderWithInitialStateHierarchical.storyName =
  'With initial state (Hierarchical)';
conditionBuilderWithInitialStateHierarchical.args = {
  initialState: {
    state: sampleDataStructure_Hierarchical,
    enabledDefault: false,
  },
  inputConfig: inputData,
  variant: HIERARCHICAL_VARIANT,
};

export const conditionBuilderWithActionsHierarchical =
  ConditionBuilderTemplate.bind({});
conditionBuilderWithActionsHierarchical.storyName =
  'With Actions (Hierarchical)';
conditionBuilderWithActionsHierarchical.args = {
  inputConfig: inputData,
  variant: HIERARCHICAL_VARIANT,
  actions: actions,
  getActionsState: (actionState) => {},
};
