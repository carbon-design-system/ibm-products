/**
 * @file Description list module stories.
 * @copyright IBM Security 2020 - 2021
 */

import React from 'react';

import {
  DescriptionListModule,
  TitleBarModule,
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutCell,
  TypeLayoutRow,
} from '../../..';

import { getDocsParameters } from '../../../../.storybook';

import getTitle from '../stories';
import page from './index.mdx';

export default {
  title: getTitle(DescriptionListModule.name),
  component: DescriptionListModule,
  parameters: {
    docs: { page },

    ...getDocsParameters(),
  },
};
// Overrides carbon's structuredListCell padding-left
// See: https://www.carbondesignsystem.com/components/structured-list/usage/

const style = {
  paddingLeft: '0',
};

export const Default = () => (
  <DescriptionListModule>
    <TypeLayout>
      <TypeLayoutBody>
        <TypeLayoutRow>
          <TypeLayoutCell>Term 1</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell>Term 2</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
            lacus ex at libero. Aenean euismod viverra odio, id volutpat turpis
            commodo.
          </TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell>Term 3</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
            lacus ex at libero.
          </TypeLayoutCell>
        </TypeLayoutRow>
      </TypeLayoutBody>
    </TypeLayout>
  </DescriptionListModule>
);

export const Variant = () => (
  <DescriptionListModule>
    <TitleBarModule title="Section title" />

    <TypeLayout>
      <TypeLayoutBody>
        <TypeLayoutRow>
          <TypeLayoutCell style={style}>Term 1</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell style={style}>Term 2</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
            lacus ex at libero. Aenean euismod viverra odio, id volutpat turpis
            commodo.
          </TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell style={style}>Term 3</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
            lacus ex at libero.
          </TypeLayoutCell>
        </TypeLayoutRow>
      </TypeLayoutBody>
    </TypeLayout>
  </DescriptionListModule>
);

Variant.parameters = {
  viewMode: 'canvas',
};

export const DenseAndStacked = () => (
  <DescriptionListModule dense mode="stacked">
    <TypeLayout>
      <TypeLayoutBody>
        <TypeLayoutRow>
          <TypeLayoutCell>Term 1</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell>Term 2</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
            lacus ex at libero. Aenean euismod viverra odio, id volutpat turpis
            commodo.
          </TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell>Term 3</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
            lacus ex at libero.
          </TypeLayoutCell>
        </TypeLayoutRow>
      </TypeLayoutBody>
    </TypeLayout>
  </DescriptionListModule>
);

DenseAndStacked.parameters = {
  viewMode: 'canvas',
};
