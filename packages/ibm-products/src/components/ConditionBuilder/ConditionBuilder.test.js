/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { act } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';
import { Earth } from '@carbon/react/icons';

import { ConditionBuilder } from '.';
import cx from 'classnames';
import userEvent from '@testing-library/user-event';

import { inputData, inputDataDynamicOptions } from './assets/sampleInput';
import {
  sampleDataStructure_nonHierarchical,
  sampleDataStructure_Hierarchical,
} from './assets/SampleData';
import { HIERARCHICAL_VARIANT, NON_HIERARCHICAL_VARIANT } from './utils/util';

const blockClass = `${pkg.prefix}--condition-builder`;
const componentName = ConditionBuilder.displayName;

// values to use
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();
const defaultProps = {
  inputConfig: {},
  startConditionLabel: 'Add condition',
  popOverSearchThreshold: 4,
  getConditionState: () => {},
  variant: NON_HIERARCHICAL_VARIANT,
};

const inputConfigOptionType = {
  properties: [
    {
      id: 'continent',
      label: 'Continent',
      icon: Earth,
      type: 'option',
      config: {
        options: [
          {
            label: 'Africa',
            id: 'Africa',
          },
          {
            label: 'Antarctica',
            id: 'Antarctica',
          },
        ],
      },
    },
  ],
};

const getContinents = () => {
  return [
    {
      label: 'Africa',
      id: 'Africa',
    },
    {
      label: 'Antarctica',
      id: 'Antarctica',
    },
    {
      label: 'Asia',
      id: 'Asia',
    },
    {
      label: 'Australia',
      id: 'Australia',
    },
    {
      label: 'Europe',
      id: 'Europe',
    },
  ];
};

