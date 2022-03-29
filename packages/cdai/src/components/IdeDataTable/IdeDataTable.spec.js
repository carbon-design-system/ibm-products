//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

/* eslint-disable react/no-multi-comp */
import IdeDataTable from './IdeDataTable.js';
import { DataTable } from 'carbon-components-react';
import React from 'react';
import {
  idAttributeSelector,
  idAttribute,
  fuzzyAttributeSelector,
} from '../../component_helpers/IDHelper.js';
import * as jth from '../../component_helpers/jest_test_helper_functions.js';
import { rows, headers } from './fixtures/table.data.js';

const baseComponent = (props = {}) =>
  jth.getJSXForComponent(IdeDataTable, { rows: [], headers: [] }, props);
const prefix = (value) => `test-prefix-${value}`;
import { settings } from 'carbon-components';

describe('<IdeDataTable>', () => {
  beforeAll(() => {
    // ignore the required complaints coming out of DataTable
    global.console = { warn: jest.fn(), error: jest.fn(), log: jest.fn() };
  });

  let componentUnderTest;

  afterEach(() => {
    componentUnderTest && componentUnderTest.unmount();
  });

  it('there are 10 loading rows when loading', () => {
    const defaultRowCount = 10;
    componentUnderTest = jth.mountComponent(
      baseComponent({ loading: true }),
      false
    );
    const { component } = componentUnderTest;
    expect(component.find('tbody tr')).toHaveLength(defaultRowCount);
  });

  it('I can configure the number of loading rows', () => {
    const rowCount = 50;
    componentUnderTest = jth.mountComponent(
      baseComponent({
        loading: true,
        skeletonRowCount: rowCount,
      }),
      false
    );
    const { component } = componentUnderTest;
    expect(component.find('tbody tr')).toHaveLength(rowCount);
  });

  it('there are the correct number of headers and rows', () => {
    componentUnderTest = jth.mountComponent(
      baseComponent({
        rows,
        headers,
      }),
      false
    );

    const { component } = componentUnderTest;
    expect(component.find('tbody tr')).toHaveLength(rows.length);
    expect(component.find('tbody tr').at(0).find('td')).toHaveLength(
      headers.length
    );
    expect(component.find('thead th')).toHaveLength(headers.length);
  });

  it('I can click on a row when table is not in select mode', () => {
    const onClick = jest.fn();
    componentUnderTest = jth.mountComponent(
      baseComponent({
        rows,
        headers,
        onClick,
      }),
      false
    );

    const { component } = componentUnderTest;
    component.find('tbody tr').at(0).simulate('click');

    expect(onClick).toHaveBeenCalledWith(rows[0].id);
  });

  it('I can click on a row when row is disabled', () => {
    const onClick = jest.fn();
    componentUnderTest = jth.mountComponent(
      baseComponent({
        rows: rows.map((row) => ({ ...row, disabled: true })),
        headers,
        onClick,
      }),
      false
    );

    const { component } = componentUnderTest;
    component.find('tbody tr').at(0).simulate('click');

    expect(onClick).not.toHaveBeenCalled();
  });

  it('I cannot click on a row when table is in select mode', () => {
    const onClick = jest.fn();
    componentUnderTest = jth.mountComponent(
      baseComponent({
        rows,
        headers,
        onClick,
        selectType: 'single',
      }),
      false
    );

    const { component } = componentUnderTest;
    component.find('tbody tr').at(0).simulate('click');

    expect(onClick).not.toHaveBeenCalled();
  });

  it('I can select a single item', () => {
    const onSelect = jest.fn();
    componentUnderTest = jth.mountComponent(
      baseComponent({
        rows,
        headers,
        onSelect,
        selectType: 'single',
      }),
      false
    );

    const { component } = componentUnderTest;
    component.find(`input[id$="${rows[0].id}"]`).simulate('click');

    expect(onSelect).toHaveBeenCalledWith(expect.arrayContaining([rows[0].id]));

    component.find(`input[id$="${rows[10].id}"]`).simulate('click');
    expect(onSelect).toHaveBeenCalledWith(
      expect.arrayContaining([rows[10].id])
    );
  });

  it('I can select multiple items', () => {
    const onSelect = jest.fn();
    componentUnderTest = jth.mountComponent(
      baseComponent({
        rows,
        headers,
        onSelect,
        selectType: 'multi',
      }),
      false
    );

    const { component } = componentUnderTest;
    component.find(`input[id$="${rows[0].id}"]`).simulate('click');

    expect(onSelect).toHaveBeenCalledWith(expect.arrayContaining([rows[0].id]));

    component.find(`input[id$="${rows[10].id}"]`).simulate('click');
    expect(onSelect).toHaveBeenCalledWith(
      expect.arrayContaining([rows[0].id, rows[10].id])
    );

    component.find(`input[id$="${rows[10].id}"]`).simulate('click');
    expect(onSelect).toHaveBeenCalledWith(expect.arrayContaining([rows[0].id]));

    component.find(`input[id$="select-all"]`).simulate('click');
    expect(onSelect).toHaveBeenCalledWith(
      expect.arrayContaining(rows.map((row) => row.id))
    );

    component.find(`input[id$="select-all"]`).simulate('click');
    expect(onSelect).toHaveBeenCalledWith(expect.arrayContaining([]));
  });

  it('Selecting all does not select disabled rows', () => {
    const onSelect = jest.fn();
    const someRows = rows.slice(0, 3);
    someRows[0].disabled = true;
    componentUnderTest = jth.mountComponent(
      baseComponent({
        rows: someRows,
        headers,
        onSelect,
        selectType: 'multi',
      }),
      false
    );

    const { component } = componentUnderTest;
    component.find(`input[id$="select-all"]`).simulate('click');
    expect(onSelect).toHaveBeenCalledWith(
      someRows.filter((row) => !row.disabled).map((row) => row.id)
    );
  });

  it('If I select rows manually, I can deselect and select all rows in one action', () => {
    const someRows = rows.slice(1, 3);
    const onSelect = jest.fn();

    componentUnderTest = jth.mountComponent(
      baseComponent({
        rows: someRows,
        headers,
        selectType: 'multi',
        onSelect,
      }),
      false
    );

    const { component } = componentUnderTest;

    // select all rows first - first select all should deselect all
    someRows.forEach((row) =>
      component.find(`input[id$="${row.id}"]`).simulate('click')
    );
    onSelect.mockClear();
    component.find(`input[id$="select-all"]`).simulate('click');
    expect(onSelect).toBeCalledTimes(1); // one select
    expect(onSelect).toBeCalledWith([]); // nothing now selected
    // reset mock, now select all
    onSelect.mockClear();
    //someRows.forEach(row => component.find(`input[id$="${row.id}"]`).simulate('click'));
    component.find(`input[id$="select-all"]`).simulate('click');
    expect(onSelect).toBeCalledTimes(1); // one select
    // all rows returned
    expect(onSelect).toBeCalledWith(someRows.map((row) => row.id));
  });

  it('I can render custom header fields', () => {
    const renderHeader = (headers, getHeaderProps) => {
      return headers.map((header) => {
        const props = getHeaderProps(header);
        return (
          <th {...props} {...idAttribute(prefix(header.key))} key={header.key}>
            {header.header}
          </th>
        );
      });
    };
    componentUnderTest = jth.mountComponent(
      baseComponent({
        rows,
        headers,
        renderHeader,
      }),
      false
    );

    const { component } = componentUnderTest;
    headers.forEach((header) =>
      expect(
        component.find(idAttributeSelector(prefix(header.key))).exists()
      ).toBe(true)
    );
  });

  it('I can render custom row content', () => {
    const fewRows = rows.slice(3);

    const renderRow = (row) => {
      return row.cells.map((cell) => (
        <td {...idAttribute(prefix(row.id))} key={cell.id}>
          {cell.value}
        </td>
      ));
    };

    componentUnderTest = jth.mountComponent(
      baseComponent({
        rows: fewRows,
        headers,
        renderRow,
      }),
      false
    );

    const { component } = componentUnderTest;
    fewRows.forEach((row) =>
      expect(component.find(idAttributeSelector(prefix(row.id)))).toHaveLength(
        headers.length
      )
    );
  });

  it('Clicking on a nested item with click handler does not click on the row', () => {
    const onClick = jest.fn();
    const onButtonClick = jest.fn();
    const fewRows = rows.slice(3);
    const renderRow = (row) => {
      return [
        <td key="1">
          <button
            type="button"
            onClick={onButtonClick}
            {...idAttribute(prefix(row.id))}
          >
            Click Me
          </button>
        </td>,
      ];
    };
    componentUnderTest = jth.mountComponent(
      baseComponent({
        rows: fewRows,
        headers,
        onClick,
        renderRow,
      }),
      false
    );

    const { component } = componentUnderTest;
    component
      .find(idAttributeSelector(prefix(fewRows[0].id)))
      .simulate('click');

    expect(onClick).not.toHaveBeenCalled();
    expect(onButtonClick).toHaveBeenCalled();
  });

  it('I can supply custom aria labels for onClick addition', () => {
    const expectedLabels = {
      'ide.table.addition.row.click': 'TEST click row',
    };

    componentUnderTest = jth.mountComponent(
      baseComponent({ ariaLabels: expectedLabels, rows, onClick: jest.fn() }),
      false
    );

    const { component } = componentUnderTest;
    Object.values(expectedLabels).forEach((label) =>
      expect(component.find(`*[aria-label="${label}"]`).exists()).toBe(true)
    );
  });

  it('I can supply custom aria labels for carbon components', () => {
    const expectedLabels = {
      'carbon.table.row.select': 'TEST select row',
      'carbon.table.all.select': 'TEST select all',
    };

    componentUnderTest = jth.mountComponent(
      baseComponent({ ariaLabels: expectedLabels, selectType: 'multi', rows }),
      false
    );

    const { component } = componentUnderTest;
    Object.values(expectedLabels).forEach((label) =>
      expect(component.find(`*[aria-label="${label}"]`).exists()).toBe(true)
    );
  });

  it('I can render expandable rows', () => {
    const someRows = rows.slice(0, 3);
    const expandedRow = (row) => (
      <div {...idAttribute(`expanded-${row.id}`)}>TEST</div>
    );
    componentUnderTest = jth.mountComponent(
      baseComponent({
        rows: someRows,
        expandable: true,
        renderExpandedRow: expandedRow,
      }),
      false
    );

    const { component } = componentUnderTest;

    expect(component.find(fuzzyAttributeSelector('expanded'))).toHaveLength(0);

    component
      .find('*[className*="table-expand__button"]')
      .at(0)
      .simulate('click');

    expect(component.find(fuzzyAttributeSelector('expanded'))).toHaveLength(1);
  });

  it('I can expand a row using exposed row actions', () => {
    const someRows = rows.slice(0, 3);

    const expandedRow = (row) => (
      <div {...idAttribute(`expanded-${row.id}`)}>TEST</div>
    );

    const renderRow = (row, actions) => {
      const rowContent = row.cells.map((cell) => (
        <td {...idAttribute(prefix(row.id))} key={cell.id}>
          {cell.value}
        </td>
      ));

      rowContent.push(
        <td>
          <button
            type="button"
            onClick={actions.expandRow}
            {...idAttribute(`expand__button-${row.id}`)}
          >
            Expand
          </button>
        </td>
      );

      return rowContent;
    };
    componentUnderTest = jth.mountComponent(
      baseComponent({
        rows: someRows,
        renderRow,
        renderExpandedRow: expandedRow,
      }),
      false
    );

    const { component } = componentUnderTest;

    expect(component.find(fuzzyAttributeSelector('expanded'))).toHaveLength(0);

    component
      .find(fuzzyAttributeSelector('expand__button'))
      .at(0)
      .simulate('click');

    expect(component.find(fuzzyAttributeSelector('expanded'))).toHaveLength(1);
  });

  it('I am told when a row is selected', () => {
    const someRows = rows.slice(0, 3);

    const renderRow = (row, actions) => {
      const rowContent = row.cells.map((cell) => (
        <td {...idAttribute(prefix(row.id))} key={cell.id}>
          {cell.value}
        </td>
      ));

      rowContent.push(
        <td>
          <button
            type="button"
            onClick={actions.selectRow}
            {...idAttribute(`select__button-${row.id}`)}
          >
            Select
          </button>
        </td>
      );

      return rowContent;
    };

    componentUnderTest = jth.mountComponent(
      baseComponent({
        rows: someRows,
        renderRow,
      }),
      false
    );

    const { component } = componentUnderTest;

    expect(
      component
        .find(idAttributeSelector('table-row-0'))
        .at(1)
        .hasClass(`${settings.prefix}--data-table--selected`)
    ).toEqual(false);

    component
      .find(fuzzyAttributeSelector('select__button'))
      .at(0)
      .simulate('click');

    expect(
      component
        .find(idAttributeSelector('table-row-0'))
        .at(1)
        .hasClass(`${settings.prefix}--data-table--selected`)
    ).toEqual(true);
  });

  it('I can provide toolbar content', () => {
    const renderToolbar = () => <div {...idAttribute('toolbar')}>Toolbar</div>;
    componentUnderTest = jth.mountComponent(
      baseComponent({
        rows,
        renderToolbar,
      }),
      false
    );
    const { component } = componentUnderTest;
    expect(component.find(idAttributeSelector('toolbar')).exists()).toBe(true);
  });

  it('I can provide size property to Carbon IdeDataTable', () => {
    const size = 'short';
    componentUnderTest = jth.mountComponent(
      baseComponent({
        size,
      }),
      false
    );
    const { component } = componentUnderTest;
    expect(component.find(DataTable).prop('size')).toBe(size);
  });

  it('I can provide useZebraStyles property to Carbon IdeDataTable', () => {
    const useZebraStyles = true;
    componentUnderTest = jth.mountComponent(
      baseComponent({
        useZebraStyles,
      }),
      false
    );
    const { component } = componentUnderTest;
    expect(component.find(DataTable).prop('useZebraStyles')).toBe(
      useZebraStyles
    );
  });
});
