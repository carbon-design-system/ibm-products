/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './_storybook-styles.scss?inline';
import React, { useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
  Button,
  Grid,
  Column,
  TextArea,
  TextInput,
  MultiSelect,
  DataTable,
  Table,
  TableHeader,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Header,
  HeaderContainer,
  HeaderName,
  AILabel,
  AILabelContent,
} from '@carbon/react';

import { Copy, TrashCan, Settings } from '@carbon/react/icons';
import { SidePanel } from './SidePanel';
import { sidePanelDecorator } from '../../global/decorators/sidePanelDecorator';
import DocsPage from './SidePanel.docs-page';

const prefix = 'side-panel-stories__';

const defaultStoryProps = {
  title:
    'Incident management for your application, testing a very long title to see how this behaves with a longer title',
  subtitle: (
    <>
      This is some text that would talk about how you could{' '}
      <strong>investigate</strong> incident management within this side panel.
    </>
  ),
  id: 'storybook-sidepanel',
};

const headerData = [
  { id: 1, header: 'Column header', key: 'value' },
  { id: 2, header: 'Column header', key: 'value' },
];

const rowData = [
  {
    id: 'a',
    value: 'Cell text a',
  },
  {
    id: 'b',
    value: 'Cell text b',
  },
  {
    id: 'c',
    value: 'Cell text c',
  },
  {
    id: 'd',
    value: 'Cell text d',
  },
  {
    id: 'e',
    value: 'Cell text d',
  },
  {
    id: 'f',
    value: 'Cell text f',
  },
  {
    id: 'g',
    value: 'Cell text g',
  },
  {
    id: 'h',
    value: 'Cell text h',
  },
];

const actions_1 = [
  {
    label: 'Submit',
    onClick: action('Clicked action button'),
    kind: 'primary',
  },
];

const actions_2 = [
  {
    label: 'Ghost button',
    onClick: action('Clicked action button'),
    kind: 'ghost',
  },
];

const actions_3 = [
  {
    label: 'Danger button',
    onClick: action('Clicked action button'),
    kind: 'danger',
  },
];

const actions_4 = [
  {
    label: 'Submit',
    onClick: action('Clicked action button'),
    kind: 'primary',
  },
  {
    label: 'Cancel',
    onClick: action('Clicked action button'),
    kind: 'secondary',
  },
];

const actions_5 = [
  {
    label: 'Ghost button',
    onClick: action('Clicked action button'),
    kind: 'ghost',
  },
  {
    label: 'Submit',
    onClick: action('Clicked action button'),
    kind: 'primary',
  },
];

const actions_6 = [
  {
    label: 'Ghost button',
    onClick: action('Clicked action button'),
    kind: 'ghost',
  },
  {
    label: 'Danger button',
    onClick: action('Clicked action button'),
    kind: 'danger',
  },
];

const actions_7 = [
  {
    label: 'Submit',
    onClick: action('Clicked action button'),
    kind: 'primary',
  },
  {
    label: 'Cancel',
    onClick: action('Clicked action button'),
    kind: 'secondary',
  },
  {
    label: 'Ghost button',
    onClick: action('Clicked action button'),
    kind: 'ghost',
  },
];

const actions_8 = [
  {
    label: 'Cancel',
    onClick: action('Clicked action button'),
    kind: 'secondary',
  },
  {
    label: 'Cancel',
    onClick: action('Clicked action button'),
    kind: 'secondary',
  },
  {
    label: 'Danger button',
    onClick: action('Clicked action button'),
    kind: 'danger',
  },
];

const actions_9 = [
  {
    label: 'Submit',
    onClick: action('Clicked action button'),
    kind: 'primary',
  },
  {
    label: 'Cancel',
    onClick: action('Clicked action button'),
    kind: 'secondary',
  },
  {
    label: 'Cancel',
    onClick: action('Clicked action button'),
    kind: 'secondary',
  },
];

const actionSets = [
  actions_1,
  actions_2,
  actions_3,
  actions_4,
  actions_5,
  actions_6,
  actions_7,
  actions_8,
  actions_9,
  [],
];

const sampleAILabel = (
  <AILabel className="aiLabel-container" size="xs" align="left-start">
    <AILabelContent>
      <div>
        <p className="secondary">AI Explained</p>
        <h1>84%</h1>
        <p className="secondary bold">Confidence score</p>
        <p className="secondary">
          This is not really Lorem Ipsum but the spell checker did not like the
          previous text with it&apos;s non-words which is why this unwieldy
          sentence, should one choose to call it that, here.
        </p>
        <hr />
        <p className="secondary">Model type</p>
        <p className="bold">Foundation model</p>
      </div>
    </AILabelContent>
  </AILabel>
);

