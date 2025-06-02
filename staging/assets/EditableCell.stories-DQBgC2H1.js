import{e,r as C}from"./index-DtHxqM--.js";import{a as c}from"./index-B-lxVbXh.js";import{p as w}from"./settings-JuRwpTYJ.js";import{s as x,m as y,g as T}from"./_storybook-styles-B5ItnvUC.js";import{S as N}from"./StoryDocsPage-Dzle9iS3.js";import{A as r}from"./getArgTypes-Ci8wh0IQ.js";import{W as v}from"./index-CXOdI_PI.js";import"./index-Ccw_5OKp.js";import{L as u}from"./ListItem-CAqjhNiq.js";import{U as P}from"./UnorderedList-rflGDbRT.js";import{D as m,u as I}from"./useDatagrid-C3Chyh6c.js";import{u as U,a as _}from"./useEditableCell-CZoaBAVV.js";import{b as H}from"./bucket-6-byl-qy8t.js";import{T as A}from"./bucket-17-Ch8K0_jZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./events-OVwOsPzJ.js";import"./index-DxWVrnnv.js";import"./bucket-2-BROwSLLy.js";import"./index-CE9buGiA.js";import"./bucket-7-oHU1xKB3.js";import"./bucket-18-CKSgrqVQ.js";import"./index-BEF4m_XO.js";import"./iframe-Dt20USK0.js";import"./index-DgLvjnYm.js";import"./index-CiYgQLeJ.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-DdgB4qR7.js";import"./index-ClSKgvHK.js";import"./index-FZeL_GBE.js";import"./bucket-10-D5QqA8rU.js";import"./Text-CPocCdE2.js";import"./devtools-DSwQefcu.js";import"./feature-flags-BgCiJpXY.js";import"./TableRow-DGyG1Gqs.js";import"./wrapComponent-ZuCoYN-u.js";import"./bucket-0-BTuMVGfh.js";import"./bucket-1-CFPczE3L.js";import"./TableToolbar-BJfQABC6.js";import"./index-B8L-_-6_.js";import"./ErrorEmptyState-O7dCLHfD.js";import"./EmptyState-jKt7s5E2.js";import"./props-helper-mI8EhIiv.js";import"./Link-BB7CuL0w.js";import"./EmptyStateV2-CEPRTdfH.js";import"./ErrorIllustration-3mQSrvg3.js";import"./useId-DyRoBmqU.js";import"./uuidv4-BN2rGLQG.js";import"./NoDataEmptyState-BdcD9-tD.js";import"./NoDataIllustration-aDtvLbUR.js";import"./NotFoundEmptyState-qfnFzKUv.js";import"./NotFoundIllustration-B9tmTSGz.js";import"./index.esm-B0KjS5Ij.js";import"./usePreviousValue-CuNkkQo9.js";import"./inheritsLoose-D3Az7yH5.js";import"./useResizeObserver-CiQvgsPb.js";import"./useIsomorphicEffect-DztsuiUB.js";import"./MenuItem-CEor-NYP.js";import"./useControllableState-ICkXF1jW.js";import"./useAttachedMenu-C_V6chT9.js";import"./index-DH4iGxjV.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-Bfrl1yb6.js";import"./useClickOutside-DnYoV4Om.js";import"./AccordionItem-DgiK-vnG.js";import"./Search-BzOIQZYB.js";import"./FormContext-C4Nuixum.js";import"./bucket-15-CM0uxXPN.js";import"./index-CpJD3P8E.js";import"./LayerContext-B9CO-6mR.js";import"./clamp--00YEiB8.js";import"./Checkbox-CH3OfXhd.js";import"./DatePicker-W-G--4vv.js";import"./Dropdown-BLf0hlgW.js";import"./index-DDFkoaNA.js";import"./FormGroup-wG1XWDcH.js";import"./MultiSelect-CADTavUC.js";import"./NumberInput-B97GTTAY.js";import"./useNormalizedInputProps-Cy1SYPx-.js";import"./bucket-16-BNzuCNgJ.js";import"./RadioButton-isyIDU03.js";import"./RadioButtonGroup-bl4NkKe6.js";import"./usePrefersReducedMotion-DvL5kgOM.js";import"./usePresence-DE1zreM1.js";import"./ActionSet-My3qJvIA.js";import"./ButtonSet-CHfwLmwF.js";import"./InlineLoading-B1G6aSdW.js";import"./useWindowResize-CR2_9WVc.js";import"./TagSet-EbRdECh0.js";import"./Tag-Dv9fGIyR.js";import"./DefinitionTooltip-I5zY1xMX.js";import"./DismissibleTag-CrcfsBzG.js";import"./ComposedModal-B82WV5E1.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-BExY9CJ6.js";import"./usePortalTarget-DjC7v3SL.js";import"./OperationalTag-Bm7pdY22.js";import"./SkeletonText-DjcnVzpq.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./TextInput-BqseqOCj.js";const S=()=>e.createElement(N,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
