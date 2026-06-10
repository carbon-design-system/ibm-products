var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ah as v,r as h,p as S}from"./iframe-AQ-BiXqb.js";import{s as I,m as E,g as b}from"./_storybook-styles-9eVXp3vO.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-m9L8o5yB.js";import{L as u}from"./ListItem-C8jsE4h9.js";import{U as k}from"./UnorderedList-B36GYmY0.js";import{D as c,u as f}from"./useDatagrid-Bl69KB1F.js";import{u as w,a as N}from"./useEditableCell-BC5CA1oD.js";import{c as x}from"./bucket-6-Ch-ncPVP.js";import{T as U}from"./bucket-19-CwFHWh6u.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-aHk5mYoj.js";import"./index-qzm5qFKq.js";import"./index-Fa8k82Av.js";import"./bucket-7-tab54nW3.js";import"./bucket-20-BcR2p0qs.js";import"./index-BSgueVE-.js";import"./index-BADmuj8j.js";import"./props-helper-B9mZyXXv.js";import"./index-BuMBrCGw.js";import"./bucket-11-CY7EUxAY.js";import"./Text-Dsm_R2xh.js";import"./devtools-B5UnDfi3.js";import"./TableRow-CShNNA8y.js";import"./wrapComponent-CyiWSxuX.js";import"./bucket-1-DF2v7-E6.js";import"./TableToolbar-DR2GCL7o.js";import"./bucket-0-CR3j4wIT.js";import"./index-B4M1cy69.js";import"./ErrorEmptyState-BULQ-g-6.js";import"./EmptyState-P3BCljf1.js";import"./EmptyStateV2.deprecated-CO6NzPJC.js";import"./Link-DN5xsnES.js";import"./ErrorIllustration-BGgMKysi.js";import"./useId-BIuPFXmX.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DYfkNhxS.js";import"./NoDataIllustration-fGANT2WQ.js";import"./NotFoundEmptyState-DC3Xri1m.js";import"./NotFoundIllustration-B6NWiMN4.js";import"./index.esm-DRV6XETn.js";import"./usePreviousValue-0TKt-UMc.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-Do33kQkr.js";import"./useIsomorphicEffect-6UMNTwlI.js";import"./MenuItem-MpOKSCPJ.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-UOIHoVe3.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BkXCH9yg.js";import"./index-ytLdzjrr.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-E7WLw_zC.js";import"./AccordionItem-Wfk2S72t.js";import"./index-BqjEa5xh.js";import"./LayerContext-XFxZ9wyv.js";import"./clamp-ekNJC_Xv.js";import"./Search-DBptsoHk.js";import"./FormContext-D-Seu0q0.js";import"./bucket-16-BGUoj5XK.js";import"./Checkbox-xcGS3ZaG.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-BnR5QOMF.js";import"./RadioButton-DwflTQNc.js";import"./DatePicker-DfF6dxA2.js";import"./Dropdown-Dx5BSpjE.js";import"./downshift.esm-ChF4f0t9.js";import"./FormGroup-gqlUTVoT.js";import"./MultiSelect-KiIHh3Qe.js";import"./NumberInput-DrqcwUKg.js";import"./bucket-17-CAM4_o7B.js";import"./RadioButtonGroup-CYw4GU3v.js";import"./index-ZKW0is5F.js";import"./usePrefersReducedMotion-RXqdn_5B.js";import"./usePresence-BB6vzuSY.js";import"./ActionSet-CPJK-4Zj.js";import"./ButtonSet-DxHfgiWq.js";import"./InlineLoading-C_kEiLlS.js";import"./useWindowResize-D9jPf5aG.js";import"./TagSet-DnPI4ohe.js";import"./Tag-CFFUxQ8H.js";import"./DefinitionTooltip--5fW-VE2.js";import"./DismissibleTag-Dd9fQNta.js";import"./ComposedModal-DmVWaX7l.js";import"./toggleClass-nCY9tTpf.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-BuLK8cQJ.js";import"./usePortalTarget-B4MSwqBR.js";import"./OperationalTag-Bogi5eQu.js";import"./SkeletonText-DEOxQPSp.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-6KNOz_JO.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-B5WijUtM.js.map