// eslint-disable-next-line react/prop-types
const ChildrenContent = () => {
  const [notesValue, setNotesValue] = useState('');
  return (
    <div className={`${prefix}body-content`}>
      <h3 className={`${prefix}body-subheading`}>Section</h3>
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
      <div className={`${prefix}multi-select-container`}>
        <MultiSelect
          data-testid="alert--subtype--transfer--secondary-zones"
          id="multiselectA"
          titleText="Multiselect A"
          label="Select an item"
          items={[
            {
              value: 'all',
              label: 'Multiselect A',
            },
          ]}
          selectionFeedback="top-after-reopen"
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
          ].join(' ')}
        >
          {notesValue.length}/100
        </span>
        <TextArea
          id="side-panel-textarea"
          className={`${prefix}text-area`}
          labelText="Notes"
          value={notesValue}
          onChange={(event) => setNotesValue(event.target.value)}
        />
      </div>
      <h3 className={`${prefix}content-subtitle ${prefix}body-subheading`}>
        Section
      </h3>
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
          <h3 className={`${prefix}content-subtitle ${prefix}body-subheading`}>
            Main view
          </h3>
          {renderDataTable()}
          <Button
            kind="tertiary"
            onClick={() => setCurrentStep((prev) => prev + 1)}
          >
            View all
          </Button>
        </div>
      )}
      {currentStep === 1 && (
        <div className={`${prefix}body-content`}>
          <h3 className={`${prefix}content-subtitle ${prefix}body-subheading`}>
            Detail view
          </h3>
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
      <Header aria-label="IBM Cloud Pak" className={`${prefix}header`}>
        <HeaderName href="/" prefix="IBM">
          Cloud Pak
        </HeaderName>
      </Header>
    )}
  />
);

export default {
  title: 'IBM Products/Components/Side panel/SidePanel',
  component: SidePanel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    styles,
    docs: {
      page: DocsPage,
    },
  },
  argTypes: {
    actions: {
      control: {
        type: 'select',
        labels: {
          0: 'One button',
          1: 'One button (ghost)',
          2: 'One button (danger)',
          3: 'Two buttons',
          4: 'Two buttons with ghost',
          5: 'Two buttons with danger',
          6: 'Three buttons with ghost',
          7: 'Three buttons with danger',
          8: 'Three buttons',
          9: 'None',
        },
        default: 0,
      },
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    slideIn: {
      table: {
        disable: true,
      },
    },
    slug: {
      control: {
        type: 'select',
        labels: {
          0: 'No AI slug',
          1: 'with AI Slug',
        },
        default: 0,
      },
      options: [0, 1],
    },
    aiLabel: {
      control: {
        type: 'select',
        labels: {
          0: 'No AI Label',
          1: 'with AI Label',
        },
        default: 0,
      },
      description:
        'Optional prop that is intended for any scenario where something is being generated by AI to reinforce AI transparency, accountability, and explainability at the UI level.',
      options: [0, 1],
    },
    decorator: {
      control: {
        type: 'select',
        labels: {
          0: 'No AI Label',
          1: 'with AI Label',
        },
        default: 0,
      },
      description:
        'Optional prop that is intended for any scenario where something is being generated by AI to reinforce AI transparency, accountability, and explainability at the UI level.',
      options: [0, 1],
    },
  },
  decorators: [sidePanelDecorator(renderUIShellHeader, prefix)],
};

// eslint-disable-next-line react/prop-types
const SlideOverTemplate = (
  { minimalContent, actions, aiLabel, slug, decorator, ...args },
  context
) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const testRef = useRef(undefined);
  const buttonRef = useRef(undefined);

  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className={`${prefix}toggle`}
      >
        {open ? 'Close side panel' : 'Open side panel'}
      </Button>
      <SidePanel
        {...args}
        open={open}
        onRequestClose={() => setOpen(false)}
        actions={actionSets[actions]}
        ref={testRef}
        aiLabel={aiLabel && sampleAILabel}
        slug={slug && sampleAILabel}
        decorator={decorator && sampleAILabel}
        launcherButtonRef={buttonRef}
      >
        {!minimalContent && <ChildrenContent />}
      </SidePanel>
    </>
  );
};

