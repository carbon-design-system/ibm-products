import{k as R,r as C,x as i,t as D,b as N,n as O}from"./iframe-BC5PAVyB.js";import{r as a}from"./state-CoTnyFz4.js";import"./modal-label-CECw6aWl.js";import"./toast-notification-BvzL3twK.js";import"./text-input-D3JfGoZx.js";import"./checkbox-DzUnjDUT.js";import"./link-D6dhQptb.js";import{s as B}from"./spread-DLAZ5juq.js";import"./button-CzM4-yuv.js";const w=()=>{const e=new Date;let o=e.getHours();const n=e.getMinutes().toString().padStart(2,"0"),s=e.getSeconds().toString().padStart(2,"0"),t=o>=12?"PM":"AM";return o=o%12,o=o||12,`${o}:${n}:${s} ${t}`},M=":host cds-modal-body{padding-bottom:0}.no-bullets{list-style-type:none;padding-inline-start:2rem;margin:0}.notification{position:absolute;right:.75rem;top:.75rem}",y=R(M);var z=Object.defineProperty,H=Object.getOwnPropertyDescriptor,x=(e,o,n,s)=>{for(var t=s>1?void 0:s?H(o,n):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,n,t):l(t))||t);return s&&t&&z(o,n,t),t};let h=class extends C{constructor(){super(...arguments),this._open=!1,this._showNotification=!1,this._textInput="",this._enableDelete=!1}_close(){this._open=!1,this._textInput=""}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_setDeleteButtonState(){this._enableDelete=this._textInput==="Bx1001"}_onInputChange(e){this._textInput=e.target.value,this._setDeleteButtonState()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
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
      ${this._showNotification?i`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Bx1001 has been successfully deleted."
            caption=${w()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};h.styles=y;x([a()],h.prototype,"_open",2);x([a()],h.prototype,"_showNotification",2);x([a()],h.prototype,"_textInput",2);x([a()],h.prototype,"_enableDelete",2);h=x([D("delete-high-impact")],h);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*I(e,o){if(e!==void 0){let n=0;for(const s of e)yield o(s,n++)}}const P=({children:e,...o}={})=>N`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${B(o)}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${e}<path d="M13,14H3c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h5v1H3v10h10V8h1v5C14,13.6,13.6,14,13,14z"></path><path d="M10 1L10 2 13.3 2 9 6.3 9.7 7 14 2.7 14 6 15 6 15 1z"></path></svg>`;var j=Object.defineProperty,T=Object.getOwnPropertyDescriptor,m=(e,o,n,s)=>{for(var t=s>1?void 0:s?T(o,n):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,n,t):l(t))||t);return s&&t&&j(o,n,t),t};let d=class extends C{constructor(){super(...arguments),this._open=!1,this._showNotification=!1,this._textInput="",this._enableDelete=!1,this._isCheckboxChecked=!1,this._connectedItems=[{name:"Route1_name"},{name:"Hpt-392-ser"},{name:"Route2_name"}]}_close(){this._open=!1,this._textInput="",this._isCheckboxChecked=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_setDeleteButtonState(){const e=this._textInput==="Bx1001";this._enableDelete=this._isCheckboxChecked&&e}_onInputChange(e){this._textInput=e.target.value,this._setDeleteButtonState()}_onCheckboxChange(e){this._isCheckboxChecked=e.detail.checked,this._setDeleteButtonState()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
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
            ${I(this._connectedItems,e=>i`<li>
                  <cds-link>
                    ${e.name} ${P({slot:"icon"})}
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
      ${this._showNotification?i`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Bx1001 and all connected items have been successfully deleted."
            caption=${w()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};d.styles=y;m([a()],d.prototype,"_open",2);m([a()],d.prototype,"_showNotification",2);m([a()],d.prototype,"_textInput",2);m([a()],d.prototype,"_enableDelete",2);m([a()],d.prototype,"_isCheckboxChecked",2);m([a()],d.prototype,"_connectedItems",2);d=m([D("delete-connected-items")],d);var V=Object.defineProperty,A=Object.getOwnPropertyDescriptor,u=(e,o,n,s)=>{for(var t=s>1?void 0:s?A(o,n):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,n,t):l(t))||t);return s&&t&&V(o,n,t),t};let r=class extends C{constructor(){super(...arguments),this._open=!1,this._showNotification=!1,this._enableDelete=!1,this._isCheckboxChecked=!1,this._batchItems=[{name:"Route1_name"},{name:"Hpt-392-ser"},{name:"Route2_name"}],this._protectedItems=[{name:"Route3_name"},{name:"Route4_name"}]}_close(){this._open=!1,this._isCheckboxChecked=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_setDeleteButtonState(){this._enableDelete=this._isCheckboxChecked}_onCheckboxChange(e){this._isCheckboxChecked=e.detail.checked,this._setDeleteButtonState()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
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
            ${I(this._batchItems,e=>i`<li>
                  <cds-link>
                    ${e.name} ${P({slot:"icon"})}
                  </cds-link>
                </li>`)}
          </ul>
          ${this._protectedItems.length?i`<p>
                Note - the following selected items cannot be deleted:
                ${I(this._protectedItems,e=>i`<cds-link> ${e.name}</cds-link>,`)}
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
      ${this._showNotification?i`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Selected items have been successfully deleted."
            caption=${w()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};r.styles=y;u([a()],r.prototype,"_open",2);u([a()],r.prototype,"_showNotification",2);u([a()],r.prototype,"_enableDelete",2);u([a()],r.prototype,"_isCheckboxChecked",2);u([a()],r.prototype,"_batchItems",2);u([a()],r.prototype,"_protectedItems",2);r=u([D("delete-batch")],r);var W=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,k=(e,o,n,s)=>{for(var t=s>1?void 0:s?Y(o,n):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,n,t):l(t))||t);return s&&t&&W(o,n,t),t};let p=class extends C{constructor(){super(...arguments),this._open=!1,this._showNotification=!1}_close(){this._open=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
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
      ${this._showNotification?i`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Bx1001 has been successfully ${this.action==="delete"?"deleted":"removed"}."
            caption=${w()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};p.styles=y;k([O()],p.prototype,"action",2);k([a()],p.prototype,"_open",2);k([a()],p.prototype,"_showNotification",2);p=k([D("delete-remove-medium-impact")],p);const L=({children:e,...o}={})=>N`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${B(o)}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${e}<path d="M12 12H14V24H12zM18 12H20V24H18z"></path><path d="M4 6V8H6V28a2 2 0 002 2H24a2 2 0 002-2V8h2V6zM8 28V8H24V28zM12 2H20V4H12z"></path></svg>`,E=({children:e,...o}={})=>N`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${B(o)}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${e}<path d="M16,4c6.6,0,12,5.4,12,12s-5.4,12-12,12S4,22.6,4,16S9.4,4,16,4 M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14	S23.7,2,16,2z"></path><path d="M8 15H24V17H8z"></path></svg>`;var q=Object.defineProperty,F=Object.getOwnPropertyDescriptor,S=(e,o,n,s)=>{for(var t=s>1?void 0:s?F(o,n):o,c=e.length-1,l;c>=0;c--)(l=e[c])&&(t=(s?l(o,n,t):l(t))||t);return s&&t&&q(o,n,t),t};let v=class extends C{constructor(){super(...arguments),this._showNotification=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._showNotification=!0}render(){return i`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        ${this.action==="delete"?"Delete":"Remove"}
        ${this.action==="delete"?i`${L({slot:"icon"})}`:i`${E({slot:"icon"})}`}
      </cds-button>
      ${this._showNotification?i`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Bx1001 has been successfully ${this.action==="delete"?"deleted":"removed"}."
            caption=${w()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};v.styles=y;S([O()],v.prototype,"action",2);S([a()],v.prototype,"_showNotification",2);v=S([D("delete-remove-low-impact")],v);/**
 * @license
 *
 * Copyright IBM Corp. 2025, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const G={title:"Patterns/Delete and remove"},_={render:()=>i`<delete-high-impact></delete-high-impact>`},f={render:()=>i`<delete-connected-items></delete-connected-items>`},b={render:()=>i`<delete-batch></delete-batch>`},$={render:()=>i`<delete-remove-medium-impact
      action="delete"
    ></delete-remove-medium-impact>`},g={render:()=>i`<delete-remove-low-impact
      action="delete"
    ></delete-remove-low-impact>`};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-high-impact></delete-high-impact>\`;
  }
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-connected-items></delete-connected-items>\`;
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-batch></delete-batch>\`;
  }
}`,...b.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-remove-medium-impact
      action="delete"
    ></delete-remove-medium-impact>\`;
  }
}`,...$.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-remove-low-impact
      action="delete"
    ></delete-remove-low-impact>\`;
  }
}`,...g.parameters?.docs?.source}}};const J=["highImpactDeletion","deletionWithConnectedItems","batchDeletion","mediumImpactDeletion","lowImpactDeletion"],ne=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:J,batchDeletion:b,default:G,deletionWithConnectedItems:f,highImpactDeletion:_,lowImpactDeletion:g,mediumImpactDeletion:$},Symbol.toStringTag,{value:"Module"}));export{ne as D};
