import{e,S as y,r as g,p as T}from"./iframe-BlQ-LkYW.js";import{s as v,m as h,g as E}from"./_storybook-styles-CVByPx4P.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-CRRNitpM.js";import{L as c}from"./ListItem-fjjy95wN.js";import{U as S}from"./UnorderedList-TCSJgIAK.js";import{D as m,u as D}from"./useDatagrid-CnxV8z7J.js";import{u as I,a as k}from"./useEditableCell-CqE85Vi4.js";import{E as w}from"./bucket-6-C4pRq2Bl.js";import{T as N}from"./bucket-17-CcHsRNDR.js";import"./bucket-2-BDIkUbzC.js";import"./index-CgaasdUn.js";import"./bucket-18-Bl8QDCbK.js";import"./bucket-7-DldHT251.js";import"./index-CLZVOBEt.js";import"./index-DwBZIlXB.js";import"./props-helper-DmAPJ46T.js";import"./index-aaSzoyUx.js";import"./bucket-10-Jky8j9pz.js";import"./bucket-19-Ds7BYjit.js";import"./Text-DSSpV4WJ.js";import"./devtools-BJZSxg-N.js";import"./TableRow-BYIk4P8t.js";import"./wrapComponent-BDK0h1Zk.js";import"./utils-BevHIbez.js";import"./bucket-0-6Q7N9SpP.js";import"./bucket-1-DU5MGOmF.js";import"./TableToolbar-BKBISmpj.js";import"./index-DNGc5teW.js";import"./ErrorEmptyState-DN0qShT7.js";import"./EmptyState-UEgZGf8z.js";import"./EmptyStateV2.deprecated-CJfAaoaS.js";import"./Link-CMYINvP1.js";import"./ErrorIllustration-D8EqFHGf.js";import"./useId-C2_b1b81.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Ct01DPXx.js";import"./NoDataIllustration-D99JvkUc.js";import"./NotFoundEmptyState-CExQFyMc.js";import"./NotFoundIllustration-B0zRLUCn.js";import"./index.esm-B2BF8_Xw.js";import"./usePreviousValue-BfWd4m5G.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-w8n_UuuT.js";import"./useIsomorphicEffect-BIhftj2z.js";import"./MenuItem-Cde_w9Z-.js";import"./useControllableState-C05qBH-j.js";import"./useAttachedMenu-BakFN8R8.js";import"./index-CFF1FOUA.js";import"./mergeRefs-91-mP8KM.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-j6p6RzvJ.js";import"./AccordionItem-BhtMrcrS.js";import"./Search-KyKbUvD4.js";import"./FormContext-DkhQXZ0G.js";import"./bucket-15-CM_J5Vvb.js";import"./index-DZN9_q_B.js";import"./LayerContext-BvuXYV0V.js";import"./clamp--00YEiB8.js";import"./Checkbox-KCN2jQ_S.js";import"./DatePicker-DamDW6cE.js";import"./Dropdown-BvmhsKBp.js";import"./index-CXYHyzp2.js";import"./FormGroup-B1IMtc-E.js";import"./MultiSelect-B_rQyAfc.js";import"./NumberInput-bpDngU1O.js";import"./useNormalizedInputProps-Dz70CF1S.js";import"./documentLang-E105Y72C.js";import"./bucket-16-D881Un-v.js";import"./RadioButton-zRgIFODd.js";import"./RadioButtonGroup-eRaykhRX.js";import"./usePrefersReducedMotion-C1fBtu2H.js";import"./usePresence-tZhDiWEQ.js";import"./ActionSet-DxtE6QvT.js";import"./ButtonSet-BLtxr1g9.js";import"./InlineLoading-BiPU-E2v.js";import"./useWindowResize-DGjBxvCI.js";import"./TagSet-Dhe0S5N8.js";import"./Tag-CsYb8P2P.js";import"./DefinitionTooltip-Ch2quHzY.js";import"./DismissibleTag-Da7z3e6w.js";import"./ComposedModal-CtswQ6eu.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-C2HPB9zJ.js";import"./usePortalTarget-a9acdh7P.js";import"./OperationalTag-BUphsu11.js";import"./SkeletonText-DEkHw7eg.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-Bf-zbl8j.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
