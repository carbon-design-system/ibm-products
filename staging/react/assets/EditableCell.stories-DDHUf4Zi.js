import{e,S as y,r as g,p as T}from"./iframe-es3YFZs8.js";import{s as v,m as h,g as E}from"./_storybook-styles-bQlMiNTF.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-CjcSsazX.js";import{L as c}from"./ListItem-Dkt6PrLe.js";import{U as S}from"./UnorderedList-CVNs7ksl.js";import{D as m,u as D}from"./useDatagrid-Dt9nJfPX.js";import{u as I,a as k}from"./useEditableCell-C1r0h_2R.js";import{E as w}from"./bucket-6-DYsIcumV.js";import{T as N}from"./bucket-18-B7e-BwYT.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-CfJzaJFg.js";import"./index-B6dVoXy9.js";import"./bucket-7-BSUCCRQK.js";import"./bucket-19-B3J48Rvk.js";import"./index-CFjwou8T.js";import"./index-C6RUA3w7.js";import"./props-helper-CpLSSfOq.js";import"./index-D88X5fGe.js";import"./bucket-10-Do5Rpl0p.js";import"./Text-MEHJpwZ2.js";import"./devtools-B-NbPYgg.js";import"./TableRow-Cv5S-WrU.js";import"./wrapComponent-D4YPO8FS.js";import"./utils-Whna5qm2.js";import"./bucket-0-7b3rlN-t.js";import"./bucket-1-4ztVL7Nr.js";import"./TableToolbar-C4KFl_de.js";import"./index-C-mu62QI.js";import"./ErrorEmptyState-CkBP2O_Y.js";import"./EmptyState-yDQeqKRE.js";import"./EmptyStateV2.deprecated-B6wwNsEo.js";import"./Link-BSTPpK0O.js";import"./ErrorIllustration-D6A8s776.js";import"./useId-WDitYIyO.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-omrF4QQk.js";import"./NoDataIllustration-C_NaAJks.js";import"./NotFoundEmptyState-Cmtn6uJ8.js";import"./NotFoundIllustration-DW-bTDS2.js";import"./index.esm-CbRqHJ5S.js";import"./usePreviousValue-DmHE8q_K.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-BclD7llf.js";import"./useIsomorphicEffect-D6rh4akx.js";import"./MenuItem-BfBpJTe1.js";import"./useControllableState-DELe-cxK.js";import"./useAttachedMenu-L4-RfObX.js";import"./defaultItemToString-zSItMTD_.js";import"./index-BFX3rzvs.js";import"./mergeRefs-BZpmU3mx.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-C4h4A7_X.js";import"./AccordionItem-BgHsnZt0.js";import"./Search-8qkKR353.js";import"./FormContext-ijK0cFxQ.js";import"./bucket-15-iOzd6Ht7.js";import"./index-C5Ro8ytP.js";import"./LayerContext-DYatxtHw.js";import"./clamp--00YEiB8.js";import"./Checkbox-DHwbz_p8.js";import"./DatePicker-CmJbYbbQ.js";import"./documentLang-E105Y72C.js";import"./Dropdown-DKaSKN6M.js";import"./index-cRBKcX7l.js";import"./useNormalizedInputProps-DEji8yld.js";import"./FormGroup-BwWqmRgE.js";import"./MultiSelect-DjPJlPqG.js";import"./NumberInput-CzB54gI7.js";import"./bucket-17-lykMG0e3.js";import"./RadioButton-CUNsrnSe.js";import"./RadioButtonGroup-v0f1gLCr.js";import"./usePrefersReducedMotion-DD4USbO9.js";import"./usePresence-DohOf6JM.js";import"./ActionSet-BRjQP7gr.js";import"./ButtonSet-BK4TCPFN.js";import"./InlineLoading-CtvpAno-.js";import"./useWindowResize-DX9REKJk.js";import"./TagSet-DgwhCVYv.js";import"./Tag-CCt-SUKl.js";import"./DefinitionTooltip-BmJBfddz.js";import"./DismissibleTag-B4nxSUVr.js";import"./ComposedModal-BNZ0xrNk.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-DSN20C2k.js";import"./usePortalTarget-BODnGvh-.js";import"./OperationalTag-D8mQBR7x.js";import"./SkeletonText-C99bY-rA.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-DwqRVBq1.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

