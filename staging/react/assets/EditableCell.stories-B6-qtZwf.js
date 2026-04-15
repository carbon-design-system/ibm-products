var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{e,S as v,r as h,p as S}from"./iframe-DgruYanb.js";import{s as I,m as E,g as b}from"./_storybook-styles-CLOQV3T2.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-CFIPvonI.js";import{L as u}from"./ListItem-BUAhg5A_.js";import{U as k}from"./UnorderedList-CLtnU5VR.js";import{D as c,u as f}from"./useDatagrid-CdRvW9Fb.js";import{u as w,a as N}from"./useEditableCell-DudkLxXt.js";import{E as x}from"./bucket-6-BPpGHdnV.js";import{T as U}from"./bucket-19-CGApZllR.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DjMc9QmT.js";import"./index-xD4Xpd71.js";import"./index-BsYj2UP_.js";import"./bucket-7-BaAiWyCS.js";import"./bucket-20-DHjQwcsG.js";import"./index-CMuqcc7t.js";import"./index-g4e2t4sN.js";import"./props-helper-BEn8ZzZM.js";import"./index-DHtLXazq.js";import"./bucket-11-FRviP7FM.js";import"./Text-D1lCafHM.js";import"./devtools-CW8YVWZC.js";import"./TableRow-0_c8EbLQ.js";import"./wrapComponent-CXI96JQ8.js";import"./utils-CA4RKgu6.js";import"./bucket-1-BZJ1OccQ.js";import"./TableToolbar-DqNkzvNy.js";import"./bucket-0-DDPBpPhi.js";import"./index-Dnru4M6s.js";import"./ErrorEmptyState-CEReqF-e.js";import"./EmptyState-VZfftYMu.js";import"./EmptyStateV2.deprecated-CBfuZFEO.js";import"./Link-DjX-mWYc.js";import"./ErrorIllustration-Dv09fOxJ.js";import"./useId-DNBOHGwI.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BtnA130i.js";import"./NoDataIllustration-Di9ABrYE.js";import"./NotFoundEmptyState-DQJ6eodu.js";import"./NotFoundIllustration-DSBRYBPA.js";import"./index.esm-CQal-Oij.js";import"./usePreviousValue-DCRYaoGC.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-CP0wa2Cj.js";import"./useIsomorphicEffect-B6QIctlI.js";import"./MenuItem-Cr-MvNNh.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DVWyH_8U.js";import"./environment-DRRHKtsv.js";import"./useControllableState-D9nZ2lYi.js";import"./index-Dpo7Ixdc.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-ChZJRKRx.js";import"./AccordionItem-DP_m4ane.js";import"./index-lUPiKPy6.js";import"./LayerContext-_FEItnCz.js";import"./clamp-ekNJC_Xv.js";import"./Search-Ds_vqIl7.js";import"./FormContext-CKm6c-rM.js";import"./bucket-16-BhrlQ6ck.js";import"./Checkbox-CmV_WtVY.js";import"./RadioButton-CapiPQZS.js";import"./useNormalizedInputProps-CeKYoSNT.js";import"./DatePicker-DGISatI_.js";import"./Dropdown-B36DlBEE.js";import"./downshift.esm-CB3unjNa.js";import"./FormGroup-DQ8ZBEmS.js";import"./MultiSelect-BzYwdSZe.js";import"./NumberInput-DIMtnGbt.js";import"./bucket-17-Cm4ex8DU.js";import"./RadioButtonGroup-D8mz7lI_.js";import"./usePrefersReducedMotion-DHhj9JSG.js";import"./usePresence-C5aSJKGL.js";import"./ActionSet-6aOKSBVg.js";import"./ButtonSet-CbbT0T6N.js";import"./InlineLoading-BL7zZaGk.js";import"./useWindowResize-DsaT-G7v.js";import"./TagSet-BV5fiLXI.js";import"./Tag-BN75k8hg.js";import"./DefinitionTooltip-BB56GqSK.js";import"./DismissibleTag-CuIkJMCF.js";import"./ComposedModal-NRx_kf66.js";import"./toggleClass-Cl_8Rmh6.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CTeM4Oek.js";import"./usePortalTarget-BW9a6DBL.js";import"./OperationalTag-BBv0NXlo.js";import"./SkeletonText-CeZkTe1Z.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-DB1hPMnm.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-B6-qtZwf.js.map
