import{r as s,e as a}from"./index-DtHxqM--.js";import{u as I}from"./useOverflowItems-Bix69h02.js";import"./index-C360Eztx.js";import{S as c}from"./index-Cf6jJdmu.js";import{T as h}from"./Tag-Bml4-RaH.js";import{A as O}from"./index-BpQ54rfJ.js";import{j as e}from"./index-DgLvjnYm.js";import{useMDXComponents as b}from"./index-CseD6FCQ.js";import"./index-DrNcODRw.js";import{aY as k}from"./bucket-6-BjeV6rPm.js";import{a as E,j as H}from"./index-DXOm4vU7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useResizeObserver-CiQvgsPb.js";import"./settings-CFkY3W_8.js";import"./events-CdfZZS3f.js";import"./index-BopFi8TB.js";import"./clamp--00YEiB8.js";import"./Text-DKfZ87L_.js";import"./bucket-19-D7HYZr93.js";import"./DefinitionTooltip-Cn-blDBL.js";import"./bucket-10-F-tNiG7L.js";import"./index-CiYgQLeJ.js";import"./preview-BL6vYXCG.js";import"./iframe-DQx73iB6.js";import"./DocsRenderer-CFRXHY34-B-U9PCOx.js";import"./client-CZTHzaKS.js";import"./index-Dytf1aFS.js";import"./index-DrFu-skq.js";function f(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...b(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"useoverflowitems",children:"useOverflowItems"}),`
`,e.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#hook-api",children:"Hook API"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-implementation",children:"Example implementation"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useOverflowItems"})," hook can be used for handling overflow behavior of multiple DOM elements inside of a given area."]}),`
`,e.jsxs(n.p,{children:["For example, if you need to display a certain number of ",e.jsx(n.code,{children:"Tag"})," elements in a container and render additional values in a popover, you could use this hook to do just that."]}),`
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
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const {
  visibleItems,
  hiddenItems,
  itemRefHandler,
  offsetRefHandler
} = useOverflowItems(
  items,
  containerRef,
  offsetRef,
  maxVisible,
  onChange
);
`})}),`
`,e.jsx(E,{children:e.jsx(H,{of:r})}),`
`,e.jsx(n.h2,{id:"example-implementation",children:"Example implementation"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"useOverflowItems"})," is used in several components within the Carbon for IBM products library."]}),`
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
`]})]})}function R(i={}){const{wrapper:n}={...b(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(f,{...i})}):f(i)}const se={title:"Hooks/useOverflowItems",parameters:{layout:"padded",docs:{page:R}},tags:["autodocs"]},A=()=>{const[i,n]=s.useState(500),[o,g]=s.useState(10),l=s.useRef(null),v=(t=>Array(t).fill(null).map((m,d)=>({id:d,label:`Tag ${d+1}`})))(o),{visibleItems:j,hiddenItems:T,itemRefHandler:w}=I(v,l),y=t=>{n(t)};return a.createElement("div",null,a.createElement(c,{className:"slider",max:1e3,min:200,value:i,onChange:({value:t})=>y(t),hideTextInput:!0,labelText:"Parent container width"}),a.createElement(c,{className:"slider",max:50,min:1,value:o,onChange:({value:t})=>g(t),hideTextInput:!0,labelText:"Number of total tags"}),a.createElement("div",{className:"parent",style:{width:`${i}px`}},a.createElement(O,{text:"Parent container",type:"layer",icon:k},a.createElement("div",{className:"child",ref:l},a.createElement("p",null,"Visible items:"),j.map(t=>a.createElement(h,{type:"blue",key:t.id,ref:m=>{w(t.id,m)}},t.label))),a.createElement("div",null,a.createElement("p",null,"Hidden items:"),T.map(t=>a.createElement(h,{key:t.id,type:"blue"},t.label))))))},r=A.bind({});r.args={};var u,p,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const oe=["Default"];export{r as Default,oe as __namedExportsOrder,se as default};
