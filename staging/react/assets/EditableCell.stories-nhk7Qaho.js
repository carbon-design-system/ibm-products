var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,aj as v,r as h,K as S}from"./iframe-CxssGfIx.js";import{s as I,m as E,g as b}from"./_storybook-styles-CY_XbBN6.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-DjkjStAw.js";import{L as u}from"./ListItem-X7fZ1h9M.js";import{U as k}from"./UnorderedList-hR8nEzpy.js";import{D as c,u as f}from"./useDatagrid-CPr6hJJH.js";import{u as w,a as N}from"./useEditableCell-C9lszzsV.js";import{c as x}from"./bucket-7-OCU3BT4m.js";import{T as U}from"./bucket-20-BIFULJnx.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-H7mQdMWY.js";import"./index-BYZvoV4K.js";import"./index-CWMOMp-b.js";import"./bucket-8-B1DAz3KR.js";import"./bucket-21-CFosKZLf.js";import"./index-Bdwsx_rX.js";import"./index-BPTEhXTz.js";import"./props-helper-D-zb_sYP.js";import"./index-tJHR7slp.js";import"./bucket-11-B2Q-R7v1.js";import"./Text-D6GWTWaE.js";import"./devtools-C3HuczRY.js";import"./TableRow-DbhO5Wfz.js";import"./wrapComponent-CrasMR3L.js";import"./useNoInteractiveChildrenForLabel-CId5oWH1.js";import"./bucket-1-CkNy3Kt_.js";import"./TableToolbar-Dx95hot_.js";import"./bucket-0-DBjt2rfb.js";import"./index-JCGYHVJY.js";import"./ErrorEmptyState-DJhLUxX0.js";import"./EmptyState-D84R1H2P.js";import"./EmptyStateV2.deprecated-C_R7dExH.js";import"./Link-Bri_k6I9.js";import"./ErrorIllustration-ChQfgfwx.js";import"./useId-lls9HsYP.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-C7nCatF6.js";import"./NoDataIllustration-BB_Vkjym.js";import"./NotFoundEmptyState-Dk5Dun-E.js";import"./NotFoundIllustration-Xq5COnaz.js";import"./index.esm-CYKOhQ5U.js";import"./usePreviousValue-PTJOBmyx.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-Dv8F0UVz.js";import"./useIsomorphicEffect-CNSQVNA3.js";import"./MenuItem-DssvNz9_.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-Bl0tRJ0y.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CnZ18wTe.js";import"./index-mxPy_soy.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./useClickOutside-DqjUKVSs.js";import"./AccordionItem-BFI8pkI9.js";import"./index-DkLxpCKS.js";import"./LayerContext-C_5CgdjX.js";import"./clamp-ekNJC_Xv.js";import"./Search-CmByNr0i.js";import"./FormContext-BjQFomFa.js";import"./bucket-17-BF5Rew1w.js";import"./Checkbox-DO-Rkv4h.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-DzHYawdO.js";import"./RadioButton-ZxPDXvKq.js";import"./DatePicker-sR5wovbE.js";import"./Dropdown-vv2SUzDh.js";import"./downshift.esm-Cs0y05Iw.js";import"./FormGroup-BOye6MYk.js";import"./MultiSelect-DtaGQKAn.js";import"./NumberInput-B3EFQps3.js";import"./bucket-18-B4TYjtzN.js";import"./RadioButtonGroup-DFNS-6gL.js";import"./index-ij_LfqVK.js";import"./usePrefersReducedMotion-BN97V9sh.js";import"./usePresence-DxGA3Xto.js";import"./ActionSet-XEl64wft.js";import"./ButtonSet-DomsQFIK.js";import"./InlineLoading-CDh0dUGZ.js";import"./useWindowResize-DLSTwAYu.js";import"./TagSet-CDI-WSod.js";import"./Tag-BEJB1CTS.js";import"./DefinitionTooltip-VH7_r5IK.js";import"./DismissibleTag-CUYd2fgz.js";import"./ComposedModal-CrYZI3d3.js";import"./isTopmostVisibleModal-DDVMScul.js";import"./wrapFocus-Ci4BaSO3.js";import"./usePortalTarget-CX-Yi4ru.js";import"./OperationalTag-8ibQVkWL.js";import"./SkeletonText-DcEK-pSg.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-CptCPkLT.js";import"./getAnnouncement-B0n4vXaG.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-nhk7Qaho.js.map
