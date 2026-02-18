import{j as t,M as a,A as e}from"./blocks-DKCR_JXm.js";import{useMDXComponents as s}from"./index-DacHF0DJ.js";import c from"./notification-panel.stories-DOSusGU1.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DCbJu0gS.js";import"./class-map-DdhOA3rD.js";import"./state-9P2czl_k.js";import"./query-D0jTsbLw.js";import"./query-assigned-elements-CblsR2sJ.js";import"./consume-D_JZLJeP.js";import"./button-BTRCBkXO.js";import"./button-skeleton-vSuw4yvD.js";import"./toggle-DW_Ppd2A.js";import"./checkbox-DkrNHzH2.js";import"./16-Bjq4wp4K.js";import"./icon-loader-CszQ8uN0.js";import"./toggle-skeleton-DFnS21y5.js";import"./icon-button-Df03qkzC.js";import"./definition-tooltip-0bKXgr8h.js";import"./popover-content-DPqkAdc6.js";import"./floating-controller-xHgEX7I-.js";import"./documentLang-E105Y72C.js";import"./16-D5maUdCH.js";import"./16-DSuDh1sQ.js";import"./20-DsEWp9Q5.js";import"./getSupportedLocale--Qslfae5.js";import"./16-CVWqvXKz.js";import"./switcher-divider-BElus9RS.js";import"./16-D0aIqdwb.js";import"./collection-helpers-Cnsts1JG.js";import"./20-D_EsaJV1.js";import"./truncated-text-8zEGuzr9.js";import"./style-map-QRWHH31M.js";import"./link-czYkTX-P.js";import"./20-CvqWH37X.js";function o(n){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:c}),`
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
`,t.jsx(e,{of:"c4p-notification-footer"})]})}function F(n={}){const{wrapper:i}={...s(),...n.components};return i?t.jsx(i,{...n,children:t.jsx(o,{...n})}):o(n)}export{F as default};
