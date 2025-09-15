import{j as t,M as a,A as e}from"./blocks-DlYeiFf7.js";import{useMDXComponents as s}from"./index-DSkuZQOY.js";import{N as c}from"./notification-panel.stories-CFB-Ua0v.js";import"./iframe-BiuzA_8Z.js";import"./class-map-DM8nNC8t.js";import"./query-assigned-elements-BuGaVqXj.js";import"./consume-CkB8bcly.js";import"./button-VujQVKIu.js";import"./button-skeleton-CO9LKr4T.js";import"./toggle-3bObg_O_.js";import"./checkbox-CmIZQ4EX.js";import"./form-DCDehIA0.js";import"./icon-loader-DFvU-TXO.js";import"./icon-button-CfeYNbMa.js";import"./definition-tooltip-D0n07nsO.js";import"./documentLang-E105Y72C.js";import"./16-nJySvwbz.js";import"./16-DSflTaDq.js";import"./16-0nG14jWc.js";import"./16-CVWqvXKz.js";import"./heading-C9c3ryz-.js";import"./16-Cp4I51YB.js";import"./collection-helpers-B5OPurRG.js";import"./20-CD9UwiLF.js";function o(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:c}),`
`,t.jsx(i.h1,{id:"notificationpanel",children:"NotificationPanel"}),`
`,t.jsxs(i.blockquote,{children:[`
`,t.jsxs(i.p,{children:[`💡 Check our
`,t.jsx(i.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/notification-panel",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,t.jsx(i.p,{children:t.jsx(i.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/notification-panel",rel:"nofollow",children:t.jsx(i.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,t.jsx(i.p,{children:"The NotificationsPanel sets expectations on the behavior for notifications, allowing the user to view and interact with them all in one place."}),`
`,t.jsxs(i.p,{children:["The component includes a composable footer section, exposed via the footer slot. Adopters can insert custom content into this slot and, if they choose to do so, are expected to provide the appropriate styles. Alternatively, the ",t.jsx(i.code,{children:"c4p-notification-footer"})," component can be used, which comes with built-in styling."]}),`
`,t.jsxs(i.p,{children:["In addition to the footer, the today and previous sections are also exposed as named slots, giving adopters more flexibility to control the content in those areas. These sections are intended to contain ",t.jsx(i.code,{children:"c4p-notification"})," components. Each ",t.jsx(i.code,{children:"c4p-notification"})," supports two named slots: title and description, allowing for further customization of the notification content."]}),`
`,t.jsx(i.h2,{id:"getting-started",children:"Getting started"}),`
`,t.jsx(i.p,{children:"Here's a quick example to get you started."}),`
`,t.jsx(i.h3,{id:"js-via-import",children:"JS (via import)"}),`
`,t.jsx(i.pre,{children:t.jsx(i.code,{className:"language-javascript",children:`import '@carbon/ibm-products-web-components/es/components/notification-panel/index.js';
`})}),`
`,t.jsx(i.h3,{id:"html",children:"HTML"}),`
`,t.jsx(i.pre,{children:t.jsx(i.code,{className:"language-html",children:`<c4p-notification-panel
  .triggerButtonRef=\${triggerButton}
  .open="\${openPanel}"
  title-text="\${args.titleText}"
  today-text="\${args.todayText}"
  previous-text="\${args.previousText}"
  dismiss-all-label="\${args.dismissAllLabel}"
  donot-disturb-label="\${args.doNotDisturbLabel}"
  date-time-locale="\${args.dateTimeLocale}"
  @c4p-notification-dismiss-all=\${dismissAllNotification}
  @c4p-notification-click-outside=\${clickOutside}
>
  \${dataToday.length > 0
    ? html\`
        \${dataToday.map((item) => {
          return html\`
            <c4p-notification
              slot="today"
              .open=\${args.open}
              @c4p-notification-click=\${item.onNotificationClick}
              @c4p-notification-dismiss=\${() => {
                notificationSingleDismiss(item.id, 'today');
              }}
              type=\${item.type}
              unread=\${item.unread}
              .timestamp=\${item.timestamp}
            >
              <cds-heading
                class=\${classMap({
                  [\`\${blockClassNotification}-title\`]: true,
                  [\`\${blockClassNotification}-title-unread\`]:
                    item.unread,
                })}
                slot="title"
              >
                \${item.title}
              </cds-heading>
              <div slot="description">\${item.description}</div>
            </c4p-notification>
          \`;
        })}
      \`
    : ''}
  \${dataPrevious.length > 0
    ? html\`
        \${dataPrevious.map((item) => {
          return html\`
            <c4p-notification
              slot="previous"
              @c4p-notification-click=\${item.onNotificationClick}
              @c4p-notification-dismiss=\${() => {
                notificationSingleDismiss(item.id, 'previous');
              }}
              type=\${item.type}
              unread=\${item.unread}
              .timestamp=\${item.timestamp}
            >
              <cds-heading
                class=\${classMap({
                  [\`\${blockClassNotification}-title\`]: true,
                  [\`\${blockClassNotification}-title-unread\`]:
                    item.unread,
                })}
                slot="title"
              >
                \${item.title}
              </cds-heading>
              <div slot="description">\${item.description}</div>
            </c4p-notification>
          \`;
        })}
      \`
    : ''}
  <c4p-notification-footer
    slot="footer"
    view-all-label="View all (\${dataToday.length + dataPrevious.length})"
    @c4p-notification-view-all=\${action(\`Clicked View All\`)}
    @c4p-notification-settings=\${action(\`Clicked Settings\`)}
  ></c4p-notification-footer>
</c4p-notification-panel>
`})}),`
`,t.jsxs(i.h2,{id:"c4p-notification-panel-attributes-properties-events-and-slots",children:[t.jsx(i.code,{children:"<c4p-notification-panel>"})," attributes, properties, events and slots."]}),`
`,t.jsx(e,{of:"c4p-notification-panel"}),`
`,t.jsxs(i.h2,{id:"c4p-notification-attributes-properties-events-and-slots",children:[t.jsx(i.code,{children:"<c4p-notification>"})," attributes, properties, events and slots."]}),`
`,t.jsx(e,{of:"c4p-notification"}),`
`,t.jsxs(i.h2,{id:"c4p-notification-footer-attributes-properties-events-and-slots",children:[t.jsx(i.code,{children:"<c4p-notification-footer>"})," attributes, properties, events and slots."]}),`
`,t.jsx(e,{of:"c4p-notification-footer"})]})}function D(n={}){const{wrapper:i}={...s(),...n.components};return i?t.jsx(i,{...n,children:t.jsx(o,{...n})}):o(n)}export{D as default};
