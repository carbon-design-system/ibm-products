import{k as o,x as s}from"./iframe-Dq7_sE-R.js";import"./full-page-error-BTUkI9TY.js";import"./breadcrumb-skeleton-UbGg5-Fe.js";import{_ as c}from"./20-3muJ_g4f.js";import{i}from"./icon-loader-DBarA4V3.js";const n="#main-content{padding:1rem 0}.full-page-error-stories__story-container{position:relative;display:grid;block-size:100vh;grid-template-rows:3rem 1fr;inline-size:100vw}.full-page-error-stories__story-breadcrumbs{position:fixed;z-index:8000;display:flex;align-items:center;padding:.75rem 3rem;background:var(--cds-layer-01, #f4f4f4);border-block-end:1px solid var(--cds-border-subtle-01, #c6c6c6);inset-block-start:3rem;inset-inline:0}.full-page-error-stories__story-header{background:var(--cds-background-inverse, #393939)}.full-page-error-stories__story-container c4p-full-page-error{margin-block-start:4rem}:root[data-carbon-theme=white] .full-page-error-stories__story-container cds-header,:root[data-carbon-theme=g10] .full-page-error-stories__story-container cds-header{--cds-text-primary: var(--cds-text-inverse, #ffffff);--cds-text-secondary: var(--cds-text-inverse, #ffffff);--cds-icon-primary: var(--cds-text-inverse, #ffffff);--cds-icon-secondary: var(--cds-text-inverse, #ffffff);background-color:var(--cds-background-inverse, #393939);border-block-end:1px solid var(--cds-border-subtle-01, #c6c6c6)}",t=o(n),l={description:{control:"text",description:"String that will provide the description for the error code. This is optional for 403 and 404 kinds, and passing this would override their default descriptions."},kind:{control:{type:"select"},options:["403","404","custom"],description:"The kind of error page to be displayed, default is custom"},label:{control:"text",description:"String that will describe the error that occurred"},title:{control:"text",description:"This will be for the main title of the FullPageError component"}},r={args:{class:"custom-class",label:"Error ###",title:"[Error title]",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",kind:"custom"},argTypes:l,render:e=>s`
      <style>
        ${t}
      </style>
      <div class="full-page-error-stories__story-container">
        <cds-header aria-label="IBM Product">
          <cds-header-menu-button
            button-label-active="Close menu"
            button-label-inactive="Open menu"
          ></cds-header-menu-button>
          <cds-header-name href="/" prefix="IBM">Product</cds-header-name>
          <div class="cds--header__global">
            <cds-header-global-action
              aria-label="User Avatar"
              tooltip-alignment="end"
            >
              ${i(c,{slot:"icon"})}
            </cds-header-global-action>
          </div>
        </cds-header>

        <c4p-page-header-breadcrumb
          border="true"
          class="full-page-error-stories__story-breadcrumbs"
        >
          <cds-breadcrumb>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 0</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 1</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 2</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 3</cds-breadcrumb-link>
            </cds-breadcrumb-item>
          </cds-breadcrumb>
        </c4p-page-header-breadcrumb>

        <c4p-full-page-error
          label=${e.label}
          class=${e.class}
          title=${e.title}
          description=${e.description}
          kind=${e.kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    `},a={args:{class:"custom-class",title:"Access denied",label:"Error 403",description:"You are not authorized to access the requested page. Please verify that you are logged in to the hosting environment and your access permissions are correct.",kind:"403"},argTypes:l,render:e=>s`
      <style>
        ${t}
      </style>
      <div class="full-page-error-stories__story-container">
        <cds-header aria-label="IBM Product">
          <cds-header-menu-button
            button-label-active="Close menu"
            button-label-inactive="Open menu"
          ></cds-header-menu-button>
          <cds-header-name href="/" prefix="IBM">Product</cds-header-name>
          <div class="cds--header__global">
            <cds-header-global-action
              aria-label="User Avatar"
              tooltip-alignment="end"
            >
              ${i(c,{slot:"icon"})}
            </cds-header-global-action>
          </div>
        </cds-header>

        <c4p-page-header-breadcrumb
          border="true"
          class="full-page-error-stories__story-breadcrumbs"
        >
          <cds-breadcrumb>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 0</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 1</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 2</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 3</cds-breadcrumb-link>
            </cds-breadcrumb-item>
          </cds-breadcrumb>
        </c4p-page-header-breadcrumb>

        <c4p-full-page-error
          label=${e.label}
          class=${e.class}
          title=${e.title}
          description=${e.description}
          kind=${e.kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    `},d={args:{title:"Page not found",label:"Error 404",description:"The page you requested has moved or is unavailable, or the specified URL is not valid. Please check the URL or search the site for the requested content.",kind:"404",class:"custom-class"},argTypes:l,render:e=>s`
      <style>
        ${t}
      </style>
      <div class="full-page-error-stories__story-container">
        <cds-header aria-label="IBM Product">
          <cds-header-menu-button
            button-label-active="Close menu"
            button-label-inactive="Open menu"
          ></cds-header-menu-button>
          <cds-header-name href="/" prefix="IBM">Product</cds-header-name>
          <div class="cds--header__global">
            <cds-header-global-action
              aria-label="User Avatar"
              tooltip-alignment="end"
            >
              ${i(c,{slot:"icon"})}
            </cds-header-global-action>
          </div>
        </cds-header>

        <c4p-page-header-breadcrumb
          border="true"
          class="full-page-error-stories__story-breadcrumbs"
        >
          <cds-breadcrumb>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 0</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 1</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 2</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 3</cds-breadcrumb-link>
            </cds-breadcrumb-item>
          </cds-breadcrumb>
        </c4p-page-header-breadcrumb>

        <c4p-full-page-error
          label=${e.label}
          class=${e.class}
          title=${e.title}
          description=${e.description}
          kind=${e.kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    `},b={title:"Components/FullPageError",component:"c4p-full-page-error"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    class: 'custom-class',
    label: 'Error ###',
    title: '[Error title]',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    kind: 'custom'
  },
  argTypes,
  render: args => {
    return html\`
      <style>
        \${styles}
      </style>
      <div class="full-page-error-stories__story-container">
        <cds-header aria-label="IBM Product">
          <cds-header-menu-button
            button-label-active="Close menu"
            button-label-inactive="Open menu"
          ></cds-header-menu-button>
          <cds-header-name href="/" prefix="IBM">Product</cds-header-name>
          <div class="cds--header__global">
            <cds-header-global-action
              aria-label="User Avatar"
              tooltip-alignment="end"
            >
              \${iconLoader(User20, {
      slot: 'icon'
    })}
            </cds-header-global-action>
          </div>
        </cds-header>

        <c4p-page-header-breadcrumb
          border="true"
          class="full-page-error-stories__story-breadcrumbs"
        >
          <cds-breadcrumb>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 0</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 1</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 2</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 3</cds-breadcrumb-link>
            </cds-breadcrumb-item>
          </cds-breadcrumb>
        </c4p-page-header-breadcrumb>

        <c4p-full-page-error
          label=\${args.label}
          class=\${args.class}
          title=\${args.title}
          description=\${args.description}
          kind=\${args.kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    \`;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    class: 'custom-class',
    title: 'Access denied',
    label: 'Error 403',
    description: 'You are not authorized to access the requested page. Please verify that you are logged in to the hosting environment and your access permissions are correct.',
    kind: '403'
  },
  argTypes,
  render: args => {
    return html\`
      <style>
        \${styles}
      </style>
      <div class="full-page-error-stories__story-container">
        <cds-header aria-label="IBM Product">
          <cds-header-menu-button
            button-label-active="Close menu"
            button-label-inactive="Open menu"
          ></cds-header-menu-button>
          <cds-header-name href="/" prefix="IBM">Product</cds-header-name>
          <div class="cds--header__global">
            <cds-header-global-action
              aria-label="User Avatar"
              tooltip-alignment="end"
            >
              \${iconLoader(User20, {
      slot: 'icon'
    })}
            </cds-header-global-action>
          </div>
        </cds-header>

        <c4p-page-header-breadcrumb
          border="true"
          class="full-page-error-stories__story-breadcrumbs"
        >
          <cds-breadcrumb>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 0</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 1</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 2</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 3</cds-breadcrumb-link>
            </cds-breadcrumb-item>
          </cds-breadcrumb>
        </c4p-page-header-breadcrumb>

        <c4p-full-page-error
          label=\${args.label}
          class=\${args.class}
          title=\${args.title}
          description=\${args.description}
          kind=\${args.kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    \`;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Page not found',
    label: 'Error 404',
    description: 'The page you requested has moved or is unavailable, or the specified URL is not valid. Please check the URL or search the site for the requested content.',
    kind: '404',
    class: 'custom-class'
  },
  argTypes,
  render: args => {
    return html\`
      <style>
        \${styles}
      </style>
      <div class="full-page-error-stories__story-container">
        <cds-header aria-label="IBM Product">
          <cds-header-menu-button
            button-label-active="Close menu"
            button-label-inactive="Open menu"
          ></cds-header-menu-button>
          <cds-header-name href="/" prefix="IBM">Product</cds-header-name>
          <div class="cds--header__global">
            <cds-header-global-action
              aria-label="User Avatar"
              tooltip-alignment="end"
            >
              \${iconLoader(User20, {
      slot: 'icon'
    })}
            </cds-header-global-action>
          </div>
        </cds-header>

        <c4p-page-header-breadcrumb
          border="true"
          class="full-page-error-stories__story-breadcrumbs"
        >
          <cds-breadcrumb>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 0</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 1</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 2</cds-breadcrumb-link>
            </cds-breadcrumb-item>
            <cds-breadcrumb-item>
              <cds-breadcrumb-link href="#">Link 3</cds-breadcrumb-link>
            </cds-breadcrumb-item>
          </cds-breadcrumb>
        </c4p-page-header-breadcrumb>

        <c4p-full-page-error
          label=\${args.label}
          class=\${args.class}
          title=\${args.title}
          description=\${args.description}
          kind=\${args.kind}
        >
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 1</a>
          <br />
          <a class="cds--link cds--link--lg" href="#">– Forwarding link 2</a>
        </c4p-full-page-error>
      </div>
    \`;
  }
}`,...d.parameters?.docs?.source}}};const u=["Default","Error403","Error404"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Error403:a,Error404:d,__namedExportsOrder:u,default:b},Symbol.toStringTag,{value:"Module"}));export{r as D,f as F};
