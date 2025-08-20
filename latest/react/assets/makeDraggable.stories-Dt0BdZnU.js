import{j as n,eo as h,eq as v,r as s,e as a,B as d,W as x,X as R,n as b}from"./iframe-6Ea7Lnhj.js";import{m as p}from"./makeDraggable-BMCZwF7o.js";import{useMDXComponents as m}from"./index-Cv_bLOE1.js";import{i as f}from"./bucket-6-BuyWAmS2.js";function u(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...m(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"makedraggable",children:"makeDraggable"}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#example-implementation",children:"Example implementation"})}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"makeDraggable"}),` utility enables an HTML element to be draggable using either
mouse or keyboard interactions. It allows developers to specify an HTML element as a required attribute to be moved,
optional HTML element to initiate the drag(e.g., a header), optional HTML element to focus on drag for keyboard interaction (e.g.,
an icon) and an optional pixel value that defines the distance to move when
dragging with arrow keys (default: 8px) and shift arrow keys (default: 32px).`]}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`makeDraggable({
  el: dialogRef.current,
  handle: headerRef.current,
  focusableInHandle: dragRef.current,
});
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Popover open={isOpen} ref={dialogRef} className="popover">
  <Button
    aria-expanded={isOpen}
    onClick={() => {
      setIsOpen(!isOpen);
    }}
  >
    Toggle
  </Button>

  <PopoverContent className="popover-content">
    <header ref={headerRef} className={\`popover-header popover-title\`}>
      <Button
        kind="ghost"
        ref={dragRef}
        className="drag-icon"
        onClick={() => console.log('clicked')}
      >
        <Draggable />
      </Button>
      <Button
        kind="ghost"
        onClick={() => setIsOpen(false)}
        className="close-icon"
      >
        <Close />
      </Button>
    </header>
    <p className="heading"> Available storage</p>
    <p className="popover-details">
      This server has 150 GB of block storage remaining.
    </p>
  </PopoverContent>
</Popover>
`})}),`
`,n.jsx(e.h2,{id:"example-implementation",children:"Example implementation"}),`
`,n.jsx(h,{children:n.jsx(v,{of:l})})]})}function k(r={}){const{wrapper:e}={...m(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(u,{...r})}):u(r)}const B={title:"Utilities/makeDraggable",parameters:{layout:"padded",docs:{page:k}},tags:["autodocs"]},E=()=>{const r=s.useRef(null),e=s.useRef(null),t=s.useRef(null);return s.useEffect(()=>{r.current&&e.current&&t.current&&p({el:r.current,dragHandle:e.current,focusableDragHandle:t.current})},[r.current,e.current,t.current]),a.createElement("div",{className:"mt-10 flex justify-center"},a.createElement("div",{ref:r,className:"draggable__div"},a.createElement("div",{ref:e,className:"draggable__div-header"},a.createElement("header",{ref:e,className:"div-header"},a.createElement(d,{kind:"ghost",ref:t,className:"drag-icon-div"},a.createElement(f,null)))),a.createElement("div",{className:"draggable__div-body"},a.createElement("p",null,"This server has 150 GB of block storage remaining."))))},N=()=>{const[r,e]=s.useState(!0),t=s.useRef(null),g=s.useRef(null),c=s.useRef(null);return s.useEffect(()=>{if(r&&t.current&&g.current&&c.current){const o=t.current.querySelector(".cds--popover");o instanceof HTMLElement&&(o.style.transform="none",o.style.left="0px",o.style.top="0px",p({el:o,dragHandle:g.current,focusableDragHandle:c.current}))}},[r,t.current,c.current]),a.createElement("div",{className:"mt-10 flex justify-center"},a.createElement(x,{open:r,ref:t,className:"popover"},a.createElement(d,{"aria-expanded":r,onClick:()=>{e(!r)}},"Toggle"),a.createElement(R,{className:"popover-content"},a.createElement("header",{ref:g,className:"popover-header popover-title"},a.createElement(d,{kind:"ghost",ref:c,className:"drag-icon",onClick:()=>console.log("clicked")},a.createElement(f,null)),a.createElement(d,{kind:"ghost",onClick:()=>e(!1),className:"close-icon"},a.createElement(b,null))),a.createElement("p",{className:"heading"}," Available storage"),a.createElement("p",{className:"popover-details"},"This server has 150 GB of block storage remaining."))))},i=E.bind({}),l=N.bind({});i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (dialogRef.current && headerRef.current && dragRef.current) {
      makeDraggable({
        el: dialogRef.current,
        dragHandle: headerRef.current,
        focusableDragHandle: dragRef.current
      });
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialogRef.current, headerRef.current, dragRef.current]);
  return <div className="mt-10 flex justify-center">
      <div ref={dialogRef} className="draggable__div">
        <div ref={headerRef} className="draggable__div-header">
          <header ref={headerRef} className={\`div-header\`}>
            <Button kind="ghost" ref={dragRef} className="drag-icon-div">
              <Draggable />
            </Button>
          </header>
        </div>
        <div className="draggable__div-body">
          <p>This server has 150 GB of block storage remaining.</p>
        </div>
      </div>
    </div>;
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(true);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (isOpen && dialogRef.current && headerRef.current && dragRef.current) {
      const dragContainer = dialogRef.current.querySelector('.cds--popover');
      if (dragContainer instanceof HTMLElement) {
        dragContainer.style.transform = 'none';
        dragContainer.style.left = '0px';
        dragContainer.style.top = '0px';
        makeDraggable({
          el: dragContainer,
          dragHandle: headerRef.current,
          focusableDragHandle: dragRef.current
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, dialogRef.current, dragRef.current]);
  return <div className="mt-10 flex justify-center">
      <Popover open={isOpen} ref={dialogRef} className="popover">
        <Button aria-expanded={isOpen} onClick={() => {
        setIsOpen(!isOpen);
      }}>
          Toggle
        </Button>

        <PopoverContent className="popover-content">
          <header ref={headerRef} className={\`popover-header popover-title\`}>
            <Button kind="ghost" ref={dragRef} className="drag-icon" onClick={() => console.log('clicked')}>
              <Draggable />
            </Button>
            <Button kind="ghost" onClick={() => setIsOpen(false)} className="close-icon">
              <Close />
            </Button>
          </header>
          <p className="heading"> Available storage</p>
          <p className="popover-details">
            This server has 150 GB of block storage remaining.
          </p>
        </PopoverContent>
      </Popover>
    </div>;
}`,...l.parameters?.docs?.source}}};const T=["DraggableCustomDiv","DraggablePopover"];export{i as DraggableCustomDiv,l as DraggablePopover,T as __namedExportsOrder,B as default};
