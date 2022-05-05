/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import uuidv4 from '../../global/js/utils/uuidv4';
import { useDatagrid } from '.';
import { makeData } from './Datagrid.stories';

import { carbon } from '../../settings';
import { expectWarn } from '../../global/js/utils/test-helper';
import { Datagrid } from '.';
const dataTestId = uuidv4();

const componentName = Datagrid.displayName;

const defaultHeader = [
  {
    Header: 'Row Index',
    accessor: (row, i) => i,
    sticky: 'left',
    id: 'rowIndex', // id is required when accessor is a function.
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
    sticky: 'left',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Age',
    accessor: 'age',
    width: 50,
  },
  {
    Header: 'Visits',
    accessor: 'visits',
    width: 60,
  },
  {
    Header: 'Someone 1',
    accessor: 'someone1',
  },
  {
    Header: 'Someone 2',
    accessor: 'someone2',
  },
  {
    Header: 'Someone 3',
    accessor: 'someone3',
  },
  {
    Header: 'Someone 4',
    accessor: 'someone4',
  },
  {
    Header: 'Someone 5',
    accessor: 'someone5',
  },
  {
    Header: 'Someone 6',
    accessor: 'someone6',
  },
  {
    Header: 'Someone 7',
    accessor: 'someone7',
  },
  {
    Header: 'Someone 8',
    accessor: 'someone8',
  },
  {
    Header: 'Someone 9',
    accessor: 'someone9',
  },
  {
    Header: 'Someone 10',
    accessor: 'someone10',
  },
];

const BasicUsage = ({ ...rest }) => {
  const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const datagridState = useDatagrid({
    columns,
    data,
  });

  return <Datagrid datagridState={{ ...datagridState }} {...rest} />;
};

describe(componentName, () => {
  it('renders a basic data grid component with devTools attribute', () => {
    render(<BasicUsage data-testid={dataTestId} />);
    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      Datagrid.displayName
    );
  });

  it("renders a basic data grid validating use of Carbon's data table internally", () => {
    render(<BasicUsage data-testid={dataTestId} />);
    expect(screen.getByRole('table')).toHaveClass(
      `${carbon.prefix}--data-table`
    );
  });

  it('renders nothing and logs a warning to console if no datagridState is supplied', () => {
    expectWarn(
      'Datagrid was not passed datagridState which is required to render this component.',
      () => {
        const errorMock = jest
          .spyOn(console, 'error')
          .mockImplementation(() => {});
        const { container } = render(
          <BasicUsage data-testid={dataTestId} datagridState={null} />
        );
        expect(errorMock).toBeCalledWith(
          expect.stringMatching(
            /^Warning: Failed prop type: The prop `datagridState` is marked as required in `Datagrid`, but its value is `null`./
          )
        );
        expect(container.children.length).toEqual(0);
        jest.spyOn(console, 'error').mockRestore();
      }
    );
  });
});
