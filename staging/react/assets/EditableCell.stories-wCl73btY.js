var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ai as v,r as h,p as S}from"./iframe-i4lJGu2h.js";import{s as I,m as E,g as b}from"./_storybook-styles-DOIHqlmt.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-Dm3GaVbd.js";import{L as u}from"./ListItem-ijJEWp_g.js";import{U as k}from"./UnorderedList-DxZllIjg.js";import{D as c,u as f}from"./useDatagrid-D7TpuVBW.js";import{u as w,a as N}from"./useEditableCell-C_v61bHs.js";import{a as x}from"./bucket-6-NtPkENmD.js";import{T as U}from"./bucket-20-ClQuJJZQ.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DJJpuEQA.js";import"./index-CNgPc1KL.js";import"./index-BhFkI0cE.js";import"./bucket-8-Dl6tDtDl.js";import"./bucket-21-CNxINDYf.js";import"./index-BXEtw4Jg.js";import"./index-C4Zj7t-u.js";import"./props-helper-ktKsHiYb.js";import"./index-CPX_YDDd.js";import"./bucket-11-D-Y7JHJg.js";import"./Text-Beop0pyf.js";import"./devtools-BVSjn6-P.js";import"./TableRow-DtotDZLx.js";import"./wrapComponent-D_MMWsF8.js";import"./bucket-1-ZTiTYh2G.js";import"./TableToolbar-BnYFRTwg.js";import"./bucket-0-Y-gCa3AL.js";import"./index-lHmXBgQY.js";import"./ErrorEmptyState-i8FgOA8n.js";import"./EmptyState-Cgf8hglv.js";import"./EmptyStateV2.deprecated-6byZSTJI.js";import"./Link-CJxYz1Zu.js";import"./ErrorIllustration-Bd61ygpe.js";import"./useId-CU-AzrlT.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-7jEoXZXg.js";import"./NoDataIllustration-BAppWnJA.js";import"./NotFoundEmptyState-DNzYYn1f.js";import"./NotFoundIllustration-DjR8paQ6.js";import"./index.esm-Ds2azPFr.js";import"./usePreviousValue-Ct5Dt6pM.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-CCIOUN8K.js";import"./useIsomorphicEffect-Z--hJSZ8.js";import"./MenuItem-BglKA2rA.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DDPRo2A0.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BzYQcoyp.js";import"./index-D7O6qqfZ.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./useClickOutside-BZVj4d2e.js";import"./AccordionItem-2x0kiVSn.js";import"./index-BIVY5pTa.js";import"./LayerContext-Bd5U9gUC.js";import"./clamp-ekNJC_Xv.js";import"./Search-Cg3N8lHe.js";import"./FormContext-DWpfzSnB.js";import"./bucket-17-VSt7x90e.js";import"./Checkbox-CflZQwF_.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-BhTqP7ia.js";import"./RadioButton-XkIQdU_Z.js";import"./DatePicker-BAgk0Kge.js";import"./Dropdown-WGVTE-Kt.js";import"./downshift.esm-XI7SrJa1.js";import"./FormGroup-p4RN-TMw.js";import"./MultiSelect-CDzzdBVs.js";import"./NumberInput-CjolfbFG.js";import"./bucket-18-CO1y8u8q.js";import"./RadioButtonGroup-CrdTgPeh.js";import"./index-B1Vuu76l.js";import"./usePrefersReducedMotion-DngSLEk2.js";import"./usePresence-wtJ-Pwta.js";import"./ActionSet-C8-CN-Qq.js";import"./ButtonSet-B2RkLua3.js";import"./InlineLoading-CWI5pVJm.js";import"./bucket-7-D13TTfCT.js";import"./useWindowResize-CsBfTC56.js";import"./TagSet-C8TN5TD5.js";import"./Tag-B93tQ9a2.js";import"./DefinitionTooltip-Pe1xRFXF.js";import"./DismissibleTag-72xv6LCI.js";import"./ComposedModal-B_dkAzs0.js";import"./isTopmostVisibleModal-B-3BHaLZ.js";import"./wrapFocus-D75OU94c.js";import"./usePortalTarget-CoiY1Qgy.js";import"./OperationalTag-CMjr6iAM.js";import"./SkeletonText-yI54trfy.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-CT6ZopRG.js";import"./getAnnouncement-BwJDzAQp.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-wCl73btY.js.map
