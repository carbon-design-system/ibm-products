import{j as t,aB as y,aD as E,aC as H,r as n,e as s}from"./iframe-BBf3bqTv.js";import{useMDXComponents as b}from"./index-BQtCSjrU.js";import{O as v}from"./index-Kk4BUWQg.js";import{O as A}from"./OverflowMenuItem-iRr-fNZ0.js";import{D as d}from"./DataSpreadsheet-C7XwNWwO.js";import"./preload-helper-D9Z9MdNV.js";import"./useAttachedMenu-tCJ9pwqm.js";import"./mergeRefs-BZpmU3mx.js";import"./bucket-13-h41i3c0G.js";import"./wrapFocus-DaSELL9x.js";import"./useOutsideClick-DliSUker.js";import"./Text-CaNb5F2n.js";import"./index.esm-3voC90Pj.js";import"./uuidv4-BN2rGLQG.js";import"./usePreviousValue-Bzpu_MqH.js";import"./inheritsLoose-DHKJTbHM.js";import"./props-helper-CYOz70En.js";import"./devtools-c2gfrTL0.js";import"./getNodeTextContent-C8IeKkUQ.js";const S=["dog","cat","bird","lizard","frog","hamster","fish","rabbit","snake"],f=["Bruno","Willow","Kona","Heidi","Rusty","Bonnie","Cash","Gucci","Brody","Emma","Loki","Angel","Astro","Sherman","Layla","Peanut","Grace","Mickey","Sasha","Finn","Tucker","Bear","Mocha","Roscoe"],L=e=>{const a=[];for(let r=0;r<e;r++)a.push(r);return a},j=e=>{const a=e&&{ownerName:f[Math.floor(Math.random()*f.length)],weight:Math.floor(Math.random()*40)},r={petType:S[Math.floor(Math.random()*S.length)],firstName:f[Math.floor(Math.random()*f.length)],age:Math.floor(Math.random()*30),visits:Math.floor(Math.random()*40),health:Math.floor(Math.random()*100)};return e?{...r,...a}:r},w=({rows:e,extraColumns:a})=>((o=0)=>{const m=[e][o];return L(m).map(()=>({...j(a)}))})();function M(e){const a={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...b(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(a.h1,{id:"dataspreadsheet",children:"DataSpreadsheet"}),`
`,t.jsx(a.p,{children:t.jsx(a.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/data-spreadsheet/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,t.jsx(a.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,t.jsxs(a.ul,{children:[`
`,t.jsx(a.li,{children:t.jsx(a.a,{href:"#overview",children:"Overview"})}),`
`,t.jsx(a.li,{children:t.jsx(a.a,{href:"#example-usage",children:"Example usage"})}),`
`,t.jsx(a.li,{children:t.jsx(a.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,t.jsx(a.h2,{id:"overview",children:"Overview"}),`
`,`
`,t.jsx(a.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,t.jsx(y,{children:t.jsx(E,{of:i})}),`
`,t.jsx(a.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,t.jsx(a.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(H,{})]})}function N(e={}){const{wrapper:a}={...b(),...e.components};return a?t.jsx(a,{...e,children:t.jsx(M,{...e})}):M(e)}const O="div[data-story-title*=DataSpreadsheet] .docs-story>div:first-child>div:first-child{overflow:auto;inline-size:100%}",le={title:"Preview Candidate/DataSpreadsheet",component:d,tags:["autodocs"],argTypes:{onActiveCellChange:{action:"active cell change"},onColDrag:{action:"on column drag"},onSelectionAreaChange:{action:"selection area change"}},parameters:{styles:O,docs:{page:N}}},c=({value:e})=>s.createElement("span",{style:{display:"flex",justifyContent:"flex-end"}},e),W=[{Header:"Row Index",accessor:(e,a)=>a,Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right",width:275},{Header:"Pet type",accessor:"petType"},{Header:s.createElement("div",null,s.createElement("div",null,s.createElement("span",null,"First Name")," ",s.createElement("span",null,"(Pets)"))),accessor:"firstName",column_name:"First Name"},{Header:"Age",accessor:"age",Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right"},{Header:"Vet visits",accessor:"visits",Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right"},{Header:"Health",accessor:"health",Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right"}],x=[{Header:"Row index",accessor:(e,a)=>a,Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right",width:275},{Header:"Pet Type",accessor:"petType"},{Header:"First Name",accessor:"firstName"},{Header:"Age",accessor:"age",Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right"},{Header:"Vet visits",accessor:"visits",Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right"},{Header:"Health",accessor:"health",Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right"}],T=({...e})=>{const[a,r]=n.useState(()=>w({rows:16})),o=n.useMemo(()=>x,[]);return s.createElement(d,{columns:o,data:a,onDataUpdate:r,id:"spreadsheet--id",...e})},U=({...e})=>{const[a,r]=n.useState(()=>w({rows:1e5})),o=n.useMemo(()=>x,[]),l=m=>s.createElement(v,{style:{width:"32px",height:"32px",minWidth:"32px",minHeight:"32px"}},s.createElement(A,{itemText:`Test item ${m}`}));return s.createElement(d,{columns:o,data:a,onDataUpdate:r,renderRowHeaderDirection:"Left",renderRowHeader:l,id:"spreadsheet--id",...e})},R=({...e})=>{const[a,r]=n.useState(()=>w({rows:1e3})),o=n.useMemo(()=>x,[]);return s.createElement(d,{columns:o,data:a,onDataUpdate:r,id:"spreadsheet--id",...e})},k=({...e})=>{const[a,r]=n.useState([]),o=n.useMemo(()=>[...x.filter(m=>m.Header!=="Row Index")],[]),l=n.useMemo(()=>o,[o]);return s.createElement(d,{columns:l,data:a,onDataUpdate:r,id:"spreadsheet--id",...e})},P=({...e})=>{const[a,r]=n.useState(()=>w({rows:24,extraColumns:!0})),o=n.useMemo(()=>[...x,{Header:"Owner name",accessor:"ownerName"},{Header:"Weight",accessor:"weight"}],[]),l=n.useMemo(()=>o,[o]);return s.createElement(d,{columns:l,data:a,onDataUpdate:r,id:"spreadsheet--id",...e})},I=({...e})=>{const[a,r]=n.useState(()=>w({rows:24,extraColumns:!0})),o=n.useMemo(()=>[...x,{Header:"Owner name",accessor:"ownerName"},{Header:"Weight",accessor:"weight"}],[]),l=n.useMemo(()=>o,[o]);return s.createElement(d,{columns:l,data:a,onDataUpdate:r,id:"spreadsheet--id",...e})},B=({...e})=>{const[a,r]=n.useState(()=>w({rows:24,extraColumns:!0})),o=_=>{},l=n.useMemo(()=>[...W,{Header:"Owner name",accessor:"ownerName"},{Header:"Weight",accessor:"weight"}],[]),m=n.useMemo(()=>l,[l]);return s.createElement(d,{columns:m,data:a,onDataUpdate:r,onColDrag:o,id:"spreadsheet--id",...e})},i=T.bind({});i.storyName="Basic spreadsheet";i.args={selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const u=R.bind({});u.storyName="Large dataset";u.args={cellSize:"lg",selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const p=U.bind({});p.storyName="Large dataset with optional component";p.args={cellSize:"lg",selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const h=k.bind({});h.storyName="Empty with cells";h.args={defaultEmptyRowCount:24,selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const D=P.bind({});D.storyName="With many columns";D.args={selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet",totalVisibleColumns:5};const g=I.bind({});g.storyName="With different options";g.args={readOnlyTable:!1,disableColumnSwapping:!1,selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet",totalVisibleColumns:5};const C=B.bind({});C.storyName="With drag drop  callback";C.args={selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet",totalVisibleColumns:5};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState(() => generateData({
    rows: 16
  }));
  const columns = useMemo(() => columnData, []);
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} id="spreadsheet--id" {...args} />;
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState(() => generateData({
    rows: 1000
  }));
  const columns = useMemo(() => columnData, []);
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} id="spreadsheet--id" {...args} />;
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState(() => generateData({
    rows: 100000
  }));
  const columns = useMemo(() => columnData, []);
  const buildComponent = index => <OverflowMenu style={{
    width: '32px',
    height: '32px',
    minWidth: '32px',
    minHeight: '32px'
  }}>
      <OverflowMenuItem itemText={\`Test item \${index}\`} />
    </OverflowMenu>;
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} renderRowHeaderDirection="Left" renderRowHeader={buildComponent} id="spreadsheet--id" {...args} />;
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState([]);
  const columnDataClone = useMemo(() => [...columnData.filter(item => item.Header !== 'Row Index')], []);
  const columns = useMemo(() => columnDataClone, [columnDataClone]);
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} id="spreadsheet--id" {...args} />;
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState(() => generateData({
    rows: 24,
    extraColumns: true
  }));
  const columnDataClone = useMemo(() => [...columnData, {
    Header: 'Owner name',
    accessor: 'ownerName'
  }, {
    Header: 'Weight',
    accessor: 'weight'
  }], []);
  const columns = useMemo(() => columnDataClone, [columnDataClone]);
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} id="spreadsheet--id" {...args} />;
}`,...D.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState(() => generateData({
    rows: 24,
    extraColumns: true
  }));
  const columnDataClone = useMemo(() => [...columnData, {
    Header: 'Owner name',
    accessor: 'ownerName'
  }, {
    Header: 'Weight',
    accessor: 'weight'
  }], []);
  const columns = useMemo(() => columnDataClone, [columnDataClone]);
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} id="spreadsheet--id" {...args} />;
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState(() => generateData({
    rows: 24,
    extraColumns: true
  }));
  const onColumnDragDrop = tableData => {
    // Dev can debug here
  };
  const columnDataClone = useMemo(() => [...customColumnData, {
    Header: 'Owner name',
    accessor: 'ownerName'
  }, {
    Header: 'Weight',
    accessor: 'weight'
  }], []);
  const columns = useMemo(() => columnDataClone, [columnDataClone]);
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} onColDrag={onColumnDragDrop} id="spreadsheet--id" {...args} />;
}`,...C.parameters?.docs?.source}}};const ce=["dataSpreadsheet","largeDatasetSpreadsheet","largeDatasetSpreadsheetCustom","emptyWithCells","withManyColumns","withDifferentOptions","withDragDropCallback"];export{ce as __namedExportsOrder,i as dataSpreadsheet,le as default,h as emptyWithCells,u as largeDatasetSpreadsheet,p as largeDatasetSpreadsheetCustom,g as withDifferentOptions,C as withDragDropCallback,D as withManyColumns};
//# sourceMappingURL=DataSpreadsheet.stories-CNwEYsrw.js.map
