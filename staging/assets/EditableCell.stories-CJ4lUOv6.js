import{e,r as C}from"./index-DtHxqM--.js";import{a as c}from"./index-B-lxVbXh.js";import{p as w}from"./settings-xxMXFJdE.js";import{s as x,m as y,g as T}from"./_storybook-styles-T0xLZwVk.js";import{S as N}from"./StoryDocsPage-B5UgqvdH.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as v}from"./index-CoTY55j8.js";import"./index-CGLP8AGt.js";import{L as u}from"./ListItem-A796zF2p.js";import{U as P}from"./UnorderedList-CsYuSqmp.js";import{D as m,u as I}from"./useDatagrid-DPsNeueb.js";import{u as U,a as _}from"./useEditableCell-BWDNxo44.js";import{b as H}from"./bucket-6-CHtf3ie7.js";import{T as A}from"./bucket-17-bIfZ74jY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./events-OVwOsPzJ.js";import"./index-BeQw6zoj.js";import"./bucket-2-6VDW4ZdD.js";import"./index-DomAOdg5.js";import"./bucket-7-B1wo_f18.js";import"./bucket-18-OZh5kibs.js";import"./index-HDDpa7CF.js";import"./iframe-C04Vc2cR.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-dfqopftY.js";import"./index-Bbv0gtEO.js";import"./index-CHR6uWaP.js";import"./bucket-10-DVt4Ot_f.js";import"./Text-CeswpK61.js";import"./devtools-DANatd7d.js";import"./feature-flags-BPGJ5eNd.js";import"./TableRow-CZp5rLLA.js";import"./wrapComponent-AjrhF0xy.js";import"./bucket-0-BSIss69h.js";import"./bucket-1-txoxJHkm.js";import"./TableToolbar-KRIf1m4C.js";import"./index-BgSYd2Cc.js";import"./ErrorEmptyState-DSOkPKV4.js";import"./Link-Oj__mfou.js";import"./EmptyState-B8fv6QQY.js";import"./props-helper-CgskTpCX.js";import"./EmptyStateV2-CRiygg2w.js";import"./ErrorIllustration-ZCz1KAOo.js";import"./useId-DyRoBmqU.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-CLqOvJ5T.js";import"./NoDataIllustration-BY_X7oZ3.js";import"./NotFoundEmptyState-CJih3spg.js";import"./NotFoundIllustration-B_e89Lce.js";import"./index.esm-CRdki9mV.js";import"./usePreviousValue-CuNkkQo9.js";import"./inheritsLoose-D3Az7yH5.js";import"./useResizeObserver-DtwIjblY.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./MenuItem-BkvLoZeA.js";import"./useControllableState-ICkXF1jW.js";import"./useAttachedMenu-DarvD7vl.js";import"./index-RBpPtS15.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-Bfrl1yb6.js";import"./useClickOutside-DnYoV4Om.js";import"./AccordionItem-E2X0419z.js";import"./Search-D0F4D2aG.js";import"./FormContext-C4Nuixum.js";import"./bucket-15-BkQJIuEn.js";import"./index-DsU5XOD_.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./Checkbox-Bywtu1Sx.js";import"./DatePicker-Dfl65JiX.js";import"./Dropdown-BMZLiNtx.js";import"./index-C9RvsRFa.js";import"./FormGroup-t548bBaY.js";import"./MultiSelect-DeoYEodH.js";import"./NumberInput-D9VcneHP.js";import"./useNormalizedInputProps-BqtoAU93.js";import"./bucket-16-ngxFDqF8.js";import"./RadioButton-CclAqp5d.js";import"./RadioButtonGroup-BIgBvQ7W.js";import"./usePrefersReducedMotion-DvL5kgOM.js";import"./usePresence-DE1zreM1.js";import"./ActionSet-D-bAXr_c.js";import"./ButtonSet-BsWIm-Fg.js";import"./InlineLoading-xfVMb1Hs.js";import"./useWindowResize-CR2_9WVc.js";import"./TagSet-C7gZ6cke.js";import"./Tag-BIhGnXbu.js";import"./DefinitionTooltip-Bm70nIXa.js";import"./DismissibleTag-CcglHlN9.js";import"./ComposedModal-4EFCdQlY.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CrmkdVI3.js";import"./usePortalTarget-CidI18mD.js";import"./OperationalTag-Crf6wxHW.js";import"./SkeletonText-CGoj5O5P.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-B_rQCwG8.js";const S=()=>e.createElement(N,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]});S.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const G=`${w.prefix}--datagrid`,t=`storybook-${G}__validation-code-snippet`,Gt={title:"Deprecated/Datagrid/Datagrid/EditableCell",component:m,tags:["autodocs"],parameters:{styles:x,docs:{page:S},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},p={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:H,onClick:c("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:A,isDelete:!0,onClick:c("Clicked row action: delete")}]},j=({...a})=>{const[s,n]=C.useState(y(10,{includeNonEditableCell:!0,column:"lastName"})),l=e.useMemo(()=>T(),[]),d=I({columns:l,data:s,onDataUpdate:n,...a.defaultGridProps},U);return e.createElement(v,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(m,{datagridState:d}),e.createElement(P,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:t},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},F=({...a})=>e.createElement(j,{defaultGridProps:{...a}}),q=({...a})=>{const[s,n]=C.useState(y(10)),l=e.useMemo(()=>T(),[]),d=I({columns:l,data:s,onDataUpdate:n,...a.defaultGridProps},_);return e.createElement(v,null,e.createElement(m,{datagridState:d}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:t},"first_name"),e.createElement("code",{className:t},"last_name"),e.createElement("code",{className:t},"age"),e.createElement("code",{className:t},"visits")))},B=({...a})=>e.createElement(q,{defaultGridProps:{...a}}),k={gridTitle:p.gridTitle,gridDescription:p.gridDescription,useDenseHeader:p.useDenseHeader},i=F.bind({});i.storyName="Using useEditableCell hook";i.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};i.args={...k};const M="Using deprecated useInlineEdit hook",o=B.bind({});o.storyName=M;o.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader};o.args={...k};var g,h,E;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
}`,...(f=(D=o.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};const jt=["EditableCellUsageStory","InlineEditUsageStory"];export{i as EditableCellUsageStory,o as InlineEditUsageStory,jt as __namedExportsOrder,Gt as default};
