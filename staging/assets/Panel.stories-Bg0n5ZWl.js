import{p as Be,y as O,j as n,I as Ge,k as Ve,T as _e}from"./settings-BiUEFdm2.js";import{A as r}from"./getArgTypes-CUsKgYxs.js";import{S as Je}from"./StoryDocsPage-BuwgUq5r.js";import{a as s}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{c as $e,d as Ee,e as Ue,f as ze,C as We,B as $,i as Ye,j as Ke,N as Xe,k as Qe,M as Ze,m as et,u as tt,D as be,a as rt}from"./_storybook-styles-DrT-5E9g.js";import{r as y,R as at}from"./index-BwDkhjyp.js";import{u as it,c as _}from"./deprecate-D9ms-jbM.js";import{D as lt}from"./DatagridActions-BH635xs0.js";import{g as ot}from"./getBatchActions-F766K-AL.js";import{u as nt}from"./useColumnCenterAlign-BbAPAsaU.js";import{P as l}from"./index-Dk74W0Oi.js";import{u as st}from"./useWindowResize-HTxQvUhS.js";import{u as dt}from"./useClickOutside-Dcd11u7q.js";import{A as ct}from"./ActionSet-DPSyJhT2.js";import{F as pt}from"./bucket-6-CpWzItqu.js";import{S as ut}from"./StatusIcon-CHqtUvRk.js";const mt=`${Be.prefix}--datagrid`,u=`${mt}-filter-flyout`,j={flyoutIconDescription:"Open filters",title:"Filter",primaryActionLabel:"Apply",secondaryActionLabel:"Cancel"},E=({updateMethod:t,flyoutIconDescription:e=j.flyoutIconDescription,filters:a=[],title:o=j.title,primaryActionLabel:i=j.primaryActionLabel,onFlyoutOpen:d=()=>{},onFlyoutClose:g=()=>{},onApply:m=()=>{},onCancel:A=()=>{},secondaryActionLabel:b=j.secondaryActionLabel,setAllFilters:h,data:H=[],reactTableFiltersState:R=[]})=>{const[f,T]=y.useState(!1),[De,U]=y.useState(!1),Pe=()=>{T(!1),A()},{filtersState:q,prevFiltersObjectArrayRef:Ce,prevFiltersRef:z,cancel:W,reset:Se,renderFilter:Ae,filtersObjectArray:I,lastAppliedFilters:M}=$e({updateMethod:t,filters:a,setAllFilters:h,variation:Ee,reactTableFiltersState:R,onCancel:Pe}),{width:ke}=Ve.md,Fe=parseInt(ke)*16,Y=y.useRef(null),c=y.useRef(null),Le=y.useRef(null),[Re,Ne]=Ue({initialValue:!0,filtersState:q,prevFiltersRef:z}),Ie=p=>{const k=c==null?void 0:c.current.getBoundingClientRect(),N=parseInt(window.getComputedStyle(c==null?void 0:c.current).getPropertyValue("width"));if(Math.sign(k.left)===-1){const V=N-Math.abs(k.left);c.current.style.width=O(V)}if(N<642&&Math.sign(k.left)===1||Math.sign(k.left).toString()==="0"){const V=N+Math.abs(k.left);c.current.style.width=O(V)}(p==null?void 0:p.innerWidth)<=Fe+254?U(!0):U(!1)};st(({current:p})=>{Ie(p)});const B=t===$,Me=it(),Oe=()=>{T(!0),d()},G=()=>{T(!1),g(),c.current.style.width=O(642)};y.useEffect(()=>{c.current.style.width=O(642)},[]);const je=()=>{h(I),G(),m({filtersState:q,filtersObjectArray:I,lastAppliedFilters:M}),Ne(!0),z.current=JSON.stringify(q),Ce.current=JSON.stringify(I),M.current=JSON.stringify(I)},He=()=>a.map(Ae),qe=()=>B&&n.jsx(ct,{actions:[{key:1,kind:"primary",label:i,onClick:je,isExpressive:!1,disabled:Re},{key:3,kind:"secondary",label:b,onClick:W,isExpressive:!1}],size:"md",buttonSize:"md"});return dt(Y,p=>{const k=p.closest(".flatpickr-calendar"),N=p.className===`${Me}--list-box__menu-item__option`;!f||k||N||(G(),W())}),ze(We,p=>{Se(p)}),y.useEffect(function(){M.current=JSON.stringify(R)},[R,M]),n.jsxs("div",{className:`${u}__container`,ref:Y,children:[n.jsx(Ge,{label:e,kind:"ghost",align:"bottom",onClick:f?G:Oe,className:_(`${u}__trigger`,{[`${u}__trigger--open`]:f}),disabled:H.length===0,children:n.jsx(pt,{})}),n.jsxs("div",{className:_(u,{[`${u}--open`]:f,[`${u}--batch`]:B,[`${u}--instant`]:!B}),ref:c,children:[n.jsxs("div",{className:`${u}__inner-container`,children:[n.jsx("span",{className:`${u}__title`,children:o}),n.jsx("div",{className:_(`${u}__filters`,{[`${u}__stacked`]:De}),ref:Le,children:He()})]}),qe()]})]})};E.propTypes={data:l.array.isRequired,filters:l.arrayOf(l.shape({type:l.string.isRequired,column:l.string.isRequired,props:l.object.isRequired})).isRequired,flyoutIconDescription:l.string,onApply:l.func,onCancel:l.func,onFlyoutClose:l.func,onFlyoutOpen:l.func,primaryActionLabel:l.string,reactTableFiltersState:l.arrayOf(l.shape({id:l.string.isRequired,type:l.string.isRequired,value:l.any.isRequired})),secondaryActionLabel:l.string,setAllFilters:l.func.isRequired,title:l.string,updateMethod:l.oneOf([$,Ye]).isRequired};E.__docgenInfo={description:"",methods:[],displayName:"FilterFlyout",props:{flyoutIconDescription:{defaultValue:{value:"'Open filters'",computed:!1},description:"Icon description for the filter flyout button",type:{name:"string"},required:!1},filters:{defaultValue:{value:"[]",computed:!1},description:"Array of filters to render",type:{name:"arrayOf",value:{name:"shape",value:{type:{name:"string",required:!0},column:{name:"string",required:!0},props:{name:"object",required:!0}}}},required:!1},title:{defaultValue:{value:"'Filter'",computed:!1},description:"Title of the filter flyout",type:{name:"string"},required:!1},primaryActionLabel:{defaultValue:{value:"'Apply'",computed:!1},description:"Label text of the primary action in the flyout",type:{name:"string"},required:!1},onFlyoutOpen:{defaultValue:{value:"() => {}",computed:!1},description:"Callback when the flyout opens",type:{name:"func"},required:!1},onFlyoutClose:{defaultValue:{value:"() => {}",computed:!1},description:"Callback when the flyout closes",type:{name:"func"},required:!1},onApply:{defaultValue:{value:"() => {}",computed:!1},description:"Callback when the apply button is clicked",type:{name:"func"},required:!1},onCancel:{defaultValue:{value:"() => {}",computed:!1},description:"Callback when the cancel button is clicked",type:{name:"func"},required:!1},secondaryActionLabel:{defaultValue:{value:"'Cancel'",computed:!1},description:"Label text of the secondary action in the flyout",type:{name:"string"},required:!1},data:{defaultValue:{value:"[]",computed:!1},description:"All data rows in the table",type:{name:"array"},required:!1},reactTableFiltersState:{defaultValue:{value:"[]",computed:!1},description:"Filters from react table's state",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"string",required:!0},type:{name:"string",required:!0},value:{name:"any",required:!0}}}},required:!1},setAllFilters:{description:"Function that sets all the filters, this comes from the datagridState",type:{name:"func"},required:!0},updateMethod:{description:"The update method used to apply the filters",type:{name:"enum",value:[{value:"'batch'",computed:!1},{value:"'instant'",computed:!1}]},required:!0}}};const K=(t,e,a)=>{const o=a.filter(i=>i.selected).map(i=>i.value);return o.length===0?t:t.filter(i=>{const d=i.values[e];return o.includes(d)})},ft=t=>{const e=y.useMemo(()=>({[Ke]:(a,o,[i,d])=>a.filter(g=>{const m=g.values[o],A=typeof i=="object"?i:new Date(i),b=typeof d=="object"?d:new Date(d),h=typeof m=="object"?m:new Date(m);return h.getTime()<=b.getTime()&&h.getTime()>=A.getTime()}),[Xe]:(a,o,i)=>{if(i==="")return a;const d=parseInt(i);return a.filter(g=>g.values[o]===d)},[Qe]:(a,o,i)=>K(a,o,i),[Ze]:(a,o,i)=>K(a,o,i)}),[]);t.useInstance.push(a=>{const{filterProps:o,setAllFilters:i,setFilter:d,headers:g,data:m,state:A}=a,b={variation:"flyout",updateMethod:$,panelIconDescription:"Open filter panel",reactTableFiltersState:A.filters},h=()=>({...b,...o,setAllFilters:i,setFilter:d,headers:g,data:m});Object.assign(a,{filterProps:{...b,...a==null?void 0:a.filterProps},filterTypes:e,getFilterFlyoutProps:h,FilterFlyout:E})})},Te=()=>n.jsx(Je,{omitCodedExample:!0,blocks:[{title:"Filtering",description:`Table filtering allows a user to add or remove data items from a data table by selecting or clearing predefined attributes. Filters can help a user find something they're looking for, view available options within a certain set of criteria, and decide between many options. These guidelines are an extension of [Carbon's filter documentation](https://carbondesignsystem.com/patterns/filtering/).
        `},{description:"Filtering results in a table is a different type of action from searching. While both actions can help the user narrow results down, searching is meant to help the user find a specific result, whereas filtering allows users to trim results according to its attributes."},{description:"Applied filters can affect both the data that is visible in the table and also data that might not be displayed in the columns available in the table. Filter options can be displayed in many form components, including dropdowns, text inputs, checkboxes, radio buttons, and date range pickers."},{description:"[Check out the Guidance here.](https://pages.github.ibm.com/cdai-design/pal/components/data-table/filters/)"},{subTitle:"Preparing your column headers"},{description:"To utilize filtering, you have to add some extra properties into your headers that are going to be filtered."},{description:"Two things you need to do is:\n- Specify a `filter` to use (unless it's text match which is default)\n- (Optional) Render the component with the `Cell` property to display the right information. Use this if the data you send into the table isn't how you want to display it, for example like Dates. See the example for `passwordStrength` below.\n        "},{description:"For example; here we are specifying that the `joined` header column should be filtered using a `filter: 'date'`, and render the cell using it's value and converting it to string. (Since the value of joined is a date object, react isn't going to allow you to render it as jsx so we have to convert it to string)",source:{code:`
{
  Header: 'Joined',
  accessor: 'joined',
  filter: 'date',
  Cell: ({ cell: { value } }) => <span>{value.toLocaleDateString()}</span>,
},
          `}},{description:`The different types of filters are:
- text (default)
- date
- number
- checkbox
- radio
- dropdown
        `,source:{code:`
const columns = [
  {
    Header: 'Row Index',
    accessor: (row, i) => i,
    sticky: 'left',
    id: 'rowIndex', // id is required when accessor is a function.
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Age',
    accessor: 'age',
    width: 50,
  },
  {
    Header: 'Visits',
    accessor: 'visits',
    filter: 'number',
    width: 60,
  },
  {
    Header: 'Status',
    accessor: 'status',
    filter: 'dropdown',
  },
  // Shows the date filter example
  {
    Header: 'Joined',
    accessor: 'joined',
    filter: 'date',
    Cell: ({ cell: { value } }) => <span>{value.toLocaleDateString()}</span>,
  },
  // Shows the checkbox filter example
  {
    Header: 'Password strength',
    accessor: 'passwordStrength',
    filter: 'checkbox',
    Cell: ({ cell: { value } }) => {
      const iconProps = {
        size: 'sm',
        theme: 'light',
        kind: value,
        iconDescription: value,
      };

      return (
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <StatusIcon {...iconProps} />
          {iconProps.iconDescription}
        </span>
      );
    },
  },
  // Shows the checkbox filter example
  {
    Header: 'Role',
    accessor: 'role',
    filter: 'radio',
  },
];
          `}},{subTitle:"Store you data into state, this can also come from an API",source:{code:`
const [data] = useState([
  {
    activeSince: new Date('09/26/81'),
    age: 41,
    firstName: 'Joel',
    lastName: 'Miller',
    passwordStrength: 'normal',
    role: 'developer',
    visits: '81',
  },
  {
    activeSince: new Date('08/30/97'),
    age: 19,
    firstName: 'Ellie',
    lastName: 'N/A',
    passwordStrength: 'critical',
    role: 'designer',
    visits: '7',
  },
  {
    activeSince: new Date('01/26/03'),
    age: 39,
    firstName: 'Tommy',
    lastName: 'Miller',
    passwordStrength: 'minor-warning',
    role: 'researcher',
    visits: '25',
  },
]);
          `}},{subTitle:"Create your filters for flyout variant",description:"To add filters to the flyout, you have to pass in an array of filters. These filters will be converted to it's respective component. Each filters has 3 important props, `type`, `column`, `props`.\n- `type`: the type of filter (this should be the same `filter` property in the headers)\n- `column`: the column that it should be filtered on\n- `props`: the props for the components needed to render the filter.\n\nPlease refer to all the available filters that you can use below.\n        ",source:{code:`
const filters = [
  {
    type: 'date',
    column: 'joined',
    props: {
      DatePicker: {
        datePickerType: 'range',
        // Add any other Carbon DatePicker props here
      },
      DatePickerInput: {
        start: {
          id: 'date-picker-input-id-start',
          placeholder: 'mm/dd/yyyy',
          labelText: 'Joined start date',
          // Add any other Carbon DatePickerInput props here
        },
        end: {
          id: 'date-picker-input-id-end',
          placeholder: 'mm/dd/yyyy',
          labelText: 'Joined end date',
          // Add any other Carbon DatePickerInput props here
        },
      },
    },
  },
  {
    type: 'number',
    column: 'visits',
    props: {
      NumberInput: {
        min: 0,
        id: 'visits-number-input',
        invalidText: 'A valid value is required',
        label: 'Visits',
        placeholder: 'Type a number amount of visits',
        // Add any other Carbon NumberInput props here
      },
    },
  },
  {
    type: 'checkbox',
    column: 'passwordStrength',
    props: {
      FormGroup: {
        legendText: 'Password strength',
        // Add any other Carbon FormGroup props here
      },
      Checkbox: [
        {
          id: 'normal',
          labelText: 'Normal',
          value: 'normal',
          // Add any other Carbon Checkbox props here
        },
        {
          id: 'minor-warning',
          labelText: 'Minor warning',
          value: 'minor-warning',
          // Add any other Carbon Checkbox props here
        },
        {
          id: 'critical',
          labelText: 'Critical',
          value: 'critical',
          // Add any other Carbon Checkbox props here
        },
      ],
    },
  },
  {
    type: 'radio',
    column: 'role',
    props: {
      FormGroup: {
        legendText: 'Role',
        // Add any other Carbon FormGroup props here
      },
      RadioButtonGroup: {
        orientation: 'vertical',
        legend: 'Role legend',
        name: 'role-radio-button-group',
        // Add any other Carbon RadioButtonGroup props here
      },
      RadioButton: [
        {
          id: 'developer',
          labelText: 'Developer',
          value: 'developer',
          // Add any other Carbon RadioButton props here
        },
        {
          id: 'designer',
          labelText: 'Designer',
          value: 'designer',
          // Add any other Carbon RadioButton props here
        },
        {
          id: 'researcher',
          labelText: 'Researcher',
          value: 'researcher',
          // Add any other Carbon RadioButton props here
        },
      ],
      DefaultRadioButton: {
        id: 'any__unique-id-for-any-radio-button',
        labelText: 'Any',
        value: 'Any',
        // Add any other Carbon RadioButton props here
      }
    },
  },
  {
    type: 'dropdown',
    column: 'status',
    props: {
      Dropdown: {
        id: 'marital-status-dropdown',
        ariaLabel: 'Marital status dropdown',
        items: ['relationship', 'complicated', 'single'],
        label: 'Marital status',
        titleText: 'Marital status',
        // Add any other Carbon Dropdown props here
      },
    },
  },
  {
    type: 'multiSelect',
    column: 'status',
    props: {
      MultiSelect: {
        items: [
          { text: 'relationship', id: 'relationship' },
          { text: 'complicated', id: 'complicated' },
          { text: 'single', id: 'single' },
        ],
        id: 'carbon-multiselect-example',
        label: 'Status selection',
        titleText: 'Multiselect title',
        itemToString: (item) => (item ? item.text : ''),
        // Add any other Carbon MultiSelect props here
      },
    },
  },
];
          `}},{subTitle:"Create your filters for panel variant",description:"Filter panel coming soon."},{subTitle:"Customizing the filter tag labels",description:"You can customize the rendering of the filter tag labels by supplying the `renderLabel` property to your `filterProps` as seen below. Otherwise it will default to `key: value`.",source:{code:`
filterProps: {
  ...otherFilterProps,
  renderLabel: (key, value) => myCustomTagLabelFormatter(key, value),
},
          `}},{subTitle:"Putting it all together",source:{code:`
import { Datagrid, useDatagrid, useFiltering } from '@carbon/ibm-products';

const App = () => {
  const columns = [...];
  const [data] = useState([...]);
  const filters = [...];


  const datagridState = useDatagrid(
    {
      columns,
      data,
      filterProps: {
        variation: 'flyout', // default
        updateMethod: 'batch', // default
        primaryActionLabel: 'Apply', // default
        secondaryActionLabel: 'Cancel', // default
        flyoutIconDescription: 'Open filters', // default
        shouldClickOutsideToClose: false, // default
        filters,
      },
      DatagridActions,
      batchActions: true,
      toolbarBatchActions: getBatchActions(),
    },
    useFiltering
  );

  return <Datagrid datagridState={datagridState} />;
};
          `}},{subTitle:"`filterProps` types",source:{language:"json",code:`
filterProps: {
  /** The variation of filtering */
  variation: 'flyout'|'panel',
  /** The update method in which to filter, instant automatically
      applies the filters, batch the user has to click apply */
  updateMethod: 'batch'|'instant',
  /** Text for primary action button, default is 'Apply' */
  primaryActionLabel: string,
  /** Text for secondary action button, default is 'Cancel' */
  secondaryActionLabel: string,
  /** Text for flyout icon description */
  flyoutIconDescription: string,
  /** Array of objects to render filters in flyout */
  filters: object[]
  /** Applies custom formatting to filter tags */
  renderLabel: Function
}
          `}},{subTitle:"onApply method",source:{language:"jsx",code:`
/*
  This method is called when the user applies filters, if you want to do something after filters
  are applied here we pass in the filtersState. Inside the filtersState you can find the state of
  the filters in the ui, and you can find the array of appliedFilters.
*/

const datagridState = useDatagrid({
    columns,
    data,
    filterProps: {
      onApply: (filtersState) => console.log(filtersState),
    }
  });

  return <Datagrid datagridState={datagridState} />;
          `}}]});Te.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const F=(t,e)=>{switch(t){case"role":return`Role: ${e}`;case"joined":return`Joined: ${e}`;case"visits":return`Visits: ${e}`;case"passwordStrength":return`Password strength: ${e}`;case"status":return`Status: ${e}`;default:return`${t}: ${e}`}},ve=({defaultGridProps:t})=>{const{gridDescription:e,gridTitle:a,useDenseHeader:o,filterProps:i,emptyStateTitle:d,emptyStateDescription:g,initialState:m,data:A}=t,b=[{Header:"Row Index",accessor:(f,T)=>T,sticky:"left",id:"rowIndex"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Age",accessor:"age",width:50},{Header:"Visits",accessor:"visits",filter:"number",width:60},{Header:"Status",accessor:"status",filter:"multiSelect"},{Header:"Joined",accessor:"joined",filter:"date",Cell:({cell:{value:f}})=>n.jsx("span",{children:f.toLocaleDateString()})},{Header:"Password strength",accessor:"passwordStrength",filter:"checkbox",width:160,centerAlignedColumn:!0,Cell:({cell:{value:f}})=>{const T={size:"sm",theme:"light",kind:f,iconDescription:f};return n.jsx(_e,{label:T.iconDescription,children:n.jsx("button",{type:"button",className:"sb--tooltip-trigger",children:n.jsx(ut,{...T})})})}},{Header:"Role",accessor:"role"}],h=at.useMemo(()=>b,[]),[H]=y.useState(A??et(20)),R=tt({columns:h,data:H,initialState:m,DatagridActions:lt,batchActions:!0,toolbarBatchActions:ot(),filterProps:i,gridTitle:a,gridDescription:e,useDenseHeader:o,emptyStateTitle:d,emptyStateDescription:g},ft,nt);return n.jsx(be,{datagridState:R})};ve.__docgenInfo={description:"",methods:[],displayName:"FilteringUsage"};const J=(t,e)=>new Intl.DateTimeFormat(t).formatToParts(new Date).map(({type:o,value:i})=>{switch(o){case"day":return e?"dd":"d";case"month":return e?"mm":"m";case"year":return e?"yyyy":"Y";default:return i}}).join(""),gt={title:"IBM Products/Components/Datagrid/Filtering/Panel",component:be,tags:["autodocs"],parameters:{styles:rt,docs:{page:Te},layout:"fullscreen"},argTypes:{featureFlags:{table:{disable:!0}}},excludeStories:["filterProps","getDateFormat","multiSelectProps"]},ht=Array(25).fill(null).map((t,e)=>({id:`${e}`,labelText:`Dummy checkbox ${e+1}`,value:"dummy-checkbox",disabled:!0})),L=({...t})=>n.jsx(ve,{defaultGridProps:{...t}}),xe={items:[{text:"relationship",id:"relationship"},{text:"complicated",id:"complicated"},{text:"single",id:"single"}],id:"carbon-multiselect-example",label:"Status selection",titleText:"Multiselect title",itemToString:t=>t?t.text:"",size:"md",type:"default",disabled:!1,hideLabel:!1,invalid:!1,warn:!1,open:!1,clearSelectionDescription:"Total items selected: ",clearSelectionText:"To clear selection, press Delete or Backspace,"},we={variation:"panel",updateMethod:"batch",primaryActionLabel:"Apply",secondaryActionLabel:"Cancel",panelIconDescription:"Open filters",closeIconDescription:"Close panel",sections:[{categoryTitle:"Category title",hasAccordion:!0,filters:[{filterLabel:"Joined",filter:{type:"date",column:"joined",props:{DatePicker:{datePickerType:"range",locale:(navigator==null?void 0:navigator.language)||"en",dateFormat:J((navigator==null?void 0:navigator.language)||"en")},DatePickerInput:{start:{id:"date-picker-input-id-start",placeholder:J((navigator==null?void 0:navigator.language)||"en",!0),labelText:"Joined start date"},end:{id:"date-picker-input-id-end",placeholder:J((navigator==null?void 0:navigator.language)||"en",!0),labelText:"Joined end date"}}}}},{filterLabel:"Status",filter:{type:"multiSelect",column:"status",props:{MultiSelect:{...xe}}}}]},{categoryTitle:"Category title",filters:[{filterLabel:"Role",filter:{type:"radio",column:"role",props:{FormGroup:{legendText:"Role"},RadioButtonGroup:{orientation:"vertical",legend:"Role legend",name:"role-radio-button-group"},RadioButton:[{id:"developer",labelText:"Developer",value:"developer"},{id:"designer",labelText:"Designer",value:"designer"},{id:"researcher",labelText:"Researcher",value:"researcher"}]}}},{filterLabel:"Visits",filter:{type:"number",column:"visits",props:{NumberInput:{min:0,id:"visits-number-input",invalidText:"A valid value is required",label:"Visits",placeholder:"Type a number amount of visits"}}}},{filterLabel:"Password strength",filter:{type:"checkbox",column:"passwordStrength",props:{FormGroup:{legendText:"Password strength"},Checkbox:[{id:"normal",labelText:"Normal",value:"normal"},{id:"minor-warning",labelText:"Minor warning",value:"minor-warning"},{id:"critical",labelText:"Critical",value:"critical"}]}}}]}],onPanelOpen:s("onPanelOpen"),onPanelClose:s("onPanelClose"),panelTitle:"Filter",renderLabel:(t,e)=>F(t,e),renderDateLabel:(t,e)=>{const a=new Date(t),o=new Date(e);return`${a.toLocaleDateString()} - ${o.toLocaleDateString()}`}},v=L.bind({});v.storyName="Filter panel with batch update";v.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,filterProps:r.filterProps};v.args={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,emptyStateTitle:"No filters match",emptyStateDescription:"Data was not found with the current filters applied. Change filters or clear filters to see other results.",filterProps:we};const x=L.bind({});x.storyName="Filter panel with instant update";x.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,filterProps:r.filterProps};x.args={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,emptyStateTitle:"No filters match",emptyStateDescription:"Data was not found with the current filters applied. Change filters or clear filters to see other results.",filterProps:{variation:"panel",updateMethod:"instant",primaryActionLabel:"Apply",secondaryActionLabel:"Cancel",panelIconDescription:"Open filters",closeIconDescription:"Close panel",sections:[{categoryTitle:"Category title",hasAccordion:!0,filters:[{filterLabel:"Joined",filter:{type:"date",column:"joined",props:{DatePicker:{datePickerType:"range"},DatePickerInput:{start:{id:"date-picker-input-id-start",placeholder:"mm/dd/yyyy",labelText:"Joined start date"},end:{id:"date-picker-input-id-end",placeholder:"mm/dd/yyyy",labelText:"Joined end date"}}}}},{filterLabel:"Status",filter:{type:"dropdown",column:"status",props:{Dropdown:{id:"marital-status-dropdown","aria-label":"Marital status dropdown",items:["relationship","complicated","single"],label:"Marital status",titleText:"Marital status"}}}}]},{categoryTitle:"Category title",filters:[{filterLabel:"Role",filter:{type:"radio",column:"role",props:{FormGroup:{legendText:"Role"},RadioButtonGroup:{orientation:"vertical",legend:"Role legend",name:"role-radio-button-group"},RadioButton:[{id:"developer",labelText:"Developer",value:"developer"},{id:"designer",labelText:"Designer",value:"designer"},{id:"researcher",labelText:"Researcher",value:"researcher"}]}}},{filterLabel:"Visits",filter:{type:"number",column:"visits",props:{NumberInput:{min:0,id:"visits-number-input",invalidText:"A valid value is required",label:"Visits",placeholder:"Type a number amount of visits"}}}},{filterLabel:"Password strength",filter:{type:"checkbox",column:"passwordStrength",props:{FormGroup:{legendText:"Password strength"},Checkbox:[{id:"normal",labelText:"Normal",value:"normal"},{id:"minor-warning",labelText:"Minor warning",value:"minor-warning"},{id:"critical",labelText:"Critical",value:"critical"}]}}}]}],onPanelOpen:s("onPanelOpen"),onPanelClose:s("onPanelClose"),panelTitle:"Filter",renderLabel:(t,e)=>F(t,e)}};const w=L.bind({});w.storyName="Filter panel with initial filters";w.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,filterProps:r.filterProps};w.args={initialState:{filters:[{id:"role",type:"radio",value:"developer"},{id:"passwordStrength",type:"checkbox",value:[{id:"normal",labelText:"Normal",value:"normal",selected:!1},{id:"minor-warning",labelText:"Minor warning",value:"minor-warning",selected:!0},{id:"critical",labelText:"Critical",value:"critical",selected:!1}]}]},gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,emptyStateTitle:"No filters match",emptyStateDescription:"Data was not found with the current filters applied. Change filters or clear filters to see other results.",filterProps:{variation:"panel",updateMethod:"batch",primaryActionLabel:"Apply",secondaryActionLabel:"Cancel",panelIconDescription:"Open filters",closeIconDescription:"Close panel",sections:[{categoryTitle:"Category title",hasAccordion:!0,filters:[{filterLabel:"Joined",filter:{type:"date",column:"joined",props:{DatePicker:{datePickerType:"range"},DatePickerInput:{start:{id:"date-picker-input-id-start",placeholder:"mm/dd/yyyy",labelText:"Joined start date"},end:{id:"date-picker-input-id-end",placeholder:"mm/dd/yyyy",labelText:"Joined end date"}}}}},{filterLabel:"Status",filter:{type:"dropdown",column:"status",props:{Dropdown:{id:"marital-status-dropdown","aria-label":"Marital status dropdown",items:["relationship","complicated","single"],label:"Marital status",titleText:"Marital status"}}}}]},{categoryTitle:"Category title",filters:[{filterLabel:"Role",filter:{type:"radio",column:"role",props:{FormGroup:{legendText:"Role"},RadioButtonGroup:{orientation:"vertical",legend:"Role legend",name:"role-radio-button-group"},RadioButton:[{id:"developer",labelText:"Developer",value:"developer"},{id:"designer",labelText:"Designer",value:"designer"},{id:"researcher",labelText:"Researcher",value:"researcher"}]}}},{filterLabel:"Visits",filter:{type:"number",column:"visits",props:{NumberInput:{min:0,id:"visits-number-input",invalidText:"A valid value is required",label:"Visits",placeholder:"Type a number amount of visits"}}}},{filterLabel:"Password strength",filter:{type:"checkbox",column:"passwordStrength",props:{FormGroup:{legendText:"Password strength"},Checkbox:[{id:"normal",labelText:"Normal",value:"normal"},{id:"minor-warning",labelText:"Minor warning",value:"minor-warning"},{id:"critical",labelText:"Critical",value:"critical"}]}}}]}],onPanelOpen:s("onPanelOpen"),onPanelClose:s("onPanelClose"),panelTitle:"Filter",renderLabel:(t,e)=>F(t,e)}};const D=L.bind({});D.storyName="Filter panel only accordions";D.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,filterProps:r.filterProps};D.args={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,emptyStateTitle:"No filters match",emptyStateDescription:"Data was not found with the current filters applied. Change filters or clear filters to see other results.",filterProps:{variation:"panel",updateMethod:"instant",primaryActionLabel:"Apply",secondaryActionLabel:"Cancel",panelIconDescription:"Open filters",closeIconDescription:"Close panel",sections:[{categoryTitle:"Category title",hasAccordion:!0,filters:[{filterLabel:"Joined",filter:{type:"date",column:"joined",props:{DatePicker:{datePickerType:"range"},DatePickerInput:{start:{id:"date-picker-input-id-start",placeholder:"mm/dd/yyyy",labelText:"Joined start date"},end:{id:"date-picker-input-id-end",placeholder:"mm/dd/yyyy",labelText:"Joined end date"}}}}},{filterLabel:"Status",filter:{type:"dropdown",column:"status",props:{Dropdown:{id:"marital-status-dropdown","aria-label":"Marital status dropdown",items:["relationship","complicated","single"],label:"Marital status",titleText:"Marital status"}}}}]},{categoryTitle:"Category title",hasAccordion:!0,filters:[{filterLabel:"Role",filter:{type:"radio",column:"role",props:{FormGroup:{legendText:"Role"},RadioButtonGroup:{orientation:"vertical",legend:"Role legend",name:"role-radio-button-group"},RadioButton:[{id:"developer",labelText:"Developer",value:"developer"},{id:"designer",labelText:"Designer",value:"designer"},{id:"researcher",labelText:"Researcher",value:"researcher"}]}}},{filterLabel:"Visits",filter:{type:"number",column:"visits",props:{NumberInput:{min:0,id:"visits-number-input",invalidText:"A valid value is required",label:"Visits",placeholder:"Type a number amount of visits"}}}},{filterLabel:"Password strength",filter:{type:"checkbox",column:"passwordStrength",props:{FormGroup:{legendText:"Password strength"},Checkbox:[{id:"normal",labelText:"Normal",value:"normal"},{id:"minor-warning",labelText:"Minor warning",value:"minor-warning"},{id:"critical",labelText:"Critical",value:"critical"}]}}}]}],onPanelOpen:s("onPanelOpen"),onPanelClose:s("onPanelClose"),panelTitle:"Filter",renderLabel:(t,e)=>F(t,e)}};const P=L.bind({});P.storyName="Filter panel no accordions";P.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,filterProps:r.filterProps};P.args={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,emptyStateTitle:"No filters match",emptyStateDescription:"Data was not found with the current filters applied. Change filters or clear filters to see other results.",filterProps:{variation:"panel",updateMethod:"instant",primaryActionLabel:"Apply",secondaryActionLabel:"Cancel",panelIconDescription:"Open filters",closeIconDescription:"Close panel",sections:[{categoryTitle:"Category title",hasAccordion:!1,filters:[{filterLabel:"Joined",filter:{type:"date",column:"joined",props:{DatePicker:{datePickerType:"range"},DatePickerInput:{start:{id:"date-picker-input-id-start",placeholder:"mm/dd/yyyy",labelText:"Joined start date"},end:{id:"date-picker-input-id-end",placeholder:"mm/dd/yyyy",labelText:"Joined end date"}}}}},{filterLabel:"Status",filter:{type:"dropdown",column:"status",props:{Dropdown:{id:"marital-status-dropdown","aria-label":"Marital status dropdown",items:["relationship","complicated","single"],label:"Marital status",titleText:"Marital status"}}}}]},{categoryTitle:"Category title",hasAccordion:!1,filters:[{filterLabel:"Role",filter:{type:"radio",column:"role",props:{FormGroup:{legendText:"Role"},RadioButtonGroup:{orientation:"vertical",legend:"Role legend",name:"role-radio-button-group"},RadioButton:[{id:"developer",labelText:"Developer",value:"developer"},{id:"designer",labelText:"Designer",value:"designer"},{id:"researcher",labelText:"Researcher",value:"researcher"}]}}},{filterLabel:"Visits",filter:{type:"number",column:"visits",props:{NumberInput:{min:0,id:"visits-number-input",invalidText:"A valid value is required",label:"Visits",placeholder:"Type a number amount of visits"}}}},{filterLabel:"Password strength",filter:{type:"checkbox",column:"passwordStrength",props:{FormGroup:{legendText:"Password strength"},Checkbox:[{id:"normal",labelText:"Normal",value:"normal"},{id:"minor-warning",labelText:"Minor warning",value:"minor-warning"},{id:"critical",labelText:"Critical",value:"critical"}]}}}]}],onPanelOpen:s("onPanelOpen"),onPanelClose:s("onPanelClose"),panelTitle:"Filter",renderLabel:(t,e)=>F(t,e)}};const C=L.bind({});C.storyName="Filter panel no data (disabled)";C.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,filterProps:r.filterProps};C.args={data:[],gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,emptyStateTitle:"No data",emptyStateDescription:"There is no data to show 🤠",filterProps:{variation:"panel",updateMethod:"instant",primaryActionLabel:"Apply",secondaryActionLabel:"Cancel",panelIconDescription:"Open filters",closeIconDescription:"Close panel",sections:[{categoryTitle:"Category title",hasAccordion:!0,filters:[{filterLabel:"Joined",filter:{type:"date",column:"joined",props:{DatePicker:{datePickerType:"range"},DatePickerInput:{start:{id:"date-picker-input-id-start",placeholder:"mm/dd/yyyy",labelText:"Joined start date"},end:{id:"date-picker-input-id-end",placeholder:"mm/dd/yyyy",labelText:"Joined end date"}}}}},{filterLabel:"Status",filter:{type:"dropdown",column:"status",props:{Dropdown:{id:"marital-status-dropdown","aria-label":"Marital status dropdown",items:["relationship","complicated","single"],label:"Marital status",titleText:"Marital status"}}}}]},{categoryTitle:"Category title",hasAccordion:!0,filters:[{filterLabel:"Role",filter:{type:"radio",column:"role",props:{FormGroup:{legendText:"Role"},RadioButtonGroup:{orientation:"vertical",legend:"Role legend",name:"role-radio-button-group"},RadioButton:[{id:"developer",labelText:"Developer",value:"developer"},{id:"designer",labelText:"Designer",value:"designer"},{id:"researcher",labelText:"Researcher",value:"researcher"}]}}},{filterLabel:"Visits",filter:{type:"number",column:"visits",props:{NumberInput:{min:0,id:"visits-number-input",invalidText:"A valid value is required",label:"Visits",placeholder:"Type a number amount of visits"}}}},{filterLabel:"Password strength",filter:{type:"checkbox",column:"passwordStrength",props:{FormGroup:{legendText:"Password strength"},Checkbox:[{id:"normal",labelText:"Normal",value:"normal"},{id:"minor-warning",labelText:"Minor warning",value:"minor-warning"},{id:"critical",labelText:"Critical",value:"critical"}]}}}]}],onPanelOpen:s("onPanelOpen"),onPanelClose:s("onPanelClose"),panelTitle:"Filter",renderLabel:(t,e)=>F(t,e)}};const S=L.bind({});S.storyName="Filter panel with many checkboxes";S.argTypes={gridTitle:r.gridTitle,gridDescription:r.gridDescription,useDenseHeader:r.useDenseHeader,filterProps:r.filterProps};S.args={gridTitle:"Data table title",gridDescription:"Additional information if needed",useDenseHeader:!1,emptyStateTitle:"No filters match",emptyStateDescription:"Data was not found with the current filters applied. Change filters or clear filters to see other results.",filterProps:{variation:"panel",updateMethod:"instant",primaryActionLabel:"Apply",secondaryActionLabel:"Cancel",panelIconDescription:"Open filters",closeIconDescription:"Close panel",sections:[{categoryTitle:"Category title",hasAccordion:!0,filters:[{filterLabel:"Joined",filter:{type:"date",column:"joined",props:{DatePicker:{datePickerType:"range"},DatePickerInput:{start:{id:"date-picker-input-id-start",placeholder:"mm/dd/yyyy",labelText:"Joined start date"},end:{id:"date-picker-input-id-end",placeholder:"mm/dd/yyyy",labelText:"Joined end date"}}}}},{filterLabel:"Status",filter:{type:"dropdown",column:"status",props:{Dropdown:{id:"marital-status-dropdown","aria-label":"Marital status dropdown",items:["relationship","complicated","single"],label:"Marital status",titleText:"Marital status"}}}}]},{categoryTitle:"Category title",filters:[{filterLabel:"Role",filter:{type:"radio",column:"role",props:{FormGroup:{legendText:"Role"},RadioButtonGroup:{orientation:"vertical",legend:"Role legend",name:"role-radio-button-group"},RadioButton:[{id:"developer",labelText:"Developer",value:"developer"},{id:"designer",labelText:"Designer",value:"designer"},{id:"researcher",labelText:"Researcher",value:"researcher"}]}}},{filterLabel:"Visits",filter:{type:"number",column:"visits",props:{NumberInput:{min:0,id:"visits-number-input",invalidText:"A valid value is required",label:"Visits",placeholder:"Type a number amount of visits"}}}},{filterLabel:"Password strength",filter:{type:"checkbox",column:"passwordStrength",props:{FormGroup:{legendText:"Password strength"},Checkbox:[{id:"normal",labelText:"Normal",value:"normal"},{id:"minor-warning",labelText:"Minor warning",value:"minor-warning"},{id:"critical",labelText:"Critical",value:"critical"},...ht]}}}]}],onPanelOpen:s("onPanelOpen"),onPanelClose:s("onPanelClose"),panelTitle:"Filter",renderLabel:(t,e)=>F(t,e)}};var X,Q,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`({
  ...args
}) => {
  return <FilteringUsage defaultGridProps={{
    ...args
  }} />;
}`,...(Z=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,re;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`({
  ...args
}) => {
  return <FilteringUsage defaultGridProps={{
    ...args
  }} />;
}`,...(re=(te=x.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,ie,le;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`({
  ...args
}) => {
  return <FilteringUsage defaultGridProps={{
    ...args
  }} />;
}`,...(le=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var oe,ne,se;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`({
  ...args
}) => {
  return <FilteringUsage defaultGridProps={{
    ...args
  }} />;
}`,...(se=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var de,ce,pe;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`({
  ...args
}) => {
  return <FilteringUsage defaultGridProps={{
    ...args
  }} />;
}`,...(pe=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,me,fe;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`({
  ...args
}) => {
  return <FilteringUsage defaultGridProps={{
    ...args
  }} />;
}`,...(fe=(me=C.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ge,he,ye;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`({
  ...args
}) => {
  return <FilteringUsage defaultGridProps={{
    ...args
  }} />;
}`,...(ye=(he=S.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};const yt=["multiSelectProps","filterProps","PanelBatch","PanelInstant","PanelWithInitialFilters","PanelOnlyAccordions","PanelNoAccordions","PanelNoData","PanelManyCheckboxes"],Mt=Object.freeze(Object.defineProperty({__proto__:null,PanelBatch:v,PanelInstant:x,PanelManyCheckboxes:S,PanelNoAccordions:P,PanelNoData:C,PanelOnlyAccordions:D,PanelWithInitialFilters:w,__namedExportsOrder:yt,default:gt,filterProps:we,multiSelectProps:xe},Symbol.toStringTag,{value:"Module"}));export{Te as D,ve as F,Mt as P,we as f,J as g,F as h,xe as m};
