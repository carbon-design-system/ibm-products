/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef, useState } from 'react';
import DocsPage from './Tearsheet.docs-page';
import { action } from '@storybook/addon-actions';
import { Information } from '@carbon/react/icons';
import { pkg } from '../../settings';

import {
  Button,
  ButtonSet,
  Checkbox,
  CheckboxGroup,
  ComboBox,
  DatePicker,
  DatePickerInput,
  Dropdown,
  Form,
  FormGroup,
  MultiSelect,
  NumberInput,
  PasswordInput,
  RadioButton,
  RadioButtonGroup,
  Tab,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
  TextArea,
  TextInput,
  Search,
  Select,
  SelectItem,
  Pagination,
  AILabel,
  AILabelContent,
  Toggletip,
  ToggletipButton,
  ToggletipContent,
} from '@carbon/react';

import { Tearsheet, deprecatedProps } from './Tearsheet';
import {
  actionsOptions,
  actionsLabels,
  actionsMapping,
} from '../ActionSet/actions.js';

import { getDeprecatedArgTypes } from '../../global/js/utils/props-helper';
import styles from './_storybook-styles.scss?inline';
import { TearsheetNarrow } from './TearsheetNarrow';

// import mdx from './Tearsheet.mdx';

export default {
  title: 'IBM Products/Components/Tearsheet',
  component: Tearsheet,
  tags: ['autodocs'],
  parameters: {
    styles,
    layout: 'fullscreen',
    docs: {
      page: DocsPage,
    },
  },
  argTypes: {
    ...getDeprecatedArgTypes(deprecatedProps),
    actions: {
      control: { type: 'select', labels: actionsLabels },
      options: actionsOptions,
      mapping: actionsMapping(
        {
          primary: 'Replace',
          danger: 'Delete',
          secondary: 'Back',
          secondary2: 'Keep Both',
          dangerGhost: 'Abort',
          ghost: 'Cancel',
        },
        action
      ),
    },
    description: { control: { type: 'text' } },
    headerActions: {
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
            titleText="Choose an option"
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
    },
    label: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    influencer: { control: { disable: true } },
    onClose: { control: { disable: true } },
    navigation: { control: { disable: true } },
    open: { control: { disable: true } },
    portalTarget: { control: { disable: true } },
    decorator: {
      control: {
        type: 'select',
        labels: {
          0: 'No AI Label',
          1: 'with AI Label',
          2: 'With non AI Label component',
        },
        default: 0,
      },
      description: 'Optional prop that allows you to pass any component.',
      options: [0, 1, 2],
    },
    slug: {
      control: {
        type: 'select',
        labels: {
          0: 'No AI Slug',
          1: 'with AI Slug',
        },
        default: 0,
      },
      description: 'Deprecated: Property replaced by "decorator"',
      options: [0, 1],
    },
  },
};

// Test values for props.

const closeIconDescription = 'Close the tearsheet';

const description =
  'This is a description for the tearsheet, providing an opportunity to \
  describe the flow over a couple of lines in the header of the tearsheet.';

const influencer = (
  <div className="tearsheet-stories__dummy-content-block">Influencer</div>
);

const label = 'The label of the tearsheet';

const mainContent = (
  <div className="tearsheet-stories__dummy-content-block">
    <Form>
      <p>Main content</p>
      <FormGroup legendId="tearsheet-form-group" legendText="FormGroup Legend">
        <TextInput
          id="tss-ft1"
          labelText="Enter an important value here"
          style={
            // stylelint-disable-next-line carbon/layout-use
            { marginBottom: '1em' }
          }
        />
        <TextInput
          id="tss-ft2"
          labelText="Here is an entry field:"
          style={
            // stylelint-disable-next-line carbon/layout-use
            { marginBottom: '1em' }
          }
        />
      </FormGroup>
    </Form>
  </div>
);

const title = 'Title of the tearsheet';

const sampleDecorator = (decorator) => {
  switch (decorator) {
    case 1:
      return (
        <AILabel className="decorator-container" size="xs">
          <AILabelContent>
            <div>
              <p className="secondary">AI Explained</p>
              <h1>84%</h1>
              <p className="secondary bold">Confidence score</p>
              <p className="secondary">
                This is not really Lorem Ipsum but the spell checker did not
                like the previous text with it&apos;s non-words which is why
                this unwieldy sentence, should one choose to call it that, here.
              </p>
              <hr />
              <p className="secondary">Model type</p>
              <p className="bold">Foundation model</p>
            </div>
          </AILabelContent>
        </AILabel>
      );
    case 2:
      return (
        <Toggletip>
          <ToggletipButton label="Additional information">
            <Information />
          </ToggletipButton>
          <ToggletipContent>
            <p>Custom content here</p>
          </ToggletipContent>
        </Toggletip>
      );
    default:
      return;
  }
};

