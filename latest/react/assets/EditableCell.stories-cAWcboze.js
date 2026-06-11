var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ah as v,r as h,p as S}from"./iframe-jZWG66li.js";import{s as I,m as E,g as b}from"./_storybook-styles-DQmcUGty.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-BA_rJn9b.js";import{L as u}from"./ListItem-CzNhp1B0.js";import{U as k}from"./UnorderedList-BBBaqYKc.js";import{D as c,u as f}from"./useDatagrid-DGZSGfkU.js";import{u as w,a as N}from"./useEditableCell-55NK-WLX.js";import{c as x}from"./bucket-6-B2oAEAOa.js";import{T as U}from"./bucket-19-C2-W5HiT.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DWg0M4zV.js";import"./index-DCIajyCT.js";import"./index-CCsGhLAA.js";import"./bucket-7-BnXe9N7L.js";import"./bucket-20-B4uFpGKw.js";import"./index-6T0vZPV_.js";import"./index-CuevfKHt.js";import"./props-helper-CbiDXG5b.js";import"./index-Z6m9g-52.js";import"./bucket-11-COakLyM2.js";import"./Text-MAmnaD9H.js";import"./devtools-BmJuPbq5.js";import"./TableRow-bu7b4jFm.js";import"./wrapComponent-5SlpXrna.js";import"./bucket-1-obTWIw3W.js";import"./TableToolbar-CIVXDIRc.js";import"./bucket-0-BUOyFyAa.js";import"./index-CU2Cp-Qy.js";import"./ErrorEmptyState-ccL9vG-i.js";import"./EmptyState-BlR4Nsbn.js";import"./EmptyStateV2.deprecated-U9meRsNh.js";import"./Link-BaBq1H2r.js";import"./ErrorIllustration-C9Woy6Fk.js";import"./useId-JX4wW7oP.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Bv-uFGYy.js";import"./NoDataIllustration-CxC2KFrP.js";import"./NotFoundEmptyState-D2hzckZD.js";import"./NotFoundIllustration-i8u3e8N5.js";import"./index.esm-CHdbjm7i.js";import"./usePreviousValue-D4uAI8q0.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-CUi1ZAI7.js";import"./useIsomorphicEffect-z083cbHj.js";import"./MenuItem-Lljj5Fo2.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-BeNbWoPS.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BmJIAqes.js";import"./index-BC9wVj-F.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-7ucsBNQJ.js";import"./AccordionItem-h3Mh0u-I.js";import"./index-Cn2PStIV.js";import"./LayerContext-CrUnT_W9.js";import"./clamp-ekNJC_Xv.js";import"./Search-C4wa9sxa.js";import"./FormContext-B4fMb7EG.js";import"./bucket-16-CseOxs48.js";import"./Checkbox-DUQsMQT9.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-C0p8WdxS.js";import"./RadioButton-BQR-_K1h.js";import"./DatePicker-tgfwm5gv.js";import"./Dropdown-GlAaBZLC.js";import"./downshift.esm-CAnJLABz.js";import"./FormGroup-aoqbWizZ.js";import"./MultiSelect-DZDC_2bl.js";import"./NumberInput-Diyyy3Ee.js";import"./bucket-17-BzsmRjq1.js";import"./RadioButtonGroup-WGqFPEq4.js";import"./index-DHzaXPYB.js";import"./usePrefersReducedMotion-CRRztKqh.js";import"./usePresence-Bng06AQO.js";import"./ActionSet-YWQ5N7Ld.js";import"./ButtonSet-B1bJuNqr.js";import"./InlineLoading-4R9NdHX-.js";import"./useWindowResize-Dk_ftXAg.js";import"./TagSet-EgBIxw0F.js";import"./Tag-BLpsojOG.js";import"./DefinitionTooltip-DcS0yaKE.js";import"./DismissibleTag-BAMetvFG.js";import"./ComposedModal-XylCDvoO.js";import"./toggleClass-Ne6eOh2U.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-DtUmgvSF.js";import"./usePortalTarget-Bt1p0OSJ.js";import"./OperationalTag-DOJqGKst.js";import"./SkeletonText-unH21SdB.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-Co1OI2vS.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-cAWcboze.js.map
