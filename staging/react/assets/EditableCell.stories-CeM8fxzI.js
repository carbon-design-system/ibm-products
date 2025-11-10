import{e,S as y,r as g,p as T}from"./iframe-Cx5KSUkN.js";import{s as v,m as h,g as E}from"./_storybook-styles-DK4c8Cql.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as b}from"./index-Ck6MrD6-.js";import{L as c}from"./ListItem-DcH9o7gL.js";import{U as S}from"./UnorderedList-C-mhMNRW.js";import{D as m,u as D}from"./useDatagrid-CVUznwVZ.js";import{u as I,a as k}from"./useEditableCell-GrcaspWQ.js";import{E as w}from"./bucket-6-CTMsIO5l.js";import{T as N}from"./bucket-18-BsWhzxVc.js";import"./bucket-2-BlvkVtPX.js";import"./index-B9RenrJ5.js";import"./bucket-7-RD2fLsYP.js";import"./bucket-19-L8p_zxw3.js";import"./index-7PsJZ4I1.js";import"./index-BJ4wCti9.js";import"./props-helper-DUN9rRLy.js";import"./index-27HvtL9q.js";import"./bucket-10-vy7WitAF.js";import"./Text-Dfk9uCpH.js";import"./devtools-CqSmu32c.js";import"./TableRow-DzqLFxTX.js";import"./wrapComponent-Cn-xnvE3.js";import"./utils-Cm2OYkF4.js";import"./bucket-0-DSsX9IMy.js";import"./bucket-1-DxKSVg0b.js";import"./TableToolbar-BnP_KZ9E.js";import"./index-DDD0vdKi.js";import"./ErrorEmptyState-Jkm_-7d3.js";import"./EmptyState-CgKCaGif.js";import"./EmptyStateV2.deprecated-DYZkHc79.js";import"./Link-CqhHBFwL.js";import"./ErrorIllustration-B96CjSRD.js";import"./useId-BTc5klc9.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-CLpWRCVP.js";import"./NoDataIllustration-B7Bbl5wa.js";import"./NotFoundEmptyState-CAxq5P_b.js";import"./NotFoundIllustration-CMK6UhYh.js";import"./index.esm-ncvLhiMo.js";import"./usePreviousValue-DG0Xxt-O.js";import"./inheritsLoose-DHKJTbHM.js";import"./useResizeObserver-BaCXyUct.js";import"./useIsomorphicEffect-Bv6TiHW8.js";import"./MenuItem-CWMHTNfB.js";import"./useControllableState-K1GvegTe.js";import"./useAttachedMenu-8SzJaBid.js";import"./defaultItemToString-zSItMTD_.js";import"./index-Dk561UWg.js";import"./mergeRefs-BZpmU3mx.js";import"./getFocusableElements-BW7cf991.js";import"./useClickOutside-Be2nU8fi.js";import"./AccordionItem-l1ahdCo-.js";import"./Search-BGGTyo9i.js";import"./FormContext-B2Gj6hIG.js";import"./bucket-15-Cv3_8V3l.js";import"./index-CiscxeF_.js";import"./LayerContext-cpvj6sRw.js";import"./clamp--00YEiB8.js";import"./Checkbox-D0CmUts8.js";import"./DatePicker-BHTipTjE.js";import"./NumberInput-BsNfWt2F.js";import"./useNormalizedInputProps-Ckl1dNXt.js";import"./bucket-16-CUZPTeHj.js";import"./Dropdown-UDtNxzP0.js";import"./index-DMtEKiNH.js";import"./FormGroup-BK3HGy7x.js";import"./MultiSelect-QRL94PtN.js";import"./RadioButton-C-R-Tpyc.js";import"./RadioButtonGroup-9N2R0eij.js";import"./usePrefersReducedMotion-CvDA_HDZ.js";import"./usePresence-j19rLO5g.js";import"./ActionSet-xL6a_vbL.js";import"./ButtonSet-DM5qsHJo.js";import"./InlineLoading-CiXSaq1b.js";import"./useWindowResize-Ba0asv8I.js";import"./TagSet-D0c3ZaSP.js";import"./Tag-CKDyYBWG.js";import"./DefinitionTooltip-B_d1_SjV.js";import"./DismissibleTag-Jzqa0QEv.js";import"./ComposedModal-CZIDkxYx.js";import"./requiredIfGivenPropIsTruthy-C6rAip-Q.js";import"./wrapFocus-DKguJtfl.js";import"./usePortalTarget-1MKh9o9m.js";import"./OperationalTag-D2fJj9gl.js";import"./SkeletonText-DlkLeaaB.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-BSsh92ZE.js";const f=()=>e.createElement(y,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `},story:a},{title:"Opt out of editing at cell level",description:"In some cases you may want to disable editing per cell. This is possible by providing the following structure for the cell value within your row data:",source:{code:`
{
  value: '—', // Value displayed for static cell
  isStaticCell: true,
  columnId: 'lastName',
}
          `}}]});f.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:u}=__STORYBOOK_MODULE_ACTIONS__,x=`${T.prefix}--datagrid`,t=`storybook-${x}__validation-code-snippet`,ht={title:"Deprecated/Datagrid/EditableCell",component:m,tags:["autodocs"],parameters:{styles:v,docs:{page:f},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:w,onClick:u("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:N,isDelete:!0,onClick:u("Clicked row action: delete")}]},U=({...o})=>{const[s,n]=g.useState(h(10,{includeNonEditableCell:!0,column:"lastName"})),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},I);return e.createElement(b,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(m,{datagridState:d}),e.createElement(S,null,e.createElement(c,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits"))),e.createElement(c,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:t},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},P=({...o})=>e.createElement(U,{defaultGridProps:{...o}}),_=({...o})=>{const[s,n]=g.useState(h(10)),l=e.useMemo(()=>E(),[]),d=D({columns:l,data:s,onDataUpdate:n,...o.defaultGridProps},k);return e.createElement(b,null,e.createElement(m,{datagridState:d}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits")))},H=({...o})=>e.createElement(_,{defaultGridProps:{...o}}),C={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader},i=P.bind({});i.storyName="Using useEditableCell hook";i.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};i.args={...C};const A="Using deprecated useInlineEdit hook",a=H.bind({});a.storyName=A;a.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};a.args={...C};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <EditableCellUsage defaultGridProps={{
    ...args
  }} />;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  return <InlineEditUsage defaultGridProps={{
    ...args
  }} />;
}`,...a.parameters?.docs?.source}}};const Et=["EditableCellUsageStory","InlineEditUsageStory"];export{i as EditableCellUsageStory,a as InlineEditUsageStory,Et as __namedExportsOrder,ht as default};