// Template.
// eslint-disable-next-line react/prop-types
const Template = ({ actions, decorator, slug, ...args }, context) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(context.viewMode !== 'docs'), 0);
  }, []);

  const wiredActions =
    actions &&
    Array.prototype.map.call(actions, (action) => {
      if (action.label === 'Cancel') {
        const previousClick = action.onClick;
        return {
          ...action,
          onClick: (evt) => {
            setOpen(false);
            previousClick(evt);
          },
        };
      }
      return action;
    });

  const ref = useRef(undefined);

  return (
    <>
      <style>{`.${pkg.prefix}--tearsheet { opacity: 0 }`};</style>
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <Tearsheet
          {...args}
          actions={wiredActions}
          open={open}
          onClose={() => setOpen(false)}
          decorator={decorator && sampleDecorator(decorator)}
          slug={slug && sampleDecorator(slug)}
        >
          {mainContent}
        </Tearsheet>
      </div>
    </>
  );
};

const TemplateWithInputFields = (
  { actions, decorator, slug, ...args },
  context
) => {
  const [open, setOpen] = useState(false);
  const [withText, setWithText] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(context.viewMode !== 'docs'), 0);
  }, []);

  const wiredActions =
    actions &&
    Array.prototype.map.call(actions, (action) => {
      if (action.label === 'Cancel') {
        const previousClick = action.onClick;
        return {
          ...action,
          onClick: (evt) => {
            setOpen(false);
            previousClick(evt);
          },
        };
      }
      return action;
    });

  const ref = useRef(undefined);

  return (
    <>
      {/* <style>{`.${pkg.prefix}--tearsheet { opacity: 0 }`};</style> */}
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <Tearsheet
          {...args}
          actions={wiredActions}
          open={open}
          title="Style test with form elements"
          description="Use the Storybook theme selector above, and the following
                  checkboxes and radio buttons to confirm Carbon styling."
          onClose={() => setOpen(false)}
          decorator={decorator && sampleDecorator(decorator)}
          slug={slug && sampleDecorator(slug)}
        >
          <div className="tearsheet-stories__dummy-content-block tearsheet-stories__styles">
            <Form>
              <FormGroup legendId="tearsheet-form-group">
                <p>
                  <a href="https://react.carbondesignsystem.com/?path=/docs/getting-started-welcome--welcome&args=placeholder:asdf&globals=theme:g10">
                    Storybook reference: carbon/react
                  </a>
                </p>
                <div className="tearsheet-stories__styles--controls">
                  <CheckboxGroup legendText="" orientation="horizontal">
                    <Checkbox
                      id="checkbox-1"
                      labelText="With text"
                      checked={withText}
                      onChange={(e) => {
                        setWithText(e.target.checked);
                      }}
                    />
                  </CheckboxGroup>
                  <RadioButtonGroup
                    defaultSelected="radio-1"
                    name="radio-button-default-group"
                    orientation="horizontal"
                    onChange={(id) => {
                      switch (id) {
                        case 'radio-1':
                          setDisabled(false);
                          setReadOnly(false);
                          break;
                        case 'radio-2':
                          setDisabled(true);
                          setReadOnly(false);
                          break;
                        case 'radio-3':
                          setDisabled(false);
                          setReadOnly(true);
                          break;

                        default:
                          break;
                      }
                    }}
                  >
                    <RadioButton
                      id="radio-1"
                      value="radio-1"
                      // labelText="enabled: black text and labels, white field with dark underline"
                      labelText="enabled"
                    />
                    <RadioButton
                      id="radio-2"
                      value="radio-2"
                      // labelText="disabled: grey text and labels, white field with no underline"
                      labelText="disabled"
                    />
                    <RadioButton
                      id="radio-3"
                      value="radio-3"
                      // labelText="readOnly: black text and labels, grey field with grey underline"
                      labelText="readOnly"
                    />
                  </RadioButtonGroup>
                </div>

                <table className="tearsheet-stories__styles--table">
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Style</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Checkbox</th>
                      <td>
                        <CheckboxGroup
                          legendText=""
                          orientation="horizontal"
                          disabled={disabled}
                          readOnly={readOnly}
                        >
                          <Checkbox
                            id="checkbox-2"
                            labelText="Checked"
                            checked={true}
                            disabled={disabled}
                            readOnly={readOnly}
                          />
                          <Checkbox
                            id="checkbox-3"
                            labelText="Unchecked"
                            checked={false}
                            disabled={disabled}
                            readOnly={readOnly}
                          />
                        </CheckboxGroup>
                      </td>
                    </tr>
                    <tr>
                      <th>RadioButton</th>
                      <td>
                        <RadioButtonGroup
                          defaultSelected="radio-4"
                          name="radio-button-default-group-1"
                        >
                          <RadioButton
                            id="radio-4"
                            value="radio-4"
                            labelText="Checked"
                            checked={true}
                            disabled={disabled}
                            readOnly={readOnly}
                          />
                          <RadioButton
                            id="radio-5"
                            value="radio-5"
                            labelText="Unchecked"
                            checked={false}
                            disabled={disabled}
                            readOnly={readOnly}
                          />
                        </RadioButtonGroup>
                      </td>
                    </tr>
                    <tr>
                      <th>ComboBox</th>
                      <td>
                        <ComboBox
                          helperText="Helper text"
                          id="carbon-combobox"
                          itemToString={() => {}}
                          items={[
                            {
                              id: 'option-0',
                              text: 'An example option that is really long to show what should be done to handle long text',
                            },
                            {
                              disabled: true,
                              id: 'option-3',
                              text: 'Option 3 - a disabled item',
                            },
                          ]}
                          onChange={() => {}}
                          onToggleClick={() => {}}
                          titleText="Label text"
                          disabled={disabled}
                          readOnly={readOnly}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>DatePicker</th>
                      <td>
                        <DatePicker
                          datePickerType="single"
                          value={withText ? '12/31/2025' : ''}
                          disabled={disabled}
                          readOnly={readOnly}
                        >
                          <DatePickerInput
                            id="date-picker-single"
                            helperText="Helper text"
                            labelText="Label text"
                            disabled={disabled}
                            readOnly={readOnly}
                          />
                        </DatePicker>
                      </td>
                    </tr>
                    <tr>
                      <th>Dropdown</th>
                      <td>
                        <Dropdown
                          id="tss-had"
                          label={withText ? 'With text' : ''}
                          titleText="Label text"
                          items={[
                            'option 1',
                            'option 2',
                            'option 3',
                            'option 4',
                          ]}
                          disabled={disabled}
                          readOnly={readOnly}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>MultiSelect</th>
                      <td>
                        <MultiSelect
                          id="carbon-multiselect-example"
                          initialSelectedItems={[
                            {
                              id: 'downshift-1-item-0',
                              text: 'Option 1',
                            },
                          ]}
                          items={[
                            {
                              id: 'downshift-1-item-0',
                              text: 'Option 1',
                            },
                            {
                              disabled: true,
                              id: 'downshift-1-item-2',
                              text: 'Option 3 - a disabled item',
                            },
                          ]}
                          label={withText ? 'With text' : ''}
                          titleText="Label text"
                          helperText="Helper text"
                          disabled={disabled}
                          readOnly={readOnly}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>NumberInput</th>
                      <td>
                        <NumberInput
                          id="number-input-1"
                          label="Label text"
                          helperText="Helper text"
                          value={withText ? 5000 : 0}
                          disabled={disabled}
                          readOnly={readOnly}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>PasswordInput</th>
                      <td>
                        <PasswordInput
                          labelText="Label text"
                          helperText="Helper text"
                          value={withText ? 'With text' : ''}
                          id="text-input-1"
                          onChange={() => {}}
                          onClick={() => {}}
                          size="md"
                          warnText="Warning message that is really long can wrap to more lines but should not be excessively long."
                          disabled={disabled}
                          readOnly={readOnly}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Select</th>
                      <td>
                        <Select
                          id={`select-1`}
                          labelText="Label text"
                          helperText="Helper text"
                          disabled={disabled}
                          readOnly={readOnly}
                        >
                          <SelectItem
                            value=""
                            text={withText ? 'With text' : ''}
                          />
                          <SelectItem value="option-1" text="Option 1" />
                          <SelectItem value="option-2" text="Option 2" />
                        </Select>
                      </td>
                    </tr>
                    <tr>
                      <th>TextArea</th>
                      <td>
                        <TextArea
                          labelText="Label text"
                          helperText="Helper text"
                          value={withText ? 'With text' : ''}
                          maxCount={500}
                          enableCounter
                          disabled={disabled}
                          readOnly={readOnly}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>TextInput</th>
                      <td>
                        <TextInput
                          id="text-input-2"
                          labelText="Label text"
                          helperText="Helper text"
                          value={withText ? 'With text' : ''}
                          disabled={disabled}
                          readOnly={readOnly}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th colSpan={2}>
                        These components do not have a <em>readOnly</em> prop.
                      </th>
                    </tr>
                    <tr>
                      <th>Search</th>
                      <td>
                        <Search
                          labelText="Label text"
                          defaultValue={withText ? 'With text' : ''}
                          disabled={disabled}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Pagination</th>
                      <td>
                        <Pagination
                          backwardText="Previous page"
                          forwardText="Next page"
                          itemsPerPageText="Items per page:"
                          page={1}
                          pageNumberText="Page Number"
                          pageSize={10}
                          pageSizes={[10, 20, 30, 40, 50]}
                          size="md"
                          totalItems={103}
                          disabled={disabled}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </FormGroup>
            </Form>
          </div>
        </Tearsheet>
      </div>
    </>
  );
};

