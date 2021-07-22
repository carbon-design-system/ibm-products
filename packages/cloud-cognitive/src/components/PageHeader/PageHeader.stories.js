/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

//import { action } from '@storybook/addon-actions';

import { pkg, carbon } from '../../settings';

import {
  //BreadcrumbItem,
  Column,
  Grid,
  //Header,
  //HeaderName,
  Row,
  // Tab,
  // Tabs,
  // Table,
  // TableHead,
  // TableHeader,
  // TableBody,
  // TableRow,
  // TableCell,
} from 'carbon-components-react';
import {
  // CheckmarkFilled16,
  // Lightning16,
  Bee24,
  // Printer16,
  // Security24,
  // Settings16,
  // VolumeMute16,
} from '@carbon/icons-react';

import { ActionBarItem } from '../ActionBar';
import { PageHeader, deprecatedProps } from './PageHeader';

import { getStorybookPrefix } from '../../../config';
const storybookPrefix = getStorybookPrefix(pkg, PageHeader.displayName);
import { getDeprecatedArgTypes } from '../../global/js/utils/props-helper';

import styles from './_storybook-styles.scss';

import mdx from './PageHeader.mdx';

const storyClass = 'page-header-stories';

export default {
  title: `${storybookPrefix}/${PageHeader.displayName}`,
  component: PageHeader,
  subcomponents: { ActionBarItem },
  parameters: { styles, layout: 'fullscreen', docs: { page: mdx } },
  decorators: [
    (story) => <div className={`${storyClass}__viewport`}>{story()}</div>,
  ],
  argTypes: {
    ...getDeprecatedArgTypes(deprecatedProps),
    //description: { control: { type: 'text' } },
    /*headerActions: {
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
    },*/
    //influencer: { control: { disable: true } },
  },
};

// Test values for props.

const title = { text: 'Page title', loading: false, icon: Bee24 };

const dummyPageContent = (
  <Grid className={`${storyClass}__dummy-content`} narrow={true}>
    <Row>
      <Column
        sm={1}
        md={2}
        lg={4}
        className={`${storyClass}__dummy-content-block`}>
        <div className={`${storyClass}__dummy-content-text`}>Column #1</div>
      </Column>
      <Column
        sm={1}
        md={2}
        lg={4}
        className={`${storyClass}__dummy-content-block`}>
        <div className={`${storyClass}__dummy-content-text`}>Column #2</div>
      </Column>
      <Column
        sm={2}
        md={4}
        lg={8}
        className={`${storyClass}__dummy-content-block`}>
        <div className={`${storyClass}__dummy-content-text`}>Column #3</div>
      </Column>
    </Row>
  </Grid>
);

// Template.
// eslint-disable-next-line react/prop-types
const Template = ({ children, ...props }) => (
  <>
    <style>{`.${carbon.prefix}--modal { opacity: 0; }`};</style>
    <PageHeader {...props}>{children}</PageHeader>
    {dummyPageContent}
  </>
);

// Stories
export const withTitle = Template.bind({});
withTitle.storyName = 'Simple header with page title';
withTitle.args = {
  title,
};
