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
  sampleDataStructure_sentence,
  // sampleDataStructure_tree,
} from './assets/SampleData';

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
  variant: 'sentence',
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
    render(<ConditionBuilder {...defaultProps} />);
    expect(screen.getByRole('main')).toHaveClass(cx(blockClass));
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<ConditionBuilder {...defaultProps} />);
    expect(container).toBeAccessible(componentName);
    expect(container).toHaveNoAxeViolations();
  });

  it('applies className to the containing node', async () => {
    render(<ConditionBuilder className={className} {...defaultProps} />);
    expect(screen.getByRole('main')).toHaveClass(className);
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

  //test cases for sentence variant
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
        initialState={sampleDataStructure_sentence}
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

    await act(() => userEvent.keyboard('{escape}'));

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
});
