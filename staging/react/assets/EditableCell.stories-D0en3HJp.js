import{e,S as y,r as g,p as T}from"./iframe-CECvNR-E.js";import{s as v,m as h,g as E}from"./_storybook-styles-DyhsE4gt.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-DuKlB9A6.js";import{L as c}from"./ListItem-CnWwpprY.js";import{U as S}from"./UnorderedList-DpMbgF5M.js";import{D as m,u as D}from"./useDatagrid-CLGBu0KZ.js";import{u as I,a as k}from"./useEditableCell-DHIxuFOq.js";import{E as w}from"./bucket-6-6Xg8dT13.js";import{T as N}from"./bucket-18-aLT4L9Ee.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-B2qVJJyY.js";import"./index-CY5VH0Wo.js";import"./bucket-7-BNY8no_f.js";import"./bucket-19-DzVW02r8.js";import"./index-BPPIqc-o.js";import"./index-JdFUOAZ1.js";import"./props-helper-BomzR2el.js";import"./index-DIwvNY7N.js";import"./bucket-10-Xp843jPM.js";import"./Text-JYrlRVpp.js";import"./devtools-4IrNVtGE.js";import"./TableRow-nE5Z2m4H.js";import"./wrapComponent-CgUKGyK0.js";import"./utils-5D3DEOFD.js";import"./bucket-0-Ct-c54fM.js";import"./bucket-1-CWEhWKsT.js";import"./TableToolbar-CgZQ2mCp.js";import"./index-CeDLcdNt.js";import"./ErrorEmptyState-CIYSmPjf.js";import"./EmptyState-B5t1fZwy.js";import"./EmptyStateV2.deprecated-DCZVLlaC.js";import"./Link-DC6sJXxH.js";import"./ErrorIllustration-IOVb8kFl.js";import"./useId-DvA9Olfl.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-CQWT0LH9.js";import"./NoDataIllustration-DQjd0pNV.js";import"./NotFoundEmptyState-DeA3lE9B.js";import"./NotFoundIllustration-3KoYfl3e.js";import"./index.esm-CB6JTwDV.js";import"./usePreviousValue-DzUN10Wt.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-CFlkjV8G.js";import"./useIsomorphicEffect-BnVzRpkq.js";import"./MenuItem-CuhJ5Fdm.js";import"./useControllableState-CeUHG2Ws.js";import"./useAttachedMenu-D1mlKi8p.js";import"./defaultItemToString-zSItMTD_.js";import"./index-OyYMWOsD.js";import"./mergeRefs-BZpmU3mx.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-D2zkx6aO.js";import"./AccordionItem-BIHBNNEu.js";import"./Search-C_NXnGDc.js";import"./FormContext-D-anyOyh.js";import"./bucket-15-B5w10YD2.js";import"./index-D9kzaMMU.js";import"./LayerContext-6g403wGD.js";import"./clamp--00YEiB8.js";import"./Checkbox-GrZpxim0.js";import"./DatePicker-DJAC_JWU.js";import"./documentLang-E105Y72C.js";import"./Dropdown-B3sMF6DL.js";import"./index-nuXQNMyh.js";import"./useNormalizedInputProps-Bnm0Ei9o.js";import"./FormGroup-tt2ybUGc.js";import"./MultiSelect-D63q8W5e.js";import"./NumberInput-rbdBayvn.js";import"./bucket-17-BzB5Sqr3.js";import"./RadioButton-DvcfIgXl.js";import"./RadioButtonGroup-ewWImFG-.js";import"./usePrefersReducedMotion-YBMc9ewZ.js";import"./usePresence-BS1FhAiy.js";import"./ActionSet-BDx6M7Wm.js";import"./ButtonSet-CJvqeno-.js";import"./InlineLoading-AxKMSEh1.js";import"./useWindowResize-Wc-sHMx3.js";import"./TagSet-D8ljy7tq.js";import"./Tag-BXeLWXEp.js";import"./DefinitionTooltip-CASlUOQ5.js";import"./DismissibleTag-0sJOjJTR.js";import"./ComposedModal-knVyg-RR.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-2UnpdR_d.js";import"./usePortalTarget-DBlCnwG_.js";import"./OperationalTag-CBsDAR3R.js";import"./SkeletonText-CxUnjpMl.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-Bw04_Iht.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-D0en3HJp.js.map
