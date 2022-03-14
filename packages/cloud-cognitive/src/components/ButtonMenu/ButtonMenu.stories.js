/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';

import { ButtonMenu, ButtonMenuItem } from '.';
import { Column, Grid, Row } from 'carbon-components-react';
import mdx from './ButtonMenu.mdx';

import styles from './_storybook-styles.scss';

import { Add16 } from '@carbon/icons-react';

export default {
  title: getStoryTitle(ButtonMenu.displayName),
  component: ButtonMenu,
  // TODO: Define argTypes for props not represented by standard JS types.
  // argTypes: {
  //   egProp: { control: 'color' },
  // },
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const Template = (args) => {
  return (
    <Grid narrow>
      <Row>
        <Column>
          <ButtonMenu
            label="Primary button"
            renderIcon={Add16}
            kind="primary"
            {...args}
          >
            <ButtonMenuItem
              itemText="Option 1a"
              onClick={action(`Click on Option 1`)}
            />
            <ButtonMenuItem
              itemText="Option 2"
              onClick={action(`Click on Option 2`)}
            />
            <ButtonMenuItem
              itemText="Option 3"
              onClick={action(`Click on Option 3`)}
            />
            <ButtonMenuItem
              itemText="Option 4"
              onClick={action(`Click on Option 4`)}
              hasDivider
            />
          </ButtonMenu>
        </Column>
        <Column>
          <ButtonMenu
            label="Tertiary button"
            renderIcon={Add16}
            kind="tertiary"
            {...args}
          >
            <ButtonMenuItem
              itemText="Option 1a"
              onClick={action(`Click on Option 1`)}
            />
            <ButtonMenuItem
              itemText="Option 2"
              onClick={action(`Click on Option 2`)}
            />
            <ButtonMenuItem
              itemText="Option 3"
              onClick={action(`Click on Option 3`)}
            />
            <ButtonMenuItem
              itemText="Option 4"
              onClick={action(`Click on Option 4`)}
              hasDivider
            />
          </ButtonMenu>
        </Column>
        <Column>
          <ButtonMenu
            label="Ghost button"
            renderIcon={Add16}
            kind="ghost"
            {...args}
          >
            <ButtonMenuItem
              itemText="Option 1a"
              onClick={action(`Click on Option 1`)}
            />
            <ButtonMenuItem
              itemText="Option 2"
              onClick={action(`Click on Option 2`)}
            />
            <ButtonMenuItem
              itemText="Option 3"
              onClick={action(`Click on Option 3`)}
            />
            <ButtonMenuItem
              itemText="Option 4"
              onClick={action(`Click on Option 4`)}
              hasDivider
            />
          </ButtonMenu>
        </Column>
      </Row>
    </Grid>
  );
};

export const buttonMenu = prepareStory(Template, {
  storyName: 'Button menu',
  args: {},
});
