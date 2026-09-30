var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ai as v,r as h,p as S}from"./iframe-5jkWRNEh.js";import{s as I,m as E,g as b}from"./_storybook-styles-CU_Z9zmL.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-AngPHzAI.js";import{L as u}from"./ListItem-3hAP68BK.js";import{U as k}from"./UnorderedList-DBLDcEFo.js";import{D as c,u as f}from"./useDatagrid-Bdosa7Fu.js";import{u as w,a as N}from"./useEditableCell-Ka6zLKvr.js";import{a as x}from"./bucket-6-d10IvogL.js";import{T as U}from"./bucket-20-BYcDF6hY.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-e2HQl4bD.js";import"./index-gOFau5CO.js";import"./index-Cw1uA__0.js";import"./bucket-8-DNalHNjE.js";import"./bucket-21-DYJF9ey-.js";import"./index-LBIrOKRa.js";import"./index-9vjhSHcW.js";import"./props-helper-2UI5cvDZ.js";import"./index-PBlIK6Qh.js";import"./bucket-11-itoPODDR.js";import"./Text-B_fCy4X0.js";import"./devtools-DuzngOKQ.js";import"./TableRow-CkTDzieA.js";import"./wrapComponent-CdGmuyGU.js";import"./bucket-1-B56AecfN.js";import"./TableToolbar-Dxc4veec.js";import"./bucket-0-DvrtaWUS.js";import"./index-B8j0J2OO.js";import"./ErrorEmptyState-xBJpn8tu.js";import"./EmptyState-BXjMeG49.js";import"./EmptyStateV2.deprecated-Br-4fqft.js";import"./Link-B1R8Y2Rj.js";import"./ErrorIllustration-CRo1Vqkn.js";import"./useId-DWD7qQwc.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-D8G1tGe9.js";import"./NoDataIllustration-BAnvpAI2.js";import"./NotFoundEmptyState-Cc7mVNm2.js";import"./NotFoundIllustration-DGXm3WAH.js";import"./index.esm-2ETbwIgG.js";import"./usePreviousValue-VvFEG8mi.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-Ckf-AJW1.js";import"./useIsomorphicEffect-BX6HdFD7.js";import"./MenuItem-1YYX5TLl.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CUhwDBUE.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CRKctoUh.js";import"./index-DeURvHk7.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./useClickOutside-iBq6tHRG.js";import"./AccordionItem-OG_Z-sA5.js";import"./index-DNgIlI9v.js";import"./LayerContext-td5tKO2Z.js";import"./clamp-ekNJC_Xv.js";import"./Search-hh09MH46.js";import"./FormContext-BYFWq4QJ.js";import"./bucket-17-BdkGQe__.js";import"./Checkbox-BmfP8f1v.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-iz9xzucL.js";import"./RadioButton-BO8-GGQs.js";import"./DatePicker-Ll8KEKWx.js";import"./Dropdown-DpUij69A.js";import"./downshift.esm-DC1zVHfe.js";import"./FormGroup-C5dJjHAP.js";import"./MultiSelect-CfrW-6uG.js";import"./NumberInput-Be16yLU_.js";import"./bucket-18-DAftz4nV.js";import"./RadioButtonGroup-m-cjKEFj.js";import"./index-CPomTFJB.js";import"./usePrefersReducedMotion-BwaTEFaO.js";import"./usePresence-CMdXzsnx.js";import"./ActionSet-CqKtgRsG.js";import"./ButtonSet-DKzXdsrO.js";import"./InlineLoading-DD3bClkX.js";import"./bucket-7-C70zxdZ0.js";import"./useWindowResize-EHlqajIg.js";import"./TagSet-DsOK8SBf.js";import"./Tag-0wVfSisJ.js";import"./DefinitionTooltip--SBxwBU8.js";import"./DismissibleTag-CGvrOtNa.js";import"./ComposedModal-CHJ0hYAS.js";import"./isTopmostVisibleModal-Dy_RFvoV.js";import"./wrapFocus-BkgdcWXM.js";import"./usePortalTarget-BJVbcSZv.js";import"./OperationalTag-Bt8LeAyy.js";import"./SkeletonText-XJTyfzut.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-DPDPdJvG.js";import"./getAnnouncement-BwJDzAQp.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-kBSx-_Zi.js.map
