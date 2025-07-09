import{e,r as C}from"./index-DtHxqM--.js";import{a as c}from"./index-B-lxVbXh.js";import{p as w}from"./settings-Bzj6EGPa.js";import{s as x,m as y,g as T}from"./_storybook-styles-eYDJsJfG.js";import{S as N}from"./StoryDocsPage-BlyQ38W4.js";import{A as a}from"./getArgTypes-Ci8wh0IQ.js";import{W as v}from"./index-DG0eOOpU.js";import"./index-4poXP75K.js";import{L as u}from"./ListItem-BNaOEPt2.js";import{U as P}from"./UnorderedList-jCs3W9AF.js";import{D as m,u as I}from"./useDatagrid-BbhmPntb.js";import{u as U,a as _}from"./useEditableCell-BYwomuud.js";import{b as H}from"./bucket-6-DLW23Ky6.js";import{T as A}from"./bucket-17-BL2goobU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./events-CdfZZS3f.js";import"./bucket-2-D37RcJvy.js";import"./index-CVEmjZFv.js";import"./bucket-18-338UTbBD.js";import"./bucket-7-Cjlx_XCo.js";import"./index-B4WvMzTq.js";import"./iframe-wzBMF1p9.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-C5uq5kSZ.js";import"./index-CbYM9rgX.js";import"./props-helper-57MyEezq.js";import"./index-Cr_YAIZY.js";import"./bucket-10-CJixWMOF.js";import"./bucket-19-D8xKEiK4.js";import"./Text-Cjos7Soh.js";import"./devtools-B69Kc3qg.js";import"./feature-flags-eU_vhwbI.js";import"./TableRow-D8ak2P_I.js";import"./wrapComponent-CT2vJnKR.js";import"./utils--12iVJsW.js";import"./bucket-0-C0XwVn_F.js";import"./bucket-1-C6RjXMcc.js";import"./TableToolbar-CjOrY1GR.js";import"./index-2cTe6Fdx.js";import"./ErrorEmptyState-CG5gROe_.js";import"./EmptyState-_x8srpka.js";import"./Link-PvdHJXrE.js";import"./EmptyStateV2-Z6Yzd4Fw.js";import"./ErrorIllustration-BEBPKzV8.js";import"./useId-DyRoBmqU.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-Dp7nSsBw.js";import"./NoDataIllustration-tT-DTbUA.js";import"./NotFoundEmptyState-BdIovFoS.js";import"./NotFoundIllustration-B7q7jydx.js";import"./index.esm-fQjxfktm.js";import"./usePreviousValue-CuNkkQo9.js";import"./inheritsLoose-D3Az7yH5.js";import"./useResizeObserver-CiQvgsPb.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./MenuItem-C71eIvEh.js";import"./useControllableState-P5wT7SAH.js";import"./useAttachedMenu-DN6VGMKt.js";import"./index-B2uEURRZ.js";import"./mergeRefs-91-mP8KM.js";import"./getFocusableElements-BW7cf991.js";import"./index-Bfrl1yb6.js";import"./useClickOutside-DnYoV4Om.js";import"./AccordionItem-BSN9nR-N.js";import"./Search-Dh4hBxPL.js";import"./FormContext-C4Nuixum.js";import"./bucket-15-B3K3_0FD.js";import"./index-BqG52EEo.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./Checkbox-BrqLuRFj.js";import"./DatePicker-hGdxol6v.js";import"./Dropdown-CEnPVNAx.js";import"./index-CK_d43HR.js";import"./FormGroup-TrQxkASF.js";import"./MultiSelect-Ul3YZ_aT.js";import"./NumberInput-CY9fJUbq.js";import"./useNormalizedInputProps-OpqrZ34r.js";import"./documentLang-E105Y72C.js";import"./bucket-16-B0VO6oot.js";import"./RadioButton-CwmiMLVZ.js";import"./RadioButtonGroup-1xQBolgx.js";import"./usePrefersReducedMotion-DvL5kgOM.js";import"./usePresence-DE1zreM1.js";import"./ActionSet-5vkpASfI.js";import"./ButtonSet-A5I0_tvd.js";import"./InlineLoading-WqBhFG3p.js";import"./useWindowResize-CR2_9WVc.js";import"./TagSet-B0x6cxRB.js";import"./Tag-B0aqwsPh.js";import"./DefinitionTooltip-DCyVnqQ8.js";import"./DismissibleTag-KethSBWI.js";import"./ComposedModal-CpTP8HrD.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-jEwItT4M.js";import"./usePortalTarget-CqHjfDP8.js";import"./OperationalTag-cKIIvDqH.js";import"./SkeletonText-B8DfBI4g.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-CBue0XF4.js";const S=()=>e.createElement(N,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `},story:i},{title:"Using deprecated useInlineEdit hook",description:"At this time, it is possible to still use the deprecated `useInlineEdit` hook but requires setting a feature flag. See example below:",source:{code:`
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
          `}}]});S.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const G=`${w.prefix}--datagrid`,t=`storybook-${G}__validation-code-snippet`,Ft={title:"Deprecated/Datagrid/EditableCell",component:m,tags:["autodocs"],parameters:{styles:x,docs:{page:S},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:H,onClick:c("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:A,isDelete:!0,onClick:c("Clicked row action: delete")}]},j=({...r})=>{const[s,n]=C.useState(y(10,{includeNonEditableCell:!0,column:"lastName"})),l=e.useMemo(()=>T(),[]),d=I({columns:l,data:s,onDataUpdate:n,...r.defaultGridProps},U);return e.createElement(v,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(m,{datagridState:d}),e.createElement(P,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:t},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},F=({...r})=>e.createElement(j,{defaultGridProps:{...r}}),q=({...r})=>{const[s,n]=C.useState(y(10)),l=e.useMemo(()=>T(),[]),d=I({columns:l,data:s,onDataUpdate:n,...r.defaultGridProps},_);return e.createElement(v,null,e.createElement(m,{datagridState:d}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits")))},B=({...r})=>e.createElement(q,{defaultGridProps:{...r}}),k={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader},i=F.bind({});i.storyName="Using useEditableCell hook";i.argTypes={gridTitle:a.gridTitle,gridDescription:a.gridDescription,useDenseHeader:a.useDenseHeader};i.args={...k};const M="Using deprecated useInlineEdit hook",o=B.bind({});o.storyName=M;o.argTypes={gridTitle:a.gridTitle,gridDescription:a.gridDescription,useDenseHeader:a.useDenseHeader};o.args={...k};var g,h,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`({
  ...args
}) => {
  return <EditableCellUsage defaultGridProps={{
    ...args
  }} />;
}`,...(E=(h=i.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var b,D,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`({
  ...args
}) => {
  return <InlineEditUsage defaultGridProps={{
    ...args
  }} />;
}`,...(f=(D=o.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};const qt=["EditableCellUsageStory","InlineEditUsageStory"];export{i as EditableCellUsageStory,o as InlineEditUsageStory,qt as __namedExportsOrder,Ft as default};
