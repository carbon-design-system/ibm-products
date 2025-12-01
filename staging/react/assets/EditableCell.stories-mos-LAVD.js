import{e,S as y,r as g,p as T}from"./iframe-BM8UuOT_.js";import{s as v,m as h,g as E}from"./_storybook-styles-DOrKKOgo.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-Dt_eUTM3.js";import{L as c}from"./ListItem-DYP_Pxyb.js";import{U as S}from"./UnorderedList-DPilk33T.js";import{D as m,u as D}from"./useDatagrid-A0XkAOGV.js";import{u as I,a as k}from"./useEditableCell-jbOMJGtj.js";import{E as w}from"./bucket-6-Ce-CpZ2t.js";import{T as N}from"./bucket-18-BWfaT1BD.js";import"./bucket-2-DIBgyTH9.js";import"./index-B2-UkdcH.js";import"./bucket-7-BBzHZeZe.js";import"./bucket-19-C2Jy_3fG.js";import"./index-Do_l7Y7z.js";import"./index-UeJBVBy7.js";import"./props-helper-eWZkA9vW.js";import"./index-C4aIRcRZ.js";import"./bucket-10-B9QIMrUv.js";import"./Text-Bp2pW92U.js";import"./devtools-fbh1mIbq.js";import"./TableRow-DscPHTHZ.js";import"./wrapComponent-CbIGyXbF.js";import"./utils-DEU5vRWz.js";import"./bucket-0-CgecAV-v.js";import"./bucket-1-BI-qRii9.js";import"./TableToolbar-CZWEUGeM.js";import"./index-DFhDnDPk.js";import"./ErrorEmptyState-D0--SWwI.js";import"./EmptyState-DWctqMgr.js";import"./EmptyStateV2.deprecated-CVgK2xip.js";import"./Link-C2kVZQrV.js";import"./ErrorIllustration-aB0_goXO.js";import"./useId-CZDnw4d1.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-C0uKIYNF.js";import"./NoDataIllustration-Dau-drCS.js";import"./NotFoundEmptyState-CZfJntYE.js";import"./NotFoundIllustration-BdAW901M.js";import"./index.esm-BCOJ2Hv5.js";import"./usePreviousValue-CLpMaOaT.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-COxcZdgh.js";import"./useIsomorphicEffect-C12-vK0M.js";import"./MenuItem-BjTLsKut.js";import"./useControllableState-_39iz1-m.js";import"./useAttachedMenu-CdxBgQP6.js";import"./defaultItemToString-zSItMTD_.js";import"./index-Bpz1Xbcj.js";import"./mergeRefs-BZpmU3mx.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-EHIfC91Q.js";import"./AccordionItem-DgrNAC2C.js";import"./Search-DvUYMInW.js";import"./FormContext-BxAlDPBq.js";import"./bucket-15-CI4BnjUX.js";import"./index-Dkc_HWs6.js";import"./LayerContext-kWUz0ybk.js";import"./clamp--00YEiB8.js";import"./Checkbox-taXQVqsi.js";import"./DatePicker-D8Yqj67U.js";import"./documentLang-E105Y72C.js";import"./Dropdown-hT-OjNB0.js";import"./index-DlLSDJCX.js";import"./FormGroup-B3Qz05Rq.js";import"./MultiSelect-B6haW9Ug.js";import"./NumberInput-DARi5QNl.js";import"./useNormalizedInputProps-D8lHUjCQ.js";import"./bucket-16-29qTRgTN.js";import"./RadioButton-Cq3JxWVF.js";import"./RadioButtonGroup-Bo1Y_Olo.js";import"./usePrefersReducedMotion-Cfj05sB3.js";import"./usePresence-CWZLX8l3.js";import"./ActionSet-DKcPl8ho.js";import"./ButtonSet-keZYC8CP.js";import"./InlineLoading-CV8Tykr1.js";import"./useWindowResize-Dx0owWqx.js";import"./TagSet-CIWBFXst.js";import"./Tag-CTiB40Z6.js";import"./DefinitionTooltip-BAxDhLZV.js";import"./DismissibleTag-CcMOVHV_.js";import"./ComposedModal-DQU04RjK.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-BZutPaRn.js";import"./usePortalTarget-CjNuplPl.js";import"./OperationalTag-DYSf_0d7.js";import"./SkeletonText-CUhyPsIO.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-si5_nRDp.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]});f.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:u}=__STORYBOOK_MODULE_ACTIONS__,x=`${T.prefix}--datagrid`,t=`storybook-${x}__validation-code-snippet`,Et={title:"Deprecated/Datagrid/EditableCell",component:m,tags:["autodocs"],parameters:{styles:v,docs:{page:f},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:w,onClick:u("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:N,isDelete:!0,onClick:u("Clicked row action: delete")}]},U=({...o})=>{const[s,n]=g.useState(h(10,{includeNonEditableCell:!0,column:"lastName"})),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},I);return e.createElement(b,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(m,{datagridState:d}),e.createElement(S,null,e.createElement(c,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits"))),e.createElement(c,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:t},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},P=({...o})=>e.createElement(U,{defaultGridProps:{...o}}),_=({...o})=>{const[s,n]=g.useState(h(10)),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},k);return e.createElement(b,null,e.createElement(m,{datagridState:d}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits")))},H=({...o})=>e.createElement(_,{defaultGridProps:{...o}}),C={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader},i=P.bind({});i.storyName="Using useEditableCell hook";i.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};i.args={...C};const A="Using deprecated useInlineEdit hook",a=H.bind({});a.storyName=A;a.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};a.args={...C};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
}`,...a.parameters?.docs?.source}}};const bt=["EditableCellUsageStory","InlineEditUsageStory"];export{i as EditableCellUsageStory,a as InlineEditUsageStory,bt as __namedExportsOrder,Et as default};
//# sourceMappingURL=EditableCell.stories-mos-LAVD.js.map