const tabs = (
  <div className="tearsheet-stories__tabs">
    <TabList aria-label="Tab list">
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
      <Tab>Tab 4</Tab>
    </TabList>
  </div>
);

const TemplateWithNav = ({ actions, decorator, slug, ...args }, context) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(context.viewMode !== 'docs'), 0);
  }, []);
  const wiredActions =
    actions &&
    Array.prototype.map.call(actions, (action) => {
      if (action.label === 'Cancel') {
        const previousClick = action.onClick;
        return {
          ...action,
          onClick: (evt) => {
            setOpen(false);
            previousClick(evt);
          },
        };
      }
      return action;
    });

  const ref = useRef(undefined);

  return (
    <>
      <style>{`.${pkg.prefix}--tearsheet { opacity: 0 }`};</style>
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <Tabs onChange={action('Tab selection changed')}>
          <Tearsheet
            {...args}
            actions={wiredActions}
            open={open}
            onClose={() => setOpen(false)}
            decorator={decorator && sampleDecorator(decorator)}
            slug={slug && sampleDecorator(slug)}
          >
            <TabPanels>
              <TabPanel>Tab 1</TabPanel>
              <TabPanel>Tab 2</TabPanel>
              <TabPanel>Tab 3</TabPanel>
              <TabPanel>Tab 4</TabPanel>
            </TabPanels>
          </Tearsheet>
        </Tabs>
      </div>
    </>
  );
};

