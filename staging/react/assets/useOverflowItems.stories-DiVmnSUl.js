var w=Object.defineProperty;var i=(a,e)=>w(a,"name",{value:e,configurable:!0});import{j as n,aH as y,aJ as I,r as o,e as s}from"./iframe-DU3fWsEq.js";import{u as O}from"./useOverflowItems-BT0rhYlb.js";import{T as h}from"./Tag-BUPZHD8e.js";import{S as f}from"./Slider-BlmR0Rzy.js";import{A as E}from"./index-DTbFSqPm.js";import{useMDXComponents as p}from"./index-Y1jbeCiL.js";import{a as k}from"./bucket-7-Yi-B9hmh.js";import"./preload-helper-Cc2_yIPf.js";import"./useResizeObserver-IK2T-B-k.js";import"./useIsomorphicEffect-rJHRE8hL.js";import"./Text-BMNkTgzs.js";import"./DefinitionTooltip-DV7wJZxM.js";import"./index-Cp5_bPRb.js";import"./index-CnSnZ5hY.js";import"./bucket-19-Be1_xXYE.js";import"./useNormalizedInputProps-CiScQqEC.js";import"./bucket-20-CmByzEsl.js";import"./clamp-ekNJC_Xv.js";import"./bucket-11-Bqu2xQ11.js";function u(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...p(),...a.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"useoverflowitems",children:"useOverflowItems"}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#hook-api",children:"Hook API"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#example-implementation",children:"Example implementation"})}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"useOverflowItems"}),` hook can be used for handling overflow behavior of
multiple DOM elements inside of a given area.`]}),`
`,n.jsxs(e.p,{children:["For example, if you need to display a certain number of ",n.jsx(e.code,{children:"Tag"}),` elements in a
container and render additional values in a popover, you could use this hook to
do just that.`]}),`
`,n.jsx(e.h2,{id:"hook-api",children:"Hook API"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Hook arguments
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
`,n.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const { visibleItems, hiddenItems, itemRefHandler, offsetRefHandler } =
  useOverflowItems(items, containerRef, offsetRef, maxVisible, onChange);
`})}),`
`,n.jsx(y,{children:n.jsx(I,{of:r})}),`
`,n.jsx(e.h2,{id:"example-implementation",children:"Example implementation"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"useOverflowItems"}),` is used in several components within the Carbon for IBM
products library.`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["ActionBar",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"?path=/docs/utils-components-actionbar--docs&globals=viewport:basic",children:"Storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/carbon-design-system/ibm-products/blob/4fea32f2b62cf45c6ea92a3034e9fe5fc294af62/packages/ibm-products/src/components/ActionBar/ActionBar.tsx#L129",rel:"nofollow",children:"Source"})}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["TagOverflow",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"?path=/docs/utils-components-tagoverflow--docs&globals=viewport:basic",children:"Storybook"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/carbon-design-system/ibm-products/blob/4fea32f2b62cf45c6ea92a3034e9fe5fc294af62/packages/ibm-products/src/components/TagOverflow/TagOverflow.tsx#L130",rel:"nofollow",children:"Source"})}),`
`]}),`
`]}),`
`]})]})}i(u,"_createMdxContent");function H(a={}){const{wrapper:e}={...p(),...a.components};return e?n.jsx(e,{...a,children:n.jsx(u,{...a})}):u(a)}i(H,"MDXContent");const Q={title:"Utilities/useOverflowItems",parameters:{layout:"padded",docs:{page:H}},tags:["autodocs"]},R=i(()=>{const[a,e]=o.useState(500),[l,x]=o.useState(10),d=o.useRef(null),b=i(t=>Array(t).fill(null).map((m,c)=>({id:c,label:`Tag ${c+1}`})),"makeTags")(l),{visibleItems:g,hiddenItems:v,itemRefHandler:j}=O(b,d),T=i(t=>{e(t)},"widthHandler");return s.createElement("div",null,s.createElement(f,{className:"slider",max:1e3,min:200,value:a,onChange:i(({value:t})=>T(t),"onChange"),hideTextInput:!0,labelText:"Parent container width"}),s.createElement(f,{className:"slider",max:50,min:1,value:l,onChange:i(({value:t})=>x(t),"onChange"),hideTextInput:!0,labelText:"Number of total tags"}),s.createElement("div",{className:"parent",style:{width:`${a}px`}},s.createElement(E,{text:"Parent container",type:"layer",icon:k},s.createElement("div",{className:"child",ref:d},s.createElement("p",null,"Visible items:"),g.map(t=>s.createElement(h,{type:"blue",key:t.id,ref:i(m=>{j(t.id,m)},"ref")},t.label))),s.createElement("div",{className:"child"},s.createElement("p",null,"Hidden items:"),v.map(t=>s.createElement(h,{key:t.id,type:"blue"},t.label))))))},"Template"),r=R.bind({});r.args={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
          <div className="child">
            <p>Hidden items:</p>
            {hiddenItems.map(tag => <Tag key={tag.id} type="blue">
                {tag.label}
              </Tag>)}
          </div>
        </Annotation>
      </div>
    </div>;
}`,...r.parameters?.docs?.source}}};const Y=["Default"];export{r as Default,Y as __namedExportsOrder,Q as default};
//# sourceMappingURL=useOverflowItems.stories-DiVmnSUl.js.map
