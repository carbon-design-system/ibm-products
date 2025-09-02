import{j as e,eo as T,eq as w,r,e as a}from"./iframe-Bt_4wi2_.js";import{u as y}from"./useOverflowItems-DiOW2jOs.js";import{S as c}from"./index-CGExKNv0.js";import{T as h}from"./Tag-Ex8z9_ne.js";import{A as I}from"./index-Co0lUQA-.js";import{useMDXComponents as f}from"./index-BUsdy7aT.js";import{aY as O}from"./bucket-6-DqzXE5dN.js";import"./useResizeObserver-B7TK2lQu.js";import"./clamp--00YEiB8.js";import"./Text-CKKshe8_.js";import"./bucket-19-Cu112eOp.js";import"./DefinitionTooltip-DhipDxYz.js";import"./index-xWfRmBau.js";import"./bucket-18-BNKdAP26.js";import"./utils-Dx5MzUE-.js";import"./bucket-10-DWI6KGK9.js";function u(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...f(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"useoverflowitems",children:"useOverflowItems"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#hook-api",children:"Hook API"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-implementation",children:"Example implementation"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useOverflowItems"}),` hook can be used for handling overflow behavior of
multiple DOM elements inside of a given area.`]}),`
`,e.jsxs(n.p,{children:["For example, if you need to display a certain number of ",e.jsx(n.code,{children:"Tag"}),` elements in a
container and render additional values in a popover, you could use this hook to
do just that.`]}),`
`,e.jsx(n.h2,{id:"hook-api",children:"Hook API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Hook arguments
items: T[] = [], // A generic array of items
containerRef: RefObject<HTMLElement | null>, // The parent container that the items are confined to
offsetRef?: RefObject<HTMLElement | null>, // An optional ref to an element that you want to exclude from the calculation
maxItems?: number, // An optional argument for a maximum amount of items to return
onChange?: (value: {
  hiddenItems?: T[];
  minWidth?: number;
  maxWidth?: number;
}) => void // An event handler that's called whenever the number of number of visible items changes

// Hook returns
{
  visibleItems: T[]; // An array of items that fit in the containerRef
  itemRefHandler: (id: string, node: HTMLElement | null) => void; // A handler for passing the ref of the node to the hook
  hiddenItems: T[]; // An array of items that don't fit in the containerRef
  offsetRefHandler: (node: HTMLElement | null) => HTMLElement; // A handler for passing the ref of the offset element to the hook
}
`})}),`
`,e.jsx(n.h2,{id:"example-usage",children:"Example usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const { visibleItems, hiddenItems, itemRefHandler, offsetRefHandler } =
  useOverflowItems(items, containerRef, offsetRef, maxVisible, onChange);
`})}),`
`,e.jsx(T,{children:e.jsx(w,{of:i})}),`
`,e.jsx(n.h2,{id:"example-implementation",children:"Example implementation"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useOverflowItems"}),` is used in several components within the Carbon for IBM
products library.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["ActionBar",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/utils-components-actionbar--docs&globals=viewport:basic",children:"Storybook"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/carbon-design-system/ibm-products/blob/4fea32f2b62cf45c6ea92a3034e9fe5fc294af62/packages/ibm-products/src/components/ActionBar/ActionBar.tsx#L129",rel:"nofollow",children:"Source"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["TagOverflow",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/utils-components-tagoverflow--docs&globals=viewport:basic",children:"Storybook"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/carbon-design-system/ibm-products/blob/4fea32f2b62cf45c6ea92a3034e9fe5fc294af62/packages/ibm-products/src/components/TagOverflow/TagOverflow.tsx#L130",rel:"nofollow",children:"Source"})}),`
`]}),`
`]}),`
`]})]})}function E(s={}){const{wrapper:n}={...f(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(u,{...s})}):u(s)}const q={title:"Utilities/useOverflowItems",parameters:{layout:"padded",docs:{page:E}},tags:["autodocs"]},k=()=>{const[s,n]=r.useState(500),[o,p]=r.useState(10),l=r.useRef(null),x=(t=>Array(t).fill(null).map((d,m)=>({id:m,label:`Tag ${m+1}`})))(o),{visibleItems:b,hiddenItems:g,itemRefHandler:v}=y(x,l),j=t=>{n(t)};return a.createElement("div",null,a.createElement(c,{className:"slider",max:1e3,min:200,value:s,onChange:({value:t})=>j(t),hideTextInput:!0,labelText:"Parent container width"}),a.createElement(c,{className:"slider",max:50,min:1,value:o,onChange:({value:t})=>p(t),hideTextInput:!0,labelText:"Number of total tags"}),a.createElement("div",{className:"parent",style:{width:`${s}px`}},a.createElement(I,{text:"Parent container",type:"layer",icon:O},a.createElement("div",{className:"child",ref:l},a.createElement("p",null,"Visible items:"),b.map(t=>a.createElement(h,{type:"blue",key:t.id,ref:d=>{v(t.id,d)}},t.label))),a.createElement("div",null,a.createElement("p",null,"Hidden items:"),g.map(t=>a.createElement(h,{key:t.id,type:"blue"},t.label))))))},i=k.bind({});i.args={};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [width, setWidth] = useState(500);
  const [numberOfTags, setNumberOfTags] = useState(10);
  const containerRef = useRef(null);
  const makeTags = n => {
    return Array(n).fill(null).map((_, idx) => ({
      id: idx,
      label: \`Tag \${idx + 1}\`
    }));
  };
  const tags = makeTags(numberOfTags);
  const {
    visibleItems,
    hiddenItems,
    itemRefHandler
  } = useOverflowItems(tags, containerRef);
  const widthHandler = n => {
    setWidth(n);
  };
  return <div>
      <Slider className="slider" max={1000} min={200} value={width} onChange={({
      value
    }) => widthHandler(value)} hideTextInput labelText="Parent container width" />
      <Slider className="slider" max={50} min={1} value={numberOfTags} onChange={({
      value
    }) => setNumberOfTags(value)} hideTextInput labelText="Number of total tags" />
      <div className="parent" style={{
      width: \`\${width}px\`
    }}>
        <Annotation text="Parent container" type="layer" icon={FitToWidth}>
          <div className="child" ref={containerRef}>
            <p>Visible items:</p>
            {visibleItems.map(tag => <Tag type="blue" key={tag.id} ref={node => {
            itemRefHandler(tag.id, node);
          }}>
                {tag.label}
              </Tag>)}
          </div>
          <div>
            <p>Hidden items:</p>
            {hiddenItems.map(tag => <Tag key={tag.id} type="blue">
                {tag.label}
              </Tag>)}
          </div>
        </Annotation>
      </div>
    </div>;
}`,...i.parameters?.docs?.source}}};const U=["Default"];export{i as Default,U as __namedExportsOrder,q as default};
