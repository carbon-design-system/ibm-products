import{j as a,aB as x,aD as D,r as i,e as r,B as u,F as R,G as k,m as C}from"./iframe-BBf3bqTv.js";import{m as v}from"./makeDraggable-CWeuHNvj.js";import{useMDXComponents as h}from"./index-BQtCSjrU.js";import{d as b}from"./bucket-6-TRoxTq9G.js";import"./preload-helper-D9Z9MdNV.js";function f(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...h(),...t.components};return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"makedraggable",children:"makeDraggable"}),`
`,a.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,a.jsxs(e.ul,{children:[`
`,a.jsx(e.li,{children:a.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,a.jsx(e.li,{children:a.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,a.jsx(e.li,{children:a.jsx(e.a,{href:"#example-implementation",children:"Example implementation"})}),`
`]}),`
`,a.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,a.jsxs(e.p,{children:["The ",a.jsx(e.code,{children:"makeDraggable"}),` utility enables an HTML element to be draggable using either
mouse or keyboard interactions. It allows developers to specify an HTML element
as a required attribute to be moved, optional HTML element to initiate the
drag(e.g., a header), optional HTML element to focus on drag for keyboard
interaction (e.g., an icon) and an optional pixel value that defines the
distance to move when dragging with arrow keys (default: 8px) and shift arrow
keys (default: 32px).`]}),`
`,a.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`makeDraggable({
  el: dialogRef.current,
  handle: headerRef.current,
  focusableInHandle: dragRef.current,
});
`})}),`
`,a.jsx(e.pre,{children:a.jsx(e.code,{className:"language-jsx",children:`<Popover open={isOpen} ref={dialogRef} className="popover">
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
`,a.jsx(e.h2,{id:"example-implementation",children:"Example implementation"}),`
`,a.jsx(x,{children:a.jsx(D,{of:g})})]})}function y(t={}){const{wrapper:e}={...h(),...t.components};return e?a.jsx(e,{...t,children:a.jsx(f,{...t})}):f(t)}const H={title:"Utilities/makeDraggable",parameters:{layout:"padded",docs:{page:y}},tags:["autodocs"]},N=()=>{const t=i.useRef(null),e=i.useRef(null),o=i.useRef(null);return i.useEffect(()=>{const n=t.current;if(n&&e.current&&o.current){const d=v({el:n,dragHandle:e.current,focusableDragHandle:o.current}),s=()=>{n&&(n.classList.add("is-dragging"),n.setAttribute("aria-label","Picked up the draggable Dialog"))},l=()=>{n&&(n.classList.remove("is-dragging"),n.setAttribute("aria-label","draggable Dialog was dropped"))};return n.addEventListener("dragstart",s),n.addEventListener("dragend",l),()=>{n&&(n.removeEventListener("dragstart",s),n.removeEventListener("dragend",l)),d.cleanup()}}},[t.current,e.current,o.current]),r.createElement("div",{className:"mt-10 flex justify-center"},r.createElement("div",{ref:t,className:"draggable__div"},r.createElement("div",{ref:e,className:"draggable__div-header"},r.createElement("header",{ref:e,className:"div-header"},r.createElement(u,{kind:"ghost",ref:o,className:"drag-icon-div","aria-describedby":"drag-instructions"},r.createElement(b,null)),r.createElement("span",{id:"drag-instructions",className:"sr-only"},"To pick up the draggable item, press Enter. While dragging, use the arrow keys to move the item. Press Enter again to leave the item in its new position."))),r.createElement("div",{className:"draggable__div-body"},r.createElement("p",null,"This server has 150 GB of block storage remaining."))))},L=()=>{const[t,e]=i.useState(!0),o=i.useRef(null),n=i.useRef(null),d=i.useRef(null);return i.useEffect(()=>{if(t&&o.current&&n.current&&d.current){const s=o.current.querySelector(".cds--popover"),l=o.current.querySelector(".cds--popover-content");if(s instanceof HTMLElement){s.style.transform="none",s.style.left="0px",s.style.top="0px";const E=v({el:s,dragHandle:n.current,focusableDragHandle:d.current}),p=()=>{s&&l&&(l.classList.add("is-dragging"),l.setAttribute("aria-label","Picked up the draggable popover"))},m=()=>{s&&l&&(l.classList.remove("is-dragging"),l.setAttribute("aria-label","draggable popover was dropped"))};return s.addEventListener("dragstart",p),s.addEventListener("dragend",m),()=>{s.removeEventListener("dragstart",p),s.removeEventListener("dragend",m),E.cleanup()}}}},[t,o.current,d.current]),r.createElement("div",{className:"mt-10 flex justify-center"},r.createElement(R,{open:t,caret:!1,ref:o,className:"popover"},r.createElement(u,{"aria-expanded":t,onClick:()=>{e(!t)}},"Toggle"),r.createElement(k,{className:"popover-content"},r.createElement("header",{ref:n,className:"popover-header popover-title"},r.createElement(u,{kind:"ghost",ref:d,className:"drag-icon",onClick:()=>console.log("clicked"),"aria-describedby":"drag-instructions"},r.createElement(b,null)),r.createElement("span",{id:"drag-instructions",className:"sr-only"},"To pick up the draggable item, press Enter. While dragging, use the arrow keys to move the item. Press Enter again to leave the item in its new position."),r.createElement(u,{kind:"ghost",onClick:()=>e(!1),className:"close-icon"},r.createElement(C,null))),r.createElement("p",{className:"heading"}," Available storage"),r.createElement("p",{className:"popover-details"},"This server has 150 GB of block storage remaining."))))},c=N.bind({}),g=L.bind({});c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (dialogElement && headerRef.current && dragRef.current) {
      const draggable = makeDraggable({
        el: dialogElement,
        dragHandle: headerRef.current,
        focusableDragHandle: dragRef.current
      });
      const onDragStart = () => {
        if (dialogElement) {
          dialogElement.classList.add('is-dragging');
          dialogElement.setAttribute('aria-label', 'Picked up the draggable Dialog');
        }
      };
      const onDragEnd = () => {
        if (dialogElement) {
          dialogElement.classList.remove('is-dragging');
          dialogElement.setAttribute('aria-label', 'draggable Dialog was dropped');
        }
      };
      dialogElement.addEventListener('dragstart', onDragStart);
      dialogElement.addEventListener('dragend', onDragEnd);

      // Clean up attached event listeners
      return () => {
        if (dialogElement) {
          dialogElement.removeEventListener('dragstart', onDragStart);
          dialogElement.removeEventListener('dragend', onDragEnd);
        }
        draggable.cleanup(); // Call the cleanup function from makeDraggable
      };
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
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
        const draggable = makeDraggable({
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

        //Clean up attached event listeners
        return () => {
          dragContainer.removeEventListener('dragstart', onDragStart);
          dragContainer.removeEventListener('dragend', onDragEnd);
          draggable.cleanup(); // Call the cleanup function from makeDraggable
        };
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
}`,...g.parameters?.docs?.source}}};const P=["DraggableCustomDiv","DraggablePopover"];export{c as DraggableCustomDiv,g as DraggablePopover,P as __namedExportsOrder,H as default};
//# sourceMappingURL=makeDraggable.stories-Bx2bi1rf.js.map
