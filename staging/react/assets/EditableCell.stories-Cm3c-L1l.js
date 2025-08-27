import{e,S as y,r as g,p as T}from"./iframe-YKw9nL_F.js";import{s as v,m as h,g as E}from"./_storybook-styles-qwLrOXbE.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-DisR3cYe.js";import{L as c}from"./ListItem-CM7dgcxK.js";import{U as S}from"./UnorderedList-CD2VPtfz.js";import{D as m,u as D}from"./useDatagrid-CcFff8kI.js";import{u as I,a as k}from"./useEditableCell-ggTxRwtb.js";import{E as w}from"./bucket-6-BAcs6e6G.js";import{T as N}from"./bucket-17-C_gzCj3y.js";import"./bucket-2-CwIRUxho.js";import"./index-CXIj4-f9.js";import"./bucket-18-DZTAQj9X.js";import"./bucket-7-DiHxbQPt.js";import"./index-RFxsSJMn.js";import"./index-CqMbcN6m.js";import"./props-helper-CihWmQAT.js";import"./index-BfVG9h03.js";import"./bucket-10-CggrCtEG.js";import"./bucket-19-BU_wesH_.js";import"./Text-CjneqIZ1.js";import"./devtools-DSZ92uOv.js";import"./TableRow-CEzGvxM9.js";import"./wrapComponent-BYWBwwwb.js";import"./utils-Cep3OMNO.js";import"./bucket-0-glzR4AjS.js";import"./bucket-1-BfuDTa5x.js";import"./TableToolbar-Dcz0WKQP.js";import"./index-ed0vUSqW.js";import"./ErrorEmptyState-vDYEn1wM.js";import"./EmptyState-BSmRLz4v.js";import"./EmptyStateV2-XL_tjcIC.js";import"./Link-CyN3x2Zk.js";import"./ErrorIllustration-BwAe1T_i.js";import"./useId-DF1Qh0C_.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-BFs113T_.js";import"./NoDataIllustration-oFw7MJoO.js";import"./NotFoundEmptyState-B67Got9I.js";import"./NotFoundIllustration-B2vHpung.js";import"./index.esm-C1MtVFME.js";import"./usePreviousValue-Dpk5kspb.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-Bbd8IY5t.js";import"./useIsomorphicEffect-C-0NYl-N.js";import"./MenuItem-DOVlXix4.js";import"./useControllableState-KAFbqoVc.js";import"./useAttachedMenu-Di7wXaNY.js";import"./index-CNHmpVfc.js";import"./mergeRefs-91-mP8KM.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-C2QAiZyI.js";import"./AccordionItem-DGZJqZWM.js";import"./Search-Eel-vNyd.js";import"./FormContext-BU2ukkNq.js";import"./bucket-15-DYvFGyvv.js";import"./index-CPo7HSbm.js";import"./LayerContext-BQcY-NI5.js";import"./clamp--00YEiB8.js";import"./Checkbox-ChRqkdmE.js";import"./DatePicker-CsVctaUI.js";import"./Dropdown-DYkEQHNe.js";import"./index-CjSFe2a0.js";import"./FormGroup-BidIjjuX.js";import"./MultiSelect-BWBlgV0p.js";import"./NumberInput-C-oCxd9B.js";import"./useNormalizedInputProps-CRs_cU1L.js";import"./documentLang-E105Y72C.js";import"./bucket-16-CN3rodRl.js";import"./RadioButton-By6PBv1P.js";import"./RadioButtonGroup-kGMjCzg7.js";import"./usePrefersReducedMotion-BYGYFI31.js";import"./usePresence-Cp6m5svw.js";import"./ActionSet-D1XsrE9C.js";import"./ButtonSet-CmKBrh9d.js";import"./InlineLoading-CCmO3uOS.js";import"./useWindowResize-sd03rsgR.js";import"./TagSet-DTACHIpK.js";import"./Tag-SycbJDbH.js";import"./DefinitionTooltip-AXgDNA1V.js";import"./DismissibleTag-BtKcWFRj.js";import"./ComposedModal-Cmmd5CvA.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-DNecG-Dg.js";import"./usePortalTarget-BYUdZyYt.js";import"./OperationalTag-Dnu6AwfC.js";import"./SkeletonText-DObhG0lc.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-smKM_HwR.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
