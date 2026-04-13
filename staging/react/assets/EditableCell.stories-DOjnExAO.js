var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{e,S as v,r as h,p as S}from"./iframe-B4rJbuYi.js";import{s as I,m as E,g as b}from"./_storybook-styles-B7c-cr7l.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-C_D22GrB.js";import{L as u}from"./ListItem-BmCsYUKo.js";import{U as k}from"./UnorderedList-YdSe2chR.js";import{D as c,u as f}from"./useDatagrid-CQK6Yrof.js";import{u as w,a as N}from"./useEditableCell--hD_Msqj.js";import{E as x}from"./bucket-6-0Oc9PexT.js";import{T as U}from"./bucket-19-Bd0ix_8N.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CxDkhrve.js";import"./index-2cgUJDVc.js";import"./index-xYa1U4c2.js";import"./bucket-7-xTtm0AKl.js";import"./bucket-20-CW2CpDM7.js";import"./index-D_M77XQ3.js";import"./index-CUZU0i_P.js";import"./props-helper-PSqayA2r.js";import"./index-C72sU7_n.js";import"./bucket-11-Bv31aPkg.js";import"./Text-Drzp9J0j.js";import"./devtools-Dw762fyJ.js";import"./TableRow-BHzOF9K_.js";import"./wrapComponent-B3BcOve2.js";import"./utils-CEm6Ryh0.js";import"./bucket-1-CXjG_z7I.js";import"./TableToolbar-Dl-ECb-J.js";import"./bucket-0-BXxytn2O.js";import"./index-1NvPDlBW.js";import"./ErrorEmptyState-CHxR2BGH.js";import"./EmptyState-CcSFVeus.js";import"./EmptyStateV2.deprecated-BmL_2ygS.js";import"./Link-pH65GHmt.js";import"./ErrorIllustration-DQYuJDBV.js";import"./useId-C8xWp-BM.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-D3dApQK4.js";import"./NoDataIllustration-B2qLv9Zd.js";import"./NotFoundEmptyState-bmRlQy1k.js";import"./NotFoundIllustration-DJATW0BB.js";import"./index.esm-Dj_YmWk5.js";import"./usePreviousValue-D-lYg0PR.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-DM-QaFHv.js";import"./useIsomorphicEffect-QUdGuKKq.js";import"./MenuItem-Dfmxkm6z.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-Qv0RgJ-X.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CL83lEzG.js";import"./index-7yaexF9A.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-DgF_wQOb.js";import"./AccordionItem-Ba6fUepl.js";import"./index-DK1CVULi.js";import"./LayerContext-Bxhywl2x.js";import"./clamp-ekNJC_Xv.js";import"./Search-BpLV1Oom.js";import"./FormContext-_ii8s4P8.js";import"./bucket-16-M5Y7R26b.js";import"./Checkbox-BYDjfuTW.js";import"./RadioButton-DIm1K_CN.js";import"./useNormalizedInputProps-DnTF4qMt.js";import"./DatePicker-cFKuQxIF.js";import"./Dropdown-C0dAAfkE.js";import"./downshift.esm-BJX4hjuy.js";import"./FormGroup-wyW43abC.js";import"./MultiSelect-BV6p08Fy.js";import"./NumberInput-IJylqX_9.js";import"./bucket-17-CKEYdR6z.js";import"./RadioButtonGroup-DBDuEoiL.js";import"./usePrefersReducedMotion-DiTuOfLH.js";import"./usePresence-Csg8rd6o.js";import"./ActionSet-DX86x4_7.js";import"./ButtonSet-D6G4_VtK.js";import"./InlineLoading-xiZHHIVS.js";import"./useWindowResize-DinTFh3h.js";import"./TagSet-DJ3bqMQ1.js";import"./Tag-B0Z3gEnR.js";import"./DefinitionTooltip-CuQBL0CI.js";import"./DismissibleTag-PcNNPbZk.js";import"./ComposedModal-DsRaguaU.js";import"./toggleClass-C-4mpgrX.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-nUCJraCO.js";import"./usePortalTarget-CTaYNTaO.js";import"./OperationalTag-DEWJWCWQ.js";import"./SkeletonText-DabfefIp.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-BBATFvKm.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `},story:a},{title:"Using deprecated useInlineEdit hook",description:"At this time, it is possible to still use the deprecated `useInlineEdit` hook but requires setting a feature flag. See example below:",source:{code:`
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
          `},story:o},{title:"Opt out of editing at cell level",description:"In some cases you may want to disable editing per cell. This is possible by providing the following structure for the cell value within your row data:",source:{code:`
{
  value: '—', // Value displayed for static cell
  isStaticCell: true,
  columnId: 'lastName',
}
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,Tt={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const G="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=G;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <EditableCellUsage defaultGridProps={{
    ...args
  }} />;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <InlineEditUsage defaultGridProps={{
    ...args
  }} />;
}`,...o.parameters?.docs?.source}}};const vt=["EditableCellUsageStory","InlineEditUsageStory"];export{a as EditableCellUsageStory,o as InlineEditUsageStory,vt as __namedExportsOrder,Tt as default};
//# sourceMappingURL=EditableCell.stories-DOjnExAO.js.map
