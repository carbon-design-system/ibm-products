var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ag as v,r as h,p as S}from"./iframe-O9B_Dp_t.js";import{s as I,m as E,g as b}from"./_storybook-styles-Cn0XBeBy.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-DDSLd-hx.js";import{L as u}from"./ListItem-DpWIRCHh.js";import{U as k}from"./UnorderedList-_SEd9-3M.js";import{D as c,u as f}from"./useDatagrid-PqmLu7as.js";import{u as w,a as N}from"./useEditableCell-BlSr9E2Z.js";import{a as x}from"./bucket-6-yuMI_qTT.js";import{T as U}from"./bucket-19-DfaBoN51.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-BoI_oxUl.js";import"./index-CYLslu2X.js";import"./index-DdvpTaWJ.js";import"./bucket-20-BYEksR4G.js";import"./bucket-7-DJHepK9E.js";import"./index-duGjeEIv.js";import"./index-BE__AMQR.js";import"./props-helper-BNJB8r1t.js";import"./index-GwsjooZe.js";import"./bucket-11-py4a9st7.js";import"./bucket-21-D-SZI-qq.js";import"./Text-CD4MWSZF.js";import"./devtools-C5uvsY8l.js";import"./TableRow-ByBm-ez8.js";import"./wrapComponent-B40Kt4X1.js";import"./bucket-1-hLZTjQRY.js";import"./TableToolbar-CONxneD5.js";import"./bucket-0-BR4TyOdb.js";import"./index-VOpjc0lr.js";import"./ErrorEmptyState-UJe-oKPb.js";import"./EmptyState-BJDC8xJW.js";import"./EmptyStateV2.deprecated-DKiSfpaI.js";import"./Link-Bkxzc5gt.js";import"./ErrorIllustration-KKPUYq4z.js";import"./useId-hFMDi7bC.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Brzh9L41.js";import"./NoDataIllustration-BjqfM6Qb.js";import"./NotFoundEmptyState-BIu5k_0z.js";import"./NotFoundIllustration-DyE7UJ4T.js";import"./index.esm-B4WzpKDx.js";import"./usePreviousValue-Fp3wVgvE.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-CCIbpI42.js";import"./useIsomorphicEffect-B_0rKcAy.js";import"./MenuItem-Ch4QZlhC.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-WO9d_haf.js";import"./environment-DRRHKtsv.js";import"./useControllableState-AOOae36a.js";import"./index-DzB4OZpy.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-CyqzWiRF.js";import"./AccordionItem-Cyeq-pVU.js";import"./index-D__qcsVc.js";import"./LayerContext-Bct4nWnc.js";import"./clamp-ekNJC_Xv.js";import"./Search-2gH7qaYi.js";import"./FormContext-DFINhmTx.js";import"./bucket-16-5JPlgjIq.js";import"./Checkbox-BKgbWAAX.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-ClcHRULe.js";import"./RadioButton-NpdWzYHx.js";import"./DatePicker-CRP3KFEB.js";import"./Dropdown-DDW0po6o.js";import"./downshift.esm-Dz4Ky7hi.js";import"./FormGroup-DuUW4ox8.js";import"./MultiSelect-BNJrOubG.js";import"./NumberInput-kVdzS54w.js";import"./bucket-18-DsaZ136a.js";import"./RadioButtonGroup-y_gN2yqd.js";import"./index-DphEcO7w.js";import"./usePrefersReducedMotion-BixTOlMV.js";import"./usePresence-Bkf5S7MM.js";import"./ActionSet-C8sEoSeX.js";import"./ButtonSet-yR2zg6Pu.js";import"./InlineLoading--VyzWqGo.js";import"./useWindowResize-DGqU049Y.js";import"./TagSet-Cu-1VBil.js";import"./Tag-CPxoJg4V.js";import"./DefinitionTooltip-B8H9u6N3.js";import"./DismissibleTag-CSVTvAcW.js";import"./ComposedModal-i-JPFqjV.js";import"./isTopmostVisibleModal-rfkWZjSo.js";import"./wrapFocus-DSQ_FNNh.js";import"./usePortalTarget-Crqijfut.js";import"./OperationalTag-41dcbxy2.js";import"./SkeletonText-CEa_FvAG.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-BF_7OHAf.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-DSxBW77u.js.map
