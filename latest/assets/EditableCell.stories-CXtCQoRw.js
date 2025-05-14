import{e,r as C}from"./index-DtHxqM--.js";import{a as c}from"./index-B-lxVbXh.js";import{p as w}from"./settings-C3kz8lqM.js";import{s as x,m as y,g as T}from"./_storybook-styles-Xn-n02KR.js";import{S as N}from"./StoryDocsPage-BVsvdpr0.js";import{A as a}from"./getArgTypes-Ci8wh0IQ.js";import{W as v}from"./index-BzNqzkND.js";import"./index-CMVdkQrl.js";import{L as u}from"./ListItem-ffth944S.js";import{U as P}from"./UnorderedList-COtGtCH7.js";import{D as m,u as I}from"./useDatagrid-DyHcX8CC.js";import{u as U,a as _}from"./useEditableCell-f3oQ8y3U.js";import{b as H}from"./bucket-6-CRocNvF-.js";import{T as A}from"./bucket-17-BInI-cSl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./events-OVwOsPzJ.js";import"./index-BLvAv8yb.js";import"./bucket-2-D0m0gcwr.js";import"./index-D5LR258U.js";import"./bucket-7-Ca02d0BY.js";import"./bucket-18-xYgoy0Nr.js";import"./index-BridxrSo.js";import"./iframe-CjQaoex9.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-CmBIJVOZ.js";import"./index-BLKsqoyU.js";import"./index-CDaAlKON.js";import"./bucket-10-BzYiIxX7.js";import"./Text-DeLhjZ72.js";import"./devtools-CJD9WatR.js";import"./feature-flags-CgeLICHA.js";import"./TableRow-gs6AMBoA.js";import"./wrapComponent-BiCAEuiH.js";import"./bucket-0-CHtg8bFp.js";import"./bucket-1-wrgsOOV0.js";import"./TableToolbar-DkHjwC8W.js";import"./index-BUpfIj5_.js";import"./ErrorEmptyState-BeWvb06d.js";import"./Link-C2-sHeI7.js";import"./EmptyState-GqVIdKJ1.js";import"./props-helper-3VCN3cvm.js";import"./EmptyStateV2-CQrG6WlY.js";import"./ErrorIllustration-CS7XItrm.js";import"./useId-DyRoBmqU.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-DoRMV19h.js";import"./NoDataIllustration-GZbV9jT2.js";import"./NotFoundEmptyState-DIZoLXD1.js";import"./NotFoundIllustration-BoSJ_VqF.js";import"./index.esm-DzetqPWz.js";import"./usePreviousValue-CuNkkQo9.js";import"./inheritsLoose-D3Az7yH5.js";import"./useResizeObserver-DtwIjblY.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./MenuItem-tJ9rUog4.js";import"./useControllableState-ICkXF1jW.js";import"./useAttachedMenu-C8bta719.js";import"./index-CB_9HnqS.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-Bfrl1yb6.js";import"./useClickOutside-DnYoV4Om.js";import"./AccordionItem-mW9-CnqC.js";import"./Search-QqBUyI3s.js";import"./FormContext-C4Nuixum.js";import"./bucket-15-DPFZzV9q.js";import"./index-ly07KqNH.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./Checkbox-CVg4b6-b.js";import"./DatePicker-YRFaJAIK.js";import"./Dropdown-B-2WRuCt.js";import"./index-BCwPvCrC.js";import"./FormGroup-BRiLUXWl.js";import"./MultiSelect-gOpyhhlY.js";import"./NumberInput-DxIwlEjs.js";import"./useNormalizedInputProps-DMHlP-q8.js";import"./bucket-16-DL_X4byx.js";import"./RadioButton-B542YUZn.js";import"./RadioButtonGroup-DY6Qt54Z.js";import"./usePrefersReducedMotion-DvL5kgOM.js";import"./usePresence-DE1zreM1.js";import"./ActionSet-CwOjg9U4.js";import"./ButtonSet-S29aEq84.js";import"./InlineLoading-C_FY6vWy.js";import"./FilterSummary-CNAqkumk.js";import"./useWindowResize-CR2_9WVc.js";import"./TagSet-UAIfwPGL.js";import"./Tag-TnuyD0LA.js";import"./DefinitionTooltip-LoiwcsAO.js";import"./DismissibleTag-DlU6OkfL.js";import"./ComposedModal-DK_gDe0c.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-4QzkQnOM.js";import"./usePortalTarget-BpuhspP7.js";import"./OperationalTag-mvXHH_3H.js";import"./SkeletonText-EbJJsNSY.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-CixU1YEY.js";const S=()=>e.createElement(N,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]});S.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const G=`${w.prefix}--datagrid`,t=`storybook-${G}__validation-code-snippet`,jt={title:"Deprecated/Datagrid/Datagrid/EditableCell",component:m,tags:["autodocs"],parameters:{styles:x,docs:{page:S},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:H,onClick:c("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:A,isDelete:!0,onClick:c("Clicked row action: delete")}]},j=({...r})=>{const[s,n]=C.useState(y(10,{includeNonEditableCell:!0,column:"lastName"})),l=e.useMemo(()=>T(),[]),d=I({columns:l,data:s,onDataUpdate:n,...r.defaultGridProps},U);return e.createElement(v,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(m,{datagridState:d}),e.createElement(P,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:t},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},F=({...r})=>e.createElement(j,{defaultGridProps:{...r}}),q=({...r})=>{const[s,n]=C.useState(y(10)),l=e.useMemo(()=>T(),[]),d=I({columns:l,data:s,onDataUpdate:n,...r.defaultGridProps},_);return e.createElement(v,null,e.createElement(m,{datagridState:d}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits")))},B=({...r})=>e.createElement(q,{defaultGridProps:{...r}}),k={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader},i=F.bind({});i.storyName="Using useEditableCell hook";i.argTypes={gridTitle:a.gridTitle,gridDescription:a.gridDescription,useDenseHeader:a.useDenseHeader};i.args={...k};const M="Using deprecated useInlineEdit hook",o=B.bind({});o.storyName=M;o.argTypes={gridTitle:a.gridTitle,gridDescription:a.gridDescription,useDenseHeader:a.useDenseHeader};o.args={...k};var g,h,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
}`,...(f=(D=o.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};const Ft=["EditableCellUsageStory","InlineEditUsageStory"];export{i as EditableCellUsageStory,o as InlineEditUsageStory,Ft as __namedExportsOrder,jt as default};
