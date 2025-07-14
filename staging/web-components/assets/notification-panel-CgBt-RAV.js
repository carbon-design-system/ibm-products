import{j as t,M as a,A as e}from"./blocks-CVOgYUJj.js";import{useMDXComponents as s}from"./index-BacXuSJQ.js";import{N as c}from"./notification-panel.stories-BiNwMY5_.js";import"./iframe-DLZU8VBi.js";import"./class-map-zub5iHIG.js";import"./state-jMtNTW3R.js";import"./query-assigned-elements-DOKmR813.js";import"./button-D60qw4xD.js";import"./button-skeleton-Bn2ncU8f.js";import"./toggle-i8uLfWMC.js";import"./checkbox-C41RSMhV.js";import"./form-DpRk9AkJ.js";import"./spread-kbOCG5_1.js";import"./icon-button-ChL3HHu7.js";import"./definition-tooltip-Dq6FJzeX.js";import"./documentLang-E105Y72C.js";import"./16-B1WluwUI.js";import"./16-D0XHms4t.js";import"./16-CBkOH41j.js";import"./switcher-item-a1rwwgci.js";import"./16-BMgxiHyS.js";import"./collection-helpers-Do_VULfa.js";import"./20-BGJWZAxo.js";import"./20-DAms_bxU.js";function o(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:c}),`
`,t.jsx(i.h1,{id:"notificationpanel",children:"NotificationPanel"}),`
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
`,t.jsx(e,{of:"c4p-notification-footer"})]})}function L(n={}){const{wrapper:i}={...s(),...n.components};return i?t.jsx(i,{...n,children:t.jsx(o,{...n})}):o(n)}export{L as default};