const FirstElementDisabledTemplate = (
  { minimalContent, actions, aiLabel, slug, decorator, ...args },
  context
) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const testRef = useRef(undefined);
  const buttonRef = useRef(undefined);

  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className={`${prefix}toggle`}
      >
        {open ? 'Close side panel' : 'Open side panel'}
      </Button>
      <SidePanel
        {...args}
        open={open}
        onRequestClose={() => setOpen(false)}
        actions={actionSets[actions]}
        ref={testRef}
        aiLabel={aiLabel && sampleAILabel}
        slug={slug && sampleAILabel}
        decorator={decorator && sampleAILabel}
        launcherButtonRef={buttonRef}
      >
        {!minimalContent && (
          <div className={`${prefix}body-content`}>
            <h3 className={`${prefix}body-subheading`}>Section</h3>
            <div className={`${prefix}text-inputs`}>
              <TextInput
                labelText="Input A"
                id="side-panel-story-text-input-a"
                className={`${prefix}text-input`}
                disabled
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
          </div>
        )}
      </SidePanel>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const StepTemplate = (
  { actions, aiLabel, slug, decorator, ...args },
  context
) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const [currentStep, setCurrentStep] = useState(0);
  const buttonRef = useRef(undefined);

  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className={`${prefix}toggle`}
      >
        {open ? 'Close side panel' : 'Open side panel'}
      </Button>
      <SidePanel
        {...args}
        open={open}
        onRequestClose={() => setOpen(false)}
        currentStep={currentStep}
        onNavigationBack={() => setCurrentStep((prev) => prev - 1)}
        actions={actionSets[actions]}
        aiLabel={aiLabel && sampleAILabel}
        slug={slug && sampleAILabel}
        decorator={decorator && sampleAILabel}
        launcherButtonRef={buttonRef}
      >
        <ChildrenContentWithSteps
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </SidePanel>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const SlideInTemplate = (
  { actions, aiLabel, slug, decorator, ...args },
  context
) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs');
  const buttonRef = useRef(undefined);

  return (
    <>
      <div class={`${prefix}story-container`}>
        <div class={`${prefix}story-content`} id="ibm-products-page-content">
          <Button
            ref={buttonRef}
            onClick={() => setOpen(!open)}
            className={`${prefix}toggle`}
          >
            {open ? 'Close side panel' : 'Open side panel'}
          </Button>
        </div>
      </div>
      <SidePanel
        {...args}
        open={open}
        onRequestClose={() => setOpen(false)}
        actions={actionSets[actions]}
        aiLabel={aiLabel && sampleAILabel}
        slug={slug && sampleAILabel}
        decorator={decorator && sampleAILabel}
        launcherButtonRef={buttonRef}
      >
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
  selectorPageContent: '#ibm-products-page-content',
  actions: 0,
  ...defaultStoryProps,
  labelText: 'Incident management',
};

export const WithActionToolbar = SlideOverTemplate.bind({});
WithActionToolbar.args = {
  actionToolbarButtons: [
    {
      leading: true,
      label: 'Copy',
      icon: (props) => <Copy size={16} {...props} />,
      onClick: action('Toolbar button clicked: Copy'),
      kind: 'primary',
    },
    {
      label: 'Settings',
      icon: (props) => <Settings size={16} {...props} />,
      onClick: action('Toolbar button clicked: Settings'),
      hasIconOnly: true,
    },
    {
      label: 'Delete',
      icon: (props) => <TrashCan size={16} {...props} />,
      onClick: action('Toolbar button clicked: Delete'),
      hasIconOnly: true,
    },
  ],
  ...defaultStoryProps,
};

export const PanelWithSecondStep = StepTemplate.bind({});
PanelWithSecondStep.args = {
  actions: 0,
  includeOverlay: true,
  currentStep: 1,
  ...defaultStoryProps,
};

export const WithAILabel = SlideOverTemplate.bind({});
WithAILabel.args = {
  includeOverlay: true,
  actions: 0,
  decorator: 1,
  ...defaultStoryProps,
};

export const SpecifyElementToHaveInitialFocus = SlideOverTemplate.bind({});
SpecifyElementToHaveInitialFocus.args = {
  actions: 0,
  selectorPrimaryFocus: '#side-panel-story-text-input-a',
  ...defaultStoryProps,
};

export const WithStaticTitle = SlideOverTemplate.bind({});
WithStaticTitle.args = {
  ...defaultStoryProps,
  actions: 0,
  animateTitle: false,
  includeOverlay: true,
};

export const FirstElementDisabled = FirstElementDisabledTemplate.bind({});
FirstElementDisabled.args = {
  ...defaultStoryProps,
  actions: 0,
  animateTitle: false,
  includeOverlay: true,
};

export const WithStaticTitleAndActionToolbar = SlideOverTemplate.bind({});
WithStaticTitleAndActionToolbar.args = {
  ...defaultStoryProps,
  actions: 0,
  animateTitle: false,
  includeOverlay: true,
  actionToolbarButtons: [
    {
      leading: true,
      label: 'Copy',
      icon: (props) => <Copy size={16} {...props} />,
      onClick: action('Action toolbar button clicked: Copy'),
      kind: 'primary',
    },
    {
      label: 'Settings',
      icon: (props) => <Settings size={16} {...props} />,
      onClick: action('Action toolbar button clicked: Settings'),
      hasIconOnly: true,
    },
    {
      label: 'Delete',
      icon: (props) => <TrashCan size={16} {...props} />,
      onClick: action('Action toolbar button clicked: Delete'),
      hasIconOnly: true,
    },
  ],
};

export const WithoutTitle = SlideOverTemplate.bind({});
WithoutTitle.args = {
  ...defaultStoryProps,
  actions: 0,
  title: null,
  includeOverlay: true,
};
