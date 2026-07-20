var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ag as v,r as h,p as S}from"./iframe-LxOZQDAZ.js";import{s as I,m as E,g as b}from"./_storybook-styles-Bc24vKhO.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-Bj-Es7XN.js";import{L as u}from"./ListItem-0OkDemHw.js";import{U as k}from"./UnorderedList-Dzwd1_A1.js";import{D as c,u as f}from"./useDatagrid--rDM18W2.js";import{u as w,a as N}from"./useEditableCell-DnRV8Bha.js";import{a as x}from"./bucket-6-Ciq4juOh.js";import{T as U}from"./bucket-19-DlKwwYYK.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DObUo3cn.js";import"./index-NOUejIsb.js";import"./index-By2Zbst-.js";import"./bucket-20-CPLXmsjx.js";import"./bucket-7-1DWIAd7h.js";import"./index-s-fwBYUo.js";import"./index-DH8D3rrj.js";import"./props-helper-BGW8o-_q.js";import"./index-Cz7LZYyk.js";import"./bucket-11-DlCBJC6W.js";import"./bucket-21-CQi2gVtC.js";import"./Text-BRhHXZCE.js";import"./devtools-B1WIs_qd.js";import"./TableRow-Cm7oXW-3.js";import"./wrapComponent-CdVkv_gc.js";import"./bucket-1-B6LDmGWR.js";import"./TableToolbar-CB8deJPh.js";import"./bucket-0-dfuKY6jq.js";import"./index-V-GITaOS.js";import"./ErrorEmptyState-D7Z9RnbA.js";import"./EmptyState-ms93KNPc.js";import"./EmptyStateV2.deprecated-Ck7ZJf2i.js";import"./Link-CEy6-L-o.js";import"./ErrorIllustration-ql6xbozg.js";import"./useId-B0NVw4Zp.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DZ4GXqCi.js";import"./NoDataIllustration-CZLlSyLF.js";import"./NotFoundEmptyState-BG94aUCm.js";import"./NotFoundIllustration-BMdoaoeY.js";import"./index.esm-BUNkAqHX.js";import"./usePreviousValue-CD8ZFEAM.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-CBkH9Iwd.js";import"./useIsomorphicEffect-Cxr7g83s.js";import"./MenuItem-BefqR5qR.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-Bj_4he62.js";import"./environment-DRRHKtsv.js";import"./useControllableState-C0cmDY6p.js";import"./index-eKG50g_E.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-BTXTbuS9.js";import"./AccordionItem-BzurocPC.js";import"./index-Cuq_gYqS.js";import"./LayerContext-Dp9ZRtSj.js";import"./clamp-ekNJC_Xv.js";import"./Search-D2pQ-dze.js";import"./FormContext-Cdv1M00w.js";import"./bucket-16-Ce8uDpVR.js";import"./Checkbox-DwDZTjIL.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-QJ6MvXNJ.js";import"./RadioButton-BDaV_pKP.js";import"./DatePicker-BJqUmti_.js";import"./Dropdown-CbTb0lto.js";import"./downshift.esm-B7sI8gv5.js";import"./FormGroup-DGIszK2Y.js";import"./MultiSelect-39kT9rzb.js";import"./NumberInput-BziJhKz0.js";import"./bucket-18-Ar-ngw05.js";import"./RadioButtonGroup-P8wr2TyW.js";import"./index-gez6ZtXT.js";import"./usePrefersReducedMotion-CVY5qbgp.js";import"./usePresence-QfAcXbB8.js";import"./ActionSet-DpmqCooQ.js";import"./ButtonSet-Q9L3O0X_.js";import"./InlineLoading-DbhE4RnG.js";import"./useWindowResize-C31CoKoj.js";import"./TagSet-CHCPA_k-.js";import"./Tag-wrrC6e9Z.js";import"./DefinitionTooltip-DC4sG6U1.js";import"./DismissibleTag-CFZGepQR.js";import"./ComposedModal-izsZFTgD.js";import"./isTopmostVisibleModal-Dn58-e0P.js";import"./wrapFocus-D_OwerMA.js";import"./usePortalTarget-Dt2lWXez.js";import"./OperationalTag-BpdH8-L9.js";import"./SkeletonText-Bs3pts_Z.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-D178IeyT.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,vt={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const G="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=G;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};const St=["EditableCellUsageStory","InlineEditUsageStory"];export{a as EditableCellUsageStory,o as InlineEditUsageStory,St as __namedExportsOrder,vt as default};
//# sourceMappingURL=EditableCell.stories-_iz-kpXm.js.map
