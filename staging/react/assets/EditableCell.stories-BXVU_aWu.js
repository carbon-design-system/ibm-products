var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{e,S as v,r as h,p as S}from"./iframe-BlOC0pA1.js";import{s as I,m as E,g as b}from"./_storybook-styles-DiMO0v3Z.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-CQ8Jar_p.js";import{L as u}from"./ListItem-MBArVUD9.js";import{U as k}from"./UnorderedList-DlsXcXH3.js";import{D as c,u as f}from"./useDatagrid-Dwx8GliQ.js";import{u as w,a as N}from"./useEditableCell-Ce5Tjkob.js";import{E as x}from"./bucket-6-Bhi7puzq.js";import{T as U}from"./bucket-19-D7qwhym0.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CRbSQdfG.js";import"./index-DCjUOJAY.js";import"./index-DM6fwa49.js";import"./bucket-7-xD7wUqDy.js";import"./bucket-20-CeVQz5jy.js";import"./index-BRSs7WF0.js";import"./index-ZE5nj42R.js";import"./props-helper-BJbMNkZu.js";import"./index-BVDl2kOt.js";import"./bucket-11-DrbgTs29.js";import"./Text-Cp4U2L1v.js";import"./devtools-PisD3bve.js";import"./TableRow-BOh--30a.js";import"./wrapComponent-BPO8na_N.js";import"./bucket-1-DZ13MlUN.js";import"./TableToolbar-cOIMpao4.js";import"./bucket-0-CLO8-Rl9.js";import"./index-DeFlcz3Q.js";import"./ErrorEmptyState-BaTb7mbn.js";import"./EmptyState-k_qZ7fhp.js";import"./EmptyStateV2.deprecated-CqyzMhnf.js";import"./Link-HOxydKq1.js";import"./ErrorIllustration-BIkGaqZI.js";import"./useId-BAsTH3YN.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-0Sx3jwuB.js";import"./NoDataIllustration-v9DVrs3T.js";import"./NotFoundEmptyState-DBkNbDym.js";import"./NotFoundIllustration-BK3ud_3o.js";import"./index.esm-ChiHJ2lM.js";import"./usePreviousValue-DO-TURt-.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-DCJzwT7K.js";import"./useIsomorphicEffect-TwSdq75_.js";import"./MenuItem-cg4JmAW_.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-uPzKvwam.js";import"./environment-DRRHKtsv.js";import"./useControllableState-ClGudATx.js";import"./index-GR22jYx8.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-BF22WKkT.js";import"./AccordionItem-Bpd7RSqu.js";import"./index-DNDXHd8F.js";import"./LayerContext-DWkp40hc.js";import"./clamp-ekNJC_Xv.js";import"./Search-DY9yFbDU.js";import"./FormContext-Ct3xSnYs.js";import"./bucket-16-4csj2bYY.js";import"./Checkbox-JLajw0rH.js";import"./RadioButton-fjbJ6SCv.js";import"./useNormalizedInputProps-C1KfNHvX.js";import"./DatePicker-D5gFM-c-.js";import"./Dropdown-1NvCiWax.js";import"./downshift.esm-DbyPiPDQ.js";import"./FormGroup-EW4x_Q9b.js";import"./MultiSelect-C8YPRRM2.js";import"./NumberInput-CGk1Zq7D.js";import"./bucket-17-DulqQMal.js";import"./RadioButtonGroup-CfT_p8cx.js";import"./usePrefersReducedMotion-BHsPT3E9.js";import"./usePresence-Bs15XNld.js";import"./ActionSet-Cr9ov0V5.js";import"./ButtonSet-BlPHxy7J.js";import"./InlineLoading-3LUrVCXD.js";import"./useWindowResize-DSbOKKJC.js";import"./TagSet-C3UCZpmi.js";import"./Tag-7gsWik5w.js";import"./DefinitionTooltip-o9ok-SuY.js";import"./DismissibleTag-BIu91aa9.js";import"./ComposedModal-CT45rnKG.js";import"./toggleClass-CLau3MKB.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-DuZLEN6D.js";import"./usePortalTarget-3tM0TYLb.js";import"./OperationalTag-Bqk5dMc3.js";import"./SkeletonText-CGTa2r3w.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-BUtBumgx.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,yt={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const G="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=G;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};const Tt=["EditableCellUsageStory","InlineEditUsageStory"];export{a as EditableCellUsageStory,o as InlineEditUsageStory,Tt as __namedExportsOrder,yt as default};
//# sourceMappingURL=EditableCell.stories-BXVU_aWu.js.map
