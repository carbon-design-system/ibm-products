/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import {
  Button,
  Grid,
  Row,
  Column,
  TextArea,
  TextInput,
  DataTable,
  Table,
  TableHeader,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
} from 'carbon-components-react';
import {
  Header,
  HeaderContainer,
  HeaderName,
} from 'carbon-components-react/lib/components/UIShell';
import { Copy20, Delete20, Settings20 } from '@carbon/icons-react';
import SidePanel from './SidePanel';
import styles from './_storybook-styles.scss';
import mdx from './SidePanel.mdx';
import { storybookPrefixCanary as storybookPrefix } from '../../global/js/settings';

export default {
  title: `${storybookPrefix}/SidePanel`,
  component: SidePanel,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};

const prefix = 'side-panel-stories__';

const defaultStoryProps = {
  titleText:
    'Incident management for your application, testing a very long title to see how this behaves with a longer title',
  subtitleText:
    'This is some text that would talk about how you could investigate incidednt management within this side panel and hopefully detail some of the actions you could perform here.',
};

const headerData = [
  { id: 1, header: 'Column header', key: 'value' },
  { id: 2, header: 'Column header', key: 'value' },
];

const rowData = [
  {
    id: 'a',
    value: 'Cell text',
  },
  {
    id: 'b',
    value: 'Cell text',
  },
  {
    id: 'c',
    value: 'Cell text',
  },
  {
    id: 'd',
    value: 'Cell text',
  },
  {
    id: 'e',
    value: 'Cell text',
  },
  {
    id: 'f',
    value: 'Cell text',
  },
  {
    id: 'g',
    value: 'Cell text',
  },
  {
    id: 'h',
    value: 'Cell text',
  },
];

// eslint-disable-next-line react/prop-types
const ChildrenContent = ({ theme }) => {
  const [notesValue, setNotesValue] = useState('');
  return (
    <div
      className={[
        `${prefix}body-content`,
        `${theme === 'dark' ? `${prefix}body-content-dark-theme` : ''}`,
      ].join(' ')}>
      <h5>Subtitle</h5>
      <div className={`${prefix}text-inputs`}>
        <TextInput
          labelText="Input A"
          id="side-panel-story-text-input-a"
          className={`${prefix}text-input`}
        />
        <TextInput
          labelText="Input B"
          id="side-panel-story-text-input-b"
          className={`${prefix}text-input`}
        />
      </div>
      <div className={`${prefix}text-inputs`}>
        <TextInput
          labelText="Input C"
          id="side-panel-story-text-input-c"
          className={`${prefix}text-input`}
        />
        <TextInput
          labelText="Input D"
          id="side-panel-story-text-input-d"
          className={`${prefix}text-input`}
        />
      </div>
      <div className={`${prefix}text-area-container`}>
        <span
          className={[
            `${prefix}allowed-characters`,
            `${
              notesValue.length > 100
                ? `${prefix}allowed-characters-invalid`
                : null
            }`,
          ].join(' ')}>
          {notesValue.length}/100
        </span>
        <TextArea
          labelText="Notes"
          value={notesValue}
          onChange={(event) => setNotesValue(event.target.value)}
        />
      </div>
      <h5 className={`${prefix}content-subtitle`}>Subtitle</h5>
      {renderDataTable()}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const ChildrenContentWithSteps = ({ currentStep, setCurrentStep }) => {
  return (
    <>
      {currentStep === 0 && (
        <div className={`${prefix}body-content`}>
          <h5 className={`${prefix}content-subtitle`}>Step 1</h5>
          {renderDataTable()}
          <Button
            kind="tertiary"
            onClick={() => setCurrentStep((prev) => prev + 1)}
            // onClick={() => {}}
          >
            View all
          </Button>
        </div>
      )}
      {currentStep === 1 && (
        <div className={`${prefix}body-content`}>
          <h5 className={`${prefix}content-subtitle`}>Step 2</h5>
          {renderDataTable()}
        </div>
      )}
    </>
  );
};

const renderDataTable = () => {
  return (
    <DataTable
      rows={rowData}
      headers={headerData}
      render={({ rows, headers }) => (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableHeader key={header.id}>{header.header}</TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  {row.cells.map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

const renderUIShellHeader = () => (
  <HeaderContainer
    render={() => (
      <Header aria-label="IBM Cloud Pak">
        <HeaderName href="/" prefix="IBM">
          Cloud Pak
        </HeaderName>
      </Header>
    )}
  />
);

const SlideOverTemplate = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {renderUIShellHeader()}
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close side panel' : 'Open side panel'}
      </Button>
      <SidePanel {...args} open={open} setOpen={setOpen}>
        <ChildrenContent />
      </SidePanel>
    </>
  );
};

const SlideOverDarkTemplate = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {renderUIShellHeader()}
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close side panel' : 'Open side panel'}
      </Button>
      <SidePanel {...args} open={open} setOpen={setOpen}>
        <ChildrenContent theme="dark" />
      </SidePanel>
    </>
  );
};

const StepTemplate = (args) => {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <>
      {renderUIShellHeader()}
      <Button onClick={() => setOpen(!open)}>
        {open ? 'Close side panel' : 'Open side panel'}
      </Button>
      <SidePanel
        {...args}
        open={open}
        setOpen={setOpen}
        currentStep={currentStep}
        onNavigationBack={setCurrentStep}>
        <ChildrenContentWithSteps
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </SidePanel>
    </>
  );
};

const SlideInTemplate = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {renderUIShellHeader()}
      <Grid id="cloud-and-cognitive-page-content">
        <Row>
          <Column>
            <Button onClick={() => setOpen(!open)}>
              {open ? 'Close side panel' : 'Open side panel'}
            </Button>
          </Column>
        </Row>
      </Grid>
      <SidePanel {...args} open={open} setOpen={setOpen}>
        <ChildrenContent />
      </SidePanel>
    </>
  );
};

