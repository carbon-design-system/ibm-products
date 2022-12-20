import React, { useState, useMemo } from 'react';
import { DataSpreadsheet } from '@carbon/ibm-products';
import { generateData } from './utils/generateData';

const NumericLayout = ({ value }) => {
  return (
    <span
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      {value}
    </span>
  );
};

const columnData = [
  {
    Header: 'Patient id',
    accessor: 'patientId',
    Cell: ({ cell: { value } }) => <NumericLayout value={value} />,
    placement: 'right',
    width: 275,
  },
  {
    Header: 'Pet type',
    accessor: 'petType',
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Age',
    accessor: 'age',
    Cell: ({ cell: { value } }) => <NumericLayout value={value} />,
    placement: 'right',
  },
  {
    Header: 'Vet visits',
    accessor: 'visits',
    Cell: ({ cell: { value } }) => <NumericLayout value={value} />,
    placement: 'right',
  },
  {
    Header: 'Health',
    accessor: 'health',
    Cell: ({ cell: { value } }) => <NumericLayout value={value} />,
    placement: 'right',
  },
];

export const Example = () => {
  const [data, setData] = useState(() => generateData({ rows: 16 }));
  const columns = useMemo(() => columnData, []);
  return (
    <DataSpreadsheet
      columns={columns}
      data={data}
      onDataUpdate={setData}
      id="spreadsheet--id"
      selectAllAriaLabel="Select all"
      spreadsheetAriaLabel="Example data spreadsheet"
    />
  );
};