const ReturnFocusTemplate = (
  { actions, decorator, slug, ...args },
  context
) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(undefined);

  const wiredActions =
    actions &&
    Array.prototype.map.call(actions, (action) => {
      if (action.label === 'Cancel') {
        const previousClick = action.onClick;
        return {
          ...action,
          onClick: (evt) => {
            setOpen(false);
            previousClick(evt);
          },
        };
      }
      return action;
    });

  const ref = useRef(undefined);

  useEffect(() => {
    setTimeout(() => setOpen(context.viewMode !== 'docs'), 0);
  }, []);

  return (
    <>
      <style>{`.${pkg.prefix}--tearsheet { opacity: 0 }`};</style>
      <Button ref={buttonRef} onClick={() => setOpen(true)}>
        Open Tearsheet
      </Button>
      <div ref={ref}>
        <Tearsheet
          {...args}
          actions={wiredActions}
          open={open}
          onClose={() => setOpen(false)}
          decorator={decorator && sampleDecorator(decorator)}
          slug={slug && sampleDecorator(slug)}
          launcherButtonRef={buttonRef}
        >
          {mainContent}
        </Tearsheet>
      </div>
    </>
  );
};

const FirstElementDisabledTemplate = (
  { actions, decorator, slug, ...args },
  context
) => {
  const [open, setOpen] = useState(false);
  const wiredActions =
    actions &&
    Array.prototype.map.call(actions, (action) => {
      if (action.label === 'Cancel') {
        const previousClick = action.onClick;
        return {
          ...action,
          onClick: (evt) => {
            setOpen(false);
            previousClick(evt);
          },
        };
      }
      return action;
    });

  const ref = useRef(undefined);

  useEffect(() => {
    setTimeout(() => setOpen(context.viewMode !== 'docs'), 0);
  }, []);

  return (
    <>
      <style>{`.${pkg.prefix}--tearsheet { opacity: 0 }`};</style>
      <Button onClick={() => setOpen(true)}>Open Tearsheet</Button>
      <div ref={ref}>
        <Tearsheet
          {...args}
          actions={wiredActions}
          open={open}
          onClose={() => setOpen(false)}
          decorator={decorator && sampleDecorator(decorator)}
          slug={slug && sampleDecorator(slug)}
        >
          <div className="tearsheet-stories__dummy-content-block">
            <Form>
              <p>Main content</p>
              <FormGroup
                legendId="tearsheet-form-group"
                legendText="FormGroup Legend"
              >
                <TextInput
                  id="tss-ft1"
                  labelText="Enter an important value here"
                  style={
                    // stylelint-disable-next-line carbon/layout-use
                    { marginBottom: '1em' }
                  }
                  disabled
                />
                <TextInput
                  id="tss-ft2"
                  labelText="Here is an entry field:"
                  style={
                    // stylelint-disable-next-line carbon/layout-use
                    { marginBottom: '1em' }
                  }
                />
              </FormGroup>
            </Form>
          </div>
        </Tearsheet>
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const StackedTemplate = (
  { mixedSizes, actions, decorator, slug, ...args },
  context
) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const ref = useRef(undefined);
  const openButton1 = useRef();

  const wiredActions1 = Array.prototype.map.call(actions, (action) => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: (evt) => {
          setOpen1(false);
          previousClick(evt);
        },
      };
    }
    return action;
  });

  const wiredActions2 = Array.prototype.map.call(actions, (action) => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: (evt) => {
          setOpen2(false);
          previousClick(evt);
        },
      };
    }
    return action;
  });

  const wiredActions3 = Array.prototype.map.call(actions, (action) => {
    if (action.label === 'Cancel') {
      const previousClick = action.onClick;
      return {
        ...action,
        onClick: (evt) => {
          setOpen3(false);
          previousClick(evt);
        },
      };
    }
    return action;
  });

  const VariableSizeTearsheet = mixedSizes ? TearsheetNarrow : Tearsheet;

  useEffect(() => {
    setTimeout(() => {
      setOpen1(context.viewMode !== 'docs');
      setOpen2(context.viewMode !== 'docs');
      setOpen3(context.viewMode !== 'docs');
    }, 0);
  }, []);

  return (
    <>
      <style>{`.${pkg.prefix}--tearsheet { opacity: 0 }`};</style>
      <div style={{ height: '3rem' }} data-reserve-space="for toggle buttons" />
      <ButtonSet
        style={{
          display: 'flex',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10000,
        }}
      >
        <Button onClick={() => setOpen1(!open1)} ref={openButton1}>
          Toggle&nbsp;tearsheet&nbsp;1
        </Button>
        <Button onClick={() => setOpen2(!open2)}>
          Toggle&nbsp;tearsheet&nbsp;2
        </Button>
        {!mixedSizes && (
          <Button onClick={() => setOpen3(!open3)}>
            Toggle&nbsp;tearsheet&nbsp;3
          </Button>
        )}
      </ButtonSet>
      <div ref={ref}>
        <Tearsheet
          {...args}
          actions={wiredActions1}
          headerActions={
            <ButtonSet>
              <Button
                kind="primary"
                size="sm"
                style={{ width: 'initial' }}
                onClick={() => setOpen2(true)}
                disabled={open2}
              >
                Open tearsheet 2
              </Button>
            </ButtonSet>
          }
          title="Tearsheet 1"
          open={open1}
          onClose={() => setOpen1(false)}
          selectorPrimaryFocus="#stacked-input-1"
          decorator={decorator && sampleDecorator(decorator)}
          slug={slug && sampleDecorator(slug)}
          launcherButtonRef={openButton1}
        >
          <div className="tearsheet-stories__dummy-content-block">
            Main content 1
            <TextInput
              id="stacked-input-1"
              labelText="Enter an important value here"
            />
          </div>
        </Tearsheet>
        <VariableSizeTearsheet
          {...args}
          actions={wiredActions2}
          headerActions={
            <ButtonSet>
              <Button
                kind="primary"
                size="sm"
                style={{ width: 'initial' }}
                onClick={() => setOpen3(true)}
                disabled={open3}
              >
                Open tearsheet 3
              </Button>
            </ButtonSet>
          }
          title="Tearsheet 2"
          open={open2}
          onClose={() => setOpen2(false)}
          selectorPrimaryFocus="#stacked-input-2"
          decorator={decorator && sampleDecorator(decorator)}
          slug={slug && sampleDecorator(slug)}
        >
          <div className="tearsheet-stories__dummy-content-block">
            Main content 2
            <TextInput
              id="stacked-input-2"
              labelText="Enter an important value here"
            />
          </div>
        </VariableSizeTearsheet>
        {!mixedSizes && (
          <Tearsheet
            {...args}
            actions={wiredActions3}
            title="Tearsheet 3"
            open={open3}
            onClose={() => setOpen3(false)}
            selectorPrimaryFocus="#stacked-input-3"
            decorator={decorator && sampleDecorator(decorator)}
            slug={slug && sampleDecorator(slug)}
          >
            <div className="tearsheet-stories__dummy-content-block">
              Main content 3
              <TextInput
                id="stacked-input-3"
                labelText="Enter an important value here"
              />
            </div>
          </Tearsheet>
        )}
      </div>
    </>
  );
};

