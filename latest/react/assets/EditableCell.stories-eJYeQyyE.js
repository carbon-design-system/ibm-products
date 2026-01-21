import{e,S as y,r as g,p as T}from"./iframe-CtoKioxt.js";import{s as v,m as h,g as E}from"./_storybook-styles-BrQeCyV7.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-D9tagGnZ.js";import{L as c}from"./ListItem-CJGqZJNk.js";import{U as S}from"./UnorderedList-BvJq_iGz.js";import{D as m,u as D}from"./useDatagrid-CGd0x8Z3.js";import{u as I,a as k}from"./useEditableCell-onksWFqN.js";import{E as w}from"./bucket-6-i50ze4pO.js";import{T as N}from"./bucket-18-22lNaWnZ.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-Dc1HokXJ.js";import"./index-HEmqX-Cu.js";import"./bucket-7-CeLNIsQe.js";import"./bucket-19-uAShayzU.js";import"./index-CnOmgSQ5.js";import"./index-CLRl8LFm.js";import"./props-helper-B5pvbCOQ.js";import"./index-BvUma7Jc.js";import"./bucket-10-BO8_jnn_.js";import"./Text-vtctM3R-.js";import"./devtools-BpDcN5qy.js";import"./TableRow-BMp98_tw.js";import"./wrapComponent-CXYKIYfS.js";import"./utils-CqcRd8Iu.js";import"./bucket-0-DXtRMgo-.js";import"./bucket-1-C8DJuThw.js";import"./TableToolbar-B5G2iR9g.js";import"./index-DTsfMTRK.js";import"./ErrorEmptyState-Vc13nK2N.js";import"./EmptyState-DE0v8Tkh.js";import"./EmptyStateV2.deprecated-DJ1amQdj.js";import"./Link-DwHVNOML.js";import"./ErrorIllustration-j18xd1Ii.js";import"./useId-DOILeMkW.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-CNN5sXDe.js";import"./NoDataIllustration-Ch-4CLKv.js";import"./NotFoundEmptyState-BjTYRvkk.js";import"./NotFoundIllustration-zSN-9En6.js";import"./index.esm-E4Z4ZQDd.js";import"./usePreviousValue-CcZwIsc9.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-BRdPmGfe.js";import"./useIsomorphicEffect-CGzYvzD1.js";import"./MenuItem-DjmtQX8o.js";import"./useControllableState-Dfz1WBb9.js";import"./useAttachedMenu-Bqdk6DpD.js";import"./defaultItemToString-zSItMTD_.js";import"./index-DpImqhDG.js";import"./mergeRefs-BZpmU3mx.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-C9XSyVeA.js";import"./AccordionItem-YF8pV8eS.js";import"./Search-M8VRMu75.js";import"./FormContext-4Dpo2sxO.js";import"./bucket-15-YwHKJHA7.js";import"./index-BSoC1KHw.js";import"./LayerContext-BaPPZ-kh.js";import"./clamp--00YEiB8.js";import"./Checkbox-ymzLf8mF.js";import"./DatePicker-B4899aqc.js";import"./documentLang-E105Y72C.js";import"./Dropdown-CEppJsEi.js";import"./index-Bexmo1Ys.js";import"./useNormalizedInputProps-BVbxDgXH.js";import"./FormGroup-B0XPk2U9.js";import"./MultiSelect-LN_GYSUt.js";import"./NumberInput-DaPfIJOD.js";import"./bucket-17-BQfr1mYr.js";import"./RadioButton-Gs5rkmcR.js";import"./RadioButtonGroup-Dqz5Dyvb.js";import"./usePrefersReducedMotion-CELNRsW6.js";import"./usePresence-DJYraiYT.js";import"./ActionSet-UFeovBhW.js";import"./ButtonSet-Ce5dyIwV.js";import"./InlineLoading-DkB9Uu8m.js";import"./useWindowResize-D9PpaIhZ.js";import"./TagSet-ovrbRFHI.js";import"./Tag-CcGCr1ub.js";import"./DefinitionTooltip-C9lYYM92.js";import"./DismissibleTag-Ds86Ya5g.js";import"./ComposedModal-pOSCZM5i.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-BVfmuAZ2.js";import"./usePortalTarget-CFSarTX_.js";import"./OperationalTag-CRXNsrH_.js";import"./SkeletonText-B0_TKw0x.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-Dm_0xiFW.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-eJYeQyyE.js.map
