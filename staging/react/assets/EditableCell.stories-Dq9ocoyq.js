var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{e,S as v,r as h,p as S}from"./iframe-D0YM396L.js";import{s as I,m as E,g as b}from"./_storybook-styles-BxFn0XYC.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-BtyY-4Kl.js";import{L as u}from"./ListItem-rKeC1lAd.js";import{U as k}from"./UnorderedList-CbpE5TnL.js";import{D as c,u as f}from"./useDatagrid-DEP-QSpX.js";import{u as w,a as N}from"./useEditableCell-EQ7JLOn9.js";import{E as x}from"./bucket-6-DBflVpa1.js";import{T as U}from"./bucket-18-eDbIoxck.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-XrGoRIHr.js";import"./index-B9Pud9qF.js";import"./index-sOaB66XM.js";import"./bucket-19-DWCiPMcf.js";import"./bucket-7-BCBSl9It.js";import"./index-BNty9Pww.js";import"./index-BBr64BdR.js";import"./props-helper-pSJPf7kN.js";import"./index-BdUce1Bu.js";import"./bucket-10-C6M5TQxQ.js";import"./bucket-20-CVsPViOq.js";import"./Text-B5bUU6xC.js";import"./devtools-CeMp0EuZ.js";import"./TableRow-4APJjtYd.js";import"./wrapComponent-gTpjNDoB.js";import"./utils-Cdf1ZlrJ.js";import"./bucket-1-vjyamaxx.js";import"./TableToolbar-gFlXPrf-.js";import"./bucket-0-CdeN0Amv.js";import"./index-Demuok-K.js";import"./ErrorEmptyState-D4bluKvF.js";import"./EmptyState-CJZ5iPQC.js";import"./EmptyStateV2.deprecated-BaeGkrHR.js";import"./Link-hAWk4UjX.js";import"./ErrorIllustration-BLL0MN5p.js";import"./useId-C8GwI6Y0.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Cv-WQjou.js";import"./NoDataIllustration-ClYiRGgh.js";import"./NotFoundEmptyState-DDowPQls.js";import"./NotFoundIllustration-B7Hero4C.js";import"./index.esm-D79quNzD.js";import"./usePreviousValue-fX8N9WeB.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-DlF2t09E.js";import"./useIsomorphicEffect-TepxVVef.js";import"./MenuItem-CmpkzDcK.js";import"./useControllableState-DyIY710x.js";import"./useAttachedMenu-Cv__XPlW.js";import"./environment-DRRHKtsv.js";import"./defaultItemToString-DDHghiWu.js";import"./index-Cb3njjzi.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-BQ3qo9kK.js";import"./AccordionItem-CQ_PyidO.js";import"./Search-BgRauPlC.js";import"./FormContext-CRsJl1v9.js";import"./bucket-16-B7-jv19o.js";import"./index-DsE5wpZZ.js";import"./LayerContext-fYtJ8nRu.js";import"./clamp-ekNJC_Xv.js";import"./Checkbox-BeypPpH4.js";import"./DatePicker-p0ADPQbx.js";import"./useNormalizedInputProps-r6tM1s5M.js";import"./documentLang-E105Y72C.js";import"./Dropdown-Bgj29EwO.js";import"./index-0x_rhNbx.js";import"./FormGroup-C33vSMRL.js";import"./MultiSelect-qTQm25UJ.js";import"./NumberInput-BMqnSDi3.js";import"./bucket-17-BIvN5-58.js";import"./RadioButton-BBkdPJXc.js";import"./RadioButtonGroup-CZDaqtyu.js";import"./usePrefersReducedMotion-DuVViLPi.js";import"./usePresence-vDeLheBe.js";import"./ActionSet-CQ7juXA1.js";import"./ButtonSet-C8U0UJ24.js";import"./InlineLoading-BxEXu-mD.js";import"./useWindowResize-HgqZyqR6.js";import"./TagSet-CozPd-jj.js";import"./Tag-HhuYZmna.js";import"./DefinitionTooltip-Ty8Szx8E.js";import"./DismissibleTag-CgY4wkFP.js";import"./ComposedModal-CdFJkbFc.js";import"./usePresenceContext-BJIVOvN0.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-DGGJHyeS.js";import"./usePortalTarget-DdXPgdsp.js";import"./OperationalTag-BjLKvNIg.js";import"./SkeletonText-DVTT-gmP.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-gcM7bkym.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,St={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const G="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=G;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};const It=["EditableCellUsageStory","InlineEditUsageStory"];export{a as EditableCellUsageStory,o as InlineEditUsageStory,It as __namedExportsOrder,St as default};
//# sourceMappingURL=EditableCell.stories-Dq9ocoyq.js.map
