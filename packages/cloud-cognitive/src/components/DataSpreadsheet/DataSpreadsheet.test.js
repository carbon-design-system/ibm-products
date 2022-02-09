/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { render, screen } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro

import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';

import { DataSpreadsheet } from '.';

const blockClass = `${pkg.prefix}--data-spreadsheet`;
const componentName = DataSpreadsheet.displayName;

// values to use
const className = `class-${uuidv4()}`;
const dataTestId = uuidv4();
const defaultProps = {
  columns: [
    {
      Header: 'Row 1',
      accessor: (row, index) => index,
    },
    {
      Header: 'Pet type',
      accessor: 'petType',
    },
    {
      Header: 'First name',
      accessor: 'firstName',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: 'Vet visits',
      accessor: 'visits',
    },
    {
      Header: 'Health',
      accessor: 'health',
    },
  ],
};

describe(componentName, () => {
  it('renders a component DataSpreadsheet', () => {
    render(<DataSpreadsheet {...defaultProps} />);
    expect(screen.getByRole('grid')).toHaveClass(blockClass);
  });

  it('applies className to the containing node', () => {
    render(<DataSpreadsheet className={className} {...defaultProps} />);
    expect(screen.getByRole('grid')).toHaveClass(className);
  });

  it('adds additional props to the containing node', () => {
    render(<DataSpreadsheet data-testid={dataTestId} {...defaultProps} />);
    screen.getByTestId(dataTestId);
  });

  it('forwards a ref to an appropriate node', () => {
    const ref = React.createRef();
    render(<DataSpreadsheet ref={ref} {...defaultProps} />);
    expect(ref.current).toHaveClass(blockClass);
  });

  it('adds the Devtools attribute to the containing node', () => {
    render(<DataSpreadsheet data-testid={dataTestId} {...defaultProps} />);

    expect(screen.getByTestId(dataTestId)).toHaveDevtoolsAttribute(
      componentName
    );
  });
});
