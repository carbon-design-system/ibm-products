//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';

import { expPrefix } from '../../global/js/settings';

import { Button } from 'carbon-components-react';

import { TearsheetNarrow } from './TearsheetNarrow';

import styles from './_storybook-styles.scss';

import mdx from './TearsheetStacking.mdx';

export default {
  title: 'Experimental/TearsheetStackingNarrow',
  component: TearsheetNarrow,
  parameters: { controls: { expanded: true }, styles, docs: { page: mdx } },
  argTypes: {
    buttonSet: {
      control: {
        type: 'select',
        options: {
          'Two buttons': 0,
          'Three buttons with ghost': 1,
          'Three buttons': 2,
          'Four buttons': 3,
          None: 4,
        },
        default: 0,
      },
    },
    className,
    closeIconDescription: {},
    description: {
      control: {
        type: 'text',
      },
    },
    hasCloseIcon: {},
    height: {},
    label: {
      control: {
        type: 'text',
      },
    },
    preventCloseOnClickOutside: {},
    title: {
      control: {
        disable: true,
      },
    },
    buttons: {
      control: {
        disable: true,
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
    onClose: {
      control: {
        disable: true,
      },
    },
    open: {
      control: {
        disable: true,
      },
    },
  },
};

// Test values for props.

const buttons_1 = (
  <div className="tearsheet-stories__buttons">
    <Button
      kind="secondary"
      className="tearsheet-stories__button-50"
      onClick={action('Secondary button click')}>
      Cancel
    </Button>
    <Button
      className="tearsheet-stories__button-50"
      onClick={action('Primary button click')}>
      Create
    </Button>
  </div>
);
const buttons_2 = (
  <div className="tearsheet-stories__buttons">
    <Button
      kind="ghost"
      className="tearsheet-stories__button-25"
      onClick={action('Ghost button click')}>
      Cancel
    </Button>
    <div className="tearsheet-stories__button-padding"></div>
    <Button
      kind="secondary"
      className="tearsheet-stories__button-25"
      onClick={action('Secondary button click')}>
      Back
    </Button>
    <Button
      className="tearsheet-stories__button-25"
      onClick={action('Primary button click')}>
      Next
    </Button>
  </div>
);
const buttons_3 = (
  <div className="tearsheet-stories__buttons">
    <Button
      kind="secondary"
      className="tearsheet-stories__button-25"
      onClick={action('Secondary button click')}>
      Keep both
    </Button>
    <Button
      kind="secondary"
      className="tearsheet-stories__button-25"
      onClick={action('Secondary button click')}>
      Stop
    </Button>
    <Button
      className="tearsheet-stories__button-25"
      onClick={action('Primary button click')}>
      Replace
    </Button>
  </div>
);
const buttons_4 = (
  <div className="tearsheet-stories__buttons">
    <Button
      kind="ghost"
      className="tearsheet-stories__button-25"
      onClick={action('Ghost button click')}>
      Cancel
    </Button>
    <div className="tearsheet-stories__button-padding"></div>
    <Button
      kind="secondary"
      className="tearsheet-stories__button-25"
      onClick={action('Secondary button click')}>
      Keep both
    </Button>
    <Button
      kind="secondary"
      className="tearsheet-stories__button-25"
      onClick={action('Secondary button click')}>
      Stop
    </Button>
    <Button
      className="tearsheet-stories__button-25"
      onClick={action('Primary button click')}>
      Replace
    </Button>
  </div>
);
const buttonSets = [buttons_1, buttons_2, buttons_3, buttons_4];

const className = 'client-class-1 client-class-2';

const closeIconDescription = 'Close the tearsheet';

const description = (
  <span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor <strong>incididunt ut labore</strong> et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.
  </span>
);

const label = 'The label of the tearsheet';

// Stories

// eslint-disable-next-line react/prop-types
export const StackedTearsheets = ({ buttonSet, ...args }) => {
  const [open1, setopen1] = useState(false);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);

  return (
    <>
      <style>{`.${expPrefix}-tearsheet { opacity: 0 }`};</style>
      <div
        style={{
          display: 'flex',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10000,
        }}>
        <Button onClick={() => setopen1(!open1)}>Toggle #1</Button>
        <Button onClick={() => setopen2(!open2)}>Toggle #2</Button>
        <Button onClick={() => setopen3(!open3)}>Toggle #3</Button>
      </div>
      <TearsheetNarrow
        className={className}
        {...args}
        title="Tearsheet #1"
        buttons={buttonSets[buttonSet]}
        open={open1}
        onClose={() => setopen1(false)}>
        <div className="tearsheet-stories__dummy-content-block">
          Main content 1
        </div>
      </TearsheetNarrow>
      <TearsheetNarrow
        className={className}
        {...args}
        title="Tearsheet #2"
        buttons={buttonSets[buttonSet]}
        open={open2}
        onClose={() => setopen2(false)}>
        <div className="tearsheet-stories__dummy-content-block">
          Main content 2
        </div>
      </TearsheetNarrow>
      <TearsheetNarrow
        className={className}
        {...args}
        title="Tearsheet #3"
        buttons={buttonSets[buttonSet]}
        open={open3}
        onClose={() => setopen3(false)}>
        <div className="tearsheet-stories__dummy-content-block">
          Main content 3
        </div>
      </TearsheetNarrow>
    </>
  );
};
StackedTearsheets.args = {
  closeIconDescription,
  description,
  height: 'lower',
  label,
  preventCloseOnClickOutside: true,
  buttonSet: 0,
};