// Stories
export const tearsheet = Template.bind({});
tearsheet.storyName = 'Tearsheet';
tearsheet.args = {
  closeIconDescription,
  description,
  onClose: action('onClose called'),
  title,
  actions: 7,
  selectorPrimaryFocus: '#tss-ft1',
};

export const tearsheetWithInputFields = TemplateWithInputFields.bind({});
tearsheetWithInputFields.storyName = 'Tearsheet with input field states';
tearsheetWithInputFields.args = {
  closeIconDescription,
  description,
  onClose: action('onClose called'),
  title,
  actions: 7,
  selectorPrimaryFocus: '#tss-ft1',
};

export const withNavigation = TemplateWithNav.bind({});
withNavigation.storyName = 'Tearsheet with navigation';
withNavigation.args = {
  closeIconDescription,
  description,
  label,
  navigation: tabs,
  onClose: action('onClose called'),
  title,
  actions: 7,
};

export const withInfluencer = Template.bind({});
withInfluencer.storyName = 'Tearsheet with influencer';
withInfluencer.args = {
  closeIconDescription,
  description,
  influencer,
  influencerPosition: 'left',
  influencerWidth: 'narrow',
  onClose: action('onClose called'),
  title,
  actions: 7,
};

export const ReturnFocusToOpenButton = ReturnFocusTemplate.bind({});
ReturnFocusToOpenButton.args = {
  closeIconDescription,
  description,
  onClose: action('onClose called'),
  title,
  actions: 7,
};

