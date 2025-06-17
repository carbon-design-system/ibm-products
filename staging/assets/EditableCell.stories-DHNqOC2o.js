import{e,r as C}from"./index-DtHxqM--.js";import{a as c}from"./index-B-lxVbXh.js";import{p as w}from"./settings-CFkY3W_8.js";import{s as x,m as y,g as T}from"./_storybook-styles-BFqqtEm_.js";import{S as N}from"./StoryDocsPage-efLN1cW8.js";import{A as a}from"./getArgTypes-Ci8wh0IQ.js";import{W as v}from"./index-EE55pjs6.js";import"./index-C360Eztx.js";import{L as u}from"./ListItem-BmNesaKx.js";import{U as P}from"./UnorderedList-cKWkbIYO.js";import{D as m,u as I}from"./useDatagrid-DRFhvKQ0.js";import{u as U,a as _}from"./useEditableCell-DnDxau_S.js";import{b as H}from"./bucket-6-BjeV6rPm.js";import{T as A}from"./bucket-17-BFxlQ1ma.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./events-CdfZZS3f.js";import"./index-BopFi8TB.js";import"./bucket-2-BWELrLSK.js";import"./index-ucZMVirk.js";import"./bucket-18-iDqRS6B9.js";import"./bucket-7-D71hy6JI.js";import"./index-DXOm4vU7.js";import"./iframe-DQx73iB6.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DKr4OZ7U.js";import"./index-B3dOPLFv.js";import"./index-DOtZcGjg.js";import"./props-helper-CSyPWdyB.js";import"./index-BpQ54rfJ.js";import"./bucket-10-F-tNiG7L.js";import"./bucket-19-D7HYZr93.js";import"./Text-DKfZ87L_.js";import"./devtools-XPxnGn1y.js";import"./feature-flags-DS-UqKIX.js";import"./TableRow-DRpYKe9F.js";import"./wrapComponent-6jMLBNvx.js";import"./bucket-0-CylTshg8.js";import"./bucket-1-PuAqHexT.js";import"./TableToolbar-DhEDkMsZ.js";import"./index-D_6HqJlS.js";import"./ErrorEmptyState-C_mCSdiL.js";import"./EmptyState-DidmLVzf.js";import"./Link-C1gIcKnM.js";import"./EmptyStateV2-DUDfbcOL.js";import"./ErrorIllustration-ChOyF1DC.js";import"./useId-DyRoBmqU.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-LvTGI7vg.js";import"./NoDataIllustration-CjVoyHsZ.js";import"./NotFoundEmptyState-Dwd6ZMWB.js";import"./NotFoundIllustration-BpamTnNL.js";import"./index.esm--3p-MDi6.js";import"./usePreviousValue-CuNkkQo9.js";import"./inheritsLoose-D3Az7yH5.js";import"./useResizeObserver-CiQvgsPb.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./MenuItem-DY8uKk8d.js";import"./useControllableState-P5wT7SAH.js";import"./useAttachedMenu-DmwntCh_.js";import"./index-BwwwKkK0.js";import"./mergeRefs-91-mP8KM.js";import"./getFocusableElements-BW7cf991.js";import"./index-CrSLweFd.js";import"./useClickOutside-DnYoV4Om.js";import"./AccordionItem-DoclliCH.js";import"./Search-BSYMp4wP.js";import"./FormContext-C4Nuixum.js";import"./bucket-15-DqPvCVP_.js";import"./index-B0hq8c5O.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./Checkbox-Cj4UPcOj.js";import"./DatePicker-DTrbSZxi.js";import"./Dropdown-CX5Du4pc.js";import"./index-CydRNFts.js";import"./FormGroup-DOeAvcbG.js";import"./MultiSelect-BWBLwwcY.js";import"./NumberInput-H4rExYPH.js";import"./useNormalizedInputProps-cPzcHHVT.js";import"./bucket-16-DWe95sPE.js";import"./RadioButton-D-XNbmNx.js";import"./RadioButtonGroup-D7T4QptB.js";import"./usePrefersReducedMotion-DvL5kgOM.js";import"./usePresence-DE1zreM1.js";import"./ActionSet-Du6AS19V.js";import"./ButtonSet-Co_YnHPl.js";import"./InlineLoading-DwO_qCAY.js";import"./useWindowResize-CR2_9WVc.js";import"./TagSet-QggyK8XG.js";import"./Tag-Bml4-RaH.js";import"./DefinitionTooltip-Cn-blDBL.js";import"./DismissibleTag-Cx8-xuTh.js";import"./ComposedModal-CJn3uPYK.js";import"./requiredIfGivenPropIsTruthy-VsRXdxiC.js";import"./wrapFocus-BeRLXXyC.js";import"./usePortalTarget-CutnQ3UR.js";import"./OperationalTag-B1OHxUBX.js";import"./SkeletonText-Cjviuznw.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-DJpFdpZP.js";const S=()=>e.createElement(N,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]});S.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const G=`${w.prefix}--datagrid`,t=`storybook-${G}__validation-code-snippet`,Ft={title:"Deprecated/Datagrid/Datagrid/EditableCell",component:m,tags:["autodocs"],parameters:{styles:x,docs:{page:S},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:H,onClick:c("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:A,isDelete:!0,onClick:c("Clicked row action: delete")}]},j=({...r})=>{const[s,n]=C.useState(y(10,{includeNonEditableCell:!0,column:"lastName"})),l=e.useMemo(()=>T(),[]),d=I({columns:l,data:s,onDataUpdate:n,...r.defaultGridProps},U);return e.createElement(v,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(m,{datagridState:d}),e.createElement(P,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:t},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},F=({...r})=>e.createElement(j,{defaultGridProps:{...r}}),q=({...r})=>{const[s,n]=C.useState(y(10)),l=e.useMemo(()=>T(),[]),d=I({columns:l,data:s,onDataUpdate:n,...r.defaultGridProps},_);return e.createElement(v,null,e.createElement(m,{datagridState:d}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits")))},B=({...r})=>e.createElement(q,{defaultGridProps:{...r}}),k={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader},i=F.bind({});i.storyName="Using useEditableCell hook";i.argTypes={gridTitle:a.gridTitle,gridDescription:a.gridDescription,useDenseHeader:a.useDenseHeader};i.args={...k};const M="Using deprecated useInlineEdit hook",o=B.bind({});o.storyName=M;o.argTypes={gridTitle:a.gridTitle,gridDescription:a.gridDescription,useDenseHeader:a.useDenseHeader};o.args={...k};var g,h,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
