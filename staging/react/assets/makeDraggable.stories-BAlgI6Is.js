var R=Object.defineProperty;var o=(n,e)=>R(n,"name",{value:e,configurable:!0});import{j as a,aH as k,aJ as C,r as d,e as r,B as u,aY as v,D as y,F as N,Y as L}from"./iframe-DU3fWsEq.js";import{m as b}from"./makeDraggable-onz3agOw.js";import{useMDXComponents as E}from"./index-Y1jbeCiL.js";import{f as x}from"./bucket-6-CYCyVP6N.js";import"./preload-helper-Cc2_yIPf.js";function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...E(),...n.components};return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{id:"makedraggable",children:"makeDraggable"}),`
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
`,a.jsx(k,{children:a.jsx(C,{of:c})})]})}o(h,"_createMdxContent");function j(n={}){const{wrapper:e}={...E(),...n.components};return e?a.jsx(e,{...n,children:a.jsx(h,{...n})}):h(n)}o(j,"MDXContent");const M={title:"Utilities/makeDraggable",parameters:{layout:"padded",docs:{page:j}},tags:["autodocs"]},T=o(()=>{const n=d.useRef(null),e=d.useRef(null),l=d.useRef(null);return d.useEffect(()=>{const t=n.current;if(t&&e.current&&l.current){const g=b({el:t,dragHandle:e.current,focusableDragHandle:l.current}),s=o(()=>{t&&(t.classList.add("is-dragging"),t.setAttribute("aria-label","Picked up the draggable Dialog"))},"onDragStart"),i=o(()=>{t&&(t.classList.remove("is-dragging"),t.setAttribute("aria-label","draggable Dialog was dropped"))},"onDragEnd");return t.addEventListener("dragstart",s),t.addEventListener("dragend",i),()=>{t&&(t.removeEventListener("dragstart",s),t.removeEventListener("dragend",i)),g.cleanup()}}},[n.current,e.current,l.current]),r.createElement("div",{className:"mt-10 flex justify-center"},r.createElement("div",{ref:n,className:"draggable__div"},r.createElement("div",{ref:e,className:"draggable__div-header"},r.createElement("header",{ref:e,className:"div-header"},r.createElement(u,{kind:"ghost",ref:l,className:"drag-icon-div","aria-describedby":"drag-instructions"},r.createElement(x,null)),r.createElement("span",{id:"drag-instructions",className:"sr-only"},"To pick up the draggable item, press Enter. While dragging, use the arrow keys to move the item. Press Enter again to leave the item in its new position."))),r.createElement("div",{className:"draggable__div-body"},r.createElement("p",null,"This server has 150 GB of block storage remaining."))))},"DraggableDiv"),S=o(()=>{const[n,e]=d.useState(!0),l=d.useRef(null),t=d.useRef(null),g=d.useRef(null);return d.useEffect(()=>{if(n&&l.current&&t.current&&g.current){const s=l.current.querySelector(`.${v.prefix}--popover`),i=l.current.querySelector(`.${v.prefix}--popover-content`);if(s instanceof HTMLElement){s.style.transform="none",s.style.left="0px",s.style.top="0px";const D=b({el:s,dragHandle:t.current,focusableDragHandle:g.current}),m=o(()=>{s&&i&&(i.classList.add("is-dragging"),i.setAttribute("aria-label","Picked up the draggable popover"))},"onDragStart"),f=o(()=>{s&&i&&(i.classList.remove("is-dragging"),i.setAttribute("aria-label","draggable popover was dropped"))},"onDragEnd");return s.addEventListener("dragstart",m),s.addEventListener("dragend",f),()=>{s.removeEventListener("dragstart",m),s.removeEventListener("dragend",f),D.cleanup()}}}},[n,l.current,g.current]),r.createElement("div",{className:"mt-10 flex justify-center"},r.createElement(y,{open:n,caret:!1,ref:l,className:"popover"},r.createElement(u,{"aria-expanded":n,onClick:o(()=>{e(!n)},"onClick")},"Toggle"),r.createElement(N,{className:"popover-content"},r.createElement("header",{ref:t,className:"popover-header popover-title"},r.createElement(u,{kind:"ghost",ref:g,className:"drag-icon",onClick:o(()=>console.log("clicked"),"onClick"),"aria-describedby":"drag-instructions"},r.createElement(x,null)),r.createElement("span",{id:"drag-instructions",className:"sr-only"},"To pick up the draggable item, press Enter. While dragging, use the arrow keys to move the item. Press Enter again to leave the item in its new position."),r.createElement(u,{kind:"ghost",onClick:o(()=>e(!1),"onClick"),className:"close-icon"},r.createElement(L,null))),r.createElement("p",{className:"heading"}," Available storage"),r.createElement("p",{className:"popover-details"},"This server has 150 GB of block storage remaining."))))},"DraggablePopoverTemplate"),p=T.bind({}),c=S.bind({});p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(true);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (isOpen && dialogRef.current && headerRef.current && dragRef.current) {
      const dragContainer = dialogRef.current.querySelector(\`.\${carbon.prefix}--popover\`);
      const dragStyleContainer = dialogRef.current.querySelector(\`.\${carbon.prefix}--popover-content\`);
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
}`,...c.parameters?.docs?.source}}};const A=["DraggableCustomDiv","DraggablePopover"];export{p as DraggableCustomDiv,c as DraggablePopover,A as __namedExportsOrder,M as default};
//# sourceMappingURL=makeDraggable.stories-BAlgI6Is.js.map
