var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ai as v,r as h,p as S}from"./iframe-DW3-uaTz.js";import{s as I,m as E,g as b}from"./_storybook-styles-Bv7jCdIU.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-BUSpBqQ-.js";import{L as u}from"./ListItem-BCZ2K2jD.js";import{U as k}from"./UnorderedList-DeZr2_0i.js";import{D as c,u as f}from"./useDatagrid-DHhb6scd.js";import{u as w,a as N}from"./useEditableCell-D9yQJ1Xx.js";import{a as x}from"./bucket-6-Ctx0ea3s.js";import{T as U}from"./bucket-20-CUMfyFy6.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-KS0g-5Ga.js";import"./index-CW34tURC.js";import"./index-Dy_AUQjX.js";import"./bucket-8-CN8ZzQUd.js";import"./bucket-21-DsFiX9a0.js";import"./index-BvyZYX1m.js";import"./index-DY_lUEG4.js";import"./props-helper-BH28dCnP.js";import"./index-BpP825dP.js";import"./bucket-11-BZpCy73U.js";import"./Text-9Rf343bW.js";import"./devtools-stAW8lOV.js";import"./TableRow-u4I3hf_3.js";import"./wrapComponent-rla5ju-s.js";import"./bucket-1-CFREfPg1.js";import"./TableToolbar-DjSItkRi.js";import"./bucket-0-D2NgYBkJ.js";import"./index-Bi6NQqEv.js";import"./ErrorEmptyState-DbLibAqt.js";import"./EmptyState-D9VPXWl3.js";import"./EmptyStateV2.deprecated-B5AV6Y_S.js";import"./Link-CKVRvRPw.js";import"./ErrorIllustration-DerATfth.js";import"./useId-BamGQC_a.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-B4ZOFGeU.js";import"./NoDataIllustration-Dqist2eY.js";import"./NotFoundEmptyState-JvYwgCbU.js";import"./NotFoundIllustration-ByJWxne5.js";import"./index.esm-DzNZZkZs.js";import"./usePreviousValue-CejRUetL.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-DofD_Rfz.js";import"./useIsomorphicEffect-BHHWtsVv.js";import"./MenuItem-XPcmGuG-.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CG0WK2n-.js";import"./environment-DRRHKtsv.js";import"./useControllableState-UV5x6JCJ.js";import"./index-DYPizu3b.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./index-B31OZAQa.js";import"./useClickOutside-CicAPxq8.js";import"./AccordionItem-XCPzrN9x.js";import"./index-RJBIqwkc.js";import"./LayerContext-i9ncoyA6.js";import"./clamp-ekNJC_Xv.js";import"./Search-9ZBB_MZB.js";import"./FormContext-BwoMjipg.js";import"./bucket-17-CdLpcUzb.js";import"./Checkbox-Q6xyGRrh.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-tVgXN2Oy.js";import"./RadioButton-CAz8c91J.js";import"./DatePicker-qtkEFZP2.js";import"./Dropdown-CVtr7oND.js";import"./downshift.esm-n6HiXoZA.js";import"./FormGroup-C5SWLcZC.js";import"./MultiSelect-BDkezzOM.js";import"./NumberInput-g1GOHu1h.js";import"./bucket-18-CiWVb8PA.js";import"./RadioButtonGroup-pLyTtHAP.js";import"./index-DyT3xC6X.js";import"./usePrefersReducedMotion-DyYCxLeu.js";import"./usePresence-P-aYr9md.js";import"./ActionSet-CI1hp8Ws.js";import"./ButtonSet-C4e7u8tE.js";import"./InlineLoading-KkV8lkHX.js";import"./bucket-7-Bz-ZWQfx.js";import"./useWindowResize-B_-iyI4p.js";import"./TagSet-D5En6kTT.js";import"./Tag-Cs5GVl_z.js";import"./DefinitionTooltip-Dhsz7ABs.js";import"./DismissibleTag-C_j3X3wP.js";import"./ComposedModal-Ba5IoVe_.js";import"./isTopmostVisibleModal-DsXee8yT.js";import"./wrapFocus-DiwjL0CJ.js";import"./usePortalTarget-Bs4GZfDm.js";import"./OperationalTag-gEqupS_8.js";import"./SkeletonText-C0qE2hkq.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-C9HaK0_f.js";import"./getAnnouncement-BwJDzAQp.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
//# sourceMappingURL=EditableCell.stories-COSuJxCH.js.map
