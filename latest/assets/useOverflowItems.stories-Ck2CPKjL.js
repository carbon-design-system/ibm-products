import{r as a,e as t}from"./index-DzvNrmz8.js";import{u as y}from"./useOverflowItems-CwzdfDhG.js";import"./index-5As4T26e.js";import{S as o}from"./index-CLlrPapY.js";import{T as d}from"./Tag-D3qYq5ZI.js";import{A as w}from"./index-DaecxxNR.js";import{aL as I}from"./bucket-6-BVxmYIXv.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./useResizeObserver-Cp7HDrpC.js";import"./index-Cg1swjps.js";import"./index-Bv4JGo1_.js";import"./settings-DbzZchXt.js";import"./events-OVwOsPzJ.js";import"./index-P6UCShJt.js";import"./Text-DyBNjUAs.js";import"./bucket-18-D-cwffHE.js";import"./createClassWrapper-0jMU_xgu.js";import"./DefinitionTooltip-DKyN1THq.js";import"./bucket-10-BLMdRzi0.js";const B={title:"Hooks/useOverflowItems",parameters:{layout:"padded"}},E=()=>{const[r,f]=a.useState(500),[i,g]=a.useState(10),s=a.useRef(null),T=(e=>Array(e).fill(null).map((l,m)=>({id:m,label:`Tag ${m+1}`})))(i),{visibleItems:b,hiddenItems:h,itemRefHandler:v}=y(T,s),x=e=>{f(e)};return t.createElement("div",null,t.createElement(o,{className:"slider",max:1e3,min:200,value:r,onChange:({value:e})=>x(e),hideTextInput:!0,labelText:"Parent container width"}),t.createElement(o,{className:"slider",max:50,min:1,value:i,onChange:({value:e})=>g(e),hideTextInput:!0,labelText:"Number of total tags"}),t.createElement("div",{className:"parent",style:{width:`${r}px`}},t.createElement(w,{text:"Parent container",type:"layer",icon:I},t.createElement("div",{className:"child",ref:s},t.createElement("p",null,"Visible items:"),b.map(e=>t.createElement(d,{type:"blue",key:e.id,ref:l=>{v(e.id,l)}},e.label))),t.createElement("div",null,t.createElement("p",null,"Hidden items:"),h.map(e=>t.createElement(d,{key:e.id,type:"blue"},e.label))))))},n=E.bind({});n.args={};var u,c,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const G=["DefaultUsage"];export{n as DefaultUsage,G as __namedExportsOrder,B as default};
