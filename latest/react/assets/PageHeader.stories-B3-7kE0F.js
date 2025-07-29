import{el as n,ev as L,em as y,eo as x,eA as R,e,ef as H,B as i,bp as W}from"./iframe-HX3uP5rF.js";import{P as M,a as _,b as N,c as O,d as G,e as V,f as $,R as b,B as u,C as g,g as p,T as j,H as X,h as U}from"./index-CEXsU92W.js";import{B as h,a as l}from"./BreadcrumbItem-CWdIKuyC.js";import{G as q}from"./Grid-T7BkZx7s.js";import{C as A}from"./Column-DAr8sid6.js";import{T as C,c as v,d as r,a as F,b as o}from"./Tabs-CV6HH8JE.js";import{T as D}from"./Tag-BpNcgXsJ.js";import{useMDXComponents as z}from"./index-BvpUgIFr.js";import{p as I,B as k,A as J}from"./bucket-0-BYnxl-xo.js";import{B as S}from"./bucket-1-CV829xS4.js";import"./AspectRatio-D1c19525.js";import"./MenuItem-BIFmRzEC.js";import"./useControllableState-D00pB8BY.js";import"./useAttachedMenu-cmTbMPST.js";import"./Text-DBtsZOEn.js";import"./bucket-2-B3fTYnsS.js";import"./index-DFLvviES.js";import"./mergeRefs-91-mP8KM.js";import"./OperationalTag-BClxn1Ta.js";import"./DefinitionTooltip-CRzfjG3b.js";import"./PageHeaderUtils-D_OHgTAU.js";import"./SkeletonText-ChBAiwSl.js";import"./overflowHandler-6nRVSJRW.js";import"./documentLang-E105Y72C.js";import"./useId-C7snKMrq.js";import"./uuidv4-BN2rGLQG.js";import"./useOverflowItems-CyPoeupD.js";import"./useResizeObserver-Clxhuppz.js";import"./Link-Cfrp7F3L.js";import"./bucket-12-CwLSzf2K.js";import"./index-BEhuL1MR.js";import"./useNoInteractiveChildren-eujt3MDB.js";import"./useMatchMedia-U767N3N3.js";import"./index-BzsQW5qN.js";import"./bucket-18-KiX7pVM7.js";import"./utils-CeAP7Zfj.js";const E=""+new URL("2x1-C5cHyVBO.jpg",import.meta.url).href,K=""+new URL("3x2-Bu8WS3T_.jpg",import.meta.url).href;function w(t){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...z(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(L,{isTemplate:!0}),`
`,n.jsx(a.h1,{id:"pageheader",children:"PageHeader"}),`
`,n.jsx(a.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(a.ul,{children:[`
`,n.jsx(a.li,{children:n.jsx(a.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(a.li,{children:n.jsx(a.a,{href:"#pageheaderbreadcrumbbar",children:"PageHeader.BreadcrumbBar"})}),`
`,n.jsxs(a.li,{children:[n.jsx(a.a,{href:"#pageheadercontent",children:"PageHeader.Content"}),`
`,n.jsxs(a.ul,{children:[`
`,n.jsx(a.li,{children:n.jsx(a.a,{href:"#pageheadercontent-with-hero-image",children:"PageHeader.Content with hero image"})}),`
`]}),`
`]}),`
`,n.jsxs(a.li,{children:[n.jsx(a.a,{href:"#pageheadertabsbar",children:"PageHeader.TabsBar"}),`
`,n.jsxs(a.ul,{children:[`
`,n.jsx(a.li,{children:n.jsx(a.a,{href:"#pageheadertabsbar-with-tags",children:"PageHeader.TabsBar with Tags"})}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(a.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(a.p,{children:["The ",n.jsx(a.code,{children:"PageHeader"})," is a large family of components, composed of three zones; the Breadcrumb, Content, and Tabs."]}),`
`,n.jsx(y,{children:n.jsx(x,{of:s})}),`
`,n.jsx(a.h2,{id:"pageheaderbreadcrumbbar",children:"PageHeader.BreadcrumbBar"}),`
`,n.jsxs(a.p,{children:["The ",n.jsx(a.code,{children:"PageHeader.BreadcrumbBar"})," component is used to render the breadcrumb navigation area within the ",n.jsx(a.code,{children:"PageHeader"}),`.
It accepts `,n.jsx(a.code,{children:"Breadcrumb"})," and ",n.jsx(a.code,{children:"BreadcrumbItem"}),` components as children to define the breadcrumb trail. Additionally, it accepts
`,n.jsx(a.code,{children:"contentActions"})," and",n.jsx(a.code,{children:" pageActions"})," props, allowing for actions, such as ",n.jsx(a.code,{children:"Button"})," or ",n.jsx(a.code,{children:"IconButton"}),` — alongside
the breadcrumb content.`]}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-jsx",children:`import { Bee, Activity } from '@carbon/icons-react';

const BeeIcon = () => <Bee size={16} />;

const pageActions = (
  <Button
    renderIcon={Activity}
    iconDescription="Icon Description 1"
    hasIconOnly
    size="md"
    kind="ghost"
  />
);

const contentActions = (
  <Button size="md">Button</Button>
)

return (
  <PageHeader.Root>
    <PageHeader.BreadcrumbBar
      renderIcon={BeeIcon}
      contentActions={contentActions}
      pageActions={pageActions}>
      <Breadcrumb>
        <BreadcrumbItem href="/#">Breadcrumb 1</BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      </Breadcrumb>
    </PageHeader.BreadcrumbBar>
    ...
  </PageHeader.Root>
)
`})}),`
`,n.jsx(a.h2,{id:"pageheadercontent",children:"PageHeader.Content"}),`
`,n.jsx(y,{children:n.jsx(x,{of:d})}),`
`,n.jsxs(a.p,{children:["The ",n.jsx(a.code,{children:"PageHeader.Content"})," component defines the primary content area of the ",n.jsx(a.code,{children:"PageHeader"}),`, including the title, subtitle, and
any supporting text or contextual actions. It accepts a `,n.jsx(a.code,{children:"title"})," prop to display the main heading and can optionally include a ",n.jsx(a.code,{children:"renderIcon"}),` prop
to show an icon adjacent to the title. Child components such as `,n.jsx(a.code,{children:"PageHeader.ContentText"}),` can be used to provide additional descriptive text.
To support use cases such as tags, `,n.jsx(a.code,{children:"contextualActions"}),` can be passed as a prop to render components beside the content.
`,n.jsx(a.code,{children:"pageActions"})," allows integration of action buttons aligned with the content section."]}),`
`,n.jsxs(a.p,{children:["The ",n.jsx(a.code,{children:"PageHeader.ContentPageActions"})," component provides responsive behavior by collapsing actions into a ",n.jsx(a.code,{children:"MenuButton"}),` when the viewport
width is reduced. To enable this functionality, it expects an array of action objects with a specific API shape, as demonstrated below:`]}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-jsx",children:`
const actionItems = [
  {
    // props used for both collapse menu item and non-collapsed action form
    id: 'action1',
    onClick: () => console.log(\`Action 1\`),
    // component to render when non-collapsed
    body: (
      <Button
        renderIcon={AiGenerate}
        iconDescription="Icon Description 1"
        hasIconOnly
        size="md"
        kind="ghost"
      />
    ),
    // props to pass to the corresponding collapsed menu item
    menuItem: {
      label: 'action 1',
    },
  },
  ...
];

return (
  <PageHeader.Root>
   ...
    <PageHeader.Content
      title="Title text"
      contextualActions={
        <>
          <Tag className="tag" type="blue" size="lg">
            Tag
          </Tag>
        </>
      }
      pageActions={
        <PageHeader.ContentPageActions
          menuButtonLabel="Actions"
          actions={actionItems}></PageHeader.ContentPageActions>
      }>
      <PageHeader.ContentText subtitle="Subtitle">
        Built for modern teams, our technology platform simplifies complexity
        with powerful APIs, real-time collaboration tools, and seamless
        integration. From deployment to monitoring, we help you ship faster,
        scale efficiently, and stay in control every step of the way.
      </PageHeader.ContentText>
    </PageHeader.Content>
  </PageHeader.Root>
)
`})}),`
`,n.jsx(a.h3,{id:"pageheadercontent-with-hero-image",children:"PageHeader.Content With Hero Image"}),`
`,n.jsx(y,{children:n.jsx(x,{of:c})}),`
`,n.jsxs(a.p,{children:["When including a hero image within the ",n.jsx(a.code,{children:"PageHeader"}),", the ",n.jsx(a.code,{children:"Grid"})," and ",n.jsx(a.code,{children:"Column"}),` components will need to be utilized in order
to define the layout correctly.`]}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-jsx",children:`import { Grid, Column } from '@carbon/react';

return (
  <PageHeader.Root>
    <Grid>
      <Column lg={8} md={4} sm={4}>
        <PageHeader.BreadcrumbBar ... />
        <PageHeader.Content ... />
      </Column>
      <Column lg={8} md={4} sm={0}>
        <PageHeader.HeroImage>
          <picture>
            <source
              srcset={image1}
              media={\`(min-width: \${breakpoints.lg.width})\`}
            />
            <source
              srcset={image2}
              media={\`(max-width: \${breakpoints.lg.width})\`}
            />
            <img
              src={image1}
              alt="a default image"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </picture>
        </PageHeader.HeroImage>
      </Column>
    </Grid>
  </PageHeader.Root>
)

`})}),`
`,n.jsx(a.h2,{id:"pageheadertabsbar",children:"PageHeader.TabsBar"}),`
`,n.jsxs(a.p,{children:["To render the Tabs zone, utilize the ",n.jsx(a.code,{children:"PageHeader.TabBar"})," component, passing in the ",n.jsx(a.code,{children:"TabList"})," and ",n.jsx(a.code,{children:"Tab"}),` components
as its children. Then set up the `,n.jsx(a.code,{children:"TabPanels"})," and ",n.jsx(a.code,{children:"TabPanel"})," components outside of the ",n.jsx(a.code,{children:"PageHeader"}),`, making sure to
wrap all components within the `,n.jsx(a.code,{children:"Tabs"})," component to ensures proper linkage of tab and its associated panel."]}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-jsx",children:`<Tabs>
  <PageHeader.Root>
    ...
    <PageHeader.TabBar>
      <TabList>
        <Tab>Dashboard</Tab>
        <Tab>Monitoring</Tab>
        <Tab>Activity</Tab>
        <Tab>Settings</Tab>
      </TabList>
    </PageHeader.TabBar>
  </PageHeader.Root>
  <TabPanels>
    <TabPanel>Dashboard Tab Panel</TabPanel>
    <TabPanel>Monitoring Tab Panel</TabPanel>
    <TabPanel>Activity Tab Panel</TabPanel>
    <TabPanel>Settings Tab Panel</TabPanel>
  </TabPanels>
</Tabs>
`})}),`
`,n.jsx(a.h3,{id:"pageheadertabsbar-with-tags",children:"PageHeader.TabsBar With Tags"}),`
`,n.jsx(y,{children:n.jsx(x,{of:m})}),`
`,n.jsxs(a.p,{children:["The ",n.jsx(a.code,{children:"PageHeader.TabsBar"})," component accepts a ",n.jsx(a.code,{children:"tags"}),` prop expecting an array of objects as shown below. When the viewport
width is reduced, these tags automatically collapse into a `,n.jsx(a.code,{children:"Popover"})," for responsive display."]}),`
`,n.jsx(a.pre,{children:n.jsx(a.code,{className:"language-jsx",children:`const tags = [
  {
    type: 'blue',
    text: 'Tag 1',
    size: 'md',
  },
  {
    type: 'purple',
    text: 'Tag 2',
    size: 'md',
  },
];

return (
<Tabs>
  <PageHeader.Root>
    <PageHeader.TabBar tags={tags}>
      <TabList>
        <Tab>Tab 1</Tab>
        ...
      </TabList>
    </PageHeader.TabBar>
  </PageHeader.Root>
  <TabPanels>
    <TabPanel>Tab Panel 1</TabPanel>
    ...
  </TabPanels>
</Tabs>
);
`})}),`
`,n.jsx(a.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(R,{}),`
`,n.jsx(a.h2,{id:"feedback",children:"Feedback"}),`
`,n.jsxs(a.p,{children:[`Help us improve this component by providing feedback, asking questions on Slack,
or updating this file on
`,n.jsx(a.a,{href:"https://github.com/carbon-design-system/carbon/edit/main/packages/react/src/components/PageHeader/PageHeader.mdx",rel:"nofollow",children:"GitHub"}),"."]})]})}function Q(t={}){const{wrapper:a}={...z(),...t.components};return a?n.jsx(a,{...t,children:n.jsx(w,{...t})}):w(t)}const Y=[{type:"blue",text:"Tag 1",size:"md"},{type:"purple",text:"Tag 2",size:"md"},{type:"red",text:"Tag 3",size:"md"},{type:"blue",text:"Tag 4",size:"md"},{type:"purple",text:"Tag 5",size:"md"},{type:"red",text:"Tag 6",size:"md"}],We={title:"Experimental/Patterns/PageHeader",component:$,subcomponents:{PageHeaderBreadcrumbBar:V,PageHeaderContent:G,PageHeaderHeroImage:O,PageHeaderTabBar:N,PageHeaderContentText:_,PageHeaderContentPageActions:M},tags:["autodocs"],argTypes:{children:{control:!1}},parameters:{docs:{page:Q}},decorators:[t=>e.createElement(e.Fragment,null,e.createElement("style",null,`
          .sb-show-main.sb-main-centered {
            align-items: normal;
          }

          .sb-show-main.sb-main-centered #storybook-root {
            margin: 0;
            padding: 0;
            width: 100%;
          }
        `),e.createElement(t,null))]},Z=()=>e.createElement(S,{size:32}),f=()=>e.createElement(S,{size:16}),B=e.createElement(e.Fragment,null,e.createElement(i,{renderIcon:I,iconDescription:"Icon Description 1",hasIconOnly:!0,size:"md",kind:"ghost"}),e.createElement(i,{renderIcon:k,iconDescription:"Icon Description 2",hasIconOnly:!0,size:"md",kind:"ghost"}),e.createElement(i,{renderIcon:W,iconDescription:"Icon Description 3",hasIconOnly:!0,size:"md",kind:"ghost"})),ee=e.createElement(e.Fragment,null,e.createElement(i,{size:"md"},"Button")),s=t=>e.createElement(C,null,e.createElement(b,null,e.createElement(u,{border:t.border,pageActionsFlush:t.pageActionsFlush,contentActionsFlush:t.contentActionsFlush,renderIcon:t.renderBreadcrumbIcon?f:null,contentActions:ee,pageActions:B},e.createElement(h,null,e.createElement(l,{href:"/#"},"Breadcrumb 1"),e.createElement(l,{href:"#"},"Breadcrumb 2"))),e.createElement(g,{title:t.title},e.createElement(p,{subtitle:"Subtitle"},"Built for modern teams, our technology platform simplifies complexity with powerful APIs, real-time collaboration tools, and seamless integration. From deployment to monitoring, we help you ship faster, scale efficiently, and stay in control every step of the way.")),e.createElement(j,null,e.createElement(v,null,e.createElement(r,null,"Tab 1"),e.createElement(r,null,"Tab 2"),e.createElement(r,null,"Tab 3"),e.createElement(r,null,"Tab 4"),e.createElement(r,null,"Tab 5"),e.createElement(r,null,"Tab 6"),e.createElement(r,null,"Tab 7")))),e.createElement(F,null,e.createElement(o,null,"Tab Panel 1"),e.createElement(o,null,"Tab Panel 2"),e.createElement(o,null,"Tab Panel 3"),e.createElement(o,null,"Tab Panel 4"),e.createElement(o,null,"Tab Panel 5"),e.createElement(o,null,"Tab Panel 6"),e.createElement(o,null,"Tab Panel 7")));s.args={border:!0,pageActionsFlush:!1,contentActionsFlush:!1,title:"Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long",renderBreadcrumbIcon:!0};s.argTypes={border:{description:"Specify whether to render BreadcrumbBar border",control:{type:"boolean"}},pageActionsFlush:{description:"Specify whether the page actions within BreadcrumbBar should be flush",control:{type:"boolean"}},contentActionsFlush:{description:"Specify whether the content actions within BreadcrumbBar should be flush with the page actions",control:{type:"boolean"}},title:{description:"Provide the title text to be rendered within  PageHeaderContent",control:{type:"text"}},renderBreadcrumbIcon:{description:"Specify whether to render the BreadcrumbBar icon (storybook control only)",control:{type:"boolean"}}};const T=t=>e.createElement(b,null,e.createElement(u,{pageActions:B},e.createElement(h,null,e.createElement(l,{href:"/#"},"Breadcrumb 1"),e.createElement(l,{href:"#"},"Breadcrumb 2"))),e.createElement(g,{title:"Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long",renderIcon:Z,...t},e.createElement(p,{subtitle:"Subtitle"},"Built for modern teams, our technology platform simplifies complexity with powerful APIs, real-time collaboration tools, and seamless integration. From deployment to monitoring, we help you ship faster, scale efficiently, and stay in control every step of the way."))),P=t=>e.createElement(b,null,e.createElement(u,{renderIcon:f,pageActions:B},e.createElement(h,null,e.createElement(l,{href:"/#"},"Breadcrumb 1"),e.createElement(l,{href:"#"},"Breadcrumb 2"))),e.createElement(g,{title:"Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long",contextualActions:e.createElement(e.Fragment,null,e.createElement(D,{className:"tag",type:"blue",size:"lg"},"Tag")),...t},e.createElement(p,{subtitle:"Subtitle"},"Built for modern teams, our technology platform simplifies complexity with powerful APIs, real-time collaboration tools, and seamless integration. From deployment to monitoring, we help you ship faster, scale efficiently, and stay in control every step of the way."))),c=t=>e.createElement(b,null,e.createElement(q,null,e.createElement(A,{lg:8,md:4,sm:4},e.createElement(u,{border:!1,renderIcon:f},e.createElement(h,null,e.createElement(l,null,e.createElement("a",{href:"/#"},"Breadcrumb 1")),e.createElement(l,{href:"#"},"Breadcrumb 2"))),e.createElement(g,{title:"Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long",...t},e.createElement(p,{subtitle:"Subtitle"},"Built for modern teams, our technology platform simplifies complexity with powerful APIs, real-time collaboration tools, and seamless integration. From deployment to monitoring, we help you ship faster, scale efficiently, and stay in control every step of the way."))),e.createElement(A,{lg:8,md:4,sm:0},e.createElement(X,null,e.createElement("picture",null,e.createElement("source",{srcset:E,media:`(min-width: ${H.lg.width})`}),e.createElement("source",{srcset:K,media:`(max-width: ${H.lg.width})`}),e.createElement("img",{src:E,alt:"a default image",style:{maxWidth:"100%",height:"auto"}})))))),ne=[{id:"action1",onClick:()=>console.log("Action 1"),body:e.createElement(i,{renderIcon:k,iconDescription:"Icon Description 1",hasIconOnly:!0,size:"md",kind:"ghost"}),menuItem:{label:"action 1"}},{id:"action2",onClick:()=>console.log("Action 2"),body:e.createElement(i,{renderIcon:I,iconDescription:"Icon Description 2",hasIconOnly:!0,size:"md",kind:"ghost"}),menuItem:{label:"action 2"}},{id:"action3",onClick:()=>console.log("Action 3"),body:e.createElement(i,{renderIcon:I,iconDescription:"Icon Description 3",hasIconOnly:!0,size:"md",kind:"ghost"}),menuItem:{label:"action 3"}},{id:"action4",onClick:()=>console.log("Action 4"),body:e.createElement(i,{renderIcon:I,iconDescription:"Icon Description 4",hasIconOnly:!0,size:"md",kind:"ghost"}),menuItem:{label:"action 4"}},{id:"primary-action",onClick:()=>console.log("Primary action"),body:e.createElement(i,{kind:"primary",renderIcon:J,size:"md"},"Primary action"),menuItem:{label:"Primary action"}}],d=t=>e.createElement(b,null,e.createElement(u,{renderIcon:f,pageActions:B},e.createElement(h,null,e.createElement(l,{href:"/#"},"Breadcrumb 1"),e.createElement(l,{href:"#"},"Breadcrumb 2"))),e.createElement(g,{title:"Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long",contextualActions:e.createElement(e.Fragment,null,e.createElement(D,{className:"tag",type:"blue",size:"lg"},"Tag")),pageActions:e.createElement(U,{menuButtonLabel:"Actions",actions:ne}),...t},e.createElement(p,{subtitle:"Subtitle"},"Built for modern teams, our technology platform simplifies complexity with powerful APIs, real-time collaboration tools, and seamless integration. From deployment to monitoring, we help you ship faster, scale efficiently, and stay in control every step of the way."))),m=t=>e.createElement(C,null,e.createElement(b,null,e.createElement(u,{border:t.border,pageActionsFlush:t.pageActionsFlush,contentActionsFlush:t.contentActionsFlush,renderIcon:t.renderBreadcrumbIcon?f:null,pageActions:B},e.createElement(h,null,e.createElement(l,{href:"/#"},"Breadcrumb 1"),e.createElement(l,{href:"#"},"Breadcrumb 2"))),e.createElement(g,{title:"Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long",...t},e.createElement(p,{subtitle:"Subtitle"},"Built for modern teams, our technology platform simplifies complexity with powerful APIs, real-time collaboration tools, and seamless integration. From deployment to monitoring, we help you ship faster, scale efficiently, and stay in control every step of the way.")),e.createElement(j,{tags:Y},e.createElement(v,null,e.createElement(r,null,"Tab 1"),e.createElement(r,null,"Tab 2"),e.createElement(r,null,"Tab 3"),e.createElement(r,null,"Tab 4"),e.createElement(r,null,"Tab 5"),e.createElement(r,null,"Tab 6"),e.createElement(r,null,"Tab 7")))),e.createElement(F,null,e.createElement(o,null,"Tab Panel 1"),e.createElement(o,null,"Tab Panel 2"),e.createElement(o,null,"Tab Panel 3"),e.createElement(o,null,"Tab Panel 4"),e.createElement(o,null,"Tab Panel 5"),e.createElement(o,null,"Tab Panel 6"),e.createElement(o,null,"Tab Panel 7")));s.__docgenInfo={description:"",methods:[],displayName:"Default"};T.__docgenInfo={description:"",methods:[],displayName:"ContentWithIcon"};P.__docgenInfo={description:"",methods:[],displayName:"ContentWithContextualActions"};c.__docgenInfo={description:"",methods:[],displayName:"ContentWithHeroImage"};d.__docgenInfo={description:"",methods:[],displayName:"ContentWithContextualActionsAndPageActions"};m.__docgenInfo={description:"",methods:[],displayName:"TabBarWithTabsAndTags"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <Tabs>
    <PageHeader.Root>
      <PageHeader.BreadcrumbBar border={args.border} pageActionsFlush={args.pageActionsFlush} contentActionsFlush={args.contentActionsFlush} renderIcon={args.renderBreadcrumbIcon ? BreadcrumbBeeIcon : null} contentActions={breadcrumbContentActions} pageActions={breadcrumbPageActions}>
        <Breadcrumb>
          <BreadcrumbItem href="/#">Breadcrumb 1</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
        </Breadcrumb>
      </PageHeader.BreadcrumbBar>
      <PageHeader.Content title={args.title}>
        <PageHeader.ContentText subtitle="Subtitle">
          Built for modern teams, our technology platform simplifies complexity
          with powerful APIs, real-time collaboration tools, and seamless
          integration. From deployment to monitoring, we help you ship faster,
          scale efficiently, and stay in control every step of the way.
        </PageHeader.ContentText>
      </PageHeader.Content>
      <PageHeader.TabBar>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
          <Tab>Tab 4</Tab>
          <Tab>Tab 5</Tab>
          <Tab>Tab 6</Tab>
          <Tab>Tab 7</Tab>
        </TabList>
      </PageHeader.TabBar>
    </PageHeader.Root>
    <TabPanels>
      <TabPanel>Tab Panel 1</TabPanel>
      <TabPanel>Tab Panel 2</TabPanel>
      <TabPanel>Tab Panel 3</TabPanel>
      <TabPanel>Tab Panel 4</TabPanel>
      <TabPanel>Tab Panel 5</TabPanel>
      <TabPanel>Tab Panel 6</TabPanel>
      <TabPanel>Tab Panel 7</TabPanel>
    </TabPanels>
  </Tabs>`,...s.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <PageHeader.Root>
    <PageHeader.BreadcrumbBar pageActions={breadcrumbPageActions}>
      <Breadcrumb>
        <BreadcrumbItem href="/#">Breadcrumb 1</BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      </Breadcrumb>
    </PageHeader.BreadcrumbBar>
    <PageHeader.Content title="Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long" renderIcon={BeeIcon} {...args}>
      <PageHeader.ContentText subtitle="Subtitle">
        Built for modern teams, our technology platform simplifies complexity
        with powerful APIs, real-time collaboration tools, and seamless
        integration. From deployment to monitoring, we help you ship faster,
        scale efficiently, and stay in control every step of the way.
      </PageHeader.ContentText>
    </PageHeader.Content>
  </PageHeader.Root>`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => <PageHeader.Root>
    <PageHeader.BreadcrumbBar renderIcon={BreadcrumbBeeIcon} pageActions={breadcrumbPageActions}>
      <Breadcrumb>
        <BreadcrumbItem href="/#">Breadcrumb 1</BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      </Breadcrumb>
    </PageHeader.BreadcrumbBar>
    <PageHeader.Content title="Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long" contextualActions={<>
          <Tag className="tag" type="blue" size="lg">
            Tag
          </Tag>
        </>} {...args}>
      <PageHeader.ContentText subtitle="Subtitle">
        Built for modern teams, our technology platform simplifies complexity
        with powerful APIs, real-time collaboration tools, and seamless
        integration. From deployment to monitoring, we help you ship faster,
        scale efficiently, and stay in control every step of the way.
      </PageHeader.ContentText>
    </PageHeader.Content>
  </PageHeader.Root>`,...P.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <PageHeader.Root>
    <Grid>
      <Column lg={8} md={4} sm={4}>
        <PageHeader.BreadcrumbBar border={false} renderIcon={BreadcrumbBeeIcon}>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/#">Breadcrumb 1</a>
            </BreadcrumbItem>
            <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
          </Breadcrumb>
        </PageHeader.BreadcrumbBar>
        <PageHeader.Content title="Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long" {...args}>
          <PageHeader.ContentText subtitle="Subtitle">
            Built for modern teams, our technology platform simplifies
            complexity with powerful APIs, real-time collaboration tools, and
            seamless integration. From deployment to monitoring, we help you
            ship faster, scale efficiently, and stay in control every step of
            the way.
          </PageHeader.ContentText>
        </PageHeader.Content>
      </Column>
      <Column lg={8} md={4} sm={0}>
        <PageHeader.HeroImage>
          <picture>
            <source srcset={image1} media={\`(min-width: \${breakpoints.lg.width})\`} />
            <source srcset={image2} media={\`(max-width: \${breakpoints.lg.width})\`} />
            <img src={image1} alt="a default image" style={{
            maxWidth: '100%',
            height: 'auto'
          }} />
          </picture>
        </PageHeader.HeroImage>
      </Column>
    </Grid>
  </PageHeader.Root>`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <PageHeader.Root>
    <PageHeader.BreadcrumbBar renderIcon={BreadcrumbBeeIcon} pageActions={breadcrumbPageActions}>
      <Breadcrumb>
        <BreadcrumbItem href="/#">Breadcrumb 1</BreadcrumbItem>
        <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      </Breadcrumb>
    </PageHeader.BreadcrumbBar>
    <PageHeader.Content title="Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long" contextualActions={<>
          <Tag className="tag" type="blue" size="lg">
            Tag
          </Tag>
        </>} pageActions={<PageHeader.ContentPageActions menuButtonLabel="Actions" actions={pageActionButtonItems}></PageHeader.ContentPageActions>} {...args}>
      <PageHeader.ContentText subtitle="Subtitle">
        Built for modern teams, our technology platform simplifies complexity
        with powerful APIs, real-time collaboration tools, and seamless
        integration. From deployment to monitoring, we help you ship faster,
        scale efficiently, and stay in control every step of the way.
      </PageHeader.ContentText>
    </PageHeader.Content>
  </PageHeader.Root>`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <Tabs>
    <PageHeader.Root>
      <PageHeader.BreadcrumbBar border={args.border} pageActionsFlush={args.pageActionsFlush} contentActionsFlush={args.contentActionsFlush} renderIcon={args.renderBreadcrumbIcon ? BreadcrumbBeeIcon : null} pageActions={breadcrumbPageActions}>
        <Breadcrumb>
          <BreadcrumbItem href="/#">Breadcrumb 1</BreadcrumbItem>
          <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
        </Breadcrumb>
      </PageHeader.BreadcrumbBar>
      <PageHeader.Content title="Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long" {...args}>
        <PageHeader.ContentText subtitle="Subtitle">
          Built for modern teams, our technology platform simplifies complexity
          with powerful APIs, real-time collaboration tools, and seamless
          integration. From deployment to monitoring, we help you ship faster,
          scale efficiently, and stay in control every step of the way.
        </PageHeader.ContentText>
      </PageHeader.Content>
      <PageHeader.TabBar tags={tags}>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
          <Tab>Tab 4</Tab>
          <Tab>Tab 5</Tab>
          <Tab>Tab 6</Tab>
          <Tab>Tab 7</Tab>
        </TabList>
      </PageHeader.TabBar>
    </PageHeader.Root>
    <TabPanels>
      <TabPanel>Tab Panel 1</TabPanel>
      <TabPanel>Tab Panel 2</TabPanel>
      <TabPanel>Tab Panel 3</TabPanel>
      <TabPanel>Tab Panel 4</TabPanel>
      <TabPanel>Tab Panel 5</TabPanel>
      <TabPanel>Tab Panel 6</TabPanel>
      <TabPanel>Tab Panel 7</TabPanel>
    </TabPanels>
  </Tabs>`,...m.parameters?.docs?.source}}};const Me=["Default","ContentWithIcon","ContentWithContextualActions","ContentWithHeroImage","ContentWithContextualActionsAndPageActions","TabBarWithTabsAndTags"];export{P as ContentWithContextualActions,d as ContentWithContextualActionsAndPageActions,c as ContentWithHeroImage,T as ContentWithIcon,s as Default,m as TabBarWithTabsAndTags,Me as __namedExportsOrder,We as default};
