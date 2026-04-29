var T=Object.defineProperty;var r=(t,n)=>T(t,"name",{value:n,configurable:!0});import{e,S as v,r as h,p as S}from"./iframe-DU3fWsEq.js";import{s as I,m as E,g as b}from"./_storybook-styles-BlvBJy88.js";import{A as s}from"./getArgTypes-Ci8wh0IQ.js";import{W as D}from"./index-xWpYS_sG.js";import{L as u}from"./ListItem-Ccc36FLo.js";import{U as k}from"./UnorderedList-HCmKQzFc.js";import{D as c,u as f}from"./useDatagrid-Bnv9TsVu.js";import{u as w,a as N}from"./useEditableCell-C1hi72Tk.js";import{E as x}from"./bucket-6-CYCyVP6N.js";import{T as U}from"./bucket-19-Be1_xXYE.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-2-D0gel0uj.js";import"./index-Cp5_bPRb.js";import"./index-CnSnZ5hY.js";import"./bucket-7-Yi-B9hmh.js";import"./bucket-20-CmByzEsl.js";import"./index-D_ik-mpd.js";import"./index-CHJSsczR.js";import"./props-helper-D-MGgUNp.js";import"./index-DTbFSqPm.js";import"./bucket-11-Bqu2xQ11.js";import"./Text-BMNkTgzs.js";import"./devtools-D1O-44XN.js";import"./TableRow-DrBHq3_g.js";import"./wrapComponent-MlWw9uxf.js";import"./bucket-1-CetRUY_f.js";import"./TableToolbar-DL_eqmOE.js";import"./bucket-0-DJtoSbW8.js";import"./index-CzJj9-T5.js";import"./ErrorEmptyState-VH96aW0k.js";import"./EmptyState-kTYpcu8v.js";import"./EmptyStateV2.deprecated-3YcwFgGj.js";import"./Link-L5rA4zHd.js";import"./ErrorIllustration-Dc_h-mvP.js";import"./useId-DL4LrsM7.js";import"./uuidv4-Fbcg8Vng.js";import"./NoDataEmptyState-Cgy0Ac0a.js";import"./NoDataIllustration-BB7B6ow3.js";import"./NotFoundEmptyState-jPIiXi80.js";import"./NotFoundIllustration-CCS-ZEog.js";import"./index.esm-ESHtQFbu.js";import"./usePreviousValue-Dy_YEFje.js";import"./inheritsLoose-CdLKJotq.js";import"./useResizeObserver-IK2T-B-k.js";import"./useIsomorphicEffect-rJHRE8hL.js";import"./MenuItem-CEv7K7e7.js";import"./defaultItemToString-DDHghiWu.js";import"./useAttachedMenu-KXj_FgJe.js";import"./environment-DRRHKtsv.js";import"./useControllableState-DmxEIS6S.js";import"./index-BsKVZa7c.js";import"./mergeRefs-BH0-8uDG.js";import"./getFocusableElements-D5asDxIQ.js";import"./useClickOutside-HC0RQlWu.js";import"./AccordionItem-BY0R0ZbP.js";import"./index-BiE6xxiG.js";import"./LayerContext-Clj7bd5Z.js";import"./clamp-ekNJC_Xv.js";import"./Search-DQ49nJq_.js";import"./FormContext-DWfhBwkE.js";import"./bucket-16-BLwVjLVi.js";import"./Checkbox-DPhEN4jN.js";import"./RadioButton-aVRfOY8G.js";import"./useNormalizedInputProps-CiScQqEC.js";import"./DatePicker-BMolIoKN.js";import"./Dropdown-DYfcOZ8h.js";import"./downshift.esm-D4fflNyB.js";import"./FormGroup-DzyROZ99.js";import"./MultiSelect-3hMD_0IK.js";import"./NumberInput-Cpqim228.js";import"./bucket-17-0E7988s6.js";import"./RadioButtonGroup-9ebgYWnW.js";import"./usePrefersReducedMotion-Bjmq5o4u.js";import"./usePresence-DJOw8O-I.js";import"./ActionSet-DoeQiy-Y.js";import"./ButtonSet-TigcdyOE.js";import"./InlineLoading-DCLgadCg.js";import"./useWindowResize-DQAgZkOv.js";import"./TagSet-DhYsJrcH.js";import"./Tag-BUPZHD8e.js";import"./DefinitionTooltip-DV7wJZxM.js";import"./DismissibleTag-p8oU3cF1.js";import"./ComposedModal-DNlEtFPF.js";import"./toggleClass-DE6Cjo8X.js";import"./requiredIfGivenPropIsTruthy-C_XlQti5.js";import"./wrapFocus-bGeByaic.js";import"./usePortalTarget-aX8U2yX0.js";import"./OperationalTag-9BRu9g2h.js";import"./SkeletonText-8IZR3vl2.js";import"./getNodeTextContent-CjFansOq.js";import"./TextInput--RpbZDfF.js";const C=r(()=>e.createElement(v,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `}}]}),"DocsPage");C.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const{action:g}=__STORYBOOK_MODULE_ACTIONS__,P=`${S.prefix}--datagrid`,i=`storybook-${P}__validation-code-snippet`,yt={title:"Deprecated/Datagrid/EditableCell",component:c,tags:["autodocs"],parameters:{chromatic:{disableSnapshot:!0},styles:I,docs:{page:C},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},m={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:x,onClick:g("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:U,isDelete:!0,onClick:g("Clicked row action: delete")}]},_=r(({...t})=>{const[n,l]=h.useState(E(10,{includeNonEditableCell:!0,column:"lastName"})),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},w);return e.createElement(D,{flags:{"enable-datagrid-useEditableCell":!0}},e.createElement(c,{datagridState:p}),e.createElement(k,null,e.createElement(u,null,e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits"))),e.createElement(u,null,e.createElement("p",null,"The second row's"," ",e.createElement("code",{className:i},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},"EditableCellUsage"),H=r(({...t})=>e.createElement(_,{defaultGridProps:{...t}}),"EditableCellTemplateWrapper"),A=r(({...t})=>{const[n,l]=h.useState(E(10)),d=e.useMemo(()=>b(),[]),p=f({columns:d,data:n,onDataUpdate:l,...t.defaultGridProps},N);return e.createElement(D,null,e.createElement(c,{datagridState:p}),e.createElement("p",null,"The following inline edit columns incorporate validation:",e.createElement("code",{className:i},"first_name"),e.createElement("code",{className:i},"last_name"),e.createElement("code",{className:i},"age"),e.createElement("code",{className:i},"visits")))},"InlineEditUsage"),O=r(({...t})=>e.createElement(A,{defaultGridProps:{...t}}),"InlineEditTemplateWrapper"),y={gridTitle:m.gridTitle,gridDescription:m.gridDescription,useDenseHeader:m.useDenseHeader},a=H.bind({});a.storyName="Using useEditableCell hook";a.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};a.args={...y};const G="Using deprecated useInlineEdit hook",o=O.bind({});o.storyName=G;o.argTypes={gridTitle:s.gridTitle,gridDescription:s.gridDescription,useDenseHeader:s.useDenseHeader};o.args={...y};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};const Tt=["EditableCellUsageStory","InlineEditUsageStory"];export{a as EditableCellUsageStory,o as InlineEditUsageStory,Tt as __namedExportsOrder,yt as default};
//# sourceMappingURL=EditableCell.stories-DvsL78rw.js.map