export const RightSlideOverExtraSmall = SlideOverTemplate.bind({});
RightSlideOverExtraSmall.args = {
  size: 'extraSmall',
  includeOverlay: true,
  ...defaultStoryProps,
};

export const RightSlideOverSmall = SlideOverTemplate.bind({});
RightSlideOverSmall.args = {
  size: 'small',
  includeOverlay: true,
  ...defaultStoryProps,
};

export const RightSlideOverMedium = SlideOverTemplate.bind({});
RightSlideOverMedium.args = {
  includeOverlay: true,
  ...defaultStoryProps,
};

export const RightSlideOverLarge = SlideOverTemplate.bind({});
RightSlideOverLarge.args = {
  size: 'large',
  includeOverlay: true,
  ...defaultStoryProps,
};

export const RightSlideOverMax = SlideOverTemplate.bind({});
RightSlideOverMax.args = {
  size: 'max',
  includeOverlay: true,
  ...defaultStoryProps,
};

export const LeftSlideOverExtraSmall = SlideOverTemplate.bind({});
LeftSlideOverExtraSmall.args = {
  placement: 'left',
  size: 'extraSmall',
  includeOverlay: true,
  ...defaultStoryProps,
};

export const LeftSlideOverSmall = SlideOverTemplate.bind({});
LeftSlideOverSmall.args = {
  placement: 'left',
  size: 'small',
  includeOverlay: true,
  ...defaultStoryProps,
};

export const LeftSlideOverMedium = SlideOverTemplate.bind({});
LeftSlideOverMedium.args = {
  placement: 'left',
  includeOverlay: true,
  ...defaultStoryProps,
};

export const LeftSlideOverLarge = SlideOverTemplate.bind({});
LeftSlideOverLarge.args = {
  placement: 'left',
  size: 'large',
  includeOverlay: true,
  ...defaultStoryProps,
};

export const LeftSlideOverMax = SlideOverTemplate.bind({});
LeftSlideOverMax.args = {
  placement: 'left',
  size: 'max',
  includeOverlay: true,
  ...defaultStoryProps,
};

export const RightSlideInExtraSmall = SlideInTemplate.bind({});
RightSlideInExtraSmall.args = {
  placement: 'right',
  size: 'extraSmall',
  slideIn: true,
  pageContentSelector: '#cloud-and-cognitive-page-content',
  ...defaultStoryProps,
};

export const RightSlideInSmall = SlideInTemplate.bind({});
RightSlideInSmall.args = {
  placement: 'right',
  size: 'small',
  slideIn: true,
  pageContentSelector: '#cloud-and-cognitive-page-content',
  ...defaultStoryProps,
};

