var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ah as v,r as h,p as S}from"./iframe-nyWj9AFG.js";import{s as I,m as E,g as b}from"./_storybook-styles-CquGyz4V.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-_ryPPcar.js";import{L as u}from"./ListItem-BeUiPyjX.js";import{U as k}from"./UnorderedList-DlXVQg9d.js";import{D as c,u as f}from"./useDatagrid-qI7Y6gAh.js";import{u as w,a as N}from"./useEditableCell-CEmEWMzI.js";import{c as x}from"./bucket-6-B-Zq8ItY.js";import{T as U}from"./bucket-19-DESzYyzb.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-BFZsdHKx.js";import"./index-BW3OgNnr.js";import"./index-BfgIMR11.js";import"./bucket-7-Di7sqyQo.js";import"./bucket-20-QNu5uAOp.js";import"./index-DEhvTaG7.js";import"./index-Dsqef-Wi.js";import"./props-helper-Dbiph8mZ.js";import"./index-BHDV3Xfq.js";import"./bucket-11-M89U-8iR.js";import"./Text-ugVjbrM6.js";import"./devtools-bEKes8mp.js";import"./TableRow-DiTRIUG3.js";import"./wrapComponent-BqRQ5VZj.js";import"./bucket-1-CTqwJdcL.js";import"./TableToolbar-6JNcEJEC.js";import"./bucket-0-BEFIQVr3.js";import"./index-CJhEv1XZ.js";import"./ErrorEmptyState-CgXYYCmn.js";import"./EmptyState-Bu0zEo87.js";import"./EmptyStateV2.deprecated-Dk0z7dz9.js";import"./Link-DESAjkNF.js";import"./ErrorIllustration-BMHnyGda.js";import"./useId-BwPKdf4k.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Bn3D65BU.js";import"./NoDataIllustration-kfPyRSyO.js";import"./NotFoundEmptyState-wqsmlPgP.js";import"./NotFoundIllustration-Dr3wHW1m.js";import"./index.esm-BJ6EDc4j.js";import"./usePreviousValue-MbZnQ0tT.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-8ywXsdiU.js";import"./useIsomorphicEffect-DiSxRFeJ.js";import"./MenuItem-Cu0-mTTm.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-B2H7bdhi.js";import"./environment-DRRHKtsv.js";import"./useControllableState-Br8GBSt6.js";import"./index-FUYD_9Sv.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-DFWooBKB.js";import"./AccordionItem-B8Xd1fIV.js";import"./index-Bip5r7cE.js";import"./LayerContext-TY8Rr565.js";import"./clamp-ekNJC_Xv.js";import"./Search-VbXGv_8g.js";import"./FormContext-Ca9jqY9Q.js";import"./bucket-16-0phSzhqh.js";import"./Checkbox-wLWb-MZ1.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-OnrN8UbL.js";import"./RadioButton-C9Giqkfh.js";import"./DatePicker-CD22RHqs.js";import"./Dropdown-BGldWS1M.js";import"./downshift.esm-CL6tmTgM.js";import"./FormGroup-C5czTfBG.js";import"./MultiSelect-0FETypkX.js";import"./NumberInput-DX9r2zsN.js";import"./bucket-17-D7ZRxT5S.js";import"./RadioButtonGroup-CmM8ZIhj.js";import"./index-BKOmZCUq.js";import"./usePrefersReducedMotion-DWvZuShJ.js";import"./usePresence-C_e8iz6y.js";import"./ActionSet-Bb_K9hKd.js";import"./ButtonSet-C1mE44Y9.js";import"./InlineLoading-B7IBbyIF.js";import"./useWindowResize-704ZnHUm.js";import"./TagSet-DBH_9yfg.js";import"./Tag-DueSeaUB.js";import"./DefinitionTooltip-DpYlQa4t.js";import"./DismissibleTag-BNuTHFkk.js";import"./ComposedModal-D66gEHIC.js";import"./toggleClass-A14-NzTB.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-kvvUkrL0.js";import"./usePortalTarget-BKqoXfXv.js";import"./OperationalTag-C8UIsJbz.js";import"./SkeletonText-BXgvJdOL.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-Bqk5MObc.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-CeorWmSt.js.map
