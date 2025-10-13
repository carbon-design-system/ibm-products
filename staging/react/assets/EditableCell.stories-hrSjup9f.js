import{e,S as y,r as g,p as T}from"./iframe-DKsKIeO_.js";import{s as v,m as h,g as E}from"./_storybook-styles-HxjOp6y4.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-EgBtnmkT.js";import{L as c}from"./ListItem-C3m-xwBO.js";import{U as S}from"./UnorderedList-BcnhOdwv.js";import{D as m,u as D}from"./useDatagrid-CbYSSwGV.js";import{u as I,a as k}from"./useEditableCell-BqnJPqTr.js";import{E as w}from"./bucket-6-BDZoIsJJ.js";import{T as N}from"./bucket-18-DCBnxAKD.js";import"./bucket-2-BMfBeLco.js";import"./index-zH3n7d5W.js";import"./bucket-7-ZHd8Hq_g.js";import"./bucket-19-CjGrDCAa.js";import"./index-B1_fxKIR.js";import"./index-KIjfM1LT.js";import"./props-helper-CC7b4v3b.js";import"./index-BvgnVJp0.js";import"./bucket-10-Bu-sNLdl.js";import"./Text-DWkOwfBd.js";import"./devtools-Bn3omVKL.js";import"./TableRow-5xPbsC76.js";import"./wrapComponent-BUo4YaXY.js";import"./utils-BNH49ZRR.js";import"./bucket-0-Bkg56oSG.js";import"./bucket-1-CTMMvGsV.js";import"./TableToolbar-DBlCa349.js";import"./index-Do60dg14.js";import"./ErrorEmptyState-Dm_1Wvjt.js";import"./EmptyState-wViNJKuF.js";import"./EmptyStateV2.deprecated-BpJMV6nf.js";import"./Link-DPOhQJ5Q.js";import"./ErrorIllustration-DQHGJrs8.js";import"./useId-DN3dyYk2.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-XVEeo0Bq.js";import"./NoDataIllustration-CxpZ_fEc.js";import"./NotFoundEmptyState-DCarVAL4.js";import"./NotFoundIllustration-D0ijBfZA.js";import"./index.esm-B9NAOgwl.js";import"./usePreviousValue-CMAapDDk.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-CBxb5I5g.js";import"./useIsomorphicEffect-0hnIMifz.js";import"./MenuItem-C7wXSQ0S.js";import"./useControllableState-DfPh9Ar9.js";import"./useAttachedMenu-BjAAxBze.js";import"./index-D1B3TaZ1.js";import"./mergeRefs-D4pwfk3t.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-DhQqKS6x.js";import"./AccordionItem--x4dxrtI.js";import"./Search-B5qeZUes.js";import"./FormContext-DnXssUoQ.js";import"./bucket-15-DC9m_l6j.js";import"./index-CDQbx0x2.js";import"./LayerContext-NMcPk0Nw.js";import"./clamp--00YEiB8.js";import"./Checkbox-CVRUThck.js";import"./DatePicker-BNhrw3vx.js";import"./Dropdown-mBk2AehQ.js";import"./index-CQX_odjL.js";import"./FormGroup-B5HCBD0l.js";import"./MultiSelect-oe5NxaTz.js";import"./NumberInput-BuZdcNXo.js";import"./useNormalizedInputProps-LQxEukKR.js";import"./documentLang-E105Y72C.js";import"./bucket-16-CF33Nm7Q.js";import"./RadioButton-9Z9dZEZL.js";import"./RadioButtonGroup-ngT64JIY.js";import"./usePrefersReducedMotion-DGVUvi25.js";import"./usePresence-gTeZZjwL.js";import"./ActionSet-G6HtkfUk.js";import"./ButtonSet-B47ramhY.js";import"./InlineLoading-p56X7jsD.js";import"./useWindowResize-DFqNbx9a.js";import"./TagSet-DRBAq23W.js";import"./Tag-ByT5Z9aM.js";import"./DefinitionTooltip-62O3uvQ_.js";import"./DismissibleTag-BIVmDsJ-.js";import"./ComposedModal-B2ovIMVM.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-DEXO-vbF.js";import"./usePortalTarget-Dftb10Sg.js";import"./OperationalTag-dmWZlAvX.js";import"./SkeletonText-BEb1LIUU.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-C2qeH2Wa.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