Default/string:
        `,source:{language:"json",code:`
  {
    Header: 'First Name',
    accessor: 'firstName',
    inlineEdit: {
      type: 'text',
      // required for including validation, this is used to set the invalid prop internally
      validator: (n) => n.length >= 40,
      // These props are passed to the Carbon component used for inline editing, in this case the TextInput
      inputProps: {
        invalidText: 'Invalid text, character count must be less than 40',
      },
    },
  }
          `}},{description:"Number",source:{language:"json",code:`
{
  Header: 'Age',
  accessor: 'age',
  width: 120,
  inlineEdit: {
    // required for including validation, this is used to set the invalid prop internally
    validator: (n) => n && n < 18,
    type: 'number',
    // These props are passed to the Carbon component used for inline editing, in this case NumberInput
    inputProps: {
      invalidText: 'Invalid number, must be 18 or greater',
    },
  },
},
          `}},{description:"Date",source:{language:"json",code:`
{
  Header: 'Active since',
  accessor: 'activeSince',
  inlineEdit: {
    type: 'date',
    inputProps: {
      // optionally pass props here to be passed through to Carbon's DatePicker component
      onChange: (newDateObj, cell) => {
        console.log(newDateObj, cell);
      },
      labelText: 'Change active since date',
      // optionally pass props here to be passed through to Carbon's DatePickerInput component
      datePickerInputProps: {
        labelText: 'Change active since date',
      },
    },
  },
},
          `}},{description:"Selection",source:{language:"json",code:`
{
  Header: 'Chart type',
  accessor: 'chartType',
  inlineEdit: {
    type: 'selection',
    inputProps: {
      // These props are passed to the Carbon component used for inline editing
      items: [
        {
          id: 'option-0',
          icon: ChartColumnFloating16,
          text: 'Column Chart',
        },
        {
          id: 'option-1',
          icon: ChartBubble16,
          text: 'Bubble Chart',
        },
        {
          id: 'option-2',
          icon: ChartVennDiagram16,
          text: 'Venn Diagram',
        },
      ],
      onChange: (item) => {
        console.log(item);
      },
    },
  },
},
          `}},{description:"Using the column structure outlined above, along with the use of the `useEditableCell` hook (previously named `useInlineEdit` in v1), the `Datagrid` will support inline editing. See example below:",source:{code:`
import { Datagrid, useDatagrid, useEditableCell } from '@carbon/ibm-products';
const App = () => {
  const [data, setData] = useState(makeData(10));
  const columns = React.useMemo(() => getInlineEditColumns(), []); // These columns follow the inline edit column configuration detailed above
  const datagridState = useDatagrid(
    {
      columns,
      data,
      onDataUpdate: setData,
    },
    useEditableCell
  );
  return <Datagrid datagridState={datagridState} />;
};
          `},story:i},{title:"Using deprecated useInlineEdit hook",description:"At this time, it is possible to still use the deprecated `useInlineEdit` hook but requires setting a feature flag. See example below:",source:{code:`
import {
  Datagrid,
  useDatagrid,
  useInlineEdit,
  pkg,
} from '@carbon/ibm-products';

const MyInlineEditDatagrid = () => {
  pkg.feature['Datagrid.useInlineEdit'] = true;
  const [data, setData] = useState(gridData);
  const datagridState = useDatagrid(
    {
      columns,
      data,
      onDataUpdate: setData,
    },
    useInlineEdit
  );
  return <Datagrid datagridState={datagridState} />;
};
          `},story:a},{title:"Opt out of editing at cell level",description:"In some cases you may want to disable editing per cell. This is possible by providing the following structure for the cell value within your row data:",source:{code:`
{
  value: '—', // Value displayed for static cell
  isStaticCell: true,
  columnId: 'lastName',
}
          `}}]});f.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:u}=__STORYBOOK_MODULE_ACTIONS__,x=`${T.prefix}--datagrid`,t=`storybook-${x}__validation-code-snippet`,bt={title:"Deprecated/Datagrid/EditableCell",component:m,tags:["autodocs"],parameters:{styles:v,docs:{page:f},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:w,onClick:u("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:N,isDelete:!0,onClick:u("Clicked row action: delete")}]},U=({...o})=>{const[s,n]=g.useState(h(10,{includeNonEditableCell:!0,column:"lastName"})),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},I);return e.createElement(b,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(m,{datagridState:d}),e.createElement(S,null,e.createElement(c,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits"))),e.createElement(c,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:t},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},P=({...o})=>e.createElement(U,{defaultGridProps:{...o}}),_=({...o})=>{const[s,n]=g.useState(h(10)),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},k);return e.createElement(b,null,e.createElement(m,{datagridState:d}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits")))},H=({...o})=>e.createElement(_,{defaultGridProps:{...o}}),C={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader},i=P.bind({});i.storyName="Using useEditableCell hook";i.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};i.args={...C};const A="Using deprecated useInlineEdit hook",a=H.bind({});a.storyName=A;a.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};a.args={...C};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <EditableCellUsage defaultGridProps={{
    ...args
  }} />;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <InlineEditUsage defaultGridProps={{
    ...args
  }} />;
}`,...a.parameters?.docs?.source}}};const Dt=["EditableCellUsageStory","InlineEditUsageStory"];export{i as EditableCellUsageStory,a as InlineEditUsageStory,Dt as __namedExportsOrder,bt as default};
//# sourceMappingURL=EditableCell.stories-DDHUf4Zi.js.map
