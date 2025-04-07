import{r as n,e as s}from"./index-DzvNrmz8.js";import{j as t}from"./index-Cg1swjps.js";import{useMDXComponents as z}from"./index-B7BkHM3Y.js";import"./index-DzeuwgLe.js";import"./index-5As4T26e.js";import{O as X}from"./index-L9t50hwB.js";import{O as G}from"./OverflowMenuItem-BFN-JnPH.js";import{D as m}from"./DataSpreadsheet-DkCIMkc6.js";import{a as $,j as K,C as q}from"./index-B_2-5AJB.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Bv4JGo1_.js";import"./preview-BxD30hs5.js";import"./iframe-DJDim8wj.js";import"./DocsRenderer-CFRXHY34-qaNuuHq1.js";import"./client-fwTTGz69.js";import"./settings-DbzZchXt.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./useAttachedMenu-ByErO-AK.js";import"./mergeRefs-CTUecegF.js";import"./bucket-12-BMUr2nnk.js";import"./wrapFocus-DPmHpWJH.js";import"./createClassWrapper-0jMU_xgu.js";import"./Text-DyBNjUAs.js";import"./index.esm-D7_1_ES8.js";import"./uuidv4-BN2rGLQG.js";import"./usePreviousValue-DGkdsrtI.js";import"./inheritsLoose-D3Az7yH5.js";import"./index-Bfrl1yb6.js";import"./props-helper-BZh4EldX.js";import"./devtools-CskDVa8y.js";import"./getNodeTextContent-C8IeKkUQ.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";const S=["dog","cat","bird","lizard","frog","hamster","fish","rabbit","snake"],f=["Bruno","Willow","Kona","Heidi","Rusty","Bonnie","Cash","Gucci","Brody","Emma","Loki","Angel","Astro","Sherman","Layla","Peanut","Grace","Mickey","Sasha","Finn","Tucker","Bear","Mocha","Roscoe"],J=e=>{const a=[];for(let r=0;r<e;r++)a.push(r);return a},Q=e=>{const a=e&&{ownerName:f[Math.floor(Math.random()*f.length)],weight:Math.floor(Math.random()*40)},r={petType:S[Math.floor(Math.random()*S.length)],firstName:f[Math.floor(Math.random()*f.length)],age:Math.floor(Math.random()*30),visits:Math.floor(Math.random()*40),health:Math.floor(Math.random()*100)};return e?{...r,...a}:r},w=({rows:e,extraColumns:a})=>((o=0)=>{const i=[e][o];return J(i).map(()=>({...Q(a)}))})();function M(e){const a={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...z(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(a.h1,{id:"dataspreadsheet",children:"DataSpreadsheet"}),`
`,t.jsx(a.p,{children:t.jsx(a.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/data-spreadsheet/usage/",rel:"nofollow",children:"DataSpreadsheet usage guidelines"})}),`
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
`,t.jsx($,{children:t.jsx(K,{of:d})}),`
`,t.jsx(a.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,t.jsx(a.h2,{id:"component-api",children:"Component API"}),`
`,t.jsx(q,{})]})}function Y(e={}){const{wrapper:a}={...z(),...e.components};return a?t.jsx(a,{...e,children:t.jsx(M,{...e})}):M(e)}const Z="div[data-story-title*=DataSpreadsheet] .docs-story>div:first-child>div:first-child{overflow:auto;inline-size:100%}",Ve={title:"Experimental/Components/Data spreadsheet/DataSpreadsheet",component:m,tags:["autodocs"],argTypes:{onActiveCellChange:{action:"active cell change"},onColDrag:{action:"on column drag"},onSelectionAreaChange:{action:"selection area change"}},parameters:{styles:Z,docs:{page:Y}}},c=({value:e})=>s.createElement("span",{style:{display:"flex",justifyContent:"flex-end"}},e),ee=[{Header:"Row Index",accessor:(e,a)=>a,Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right",width:275},{Header:"Pet type",accessor:"petType"},{Header:s.createElement("div",null,s.createElement("div",null,s.createElement("span",null,"First Name")," ",s.createElement("span",null,"(Pets)"))),accessor:"firstName",column_name:"First Name"},{Header:"Age",accessor:"age",Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right"},{Header:"Vet visits",accessor:"visits",Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right"},{Header:"Health",accessor:"health",Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right"}],x=[{Header:"Row index",accessor:(e,a)=>a,Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right",width:275},{Header:"Pet Type",accessor:"petType"},{Header:"First Name",accessor:"firstName"},{Header:"Age",accessor:"age",Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right"},{Header:"Vet visits",accessor:"visits",Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right"},{Header:"Health",accessor:"health",Cell:({cell:{value:e}})=>s.createElement(c,{value:e}),placement:"right"}],ae=({...e})=>{const[a,r]=n.useState(()=>w({rows:16})),o=n.useMemo(()=>x,[]);return s.createElement(m,{columns:o,data:a,onDataUpdate:r,id:"spreadsheet--id",...e})},te=({...e})=>{const[a,r]=n.useState(()=>w({rows:1e5})),o=n.useMemo(()=>x,[]),l=i=>s.createElement(X,{style:{width:"32px",height:"32px",minWidth:"32px",minHeight:"32px"}},s.createElement(G,{itemText:`Test item ${i}`}));return s.createElement(m,{columns:o,data:a,onDataUpdate:r,renderRowHeaderDirection:"Left",renderRowHeader:l,id:"spreadsheet--id",...e})},se=({...e})=>{const[a,r]=n.useState(()=>w({rows:1e3})),o=n.useMemo(()=>x,[]);return s.createElement(m,{columns:o,data:a,onDataUpdate:r,id:"spreadsheet--id",...e})},re=({...e})=>{const[a,r]=n.useState([]),o=n.useMemo(()=>[...x.filter(i=>i.Header!=="Row Index")],[]),l=n.useMemo(()=>o,[o]);return s.createElement(m,{columns:l,data:a,onDataUpdate:r,id:"spreadsheet--id",...e})},oe=({...e})=>{const[a,r]=n.useState(()=>w({rows:24,extraColumns:!0})),o=n.useMemo(()=>[...x,{Header:"Owner name",accessor:"ownerName"},{Header:"Weight",accessor:"weight"}],[]),l=n.useMemo(()=>o,[o]);return s.createElement(m,{columns:l,data:a,onDataUpdate:r,id:"spreadsheet--id",...e})},ne=({...e})=>{const[a,r]=n.useState(()=>w({rows:24,extraColumns:!0})),o=n.useMemo(()=>[...x,{Header:"Owner name",accessor:"ownerName"},{Header:"Weight",accessor:"weight"}],[]),l=n.useMemo(()=>o,[o]);return s.createElement(m,{columns:l,data:a,onDataUpdate:r,id:"spreadsheet--id",...e})},le=({...e})=>{const[a,r]=n.useState(()=>w({rows:24,extraColumns:!0})),o=ce=>{},l=n.useMemo(()=>[...ee,{Header:"Owner name",accessor:"ownerName"},{Header:"Weight",accessor:"weight"}],[]),i=n.useMemo(()=>l,[l]);return s.createElement(m,{columns:i,data:a,onDataUpdate:r,onColDrag:o,id:"spreadsheet--id",...e})},d=ae.bind({});d.storyName="Basic spreadsheet";d.args={selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const p=se.bind({});p.storyName="Large dataset";p.args={cellSize:"lg",selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const u=te.bind({});u.storyName="Large dataset with optional component";u.args={cellSize:"lg",selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const h=re.bind({});h.storyName="Empty with cells";h.args={defaultEmptyRowCount:24,selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet"};const D=oe.bind({});D.storyName="With many columns";D.args={selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet",totalVisibleColumns:5};const g=ne.bind({});g.storyName="With different options";g.args={readOnlyTable:!1,disableColumnSwapping:!1,selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet",totalVisibleColumns:5};const C=le.bind({});C.storyName="With drag drop  callback";C.args={selectAllAriaLabel:"Select all",spreadsheetAriaLabel:"Example data spreadsheet",totalVisibleColumns:5};var b,E,y;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState(() => generateData({
    rows: 16
  }));
  const columns = useMemo(() => columnData, []);
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} id="spreadsheet--id" {...args} />;
}`,...(y=(E=d.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var H,v,A;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState(() => generateData({
    rows: 1000
  }));
  const columns = useMemo(() => columnData, []);
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} id="spreadsheet--id" {...args} />;
}`,...(A=(v=p.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var j,L,N;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`({
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
}`,...(N=(L=u.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var O,W,T;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`({
  ...args
}) => {
  const [data, setData] = useState([]);
  const columnDataClone = useMemo(() => [...columnData.filter(item => item.Header !== 'Row Index')], []);
  const columns = useMemo(() => columnDataClone, [columnDataClone]);
  return <DataSpreadsheet columns={columns} data={data} onDataUpdate={setData} id="spreadsheet--id" {...args} />;
}`,...(T=(W=h.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var U,R,k;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`({
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
}`,...(k=(R=D.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var P,I,_;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`({
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
}`,...(_=(I=g.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var B,F,V;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`({
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
}`,...(V=(F=C.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};const ze=["dataSpreadsheet","largeDatasetSpreadsheet","largeDatasetSpreadsheetCustom","emptyWithCells","withManyColumns","withDifferentOptions","withDragDropCallback"];export{ze as __namedExportsOrder,d as dataSpreadsheet,Ve as default,h as emptyWithCells,p as largeDatasetSpreadsheet,u as largeDatasetSpreadsheetCustom,g as withDifferentOptions,C as withDragDropCallback,D as withManyColumns};
