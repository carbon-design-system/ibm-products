import{e,S as y,r as g,p as T}from"./iframe-DFpKMPby.js";import{s as v,m as h,g as E}from"./_storybook-styles-CBmTl_pd.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-Da9S6Tyq.js";import{L as c}from"./ListItem-dqXgjW2V.js";import{U as S}from"./UnorderedList-DXHnw60h.js";import{D as m,u as D}from"./useDatagrid-B21XQCqO.js";import{u as I,a as k}from"./useEditableCell-BhzY-Yf6.js";import{E as w}from"./bucket-6-B98T6Er9.js";import{T as N}from"./bucket-18-DKRlsMeP.js";import"./preload-helper-PPVm8Dsz.js";import"./bucket-2-BJtRM_L-.js";import"./index-B_RYS3B3.js";import"./bucket-19-BiWvxoBr.js";import"./bucket-7-Bx0zcbBe.js";import"./index-CTmHgdD3.js";import"./index-C7ycmAhm.js";import"./props-helper-IRa1SilK.js";import"./index-BkFucXUv.js";import"./bucket-10-O5dH3UL6.js";import"./Text-DmSkCN9-.js";import"./devtools-BTj-TFWE.js";import"./TableRow-D0UwMbKU.js";import"./wrapComponent-D28wPHR7.js";import"./utils-js3bPBK9.js";import"./bucket-1-CubUMv3g.js";import"./TableToolbar-C4rOViQ4.js";import"./bucket-0-DdFwv4RV.js";import"./index-DjtoZuLp.js";import"./ErrorEmptyState-BiDiFhvi.js";import"./EmptyState-D3ScweoC.js";import"./EmptyStateV2.deprecated-Cxm57ils.js";import"./Link-CzWKN6gF.js";import"./ErrorIllustration-D4EOM471.js";import"./useId-BDEqOPFK.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-ByxfvGT3.js";import"./NoDataIllustration-BIXT2HFa.js";import"./NotFoundEmptyState-C0mrM5Tb.js";import"./NotFoundIllustration-D4a-Y4C_.js";import"./index.esm-kjsVMGNX.js";import"./usePreviousValue-BJntbRdj.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-BjbdykCB.js";import"./useIsomorphicEffect-D8ODjm2R.js";import"./MenuItem-DL5t9ruc.js";import"./useControllableState-BZJyIqgU.js";import"./useAttachedMenu-DtpWmR0R.js";import"./environment-DRRHKtsv.js";import"./defaultItemToString-zSItMTD_.js";import"./index-DUaXoaGc.js";import"./mergeRefs-BZpmU3mx.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-DpM9DO1D.js";import"./AccordionItem-C1dawy3P.js";import"./Search-DHSo-NRX.js";import"./FormContext-DhkisQRD.js";import"./bucket-15-CTGKYzk1.js";import"./index-BZNQ76pD.js";import"./LayerContext-BsfSsn3u.js";import"./clamp--00YEiB8.js";import"./Checkbox-CKECTXFq.js";import"./DatePicker-CI4BWb5R.js";import"./useNormalizedInputProps-CUOp-3yA.js";import"./documentLang-E105Y72C.js";import"./Dropdown-DqIfgZp5.js";import"./index-ClXT6K7y.js";import"./FormGroup-CStcLMkP.js";import"./MultiSelect-DMtKNMJr.js";import"./NumberInput-B9DoUaSK.js";import"./bucket-17-BMHTEUf3.js";import"./RadioButton-DKxw8ESp.js";import"./RadioButtonGroup-bpKsy1F6.js";import"./usePrefersReducedMotion-iNk_fYdI.js";import"./usePresence-5eZ3iwCl.js";import"./ActionSet-Ddw8WSp7.js";import"./ButtonSet-CbfhMW98.js";import"./InlineLoading-C4D8swtL.js";import"./useWindowResize-CaqPyk-P.js";import"./TagSet-DFiYadK6.js";import"./Tag-Bo2WPtKs.js";import"./DefinitionTooltip-DcC1JVFA.js";import"./DismissibleTag-Dgl_DvA7.js";import"./ComposedModal-C4zVvowC.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-LRnjjuOM.js";import"./usePortalTarget-BQit2Uui.js";import"./OperationalTag-BbFwxNme.js";import"./SkeletonText-D5kiG3Ie.js";import"./bucket-16-BE-04uEE.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-5pf6-d20.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]});f.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:u}=__STORYBOOK_MODULE_ACTIONS__,x=`${T.prefix}--datagrid`,t=`storybook-${x}__validation-code-snippet`,ft={title:"Deprecated/Datagrid/EditableCell",component:m,tags:["autodocs"],parameters:{styles:v,docs:{page:f},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:w,onClick:u("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:N,isDelete:!0,onClick:u("Clicked row action: delete")}]},U=({...o})=>{const[s,n]=g.useState(h(10,{includeNonEditableCell:!0,column:"lastName"})),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},I);return e.createElement(b,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(m,{datagridState:d}),e.createElement(S,null,e.createElement(c,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits"))),e.createElement(c,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:t},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},P=({...o})=>e.createElement(U,{defaultGridProps:{...o}}),_=({...o})=>{const[s,n]=g.useState(h(10)),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},k);return e.createElement(b,null,e.createElement(m,{datagridState:d}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits")))},H=({...o})=>e.createElement(_,{defaultGridProps:{...o}}),C={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader},i=P.bind({});i.storyName="Using useEditableCell hook";i.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};i.args={...C};const A="Using deprecated useInlineEdit hook",a=H.bind({});a.storyName=A;a.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};a.args={...C};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
}`,...a.parameters?.docs?.source}}};const Ct=["EditableCellUsageStory","InlineEditUsageStory"];export{i as EditableCellUsageStory,a as InlineEditUsageStory,Ct as __namedExportsOrder,ft as default};
//# sourceMappingURL=EditableCell.stories-DBhNAiRG.js.map
