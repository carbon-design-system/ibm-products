import{j as r,eo as R,eq as E,r as o,e as n,B as u,W as x,X as k,n as D}from"./iframe-BlQ-LkYW.js";import{m}from"./makeDraggable-uwpZpGRE.js";import{useMDXComponents as f}from"./index-BYVA8DqO.js";import{i as h}from"./bucket-6-C4pRq2Bl.js";function p(a){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...f(),...a.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"makedraggable",children:"makeDraggable"}),`
`,r.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,r.jsx(e.li,{children:r.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,r.jsx(e.li,{children:r.jsx(e.a,{href:"#example-implementation",children:"Example implementation"})}),`
`]}),`
`,r.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,r.jsxs(e.p,{children:["The ",r.jsx(e.code,{children:"makeDraggable"}),` utility enables an HTML element to be draggable using either
mouse or keyboard interactions. It allows developers to specify an HTML element
as a required attribute to be moved, optional HTML element to initiate the
drag(e.g., a header), optional HTML element to focus on drag for keyboard
interaction (e.g., an icon) and an optional pixel value that defines the
distance to move when dragging with arrow keys (default: 8px) and shift arrow
keys (default: 32px).`]}),`
`,r.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`makeDraggable({
  el: dialogRef.current,
  handle: headerRef.current,
  focusableInHandle: dragRef.current,
});
`})}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`<Popover open={isOpen} ref={dialogRef} className="popover">
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
`,r.jsx(e.h2,{id:"example-implementation",children:"Example implementation"}),`
`,r.jsx(R,{children:r.jsx(E,{of:c})})]})}function y(a={}){const{wrapper:e}={...f(),...a.components};return e?r.jsx(e,{...a,children:r.jsx(p,{...a})}):p(a)}const S={title:"Utilities/makeDraggable",parameters:{layout:"padded",docs:{page:y}},tags:["autodocs"]},C=()=>{const a=o.useRef(null),e=o.useRef(null),t=o.useRef(null);return o.useEffect(()=>{if(a.current&&e.current&&t.current){m({el:a.current,dragHandle:e.current,focusableDragHandle:t.current});const d=()=>{a.current&&(a.current.classList.add("is-dragging"),a.current.setAttribute("aria-label","Picked up the draggable Dialog"))},i=()=>{a.current&&(a.current.classList.remove("is-dragging"),a.current.setAttribute("aria-label","draggable Dialog was dropped"))};a.current.addEventListener("dragstart",d),a.current.addEventListener("dragend",i)}},[a.current,e.current,t.current]),n.createElement("div",{className:"mt-10 flex justify-center"},n.createElement("div",{ref:a,className:"draggable__div"},n.createElement("div",{ref:e,className:"draggable__div-header"},n.createElement("header",{ref:e,className:"div-header"},n.createElement(u,{kind:"ghost",ref:t,className:"drag-icon-div","aria-describedby":"drag-instructions"},n.createElement(h,null)),n.createElement("span",{id:"drag-instructions",className:"sr-only"},"To pick up the draggable item, press Enter. While dragging, use the arrow keys to move the item. Press Enter again to leave the item in its new position."))),n.createElement("div",{className:"draggable__div-body"},n.createElement("p",null,"This server has 150 GB of block storage remaining."))))},N=()=>{const[a,e]=o.useState(!0),t=o.useRef(null),d=o.useRef(null),i=o.useRef(null);return o.useEffect(()=>{if(a&&t.current&&d.current&&i.current){const s=t.current.querySelector(".cds--popover"),l=t.current.querySelector(".cds--popover-content");if(s instanceof HTMLElement){s.style.transform="none",s.style.left="0px",s.style.top="0px",m({el:s,dragHandle:d.current,focusableDragHandle:i.current});const v=()=>{s&&l&&(l.classList.add("is-dragging"),l.setAttribute("aria-label","Picked up the draggable popover"))},b=()=>{s&&l&&(l.classList.remove("is-dragging"),l.setAttribute("aria-label","draggable popover was dropped"))};s.addEventListener("dragstart",v),s.addEventListener("dragend",b)}}},[a,t.current,i.current]),n.createElement("div",{className:"mt-10 flex justify-center"},n.createElement(x,{open:a,caret:!1,ref:t,className:"popover"},n.createElement(u,{"aria-expanded":a,onClick:()=>{e(!a)}},"Toggle"),n.createElement(k,{className:"popover-content"},n.createElement("header",{ref:d,className:"popover-header popover-title"},n.createElement(u,{kind:"ghost",ref:i,className:"drag-icon",onClick:()=>console.log("clicked"),"aria-describedby":"drag-instructions"},n.createElement(h,null)),n.createElement("span",{id:"drag-instructions",className:"sr-only"},"To pick up the draggable item, press Enter. While dragging, use the arrow keys to move the item. Press Enter again to leave the item in its new position."),n.createElement(u,{kind:"ghost",onClick:()=>e(!1),className:"close-icon"},n.createElement(D,null))),n.createElement("p",{className:"heading"}," Available storage"),n.createElement("p",{className:"popover-details"},"This server has 150 GB of block storage remaining."))))},g=C.bind({}),c=N.bind({});g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
      const onDragStart = () => {
        if (dialogRef.current) {
          dialogRef.current.classList.add('is-dragging');
          dialogRef.current.setAttribute('aria-label', 'Picked up the draggable Dialog');
        }
      };
      const onDragEnd = () => {
        if (dialogRef.current) {
          dialogRef.current.classList.remove('is-dragging');
          dialogRef.current.setAttribute('aria-label', 'draggable Dialog was dropped');
        }
      };
      dialogRef.current.addEventListener('dragstart', onDragStart);
      dialogRef.current.addEventListener('dragend', onDragEnd);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dialogRef.current, headerRef.current, dragRef.current]);
  return <div className="mt-10 flex justify-center">
      <div ref={dialogRef} className="draggable__div">
        <div ref={headerRef} className="draggable__div-header">
          <header ref={headerRef} className={\`div-header\`}>
            <Button kind="ghost" ref={dragRef} className="drag-icon-div" aria-describedby="drag-instructions">
              <Draggable />
            </Button>
            <span id="drag-instructions" className="sr-only">
              To pick up the draggable item, press Enter. While dragging, use
              the arrow keys to move the item. Press Enter again to leave the
              item in its new position.
            </span>
          </header>
        </div>
        <div className="draggable__div-body">
          <p>This server has 150 GB of block storage remaining.</p>
        </div>
      </div>
    </div>;
}`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(true);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (isOpen && dialogRef.current && headerRef.current && dragRef.current) {
      const dragContainer = dialogRef.current.querySelector('.cds--popover');
      const dragStyleContainer = dialogRef.current.querySelector('.cds--popover-content');
      if (dragContainer instanceof HTMLElement) {
        dragContainer.style.transform = 'none';
        dragContainer.style.left = '0px';
        dragContainer.style.top = '0px';
        makeDraggable({
          el: dragContainer,
          dragHandle: headerRef.current,
          focusableDragHandle: dragRef.current
        });
        const onDragStart = () => {
          if (dragContainer && dragStyleContainer) {
            dragStyleContainer.classList.add('is-dragging');
            dragStyleContainer.setAttribute('aria-label', 'Picked up the draggable popover');
          }
        };
        const onDragEnd = () => {
          if (dragContainer && dragStyleContainer) {
            dragStyleContainer.classList.remove('is-dragging');
            dragStyleContainer.setAttribute('aria-label', 'draggable popover was dropped');
          }
        };
        dragContainer.addEventListener('dragstart', onDragStart);
        dragContainer.addEventListener('dragend', onDragEnd);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, dialogRef.current, dragRef.current]);
  return <div className="mt-10 flex justify-center">
      <Popover open={isOpen} caret={false} ref={dialogRef} className="popover">
        <Button aria-expanded={isOpen} onClick={() => {
        setIsOpen(!isOpen);
      }}>
          Toggle
        </Button>

        <PopoverContent className="popover-content">
          <header ref={headerRef} className={\`popover-header popover-title\`}>
            <Button kind="ghost" ref={dragRef} className="drag-icon" onClick={() => console.log('clicked')} aria-describedby="drag-instructions">
              <Draggable />
            </Button>
            <span id="drag-instructions" className="sr-only">
              To pick up the draggable item, press Enter. While dragging, use
              the arrow keys to move the item. Press Enter again to leave the
              item in its new position.
            </span>
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
}`,...c.parameters?.docs?.source}}};const w=["DraggableCustomDiv","DraggablePopover"];export{g as DraggableCustomDiv,c as DraggablePopover,w as __namedExportsOrder,S as default};
