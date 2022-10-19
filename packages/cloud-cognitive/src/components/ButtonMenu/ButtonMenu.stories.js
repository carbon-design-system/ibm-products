/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';

import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { pkg } from '../../settings';
import cx from 'classnames';

import { ButtonMenu, ButtonMenuItem } from '.';
import { Accordion, AccordionItem } from 'carbon-components-react';
import mdx from './ButtonMenu.mdx';

import styles from './_storybook-styles.scss';

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

const renderItems = (setIsOpen) => {
  return (
    <>
      <ButtonMenuItem
        onClick={() => {
          action(`Click on Option 1`);
          setIsOpen(false);
        }}
      >
        Option 1
      </ButtonMenuItem>
      <ButtonMenuItem
        onClick={() => {
          action(`Click on Option 2`);
          setIsOpen(false);
        }}
      >
        Option 2
      </ButtonMenuItem>
      <ButtonMenuItem
        onClick={() => {
          action(`Click on Option 3`);
          setIsOpen(false);
        }}
      >
        Option 3
      </ButtonMenuItem>
      <ButtonMenuItem
        onClick={() => {
          action(`Click on Option 4`);
          setIsOpen(false);
        }}
        disabled
      >
        Option 4
      </ButtonMenuItem>
    </>
  );
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ButtonMenu
      open={isOpen}
      onClose={() => setIsOpen(false)}
      onMenuButtonClick={() => {
        setIsOpen((prev) => !prev);
      }}
      label="Button menu"
      {...args}
    >
      {renderItems(setIsOpen)}
    </ButtonMenu>
  );
};

const storyBlockClass = `${pkg.prefix}--button-menu__story`;

const NestedTemplate = (args) => {
  const [optionAOpen, setOptionAOpen] = useState(false);
  const [optionBOpen, setOptionBOpen] = useState(false);
  const [optionCOpen, setOptionCOpen] = useState(false);
  return (
    <div className={cx(storyBlockClass)}>
      <ButtonMenu
        open={optionAOpen}
        onClose={() => setOptionAOpen(false)}
        onMenuButtonClick={() => {
          setOptionAOpen((prev) => !prev);
        }}
        label="Example A"
        {...args}
      >
        {renderItems(setOptionAOpen)}
        <Accordion>
          <AccordionItem title="Insights">
            <ButtonMenuItem onClick={() => setOptionAOpen(false)} kind="ghost">
              Business criticality
            </ButtonMenuItem>
            <ButtonMenuItem onClick={() => setOptionAOpen(false)} kind="ghost">
              Log anomaly
            </ButtonMenuItem>
          </AccordionItem>
        </Accordion>
      </ButtonMenu>
      <ButtonMenu
        open={optionBOpen}
        onClose={() => setOptionBOpen(false)}
        onMenuButtonClick={() => {
          setOptionBOpen((prev) => !prev);
        }}
        label="Example B"
        {...args}
      >
        <Accordion>
          <AccordionItem title="Insights">
            <ButtonMenuItem onClick={() => setOptionBOpen(false)} kind="ghost">
              Business criticality
            </ButtonMenuItem>
            <ButtonMenuItem onClick={() => setOptionBOpen(false)} kind="ghost">
              Log anomaly
            </ButtonMenuItem>
          </AccordionItem>
        </Accordion>
        {renderItems(setOptionBOpen)}
      </ButtonMenu>
      <ButtonMenu
        open={optionCOpen}
        onClose={() => setOptionCOpen(false)}
        onMenuButtonClick={() => {
          setOptionCOpen((prev) => !prev);
        }}
        label="Example C"
        {...args}
      >
        {renderItems(setOptionCOpen)}
        <Accordion>
          <AccordionItem title="Insights">
            <ButtonMenuItem onClick={() => setOptionCOpen(false)} kind="ghost">
              Business criticality
            </ButtonMenuItem>
            <ButtonMenuItem onClick={() => setOptionCOpen(false)} kind="ghost">
              Log anomaly
            </ButtonMenuItem>
          </AccordionItem>
        </Accordion>
        <ButtonMenuItem>Option 5</ButtonMenuItem>
        <ButtonMenuItem>Option 6</ButtonMenuItem>
      </ButtonMenu>
    </div>
  );
};

export const buttonMenu = prepareStory(Template, {
  storyName: 'Button menu',
  args: {},
});

export const nestedButtonMenu = prepareStory(NestedTemplate, {
  storyName: 'Nested button menu',
  args: {},
});