export const firstElementDisabled = FirstElementDisabledTemplate.bind({});
firstElementDisabled.storyName = 'First Element Disabled';
firstElementDisabled.args = {
  closeIconDescription,
  hasCloseIcon: true,
  description,
  onClose: action('onClose called'),
  title,
  actions: 7,
  selectorPrimaryFocus: '#tss-ft1',
};

export const fullyLoaded = TemplateWithNav.bind({});
fullyLoaded.storyName = 'Tearsheet with all header items and influencer';
fullyLoaded.args = {
  closeIconDescription,
  description,
  hasCloseIcon: true,
  headerActions: 2,
  influencer,
  influencerPosition: 'left',
  influencerWidth: 'narrow',
  label,
  navigation: tabs,
  onClose: action('onClose called'),
  title,
  actions: 0,
  decorator: 1,
  slug: 0,
};

// eslint-disable-next-line react/prop-types
export const stacked = StackedTemplate.bind({});
stacked.storyName = 'Stacking tearsheets';
stacked.args = {
  closeIconDescription,
  description,
  height: 'lower',
  influencer,
  label,
  actions: 7,
};

export const stackedMixedSizes = StackedTemplate.bind({});
stackedMixedSizes.storyName = 'Stacking tearsheets, different sizes';
stackedMixedSizes.args = {
  mixedSizes: true,
  closeIconDescription,
  description,
  height: 'lower',
  influencer,
  label,
  actions: 7,
};
