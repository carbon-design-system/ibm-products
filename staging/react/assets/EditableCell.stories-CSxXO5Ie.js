var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ah as v,r as h,p as S}from"./iframe-BJfS6TR2.js";import{s as I,m as E,g as b}from"./_storybook-styles-CsZIYQly.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-D4LYLEbt.js";import{L as u}from"./ListItem-D_5KEFDh.js";import{U as k}from"./UnorderedList-3N2gioH1.js";import{D as c,u as f}from"./useDatagrid-BjvV3w6s.js";import{u as w,a as N}from"./useEditableCell-i82oqzp8.js";import{c as x}from"./bucket-6-CBfFKy_q.js";import{T as U}from"./bucket-19-eqggub-2.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-DhZwl8wu.js";import"./index-BK1usqqk.js";import"./index-Nx5-3yW_.js";import"./bucket-7-DIXVgq6-.js";import"./bucket-20-BhP_pvjx.js";import"./index-DOO-jicJ.js";import"./index-CuTIbJIS.js";import"./props-helper-UsuoU5_v.js";import"./index-BzZ4otBc.js";import"./bucket-11-BjxSF1GP.js";import"./Text-BAQNTtEB.js";import"./devtools-BK-O6ZTi.js";import"./TableRow-TlgpVL6c.js";import"./wrapComponent-BpQufo1H.js";import"./bucket-1-vs56S9m2.js";import"./TableToolbar-BceUArDV.js";import"./bucket-0-BBoKauOS.js";import"./index-KMgszfVD.js";import"./ErrorEmptyState-DmuCLqR9.js";import"./EmptyState-BJFFYpPp.js";import"./EmptyStateV2.deprecated-CieHXddP.js";import"./Link-CNXNhgnO.js";import"./ErrorIllustration-BaeIbMnO.js";import"./useId-BlGB52Z5.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-CRgjdabu.js";import"./NoDataIllustration-B8wtSbgZ.js";import"./NotFoundEmptyState-t4bmz1RH.js";import"./NotFoundIllustration-DgKJ5ZZ0.js";import"./index.esm-CesEQXCt.js";import"./usePreviousValue-DQPoWaqB.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-Uv70ZBHr.js";import"./useIsomorphicEffect-D83N95Px.js";import"./MenuItem-Dt_IACOd.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-B-fu5Ypa.js";import"./environment-DRRHKtsv.js";import"./useControllableState-CLNdWP-M.js";import"./index-fQVM-pDZ.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-BGFb35wr.js";import"./AccordionItem-D8lGaxc5.js";import"./index-OuOVqiZr.js";import"./LayerContext-C_9YIeQ1.js";import"./clamp-ekNJC_Xv.js";import"./Search-D49GRVyn.js";import"./FormContext-B_fBxqkl.js";import"./bucket-16-Bm6OjJGX.js";import"./Checkbox-BFqI0_a0.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-BJ2U48Lt.js";import"./RadioButton-CCBl_L8V.js";import"./DatePicker-DUD_Ubtr.js";import"./Dropdown-DclHGyF9.js";import"./downshift.esm-C6-stRtx.js";import"./FormGroup-CeUYGdmJ.js";import"./MultiSelect-D3IoP4yS.js";import"./NumberInput-mZahYnrz.js";import"./bucket-17-2KFt3nNe.js";import"./RadioButtonGroup-HCk42cWa.js";import"./index-CvqQxeu_.js";import"./usePrefersReducedMotion-BOp5LYbx.js";import"./usePresence-Bu42Jyf1.js";import"./ActionSet-B6j7E-P6.js";import"./ButtonSet-CgqU260_.js";import"./InlineLoading-DED7OqEE.js";import"./useWindowResize-Di3iKAIh.js";import"./TagSet-1TrNE7Gc.js";import"./Tag-DkToHj7W.js";import"./DefinitionTooltip-DIKStf7i.js";import"./DismissibleTag-CLmPSkgn.js";import"./ComposedModal-C3MAqUaA.js";import"./toggleClass-CDv8h4ly.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-Dh3S89fz.js";import"./usePortalTarget-B9YhKQuY.js";import"./OperationalTag-BdqsdZ_P.js";import"./SkeletonText-8lW9XFPH.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-Bqce9gmv.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-CSxXO5Ie.js.map
