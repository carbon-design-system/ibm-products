var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ag as v,r as h,p as S}from"./iframe-CBbsTnF_.js";import{s as I,m as E,g as b}from"./_storybook-styles-D_DGGZC0.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-D5DSgvqJ.js";import{L as u}from"./ListItem-DtS4PL7R.js";import{U as k}from"./UnorderedList-DBNmh1qW.js";import{D as c,u as f}from"./useDatagrid-maDCLGxE.js";import{u as w,a as N}from"./useEditableCell-De21RxJC.js";import{a as x}from"./bucket-6-B8pT7bnc.js";import{T as U}from"./bucket-19-DoxJ8ShQ.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-qXrxOS5n.js";import"./index-Oq1pl7uZ.js";import"./index-C1ESR1Ui.js";import"./bucket-20-KObgbE_k.js";import"./bucket-7-CVLuGNxZ.js";import"./index-Hq4aV28J.js";import"./index-DxkpgPV8.js";import"./props-helper-BXE8i0Sa.js";import"./index-CJ1hogSx.js";import"./bucket-11-CAdzE9hW.js";import"./bucket-21-DrGVxIti.js";import"./Text-DvTPV9oD.js";import"./devtools-DcyO26L0.js";import"./TableRow-2RRJGBgo.js";import"./wrapComponent-BfqH61zw.js";import"./bucket-1-DWGO8Ltu.js";import"./TableToolbar-BCjtvpMb.js";import"./bucket-0-BlE5zwi6.js";import"./index-C5RwWCjb.js";import"./ErrorEmptyState-vWy6Phzu.js";import"./EmptyState-D1RSj_xx.js";import"./EmptyStateV2.deprecated-D6vjezXi.js";import"./Link-Cg74ZIB3.js";import"./ErrorIllustration-DQgsV9Nr.js";import"./useId-C5RSjPpv.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-DQrQ1D1k.js";import"./NoDataIllustration-DihvEzTG.js";import"./NotFoundEmptyState-lTtYbJwG.js";import"./NotFoundIllustration-hVrbTksX.js";import"./index.esm-Ca7igDRc.js";import"./usePreviousValue-Bmn3UyY9.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-C01tPNC8.js";import"./useIsomorphicEffect-FBsKdk5s.js";import"./MenuItem-CxjDKHmc.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-cJjnJZVN.js";import"./environment-DRRHKtsv.js";import"./useControllableState-s8tjdqa7.js";import"./index-Cqs9Ggoe.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-FPlLjcJi.js";import"./AccordionItem-D3f2cLA2.js";import"./index-BG0xu17i.js";import"./LayerContext-Cr1eioga.js";import"./clamp-ekNJC_Xv.js";import"./Search-DbCw8fhv.js";import"./FormContext-DLYWJRF8.js";import"./bucket-16-BqxRZrGo.js";import"./Checkbox-Bl-HPuOl.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-DI_yvwK9.js";import"./RadioButton-DyY4Y2xv.js";import"./DatePicker-CFvaHhgI.js";import"./Dropdown-DeRJjzuU.js";import"./downshift.esm-DtmY99lK.js";import"./FormGroup-ybXlacIz.js";import"./MultiSelect-DcgSKwcR.js";import"./NumberInput-BsI3Nlz_.js";import"./bucket-18-DjlJOIwU.js";import"./RadioButtonGroup-CCcHBtWc.js";import"./index-D-uKBElP.js";import"./usePrefersReducedMotion-CjSYGGjZ.js";import"./usePresence-LNL47s9e.js";import"./ActionSet-DkdVH1FT.js";import"./ButtonSet-Dl-m46xt.js";import"./InlineLoading-bJ87Jj-C.js";import"./useWindowResize-C72HE7Pn.js";import"./TagSet-CuOSnqCu.js";import"./Tag-DD_Zsd-t.js";import"./DefinitionTooltip-DJCK-c2b.js";import"./DismissibleTag-Cbg0YGSt.js";import"./ComposedModal-COQ2iRaS.js";import"./isTopmostVisibleModal-DZ0C-crR.js";import"./wrapFocus-DCsrfHAe.js";import"./usePortalTarget-Ds0Tr6Rx.js";import"./OperationalTag-D-dk_RBJ.js";import"./SkeletonText-Bovf0oET.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-BFW021n6.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-CJbzVbAe.js.map