export const RightSlideInMedium = SlideInTemplate.bind({});
RightSlideInMedium.args = {
  placement: 'right',
  slideIn: true,
  pageContentSelector: '#cloud-and-cognitive-page-content',
  ...defaultStoryProps,
};

export const RightSlideInLarge = SlideInTemplate.bind({});
RightSlideInLarge.args = {
  placement: 'right',
  size: 'large',
  slideIn: true,
  pageContentSelector: '#cloud-and-cognitive-page-content',
  ...defaultStoryProps,
};

export const LeftSlideInExtraSmall = SlideInTemplate.bind({});
LeftSlideInExtraSmall.args = {
  placement: 'left',
  size: 'extraSmall',
  slideIn: true,
  pageContentSelector: '#cloud-and-cognitive-page-content',
  ...defaultStoryProps,
};

export const LeftSlideInSmall = SlideInTemplate.bind({});
LeftSlideInSmall.args = {
  placement: 'left',
  size: 'small',
  slideIn: true,
  pageContentSelector: '#cloud-and-cognitive-page-content',
  ...defaultStoryProps,
};

export const LeftSlideInMedium = SlideInTemplate.bind({});
LeftSlideInMedium.args = {
  placement: 'left',
  slideIn: true,
  pageContentSelector: '#cloud-and-cognitive-page-content',
  ...defaultStoryProps,
};

export const LeftSlideInLarge = SlideInTemplate.bind({});
LeftSlideInLarge.args = {
  placement: 'left',
  size: 'large',
  slideIn: true,
  pageContentSelector: '#cloud-and-cognitive-page-content',
  ...defaultStoryProps,
};

export const RightWithActionToolbar = SlideOverTemplate.bind({});
RightWithActionToolbar.args = {
  actionToolbarButtons: [
    {
      label: 'Check status',
      leading: true,
      kind: 'ghost',
      onActionToolbarButtonClick: () => {},
    },
    {
      label: 'Copy',
      icon: Copy20,
      onActionToolbarButtonClick: () => {},
    },
    {
      label: 'Settings',
      icon: Settings20,
      onActionToolbarButtonClick: () => {},
    },
    {
      label: 'Delete',
      icon: Delete20,
      onActionToolbarButtonClick: () => {},
    },
  ],
  ...defaultStoryProps,
};

export const LeftWithCondensedPrimaryActions = SlideOverTemplate.bind({});
LeftWithCondensedPrimaryActions.args = {
  condensed: true,
  placement: 'left',
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
  ],
  ...defaultStoryProps,
};

export const OnePrimaryActionExtraSmall = SlideOverTemplate.bind({});
OnePrimaryActionExtraSmall.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
  ],
  size: 'extraSmall',
  ...defaultStoryProps,
};

export const OnePrimaryActionSmall = SlideOverTemplate.bind({});
OnePrimaryActionSmall.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
  ],
  size: 'small',
  ...defaultStoryProps,
};

export const OnePrimaryActionMedium = SlideOverTemplate.bind({});
OnePrimaryActionMedium.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
  ],
  ...defaultStoryProps,
};

export const OnePrimaryActionLarge = SlideOverTemplate.bind({});
OnePrimaryActionLarge.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
  ],
  size: 'large',
  ...defaultStoryProps,
};

export const OnePrimaryActionMax = SlideOverTemplate.bind({});
OnePrimaryActionMax.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
  ],
  size: 'max',
  includeOverlay: true,
  ...defaultStoryProps,
};

export const TwoPrimaryActionExtraSmall = SlideOverTemplate.bind({});
TwoPrimaryActionExtraSmall.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
  ],
  size: 'extraSmall',
  ...defaultStoryProps,
};

export const TwoPrimaryActionSmall = SlideOverTemplate.bind({});
TwoPrimaryActionSmall.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
  ],
  size: 'small',
  ...defaultStoryProps,
};

export const TwoPrimaryActionMedium = SlideOverTemplate.bind({});
TwoPrimaryActionMedium.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
  ],
  ...defaultStoryProps,
};

export const TwoPrimaryActionLarge = SlideOverTemplate.bind({});
TwoPrimaryActionLarge.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
  ],
  size: 'large',
  ...defaultStoryProps,
};

export const TwoPrimaryActionMax = SlideOverTemplate.bind({});
TwoPrimaryActionMax.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
  ],
  size: 'max',
  includeOverlay: true,
  ...defaultStoryProps,
};

