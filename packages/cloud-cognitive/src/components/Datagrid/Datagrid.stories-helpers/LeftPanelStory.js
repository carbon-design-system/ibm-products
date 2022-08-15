const notes = `
# Access left side panel in data grid
Allow users to access left panel in datagrid.

## Documentation:

- (required) Implement \`options.leftPanel\` which has the following props
  - \`options.leftPanel.isOpen\` value is toggled by the Button onClick from DatagridActions
  - render \`options.leftPanel.panelContent\` inside the panel container of data grid when isOpen is true

code snippet:

\`\`\`js
const columns = React.useMemo(() => defaultHeader, []);
  const [data] = useState(makeData(10));
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const DatagridActions = (datagridState) => (
    <TableToolbarContent>
      <Button onClick={() => { setIsPanelOpen(!isPanelOpen); }}>Click to toggle left panel</Button>
      <TableToolbarSearch ... />
      <Button ... />
      <datagridState.CustomizeColumnsButton />
    </TableToolbarContent>
  )
  const datagridState = useDatagrid(
    {
      columns,
      data,
      leftPanel: {
        isOpen: isPanelOpen,
        panelContent: <div>Panel content will go here along with any button interactions</div>,
      },
      initialState: {
        hiddenColumns: ['age'],
        columnOrder: [],
      },
      customizeColumnsProps: {
        onSaveColumnPrefs: (newColDefs) => {
          console.log(newColDefs);
        },
      },
      DatagridActions,
    },
  );

return (
  <Wrapper>
    <IntlProvider locale="en">
      <Datagrid {...datagridState} />
    </IntlProvider>
  </Wrapper>
);
\`\`\`
`;

export const story = {
  parameters: {
    notes,
  },
};
