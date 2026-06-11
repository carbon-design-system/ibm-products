var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ah as v,r as h,p as S}from"./iframe-DjhatwYN.js";import{s as I,m as E,g as b}from"./_storybook-styles-Cq5yozWn.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-Yb2dIbo1.js";import{L as u}from"./ListItem-Dh30hci0.js";import{U as k}from"./UnorderedList-CFxHi27w.js";import{D as c,u as f}from"./useDatagrid-Y-PawOrl.js";import{u as w,a as N}from"./useEditableCell-YvVCAO7W.js";import{c as x}from"./bucket-6-BheI4vap.js";import{T as U}from"./bucket-19-DIg4M51W.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CDb9kUsn.js";import"./index-owJ4jz1M.js";import"./index-DcoRJSfi.js";import"./bucket-7-DzUCZQqj.js";import"./bucket-20-D8k5DkrN.js";import"./index-BhXR5zYT.js";import"./index-DEsaE2yn.js";import"./props-helper-Cqqcv9Dj.js";import"./index-Ct_YEOIO.js";import"./bucket-11-DJ8uVGMJ.js";import"./Text-BaETmR7U.js";import"./devtools-Dn6AC_oR.js";import"./TableRow-CQQKux7j.js";import"./wrapComponent-BJDnhPAl.js";import"./bucket-1-DV6WRrpg.js";import"./TableToolbar-DSG04oBe.js";import"./bucket-0-B2i1_Gfd.js";import"./index-B440oqQp.js";import"./ErrorEmptyState-DbnPn74W.js";import"./EmptyState-CgXbf1T_.js";import"./EmptyStateV2.deprecated-B0ZqDIqG.js";import"./Link-BvFMN3La.js";import"./ErrorIllustration-BpfOr-h5.js";import"./useId-BEl_syO7.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-CBLKbgG4.js";import"./NoDataIllustration-DpmB-7Fu.js";import"./NotFoundEmptyState-CxB0EMTX.js";import"./NotFoundIllustration-C5hpLchS.js";import"./index.esm-ChKKjNg5.js";import"./usePreviousValue-Cqtyehn-.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-CZwRZha8.js";import"./useIsomorphicEffect-z7MnJin8.js";import"./MenuItem-AiQT_bx9.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CiypQ9pG.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BDHtwbPd.js";import"./index-DZGnyKhd.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-D9tgg4mq.js";import"./AccordionItem-9hnoGIT2.js";import"./index-CAyd05U7.js";import"./LayerContext-C8LqyRYa.js";import"./clamp-ekNJC_Xv.js";import"./Search-DYgJ0ULE.js";import"./FormContext-BMDfFsRX.js";import"./bucket-16-CDb8Xiex.js";import"./Checkbox-HeyXaFW2.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-DpdCEWIZ.js";import"./RadioButton-BiPmwXj5.js";import"./DatePicker-rIlixyCW.js";import"./Dropdown-8jOeisn5.js";import"./downshift.esm-CM8vMYzw.js";import"./FormGroup-Ce2MYPCK.js";import"./MultiSelect-DUcHhZt6.js";import"./NumberInput-Cfu3bQhE.js";import"./bucket-17-B8jXhyJH.js";import"./RadioButtonGroup-PGaCu7Ix.js";import"./index-CowYo_RF.js";import"./usePrefersReducedMotion-gWsl8x-8.js";import"./usePresence-Dm24K1ni.js";import"./ActionSet-ddlXAvmX.js";import"./ButtonSet-Brqzjdle.js";import"./InlineLoading-GFCyMXpZ.js";import"./useWindowResize-BLjP8SSz.js";import"./TagSet-DbX5RlwW.js";import"./Tag-BNEOudzH.js";import"./DefinitionTooltip-CtDR--kN.js";import"./DismissibleTag-CJGNo0d6.js";import"./ComposedModal-B_P_c2C_.js";import"./toggleClass-blI8iiAX.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CXSYhBnP.js";import"./usePortalTarget-CNcdiaVp.js";import"./OperationalTag-GoF5PrRB.js";import"./SkeletonText-C2So6Znj.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-BMsCTW8X.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-C-Yb5TbC.js.map
