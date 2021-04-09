/**
 * Copyright IBM Corp. 2020, 2021
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
import styles from './_storybook-styles.scss';
import { pkg } from '../../settings';
import '../../utils/enable-all'; // must come before component is imported (directly or indirectly)
import { getStorybookPrefix } from '../../../config';
import { SidePanel } from '.';
import mdx from './SidePanel.mdx';
const storybookPrefix = getStorybookPrefix(pkg, SidePanel.displayName);

export default {
  title: `${storybookPrefix}/${SidePanel.displayName}`,
  component: SidePanel,
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    actions: {
      control: {
        type: 'select',
        options: {
          'One button': 0,
          'One button (ghost)': 1,
          'Two buttons': 2,
          'Three buttons with ghost': 3,
          'Three buttons': 4,
          None: 5,
        },
        default: 0,
      },
    },
    slideIn: {
      table: {
        disable: true,
      },
    },
  },
};

const prefix = 'side-panel-stories__';

const defaultStoryProps = {
  titleText:
    'Incident management for your application, testing a very long title to see how this behaves with a longer title',
  subtitleText:
    'This is some text that would talk about how you could investigate incidednt management within this side panel.',
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

const actions_1 = [
  {
    label: 'Primary button',
    onPrimaryActionClick: () => {},
    kind: 'primary',
  },
];

const actions_2 = [
  {
    label: 'Ghost button',
    onPrimaryActionClick: () => {},
    kind: 'ghost',
  },
];

const actions_3 = [
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
];

const actions_4 = [
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
];

const actions_5 = [
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
];

const actionSets = [actions_1, actions_2, actions_3, actions_4, actions_5, []];

// eslint-disable-next-line react/prop-types
const ChildrenContent = () => {
  const [notesValue, setNotesValue] = useState('');
  return (
    <div className={`${prefix}body-content`}>
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

// eslint-disable-next-line react/prop-types
const SlideOverTemplate = ({ minimalContent, actions, ...args }) => {
  const [open, setOpen] = useState(false);
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
        actions={actionSets[actions]}>
        {!minimalContent && <ChildrenContent />}
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

// eslint-disable-next-line react/prop-types
const SlideInTemplate = ({ actions, ...args }) => {
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
      <SidePanel
        {...args}
        open={open}
        setOpen={setOpen}
        actions={actionSets[actions]}>
        <ChildrenContent />
      </SidePanel>
    </>
  );
};

export const SlideOver = SlideOverTemplate.bind({});
SlideOver.args = {
  includeOverlay: true,
  actions: 0,
  ...defaultStoryProps,
};

export const SlideIn = SlideInTemplate.bind({});
SlideIn.args = {
  placement: 'right',
  slideIn: true,
  pageContentSelector: '#cloud-and-cognitive-page-content',
  actions: 0,
  ...defaultStoryProps,
};

export const WithActionToolbar = SlideOverTemplate.bind({});
WithActionToolbar.args = {
  actionToolbarButtons: [
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

export const WithCondensedActions = SlideOverTemplate.bind({});
WithCondensedActions.args = {
  ...defaultStoryProps,
  condensed: true,
  placement: 'left',
  actions: 0,
};

export const PanelWithSecondStep = StepTemplate.bind({});
PanelWithSecondStep.args = {
  actions: 0,
  includeOverlay: true,
  currentStep: 1,
  ...defaultStoryProps,
};

export const SpecifyElementToHaveInitialFocus = SlideOverTemplate.bind({});
SpecifyElementToHaveInitialFocus.args = {
  actions: 0,
  selectorPrimaryFocus: '#side-panel-story-text-input-a',
  ...defaultStoryProps,
};

export const WithMinimalContent = SlideOverTemplate.bind({});
WithMinimalContent.args = {
  ...defaultStoryProps,
  actions: 0,
  minimalContent: true,
};
