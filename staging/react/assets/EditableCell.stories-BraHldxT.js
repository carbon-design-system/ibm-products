var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{R as e,ah as v,r as h,p as S}from"./iframe-DQtlSwB0.js";import{s as I,m as E,g as b}from"./_storybook-styles-CWATYktQ.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-DSLVjY7-.js";import{L as u}from"./ListItem-BV7CC0p7.js";import{U as k}from"./UnorderedList-DlkrkCmj.js";import{D as c,u as f}from"./useDatagrid-Bp7kGK_g.js";import{u as w,a as N}from"./useEditableCell-B_V2BnKm.js";import{c as x}from"./bucket-6-DF2gREQd.js";import{T as U}from"./bucket-19-BryqLv5V.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-CoFJ47U9.js";import"./index-HrSRrNhc.js";import"./index-DO9e1XXc.js";import"./bucket-7-DXZvdKTt.js";import"./bucket-20-BaUCyjiQ.js";import"./index-DRjYlMk6.js";import"./index-B_1PALIy.js";import"./props-helper-BEfR-CBa.js";import"./index-Bga74r8M.js";import"./bucket-11-D07ECrXB.js";import"./Text-aeWWocZi.js";import"./devtools-CKq-cjSr.js";import"./TableRow-ChhxaYIm.js";import"./wrapComponent-lmPvCr02.js";import"./bucket-1-B1CRS2ls.js";import"./TableToolbar-DiQKXhfK.js";import"./bucket-0-B2DKmzmX.js";import"./index-6N7phTXo.js";import"./ErrorEmptyState-IKtq03Ro.js";import"./EmptyState-B7lyL1Yv.js";import"./EmptyStateV2.deprecated-HgEo7tYf.js";import"./Link-DMFtFmaW.js";import"./ErrorIllustration-DcA0L1gf.js";import"./useId-jf0fmR05.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-d5X-Di2p.js";import"./NoDataIllustration-DVOb8fZ6.js";import"./NotFoundEmptyState-BiqRYh-U.js";import"./NotFoundIllustration-Dg0ntpKh.js";import"./index.esm-CreLN5lX.js";import"./usePreviousValue-Cu5p5XON.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-4UkoSMZU.js";import"./useIsomorphicEffect-CQiBpG0E.js";import"./MenuItem-BsFq2oKV.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-CNVssTOG.js";import"./environment-DRRHKtsv.js";import"./useControllableState-BxEbi6mu.js";import"./index-D4kPqY-9.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-D_y9vV6K.js";import"./AccordionItem-BaNZ-UZl.js";import"./index-B0En0VCR.js";import"./LayerContext-C0V86w6h.js";import"./clamp-ekNJC_Xv.js";import"./Search-Bt9lstfw.js";import"./FormContext-CtjnxQSN.js";import"./bucket-16-B2xBWAu6.js";import"./Checkbox-DA5dImZy.js";import"./hasHelperText-CcJ_VphT.js";import"./useNormalizedInputProps-c7o4VaT8.js";import"./RadioButton-Cv8rsy_z.js";import"./DatePicker-cEftXz7I.js";import"./Dropdown-C8HdSQPV.js";import"./downshift.esm-fbTLaqIf.js";import"./FormGroup-B0Lp6MXu.js";import"./MultiSelect-DcwmATXD.js";import"./NumberInput-B9UIKID9.js";import"./bucket-17-AFGsyIeq.js";import"./RadioButtonGroup-LoD6qbPx.js";import"./index-LCxZFDNt.js";import"./usePrefersReducedMotion-DMntZYJK.js";import"./usePresence-qxcOlxpe.js";import"./ActionSet-BsVh9Suy.js";import"./ButtonSet-C0880qiN.js";import"./InlineLoading-mxEuuwX0.js";import"./useWindowResize-BRUM5M8j.js";import"./TagSet-Dmix9Ko6.js";import"./Tag-CpgNdznG.js";import"./DefinitionTooltip-Da2vOiUl.js";import"./DismissibleTag-DAiRcUbi.js";import"./ComposedModal-DgnKG59i.js";import"./isTopmostVisibleModal-mS5hENDn.js";import"./wrapFocus-BLa99PjJ.js";import"./usePortalTarget-NQDZTbZz.js";import"./OperationalTag-CXxvLiL8.js";import"./SkeletonText-DG_jj3nj.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput-B9q49zYK.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,Tt={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const G="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=G;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};const vt=["EditableCellUsageStory","InlineEditUsageStory"];export{a as EditableCellUsageStory,o as InlineEditUsageStory,vt as __namedExportsOrder,Tt as default};
//# sourceMappingURL=EditableCell.stories-BraHldxT.js.map
