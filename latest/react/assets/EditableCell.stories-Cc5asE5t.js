var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,aj as v,r as h,K as S}from"./iframe-BJ3oD3I6.js";import{s as I,m as E,g as b}from"./_storybook-styles-BhHyMEqn.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-C5NSqnDF.js";import{L as u}from"./ListItem-B8FWWMBC.js";import{U as k}from"./UnorderedList-DufAXpuh.js";import{D as c,u as f}from"./useDatagrid-j2eybjsg.js";import{u as w,a as N}from"./useEditableCell-CqwDJsJm.js";import{c as x}from"./bucket-7-BtrbsRa_.js";import{T as U}from"./bucket-20-Vj6m3ER2.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-WHjdTac2.js";import"./index-CfJuWsKG.js";import"./index-FQgPJb5I.js";import"./bucket-8-Dz3t5KtZ.js";import"./bucket-21-_gQwUv_z.js";import"./index-DLvY92-C.js";import"./index-cqtLY_Mv.js";import"./props-helper-CK5SYOfC.js";import"./index-CBMlVf8R.js";import"./bucket-11-0z2EjG9c.js";import"./Text-CKFCb-K0.js";import"./devtools-BnZ9dupT.js";import"./TableRow-C-ldmG3n.js";import"./wrapComponent-BcyC-l7S.js";import"./useNoInteractiveChildrenForLabel-BAYLBxXJ.js";import"./bucket-1-Dg1sNCxj.js";import"./TableToolbar-DORkhDCD.js";import"./bucket-0-C8OwWJ6y.js";import"./index-Vu7ywWcs.js";import"./ErrorEmptyState-TNF-6WnQ.js";import"./EmptyState-DSs0V7hZ.js";import"./EmptyStateV2.deprecated-Ci_-072f.js";import"./Link-3VMMPuSQ.js";import"./ErrorIllustration-C1riNF2k.js";import"./useId-kRdbt123.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BXBPKjAZ.js";import"./NoDataIllustration-Bp1Lvqjp.js";import"./NotFoundEmptyState-DJbypX4Q.js";import"./NotFoundIllustration-BlCY_2qG.js";import"./index.esm-ztha_lWk.js";import"./usePreviousValue-iHNgpNoC.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-BZ8dhILb.js";import"./useIsomorphicEffect-hpa23fp6.js";import"./MenuItem-Cgh2v6_2.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-DeDdPkTy.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CD5GBJ5k.js";import"./index-DfcbYHfn.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-DlON_jEx.js";import"./useClickOutside-PugCljFC.js";import"./AccordionItem-BuvKKQeD.js";import"./index-B44qGmzH.js";import"./LayerContext-kZMSrgAm.js";import"./clamp-ekNJC_Xv.js";import"./Search-CLvXAlj3.js";import"./FormContext-v-R-meOx.js";import"./bucket-17-CVaRNrPu.js";import"./Checkbox-DX4eokQ9.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-Bro2iP2D.js";import"./RadioButton-Droun1M7.js";import"./DatePicker-DdQrEiz_.js";import"./Dropdown-Bex3-6T5.js";import"./downshift.esm-Dw2SeZdp.js";import"./FormGroup-DZPOnPUC.js";import"./MultiSelect-B3CIeNWA.js";import"./NumberInput-BkhgkrLm.js";import"./bucket-18-DgJDJTjr.js";import"./RadioButtonGroup-BmRL8z0P.js";import"./index-BfwNYZwD.js";import"./usePrefersReducedMotion-Cw-EfNLC.js";import"./usePresence-B3Vheq_Q.js";import"./ActionSet-BqX89kL9.js";import"./ButtonSet-DHBPfsAD.js";import"./InlineLoading-DnTQB44j.js";import"./useWindowResize-Qim8zABh.js";import"./TagSet-CoFrcysU.js";import"./Tag-Br-1l77w.js";import"./DefinitionTooltip-BYYlk8JF.js";import"./DismissibleTag-G2zsr2Qd.js";import"./ComposedModal-BXLb-sEZ.js";import"./isTopmostVisibleModal-DvUtpNhe.js";import"./wrapFocus-BG8cibfI.js";import"./usePortalTarget-DuEDzpGP.js";import"./OperationalTag-DbTrMxSS.js";import"./SkeletonText-GJ2WUl6u.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-bBELoCr1.js";import"./getAnnouncement-B0n4vXaG.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,It={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const j="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=j;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
//# sourceMappingURL=EditableCell.stories-Cc5asE5t.js.map
