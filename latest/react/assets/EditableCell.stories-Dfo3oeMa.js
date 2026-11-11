var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,aj as v,r as h,K as S}from"./iframe-CmZeheT6.js";import{s as I,m as E,g as b}from"./_storybook-styles-m-2R2B9T.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-B7iThZXP.js";import{L as u}from"./ListItem-jHpiD5xN.js";import{U as k}from"./UnorderedList-CRDZyxTo.js";import{D as c,u as f}from"./useDatagrid-N56H4v69.js";import{u as w,a as N}from"./useEditableCell-DwrxxJxU.js";import{c as x}from"./bucket-7-CvCQ4FQX.js";import{T as U}from"./bucket-20-C7kq65Sj.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-BRiQQ9US.js";import"./index-B9JydE09.js";import"./index-DFz6yjde.js";import"./bucket-8-COOn61zI.js";import"./bucket-21-KTYeptVo.js";import"./index-BFptVk2g.js";import"./index-C47CQjbS.js";import"./props-helper-ByZt1ChO.js";import"./index-B_DVOlna.js";import"./bucket-11-CB-8MoXe.js";import"./Text-CMDH-C6P.js";import"./devtools-B-HeQd45.js";import"./TableRow-CaaO_Zln.js";import"./wrapComponent-DtisQTy_.js";import"./useNoInteractiveChildrenForLabel-CdyTHLPU.js";import"./bucket-1-Bi0i4V73.js";import"./TableToolbar-CsENfnD2.js";import"./bucket-0-CfKp2P8J.js";import"./index-u1K3GKU6.js";import"./ErrorEmptyState-C5PwzUh2.js";import"./EmptyState-BB3b7Cy6.js";import"./EmptyStateV2.deprecated-MCeLUYFT.js";import"./Link-DMNJzXga.js";import"./ErrorIllustration-D5VvgfMp.js";import"./useId-BQ_kEwCe.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BtTFZCj2.js";import"./NoDataIllustration-ccPm6mQS.js";import"./NotFoundEmptyState-CRqgS0Bs.js";import"./NotFoundIllustration-CQ8nUoRf.js";import"./index.esm-A4ErlNDN.js";import"./usePreviousValue-BjJw38mJ.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-DDMui9ob.js";import"./useIsomorphicEffect-DQ0EsNEL.js";import"./MenuItem-CYvQMTLi.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DSwCvxHn.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BGD6uns2.js";import"./index-C1o99fmS.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./useClickOutside-CGJdzi2p.js";import"./AccordionItem-B5hDylX-.js";import"./index-BUGcLexz.js";import"./LayerContext-oZslXO7m.js";import"./clamp-ekNJC_Xv.js";import"./Search-BD0UeimG.js";import"./FormContext-DNV35YkH.js";import"./bucket-17-BBPjp_HC.js";import"./Checkbox-BGA6wYAD.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-BGRlyean.js";import"./RadioButton-DeeWJA9Y.js";import"./DatePicker-BOsd_Dxb.js";import"./Dropdown-B4tjbMs6.js";import"./downshift.esm-BzDbQhI0.js";import"./FormGroup-8jDNcMfQ.js";import"./MultiSelect-CDF0nNaX.js";import"./NumberInput-Bm1Bf6gU.js";import"./bucket-18-BgC2P19b.js";import"./RadioButtonGroup-CnWPhPT4.js";import"./index-DaSW_oFl.js";import"./usePrefersReducedMotion-BT2bVWL_.js";import"./usePresence-C2Dju66v.js";import"./ActionSet-A8M6YsX4.js";import"./ButtonSet-DHkjwoc0.js";import"./InlineLoading-CqW6qhLd.js";import"./useWindowResize-URRhLwvZ.js";import"./TagSet-BxBgc1Qw.js";import"./Tag-CH7dVAMb.js";import"./DefinitionTooltip-BL-DQGH5.js";import"./DismissibleTag-D5DiXv9m.js";import"./ComposedModal-D_dUPG_t.js";import"./isTopmostVisibleModal-D1SR6nBO.js";import"./wrapFocus-buExbJ95.js";import"./usePortalTarget-rrY8xbyq.js";import"./OperationalTag-Dextsd8i.js";import"./SkeletonText-DwR12Pq2.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-46oqBnWY.js";import"./getAnnouncement-B0n4vXaG.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,It={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const j="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=j;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
//# sourceMappingURL=EditableCell.stories-Dfo3oeMa.js.map
