var y=Object.defineProperty;var a=(l,h)=>y(l,"name",{value:h,configurable:!0});import{R as e,B as i}from"./iframe-D_TgCArL.js";import{C as b,a as B,b as E,c as g,R as c,H as m,B as u,F as p}from"./index-Dlvd5Nk5.js";import"./preload-helper-Cc2_yIPf.js";const T={title:"Preview/Card",component:g,subcomponents:{CardHeader:E,CardBody:B,CardFooter:b},tags:["autodocs"],parameters:{layout:"padded"},argTypes:{clickable:{control:{type:"boolean"},description:"Makes the entire card clickable"},disabled:{control:{type:"boolean"},description:"Disables the card and all interactive elements"}}},C=a(l=>e.createElement(c,{...l},e.createElement(m,null,e.createElement("h3",null,"Card Title")),e.createElement(u,null,e.createElement("p",null,"This is the card body content. It can contain any custom content you need.")),e.createElement(p,null,e.createElement(i,{size:"sm"},"Action"))),"Template"),r=C.bind({});r.args={clickable:!1,disabled:!1};const t=C.bind({});t.args={clickable:!0,onClick:a(()=>console.log("Card clicked"),"onClick")};const n=C.bind({});n.args={disabled:!0};const o=a(()=>e.createElement(c,null,e.createElement(u,null,e.createElement("p",null,"A minimal card with just body content."))),"MinimalCard"),d=a(()=>e.createElement(c,null,e.createElement(m,null,e.createElement("h3",null,"Header Only Card"),e.createElement("p",null,"This card only has a header section."))),"HeaderOnly"),s=a(()=>e.createElement(c,null,e.createElement(m,null,e.createElement("h3",null,"Card with Actions")),e.createElement(u,null,e.createElement("p",null,"This card has multiple actions in the footer.")),e.createElement(p,null,e.createElement(i,{kind:"secondary",size:"sm"},"Cancel"),e.createElement(i,{size:"sm"},"Confirm"))),"WithFooterActions");o.__docgenInfo={description:"",methods:[],displayName:"MinimalCard"};d.__docgenInfo={description:"",methods:[],displayName:"HeaderOnly"};s.__docgenInfo={description:"",methods:[],displayName:"WithFooterActions"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <Card.Root {...args}>
    <Card.Header>
      <h3>Card Title</h3>
    </Card.Header>
    <Card.Body>
      <p>
        This is the card body content. It can contain any custom content you
        need.
      </p>
    </Card.Body>
    <Card.Footer>
      <Button size="sm">Action</Button>
    </Card.Footer>
  </Card.Root>`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <Card.Root {...args}>
    <Card.Header>
      <h3>Card Title</h3>
    </Card.Header>
    <Card.Body>
      <p>
        This is the card body content. It can contain any custom content you
        need.
      </p>
    </Card.Body>
    <Card.Footer>
      <Button size="sm">Action</Button>
    </Card.Footer>
  </Card.Root>`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <Card.Root {...args}>
    <Card.Header>
      <h3>Card Title</h3>
    </Card.Header>
    <Card.Body>
      <p>
        This is the card body content. It can contain any custom content you
        need.
      </p>
    </Card.Body>
    <Card.Footer>
      <Button size="sm">Action</Button>
    </Card.Footer>
  </Card.Root>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <Card.Root>
    <Card.Body>
      <p>A minimal card with just body content.</p>
    </Card.Body>
  </Card.Root>`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <Card.Root>
    <Card.Header>
      <h3>Header Only Card</h3>
      <p>This card only has a header section.</p>
    </Card.Header>
  </Card.Root>`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <Card.Root>
    <Card.Header>
      <h3>Card with Actions</h3>
    </Card.Header>
    <Card.Body>
      <p>This card has multiple actions in the footer.</p>
    </Card.Body>
    <Card.Footer>
      <Button kind="secondary" size="sm">
        Cancel
      </Button>
      <Button size="sm">Confirm</Button>
    </Card.Footer>
  </Card.Root>`,...s.parameters?.docs?.source}}};const k=["Default","Clickable","Disabled","MinimalCard","HeaderOnly","WithFooterActions"];export{t as Clickable,r as Default,n as Disabled,d as HeaderOnly,o as MinimalCard,s as WithFooterActions,k as __namedExportsOrder,T as default};
//# sourceMappingURL=Card.stories-DkeK4-rX.js.map
