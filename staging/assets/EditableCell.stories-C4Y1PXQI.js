import{e as n,r as p}from"./index-CPiZ6Cnx.js";import{a as le}from"./index-B-lxVbXh.js";import{p as J}from"./settings-41bnSjHp.js";import{I as Ve,a as Fe,D as Z,m as ge,g as Ee,u as he}from"./_storybook-styles-ITD0tr0b.js";import{S as He}from"./StoryDocsPage-B0IyT778.js";import{A as F}from"./getArgTypes-Ci8wh0IQ.js";import{W as Ie}from"./index-Ba3NkkVL.js";import{b as Re,c as N,_ as Ge,P as i,L as We}from"./index-BPCFiO9b.js";import{L as de}from"./ListItem-DPfNRx_s.js";import{C as Be}from"./Checkbox-C003KrfO.js";import{D as Xe,a as Ye}from"./DatePicker-ClN6dyFZ.js";import{D as ze}from"./Dropdown-CFsOHIZw.js";import{N as Ke}from"./NumberInput-B32JHXD-.js";import{T as Je}from"./TextInput-d19WJcLV.js";import{p as Qe}from"./props-helper-C4WGU-Xx.js";import{u as Ze}from"./usePreviousValue-CSEZflXC.js";import{u as et}from"./useIsomorphicEffect-CqAX3nH-.js";import{c as tt}from"./bucket-2-Bg39G-BA.js";import{C as nt}from"./bucket-1-2OIQCase.js";import{a as Ce}from"./bucket-6-CO2LLwKX.js";import{T as it}from"./bucket-17-VMH0CKri.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CtRu48qb.js";import"./events-OVwOsPzJ.js";import"./index-H2wBg9na.js";import"./devtools-Ca6Wku6c.js";import"./feature-flags-CMZHtsao.js";import"./TableRow-DwiBFqxp.js";import"./wrapComponent-NawzZkim.js";import"./bucket-0-BYIdRiFw.js";import"./TableToolbar-D7ssWpP4.js";import"./Text-DJS5NTiV.js";import"./ErrorEmptyState-BhU31DBw.js";import"./Link-BmRyJrPM.js";import"./EmptyState-DE_svrN6.js";import"./index-DtQVt1M7.js";import"./EmptyStateV2-B4khpug4.js";import"./iframe-necW5_o2.js";import"./ErrorIllustration-Dy4XNg1g.js";import"./useId-f4Cxwosn.js";import"./uuidv4-BN2rGLQG.js";import"./index-B83en7q5.js";import"./index-ZKO_qc5e.js";import"./NoDataEmptyState-DK2y7_fS.js";import"./NoDataIllustration-B46ecV68.js";import"./NotFoundEmptyState-BC_6Ob1k.js";import"./NotFoundIllustration-BAzohCYd.js";import"./index.esm-Un75556h.js";import"./extends-CF3RwP-h.js";import"./useResizeObserver-CZKdqPxj.js";import"./MenuItem-qN6UbXhC.js";import"./useControllableState-uQXf5Mu5.js";import"./useAttachedMenu-CqlpaYyp.js";import"./useWindowResize-Bp7C0uQJ.js";import"./mergeRefs-CTUecegF.js";import"./getFocusableElements-BW7cf991.js";import"./index-CtW6Lsnp.js";import"./index-BI1fCQHV.js";import"./useClickOutside-CmCSbinx.js";import"./AccordionItem-BqwgX8kA.js";import"./Search-Cc2Df4em.js";import"./FormContext-CgeSXHS1.js";import"./bucket-15-e1AWIpaL.js";import"./index-C_tB4MqD.js";import"./LayerContext-BGhaVt7n.js";import"./FormGroup-BF7c02p3.js";import"./RadioButton-CQKVrHNr.js";import"./RadioButtonGroup-DgAqhidy.js";import"./bucket-18-CAzey7tD.js";import"./MultiSelect-CPsAePV3.js";import"./index-B0LLDM2X.js";import"./usePrefersReducedMotion-B4CsCXC2.js";import"./usePresence-V30dXmOF.js";import"./ActionSet-DmJNgN-v.js";import"./ButtonSet-BTIAcY4e.js";import"./InlineLoading-Cst7O9Fk.js";import"./TagSet-C1mdPl0m.js";import"./Tag-BJO4fr33.js";import"./DefinitionTooltip-3iCit3mp.js";import"./DismissibleTag-CbjlURNz.js";import"./ComposedModal-CgRKyN5W.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-Dfrp1CCV.js";import"./usePortalTarget-DAnmNO4S.js";import"./OperationalTag-BdUw-zPm.js";import"./SkeletonText-Dd-IYFPc.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-GAgccHqf.js";import"./bucket-7-ouWb30ej.js";import"./index-C-2_Eo4o.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";import"./story-helper-C7pmvIin.js";import"./index-CT49tSwO.js";import"./bucket-10-COvSrTUI.js";import"./useNormalizedInputProps-CqoVIYpB.js";import"./bucket-16-D6LVaITE.js";import"./useAnnouncer-Dwt0jqXi.js";function De(a){let{className:l,nested:u=!1,isExpressive:d=!1,...f}=a;const I=Re(),s=N(`${I}--list--unordered`,l,{[`${I}--list--nested`]:u,[`${I}--list--expressive`]:d});return n.createElement("ul",Ge({className:s},f))}De.propTypes={children:i.node,className:i.string,isExpressive:i.bool,nested:i.bool};const T=`${J.prefix}--datagrid`,ee=({label:a,renderIcon:l,labelIcon:u,placeholder:d,disabledCell:f,nonEditCell:I,isActiveCell:s,columnConfig:h,type:o})=>n.createElement("div",{className:N(`${T}__inline-edit-button`,{[`${T}__inline-edit-button--disabled`]:f,[`${T}__inline-edit-button--with-label-icon`]:u,[`${T}__inline-edit-button--non-edit`]:I,[`${T}__inline-edit-button--active`]:s,[`${T}__inline-edit-button--${o}`]:o==="date"||o==="selection"}),tabIndex:s?0:-1,"data-disabled":f,"aria-disabled":f,role:"button"},u&&n.createElement("div",{className:`${T}__label-icon`},n.createElement(u,null)),a!==""?n.createElement("span",{className:N(`${T}__inline-edit-button-label`,{[`${T}__inline-edit-button-label-with-icon`]:!I,[`${T}__defaultStringRenderer--multiline`]:h==null?void 0:h.multiLineWrap})},a):n.createElement("span",{className:`${T}__placeholder`},d),!I&&l&&n.createElement("div",{className:`${T}__inline-edit-button-icon`},n.createElement(l,null)));ee.propTypes={columnConfig:i.object,disabledCell:i.bool,isActiveCell:i.bool,label:i.oneOfType([i.string,i.number]),labelIcon:i.oneOfType([i.func,i.object]),nonEditCell:i.bool,placeholder:i.string,renderIcon:i.oneOfType([i.func,i.object]),type:i.oneOf(["text","number","selection","date","checkbox"]),value:i.oneOfType([i.string,i.node])};ee.__docgenInfo={description:"",methods:[],displayName:"InlineEditButton",props:{columnConfig:{description:"",type:{name:"object"},required:!1},disabledCell:{description:"",type:{name:"bool"},required:!1},isActiveCell:{description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},labelIcon:{description:"",type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1},nonEditCell:{description:"",type:{name:"bool"},required:!1},placeholder:{description:"",type:{name:"string"},required:!1},renderIcon:{description:"",type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1},type:{description:"",type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'number'",computed:!1},{value:"'selection'",computed:!1},{value:"'date'",computed:!1},{value:"'checkbox'",computed:!1}]},required:!1},value:{description:"",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1}}};const b=`${J.prefix}--datagrid`,W=({cell:a,config:l,disabledCell:u=!1,instance:d,placeholder:f="",tabIndex:I,value:s,nonEditCell:h=!1,type:o})=>{var re;const A=a.column.id,v=d.columns.findIndex(e=>e.id===A),H=a.row.index,c=`column-${v}-row-${H}`,{state:B,dispatch:_}=p.useContext(Ve),[C,x]=p.useState(!1),[m,j]=p.useState(s),[R,X]=p.useState(),[V,Te]=p.useState(),{activeCellId:S,editId:L}=B,g=Ze({editId:L,activeCellId:S}),{inputProps:E}=l||{},te=p.useRef(void 0),we=p.useRef(void 0),ne=p.useRef(void 0),w=p.useRef(void 0),Y=p.useRef(void 0),{rowSize:M,onDataUpdate:ie}=d;let $;C&&(d.cellEditing={cellId:c,columnIndex:v,rowIndex:H,curCellValue:m}),p.useEffect(()=>{X(s);const e=a.column.id,t=d.columns.find(r=>r.id===e);Te(typeof t.Header=="string"?t.Header:"Inline edit cell label")},[]),p.useEffect(()=>{if((g==null?void 0:g.editId)===c&&!L||(g==null?void 0:g.editId)===c&&c!==L){const{validator:e}=l||{};if(e==null?void 0:e(m)){j(R),$(R);return}}},[g==null?void 0:g.editId,L,c,m,l,R,$]),p.useEffect(()=>{(S!==c||!L)&&x(!1),S===c&&L===c&&!h&&(x(!0),$(m))},[S,c,h,L,m,$]);const ve=e=>{const t=document.querySelector(`#${b}__inline-edit--date-picker--${a.row.index}`),r=e==="selection"?w==null?void 0:w.current:t;r.click(),e==="date"&&(r==null||r.focus())};p.useEffect(()=>{if((g==null?void 0:g.editId)===c&&(g==null?void 0:g.activeCellId)===c&&S!==c){const{validator:e}=l||{};(e==null?void 0:e(m))||X(m)}},[g,c,m,S,l]);const $e=()=>{C||(_({type:"ENTER_EDIT_MODE",payload:{activeCellId:c,editId:c}}),x(!0),setTimeout(()=>{(o==="selection"||o==="date")&&ve(o)},1))};p.useEffect(()=>{var e;C&&(o==="text"&&te.current.focus(),o==="number"&&ne.current.focus(),o==="selection"&&((e=w==null?void 0:w.current)==null||e.focus()))},[C,o]),$=p.useCallback(e=>{const t=a.column.id,r=a.row.index;ie(y=>y.map((D,k)=>k===r?{...y[r],[t]:e}:D))},[a,ie]),p.useEffect(()=>{j(s)},[s]);const P=()=>{document.querySelector(`#${d.tableId} .${b}__table-with-inline-edit`).focus()},G=e=>{const t=d.rows.length;return e==="Enter"?`column-${v}-row-${a.row.index<t-1&&o==="checkbox"?a.row.index+1:a.row.index}`:`column-${v<d.columns.length-1?v+1:v}-row-${a.row.index}`},ke=e=>{const{key:t}=e;switch(t){case"ArrowRight":case"ArrowLeft":case"ArrowUp":case"ArrowDown":if(C&&e.target.type==="checkbox"){const r=G(t);$(m),X(m),_({type:"EXIT_EDIT_MODE",payload:r}),x(!1),P()}break;case"Tab":case"Enter":{if(o==="checkbox"){const r=G(t);_({type:"EXIT_EDIT_MODE",payload:r}),x(!1),P()}if(C){if(o==="selection"||o==="date")return;const{validator:r}=l||{};if(r==null?void 0:r(m))return;const D=G(t);$(m),X(m),_({type:"EXIT_EDIT_MODE",payload:D}),x(!1),P()}break}case"Escape":{C&&(_({type:"EXIT_EDIT_MODE",payload:c}),j(R),$(R),x(!1),P());break}default:return}},Ne=()=>{_({type:"UPDATE_ACTIVE_CELL_ID",payload:c})},Se=e=>!!(e!=null&&e.icon)?n.createElement(n.Fragment,null,n.createElement(e.icon),n.createElement("span",{className:N(`${b}__inline-edit--select-item`)},e==null?void 0:e.text)):e==null?void 0:e.text,ae=e=>e!=null&&e.length&&typeof e[0]=="object"?t=>Se(t):null;et(()=>{if(w.current&&w.current.style){const e=w.current.closest(`.${b}__inline-edit--select`);e.style.width=`${a.column.totalWidth}px`}},[w.current,a.column.totalWidth]);const qe=()=>{const{inputProps:e}=l||{};return n.createElement(ze,{id:c,label:V||"Dropdown menu options",ariaLabel:V||"Dropdown menu options",...e,hideLabel:!0,className:N(`${b}__inline-edit--select`,{[`${b}__inline-edit--select-${M}`]:M}),items:(e==null?void 0:e.items)||[],initialSelectedItem:a.value,itemToElement:ae(e==null?void 0:e.items),renderSelectedItem:ae(e==null?void 0:e.items),onChange:t=>{var y;const r=G("Enter");$(t.selectedItem),j(t.selectedItem),_({type:"EXIT_EDIT_MODE",payload:r}),x(!1),P(),(y=e==null?void 0:e.onChange)==null||y.call(e,t.selectedItem)},downshiftProps:{onStateChange:t=>{const{isOpen:r}=t||{};r===!1&&(_({type:"EXIT_EDIT_MODE",payload:c}),x(!1),P())}},ref:w,autoAlign:!0})},je=()=>{if(o==="text")return Ce;if(o==="number")return tt;if(o==="selection")return We;if(o==="date")return nt},Oe=()=>{var r,y;const e=Qe(l.inputProps,["datePickerInputProps"]),t=(r=l==null?void 0:l.inputProps)==null?void 0:r.datePickerInputProps;return n.createElement(Xe,{...e,appendTo:(y=Y==null?void 0:Y.current)==null?void 0:y.parentElement,ref:D=>{if(D&&D.style){D.style.width=`${a.column.totalWidth}px`;const k=`${b}__inline-edit--date-picker--${a.row.index}`,z=D.querySelector(`input#${k}`);z&&(z.style.position="static")}},datePickerType:"single",className:N(`${b}__inline-edit--date`,{[`${b}__inline-edit--date-${M}`]:M}),onChange:D=>{var se;const k=D[0];(se=e==null?void 0:e.onChange)==null||se.call(e,k,a);const z=G("Enter");$(k),j(k),setTimeout(()=>{x(!1),P(),_({type:"EXIT_EDIT_MODE",payload:z})},1)},value:a.value},n.createElement(Ye,{...t,placeholder:(t==null?void 0:t.placeholder)||"mm/dd/yyyy",labelText:(t==null?void 0:t.labelText)||V||"Set date",id:`${b}__inline-edit--date-picker--${a.row.index}`,hideLabel:!0}))},oe=e=>e.toString().padStart(2,"0"),Ue=e=>{var r;const t=(r=l==null?void 0:l.inputProps)==null?void 0:r.dateFormat;if(e instanceof Date){const y=e.getFullYear(),D=oe(e.getMonth()+1),k=oe(e.getDate());if(t==="m/d/Y"||e==="m/d/y")return[D,k,y].join("/");if(t==="d/m/Y"||t==="d/m/y"||t===void 0)return[k,D,y].join("/")}else return e;return null},Ae=()=>{const{validator:e}=l||{};return n.createElement(Ke,{placeholder:f,label:V,...E,id:c,hideLabel:!0,defaultValue:m,invalid:e==null?void 0:e(m),invalidText:(E==null?void 0:E.invalidText)||"Provide missing invalidText",onChange:(t,{value:r})=>{j(r),E.onChange&&E.onChange(r)},ref:ne})},Le=()=>n.createElement(Be,{labelText:V||"Checkbox",...E,className:N(`${b}__inline-edit--outer-cell-checkbox`,{[`${b}__inline-edit--outer-cell-checkbox-focus`]:S===c}),id:c,hideLabel:!0,checked:m,onChange:(e,{checked:t})=>{j(t),E.onChange&&E.onChange(t)},ref:we}),Me=()=>{const{validator:e}=l||{},t=e==null?void 0:e(m);return n.createElement(Je,{labelText:V,placeholder:f,...E,id:c,hideLabel:!0,defaultValue:m,invalid:t,invalidText:(E==null?void 0:E.invalidText)||"Provide missing invalidText",onChange:r=>{j(r.target.value),E.onChange&&E.onChange(r.target.value)},ref:te})},Pe=()=>{const e=t=>{if(typeof t=="object"&&(t!=null&&t.isStaticCell))return t==null?void 0:t.value};switch(o){case"selection":return e(s),(s==null?void 0:s.text)??s;case"date":return e(s),Ue(s);default:return e(s)??s}};return n.createElement("div",{ref:Y,"data-cell-id":c,"data-column-index":v,"data-row-index":a.row.index,"data-disabled":u||h,"data-inline-type":o,onClick:h?Ne:$e,onKeyDown:h?null:ke,className:N(`${b}__inline-edit--outer-cell-button`,{[`${b}__inline-edit--outer-cell-button--${M}`]:M,[`${b}__inline-edit--outer-cell-button--lg`]:!M,[`${b}__inline-edit--outer-cell-button--invalid`]:C&&((re=l==null?void 0:l.validator)==null?void 0:re.call(l,m)),[`${b}__static--outer-cell`]:!u})},(!C||u)&&o!=="checkbox"&&n.createElement(ee,{isActiveCell:c===S,renderIcon:je(),label:Pe(),disabledCell:u,labelIcon:(s==null?void 0:s.icon)||null,placeholder:f,tabIndex:I,nonEditCell:h,columnConfig:a.column,type:o}),o==="checkbox"&&Le(),!h&&C&&c===S&&n.createElement(n.Fragment,null,o==="text"&&Me(),o==="number"&&Ae(),o==="selection"&&qe(),o==="date"&&Oe()))};W.propTypes={cell:i.object,config:i.object,disabledCell:i.bool,instance:i.shape({columns:i.arrayOf(i.object),onDataUpdate:i.func,rows:i.arrayOf(i.object),rowSize:i.string,tableId:i.string,cellEditing:i.object}),nonEditCell:i.bool,placeholder:i.string,tabIndex:i.number,type:i.oneOf(["text","number","selection","date","checkbox"]),value:i.oneOfType([i.string,i.node,i.object])};W.__docgenInfo={description:"",methods:[],displayName:"InlineEditCell",props:{disabledCell:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},placeholder:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},nonEditCell:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},cell:{description:"",type:{name:"object"},required:!1},config:{description:"",type:{name:"object"},required:!1},instance:{description:"",type:{name:"shape",value:{columns:{name:"arrayOf",value:{name:"object"},required:!1},onDataUpdate:{name:"func",required:!1},rows:{name:"arrayOf",value:{name:"object"},required:!1},rowSize:{name:"string",required:!1},tableId:{name:"string",required:!1},cellEditing:{name:"object",required:!1}}},required:!1},tabIndex:{description:"",type:{name:"number"},required:!1},type:{description:"",type:{name:"enum",value:[{value:"'text'",computed:!1},{value:"'number'",computed:!1},{value:"'selection'",computed:!1},{value:"'date'",computed:!1},{value:"'checkbox'",computed:!1}]},required:!1},value:{description:"",type:{name:"union",value:[{name:"string"},{name:"node"},{name:"object"}]},required:!1}}};const K=`${J.prefix}--datagrid`,_e=a=>{const l=(u,{cell:d,instance:f})=>{var v,H,c,B,_,C;const I=d.column.inlineEdit,s=(H=(v=d.column)==null?void 0:v.inlineEdit)==null?void 0:H.type,h=(c=d.column)==null?void 0:c.isDisabled,o=typeof d.value=="object"&&d.column.id===((B=d.value)==null?void 0:B.columnId)&&((_=d.value)==null?void 0:_.isStaticCell),A=x=>n.createElement(W,{config:I,tabIndex:-1,value:d.value,cell:d,disabledCell:h,instance:f,type:x});return d.column.id==="spacer"?[u,{className:N(`${K}__cell`,`${K}__cell--spacer`)}]:[u,{className:N(`${K}__cell`,`${K}__cell-inline-edit`),role:"gridcell",children:n.createElement(n.Fragment,null,!o&&s==="text"&&A(s),!o&&s==="number"&&A(s),!o&&s==="selection"&&A(s),s==="checkbox"&&A(s),!o&&s==="date"&&A(s),o&&n.createElement(W,{config:I,tabIndex:-1,value:(C=d.value)==null?void 0:C.value,cell:d,instance:f,nonEditCell:!0,type:"text"}),!s&&n.createElement(W,{config:I,tabIndex:-1,value:d.value,cell:d,instance:f,disabledCell:h,nonEditCell:!0,type:"text"}))}]};a.getCellProps.push(l),a.useInstance.push(u=>{Object.assign(u,{withInlineEdit:!0})})},at=a=>{_e(a)},xe=()=>n.createElement(He,{omitCodedExample:!0,blocks:[{description:"The `Datagrid` supports inline editing when used with the `useEditableCell` hook (previously named `useInlineEdit` in v1) and columns are provided the required configuration. The four data types supported are strings, numbers, dates, and\n        selection (dropdown)."},{description:`Below are example column configurations for the supported inline edit data types:

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
          `},story:O},{title:"Using deprecated useInlineEdit hook",description:"At this time, it is possible to still use the deprecated `useInlineEdit` hook but requires setting a feature flag. See example below:",source:{code:`
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
          `},story:U},{title:"Opt out of editing at cell level",description:"In some cases you may want to disable editing per cell. This is possible by providing the following structure for the cell value within your row data:",source:{code:`
{
  value: '—', // Value displayed for static cell
  isStaticCell: true,
  columnId: 'lastName',
}
          `}}]});xe.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const ot=`${J.prefix}--datagrid`,q=`storybook-${ot}__validation-code-snippet`,ni={title:"Deprecated/Datagrid/Datagrid/EditableCell",component:Z,tags:["autodocs"],parameters:{styles:Fe,docs:{page:xe},layout:"fullscreen",argTypes:{featureFlags:{table:{disable:!0}}}}},Q={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,rowActions:[{id:"edit",itemText:"Edit",icon:Ce,onClick:le("Clicked row action: edit")},{id:"delete",itemText:"Delete",icon:it,isDelete:!0,onClick:le("Clicked row action: delete")}]},rt=({...a})=>{const[l,u]=p.useState(ge(10,{includeNonEditableCell:!0,column:"lastName"})),d=n.useMemo(()=>Ee(),[]),f=he({columns:d,data:l,onDataUpdate:u,...a.defaultGridProps},at);return n.createElement(Ie,{flags:{"enable-datagrid-useEditableCell":!0}},n.createElement(Z,{datagridState:f}),n.createElement(De,null,n.createElement(de,null,n.createElement("p",null,"The following inline edit columns incorporate validation:",n.createElement("code",{className:q},"first_name"),n.createElement("code",{className:q},"last_name"),n.createElement("code",{className:q},"age"),n.createElement("code",{className:q},"visits"))),n.createElement(de,null,n.createElement("p",null,"The second row's"," ",n.createElement("code",{className:q},"lastName")," cell is an example of opting out of editing on a per cell basis."))))},st=({...a})=>n.createElement(rt,{defaultGridProps:{...a}}),lt=({...a})=>{const[l,u]=p.useState(ge(10)),d=n.useMemo(()=>Ee(),[]),f=he({columns:d,data:l,onDataUpdate:u,...a.defaultGridProps},_e);return n.createElement(Ie,null,n.createElement(Z,{datagridState:f}),n.createElement("p",null,"The following inline edit columns incorporate validation:",n.createElement("code",{className:q},"first_name"),n.createElement("code",{className:q},"last_name"),n.createElement("code",{className:q},"age"),n.createElement("code",{className:q},"visits")))},dt=({...a})=>n.createElement(lt,{defaultGridProps:{...a}}),ye={gridTitle:Q.gridTitle,gridDescription:Q.gridDescription,useDenseHeader:Q.useDenseHeader},O=st.bind({});O.storyName="Using useEditableCell hook";O.argTypes={gridTitle:F.gridTitle,gridDescription:F.gridDescription,useDenseHeader:F.useDenseHeader};O.args={...ye};const ct="Using deprecated useInlineEdit hook",U=dt.bind({});U.storyName=ct;U.argTypes={gridTitle:F.gridTitle,gridDescription:F.gridDescription,useDenseHeader:F.useDenseHeader};U.args={...ye};var ce,ue,me;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:`({
  ...args
}) => {
  return <EditableCellUsage defaultGridProps={{
    ...args
  }} />;
}`,...(me=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,fe,be;U.parameters={...U.parameters,docs:{...(pe=U.parameters)==null?void 0:pe.docs,source:{originalSource:`({
  ...args
}) => {
  return <InlineEditUsage defaultGridProps={{
    ...args
  }} />;
}`,...(be=(fe=U.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};const ii=["EditableCellUsageStory","InlineEditUsageStory"];export{O as EditableCellUsageStory,U as InlineEditUsageStory,ii as __namedExportsOrder,ni as default};
