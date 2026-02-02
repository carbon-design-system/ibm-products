import{e,S as y,r as g,p as T}from"./iframe-BbTYfv9-.js";import{s as v,m as h,g as E}from"./_storybook-styles-BTBWKaWn.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-D4sLU1ZI.js";import{L as c}from"./ListItem-ByZKorbv.js";import{U as S}from"./UnorderedList-CROVNG_C.js";import{D as m,u as D}from"./useDatagrid-CAIaMFvY.js";import{u as I,a as k}from"./useEditableCell-7-78ryj2.js";import{E as w}from"./bucket-6-D484BBya.js";import{T as N}from"./bucket-18-BvkG-bKs.js";import"./preload-helper-D9Z9MdNV.js";import"./bucket-2-BqdtHwJF.js";import"./index-DxihRps1.js";import"./bucket-19-DKyp3qQO.js";import"./bucket-7-Db9Zkpvj.js";import"./index-DTxeTJ6L.js";import"./index-aiv_WSu0.js";import"./props-helper-fbCn-Z71.js";import"./index-KnhCxvuW.js";import"./bucket-10-Cya3ufu0.js";import"./Text-CJYku-mr.js";import"./devtools-KS_k4bKc.js";import"./TableRow-BRMSMudN.js";import"./wrapComponent-CuAt2Unq.js";import"./utils-C-ow7gcy.js";import"./bucket-1-C8b05e8n.js";import"./TableToolbar-BaEWHkeg.js";import"./bucket-0-DpCnEeoO.js";import"./index-DADqHIn3.js";import"./ErrorEmptyState-C496QIxD.js";import"./EmptyState-CVDSw39s.js";import"./EmptyStateV2.deprecated-bdM0Vfu0.js";import"./Link-CLBD2w3u.js";import"./ErrorIllustration-BfU-B7uW.js";import"./useId-C2YpaygB.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-BPqdcXmN.js";import"./NoDataIllustration-aNp7ADy8.js";import"./NotFoundEmptyState-BfP7OGK3.js";import"./NotFoundIllustration-CuqJkqo6.js";import"./index.esm-C5qPCjKu.js";import"./usePreviousValue-z0wuNVJu.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-DG4fyqZH.js";import"./useIsomorphicEffect-omIe2Oju.js";import"./MenuItem-C_s8hbQW.js";import"./useControllableState-D_LENDKK.js";import"./useAttachedMenu-wuMnyGSa.js";import"./defaultItemToString-zSItMTD_.js";import"./index-CqBphhZJ.js";import"./mergeRefs-BZpmU3mx.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-CVNVqS5h.js";import"./AccordionItem-PfkOwNmu.js";import"./Search-BOcIk9Rm.js";import"./FormContext-DY8rSwJV.js";import"./bucket-15-B4sRXbv_.js";import"./index-CiA8v0SK.js";import"./LayerContext-DTkiAC__.js";import"./clamp--00YEiB8.js";import"./Checkbox-C_vI3TFv.js";import"./DatePicker-DtueQuq2.js";import"./useNormalizedInputProps-DZ8P3UsW.js";import"./NumberInput-Bq5ylnNA.js";import"./bucket-17-CwHsRtB8.js";import"./Dropdown-BsaPmP1_.js";import"./index-Bo8gO87W.js";import"./FormGroup-B3b7XRZY.js";import"./MultiSelect-BQTbEAvY.js";import"./RadioButton-BEzYjobE.js";import"./RadioButtonGroup-C9S45n6Q.js";import"./usePrefersReducedMotion-DFJAWd-w.js";import"./usePresence-CR1b5qhP.js";import"./ActionSet-BkLkGxhx.js";import"./ButtonSet-CRhG9zQ2.js";import"./InlineLoading-J4T5f71r.js";import"./useWindowResize-Cuv2EGmt.js";import"./TagSet-D1uSa9Ws.js";import"./Tag-LHH5a8V-.js";import"./DefinitionTooltip-BGxvqF2J.js";import"./DismissibleTag-NYkkv5JE.js";import"./ComposedModal-DsGf30ws.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-CeU4PdEv.js";import"./usePortalTarget-CQmsAlyZ.js";import"./OperationalTag-Dx2rZe9X.js";import"./SkeletonText-wBJC0ugk.js";import"./bucket-16-Bdv0o6Pm.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-Du3rpjcU.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-CuoDQtcY.js.map
