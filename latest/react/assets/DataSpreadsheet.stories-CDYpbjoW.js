var E=Object.defineProperty;var t=(e,a)=>E(e,"name",{value:a,configurable:!0});import{j as s,aA as H,aC as v,aB as A,r as l,e as r}from"./iframe-LiaStyBs.js";import{useMDXComponents as y}from"./index-CsCkY5B2.js";import{O as L}from"./index-krU3NIw9.js";import{O as j}from"./OverflowMenuItem-Bg6gtY33.js";import{D as m}from"./DataSpreadsheet-Qj1ZvObQ.js";import"./preload-helper-Cc2_yIPf.js";import"./useAttachedMenu-DPXvWdxJ.js";import"./environment-DRRHKtsv.js";import"./mergeRefs-BH0-8uDG.js";import"./bucket-13-BmtSAaYC.js";import"./wrapFocus-DA3E1wc8.js";import"./useOutsideClick-DfrADdkp.js";import"./Text-CexaJYDP.js";import"./index.esm-DcU8uWQZ.js";import"./uuidv4-Fbcg8Vng.js";import"./usePreviousValue-D7gue4nV.js";import"./inheritsLoose-CdLKJotq.js";import"./props-helper-BjdYyuO_.js";import"./devtools-CUjvjodF.js";import"./getNodeTextContent-CjFansOq.js";const M=["dog","cat","bird","lizard","frog","hamster","fish","rabbit","snake"],S=["Bruno","Willow","Kona","Heidi","Rusty","Bonnie","Cash","Gucci","Brody","Emma","Loki","Angel","Astro","Sherman","Layla","Peanut","Grace","Mickey","Sasha","Finn","Tucker","Bear","Mocha","Roscoe"],N=t(e=>{const a=[];for(let o=0;o<e;o++)a.push(o);return a},"range"),O=t(e=>{const a=e&&{ownerName:S[Math.floor(Math.random()*S.length)],weight:Math.floor(Math.random()*40)},o={petType:M[Math.floor(Math.random()*M.length)],firstName:S[Math.floor(Math.random()*S.length)],age:Math.floor(Math.random()*30),visits:Math.floor(Math.random()*40),health:Math.floor(Math.random()*100)};return e?{...o,...a}:o},"newPet"),x=t(({rows:e,extraColumns:a})=>t((n=0)=>{const i=[e][n];return N(i).map(()=>({...O(a)}))},"makeDataLevel")(),"generateData");function b(e){const a={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...y(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(a.h1,{id:"dataspreadsheet",children:"DataSpreadsheet"}),`
`,s.jsx(a.p,{children:s.jsx(a.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/data-spreadsheet/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,s.jsx(a.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,s.jsxs(a.ul,{children:[`
`,s.jsx(a.li,{children:s.jsx(a.a,{href:"#overview",children:"Overview"})}),`
`,s.jsx(a.li,{children:s.jsx(a.a,{href:"#example-usage",children:"Example usage"})}),`
`,s.jsx(a.li,{children:s.jsx(a.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,s.jsx(a.h2,{id:"overview",children:"Overview"}),`
`,`
`,s.jsx(a.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,s.jsx(H,{children:s.jsx(v,{of:u})}),`
`,s.jsx(a.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,s.jsx(a.h2,{id:"component-api",children:"Component API"}),`
`,s.jsx(A,{})]})}t(b,"_createMdxContent");function W(e={}){const{wrapper:a}={...y(),...e.components};return a?s.jsx(a,{...e,children:s.jsx(b,{...e})}):b(e)}t(W,"MDXContent");const T="div[data-story-title*=DataSpreadsheet] .docs-story>div:first-child>div:first-child{overflow:auto;inline-size:100%}",ie={title:"Preview Candidate/DataSpreadsheet",component:m,tags:["autodocs"],argTypes:{onActiveCellChange:{action:"active cell change"},onColDrag:{action:"on column drag"},onSelectionAreaChange:{action:"selection area change"}},parameters:{styles:T,docs:{page:W}}},d=t(({value:e})=>r.createElement("span",{style:{display:"flex",justifyContent:"flex-end"}},e),"NumericLayout"),U=[{Header:"Row Index",accessor:t((e,a)=>a,"accessor"),Cell:t(({cell:{value:e}})=>r.createElement(d,{value:e}),"Cell"),placement:"right",width:275},{Header:"Pet type",accessor:"petType"},{Header:r.createElement("div",null,r.createElement("div",null,r.createElement("span",null,"First Name")," ",r.createElement("span",null,"(Pets)"))),accessor:"firstName",column_name:"First Name"},{Header:"Age",accessor:"age",Cell:t(({cell:{value:e}})=>r.createElement(d,{value:e}),"Cell"),placement:"right"},{Header:"Vet visits",accessor:"visits",Cell:t(({cell:{value:e}})=>r.createElement(d,{value:e}),"Cell"),placement:"right"},{Header:"Health",accessor:"health",Cell:t(({cell:{value:e}})=>r.createElement(d,{value:e}),"Cell"),placement:"right"}],f=[{Header:"Row index",accessor:t((e,a)=>a,"accessor"),Cell:t(({cell:{value:e}})=>r.createElement(d,{value:e}),"Cell"),placement:"right",width:275},{Header:"Pet Type",accessor:"petType"},{Header:"First Name",accessor:"firstName"},{Header:"Age",accessor:"age",Cell:t(({cell:{value:e}})=>r.createElement(d,{value:e}),"Cell"),placement:"right"},{Header:"Vet visits",accessor:"visits",Cell:t(({cell:{value:e}})=>r.createElement(d,{value:e}),"Cell"),placement:"right"},{Header:"Health",accessor:"health",Cell:t(({cell:{value:e}})=>r.createElement(d,{value:e}),"Cell"),placement:"right"}],R=t(({...e})=>{const[a,o]=l.useState(()=>x({rows:16})),n=l.useMemo(()=>f,[]);return r.createElement(m,{columns:n,data:a,onDataUpdate:o,id:"spreadsheet--id",...e})},"Template"),k=t(({...e})=>{const[a,o]=l.useState(()=>x({rows:1e5})),n=l.useMemo(()=>f,[]),c=t(i=>r.createElement(L,{style:{width:"32px",height:"32px",minWidth:"32px",minHeight:"32px"}},r.createElement(j,{itemText:`Test item ${i}`})),"buildComponent");return r.createElement(m,{columns:n,data:a,onDataUpdate:o,renderRowHeaderDirection:"Left",renderRowHeader:c,id:"spreadsheet--id",...e})},"largeDatasetSpreadsheetCustomRowHeaders"),P=t(({...e})=>{const[a,o]=l.useState(()=>x({rows:1e3})),n=l.useMemo(()=>f,[]);return r.createElement(m,{columns:n,data:a,onDataUpdate:o,id:"spreadsheet--id",...e})},"LargeTemplate"),I=t(({...e})=>{const[a,o]=l.useState([]),n=l.useMemo(()=>[...f.filter(i=>i.Header!=="Row Index")],[]),c=l.useMemo(()=>n,[n]);return r.createElement(m,{columns:c,data:a,onDataUpdate:o,id:"spreadsheet--id",...e})},"EmptyWithCellsTemplate"),B=t(({...e})=>{const[a,o]=l.useState(()=>x({rows:24,extraColumns:!0})),n=l.useMemo(()=>[...f,{Header:"Owner name",accessor:"ownerName"},{Header:"Weight",accessor:"weight"}],[]),c=l.useMemo(()=>n,[n]);return r.createElement(m,{columns:c,data:a,onDataUpdate:o,id:"spreadsheet--id",...e})},"WithManyColumns"),_=t(({...e})=>{const[a,o]=l.useState(()=>x({rows:24,extraColumns:!0})),n=l.useMemo(()=>[...f,{Header:"Owner name",accessor:"ownerName"},{Header:"Weight",accessor:"weight"}],[]),c=l.useMemo(()=>n,[n]);return r.createElement(m,{columns:c,data:a,onDataUpdate:o,id:"spreadsheet--id",...e})},"WithDifferentOptions"),F=t(({...e})=>{const[a,o]=l.useState(()=>x({rows:24,extraColumns:!0})),n=t(V=>{},"onColumnDragDrop"),c=l.useMemo(()=>[...U,{Header:"Owner name",accessor:"ownerName"},{Header:"Weight",accessor:"weight"}],[]),i=l.useMemo(()=>c,[c]);return r.createElement(m,{columns:i,data:a,onDataUpdate:o,onColDrag:n,id:"spreadsheet--id",...e})},"dragDropCallback"),u=R.bind({});u.storyName="Basic spreadsheet";u.args={selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const p=P.bind({});p.storyName="Large dataset";p.args={cellSize:"lg",selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const h=k.bind({});h.storyName="Large dataset with optional component";h.args={cellSize:"lg",selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const D=I.bind({});D.storyName="Empty with cells";D.args={defaultEmptyRowCount:24,selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const g=B.bind({});g.storyName="With many columns";g.args={selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet",totalVisibleColumns:5};const C=_.bind({});C.storyName="With different options";C.args={readOnlyTable:!1,disableColumnSwapping:!1,selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet",totalVisibleColumns:5};const w=F.bind({});w.storyName="With drag drop  callback";w.args={selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet",totalVisibleColumns:5};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState(() => generateData({
    rows: 16
  }));
  const columns = useMemo(() => columnData, []);
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} id="spreadsheet--id" {...args} />;
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState(() => generateData({
    rows: 1000
  }));
  const columns = useMemo(() => columnData, []);
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} id="spreadsheet--id" {...args} />;
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`({
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
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState([]);
  const columnDataClone = useMemo(() => [...columnData.filter(item => item.Header !== 'Row Index')], []);
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
  const columnDataClone = useMemo(() => [...columnData, {
    Header: 'Owner name',
    accessor: 'ownerName'
  }, {
    Header: 'Weight',
    accessor: 'weight'
  }], []);
  const columns = useMemo(() => columnDataClone, [columnDataClone]);
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} id="spreadsheet--id" {...args} />;
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`({
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
}`,...w.parameters?.docs?.source}}};const ue=["dataSpreadsheet","largeDatasetSpreadsheet","largeDatasetSpreadsheetCustom","emptyWithCells","withManyColumns","withDifferentOptions","withDragDropCallback"];export{ue as __namedExportsOrder,u as dataSpreadsheet,ie as default,D as emptyWithCells,p as largeDatasetSpreadsheet,h as largeDatasetSpreadsheetCustom,C as withDifferentOptions,w as withDragDropCallback,g as withManyColumns};
//# sourceMappingURL=DataSpreadsheet.stories-CDYpbjoW.js.map
