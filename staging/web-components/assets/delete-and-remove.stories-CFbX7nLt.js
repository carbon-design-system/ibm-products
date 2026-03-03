import{k as O,r as f,x as n,w as b,n as S}from"./iframe-qgZfZ3Fa.js";import{r as a}from"./state-DzqCEE-r.js";import"./modal-label-z0YtcfT6.js";import"./form-item-_0hyMHY5.js";import"./text-input-CUHpAHSI.js";import{g as R}from"./16-LKQtd5cM.js";import"./checkbox-G-aVusHH.js";import"./link-CKYvSVct.js";import{_ as P,a as T}from"./16-xraWWrlP.js";import{i as x}from"./icon-loader-CfQrfwoP.js";import"./button-e3i8PJBw.js";import"./preload-helper-PPVm8Dsz.js";import"./class-map-cKCt9_PM.js";import"./inline-loading-BExXjabi.js";import"./16-DSuDh1sQ.js";import"./20-CvqWH37X.js";import"./icon-button-BpveDxeH.js";import"./definition-tooltip-C3O1NSp4.js";import"./popover-content-BPnqwnKl.js";import"./query-D0jTsbLw.js";import"./floating-controller-xHgEX7I-.js";import"./button-skeleton-BKVij690.js";import"./16-BQR5nc35.js";import"./validity-CUJaV9kI.js";import"./16-D5maUdCH.js";const $=()=>{const e=new Date;let o=e.getHours();const i=e.getMinutes().toString().padStart(2,"0"),s=e.getSeconds().toString().padStart(2,"0"),t=o>=12?"PM":"AM";return o=o%12,o=o||12,`${o}:${i}:${s} ${t}`},j=":host cds-modal-body{padding-bottom:0}.no-bullets{margin:0;padding-inline-start:2rem;list-style-type:none}.notification{position:absolute;top:.75rem;right:.75rem}",D=O(j);var z=Object.defineProperty,M=Object.getOwnPropertyDescriptor,C=(e,o,i,s)=>{for(var t=s>1?void 0:s?M(o,i):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,i,t):l(t))||t);return s&&t&&z(o,i,t),t};let m=class extends f{constructor(){super(...arguments),this._open=!1,this._showNotification=!1,this._textInput="",this._enableDelete=!1}_close(){this._open=!1,this._textInput=""}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_setDeleteButtonState(){this._enableDelete=this._textInput==="Bx1001"}_onInputChange(e){this._textInput=e.target.value,this._setDeleteButtonState()}_onDelete(e){this._close(),this._showNotification=!0}render(){return n`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        Delete
      </cds-button>
      <cds-modal size="sm" ?open="${this._open}" prevent-close>
        <cds-modal-header>
          <cds-modal-close-button
            @click="${this._close}"
          ></cds-modal-close-button>
          <cds-modal-label>Delete Bx1001</cds-modal-label>
          <cds-modal-heading>Confirm delete</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <cds-modal-body-content description="">
            Deleting 'Bx1001' will permanently delete the configuration. This
            action cannot be undone.
          </cds-modal-body-content>
          <cds-form-item>
            <cds-text-input
              placeholder="Name of resource"
              label="Type Bx1001 to confirm"
              value="${this._textInput}"
              @input="${this._onInputChange}"
              autocomplete="off"
            >
            </cds-text-input>
          </cds-form-item>
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" @click="${this._close}"
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button
            ?disabled="${!this._enableDelete}"
            kind="danger"
            @click="${this._onDelete}"
            >Delete
          </cds-modal-footer-button>
        </cds-modal-footer>
      </cds-modal>
      ${this._showNotification?n`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Bx1001 has been successfully deleted."
            caption=${$()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};m.styles=D;C([a()],m.prototype,"_open",2);C([a()],m.prototype,"_showNotification",2);C([a()],m.prototype,"_textInput",2);C([a()],m.prototype,"_enableDelete",2);m=C([b("delete-high-impact")],m);function*I(e,o){if(e!==void 0){let i=0;for(const s of e)yield o(s,i++)}}var H=Object.defineProperty,W=Object.getOwnPropertyDescriptor,h=(e,o,i,s)=>{for(var t=s>1?void 0:s?W(o,i):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,i,t):l(t))||t);return s&&t&&H(o,i,t),t};let d=class extends f{constructor(){super(...arguments),this._open=!1,this._showNotification=!1,this._textInput="",this._enableDelete=!1,this._isCheckboxChecked=!1,this._connectedItems=[{name:"Route1_name"},{name:"Hpt-392-ser"},{name:"Route2_name"}]}_close(){this._open=!1,this._textInput="",this._isCheckboxChecked=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_setDeleteButtonState(){const e=this._textInput==="Bx1001";this._enableDelete=this._isCheckboxChecked&&e}_onInputChange(e){this._textInput=e.target.value,this._setDeleteButtonState()}_onCheckboxChange(e){this._isCheckboxChecked=e.detail.checked,this._setDeleteButtonState()}_onDelete(e){this._close(),this._showNotification=!0}render(){return n`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        Delete
      </cds-button>
      <cds-modal size="sm" ?open="${this._open}" prevent-close>
        <cds-modal-header>
          <cds-modal-close-button
            @click="${this._close}"
          ></cds-modal-close-button>
          <cds-modal-label>Delete Bx1001</cds-modal-label>
          <cds-modal-heading>Confirm delete</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <cds-modal-body-content description="">
            When you delete the 'Bx1001', this resource and all connected items
            are permanently deleted. This action cannot be undone.
          </cds-modal-body-content>
          <cds-form-item>
            <cds-text-input
              placeholder="Name of resource"
              label="Type Bx1001 to confirm"
              value="${this._textInput}"
              @input="${this._onInputChange}"
              autocomplete="off"
            >
            </cds-text-input>
          </cds-form-item>
          <cds-modal-label
            >The following connected items will also be deleted. Review each
            item to confirm that they can be deleted.</cds-modal-label
          >

          <cds-checkbox
            ?checked=${this._isCheckboxChecked}
            @cds-checkbox-changed="${this._onCheckboxChange}"
            >${this._connectedItems.length} items:</cds-checkbox
          >

          <ul class="no-bullets">
            ${I(this._connectedItems,e=>n`<li>
                  <cds-link>
                    ${e.name} ${x(P,{slot:"icon"})}
                  </cds-link>
                </li>`)}
          </ul>
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" @click="${this._close}"
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button
            ?disabled="${!this._enableDelete}"
            kind="danger"
            @click="${this._onDelete}"
            >Delete</cds-modal-footer-button
          >
        </cds-modal-footer>
      </cds-modal>
      ${this._showNotification?n`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Bx1001 and all connected items have been successfully deleted."
            caption=${$()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};d.styles=D;h([a()],d.prototype,"_open",2);h([a()],d.prototype,"_showNotification",2);h([a()],d.prototype,"_textInput",2);h([a()],d.prototype,"_enableDelete",2);h([a()],d.prototype,"_isCheckboxChecked",2);h([a()],d.prototype,"_connectedItems",2);d=h([b("delete-connected-items")],d);var L=Object.defineProperty,A=Object.getOwnPropertyDescriptor,p=(e,o,i,s)=>{for(var t=s>1?void 0:s?A(o,i):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,i,t):l(t))||t);return s&&t&&L(o,i,t),t};let r=class extends f{constructor(){super(...arguments),this._open=!1,this._showNotification=!1,this._enableDelete=!1,this._isCheckboxChecked=!1,this._batchItems=[{name:"Route1_name"},{name:"Hpt-392-ser"},{name:"Route2_name"}],this._protectedItems=[{name:"Route3_name"},{name:"Route4_name"}]}_close(){this._open=!1,this._isCheckboxChecked=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_setDeleteButtonState(){this._enableDelete=this._isCheckboxChecked}_onCheckboxChange(e){this._isCheckboxChecked=e.detail.checked,this._setDeleteButtonState()}_onDelete(e){this._close(),this._showNotification=!0}render(){return n`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        Delete all
      </cds-button>
      <cds-modal size="sm" ?open="${this._open}" prevent-close>
        <cds-modal-header>
          <cds-modal-close-button
            @click="${this._close}"
          ></cds-modal-close-button>
          <cds-modal-label>Delete selected items</cds-modal-label>
          <cds-modal-heading>Confirm delete</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <cds-modal-body-content description="">
            Decide if you want to keep these items. Deleting these items is
            permanent. This action cannot be undone.
          </cds-modal-body-content>
          <cds-modal-label
            >The following items will be deleted. Review each item to confirm
            that they can be deleted.</cds-modal-label
          >
          <cds-checkbox
            ?checked=${this._isCheckboxChecked}
            @cds-checkbox-changed="${this._onCheckboxChange}"
            >${this._batchItems.length} items:</cds-checkbox
          >
          <ul class="no-bullets">
            ${I(this._batchItems,e=>n`<li>
                  <cds-link>
                    ${e.name} ${x(P,{slot:"icon"})}
                  </cds-link>
                </li>`)}
          </ul>
          ${this._protectedItems.length?n`<p>
                Note - the following selected items cannot be deleted:
                ${I(this._protectedItems,e=>n`<cds-link> ${e.name}</cds-link>,`)}
              </p>`:null}
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" @click="${this._close}"
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button
            ?disabled="${!this._enableDelete}"
            kind="danger"
            @click="${this._onDelete}"
            >Delete</cds-modal-footer-button
          >
        </cds-modal-footer>
      </cds-modal>
      ${this._showNotification?n`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Selected items have been successfully deleted."
            caption=${$()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};r.styles=D;p([a()],r.prototype,"_open",2);p([a()],r.prototype,"_showNotification",2);p([a()],r.prototype,"_enableDelete",2);p([a()],r.prototype,"_isCheckboxChecked",2);p([a()],r.prototype,"_batchItems",2);p([a()],r.prototype,"_protectedItems",2);r=p([b("delete-batch")],r);var E=Object.defineProperty,q=Object.getOwnPropertyDescriptor,N=(e,o,i,s)=>{for(var t=s>1?void 0:s?q(o,i):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,i,t):l(t))||t);return s&&t&&E(o,i,t),t};let u=class extends f{constructor(){super(...arguments),this._open=!1,this._showNotification=!1}_close(){this._open=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_onDelete(e){this._close(),this._showNotification=!0}render(){return n`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        ${this.action==="delete"?"Delete":"Remove"}
      </cds-button>
      <cds-modal size="sm" ?open="${this._open}" prevent-close>
        <cds-modal-header>
          <cds-modal-close-button
            @click="${this._close}"
          ></cds-modal-close-button>
          <cds-modal-label
            >${this.action==="delete"?"Delete":"Remove"}
            Bx1001</cds-modal-label
          >
          <cds-modal-heading>Confirm ${this.action}</cds-modal-heading>
        </cds-modal-header>
        <cds-modal-body>
          <cds-modal-body-content description="">
            ${this.action==="delete"?"Deleting":"Removing"} 'Bx1001' will
            permanently ${this.action} the configuration.
            ${this.action==="delete"?"This action cannot be undone.":null}
          </cds-modal-body-content>
        </cds-modal-body>
        <cds-modal-footer>
          <cds-modal-footer-button kind="secondary" @click="${this._close}"
            >Cancel</cds-modal-footer-button
          >
          <cds-modal-footer-button kind="danger" @click="${this._onDelete}">
            ${this.action==="delete"?"Delete":"Remove"}
          </cds-modal-footer-button>
        </cds-modal-footer>
      </cds-modal>
      ${this._showNotification?n`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Bx1001 has been successfully ${this.action==="delete"?"deleted":"removed"}."
            caption=${$()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};u.styles=D;N([S()],u.prototype,"action",2);N([a()],u.prototype,"_open",2);N([a()],u.prototype,"_showNotification",2);u=N([b("delete-remove-medium-impact")],u);var F=Object.defineProperty,G=Object.getOwnPropertyDescriptor,B=(e,o,i,s)=>{for(var t=s>1?void 0:s?G(o,i):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,i,t):l(t))||t);return s&&t&&F(o,i,t),t};let _=class extends f{constructor(){super(...arguments),this._showNotification=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._showNotification=!0}render(){return n`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        ${this.action==="delete"?"Delete":"Remove"}
        ${this.action==="delete"?n`${x(R,{slot:"icon"})}`:n`${x(T,{slot:"icon"})}`}
      </cds-button>
      ${this._showNotification?n`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Bx1001 has been successfully ${this.action==="delete"?"deleted":"removed"}."
            caption=${$()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};_.styles=D;B([S()],_.prototype,"action",2);B([a()],_.prototype,"_showNotification",2);_=B([b("delete-remove-low-impact")],_);const be={title:"Patterns/Delete and remove"},g={render:()=>n`<delete-high-impact></delete-high-impact>`},y={render:()=>n`<delete-connected-items></delete-connected-items>`},k={render:()=>n`<delete-batch></delete-batch>`},v={render:()=>n`<delete-remove-medium-impact
      action="delete"
    ></delete-remove-medium-impact>`},w={render:()=>n`<delete-remove-low-impact
      action="delete"
    ></delete-remove-low-impact>`};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-high-impact></delete-high-impact>\`;
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-connected-items></delete-connected-items>\`;
  }
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-batch></delete-batch>\`;
  }
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-remove-medium-impact
      action="delete"
    ></delete-remove-medium-impact>\`;
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-remove-low-impact
      action="delete"
    ></delete-remove-low-impact>\`;
  }
}`,...w.parameters?.docs?.source}}};const $e=["highImpactDeletion","deletionWithConnectedItems","batchDeletion","mediumImpactDeletion","lowImpactDeletion"];export{$e as __namedExportsOrder,k as batchDeletion,be as default,y as deletionWithConnectedItems,g as highImpactDeletion,w as lowImpactDeletion,v as mediumImpactDeletion};
