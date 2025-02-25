/**
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef, useState } from 'react';
// import DocsPage from './Tearsheet.tech.docs-page';
import { action } from '@storybook/addon-actions';
import { Information, Launch } from '@carbon/react/icons';
// import { pkg } from '../../settings';

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

export default {
  title: 'IBM Products/Components/Tearsheet',
  component: Tearsheet,
  tags: ['!dev'],
  parameters: {
    styles,
    layout: 'fullscreen',
    // docs: {
    //   page: DocsPage,
    // },
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
    // headerActions: {
    //   control: {
    //     type: 'select',
    //     labels: {
    //       0: 'none',
    //       1: 'drop-down',
    //       2: 'buttons',
    //     },
    //   },
    //   options: [0, 1, 2],
    //   mapping: {
    //     0: null,
    //     1: (
    //       <Dropdown
    //         id="tss-had"
    //         label="Choose an option"
    //         titleText="Choose an option"
    //         items={['option 1', 'option 2', 'option 3', 'option 4']}
    //       />
    //     ),
    //     2: (
    //       <ButtonSet>
    //         <Button kind="secondary" size="sm" style={{ width: 'initial' }}>
    //           Secondary
    //         </Button>
    //         <Button kind="primary" size="sm" style={{ width: 'initial' }}>
    //           Primary
    //         </Button>
    //       </ButtonSet>
    //     ),
    //   },
    // },
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

// const closeIconDescription = 'Close the tearsheet';

// const description =
//   'This is a description for the tearsheet, providing an opportunity to \
//   describe the flow over a couple of lines in the header of the tearsheet.';

// const influencer = (
//   <div className="tearsheet-stories__dummy-content-block">Influencer</div>
// );

// const label = 'The label of the tearsheet';

// const mainContent = (
//   <div className="tearsheet-stories__dummy-content-block">
//     <Form>
//       <p>Main content</p>
//       <FormGroup legendId="tearsheet-form-group" legendText="FormGroup Legend">
//         <TextInput
//           id="tss-ft1"
//           labelText="Enter an important value here"
//           style={
//             // stylelint-disable-next-line carbon/layout-use
//             { marginBottom: '1em' }
//           }
//         />
//         <TextInput
//           id="tss-ft2"
//           labelText="Here is an entry field:"
//           style={
//             // stylelint-disable-next-line carbon/layout-use
//             { marginBottom: '1em' }
//           }
//         />
//       </FormGroup>
//     </Form>
//   </div>
// );

// const title = 'Title of the tearsheet';

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

const TemplateReadOnlyInputFields = (
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
          title="Tearsheet style test of form elements"
          description="Use the Storybook theme selector, and the
                  controls below to validate Carbon styling."
          onClose={() => setOpen(false)}
          decorator={decorator && sampleDecorator(decorator)}
          slug={slug && sampleDecorator(slug)}
        >
          <div className="tearsheet-stories__dummy-content-block tearsheet-stories__styles">
            <Form>
              <FormGroup legendId="tearsheet-form-group">
                <p>
                  There is a bug with modal styling that doesn't carry over any{' '}
                  <a
                    href="https://react.carbondesignsystem.com/?path=/docs/getting-started-welcome--welcome&args=placeholder:asdf&globals=theme:g10"
                    target="_blank"
                  >
                    <strong>carbon/react</strong>{' '}
                    <Launch size={16} style={{ verticalAlign: 'middle' }} />
                  </a>{' '}
                  form element's <em>readOnly</em> state in the Tearsheet's
                  content area. Use the checkbox and radio buttons directly
                  below to validate these states. <em>Enabled</em> and{' '}
                  <em>disabled</em> are only included for completeness.
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

export const tearsheetReadOnlyInputFields = TemplateReadOnlyInputFields.bind(
  {}
);
tearsheetReadOnlyInputFields.storyName = 'TEARSHEET TEST';
tearsheetReadOnlyInputFields.args = {
  // closeIconDescription,
  // description,
  onClose: action('onClose called'),
  // title,
  actions: 7,
  // selectorPrimaryFocus: '#tss-ft1',
};
