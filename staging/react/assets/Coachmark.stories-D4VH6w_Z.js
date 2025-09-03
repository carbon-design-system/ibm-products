import{j as n,M as T,eo as f,ep as E,r as u,e as t,c as v,p as O,P as i,B as g,cQ as _}from"./iframe-BlQ-LkYW.js";import{C as s}from"./Coachmark-CjozdFqB.js";import{useMDXComponents as x}from"./index-BYVA8DqO.js";import{T as y}from"./index-BxY67D7H.js";import{g as w}from"./devtools-BJZSxg-N.js";import"./makeDraggable-uwpZpGRE.js";import"./bucket-6-C4pRq2Bl.js";import"./useIsomorphicEffect-BIhftj2z.js";import"./LayerContext-BvuXYV0V.js";import"./useMatchMedia-B-Sx8set.js";function b(o){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...x(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(T,{title:"Coachmark",component:s}),`
`,n.jsx(e.h1,{id:"coachmark",children:"Coachmark"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage/",rel:"nofollow",children:"Usage guidelines"})}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#coachmark-code-sample",children:"Coachmark code sample"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#tooltip-example-usage",children:"Tooltip example usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#floating-example-usage",children:"Floating example usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://pages.github.ibm.com/carbon/ibm-products/components/onboarding/coachmark/usage",rel:"nofollow",children:"Coachmarks"}),`
are just-in-time messages used to draw a user’s attention to a particular spot,
and explain new functionality or concepts they might not otherwise notice or
understand.`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Note:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["The trigger element or first child of ",n.jsx(e.code,{children:"Coachmark"}),` should always be either a
CoachmarkBeacon or a Button.`]}),`
`]}),`
`,n.jsx(e.h2,{id:"coachmark-code-sample",children:"Coachmark code sample"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Theme theme="white">
  <Coachmark
    ariaLabel="Coachmark"
    position={{ x: 151, y: 155 }}
    open={isOpen}
    onClose={handleClose}
    {...args}
  >
    <CoachmarkBeacon
      id="CoachmarkBtn"
      label="Show information"
      onClick={handleBeaconClick}
    ></CoachmarkBeacon>
    <Coachmark.Content highContrast={true}>
      <Coachmark.Content.Header
        closeIconDescription="Close"
        dragIconDescription="Drag"
      ></Coachmark.Content.Header>
      <Coachmark.Content.Body>
        <h2>Hello World</h2>
        <p>this is a description test</p>
        <Button size="sm">Done</Button>
      </Coachmark.Content.Body>
    </Coachmark.Content>
  </Coachmark>
</Theme>
`})}),`
`,n.jsx(e.h2,{id:"tooltip-example-usage",children:"Tooltip example usage"}),`
`,n.jsx(f,{className:"coachmarkExample",withSource:"none",of:h}),`
`,n.jsx(e.h2,{id:"floating-example-usage",children:"Floating example usage"}),`
`,n.jsx(f,{className:"coachmarkExample",withSource:"none",of:d}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(E,{})]})}function I(o={}){const{wrapper:e}={...x(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(b,{...o})}):b(o)}const D=".c4p--coachmark__next--coachmark-content{inline-size:290px}.c4p--coachmark__next--coachmark-content .c4p--coachmark__next--content-body{display:flex;flex-direction:column}.c4p--coachmark__next--coachmark-content .c4p--coachmark__next--content-body>h2{font-size:var(--cds-productive-heading-02-font-size, 1rem);font-weight:var(--cds-productive-heading-02-font-weight, 600);line-height:var(--cds-productive-heading-02-line-height, 1.375);letter-spacing:var(--cds-productive-heading-02-letter-spacing, 0);margin:0 0 .5rem}.c4p--coachmark__next--coachmark-content .c4p--coachmark__next--content-body>p{font-size:var(--cds-body-long-01-font-size, .875rem);font-weight:var(--cds-body-long-01-font-weight, 400);line-height:var(--cds-body-long-01-line-height, 1.42857);letter-spacing:var(--cds-body-long-01-letter-spacing, .16px)}.c4p--coachmark__next--coachmark-content .c4p--coachmark__next--content-body>button{display:flex;align-self:flex-end;margin-block-start:1rem}",C=`${O.prefix}--coachmark-beacon`,B="CoachmarkBeacon",k=u.forwardRef((o,e)=>{const{label:c,className:a,kind:l="default",buttonProps:m,...r}=o;return t.createElement("div",{className:v(C,`${C}-${l}`,a),...w(B),role:"tooltip",...r,ref:e},t.createElement("button",{type:"button",...m,className:`${C}__target`},t.createElement("svg",{className:`${C}__center`,"aria-label":c},t.createElement("title",null,c),t.createElement("circle",{r:1,cx:38,cy:38}))))});k.displayName=B;k.propTypes={buttonProps:i.shape({...g.propTypes,id:i.string,onClick:i.func,onDoubleClick:i.func,tabIndex:i.number,"aria-expanded":i.bool}),className:i.string,kind:i.oneOf(["default"]),label:i.string.isRequired};k.__docgenInfo={description:"Use beacon for the target prop of a Coachmark component.",methods:[],displayName:"CoachmarkBeacon",props:{className:{required:!1,tsType:{name:"string"},description:"Optional class name for this component.",type:{name:"string"}},kind:{required:!1,tsType:{name:"BEACON_KIND"},description:`What style of beacon.
BEACON_KIND is an enum from the Coachmark and can be used for this value.
@see {@link BEACON_KIND}`,type:{name:"enum",value:[{value:"'default'",computed:!1}]}},label:{required:!0,tsType:{name:"string"},description:"The aria label.",type:{name:"string"}},buttonProps:{required:!1,tsType:{name:"CoachmarkButtonProps"},description:"button props",type:{name:"shape",value:{id:{name:"string",required:!1},onClick:{name:"func",required:!1},onDoubleClick:{name:"func",required:!1},tabIndex:{name:"number",required:!1},"aria-expanded":{name:"bool",required:!1}}}}}};const R={title:"Experimental/Onboarding/Coachmark/next",component:s,tags:["autodocs","Onboarding"],argTypes:{children:{control:{type:null}},onClose:{control:{type:null}},align:{options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top"],control:{type:"select"}},className:{control:{type:null}}},parameters:{styles:D,docs:{page:I}}};function j(){const[o,e]=u.useState(()=>document.documentElement.getAttribute("data-carbon-theme"));return u.useEffect(()=>{const c=document.documentElement,a=()=>{const r=c.getAttribute("data-carbon-theme");e(p=>p!==r?r:p)},l=new MutationObserver(r=>{for(const p of r)p.type==="attributes"&&p.attributeName==="data-carbon-theme"&&a()});l.observe(c,{attributes:!0,attributeFilter:["data-carbon-theme"]});const m=setInterval(a,200);return()=>{l.disconnect(),clearInterval(m)}},[]),o}const N=o=>{const e=j(),[c,a]=u.useState(!0),l=()=>{a(!1)},m=()=>{a(r=>!r)};return t.createElement(y,{theme:e},t.createElement(s,{position:{x:151,y:155},open:c,onClose:l,...o},t.createElement(k,{label:"Show information",buttonProps:{onClick:m,id:"CoachmarkBtn"}}),t.createElement(s.Content,{highContrast:!0},t.createElement(s.Content.Header,{closeIconDescription:"Close"}),t.createElement(s.Content.Body,null,t.createElement("h2",null,"Hello World"),t.createElement("p",null,"this is a description test"),t.createElement(g,{size:"sm"},"Done")))))},S=o=>{const e=j(),[c,a]=u.useState(!0),l=()=>{a(!1)},m=()=>{a(r=>!r)};return t.createElement(y,{theme:e},t.createElement(s,{open:c,onClose:l,floating:!0,...o},t.createElement(g,{id:"CoachmarkBtn",kind:"tertiary",size:"md",label:"Show information",renderIcon:_,onClick:m},"Show information"),t.createElement(s.Content,{highContrast:!0},t.createElement(s.Content.Header,{closeIconDescription:"Close",dragIconDescription:"Drag"}),t.createElement(s.Content.Body,null,t.createElement("h2",null,"Hello World"),t.createElement("p",null,"this is a description test"),t.createElement(g,{size:"sm"},"Done")))))},h=N.bind({});h.args={align:"top"};const d=S.bind({});d.args={align:"bottom"};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => {
  const carbonTheme = useCarbonTheme();
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleBeaconClick = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return <Theme theme={carbonTheme}>
      <Coachmark position={{
      x: 151,
      y: 155
    }} open={isOpen} onClose={handleClose} {...args}>
        <CoachmarkBeacon label="Show information" buttonProps={{
        onClick: handleBeaconClick,
        id: 'CoachmarkBtn'
      }}></CoachmarkBeacon>
        <Coachmark.Content highContrast={true}>
          <Coachmark.Content.Header closeIconDescription="Close"></Coachmark.Content.Header>
          <Coachmark.Content.Body>
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <Button size="sm">Done</Button>
          </Coachmark.Content.Body>
        </Coachmark.Content>
      </Coachmark>
    </Theme>;
}`,...h.parameters?.docs?.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...h.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => {
  const carbonTheme = useCarbonTheme();
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleButtonClick = () => {
    setIsOpen(isOpen => !isOpen);
  };
  return <Theme theme={carbonTheme}>
      <Coachmark open={isOpen} onClose={handleClose} floating={true} {...args}>
        <Button id="CoachmarkBtn" kind="tertiary" size="md" label="Show information" renderIcon={Crossroads} onClick={handleButtonClick}>
          Show information
        </Button>
        <Coachmark.Content highContrast={true}>
          <Coachmark.Content.Header closeIconDescription="Close" dragIconDescription="Drag"></Coachmark.Content.Header>
          <Coachmark.Content.Body>
            <h2>Hello World</h2>
            <p>this is a description test</p>
            <Button size="sm">Done</Button>
          </Coachmark.Content.Body>
        </Coachmark.Content>
      </Coachmark>
    </Theme>;
}`,...d.parameters?.docs?.source}}};const X=["Tooltip","Floating"];export{d as Floating,h as Tooltip,X as __namedExportsOrder,R as default};
