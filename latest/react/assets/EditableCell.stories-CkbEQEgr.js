import{e,S as y,r as g,p as T}from"./iframe-6Ea7Lnhj.js";import{s as v,m as h,g as E}from"./_storybook-styles-CQW9oa64.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-MzY0dtP4.js";import{L as c}from"./ListItem-_GHfDCm-.js";import{U as S}from"./UnorderedList-Bt_LJjOm.js";import{D as m,u as D}from"./useDatagrid-Dww695vK.js";import{u as I,a as k}from"./useEditableCell-o_k0DtC8.js";import{E as w}from"./bucket-6-BuyWAmS2.js";import{T as N}from"./bucket-17-BqAcT4u7.js";import"./bucket-2-SPcLEvyK.js";import"./index-DRv8Cx3Q.js";import"./bucket-18-PnJVTM1G.js";import"./bucket-7-DDubFi6M.js";import"./index-DEOEVQ-I.js";import"./index-DsGHyTPv.js";import"./props-helper-BxLyO66a.js";import"./index-BWB014e2.js";import"./bucket-10-DptLGOZv.js";import"./bucket-19-B56Rjjwc.js";import"./Text-CVT3kS-3.js";import"./devtools-t5hVrn0E.js";import"./TableRow-CQ08Va_q.js";import"./wrapComponent-Br9tHTRf.js";import"./utils-DSvpuMUF.js";import"./bucket-0-BdiYAbr0.js";import"./bucket-1--YU9IgqT.js";import"./TableToolbar-CS8C2llb.js";import"./index-BeeWDbkh.js";import"./ErrorEmptyState-Cc8nx_xR.js";import"./EmptyState-CZj-C2Z_.js";import"./EmptyStateV2-DjecLa_i.js";import"./Link-CmZ5dDmd.js";import"./ErrorIllustration-CgWkJiq1.js";import"./useId-BZQMDDt0.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-ClRlgUrZ.js";import"./NoDataIllustration-BZgOfQqd.js";import"./NotFoundEmptyState-NyR-QLpl.js";import"./NotFoundIllustration-DzeuBZdb.js";import"./index.esm-BVE6nUHW.js";import"./usePreviousValue-DiMdwUAm.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-CotxvpG2.js";import"./useIsomorphicEffect-ysnJcn6W.js";import"./MenuItem-0vI0bCph.js";import"./useControllableState-sQbf9Uv-.js";import"./useAttachedMenu-DlDWY8of.js";import"./index-C_1lpD7R.js";import"./mergeRefs-91-mP8KM.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-CuY2rVwU.js";import"./AccordionItem-D7_IyILq.js";import"./Search-Dtb-kHGZ.js";import"./FormContext-D8Mn8o3U.js";import"./bucket-15-CAEq-59T.js";import"./index-B5Rz7fVC.js";import"./LayerContext-CYcSFm8I.js";import"./clamp--00YEiB8.js";import"./Checkbox-Bhl7pOTE.js";import"./DatePicker-DHP833ao.js";import"./Dropdown-CJiIVugV.js";import"./index-DegWqaip.js";import"./FormGroup-CjTSc011.js";import"./MultiSelect-DlIAEBm-.js";import"./NumberInput-ChAV0JSA.js";import"./useNormalizedInputProps-mUOGJzSx.js";import"./documentLang-E105Y72C.js";import"./bucket-16-CvJUHKHx.js";import"./RadioButton-Qd_nE-nY.js";import"./RadioButtonGroup-noIwC_Jp.js";import"./usePrefersReducedMotion-Dli3-6Pp.js";import"./usePresence-Dt2KC1z3.js";import"./ActionSet-eDEhiAWN.js";import"./ButtonSet-BQOUGgo1.js";import"./InlineLoading-DYP2wGFG.js";import"./useWindowResize-CWHFMd4f.js";import"./TagSet-CPNei8P8.js";import"./Tag-Dlmz-yFz.js";import"./DefinitionTooltip-B2nUGEgz.js";import"./DismissibleTag-CqdcL7KM.js";import"./ComposedModal-ClCBM6ur.js";import"./index-BEhuL1MR.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-8mk42Nj3.js";import"./usePortalTarget-RdbJmDu1.js";import"./OperationalTag-BmphgG3b.js";import"./SkeletonText-D3QFfIzL.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-DVdHi0mW.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
