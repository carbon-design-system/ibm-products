var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ai as v,r as h,p as S}from"./iframe-DVd9vcGU.js";import{s as I,m as E,g as b}from"./_storybook-styles-ClmxIQN4.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-SaYqTvxf.js";import{L as u}from"./ListItem-DWvqiAGk.js";import{U as k}from"./UnorderedList-NCUooYTb.js";import{D as c,u as f}from"./useDatagrid-CAa5hjCc.js";import{u as w,a as N}from"./useEditableCell-BM-75PhW.js";import{a as x}from"./bucket-6-D9ar7pnY.js";import{T as U}from"./bucket-20-CIHM76kD.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-Lc-sFvYQ.js";import"./index-DosVcssD.js";import"./index-Cq97S7tC.js";import"./bucket-8-Dl_rElkL.js";import"./bucket-21-Cb3_HMBa.js";import"./index-Dz77PiAH.js";import"./index-Ih54qAyC.js";import"./props-helper-Cgnw3G9k.js";import"./index-DjIFoxIr.js";import"./bucket-11-C-IW6PGm.js";import"./Text-DV9-Mjr0.js";import"./devtools-BesH-HZp.js";import"./TableRow-CgClCd0w.js";import"./wrapComponent-CicVNMae.js";import"./bucket-1-CZRk4HMw.js";import"./TableToolbar-GC5XT35H.js";import"./bucket-0-DsQIryCB.js";import"./index-B5TJhcrb.js";import"./ErrorEmptyState-QGanbPXz.js";import"./EmptyState-C2SaV9KJ.js";import"./EmptyStateV2.deprecated-CZDn3IWx.js";import"./Link-BCdmVRNe.js";import"./ErrorIllustration-BM5WNbL5.js";import"./useId-RUxCmBgx.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DOVTIfms.js";import"./NoDataIllustration-fQdYcZux.js";import"./NotFoundEmptyState-DwYeMqys.js";import"./NotFoundIllustration-CbojNdZ-.js";import"./index.esm-DmtK06k7.js";import"./usePreviousValue-B_kjVhIW.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-5neUPqpH.js";import"./useIsomorphicEffect-CAlWORU7.js";import"./MenuItem-D6sgJ7Iz.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-ClE4WXq0.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CUgugIkH.js";import"./index-BRUgpDB1.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./useClickOutside-DgJ2YNoK.js";import"./AccordionItem-CFGsfYP-.js";import"./index-Bx67NhBX.js";import"./LayerContext-MpoPJHNF.js";import"./clamp-ekNJC_Xv.js";import"./Search-BIGHArsK.js";import"./FormContext-xJEFPa8c.js";import"./bucket-17-BqoxgkEm.js";import"./Checkbox-B_6sBQMw.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-BuZiZ9rP.js";import"./RadioButton-6TMgNTOZ.js";import"./DatePicker-3LbksUCL.js";import"./Dropdown-CD6M5w_-.js";import"./downshift.esm-7BR03Vpc.js";import"./FormGroup-DEXmcWIZ.js";import"./MultiSelect-yMfQlTZx.js";import"./NumberInput-CiLoRS_t.js";import"./bucket-18-Bd98iWDb.js";import"./RadioButtonGroup-YXPRf8gY.js";import"./index-CwUMjKQR.js";import"./usePrefersReducedMotion-CqwzYxvo.js";import"./usePresence-hXI3boO_.js";import"./ActionSet-ChSdsXmR.js";import"./ButtonSet-YUvtI9UW.js";import"./InlineLoading-Drafgksa.js";import"./bucket-7-B00WowSE.js";import"./useWindowResize-CB81jpwB.js";import"./TagSet-DCFattrI.js";import"./Tag-CrD9CEIo.js";import"./DefinitionTooltip-DXeHSrLD.js";import"./DismissibleTag-B08-dPcV.js";import"./ComposedModal-Kuqffqwp.js";import"./isTopmostVisibleModal--B4sDzjk.js";import"./wrapFocus-CVUKykfF.js";import"./usePortalTarget-C713aW1o.js";import"./OperationalTag-D8H6EIs0.js";import"./SkeletonText-D02XqRRI.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-CTJ6ODQn.js";import"./getAnnouncement-BwJDzAQp.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-Bs9Mmh8W.js.map
