// url=https://www.figma.com/design/0F9dKH2abAd7gSfvnacfWf/-v11--IBM-Products-%E2%80%93-Carbon-Design-System?node-id=16584%3A8129
// source=https://github.com/carbon-design-system/ibm-products/blob/main/packages/ibm-products/src/components/ConditionBuilder/ConditionBuilder.tsx
// component=ConditionBuilder

/**
 * Copyright IBM Corp. 2025, 2026
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import figma from 'figma';

function createTemplate() {
  return {
    id: 'ConditionBuilderNonHierarchical',
    imports: [
      "import { previewCandidate__ConditionBuilder as ConditionBuilder } from '@carbon/ibm-products';",
      "import { Calendar, Currency, DeliveryTruck, Earth, Hashtag, Tree } from '@carbon/react/icons';",
    ],
    example: figma.code`<>
  {/* Sample ConditionBuilder code, not directly mapped */}
  <ConditionBuilder
    variant="Non-Hierarchical"
    inputConfig={{
      properties: [
        {
          id: 'continent',
          label: 'Continent',
          icon: Earth,
          type: 'option',
          description: 'Continent',
          config: {
            options: [
              { label: 'Africa', id: 'Africa' },
              { label: 'Antarctica', id: 'Antarctica' },
              { label: 'Asia', id: 'Asia' },
              { label: 'Australia', id: 'Australia' },
              { label: 'Europe', id: 'Europe' },
            ],
          },
        },

        {
          id: 'id',
          label: 'ID',
          icon: Hashtag,
          type: 'text',
          config: {},
        },
        {
          id: 'id_long',
          label: 'Id Long',
          icon: Hashtag,
          type: 'textarea',
          config: {},
        },
        {
          id: 'price',
          label: 'Price',
          icon: Currency,
          type: 'number',
          config: { min: 0, step: 1, unit: 'Dollars' },
        },
        {
          id: 'date',
          label: 'Date',
          icon: Calendar,
          type: 'date',
          config: { locale: 'en', dateFormat: 'd/m/Y' },
        },
        {
          id: 'time',
          label: 'Time',
          icon: Calendar,
          type: 'time',
          config: { timeZones: ['IST', 'CET', 'UTC', 'LOCAL'] },
        },
        {
          id: 'delivery',
          label: 'Delivery',
          icon: DeliveryTruck,
          type: 'option',
          config: {
            options: [
              { label: 'Processing', id: 'Processing' },
              {
                label: 'Preparing for dispatch',
                id: 'Preparing for dispatch',
              },
              { label: 'Dispatched', id: 'Dispatched' },
              { label: 'In delivery', id: 'In delivery' },
              { label: 'Delivered', id: 'Delivered' },
            ],
          },
        },
        {
          id: 'season',
          label: 'Season',
          icon: Tree,
          type: 'option',
          config: {
            options: [
              { label: 'Winter', id: 'Winter' },
              { label: 'Spring', id: 'Spring' },
              { label: 'Summer', id: 'Summer' },
              { label: 'Fall', id: 'Fall' },
            ],
          },
        },
      ],
    }}
    getConditionState={(rootState) => {
      console.log(rootState);
    }}
    popOverSearchThreshold={4}
    statementConfigCustom={[
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
    ]}
  />
</>`,
    metadata: { nestable: false },
  };
}

export default createTemplate();