const getOptions = async (conditionState, { property }) => {
  switch (property) {
    case 'continent':
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(getContinents());
        }, 2000);
      });

    default:
      return [];
  }
};
describe(componentName, () => {
  it('renders a component ConditionBuilder', async () => {
    render(<ConditionBuilder data-testid={dataTestId} {...defaultProps} />);
    expect(screen.getByTestId(dataTestId)).toHaveClass(cx(blockClass));
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<ConditionBuilder {...defaultProps} />);
    try {
      await expect(container).toBeAccessible(componentName);
      await expect(container).toHaveNoAxeViolations();
    } catch (err) {
      console.log('accessibility test error :', err);
    }
  });

  it('applies className to the containing node', async () => {
    render(
      <ConditionBuilder
        data-testid={dataTestId}
        className={className}
        {...defaultProps}
      />
    );
    expect(screen.getByTestId(dataTestId)).toHaveClass(className);
  });

  it('adds additional props to the containing node', async () => {
    render(<ConditionBuilder data-testid={dataTestId} {...defaultProps} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', async () => {
    const ref = React.createRef();
    render(<ConditionBuilder ref={ref} {...defaultProps} />);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', async () => {
    render(<ConditionBuilder data-testid={dataTestId} {...defaultProps} />);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });

  //test cases for Non-Hierarchical variant
  it('should render the component with provided label to start condition builder', async () => {
    const startConditionLabel = 'Add condition';
    render(
      <ConditionBuilder
        data-testid={dataTestId}
        {...defaultProps}
        startConditionLabel={startConditionLabel}
      />
    );

    expect(screen.getByText(startConditionLabel));
  });

  it('render the component with input type as single select option', async () => {
    render(<ConditionBuilder {...defaultProps} inputConfig={inputData} />);

    await act(() => userEvent.click(screen.getByText('Add condition')));

    expect(screen.getByRole('option', { name: 'Continent' }));

    await act(() =>
      userEvent.click(screen.getByRole('option', { name: 'Continent' }))
    );

    expect(screen.getByRole('option', { name: 'is' }));

    await act(() =>
      userEvent.click(screen.getByRole('option', { name: 'is' }))
    );

    expect(screen.getByRole('option', { name: 'Africa' }));

    await act(() =>
      userEvent.click(screen.getByRole('option', { name: 'Africa' }))
    );

    const selectedItem = screen.getByRole('button', { name: 'Africa' });

    expect(selectedItem);
  });

  it('render the component with input type as multiselect option', async () => {
    render(<ConditionBuilder {...defaultProps} inputConfig={inputData} />);

    await act(() => userEvent.click(screen.getByText('Add condition')));

    expect(screen.getByRole('option', { name: 'Continent' }));

    await act(() =>
      userEvent.click(screen.getByRole('option', { name: 'Continent' }))
    );

    expect(screen.getByRole('option', { name: 'is one of' }));

    await act(() =>
      userEvent.click(screen.getByRole('option', { name: 'is one of' }))
    );

    //selection option 1
    expect(screen.getByRole('option', { name: 'Africa' }));

    await act(() =>
      userEvent.click(screen.getByRole('option', { name: 'Africa' }))
    );

    //selection option 2

    expect(screen.getByRole('option', { name: 'Antarctica' }));

    await act(() =>
      userEvent.click(screen.getByRole('option', { name: 'Antarctica' }))
    );

    //selecting and deselecting option 3
    expect(screen.getByRole('option', { name: 'Asia' }));

    await act(() =>
      userEvent.click(screen.getByRole('option', { name: 'Asia' }))
    );

    await act(() =>
      userEvent.click(screen.getByRole('option', { name: 'Asia' }))
    );

    //clicking outside
    const container = document.querySelector(`.${blockClass}`);
    await act(() => userEvent.click(container));

    const selectedItem = screen.getByRole('button', {
      name: 'Africa, Antarctica',
    });
    expect(selectedItem);
  });

  it('checking select/deselect all functionality for the input type option with multiselect', async () => {
    render(
      <ConditionBuilder {...defaultProps} inputConfig={inputConfigOptionType} />
    );

    await act(() => userEvent.click(screen.getByText('Add condition')));

    expect(screen.getByRole('option', { name: 'Continent' }));

    await act(() =>
      userEvent.click(screen.getByRole('option', { name: 'Continent' }))
    );

    expect(screen.getByRole('option', { name: 'is one of' }));

    await act(() =>
      userEvent.click(screen.getByRole('option', { name: 'is one of' }))
    );

    //selecting all
    const selectAllButton = screen.getByRole('button', {
      name: 'Select all',
    });

    await act(() => userEvent.click(selectAllButton));

    const selectedItems = screen.getByRole('button', {
      name: 'Africa, Antarctica',
    });
    expect(selectedItems);

    //de-selecting all
    const deSelectAllButton = screen.getByRole('button', {
      name: 'Deselect all',
    });

    await act(() => userEvent.click(deSelectAllButton));

    //selecting one
    expect(screen.getByText('Antarctica'));

    await act(() => userEvent.click(screen.getByText('Antarctica')));

    //clicking outside
    const container = document.querySelector(`.${blockClass}`);
    await act(() => userEvent.click(container));

    const selectedItem = screen.getByRole('button', {
      name: 'Antarctica',
    });
    expect(selectedItem);
  });

  it('check search feature is functioning in popover', async () => {
    render(<ConditionBuilder {...defaultProps} inputConfig={inputData} />);

    await act(() => userEvent.click(screen.getByText('Add condition')));

    expect(screen.getByText('Continent'));

    await act(() => userEvent.click(screen.getByText('Continent')));

    expect(screen.getByText('is one of'));

    await act(() => userEvent.click(screen.getByText('is one of')));

    const searchInput = screen.getByRole('searchbox');
    expect(searchInput);

    fireEvent.change(searchInput, { target: { value: 'Antarctica' } });

    expect(screen.getByText('Antarctica')).toBeInTheDocument();
  });

  it('checking Add condition and close condition functionality', async () => {
    render(
      <ConditionBuilder {...defaultProps} inputConfig={inputConfigOptionType} />
    );
    //start builder
    fireEvent.click(screen.getByText('Add condition'));

    //add first condition

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'Continent',
        })
      )
    );

    fireEvent.click(
      screen.getByRole('option', {
        name: 'is',
      })
    );

    fireEvent.click(
      screen.getByRole('option', {
        name: 'Africa',
      })
    );

    const addButton = document.querySelector(`.${blockClass}__add-button`);
    expect(addButton);
    await act(() => userEvent.click(addButton));

    //add second condition
    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'Continent',
        })
      )
    );

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'is',
        })
      )
    );

    await act(() => userEvent.click(screen.getByText('Antarctica')));

    const selectedItem2 = screen.getByRole('button', { name: 'Antarctica' });

    expect(selectedItem2);

    const firstCloseButton = document.querySelector(
      `.${blockClass}__close-condition`
    );
    expect(firstCloseButton);
    fireEvent.click(firstCloseButton);

    expect(screen.queryByText('Africa')).not.toBeInTheDocument();
  });

  it('changing condition connector and all connectors within a group should be synchronize', async () => {
    render(
      <ConditionBuilder
        {...defaultProps}
        inputConfig={inputData}
        initialState={{ state: sampleDataStructure_nonHierarchical }}
      />
    );
    //start builder

    await act(() => userEvent.click(screen.getByText('Add condition')));

    await act(() =>
      userEvent.click(screen.getAllByRole('button', { name: 'and' })[0])
    );
    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'or',
        })
      )
    );

    expect(screen.queryByText('and')).not.toBeInTheDocument();
  });

  it('render the component with input type text', async () => {
    render(<ConditionBuilder {...defaultProps} inputConfig={inputData} />);

    await act(() => userEvent.click(screen.getByText('Add condition')));

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'ID',
        })
      )
    );

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'is',
        })
      )
    );

    const inputText = document.querySelector('#id');
    fireEvent.change(inputText, { target: { value: 'testID123' } });

    const container = document.querySelector(`.${blockClass}`);
    await act(() => userEvent.click(container));

    const selectedItem = screen.getByRole('button', { name: 'testID123' });

    expect(selectedItem);
  });

  it('render the component with input type textarea', async () => {
    render(<ConditionBuilder {...defaultProps} inputConfig={inputData} />);

    await act(() => userEvent.click(screen.getByText('Add condition')));

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'Id Long',
        })
      )
    );

    const isOperator = screen.getByRole('option', {
      name: 'is',
    });
    await act(() => userEvent.click(isOperator));

    const inputText = document.querySelector('#id_long');
    fireEvent.change(inputText, { target: { value: 'testID123' } });

    const container = document.querySelector(`.${blockClass}`);
    await act(() => userEvent.click(container));

    const selectedItem = screen.getByRole('button', { name: 'testID123' });

    expect(selectedItem);
  });

  it('render the component with input type number', async () => {
    render(<ConditionBuilder {...defaultProps} inputConfig={inputData} />);

    await act(() => userEvent.click(screen.getByText('Add condition')));

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'Price',
        })
      )
    );

    const isOperator = screen.getByRole('option', {
      name: 'is',
    });
    await act(() => userEvent.click(isOperator));

    let inputText = document.querySelector('#price');
    fireEvent.change(inputText, { target: { value: '123' } });

    const container = document.querySelector(`.${blockClass}`);
    await act(() => userEvent.click(container));

    const selectedItem = screen.getByRole('button', { name: '123 Dollars' });

    expect(selectedItem);

    await act(() => userEvent.click(selectedItem));
    inputText = document.querySelector('#price');
    fireEvent.change(inputText, { target: { value: '-123' } });

    await act(() => userEvent.click(container));

    expect(screen.getByRole('button', { name: 'Incomplete' }));
  });

  it('render the component with input type date', async () => {
    render(<ConditionBuilder {...defaultProps} inputConfig={inputData} />);

    await act(() => userEvent.click(screen.getByText('Add condition')));

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'Date',
        })
      )
    );

    const isOperator = screen.getByRole('option', {
      name: 'is',
    });
    await act(() => userEvent.click(isOperator));

    const inputElement = document.querySelector('#datePicker');
    await act(() => userEvent.type(inputElement, '12/06/2024{enter}'));

    const outsideElement = document.body;
    fireEvent.mouseDown(outsideElement);
    const selectedItem = screen.getByRole('button', { name: '12/06/2024' });

    expect(selectedItem);
  });

  it('render the component with input type time', async () => {
    render(<ConditionBuilder {...defaultProps} inputConfig={inputData} />);

    await act(() => userEvent.click(screen.getByText('Add condition')));

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'Time',
        })
      )
    );

    const isOperator = screen.getByRole('option', {
      name: 'is',
    });
    await act(() => userEvent.click(isOperator));

    const timeElement = document.querySelector('#time-picker');
    await act(() => userEvent.type(timeElement, '12:30'));

    const dayZoneElement = document.querySelector('#time-picker-day-zone');
    await act(() =>
      fireEvent.change(dayZoneElement, { target: { value: 'PM' } })
    );
    expect(dayZoneElement).toHaveValue('PM');

    const timeZoneElement = document.querySelector('#time-picker-time-zone');
    await act(() =>
      fireEvent.change(timeZoneElement, { target: { value: 'UTC' } })
    );
    expect(timeZoneElement).toHaveValue('UTC');

    await act(() => userEvent.keyboard('{escape}'));

    const selectedItem = screen.getByRole('button', { name: '12:30 PM UTC' });

    expect(selectedItem);
  });

  it('fetch options dynamically', async () => {
    render(
      <ConditionBuilder
        {...defaultProps}
        inputConfig={inputDataDynamicOptions}
        getOptions={getOptions}
      />
    );

    await act(() => userEvent.click(screen.getByText('Add condition')));

    expect(screen.getByText('Continent'));

    await act(() => userEvent.click(screen.getByText('Continent')));

    expect(screen.getByText('is'));

    await act(() => userEvent.click(screen.getByText('is')));

    //fetching the options dynamically and it will be resolved after 2 seconds

    await waitFor(() => screen.getByText('Africa'), { timeout: 2500 });

    await act(() => userEvent.click(screen.getByText('Africa')));

    const selectedItem = screen.getByRole('button', { name: 'Africa' });

    expect(selectedItem);
  });

  it('check translation are working as expected', async () => {
    const translateWithId = (key) => {
      const translationsObject = {
        conditionHeadingText: 'Condition Heading',
      };

      return translationsObject[key];
    };

    render(
      <ConditionBuilder
        {...defaultProps}
        inputConfig={inputData}
        initialState={{ state: sampleDataStructure_nonHierarchical }}
        translateWithId={translateWithId}
      />
    );
    //start builder
    await act(() => userEvent.click(screen.getByText('Add condition')));

    expect(screen.getByText('Condition Heading'));
  });

  //test cases for Hierarchical variant
  it('render the Hierarchical variant with  3 conditions and 1 subgroup', async () => {
    render(
      <ConditionBuilder
        {...defaultProps}
        variant={HIERARCHICAL_VARIANT}
        inputConfig={inputData}
      />
    );

    await act(() => userEvent.click(screen.getByText('Add condition')));

    //adding condition 1

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'Continent',
        })
      )
    );

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'is',
        })
      )
    );

    await act(() => userEvent.click(screen.getByText('Africa')));

    //adding condition 2

    let addButton = document.querySelector(`.${blockClass}__add-button`);
    expect(addButton);
    await act(() => userEvent.click(addButton));

    const regionOption = screen.getByRole('option', {
      name: 'Region',
    });
    await act(() => userEvent.click(regionOption));

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'is',
        })
      )
    );

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'India',
        })
      )
    );

    //adding a subgroup

    let addSubGroupButton = document.querySelector(
      `.${blockClass}__add-condition-sub-group`
    );
    expect(addSubGroupButton);
    await act(() => userEvent.click(addSubGroupButton));

    //add third condition

    const colorOption = screen.getByRole('option', {
      name: 'Color',
    });
    await act(() => userEvent.click(colorOption));

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'is',
        })
      )
    );

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'black',
        })
      )
    );
    const subGroups = screen.getAllByText('if');
    expect(subGroups).toHaveLength(2);
  });

  it('render the Hierarchical variant with 2 groups', async () => {
    render(
      <ConditionBuilder
        {...defaultProps}
        variant={HIERARCHICAL_VARIANT}
        inputConfig={inputData}
      />
    );

    await act(() => userEvent.click(screen.getByText('Add condition')));
    //group 1
    //adding condition 1

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'Continent',
        })
      )
    );

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'is',
        })
      )
    );

    await act(() => userEvent.click(screen.getByText('Africa')));

    //adding condition 2

    let addButton = document.querySelector(`.${blockClass}__add-button`);
    expect(addButton);
    await act(() => userEvent.click(addButton));

    const regionOption = screen.getByRole('option', {
      name: 'Region',
    });
    await act(() => userEvent.click(regionOption));

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'is',
        })
      )
    );

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'India',
        })
      )
    );

    //adding a subgroup

    let addSubGroupButton = document.querySelector(
      `.${blockClass}__add-condition-sub-group`
    );
    expect(addSubGroupButton);
    await act(() => userEvent.click(addSubGroupButton));

    //add third condition

    const colorOption = screen.getByRole('option', {
      name: 'Color',
    });
    await act(() => userEvent.click(colorOption));

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'is',
        })
      )
    );

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'black',
        })
      )
    );
    const subGroups = screen.getAllByText('if');
    expect(subGroups).toHaveLength(2);

    //group 2

    const addGroupButton = document.querySelector(
      `.${blockClass}__add-condition-group`
    );
    expect(addGroupButton);
    await act(() => userEvent.click(addGroupButton));
    //adding condition 1

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'Continent',
        })
      )
    );

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'is',
        })
      )
    );

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'Africa',
        })
      )
    );

    const ifStatements = screen.getAllByRole('button', { name: 'if' });
    expect(ifStatements).toHaveLength(3);

    const groupConnector = screen.getAllByRole('button', { name: 'or' });
    expect(groupConnector).toHaveLength(1);
  });

  it('check the next/previous close button is focussed on remove condition', async () => {
    render(
      <ConditionBuilder
        {...defaultProps}
        inputConfig={inputData}
        initialState={{ state: sampleDataStructure_nonHierarchical }}
      />
    );

    await act(() => userEvent.click(screen.getByText('Add condition')));

    let closeButtons = document.querySelectorAll(
      `.${blockClass}__close-condition`
    );
    expect(closeButtons).toHaveLength(3);
    //click first close button
    await act(() => userEvent.click(closeButtons[0]));

    closeButtons = document.querySelectorAll(`.${blockClass}__close-condition`);
    expect(closeButtons).toHaveLength(2);

    expect(closeButtons[0]).toHaveFocus();

    //click last close button

    await act(() => userEvent.click(closeButtons[1]));
    closeButtons = document.querySelectorAll(`.${blockClass}__close-condition`);
    expect(closeButtons).toHaveLength(1);
    expect(closeButtons[0]).toHaveFocus();
  });

  it('check the next/previous close button is focussed on remove condition for Hierarchical variant', async () => {
    const sampleDataStructure = {
      operator: 'or',
      groups: [
        {
          groupOperator: 'and', //'and|or',
          statement: 'if', // 'if|exclude if',
          id: uuidv4(),
          conditions: [
            {
              property: 'region',
              operator: 'is',
              value: 'IL',
              id: uuidv4(),
            },
            {
              property: 'delivery',
              operator: 'is',
              value: 'processing',
              id: uuidv4(),
            },
            {
              property: 'delivery',
              operator: 'is',
              value: 'processing',
              id: uuidv4(),
            },
            {
              property: 'delivery',
              operator: 'is',
              value: 'processing',
              id: uuidv4(),
            },
            {
              groupOperator: 'and',
              statement: 'if',
              id: uuidv4(),
              conditions: [
                {
                  property: 'region',
                  operator: 'is',
                  value: 'IL',
                  id: uuidv4(),
                },
                {
                  property: 'delivery',
                  operator: 'is',
                  value: 'processing',
                  id: uuidv4(),
                },
                {
                  property: 'delivery',
                  operator: 'is',
                  value: 'processing',
                  id: uuidv4(),
                },
              ],
            },
          ],
        },
      ],
    };

    render(
      <ConditionBuilder
        {...defaultProps}
        inputConfig={inputData}
        variant={HIERARCHICAL_VARIANT}
        initialState={{ state: sampleDataStructure }}
      />
    );

    await act(() => userEvent.click(screen.getByText('Add condition')));

    let closeButtons = document.querySelectorAll(
      `.${blockClass}__close-condition`
    );
    expect(closeButtons).toHaveLength(7);
    //click first close button
    await act(() => userEvent.click(closeButtons[0]));

    closeButtons = document.querySelectorAll(`.${blockClass}__close-condition`);
    expect(closeButtons).toHaveLength(6);

    expect(closeButtons[0]).toHaveFocus();

    //click 4th(first condition in first subgroup) close button

    await act(() => userEvent.click(closeButtons[3]));
    closeButtons = document.querySelectorAll(`.${blockClass}__close-condition`);
    expect(closeButtons).toHaveLength(5);
    expect(closeButtons[3]).toHaveFocus();

    //close all conditions of the subgroup

    await act(() => userEvent.click(closeButtons[4]));
    closeButtons = document.querySelectorAll(`.${blockClass}__close-condition`);
    await act(() => userEvent.click(closeButtons[3]));
    closeButtons = document.querySelectorAll(`.${blockClass}__close-condition`);
    expect(closeButtons).toHaveLength(3);

    //when all conditions of a subgroup is closed , it will focus the previous row
    const row = document.querySelectorAll(
      '[role="row"][aria-level="2"][aria-posinset="3"]'
    );
    expect(row).toHaveLength(1);
    expect(
      row[0].querySelector(`.${blockClass}__close-condition`)
    ).toHaveFocus();
  });

  it('check the add/remove actions ', async () => {
    const sampleDataStructure = {
      operator: 'or',
      groups: [
        {
          groupOperator: 'and', //'and|or',
          statement: 'if', // 'if|exclude if',
          id: uuidv4(),
          conditions: [
            {
              property: 'region',
              operator: 'is',
              value: 'IL',
              id: uuidv4(),
            },
          ],
        },
      ],
    };

    const actions = [
      {
        id: uuidv4(),
        label: 'Add item to cart',
      },
      { id: uuidv4(), label: 'Proceed item to checkout' },
    ];

    render(
      <ConditionBuilder
        {...defaultProps}
        inputConfig={inputData}
        actions={actions}
        initialState={{ state: sampleDataStructure }}
      />
    );

    await act(() => userEvent.click(screen.getByText('Add condition')));

    //click on add action button
    await act(() =>
      userEvent.click(
        document.querySelector(
          `.${blockClass}__actions-container .${blockClass}__add-button`
        )
      )
    );

    expect(
      screen.getByRole('option', {
        name: 'Add item to cart',
      })
    );
    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'Add item to cart',
        })
      )
    );

    expect(
      screen.getByRole('button', {
        name: 'Add item to cart',
      })
    );

    //add second action
    await act(() =>
      userEvent.click(
        document.querySelector(
          `.${blockClass}__actions-container .${blockClass}__add-button`
        )
      )
    );

    expect(
      screen.getByRole('option', {
        name: 'Proceed item to checkout',
      })
    );
    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'Proceed item to checkout',
        })
      )
    );

    expect(
      screen.getByRole('button', {
        name: 'Proceed item to checkout',
      })
    );

    //add third action
    await act(() =>
      userEvent.click(
        document.querySelector(
          `.${blockClass}__actions-container .${blockClass}__add-button`
        )
      )
    );

    expect(
      screen.getByRole('option', {
        name: 'Add item to cart',
      })
    );
    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'Add item to cart',
        })
      )
    );

    expect(
      screen.getAllByRole('button', {
        name: 'Add item to cart',
      })
    ).toHaveLength(2);

    //removing conditions
    let closeConditions = document.querySelectorAll(
      `.${blockClass}__actions-container .${blockClass}__close-condition`
    );
    expect(closeConditions).toHaveLength(3);

    await act(() => userEvent.click(closeConditions[2]));

    closeConditions = document.querySelectorAll(
      `.${blockClass}__actions-container .${blockClass}__close-condition`
    );
    expect(closeConditions).toHaveLength(2);
    expect(
      screen.getAllByRole('button', {
        name: 'Add item to cart',
      })
    ).toHaveLength(1);
    expect(
      screen.getAllByRole('button', {
        name: 'Proceed item to checkout',
      })
    ).toHaveLength(1);

    await act(() => userEvent.click(closeConditions[1]));

    closeConditions = document.querySelectorAll(
      `.${blockClass}__actions-container .${blockClass}__close-condition`
    );
    expect(closeConditions).toHaveLength(1);
    expect(
      screen.getAllByRole('button', {
        name: 'Add item to cart',
      })
    ).toHaveLength(1);
    expect(
      screen.queryByText('Proceed item to checkout')
    ).not.toBeInTheDocument();
  });

  it('remove all  conditions in a group keeping only subgroups', async () => {
    const sampleDataStructure = {
      operator: 'or',
      groups: [
        {
          groupOperator: 'and',
          statement: 'if',
          id: '686c62a9-e33d-4e31-817b-4fd319168935',
          conditions: [
            {
              property: 'region',
              operator: 'is',
              value: {
                label: 'Afghanistan',
                id: 'AF',
                icon: {
                  propTypes: {},
                },
              },
              id: '87b6cc99-b463-45e2-ab88-44a2a2069a25',
            },
            {
              groupOperator: 'and',
              statement: 'if',
              conditions: [
                {
                  property: 'region',
                  operator: 'is',
                  value: {
                    label: 'Afghanistan',
                    id: 'AF',
                    icon: {
                      propTypes: {},
                    },
                  },
                  id: 'b1ab21df-1791-4955-a9f4-5e257b1d8ee2',
                },
                {
                  groupOperator: 'and',
                  statement: 'if',
                  conditions: [
                    {
                      property: 'color',
                      operator: 'is',
                      value: {
                        label: 'black',
                        id: 'black',
                      },
                      id: '3dc4a2d9-c83d-4b56-8e24-d0dd0ec1e7a4',
                    },
                  ],
                  id: '88fe784e-d748-4dfd-818c-63d1167bf60e',
                },
              ],
              id: '09e9feb8-a4a6-485f-9ac0-5b52d1dc82e4',
            },
          ],
        },
      ],
    };
    render(
      <ConditionBuilder
        {...defaultProps}
        variant={HIERARCHICAL_VARIANT}
        inputConfig={inputData}
        initialState={{ state: sampleDataStructure }}
      />
    );

    await act(() => userEvent.click(screen.getByText('Add condition')));

    expect(screen.getAllByRole('button', { name: 'if' })).toHaveLength(3);

    await act(() =>
      userEvent.click(document.querySelector(`.${blockClass}__close-condition`))
    );

    expect(screen.getAllByRole('button', { name: 'if' })).toHaveLength(2);
  });

  it('check the custom input type', async () => {
    render(<ConditionBuilder {...defaultProps} inputConfig={inputData} />);

    await act(() => userEvent.click(screen.getByText('Add condition')));
    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'Product',
        })
      )
    );

    await act(() =>
      userEvent.click(
        screen.getByRole('option', {
          name: 'is greater than',
        })
      )
    );

    const inputText = document.querySelector('#customInput');
    fireEvent.change(inputText, { target: { value: 'testID123' } });

    const container = document.querySelector(`.${blockClass}`);
    await act(() => userEvent.click(container));

    const selectedItem = screen.getByRole('button', { name: 'testID123' });

    expect(selectedItem);
  });

  // keyboard navigation tests
  //for Non-Hierarchical variant
  it('add and remove conditions using keyboard', async () => {
    render(
      <ConditionBuilder
        {...defaultProps}
        inputConfig={inputData}
        data-testid={dataTestId}
      />
    );

    expect(screen.getByText('Add condition'));
    await act(() => userEvent.keyboard('{Tab}'));
    expect(screen.getByText('Add condition')).toHaveFocus();
    await act(() => userEvent.keyboard('{Enter}'));

    //adding first condition

    expect(screen.getByRole('searchbox')).toHaveFocus();
    await act(() => userEvent.keyboard('{Tab}'));
    expect(
      screen.getByRole('option', {
        name: 'Continent',
      })
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{Enter}'));
    expect(
      screen.getByRole('option', {
        name: 'is',
      })
    ).toHaveFocus();
    await act(() => userEvent.keyboard('{Enter}'));

    expect(screen.getByRole('searchbox')).toHaveFocus();

    await act(() => userEvent.keyboard('{Tab}'));
    expect(
      screen.getByRole('option', {
        name: 'Africa',
      })
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{Enter}'));

    expect(screen.getByText('Continent'));
    expect(screen.getByText('is'));
    expect(screen.getByRole('button', { name: 'Africa' })).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowRight}'));

    expect(
      document.querySelector(`.${blockClass}__close-condition`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowRight}'));

    expect(document.querySelector(`.${blockClass}__add-button`)).toHaveFocus();

    //adding second condition

    await act(() => userEvent.keyboard('{Enter}'));
    expect(screen.getByRole('searchbox')).toHaveFocus();
    await act(() => userEvent.keyboard('{Tab}'));
    await act(() => userEvent.keyboard('{ArrowDown}'));
    expect(
      screen.getByRole('option', {
        name: 'Region',
      })
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{Enter}'));
    await act(() => userEvent.keyboard('{ArrowDown}'));

    expect(
      screen.getByRole('option', {
        name: 'is one of',
      })
    ).toHaveFocus();
    await act(() => userEvent.keyboard('{Enter}'));

    expect(screen.getByRole('searchbox')).toHaveFocus();

    await act(() => userEvent.keyboard('{Tab}'));
    await act(() => userEvent.keyboard('{Tab}'));
    expect(
      screen.getByRole('option', {
        name: 'Afghanistan',
      })
    ).toHaveFocus();

    await act(() => userEvent.keyboard(' '));
    await act(() => userEvent.keyboard('{Escape}'));

    expect(screen.getByText('Region'));
    expect(screen.getByText('is one of'));
    expect(screen.getByRole('button', { name: 'Afghanistan' })).toHaveFocus();

    //checking arrow up/down will select next row same cell
    await act(() => userEvent.keyboard('{ArrowUp}'));
    expect(screen.getByRole('button', { name: 'Africa' })).toHaveFocus();
    await act(() => userEvent.keyboard('{ArrowDown}'));
    expect(screen.getByRole('button', { name: 'Afghanistan' })).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowRight}'));

    expect(
      document.querySelectorAll(`.${blockClass}__close-condition`)[1]
    ).toHaveFocus();
    await act(() => userEvent.keyboard('{Enter}'));
    expect(
      document.querySelectorAll(`.${blockClass}__close-condition`)[0]
    ).toHaveFocus();
    await act(() => userEvent.keyboard('{ArrowLeft}'));
    await act(() => userEvent.keyboard('{ArrowLeft}'));

    await act(() => userEvent.keyboard('{ArrowLeft}'));
    expect(screen.getByRole('button', { name: 'Continent' })).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowRight}'));
    await act(() => userEvent.keyboard('{ArrowRight}'));
    await act(() => userEvent.keyboard('{ArrowRight}'));
    expect(
      document.querySelectorAll(`.${blockClass}__close-condition`)[0]
    ).toHaveFocus();
    await act(() => userEvent.keyboard('{Enter}'));
    await act(() => userEvent.keyboard('{Tab}'));
    expect(screen.getByText('Add condition')).toHaveFocus();
  });

  //for Hierarchical variant
  it('add and remove conditions using keyboard', async () => {
    render(
      <ConditionBuilder
        {...defaultProps}
        variant={HIERARCHICAL_VARIANT}
        inputConfig={inputData}
      />
    );

    //adding first condition
    expect(screen.getByText('Add condition'));
    await act(() => userEvent.keyboard('{Tab}'));
    expect(screen.getByText('Add condition')).toHaveFocus();
    await act(() => userEvent.keyboard('{Enter}'));

    expect(screen.getByRole('searchbox')).toHaveFocus();
    await act(() => userEvent.keyboard('{Tab}'));
    expect(
      screen.getByRole('option', {
        name: 'Continent',
      })
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{Enter}'));
    expect(
      screen.getByRole('option', {
        name: 'is',
      })
    ).toHaveFocus();
    await act(() => userEvent.keyboard('{Enter}'));

    expect(screen.getByRole('searchbox')).toHaveFocus();

    await act(() => userEvent.keyboard('{Tab}'));
    expect(
      screen.getByRole('option', {
        name: 'Africa',
      })
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowDown}'));
    await act(() => userEvent.keyboard('{ArrowDown}'));
    expect(
      screen.getByRole('option', {
        name: 'Asia',
      })
    ).toHaveFocus();
    await act(() => userEvent.keyboard('{ArrowUp}'));
    await act(() => userEvent.keyboard('{ArrowUp}'));

    await act(() => userEvent.keyboard('{Enter}'));

    expect(screen.getByText('Continent'));
    expect(screen.getByText('is'));
    expect(screen.getByRole('button', { name: 'Africa' })).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowRight}'));

    expect(
      document.querySelector(`.${blockClass}__close-condition`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowRight}'));

    expect(document.querySelector(`.${blockClass}__add-button`)).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowRight}'));
    expect(
      document.querySelector(`.${blockClass}__add-condition-sub-group`)
    ).toHaveFocus();

    //adding second condition

    await act(() => userEvent.keyboard('{Enter}'));
    expect(screen.getByRole('searchbox')).toHaveFocus();
    await act(() => userEvent.keyboard('{Tab}'));
    await act(() => userEvent.keyboard('{ArrowDown}'));
    expect(
      screen.getByRole('option', {
        name: 'Region',
      })
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{Enter}'));
    await act(() => userEvent.keyboard('{ArrowDown}'));

    expect(
      screen.getByRole('option', {
        name: 'is one of',
      })
    ).toHaveFocus();
    await act(() => userEvent.keyboard('{Enter}'));

    expect(screen.getByRole('searchbox')).toHaveFocus();

    await act(() => userEvent.keyboard('{Tab}'));
    await act(() => userEvent.keyboard('{Tab}'));
    expect(
      screen.getByRole('option', {
        name: 'Afghanistan',
      })
    ).toHaveFocus();

    await act(() => userEvent.keyboard(' '));
    await act(() => userEvent.keyboard('{Escape}'));

    expect(screen.getByText('Region'));
    expect(screen.getByText('is one of'));
    expect(screen.getByRole('button', { name: 'Afghanistan' })).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowRight}'));

    expect(
      document.querySelectorAll(`.${blockClass}__close-condition`)[1]
    ).toHaveFocus();
    await act(() => userEvent.keyboard('{Enter}'));

    expect(
      document.querySelector(
        `[role="row"][aria-level="2"][aria-posinset="1"] .${blockClass}__close-condition`
      )
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{Enter}'));
    await act(() => userEvent.keyboard('{Tab}'));
    expect(screen.getByText('Add condition')).toHaveFocus();
  });

  it('row navigation using keyboard', async () => {
    render(
      <ConditionBuilder
        {...defaultProps}
        variant={HIERARCHICAL_VARIANT}
        inputConfig={inputData}
        initialState={{ state: sampleDataStructure_Hierarchical }}
      />
    );

    expect(screen.getByText('Add condition'));
    await act(() => userEvent.keyboard('{Tab}'));
    expect(screen.getByText('Add condition')).toHaveFocus();
    await act(() => userEvent.keyboard('{Enter}'));
    await act(() => userEvent.keyboard('{Tab}'));

    expect(
      document.querySelector(`[role="row"][aria-level="1"][aria-posinset="1"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowDown}'));
    expect(
      document.querySelector(`[role="row"][aria-level="2"][aria-posinset="1"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowDown}'));
    expect(
      document.querySelector(`[role="row"][aria-level="2"][aria-posinset="2"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowDown}'));
    expect(
      document.querySelector(`[role="row"][aria-level="2"][aria-posinset="3"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowDown}'));
    expect(
      document.querySelector(`[role="row"][aria-level="2"][aria-posinset="4"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowDown}'));
    expect(
      document.querySelector(`[role="row"][aria-level="2"][aria-posinset="5"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowDown}'));
    expect(
      document.querySelector(`[role="row"][aria-level="3"][aria-posinset="1"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowDown}'));
    expect(
      document.querySelector(`[role="row"][aria-level="3"][aria-posinset="2"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowDown}'));
    expect(
      document.querySelector(`[role="row"][aria-level="3"][aria-posinset="3"]`)
    ).toHaveFocus();

    //reverse row navigation

    await act(() => userEvent.keyboard('{ArrowUp}'));
    expect(
      document.querySelector(`[role="row"][aria-level="3"][aria-posinset="2"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowUp}'));
    expect(
      document.querySelector(`[role="row"][aria-level="3"][aria-posinset="1"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowUp}'));
    expect(
      document.querySelector(`[role="row"][aria-level="2"][aria-posinset="5"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowUp}'));
    expect(
      document.querySelector(`[role="row"][aria-level="2"][aria-posinset="4"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowUp}'));
    expect(
      document.querySelector(`[role="row"][aria-level="2"][aria-posinset="3"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowUp}'));
    expect(
      document.querySelector(`[role="row"][aria-level="2"][aria-posinset="2"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowUp}'));
    expect(
      document.querySelector(`[role="row"][aria-level="2"][aria-posinset="1"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowUp}'));
    expect(
      document.querySelector(`[role="row"][aria-level="1"][aria-posinset="1"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowRight}'));
    expect(
      document.querySelector(`[role="row"][aria-level="2"][aria-posinset="1"]`)
    ).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowRight}'));
    expect(screen.getAllByRole('button', { name: 'Region' })[0]).toHaveFocus();

    await act(() => userEvent.keyboard('{ArrowLeft}'));
    expect(
      document.querySelector(`[role="row"][aria-level="2"][aria-posinset="1"]`)
    ).toHaveFocus();
  });
});
