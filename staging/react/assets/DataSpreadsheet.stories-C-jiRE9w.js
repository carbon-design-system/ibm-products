var E=Object.defineProperty;var t=(e,a)=>E(e,"name",{value:a,configurable:!0});import{u as y,j as r,aN as v,aU as H,aO as A,R as s,r as l}from"./iframe-LxOZQDAZ.js";import{A as j}from"./index-Cz7LZYyk.js";import{O as L}from"./OverflowMenuItem-DT60MaEo.js";import{O as N}from"./index-CrSJzJsf.js";import{D as d}from"./DataSpreadsheet-DCLZ9HhX.js";import"./preload-helper-Cc2_yIPf.js";import"./bucket-11-DlCBJC6W.js";import"./bucket-21-CQi2gVtC.js";import"./Text-BRhHXZCE.js";import"./mergeRefs-BH0-8uDG.js";import"./useAttachedMenu-Bj_4he62.js";import"./environment-DRRHKtsv.js";import"./bucket-14-CAGGJN8o.js";import"./wrapFocus-D_OwerMA.js";import"./useOutsideClick-z7-4Y9KH.js";import"./index.esm-BUNkAqHX.js";import"./uuidv4-Fbcg8Vng.js";import"./usePreviousValue-CD8ZFEAM.js";import"./inheritsLoose-CdLKJotq.js";import"./props-helper-BGW8o-_q.js";import"./devtools-B1WIs_qd.js";import"./getNodeTextContent-CjFansOq.js";const b=["dog","cat","bird","lizard","frog","hamster","fish","rabbit","snake"],S=["Bruno","Willow","Kona","Heidi","Rusty","Bonnie","Cash","Gucci","Brody","Emma","Loki","Angel","Astro","Sherman","Layla","Peanut","Grace","Mickey","Sasha","Finn","Tucker","Bear","Mocha","Roscoe"],O=t(e=>{const a=[];for(let o=0;o<e;o++)a.push(o);return a},"range"),T=t(e=>{const a=e&&{ownerName:S[Math.floor(Math.random()*S.length)],weight:Math.floor(Math.random()*40)},o={petType:b[Math.floor(Math.random()*b.length)],firstName:S[Math.floor(Math.random()*S.length)],age:Math.floor(Math.random()*30),visits:Math.floor(Math.random()*40),health:Math.floor(Math.random()*100)};return e?{...o,...a}:o},"newPet"),x=t(({rows:e,extraColumns:a})=>t((n=0)=>{const m=[e][n];return O(m).map(()=>({...T(a)}))},"makeDataLevel")(),"generateData");function M(e){const a={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...y(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(a.h1,{id:"dataspreadsheet",children:"DataSpreadsheet"}),`
`,r.jsx(a.p,{children:r.jsx(a.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/data-spreadsheet/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,r.jsx(a.h2,{id:"deprecation-notice",children:"Deprecation notice"}),`
`,r.jsx(a.p,{children:`DataSpreadsheet is being deprecated due to its high maintenance complexity and
low adoption. Teams are encouraged to migrate to more robust and scalable
solutions such as AG Grid or TanStack Table, or evaluate other alternatives that
best fit their needs. While AG Grid is a recommended option, some teams have
faced challenges procuring the enterprise version, so the community edition may
be considered as a viable alternative.`}),`
`,r.jsx(a.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,r.jsxs(a.ul,{children:[`
`,r.jsx(a.li,{children:r.jsx(a.a,{href:"#overview",children:"Overview"})}),`
`,r.jsx(a.li,{children:r.jsx(a.a,{href:"#example-usage",children:"Example usage"})}),`
`,r.jsx(a.li,{children:r.jsx(a.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,r.jsx(a.h2,{id:"overview",children:"Overview"}),`
`,`
`,r.jsx(a.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,r.jsx(v,{children:r.jsx(H,{of:p})}),`
`,r.jsx(a.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,r.jsx(a.h2,{id:"component-api",children:"Component API"}),`
`,r.jsx(A,{})]})}t(M,"_createMdxContent");function W(e={}){const{wrapper:a}={...y(),...e.components};return a?r.jsx(a,{...e,children:r.jsx(M,{...e})}):M(e)}t(W,"MDXContent");const U=".docs-story>div{overflow:auto;inline-size:100%}.c4p--annotation__content{overflow-x:auto}",he={title:"Deprecated/DataSpreadsheet",component:d,tags:["autodocs"],argTypes:{onActiveCellChange:{action:"active cell change"},onColDrag:{action:"on column drag"},onSelectionAreaChange:{action:"selection area change"}},parameters:{styles:U,chromatic:{disableSnapshot:!0},docs:{page:W}},decorators:[e=>s.createElement("div",null,s.createElement(j,{type:"deprecation-notice",text:s.createElement("div",null,"This component is deprecated and will be removed in the next major version.")},e()))]},i=t(({value:e})=>s.createElement("span",{style:{display:"flex",justifyContent:"flex-end"}},e),"NumericLayout"),R=[{Header:"Row Index",accessor:t((e,a)=>a,"accessor"),Cell:t(({cell:{value:e}})=>s.createElement(i,{value:e}),"Cell"),placement:"right",width:275},{Header:"Pet type",accessor:"petType"},{Header:s.createElement("div",null,s.createElement("div",null,s.createElement("span",null,"First Name")," ",s.createElement("span",null,"(Pets)"))),accessor:"firstName",column_name:"First Name"},{Header:"Age",accessor:"age",Cell:t(({cell:{value:e}})=>s.createElement(i,{value:e}),"Cell"),placement:"right"},{Header:"Vet visits",accessor:"visits",Cell:t(({cell:{value:e}})=>s.createElement(i,{value:e}),"Cell"),placement:"right"},{Header:"Health",accessor:"health",Cell:t(({cell:{value:e}})=>s.createElement(i,{value:e}),"Cell"),placement:"right"}],f=[{Header:"Row index",accessor:t((e,a)=>a,"accessor"),Cell:t(({cell:{value:e}})=>s.createElement(i,{value:e}),"Cell"),placement:"right",width:275},{Header:"Pet Type",accessor:"petType"},{Header:"First Name",accessor:"firstName"},{Header:"Age",accessor:"age",Cell:t(({cell:{value:e}})=>s.createElement(i,{value:e}),"Cell"),placement:"right"},{Header:"Vet visits",accessor:"visits",Cell:t(({cell:{value:e}})=>s.createElement(i,{value:e}),"Cell"),placement:"right"},{Header:"Health",accessor:"health",Cell:t(({cell:{value:e}})=>s.createElement(i,{value:e}),"Cell"),placement:"right"}],k=t(({...e})=>{const[a,o]=l.useState(()=>x({rows:16})),n=l.useMemo(()=>f,[]);return s.createElement(d,{columns:n,data:a,onDataUpdate:o,id:"spreadsheet--id",...e})},"Template"),P=t(({...e})=>{const[a,o]=l.useState(()=>x({rows:1e5})),n=l.useMemo(()=>f,[]),c=t(m=>s.createElement(N,{style:{width:"32px",height:"32px",minWidth:"32px",minHeight:"32px"}},s.createElement(L,{itemText:`Test item ${m}`})),"buildComponent");return s.createElement(d,{columns:n,data:a,onDataUpdate:o,renderRowHeaderDirection:"Left",renderRowHeader:c,id:"spreadsheet--id",...e})},"largeDatasetSpreadsheetCustomRowHeaders"),_=t(({...e})=>{const[a,o]=l.useState(()=>x({rows:1e3})),n=l.useMemo(()=>f,[]);return s.createElement(d,{columns:n,data:a,onDataUpdate:o,id:"spreadsheet--id",...e})},"LargeTemplate"),I=t(({...e})=>{const[a,o]=l.useState([]),n=l.useMemo(()=>[...f.filter(m=>m.Header!=="Row Index")],[]),c=l.useMemo(()=>n,[n]);return s.createElement(d,{columns:c,data:a,onDataUpdate:o,id:"spreadsheet--id",...e})},"EmptyWithCellsTemplate"),G=t(({...e})=>{const[a,o]=l.useState(()=>x({rows:24,extraColumns:!0})),n=l.useMemo(()=>[...f,{Header:"Owner name",accessor:"ownerName"},{Header:"Weight",accessor:"weight"}],[]),c=l.useMemo(()=>n,[n]);return s.createElement(d,{columns:c,data:a,onDataUpdate:o,id:"spreadsheet--id",...e})},"WithManyColumns"),B=t(({...e})=>{const[a,o]=l.useState(()=>x({rows:24,extraColumns:!0})),n=l.useMemo(()=>[...f,{Header:"Owner name",accessor:"ownerName"},{Header:"Weight",accessor:"weight"}],[]),c=l.useMemo(()=>n,[n]);return s.createElement(d,{columns:c,data:a,onDataUpdate:o,id:"spreadsheet--id",...e})},"WithDifferentOptions"),F=t(({...e})=>{const[a,o]=l.useState(()=>x({rows:24,extraColumns:!0})),n=t(V=>{},"onColumnDragDrop"),c=l.useMemo(()=>[...R,{Header:"Owner name",accessor:"ownerName"},{Header:"Weight",accessor:"weight"}],[]),m=l.useMemo(()=>c,[c]);return s.createElement(d,{columns:m,data:a,onDataUpdate:o,onColDrag:n,id:"spreadsheet--id",...e})},"dragDropCallback"),p=k.bind({});p.storyName="Basic spreadsheet";p.args={selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const u=_.bind({});u.storyName="Large dataset";u.args={cellSize:"lg",selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const h=P.bind({});h.storyName="Large dataset with optional component";h.args={cellSize:"lg",selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const g=I.bind({});g.storyName="Empty with cells";g.args={defaultEmptyRowCount:24,selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const D=G.bind({});D.storyName="With many columns";D.args={selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet",totalVisibleColumns:5};const w=B.bind({});w.storyName="With different options";w.args={readOnlyTable:!1,disableColumnSwapping:!1,selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet",totalVisibleColumns:5};const C=F.bind({});C.storyName="With drag drop  callback";C.args={selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet",totalVisibleColumns:5};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState(() => generateData({
    rows: 16
  }));
  const columns = useMemo(() => columnData, []);
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} id="spreadsheet--id" {...args} />;
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState(() => generateData({
    rows: 1000
  }));
  const columns = useMemo(() => columnData, []);
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} id="spreadsheet--id" {...args} />;
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`({
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState([]);
  const columnDataClone = useMemo(() => [...columnData.filter(item => item.Header !== 'Row Index')], []);
  const columns = useMemo(() => columnDataClone, [columnDataClone]);
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} id="spreadsheet--id" {...args} />;
}`,...g.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`({
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
}`,...D.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`({
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
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`({
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
}`,...C.parameters?.docs?.source}}};const ge=["dataSpreadsheet","largeDatasetSpreadsheet","largeDatasetSpreadsheetCustom","emptyWithCells","withManyColumns","withDifferentOptions","withDragDropCallback"];export{ge as __namedExportsOrder,p as dataSpreadsheet,he as default,g as emptyWithCells,u as largeDatasetSpreadsheet,h as largeDatasetSpreadsheetCustom,w as withDifferentOptions,C as withDragDropCallback,D as withManyColumns};
//# sourceMappingURL=DataSpreadsheet.stories-C-jiRE9w.js.map
