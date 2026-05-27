var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ah as v,r as h,p as S}from"./iframe-Smi5ZmZZ.js";import{s as I,m as E,g as b}from"./_storybook-styles-3FNF8P-H.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-EjOJz7_U.js";import{L as u}from"./ListItem-CeyCpG8H.js";import{U as k}from"./UnorderedList-CLveSIV5.js";import{D as c,u as f}from"./useDatagrid-BH4rLaat.js";import{u as w,a as N}from"./useEditableCell-CHqyIZm1.js";import{c as x}from"./bucket-6-B_hGfOXV.js";import{T as U}from"./bucket-19-CbQ0vYuu.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DT0DkBDy.js";import"./index-BiT27n2A.js";import"./index-DHhCJlCA.js";import"./bucket-7-DHpf5CJh.js";import"./bucket-20-B45IimhC.js";import"./index-BMfALS7O.js";import"./index-D7vacKrU.js";import"./props-helper-CJQJkz-3.js";import"./index-dR_u1LN1.js";import"./bucket-11-oiky0jDC.js";import"./Text-SBGzbUwt.js";import"./devtools-DrPHs2CJ.js";import"./TableRow-CWJODPpR.js";import"./wrapComponent-DlqAkAtf.js";import"./bucket-1-BJs0ZmAn.js";import"./TableToolbar-DfWHqOkh.js";import"./bucket-0-B-y6T4n_.js";import"./index-B-qddijp.js";import"./ErrorEmptyState-DRVIVDKD.js";import"./EmptyState-3rMtDQ2S.js";import"./EmptyStateV2.deprecated-BIOBpvwS.js";import"./Link-BUz5GtLB.js";import"./ErrorIllustration-nlWFYVDy.js";import"./useId-LUtMqxGY.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BlF3QJg7.js";import"./NoDataIllustration-Lle6Azx2.js";import"./NotFoundEmptyState-BXwKTzFW.js";import"./NotFoundIllustration-G79yQj6y.js";import"./index.esm-Csjqds_p.js";import"./usePreviousValue-DN2xOXVl.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-BUEaQv43.js";import"./useIsomorphicEffect-BkZZXn_D.js";import"./MenuItem-sstkDcio.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CTh-pYZB.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BZm7BkIH.js";import"./index-C8_KOQpe.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-DkqFcgxh.js";import"./AccordionItem-DM-OAVRk.js";import"./index-JayCqw4e.js";import"./LayerContext-DDd8mDPp.js";import"./clamp-ekNJC_Xv.js";import"./Search-Cv42ZPNW.js";import"./FormContext-Si0q5ZFN.js";import"./bucket-16-Wz1sRjKg.js";import"./Checkbox-DPK_bDOq.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-Cz-GxF9E.js";import"./index-D0pPhKwU.js";import"./DatePicker-9ho1cbBk.js";import"./Dropdown-uP4sY-nl.js";import"./downshift.esm-7BSB1ZPI.js";import"./FormGroup-ZppHmEqZ.js";import"./MultiSelect-DVv_vDWn.js";import"./NumberInput-BmduIQ3_.js";import"./bucket-17-CuHOvvpQ.js";import"./RadioButtonGroup-C5sqpbM5.js";import"./usePrefersReducedMotion-Bsa7IcZO.js";import"./usePresence-B2tijZ7t.js";import"./ActionSet-BV161E1c.js";import"./ButtonSet-BYPHkzGz.js";import"./InlineLoading-BeH_SHup.js";import"./useWindowResize-CpsicIzW.js";import"./TagSet-DrdXqWLx.js";import"./Tag-CRi3yKTB.js";import"./DefinitionTooltip-BYnr74kg.js";import"./DismissibleTag-FfOmw3Ka.js";import"./ComposedModal-BGvjEUGq.js";import"./toggleClass-DOErXfNU.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-CzDUR3f4.js";import"./usePortalTarget-DeWIJHm2.js";import"./OperationalTag-SktqEXMs.js";import"./SkeletonText-DD2KHMEr.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-DypLyieq.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,Tt={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const G="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=G;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};const vt=["EditableCellUsageStory","InlineEditUsageStory"];export{a as EditableCellUsageStory,o as InlineEditUsageStory,vt as __namedExportsOrder,Tt as default};
//# sourceMappingURL=EditableCell.stories-C-zQq8qw.js.map
