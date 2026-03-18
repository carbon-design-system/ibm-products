var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{e,S as v,r as h,p as S}from"./iframe-DhIv2Cz2.js";import{s as I,m as E,g as b}from"./_storybook-styles-BVRTvy6L.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-CuIaHuuO.js";import{L as u}from"./ListItem-jrYDLQSW.js";import{U as k}from"./UnorderedList-xoXe9ORv.js";import{D as c,u as f}from"./useDatagrid-B3zeFIWJ.js";import{u as w,a as N}from"./useEditableCell-CGdM-lUs.js";import{E as x}from"./bucket-6-gELQZyM7.js";import{T as U}from"./bucket-18-DwSZKhzU.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-bhxorkyk.js";import"./index-d8hsHx5V.js";import"./index-C1b99TSV.js";import"./bucket-19-0ioYX1hu.js";import"./bucket-7-ChCKEQjG.js";import"./index-DR9bEsus.js";import"./index-f0w4ifyk.js";import"./props-helper-CYANkYtB.js";import"./index-CY1gNwRx.js";import"./bucket-10-CR9aY5BR.js";import"./bucket-20-BLUMbjfu.js";import"./Text-OlEmoPCg.js";import"./devtools-KpiUTsjr.js";import"./TableRow-C5W_Ihak.js";import"./wrapComponent-s-x2995U.js";import"./utils-A8kjRMc4.js";import"./bucket-1-D-iSrM3O.js";import"./TableToolbar-DqYbPjpX.js";import"./bucket-0-BqBXgcBa.js";import"./index-4j00D-3u.js";import"./ErrorEmptyState-mRt1sjSG.js";import"./EmptyState-Dl0Eh-O3.js";import"./EmptyStateV2.deprecated-DCC0P_lg.js";import"./Link-CWTaGkXd.js";import"./ErrorIllustration-eb7wH8mX.js";import"./useId-BhAClTZZ.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-LjuXuhO8.js";import"./NoDataIllustration-Cjab4e-M.js";import"./NotFoundEmptyState-_Z9sbgZX.js";import"./NotFoundIllustration-khG64cda.js";import"./index.esm-DzjJIS_2.js";import"./usePreviousValue-Dyx9Q-0l.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-Cm2iF_nj.js";import"./useIsomorphicEffect-DtbzomVA.js";import"./MenuItem-DKMBpR0M.js";import"./useControllableState-fPT1x_Ln.js";import"./useAttachedMenu-DMGjL-WQ.js";import"./environment-DRRHKtsv.js";import"./defaultItemToString-DDHghiWu.js";import"./index-oiVpOFsS.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-BnNyVZrg.js";import"./AccordionItem-6ecSal5g.js";import"./Search-wqPxGHPL.js";import"./FormContext-DAgWiOK8.js";import"./bucket-16-C01d6Qhf.js";import"./index-Du8T86O1.js";import"./LayerContext-FIF-mJpy.js";import"./clamp-ekNJC_Xv.js";import"./Checkbox-uM1nplfy.js";import"./DatePicker-BRoQa0KB.js";import"./useNormalizedInputProps-B_vakQDX.js";import"./documentLang-E105Y72C.js";import"./Dropdown-BF9sC_vw.js";import"./index-BdnD2v1g.js";import"./FormGroup-BRj9ATHy.js";import"./MultiSelect-CiGlk7oX.js";import"./NumberInput-UdoCTq1_.js";import"./bucket-17-Cw9icrIT.js";import"./RadioButton-B3Rhhe_d.js";import"./RadioButtonGroup-CSrmGJ52.js";import"./usePrefersReducedMotion-Db4kU0hj.js";import"./usePresence-BZpvy8rl.js";import"./ActionSet-CRmQzfcZ.js";import"./ButtonSet-B_BXmM1b.js";import"./InlineLoading-Bgh3e9T9.js";import"./useWindowResize-Dh2o6N6s.js";import"./TagSet-BrouRxQ8.js";import"./Tag-SRa8Jkg6.js";import"./DefinitionTooltip-CJc_xAEX.js";import"./DismissibleTag-EjLvQ1zX.js";import"./ComposedModal-iTGiThv_.js";import"./usePresenceContext-93kFRESp.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-5tvSKAzz.js";import"./usePortalTarget-aIXbwh_C.js";import"./OperationalTag-B5aQgm5A.js";import"./SkeletonText-Ctv_2VkX.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-B6nfiovJ.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,St={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const G="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=G;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};const It=["EditableCellUsageStory","InlineEditUsageStory"];export{a as EditableCellUsageStory,o as InlineEditUsageStory,It as __namedExportsOrder,St as default};
//# sourceMappingURL=EditableCell.stories-CoAnlNOt.js.map
