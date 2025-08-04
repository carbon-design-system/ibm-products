import{el as a,eu as R,em as y,eK as O,e,ef as H,B as s,bp as M}from"./iframe-BixY_nzU.js";import{a as W,b as _,c as V,d as G,e as $,f as X,P as U,R as b,B as u,C as g,g as p,T as E,H as q,h as j,i as K,j as Z,S as J}from"./index-BvOFt3Ko.js";import{B as P,a as l}from"./BreadcrumbItem-xTy3Wxv8.js";import{G as Q}from"./Grid-CAkYyQ0h.js";import{C as I}from"./Column-CZ6X1_dD.js";import{O as Y}from"./index-CCul1fp0.js";import{O as ee}from"./OverflowMenuItem-C7uN44t_.js";import{T as C,c as v,d as r,a as F,b as o}from"./Tabs-NolfYJBV.js";import{T as D}from"./Tag-CbXFe4uz.js";import{useMDXComponents as N}from"./index-DsEZ0qxD.js";import{p as x,B as k,A as ae}from"./bucket-0-tkbzYG9T.js";import{B as z}from"./bucket-1-BHpIhqGK.js";import"./AspectRatio-D_ZsWIjb.js";import"./MenuItem-ZGtCy1zR.js";import"./useControllableState-DC7Ej6kn.js";import"./useAttachedMenu-BRh0V27n.js";import"./Text-B6SqPZCe.js";import"./bucket-2-KtQy-gy7.js";import"./index-BBuXWzuS.js";import"./mergeRefs-91-mP8KM.js";import"./OperationalTag-FQkyKd3P.js";import"./DefinitionTooltip-C5zZShyp.js";import"./PageHeaderUtils-4HXdziwr.js";import"./SkeletonText-R4JdAoTC.js";import"./overflowHandler-6nRVSJRW.js";import"./documentLang-E105Y72C.js";import"./useId-CEgnz6Ws.js";import"./uuidv4-BN2rGLQG.js";import"./useResizeObserver-w6LHWa3u.js";import"./useOverflowItems-CE7M2MOM.js";import"./Link-trOFoxkZ.js";import"./bucket-12-C20f3iiV.js";import"./wrapFocus-Bbgeg0Nx.js";import"./useOutsideClick-BEN9HQgE.js";import"./index-BEhuL1MR.js";import"./useNoInteractiveChildren-lac7L1HY.js";import"./useMatchMedia-sW6roWaA.js";import"./index-KoxcOYkd.js";import"./bucket-18-Cm0L4bq5.js";import"./utils-CYmHZlgn.js";const A=""+new URL("2x1-C5cHyVBO.jpg",import.meta.url).href,ne=""+new URL("3x2-Bu8WS3T_.jpg",import.meta.url).href,te=".page-header-story-wrapper{margin-block-start:3rem}.page-header-story--tall-tab-panel{height:200vh}.page-header--docs-demo .docs-story div:first-child{padding:0}.page-header--docs-demo .innerZoomElementWrapper>*{border:0!important}.page-header--docs-demo .page-header-story--tall-tab-panel{background-color:var(--cds-layer-01, #f4f4f4);block-size:inherit}";function w(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...N(),...t.components};return a.jsxs(a.Fragment,{children:[a.jsx(R,{isTemplate:!0}),`
`,a.jsx(n.h1,{id:"pageheader",children:"PageHeader"}),`
`,a.jsx(n.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,a.jsxs(n.ul,{children:[`
`,a.jsx(n.li,{children:a.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,a.jsx(n.li,{children:a.jsx(n.a,{href:"#pageheaderbreadcrumbbar",children:"PageHeader.BreadcrumbBar"})}),`
`,a.jsxs(n.li,{children:[a.jsx(n.a,{href:"#pageheadercontent",children:"PageHeader.Content"}),`
`,a.jsxs(n.ul,{children:[`
`,a.jsx(n.li,{children:a.jsx(n.a,{href:"#pageheadercontent-with-hero-image",children:"PageHeader.Content with hero image"})}),`
`]}),`
`]}),`
`,a.jsxs(n.li,{children:[a.jsx(n.a,{href:"#pageheadertabsbar",children:"PageHeader.TabsBar"}),`
`,a.jsxs(n.ul,{children:[`
`,a.jsx(n.li,{children:a.jsx(n.a,{href:"#pageheadertabsbar-with-tags",children:"PageHeader.TabsBar with Tags"})}),`
`]}),`
`]}),`
`]}),`
`,a.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,a.jsxs(n.p,{children:["The ",a.jsx(n.code,{children:"PageHeader"})," is a large family of components, composed of three zones; the Breadcrumb, Content, and Tabs."]}),`
`,a.jsx(y,{className:"page-header--docs-demo",of:i}),`
`,a.jsx(n.h2,{id:"pageheaderbreadcrumbbar",children:"PageHeader.BreadcrumbBar"}),`
`,a.jsxs(n.p,{children:["The ",a.jsx(n.code,{children:"PageHeader.BreadcrumbBar"})," component is used to render the breadcrumb navigation area within the ",a.jsx(n.code,{children:"PageHeader"}),`.
It accepts `,a.jsx(n.code,{children:"Breadcrumb"}),", ",a.jsx(n.code,{children:"BreadcrumbItem"}),", and ",a.jsx(n.code,{children:"PageHeader.TitleBreadcrumb"}),` components as children to define the breadcrumb trail. Additionally, it accepts
`,a.jsx(n.code,{children:"contentActions"})," and",a.jsx(n.code,{children:" pageActions"})," props, allowing for actions, such as ",a.jsx(n.code,{children:"Button"})," or ",a.jsx(n.code,{children:"IconButton"}),` — alongside
the breadcrumb content.`]}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`import { Bee, Activity } from '@carbon/icons-react';

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
        <PageHeader.TitleBreadcrumb>Title</PageHeader.TitleBreadcrumb>
      </Breadcrumb>
    </PageHeader.BreadcrumbBar>
    ...
  </PageHeader.Root>
)
`})}),`
`,a.jsx(n.h2,{id:"pageheadercontent",children:"PageHeader.Content"}),`
`,a.jsx(y,{className:"page-header--docs-demo",of:d}),`
`,a.jsxs(n.p,{children:["The ",a.jsx(n.code,{children:"PageHeader.Content"})," component defines the primary content area of the ",a.jsx(n.code,{children:"PageHeader"}),`, including the title, subtitle, and
any supporting text or contextual actions. It accepts a `,a.jsx(n.code,{children:"title"})," prop to display the main heading and can optionally include a ",a.jsx(n.code,{children:"renderIcon"}),` prop
to show an icon adjacent to the title. Child components such as `,a.jsx(n.code,{children:"PageHeader.ContentText"}),` can be used to provide additional descriptive text.
To support use cases such as tags, `,a.jsx(n.code,{children:"contextualActions"}),` can be passed as a prop to render components beside the content.
`,a.jsx(n.code,{children:"pageActions"})," allows integration of action buttons aligned with the content section."]}),`
`,a.jsxs(n.p,{children:["The ",a.jsx(n.code,{children:"PageHeader.ContentPageActions"})," component provides responsive behavior by collapsing actions into a ",a.jsx(n.code,{children:"MenuButton"}),` when the viewport
width is reduced. To enable this functionality, it expects an array of action objects with a specific API shape, as demonstrated below:`]}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`
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
`,a.jsx(n.h3,{id:"pageheadercontent-with-hero-image",children:"PageHeader.Content With Hero Image"}),`
`,a.jsx(y,{className:"page-header--docs-demo",of:c}),`
`,a.jsxs(n.p,{children:["When including a hero image within the ",a.jsx(n.code,{children:"PageHeader"}),", the ",a.jsx(n.code,{children:"Grid"})," and ",a.jsx(n.code,{children:"Column"}),` components will need to be utilized in order
to define the layout correctly.`]}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`import { Grid, Column } from '@carbon/react';

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
`,a.jsx(n.h2,{id:"pageheadertabbar",children:"PageHeader.TabBar"}),`
`,a.jsxs(n.p,{children:["To render the Tabs zone, utilize the ",a.jsx(n.code,{children:"PageHeader.TabBar"})," component, passing in the ",a.jsx(n.code,{children:"TabList"})," and ",a.jsx(n.code,{children:"Tab"}),` components
as its children. Then set up the `,a.jsx(n.code,{children:"TabPanels"})," and ",a.jsx(n.code,{children:"TabPanel"})," components outside of the ",a.jsx(n.code,{children:"PageHeader"}),`, making sure to
wrap all components within the `,a.jsx(n.code,{children:"Tabs"})," component to ensures proper linkage of tab and its associated panel."]}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`<Tabs>
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
`,a.jsx(n.h3,{id:"pageheadertabbar-with-tags",children:"PageHeader.TabBar With Tags"}),`
`,a.jsx(y,{className:"page-header--docs-demo",of:m}),`
`,a.jsxs(n.p,{children:["The ",a.jsx(n.code,{children:"PageHeader.TabsBar"})," component accepts a ",a.jsx(n.code,{children:"tags"}),` prop expecting an array of objects as shown below. When the viewport
width is reduced, these tags automatically collapse into a `,a.jsx(n.code,{children:"Popover"})," for responsive display."]}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`const tags = [
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
`,a.jsx(n.h3,{id:"pageheadertabbar-with-scroller-button",children:"PageHeader.TabBar With scroller button"}),`
`,a.jsxs(n.p,{children:["To include the scroller button to expand and collapse the header, pass ",a.jsx(n.code,{children:"PageHeader.ScrollButton"})," to the ",a.jsx(n.code,{children:"scroller"})," prop of the tab bar."]}),`
`,a.jsx(n.pre,{children:a.jsx(n.code,{className:"language-jsx",children:`<Tabs>
  <PageHeader.Root>
    <PageHeader.TabBar tags={tags} scroller={<PageHeader.ScrollButton />}>
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
`})}),`
`,a.jsx(n.h2,{id:"component-api",children:"Component API"}),`
`,a.jsx(O,{}),`
`,a.jsx(n.h2,{id:"feedback",children:"Feedback"}),`
`,a.jsxs(n.p,{children:[`Help us improve this component by providing feedback, asking questions on Slack,
or updating this file on
`,a.jsx(n.a,{href:"https://github.com/carbon-design-system/carbon/edit/main/packages/react/src/components/PageHeader/PageHeader.mdx",rel:"nofollow",children:"GitHub"}),"."]})]})}function re(t={}){const{wrapper:n}={...N(),...t.components};return n?a.jsx(n,{...t,children:a.jsx(w,{...t})}):w(t)}const oe=[{type:"blue",text:"Tag 1",size:"md"},{type:"purple",text:"Tag 2",size:"md"},{type:"red",text:"Tag 3",size:"md"},{type:"blue",text:"Tag 4",size:"md"},{type:"purple",text:"Tag 5",size:"md"},{type:"red",text:"Tag 6",size:"md"}],qe={title:"Experimental/Patterns/PageHeader",component:U,subcomponents:{PageHeaderBreadcrumbBar:X,PageHeaderContent:$,PageHeaderHeroImage:G,PageHeaderTabBar:V,PageHeaderContentText:_,PageHeaderContentPageActions:W},tags:["autodocs"],argTypes:{children:{control:!1}},parameters:{styles:te,docs:{page:re}},decorators:[t=>e.createElement(e.Fragment,null,e.createElement("style",null,`
          .sb-show-main.sb-main-centered {
            align-items: normal;
          }

          .sb-show-main.sb-main-centered #storybook-root {
            margin: 0;
            padding: 0;
            width: 100%;
          }
        `),e.createElement(t,null))]},le=()=>e.createElement(z,{size:32}),f=()=>e.createElement(z,{size:16}),B=e.createElement(e.Fragment,null,e.createElement(s,{renderIcon:x,iconDescription:"Icon Description 1",hasIconOnly:!0,size:"md",kind:"ghost"}),e.createElement(s,{renderIcon:k,iconDescription:"Icon Description 2",hasIconOnly:!0,size:"md",kind:"ghost"}),e.createElement(s,{renderIcon:M,iconDescription:"Icon Description 3",hasIconOnly:!0,size:"md",kind:"ghost"})),se=e.createElement(e.Fragment,null,e.createElement(s,{size:"md"},"Button")),i=t=>e.createElement(C,null,e.createElement(b,null,e.createElement(u,{border:t.border,pageActionsFlush:t.pageActionsFlush,contentActionsFlush:t.contentActionsFlush,renderIcon:t.renderBreadcrumbIcon?f:null,contentActions:se,pageActions:B},e.createElement(P,null,e.createElement(l,{href:"/#"},"Breadcrumb 1"),e.createElement(l,{href:"#"},"Breadcrumb 2"))),e.createElement(g,{title:t.title},e.createElement(p,{subtitle:"Subtitle"},"Built for modern teams, our technology platform simplifies complexity with powerful APIs, real-time collaboration tools, and seamless integration. From deployment to monitoring, we help you ship faster, scale efficiently, and stay in control every step of the way.")),e.createElement(E,null,e.createElement(v,null,e.createElement(r,null,"Tab 1"),e.createElement(r,null,"Tab 2"),e.createElement(r,null,"Tab 3"),e.createElement(r,null,"Tab 4"),e.createElement(r,null,"Tab 5"),e.createElement(r,null,"Tab 6"),e.createElement(r,null,"Tab 7")))),e.createElement(F,null,e.createElement(o,null,"Tab Panel 1"),e.createElement(o,null,"Tab Panel 2"),e.createElement(o,null,"Tab Panel 3"),e.createElement(o,null,"Tab Panel 4"),e.createElement(o,null,"Tab Panel 5"),e.createElement(o,null,"Tab Panel 6"),e.createElement(o,null,"Tab Panel 7")));i.args={border:!0,pageActionsFlush:!1,contentActionsFlush:!1,title:"Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long",renderBreadcrumbIcon:!0};i.argTypes={border:{description:"Specify whether to render BreadcrumbBar border",control:{type:"boolean"}},pageActionsFlush:{description:"Specify whether the page actions within BreadcrumbBar should be flush",control:{type:"boolean"}},contentActionsFlush:{description:"Specify whether the content actions within BreadcrumbBar should be flush with the page actions",control:{type:"boolean"}},title:{description:"Provide the title text to be rendered within  PageHeaderContent",control:{type:"text"}},renderBreadcrumbIcon:{description:"Specify whether to render the BreadcrumbBar icon (storybook control only)",control:{type:"boolean"}}};const h=t=>e.createElement(b,null,e.createElement(u,{pageActions:B},e.createElement(P,null,e.createElement(l,{href:"/#"},"Breadcrumb 1"),e.createElement(l,{href:"#"},"Breadcrumb 2"))),e.createElement(g,{title:"Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long",renderIcon:le,...t},e.createElement(p,{subtitle:"Subtitle"},"Built for modern teams, our technology platform simplifies complexity with powerful APIs, real-time collaboration tools, and seamless integration. From deployment to monitoring, we help you ship faster, scale efficiently, and stay in control every step of the way."))),T=t=>e.createElement(b,null,e.createElement(u,{renderIcon:f,pageActions:B},e.createElement(P,null,e.createElement(l,{href:"/#"},"Breadcrumb 1"),e.createElement(l,{href:"#"},"Breadcrumb 2"))),e.createElement(g,{title:"Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long",contextualActions:e.createElement(e.Fragment,null,e.createElement(D,{className:"tag",type:"blue",size:"lg"},"Tag")),...t},e.createElement(p,{subtitle:"Subtitle"},"Built for modern teams, our technology platform simplifies complexity with powerful APIs, real-time collaboration tools, and seamless integration. From deployment to monitoring, we help you ship faster, scale efficiently, and stay in control every step of the way."))),c=t=>e.createElement(b,null,e.createElement(Q,null,e.createElement(I,{lg:8,md:4,sm:4},e.createElement(u,{border:!1,renderIcon:f},e.createElement(P,null,e.createElement(l,null,e.createElement("a",{href:"/#"},"Breadcrumb 1")),e.createElement(l,{href:"#"},"Breadcrumb 2"))),e.createElement(g,{title:"Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long",...t},e.createElement(p,{subtitle:"Subtitle"},"Built for modern teams, our technology platform simplifies complexity with powerful APIs, real-time collaboration tools, and seamless integration. From deployment to monitoring, we help you ship faster, scale efficiently, and stay in control every step of the way."))),e.createElement(I,{lg:8,md:4,sm:0},e.createElement(q,null,e.createElement("picture",null,e.createElement("source",{srcset:A,media:`(min-width: ${H.lg.width})`}),e.createElement("source",{srcset:ne,media:`(max-width: ${H.lg.width})`}),e.createElement("img",{src:A,alt:"a default image",style:{maxWidth:"100%",height:"auto"}})))))),L=[{id:"action1",onClick:()=>console.log("Action 1"),body:e.createElement(s,{renderIcon:k,iconDescription:"Icon Description 1",hasIconOnly:!0,size:"md",kind:"ghost"}),menuItem:{label:"action 1"}},{id:"action2",onClick:()=>console.log("Action 2"),body:e.createElement(s,{renderIcon:x,iconDescription:"Icon Description 2",hasIconOnly:!0,size:"md",kind:"ghost"}),menuItem:{label:"action 2"}},{id:"action3",onClick:()=>console.log("Action 3"),body:e.createElement(s,{renderIcon:x,iconDescription:"Icon Description 3",hasIconOnly:!0,size:"md",kind:"ghost"}),menuItem:{label:"action 3"}},{id:"action4",onClick:()=>console.log("Action 4"),body:e.createElement(s,{renderIcon:x,iconDescription:"Icon Description 4",hasIconOnly:!0,size:"md",kind:"ghost"}),menuItem:{label:"action 4"}},{id:"primary-action",onClick:()=>console.log("Primary action"),body:e.createElement(s,{kind:"primary",renderIcon:ae,size:"md"},"Primary action"),menuItem:{label:"Primary action"}}],d=t=>e.createElement(b,null,e.createElement(u,{renderIcon:f,pageActions:B},e.createElement(P,null,e.createElement(l,{href:"/#"},"Breadcrumb 1"),e.createElement(l,{href:"#"},"Breadcrumb 2"))),e.createElement(g,{title:"Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long",contextualActions:e.createElement(e.Fragment,null,e.createElement(D,{className:"tag",type:"blue",size:"lg"},"Tag")),pageActions:e.createElement(j,{menuButtonLabel:"Actions",actions:L}),...t},e.createElement(p,{subtitle:"Subtitle"},"Built for modern teams, our technology platform simplifies complexity with powerful APIs, real-time collaboration tools, and seamless integration. From deployment to monitoring, we help you ship faster, scale efficiently, and stay in control every step of the way."))),m=t=>e.createElement(C,null,e.createElement(b,null,e.createElement(u,{border:t.border,pageActionsFlush:t.pageActionsFlush,contentActionsFlush:t.contentActionsFlush,renderIcon:t.renderBreadcrumbIcon?f:null,pageActions:B,contentActions:e.createElement(j,{menuButtonLabel:"Actions",actions:L})},e.createElement(K,{renderOverflowBreadcrumb:n=>e.createElement(l,{"data-floating-menu-container":!0},e.createElement(Y,{align:"bottom","aria-label":"Overflow menu in a breadcrumb"},n.map(S=>e.createElement(ee,{itemText:S.innerText}))))},e.createElement(l,{href:"/#"},"Breadcrumb 1"),e.createElement(l,{href:"/#"},"Breadcrumb 2"),e.createElement(l,{href:"/#"},"Breadcrumb 3"),e.createElement(Z,{"data-fixed":!0},"Virtual Machine DAL"))),e.createElement(g,{title:"Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long",...t},e.createElement(p,{subtitle:"Subtitle"},"Built for modern teams, our technology platform simplifies complexity with powerful APIs, real-time collaboration tools, and seamless integration. From deployment to monitoring, we help you ship faster, scale efficiently, and stay in control every step of the way.")),e.createElement(E,{tags:oe,scroller:e.createElement(J,null)},e.createElement(v,null,e.createElement(r,null,"Tab 1"),e.createElement(r,null,"Tab 2"),e.createElement(r,null,"Tab 3"),e.createElement(r,null,"Tab 4"),e.createElement(r,null,"Tab 5"),e.createElement(r,null,"Tab 6"),e.createElement(r,null,"Tab 7")))),e.createElement(F,null,e.createElement(o,{className:"page-header-story--tall-tab-panel"},"Tab Panel 1"),e.createElement(o,{className:"page-header-story--tall-tab-panel"},"Tab Panel 2"),e.createElement(o,{className:"page-header-story--tall-tab-panel"},"Tab Panel 3"),e.createElement(o,{className:"page-header-story--tall-tab-panel"},"Tab Panel 4"),e.createElement(o,{className:"page-header-story--tall-tab-panel"},"Tab Panel 5"),e.createElement(o,{className:"page-header-story--tall-tab-panel"},"Tab Panel 6"),e.createElement(o,{className:"page-header-story--tall-tab-panel"},"Tab Panel 7")));i.__docgenInfo={description:"",methods:[],displayName:"Default"};h.__docgenInfo={description:"",methods:[],displayName:"ContentWithIcon"};T.__docgenInfo={description:"",methods:[],displayName:"ContentWithContextualActions"};c.__docgenInfo={description:"",methods:[],displayName:"ContentWithHeroImage"};d.__docgenInfo={description:"",methods:[],displayName:"ContentWithContextualActionsAndPageActions"};m.__docgenInfo={description:"",methods:[],displayName:"TabBarWithTabsAndTags"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <Tabs>
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
  </Tabs>`,...i.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <PageHeader.Root>
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
  </PageHeader.Root>`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <PageHeader.Root>
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
  </PageHeader.Root>`,...T.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <PageHeader.Root>
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
      <PageHeader.BreadcrumbBar border={args.border} pageActionsFlush={args.pageActionsFlush} contentActionsFlush={args.contentActionsFlush} renderIcon={args.renderBreadcrumbIcon ? BreadcrumbBeeIcon : null} pageActions={breadcrumbPageActions} contentActions={<PageHeader.ContentPageActions menuButtonLabel="Actions" actions={pageActionButtonItems} />}>
        <PageHeader.BreadcrumbOverflow renderOverflowBreadcrumb={hiddenItems => <BreadcrumbItem data-floating-menu-container>
              <OverflowMenu align="bottom" aria-label="Overflow menu in a breadcrumb">
                {hiddenItems.map(el => <OverflowMenuItem itemText={el.innerText} />)}
              </OverflowMenu>
            </BreadcrumbItem>}>
          <BreadcrumbItem href="/#">Breadcrumb 1</BreadcrumbItem>
          <BreadcrumbItem href="/#">Breadcrumb 2</BreadcrumbItem>
          <BreadcrumbItem href="/#">Breadcrumb 3</BreadcrumbItem>
          <PageHeader.TitleBreadcrumb data-fixed>
            Virtual Machine DAL
          </PageHeader.TitleBreadcrumb>
        </PageHeader.BreadcrumbOverflow>
      </PageHeader.BreadcrumbBar>
      <PageHeader.Content title="Virtual-Machine-DAL-really-long-title-example-that-goes-at-least-2-lines-long" {...args}>
        <PageHeader.ContentText subtitle="Subtitle">
          Built for modern teams, our technology platform simplifies complexity
          with powerful APIs, real-time collaboration tools, and seamless
          integration. From deployment to monitoring, we help you ship faster,
          scale efficiently, and stay in control every step of the way.
        </PageHeader.ContentText>
      </PageHeader.Content>
      <PageHeader.TabBar tags={tags} scroller={<PageHeader.ScrollButton />}>
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
      <TabPanel className="page-header-story--tall-tab-panel">
        Tab Panel 1
      </TabPanel>
      <TabPanel className="page-header-story--tall-tab-panel">
        Tab Panel 2
      </TabPanel>
      <TabPanel className="page-header-story--tall-tab-panel">
        Tab Panel 3
      </TabPanel>
      <TabPanel className="page-header-story--tall-tab-panel">
        Tab Panel 4
      </TabPanel>
      <TabPanel className="page-header-story--tall-tab-panel">
        Tab Panel 5
      </TabPanel>
      <TabPanel className="page-header-story--tall-tab-panel">
        Tab Panel 6
      </TabPanel>
      <TabPanel className="page-header-story--tall-tab-panel">
        Tab Panel 7
      </TabPanel>
    </TabPanels>
  </Tabs>`,...m.parameters?.docs?.source}}};const Ke=["Default","ContentWithIcon","ContentWithContextualActions","ContentWithHeroImage","ContentWithContextualActionsAndPageActions","TabBarWithTabsAndTags"];export{T as ContentWithContextualActions,d as ContentWithContextualActionsAndPageActions,c as ContentWithHeroImage,h as ContentWithIcon,i as Default,m as TabBarWithTabsAndTags,Ke as __namedExportsOrder,qe as default};
