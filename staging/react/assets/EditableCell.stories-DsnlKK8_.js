var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ah as v,r as h,p as S}from"./iframe-ClFYBNZh.js";import{s as I,m as E,g as b}from"./_storybook-styles-CYm7Xc3B.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-CzrkRX71.js";import{L as u}from"./ListItem-BRE7NjpU.js";import{U as k}from"./UnorderedList-BxoWryQb.js";import{D as c,u as f}from"./useDatagrid-CezS7UPn.js";import{u as w,a as N}from"./useEditableCell-B6YhRk0c.js";import{c as x}from"./bucket-6-D62PGvFd.js";import{T as U}from"./bucket-19-CucHOJ3h.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DVXZJZ-O.js";import"./index-tgAZXQBu.js";import"./index-Beu57O9h.js";import"./bucket-7-Bsle6kMV.js";import"./bucket-20-D8sX7iXB.js";import"./index-CfJ6hpiK.js";import"./index-D6ljBPxk.js";import"./props-helper-DgWwr2Da.js";import"./index-whhRlBX_.js";import"./bucket-11-BgvTj1pB.js";import"./Text-C6XdxEq2.js";import"./devtools-DNttzqoV.js";import"./TableRow-C1qLuvNo.js";import"./wrapComponent-a2stfvCz.js";import"./bucket-1-jn5j668n.js";import"./TableToolbar-CztzCmqy.js";import"./bucket-0-35rJUJGZ.js";import"./index-CcR5el_A.js";import"./ErrorEmptyState-BTuw09pr.js";import"./EmptyState-DwmVK-az.js";import"./EmptyStateV2.deprecated-ChCIpEAh.js";import"./Link-_aMG5UC7.js";import"./ErrorIllustration-CGuBFC9N.js";import"./useId-DGUMXYpN.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Bda_YBlm.js";import"./NoDataIllustration-C_RVARvK.js";import"./NotFoundEmptyState-BvfSxdkY.js";import"./NotFoundIllustration-CeRRDgEx.js";import"./index.esm-_Fa7413R.js";import"./usePreviousValue-D0q0-hY4.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-CR1yd8DF.js";import"./useIsomorphicEffect-DsvwjDgP.js";import"./MenuItem-nEeq18Ob.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DRHCR9IE.js";import"./environment-DRRHKtsv.js";import"./useControllableState-D8lkoBJZ.js";import"./index-DAXLuT7F.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-dHWKzXnp.js";import"./AccordionItem-DbO-toAR.js";import"./index-Dxnmtqj_.js";import"./LayerContext-BfozsjrW.js";import"./clamp-ekNJC_Xv.js";import"./Search-DawomRKR.js";import"./FormContext-yoh48WO7.js";import"./bucket-16-BrzprH3l.js";import"./Checkbox-omYaSXWw.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-CXP9BsL8.js";import"./RadioButton-clTtCXbC.js";import"./DatePicker-jX9JrGxa.js";import"./Dropdown-C-EqgeIH.js";import"./downshift.esm-BPMO5akI.js";import"./FormGroup-C7EcKpj4.js";import"./MultiSelect-zHMm9B2b.js";import"./NumberInput-C9wdTJZu.js";import"./bucket-17-DxPJxCfi.js";import"./RadioButtonGroup-CEJ7Q21q.js";import"./index-CGz8e9bG.js";import"./usePrefersReducedMotion-BS6fw3we.js";import"./usePresence-BI-0K1fI.js";import"./ActionSet-BohWKgod.js";import"./ButtonSet-Bp-NMtjD.js";import"./InlineLoading-DApDyR0G.js";import"./useWindowResize-GhNW7zDn.js";import"./TagSet-BwX3wbqa.js";import"./Tag-zJCMRUfq.js";import"./DefinitionTooltip-CVHk_-iQ.js";import"./DismissibleTag-BuAOT_qO.js";import"./ComposedModal-D0NdYhxR.js";import"./toggleClass-Dodvdhmx.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-aIt59QJw.js";import"./usePortalTarget-B0RfQDa2.js";import"./OperationalTag-DQOtOa3-.js";import"./SkeletonText-v76Dysx5.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-EqKAu4Kn.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-DsnlKK8_.js.map
