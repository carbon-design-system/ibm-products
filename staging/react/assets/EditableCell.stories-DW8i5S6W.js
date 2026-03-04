var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{e,S as v,r as h,p as S}from"./iframe-LiaStyBs.js";import{s as I,m as E,g as b}from"./_storybook-styles-X5-Ocyog.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-a7f_GU-c.js";import{L as u}from"./ListItem-AkgvI9I9.js";import{U as k}from"./UnorderedList-CdjAg9L9.js";import{D as c,u as f}from"./useDatagrid-Ds3RzIxi.js";import{u as w,a as N}from"./useEditableCell-BpD4jkfZ.js";import{E as x}from"./bucket-6-kYy7D16T.js";import{T as U}from"./bucket-18-Zs2TZmFD.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CvyymruN.js";import"./index-4--JecgM.js";import"./index-BVtb6FYG.js";import"./bucket-19-B-wN5ejR.js";import"./bucket-7-f1_emcWj.js";import"./index-DfDfPw4n.js";import"./index-D-KFmUce.js";import"./props-helper-BjdYyuO_.js";import"./index-DAjxk3HL.js";import"./bucket-10-iwuYBZPZ.js";import"./Text-CexaJYDP.js";import"./devtools-CUjvjodF.js";import"./TableRow-DFkLvb9L.js";import"./wrapComponent-_sXs07Ar.js";import"./utils-_nXq7M9N.js";import"./bucket-1-BUo40C5c.js";import"./TableToolbar-Kyjg0LnE.js";import"./bucket-0-Cgu_CioR.js";import"./index-CE4j8fAC.js";import"./ErrorEmptyState-CFsB9zQB.js";import"./EmptyState-DwxAjOaS.js";import"./EmptyStateV2.deprecated-CkeZ0stL.js";import"./Link-DjfPrp2-.js";import"./ErrorIllustration-BGTJbIjL.js";import"./useId-Ot11TkSk.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-BdTbLK8A.js";import"./NoDataIllustration-BldMLTTC.js";import"./NotFoundEmptyState-D2dR4Fry.js";import"./NotFoundIllustration-C2L-Rmcs.js";import"./index.esm-DcU8uWQZ.js";import"./usePreviousValue-D7gue4nV.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-VSpjG3EC.js";import"./useIsomorphicEffect-DAk8_5ES.js";import"./MenuItem-C-MCSwx-.js";import"./useControllableState-DbUlKvzw.js";import"./useAttachedMenu-DPXvWdxJ.js";import"./environment-DRRHKtsv.js";import"./defaultItemToString-DDHghiWu.js";import"./index-DM1lKnXz.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-cI5lq6Qk.js";import"./AccordionItem-aRtwn8aw.js";import"./Search-C91_18w-.js";import"./FormContext-nVLDpaU3.js";import"./bucket-15-BYmdFG7n.js";import"./index-B9Zh2qAg.js";import"./LayerContext-Cg_WEBvk.js";import"./clamp-ekNJC_Xv.js";import"./Checkbox-rx6HGWZq.js";import"./DatePicker-DpYfDFBN.js";import"./useNormalizedInputProps-_C0ZGaZw.js";import"./documentLang-E105Y72C.js";import"./Dropdown-Bkdo5nJw.js";import"./index-DOxiW0Es.js";import"./FormGroup-CjwI_7Hs.js";import"./MultiSelect-DhOyh4gQ.js";import"./NumberInput-Oez7I6Kc.js";import"./bucket-17-BMdERR9P.js";import"./RadioButton-CzBD7vee.js";import"./RadioButtonGroup-Dxl-Sc9y.js";import"./usePrefersReducedMotion-DbbjPPrU.js";import"./usePresence-C8LCYL8t.js";import"./ActionSet-CSFjceeU.js";import"./ButtonSet-C_7Ys9Uu.js";import"./InlineLoading-Da6JDjkJ.js";import"./useWindowResize-D-7rIa0c.js";import"./TagSet-DTx2UZg3.js";import"./Tag-CTKCPFlt.js";import"./DefinitionTooltip-Qd5lxvh4.js";import"./DismissibleTag-D0B_d-j7.js";import"./ComposedModal-75vYZ7oq.js";import"./requiredIfGivenPropIsTruthy-DakX99Et.js";import"./wrapFocus-DA3E1wc8.js";import"./usePortalTarget-BfnCHncQ.js";import"./OperationalTag-BdQDQO1K.js";import"./SkeletonText-BL3QqUnU.js";import"./bucket-16-B705s3uU.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-DzZZsaPG.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,vt={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const G="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=G;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
//# sourceMappingURL=EditableCell.stories-DW8i5S6W.js.map
