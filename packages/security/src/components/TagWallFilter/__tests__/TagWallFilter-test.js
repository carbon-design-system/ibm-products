/**
 * @file Tag wall filter test.
 * @copyright IBM Security 2019, 2021
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';

import TagWallFilter, { noop, withItemReducer } from '../TagWallFilter';

const { fn } = jest;
const { name } = TagWallFilter;

describe(name, () => {
  const getItem = (id) => ({
    id,
    label: `${name} ${id}`,
  });

  describe('noop', () => {
    test('does nothing', () => {
      expect(noop()).toBeUndefined();
    });
  });

  describe('withItemReducer', () => {
    let state;

    beforeEach(() => {
      state = {
        available: { items: [] },
        selected: { items: [] },
      };
    });

    function dispatch(type) {
      state = withItemReducer(state, {
        item: getItem('0'),
        type,
      });
    }

    describe('SELECT_ITEM', () => {
      test('selects an item', () => {
        dispatch('SELECT_ITEM');

        expect(state.selected.items.length).toBe(1);
        expect(state).toMatchSnapshot();
      });
    });

    describe('UNSELECT_ITEM', () => {
      test('unselects an item', () => {
        dispatch('SELECT_ITEM');
        dispatch('UNSELECT_ITEM');

        const {
          available: {
            items: { length: available },
          },
          selected: {
            items: { length: selected },
          },
        } = state;

        expect(available).toBe(1);
        expect(selected).toBe(0);

        expect(state).toMatchSnapshot();
      });
    });

    describe('CLEAR_SELECTED_ITEMS', () => {
      test('clears selected items', () => {
        function length() {
          return state.selected.items.length;
        }

        dispatch('SELECT_ITEM');
        dispatch('SELECT_ITEM');

        expect(length()).toBe(2);

        dispatch('CLEAR_SELECTED_ITEMS');

        expect(length()).toBe(0);

        expect(state).toMatchSnapshot();
      });
    });

    test('infers all items', () => {
      const available = getItem('0');
      const selected = getItem('1');

      const {
        available: {
          allItems,
          items: { length: availableItems },
        },
        selected: {
          items: { length: selectedItems },
        },
      } = withItemReducer({
        available: { items: [available] },
        selected: { items: [selected] },
      });

      expect(allItems.length).toBe(availableItems + selectedItems);

      expect(allItems).toContainEqual(available);
      expect(allItems).toContainEqual(selected);
    });
  });

  function Component(props) {
    const button = () => ({ onClick: fn() });

    return (
      <TagWallFilter
        availableItems={[getItem('0')]}
        closeButton={button()}
        heading={name}
        primaryButton={button()}
        secondaryButton={button()}
        selectedItems={[getItem('1')]}
        {...props}
      />
    );
  }

  test('renders', () => {
    render(<Component />);

    expect(document.body).toMatchSnapshot();
  });

  test('calls `onChange` when items are selected and unselected', () => {
    const availableItem = getItem('0');
    const selectedItem = getItem('1');

    const onChangeMock = fn();

    render(
      <Component
        availableItems={[availableItem]}
        onChange={onChangeMock}
        selectedItems={[selectedItem]}
      />
    );

    const { getByText } = screen;
    const { click } = userEvent;

    click(getByText(availableItem.label));

    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toMatchSnapshot();

    onChangeMock.mockReset();

    click(getByText(selectedItem.label).parentNode.querySelector('button'));

    expect(onChangeMock).toHaveBeenCalled();
    expect(onChangeMock).toMatchSnapshot();
  });
});
