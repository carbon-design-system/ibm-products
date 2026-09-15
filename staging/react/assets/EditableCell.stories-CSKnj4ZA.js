var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ai as v,r as h,p as S}from"./iframe-CN5GxhYW.js";import{s as I,m as E,g as b}from"./_storybook-styles-DPTkNyOt.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index--q2shruH.js";import{L as u}from"./ListItem-BSNpES2Y.js";import{U as k}from"./UnorderedList-Cd3QAOfn.js";import{D as c,u as f}from"./useDatagrid-Do1mzOxB.js";import{u as w,a as N}from"./useEditableCell-BMWH8lXZ.js";import{a as x}from"./bucket-6-DHtDR2Ag.js";import{T as U}from"./bucket-20-y6b6UwuS.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-Ba1-mJht.js";import"./index-DSYn1vMq.js";import"./index-CYg9OXdX.js";import"./bucket-8-DiaNSyZb.js";import"./bucket-21-BrCzSrZF.js";import"./index-E33754lX.js";import"./index-BFeqe0Ah.js";import"./props-helper-HULA5OMF.js";import"./index-B7wIBIoV.js";import"./bucket-11-D-bCpMyW.js";import"./Text-Co6YBuGU.js";import"./devtools-CdXbYj-o.js";import"./TableRow-CVIsCxty.js";import"./wrapComponent-D2VWFFhO.js";import"./bucket-1-WAE3b166.js";import"./TableToolbar-CIp64M4P.js";import"./bucket-0-CoX2M9H0.js";import"./index-CT6QfXDz.js";import"./ErrorEmptyState-GJQIfndN.js";import"./EmptyState-DRshmJkd.js";import"./EmptyStateV2.deprecated-Bqfo5gpY.js";import"./Link-CLAEikxt.js";import"./ErrorIllustration-B9gMt3sz.js";import"./useId-C8l2f045.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BehFETME.js";import"./NoDataIllustration-BENu0PAG.js";import"./NotFoundEmptyState-DUQefjcs.js";import"./NotFoundIllustration-Bkgngvju.js";import"./index.esm-CZrVJ6J4.js";import"./usePreviousValue-CrAdM6Zb.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-BbDftPVh.js";import"./useIsomorphicEffect-DOmH7t3h.js";import"./MenuItem-Dbo8zrcE.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CjGjZJ8h.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DlUuHtEk.js";import"./index-DXp9qtLS.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./useClickOutside-ST42z5R-.js";import"./AccordionItem-Cdqzmg-p.js";import"./index-DB40h0fE.js";import"./LayerContext-ceyDb81d.js";import"./clamp-ekNJC_Xv.js";import"./Search-B0thv2O-.js";import"./FormContext-BxWLgyc8.js";import"./bucket-17-D2wZR_Rm.js";import"./Checkbox-CFXwspey.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-DDVLdI9l.js";import"./RadioButton-oUHe2hSs.js";import"./DatePicker-CEdo1Rlq.js";import"./Dropdown-DV6xTivr.js";import"./downshift.esm-DqAWtRY4.js";import"./FormGroup-7uvDXL8E.js";import"./MultiSelect-Cc_dC328.js";import"./NumberInput-D7VT6uSR.js";import"./bucket-18-CdbQNyuD.js";import"./RadioButtonGroup-aG0CKz3E.js";import"./index-t8wrbEZd.js";import"./usePrefersReducedMotion-Dvp1_Qb4.js";import"./usePresence-B6-PTWen.js";import"./ActionSet-BRUzwzrA.js";import"./ButtonSet-CMCk3317.js";import"./InlineLoading-BzS4iPtX.js";import"./bucket-7-ClP0NUKT.js";import"./useWindowResize-CPny2yK7.js";import"./TagSet-CTNisN27.js";import"./Tag-B6E9phzO.js";import"./DefinitionTooltip-BY6nODSV.js";import"./DismissibleTag-R93B7B8p.js";import"./ComposedModal-D1v7ivyj.js";import"./isTopmostVisibleModal-iW97RJzz.js";import"./wrapFocus-Bfo9V0Ng.js";import"./usePortalTarget-BdkRgD5g.js";import"./OperationalTag-D4nbrnjy.js";import"./SkeletonText-mmd4RU53.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-B15_7X2F.js";import"./getAnnouncement-BwJDzAQp.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-CSKnj4ZA.js.map