export const ThreePrimaryActionExtraSmall = SlideOverTemplate.bind({});
ThreePrimaryActionExtraSmall.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
  ],
  size: 'extraSmall',
  ...defaultStoryProps,
};

export const ThreePrimaryActionSmall = SlideOverTemplate.bind({});
ThreePrimaryActionSmall.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
  ],
  size: 'small',
  ...defaultStoryProps,
};

export const ThreePrimaryActionMedium = SlideOverTemplate.bind({});
ThreePrimaryActionMedium.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
  ],
  ...defaultStoryProps,
};

export const ThreePrimaryActionLarge = SlideOverTemplate.bind({});
ThreePrimaryActionLarge.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
  ],
  size: 'large',
  ...defaultStoryProps,
};

export const ThreePrimaryActionMax = SlideOverTemplate.bind({});
ThreePrimaryActionMax.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
  ],
  size: 'max',
  includeOverlay: true,
  ...defaultStoryProps,
};

export const ThreePrimaryActionLargeWithGhost = SlideOverTemplate.bind({});
ThreePrimaryActionLargeWithGhost.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
    {
      label: 'Ghost button',
      onPrimaryActionClick: () => {},
      kind: 'ghost',
    },
  ],
  size: 'large',
  ...defaultStoryProps,
};

export const ThreePrimaryActionMaxWithGhost = SlideOverTemplate.bind({});
ThreePrimaryActionMaxWithGhost.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
    {
      label: 'Secondary button',
      onPrimaryActionClick: () => {},
      kind: 'secondary',
    },
    {
      label: 'Ghost button',
      onPrimaryActionClick: () => {},
      kind: 'ghost',
    },
  ],
  size: 'max',
  includeOverlay: true,
  ...defaultStoryProps,
};

export const GhostPrimaryActionExtraSmall = SlideOverTemplate.bind({});
GhostPrimaryActionExtraSmall.args = {
  primaryActions: [
    {
      label: 'Ghost button',
      onPrimaryActionClick: () => {},
      kind: 'ghost',
    },
  ],
  size: 'extraSmall',
  ...defaultStoryProps,
};

export const GhostPrimaryActionSmall = SlideOverTemplate.bind({});
GhostPrimaryActionSmall.args = {
  primaryActions: [
    {
      label: 'Ghost button',
      onPrimaryActionClick: () => {},
      kind: 'ghost',
    },
  ],
  size: 'small',
  ...defaultStoryProps,
};

export const GhostPrimaryActionMedium = SlideOverTemplate.bind({});
GhostPrimaryActionMedium.args = {
  primaryActions: [
    {
      label: 'Ghost button',
      onPrimaryActionClick: () => {},
      kind: 'ghost',
    },
  ],
  ...defaultStoryProps,
};

export const GhostPrimaryActionLarge = SlideOverTemplate.bind({});
GhostPrimaryActionLarge.args = {
  primaryActions: [
    {
      label: 'Ghost button',
      onPrimaryActionClick: () => {},
      kind: 'ghost',
    },
  ],
  size: 'large',
  selectorPrimaryFocus: '#side-panel-story-text-input-a',
  ...defaultStoryProps,
};

export const GhostPrimaryActionMax = SlideOverTemplate.bind({});
GhostPrimaryActionMax.args = {
  primaryActions: [
    {
      label: 'Ghost button',
      onPrimaryActionClick: () => {},
      kind: 'ghost',
    },
  ],
  size: 'max',
  includeOverlay: true,
  ...defaultStoryProps,
};

export const PanelWithSecondStep = StepTemplate.bind({});
PanelWithSecondStep.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
  ],
  includeOverlay: true,
  currentStep: 1,
  ...defaultStoryProps,
};

export const DarkThemeSidePanel = SlideOverDarkTemplate.bind({});
DarkThemeSidePanel.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
  ],
  includeOverlay: true,
  theme: 'dark',
  ...defaultStoryProps,
};

export const SpecifyElementToHaveInitialFocus = SlideOverTemplate.bind({});
SpecifyElementToHaveInitialFocus.args = {
  primaryActions: [
    {
      label: 'Primary button',
      onPrimaryActionClick: () => {},
      kind: 'primary',
    },
  ],
  selectorPrimaryFocus: '#side-panel-story-text-input-a',
  ...defaultStoryProps,
};
