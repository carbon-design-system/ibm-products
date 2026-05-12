var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{e,S as v,r as h,p as S}from"./iframe-Cyj4LIh5.js";import{s as I,m as E,g as b}from"./_storybook-styles-BfZsCYec.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-N3fdz4ZB.js";import{L as u}from"./ListItem-B4hzwhVV.js";import{U as k}from"./UnorderedList-DygxOoyu.js";import{D as c,u as f}from"./useDatagrid-CVVoMHMT.js";import{u as w,a as N}from"./useEditableCell-CcgPZdC_.js";import{E as x}from"./bucket-6-DL_KxiA5.js";import{T as U}from"./bucket-19-B7hMRFoz.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-hGDgkZDo.js";import"./index-CrQOVYp8.js";import"./index-DbpC7nej.js";import"./bucket-7-Dm8yNK4V.js";import"./bucket-20-Dg4NJRV5.js";import"./index-DQ3i2q7F.js";import"./index-BQHgwKad.js";import"./props-helper-BeW6tFoM.js";import"./index-CIWihwQc.js";import"./bucket-11-Cl123CV8.js";import"./Text-B0E6WkMH.js";import"./devtools-DMaYy3Jo.js";import"./TableRow-me4Jvbcm.js";import"./wrapComponent-CSLQrzVD.js";import"./bucket-1-Bb5Y-ET4.js";import"./TableToolbar-8MyzU2mJ.js";import"./bucket-0-DaAi4Fe5.js";import"./index-DZkQvb7J.js";import"./ErrorEmptyState-BwzerY7y.js";import"./EmptyState-BSFMvmz1.js";import"./EmptyStateV2.deprecated-B8Z-XGEj.js";import"./Link-B2pfHtX8.js";import"./ErrorIllustration-B8vMAyAC.js";import"./useId-CZbCsq9r.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-CQQlat4h.js";import"./NoDataIllustration-DGE3hKFd.js";import"./NotFoundEmptyState-Bo2aMCbn.js";import"./NotFoundIllustration-BnSkb4Jn.js";import"./index.esm-C4umZs2t.js";import"./usePreviousValue-Bjujx9j5.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-YS0buUPl.js";import"./useIsomorphicEffect-CQvdjB27.js";import"./MenuItem-CrhULKEy.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-C2Q1Osuc.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CO01KbI6.js";import"./index-Dvx0FKHV.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-B93TtIXi.js";import"./AccordionItem-BwePvo_9.js";import"./index-vioIMqkQ.js";import"./LayerContext-DFxG2aK0.js";import"./clamp-ekNJC_Xv.js";import"./Search-DwAgCQJ9.js";import"./FormContext-DyuhYneE.js";import"./bucket-16-BokBCq4p.js";import"./Checkbox-DK3hYZIl.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-DwDb6zRU.js";import"./index-BUCxBALq.js";import"./DatePicker-pVaaULEx.js";import"./Dropdown-DFN0MI2V.js";import"./downshift.esm-CJNHbtOw.js";import"./FormGroup-gic93zTi.js";import"./MultiSelect-C2K54h7R.js";import"./NumberInput-CBcnLFy_.js";import"./bucket-17-Bj5oC3tN.js";import"./RadioButtonGroup-DzzMyLRI.js";import"./usePrefersReducedMotion-BgCpKvj3.js";import"./usePresence-CzBXfber.js";import"./ActionSet-DoSddDiM.js";import"./ButtonSet-C5cAYjyA.js";import"./InlineLoading-B1oqkF9D.js";import"./useWindowResize-9pQxPi5j.js";import"./TagSet-Yu_7ogjA.js";import"./Tag-CJ0sxIBB.js";import"./DefinitionTooltip-BE1ILu5m.js";import"./DismissibleTag-25UO8O-0.js";import"./ComposedModal-DytiUj0S.js";import"./toggleClass-BAKBuigj.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-Xv7dNCVp.js";import"./usePortalTarget-Bek0sZsK.js";import"./OperationalTag-BD6ve_XB.js";import"./SkeletonText-BF68X2de.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-BiBOrj07.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-BExbA9LT.js.map
