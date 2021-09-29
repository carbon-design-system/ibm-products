//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { act } from "react-dom/test-utils";
import { mount } from 'enzyme';
import { IdeFilter } from '../IdeFilter';
import { options, untypedOptions } from './__fixtures__/options';
import { Idea16 } from '@carbon/icons-react';

describe('IdeFilter', () => {
  it('Renders as expected', () => {
    const wrapper = mount(
      <IdeFilter
        options={options}
        light
        onChange={() => {}}
        placeholderText="Search..."
      />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper.find('.ide-filter--select').at(0).text()).toBe('Search...');
  });
  it('Renders options with filter tags by default', () => {
    const error = jest.spyOn(console, 'error').mockImplementation(() => {});

    const wrapper = mount(
      <IdeFilter
        options={untypedOptions}
        onChange={() => {}}
        value={[
          {
            label: options[0].options[0].label,
            value: options[0].options[0].value,
          },
        ]}
      />
    );
    // IdeFilter component does not use filter with buttons because they dont work with the react-select MultiValueRemove
    expect(wrapper.find('.ide-filter--tag').at(0).props().type).toEqual(
      'filter'
    );

    // Known issue with invalid prop being passed to Tag component
    expect(error).toBeCalledWith(
      expect.stringContaining(
        'Invalid prop `type` of value `filter` supplied to `Tag`'
      )
    );
    error.mockRestore();
  });
  it('Renders options in menu', () => {
    const wrapper = mount(
      <IdeFilter options={options} menuIsOpen onChange={() => {}} />
    );
    wrapper.find('input').props().onFocus();
    expect(wrapper).toBeDefined();
    const optionLabels = wrapper
      .find('.ide-filter__option')
      .map((option) => option.text());
    let expectedOptionLabels = [];
    options.forEach((category) => {
      expectedOptionLabels = expectedOptionLabels.concat(
        category.options.map((option) => option.label)
      );
    });
    expectedOptionLabels.forEach((expectedOption) => {
      expect(optionLabels.includes(expectedOption)).toBe(true);
    });
  });
  it('Triggers on change', () => {
    const changeSpy = jest.fn();
    const wrapper = mount(
      <IdeFilter options={options} menuIsOpen onChange={changeSpy} />
    );
    act(() => wrapper.find('.ide-filter__option').at(0).props().onClick());
    expect(changeSpy).toHaveBeenCalledWith([options[0].options[0]], {
      action: 'select-option',
      name: undefined,
      option: options[0].options[0],
    });
  });
  it('Triggers on input change', () => {
    const changeSpy = jest.fn();
    const inputChangeSpy = jest.fn();
    const wrapper = mount(
      <IdeFilter
        options={options}
        menuIsOpen
        onChange={changeSpy}
        onInputChange={inputChangeSpy}
      />
    );
    const input = wrapper.find('input');
    input.instance().value = 'my new value';
    input.simulate('change');
    expect(inputChangeSpy).toHaveBeenCalledWith('my new value', {
      action: 'input-change',
    });
  });
  it('Creates new options', () => {
    const changeSpy = jest.fn();
    const wrapper = mount(
      <IdeFilter
        options={options}
        inputValue={'something'}
        onChange={changeSpy}
      />
    );
    wrapper
      .find('input')
      .simulate('change', { target: { value: 'something' } });
    expect(wrapper.find('.ide-filter__option').at(0).text()).toEqual(
      'Search for "something"'
    );
    act(() => wrapper.find('.ide-filter__option').at(0).props().onClick());
    const expectedOption = {
      label: 'something',
      value: 'something',
      __plaintext__: true,
    };
    expect(changeSpy).toHaveBeenCalledWith([expectedOption], {
      action: 'create-option',
      name: undefined,
      option: expectedOption,
    });
  });
  it('isLoading passed to component', () => {
    const isLoading = true;
    const wrapper = mount(
      <IdeFilter
        options={options}
        menuIsOpen
        isLoading={isLoading}
        onChange={() => {}}
      />
    );
    const select = wrapper.find('.ide-filter--select').at(0);
    expect(select.props().isLoading).toEqual(true);
  });
  it('isLoading false by default', () => {
    const wrapper = mount(
      <IdeFilter options={options} menuIsOpen onChange={() => {}} />
    );
    const select = wrapper.find('.ide-filter--select').at(0);
    expect(select.props().isLoading).toEqual(false);
  });
  it('allowCreateWhileLoading passed to component', () => {
    const allowCreateWhileLoading = false;
    const wrapper = mount(
      <IdeFilter
        onChange={() => {}}
        options={options}
        menuIsOpen
        allowCreateWhileLoading={allowCreateWhileLoading}
      />
    );
    const select = wrapper.find('.ide-filter--select').at(0);
    expect(select.props().allowCreateWhileLoading).toEqual(false);
  });
  it('allowCreateWhileLoading true by default', () => {
    const wrapper = mount(
      <IdeFilter onChange={() => {}} options={options} menuIsOpen />
    );
    const select = wrapper.find('.ide-filter--select').at(0);
    expect(select.props().allowCreateWhileLoading).toEqual(true);
  });
  it('loadingMessage passed to component', () => {
    const loadingMessage = jest.fn();
    const wrapper = mount(
      <IdeFilter
        onChange={() => {}}
        options={options}
        menuIsOpen
        loadingMessage={loadingMessage}
      />
    );
    const select = wrapper.find('.ide-filter--select').at(0);
    expect(select.props().loadingMessage).toBe(loadingMessage);
  });
  it('searchForText passed to component', () => {
    const wrapper = mount(
      <IdeFilter
        onChange={() => {}}
        options={options}
        menuIsOpen
        searchForText={'custom text'}
      />
    );
    const select = wrapper.find('.ide-filter--select').at(0);
    expect(select.props().formatCreateLabel()).toContain('custom text');
  });
  it('Renders custom icon', () => {
    const wrapper = mount(
      <IdeFilter
        options={options}
        light
        onChange={() => {}}
        placeholderText="Search..."
        searchIcon={({ className }) => (
          <span className="custom-icon">
            <Idea16 className={className} />
          </span>
        )}
      />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper.find('svg.ide-filter--search-icon')).toHaveLength(1);
    expect(wrapper.find('.custom-icon')).toHaveLength(1);
  });
  it('Triggers on input change', () => {
    const changeSpy = jest.fn();
    const inputChangeSpy = jest.fn();
    const wrapper = mount(
      <IdeFilter
        options={options}
        menuIsOpen
        onChange={changeSpy}
        onInputChange={inputChangeSpy}
      />
    );
    const input = wrapper.find('input');
    input.instance().value = 'my new value';
    input.simulate('change');
    expect(inputChangeSpy).toHaveBeenCalledWith('my new value', {
      action: 'input-change',
    });
  });
  it('Can disable creation of plaintext options with allowPlaintext false', () => {
    const changeSpy = jest.fn();
    const wrapper = mount(
      <IdeFilter
        options={options}
        inputValue={'something'}
        onChange={changeSpy}
        allowPlaintext={false}
      />
    );
    wrapper
      .find('input')
      .simulate('change', { target: { value: 'something' } });
    // disable searching for custom fields
    expect(wrapper.find('.ide-filter__option')).toHaveLength(0);
  });
});
