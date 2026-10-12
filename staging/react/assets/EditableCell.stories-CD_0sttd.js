var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ai as v,r as h,p as S}from"./iframe-BNGWoFVN.js";import{s as I,m as E,g as b}from"./_storybook-styles-CkYL2q34.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-Ca2LCCGG.js";import{L as u}from"./ListItem-o-17c0Bf.js";import{U as k}from"./UnorderedList-BKOrJfZn.js";import{D as c,u as f}from"./useDatagrid-267wUqFf.js";import{u as w,a as N}from"./useEditableCell-3Qlz3PLz.js";import{a as x}from"./bucket-6-B7ttew9n.js";import{T as U}from"./bucket-20-DnGv9FGc.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-yBl_RuSX.js";import"./index-BGVaWMRy.js";import"./index-CbhpwO1D.js";import"./bucket-8-DBsmuUY8.js";import"./bucket-21-Dc8elOVL.js";import"./index-DyYJnRxS.js";import"./index-BzfEn4D3.js";import"./props-helper-BtRmhizd.js";import"./index-DMT0QKGP.js";import"./bucket-11-VzlUN_tG.js";import"./Text-BKVLrozK.js";import"./devtools-DfKI38aY.js";import"./TableRow-bJblJQR1.js";import"./wrapComponent-DoqHm0qK.js";import"./bucket-1-Di7Dv4UB.js";import"./TableToolbar-D-XVw5Pq.js";import"./bucket-0-DgGA-qIJ.js";import"./index-CdROyjJO.js";import"./ErrorEmptyState-C1rEHoa2.js";import"./EmptyState-Bl9fqBZl.js";import"./EmptyStateV2.deprecated-Ds1d_b0j.js";import"./Link-BwA2TWAV.js";import"./ErrorIllustration-C1i3KJSu.js";import"./useId-BJfoE5r_.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BwXIvFk5.js";import"./NoDataIllustration-BDsfo_8B.js";import"./NotFoundEmptyState-CLlFVYCL.js";import"./NotFoundIllustration-B8XpHc0n.js";import"./index.esm-CRzRCy5C.js";import"./usePreviousValue-BTb-B77j.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-DhHCg6Do.js";import"./useIsomorphicEffect-C3WxPeS7.js";import"./MenuItem-Bd8_llpQ.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DMTLmPWt.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DD-t2lIg.js";import"./index-DtRfS0d4.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./useClickOutside-Dt8Jpb-t.js";import"./AccordionItem-Do-CsFKs.js";import"./index-CFH01y5t.js";import"./LayerContext-BHqy-tts.js";import"./clamp-ekNJC_Xv.js";import"./Search-C5dMMEkN.js";import"./FormContext-BOkH4Ia3.js";import"./bucket-17-CY2a9dUg.js";import"./Checkbox-BKsKyFWP.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-BZ7mSUIs.js";import"./RadioButton-BTGq9aKc.js";import"./DatePicker-DhPa1FcI.js";import"./Dropdown-BQ_2wzrz.js";import"./downshift.esm-CKmaosc4.js";import"./FormGroup-CiGW62au.js";import"./MultiSelect-B33wh34j.js";import"./NumberInput-Cq_mItwW.js";import"./bucket-18-CXNFW6DE.js";import"./RadioButtonGroup-DlBc9YJn.js";import"./index-K68prMtv.js";import"./usePrefersReducedMotion-NQP7UZXs.js";import"./usePresence-Bs4KUcSK.js";import"./ActionSet-BUDcAy3c.js";import"./ButtonSet-D35-9THN.js";import"./InlineLoading-BUwmRQvj.js";import"./bucket-7-DFXPTo5t.js";import"./useWindowResize-CpmXYLhw.js";import"./TagSet-Be2CyfhI.js";import"./Tag-71Cjwhd2.js";import"./DefinitionTooltip-BL8zZUMg.js";import"./DismissibleTag-DYJc7d_g.js";import"./ComposedModal-CHYY0ruW.js";import"./isTopmostVisibleModal-CNMer6m0.js";import"./wrapFocus-D8wRDpML.js";import"./usePortalTarget-BsDIf4KV.js";import"./OperationalTag-CCOUFMZK.js";import"./SkeletonText-ayGDBLzc.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-DrD-cBjm.js";import"./getAnnouncement-BwJDzAQp.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,It={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const G="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=G;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};const kt=["EditableCellUsageStory","InlineEditUsageStory"];export{a as EditableCellUsageStory,o as InlineEditUsageStory,kt as __namedExportsOrder,It as default};
//# sourceMappingURL=EditableCell.stories-CD_0sttd.js.map
