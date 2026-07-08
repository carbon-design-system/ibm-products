var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ah as v,r as h,p as S}from"./iframe-D_TgCArL.js";import{s as I,m as E,g as b}from"./_storybook-styles-CKO__dnP.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-CtA_kew7.js";import{L as u}from"./ListItem-NR1C9GO7.js";import{U as k}from"./UnorderedList-CXeiZARh.js";import{D as c,u as f}from"./useDatagrid-DsyyF3IZ.js";import{u as w,a as N}from"./useEditableCell-DiFWEf39.js";import{c as x}from"./bucket-6-CXN0yrIs.js";import{T as U}from"./bucket-19-DTdadaEd.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DGcWyVgA.js";import"./index-rkIh3fWn.js";import"./index-ByjH8V_s.js";import"./bucket-7-Cu83Tgtz.js";import"./bucket-20-I6CTYn6M.js";import"./index-CKsAqlz_.js";import"./index-D0VNU8Gq.js";import"./props-helper-mCcBl7fc.js";import"./index-AkKJN_E1.js";import"./bucket-11-JyXE3w_-.js";import"./Text-dRt3vkhG.js";import"./devtools-BGZqfd5Y.js";import"./TableRow-Cau4cDV5.js";import"./wrapComponent-CutgLoKv.js";import"./bucket-1-lBN47QRA.js";import"./TableToolbar-Cn8G74hZ.js";import"./bucket-0-5-RCdAp8.js";import"./index-DSCJKvlP.js";import"./ErrorEmptyState-CMDm59NH.js";import"./EmptyState-9MXZSilL.js";import"./EmptyStateV2.deprecated-fMBzFI3J.js";import"./Link-DfZ7aJKy.js";import"./ErrorIllustration-Srt4WvE9.js";import"./useId-CGfxEokt.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DPGMZpNn.js";import"./NoDataIllustration-6Xe6-gle.js";import"./NotFoundEmptyState-CucDan6A.js";import"./NotFoundIllustration-D8xTzJWf.js";import"./index.esm-C0ljhTrT.js";import"./usePreviousValue-DNpvF_F1.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-BKWzin4w.js";import"./useIsomorphicEffect-CR1p44dz.js";import"./MenuItem-of1z0pJX.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-GG8vFhDR.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BjOxIYPS.js";import"./index-DDyhfRTP.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-cZUT7nNv.js";import"./AccordionItem-LnLX38WL.js";import"./index-C4I8n2OM.js";import"./LayerContext-cz8DORjj.js";import"./clamp-ekNJC_Xv.js";import"./Search-CFE_Nkyq.js";import"./FormContext-BSRgfZem.js";import"./bucket-16-BxRNo6ep.js";import"./Checkbox-BhroKPX1.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-CsURg4Bb.js";import"./RadioButton-BQ30rKMg.js";import"./DatePicker-B7VMR9AY.js";import"./Dropdown-CiTxYOtd.js";import"./downshift.esm-CORxR4IN.js";import"./FormGroup-D9G9nnoJ.js";import"./MultiSelect-BkfKI35f.js";import"./NumberInput-g61CL_Xu.js";import"./bucket-17-DbzW9rmA.js";import"./RadioButtonGroup-D9yh9ENA.js";import"./index-D_6p7cdU.js";import"./usePrefersReducedMotion-CsjvWLNE.js";import"./usePresence-BuaLlaxK.js";import"./ActionSet-DQlGvG51.js";import"./ButtonSet-D4f8odRz.js";import"./InlineLoading-BGCjZ4v_.js";import"./useWindowResize-B0NL8UT8.js";import"./TagSet-DNaIqZje.js";import"./Tag-DwG5QxKI.js";import"./DefinitionTooltip-CCUESeVH.js";import"./DismissibleTag-BJRFQ3-8.js";import"./ComposedModal-BnfFN913.js";import"./isTopmostVisibleModal-BR-FkALa.js";import"./wrapFocus-ETscRDcT.js";import"./usePortalTarget-DnsJgKXA.js";import"./OperationalTag-Cl7M_My3.js";import"./SkeletonText-BDgrBTrk.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-VFFCrF86.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-DiT0R7h-.js.map
