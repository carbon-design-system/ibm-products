import{k as O,r as b,x as i,t as $,n as P}from"./iframe-CuUhoocR.js";import{r as l}from"./state-OdRpx7h7.js";import"./modal-label-C4tVJiyp.js";import"./form-item-CmBgfb-h.js";import"./text-input-DFI_2Vql.js";import"./toast-notification-CTKH7y7u.js";import"./checkbox-CIW1K0mG.js";import"./link-B-z08IvB.js";import{_ as B,a as R}from"./16-xraWWrlP.js";import{i as f}from"./icon-loader-D3hNzi-X.js";import"./button-C5okWIzV.js";import"./inline-loading-D9cWEVlQ.js";import{_ as T}from"./16-gUhxGjnI.js";import"./preload-helper-PPVm8Dsz.js";import"./host-listener-DN1-XIwx.js";import"./class-map-CgwZVf9F.js";import"./icon-button-C5dclO95.js";import"./definition-tooltip-yWH_93f1.js";import"./popover-content-DwFRDX3G.js";import"./floating-controller-O5_OP1Uj.js";import"./query-D0jTsbLw.js";import"./button-skeleton-BVd90Jni.js";import"./20-CvqWH37X.js";import"./16-BKf1RCCE.js";import"./validity-CzEiVmrf.js";import"./16-D5maUdCH.js";import"./16-DSuDh1sQ.js";const g=()=>{const e=new Date;let o=e.getHours();const n=e.getMinutes().toString().padStart(2,"0"),s=e.getSeconds().toString().padStart(2,"0"),t=o>=12?"PM":"AM";return o=o%12,o=o||12,`${o}:${n}:${s} ${t}`},j=":host cds-modal-body{padding-bottom:0}.no-bullets{list-style-type:none;padding-inline-start:2rem;margin:0}.notification{position:fixed;right:.75rem;top:.75rem}cds-button cds-inline-loading{position:absolute;inset-block-start:0}.deletion-connected-items cds-modal-body{padding-block-end:1rem}",D=O(j);var z=Object.defineProperty,M=Object.getOwnPropertyDescriptor,C=(e,o,n,s)=>{for(var t=s>1?void 0:s?M(o,n):o,c=e.length-1,a;c>=0;c--)(a=e[c])&&(t=(s?a(o,n,t):a(t))||t);return s&&t&&z(o,n,t),t};let m=class extends b{constructor(){super(...arguments),this._open=!1,this._showNotification=!1,this._textInput="",this._enableDelete=!1}_close(){this._open=!1,this._textInput=""}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_setDeleteButtonState(){this._enableDelete=this._textInput==="Bx1001"}_onInputChange(e){this._textInput=e.target.value,this._setDeleteButtonState()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        Delete
      </cds-button>
      <cds-modal ?open="${this._open}" prevent-close>
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
            caption=${g()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};m.styles=D;C([l()],m.prototype,"_open",2);C([l()],m.prototype,"_showNotification",2);C([l()],m.prototype,"_textInput",2);C([l()],m.prototype,"_enableDelete",2);m=C([$("delete-high-impact")],m);function*S(e,o){if(e!==void 0){let n=0;for(const s of e)yield o(s,n++)}}var H=Object.defineProperty,W=Object.getOwnPropertyDescriptor,h=(e,o,n,s)=>{for(var t=s>1?void 0:s?W(o,n):o,c=e.length-1,a;c>=0;c--)(a=e[c])&&(t=(s?a(o,n,t):a(t))||t);return s&&t&&H(o,n,t),t};let d=class extends b{constructor(){super(...arguments),this._open=!1,this._showNotification=!1,this._textInput="",this._enableDelete=!1,this._isCheckboxChecked=!1,this._connectedItems=[{name:"Route1_name"},{name:"Hpt-392-ser"},{name:"Route2_name"}]}_close(){this._open=!1,this._textInput="",this._isCheckboxChecked=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_setDeleteButtonState(){const e=this._textInput==="Bx1001";this._enableDelete=this._isCheckboxChecked&&e}_onInputChange(e){this._textInput=e.target.value,this._setDeleteButtonState()}_onCheckboxChange(e){this._isCheckboxChecked=e.detail.checked,this._setDeleteButtonState()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        Delete
      </cds-button>
      <cds-modal class="deletion-connected-items" ?open="${this._open}" prevent-close>
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
            ${S(this._connectedItems,e=>i`<li>
                  <cds-link>
                    ${e.name} ${f(B,{slot:"icon"})}
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
            caption=${g()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};d.styles=D;h([l()],d.prototype,"_open",2);h([l()],d.prototype,"_showNotification",2);h([l()],d.prototype,"_textInput",2);h([l()],d.prototype,"_enableDelete",2);h([l()],d.prototype,"_isCheckboxChecked",2);h([l()],d.prototype,"_connectedItems",2);d=h([$("delete-connected-items")],d);var L=Object.defineProperty,A=Object.getOwnPropertyDescriptor,p=(e,o,n,s)=>{for(var t=s>1?void 0:s?A(o,n):o,c=e.length-1,a;c>=0;c--)(a=e[c])&&(t=(s?a(o,n,t):a(t))||t);return s&&t&&L(o,n,t),t};let r=class extends b{constructor(){super(...arguments),this._open=!1,this._showNotification=!1,this._enableDelete=!1,this._isCheckboxChecked=!1,this._batchItems=[{name:"Route1_name"},{name:"Hpt-392-ser"},{name:"Route2_name"}],this._protectedItems=[{name:"Route3_name"},{name:"Route4_name"}]}_close(){this._open=!1,this._isCheckboxChecked=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_setDeleteButtonState(){this._enableDelete=this._isCheckboxChecked}_onCheckboxChange(e){this._isCheckboxChecked=e.detail.checked,this._setDeleteButtonState()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
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
            ${S(this._batchItems,e=>i`<li>
                  <cds-link>
                    ${e.name} ${f(B,{slot:"icon"})}
                  </cds-link>
                </li>`)}
          </ul>
          ${this._protectedItems.length?i`<p>
                Note - the following selected items cannot be deleted:<br />
                ${S(this._protectedItems,(e,o)=>i`<cds-link> ${e.name} ${f(B,{slot:"icon"})} </cds-link>${o<this._protectedItems.length-1?", ":""}`)}
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
            caption=${g()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};r.styles=D;p([l()],r.prototype,"_open",2);p([l()],r.prototype,"_showNotification",2);p([l()],r.prototype,"_enableDelete",2);p([l()],r.prototype,"_isCheckboxChecked",2);p([l()],r.prototype,"_batchItems",2);p([l()],r.prototype,"_protectedItems",2);r=p([$("delete-batch")],r);var E=Object.defineProperty,q=Object.getOwnPropertyDescriptor,I=(e,o,n,s)=>{for(var t=s>1?void 0:s?q(o,n):o,c=e.length-1,a;c>=0;c--)(a=e[c])&&(t=(s?a(o,n,t):a(t))||t);return s&&t&&E(o,n,t),t};let u=class extends b{constructor(){super(...arguments),this._open=!1,this._showNotification=!1}_close(){this._open=!1}_onNotificationClose(){this._showNotification=!1}_onDeleteButtonClick(){this._open=!0,this._onNotificationClose()}_onDelete(e){this._close(),this._showNotification=!0}render(){return i`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        @click="${this._onDeleteButtonClick}"
      >
        ${this.action==="delete"?"Delete":"Remove"}
      </cds-button>
      <cds-modal ?open="${this._open}" prevent-close>
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
            caption=${g()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};u.styles=D;I([P()],u.prototype,"action",2);I([l()],u.prototype,"_open",2);I([l()],u.prototype,"_showNotification",2);u=I([$("delete-remove-medium-impact")],u);var F=Object.defineProperty,G=Object.getOwnPropertyDescriptor,N=(e,o,n,s)=>{for(var t=s>1?void 0:s?G(o,n):o,c=e.length-1,a;c>=0;c--)(a=e[c])&&(t=(s?a(o,n,t):a(t))||t);return s&&t&&F(o,n,t),t};const J=e=>new Promise(o=>setTimeout(o,e));let _=class extends b{constructor(){super(...arguments),this._showNotification=!1,this._loading=!1}_onNotificationClose(){this._showNotification=!1}async _deleteItem(){return await J(1e3),!0}async _onDeleteButtonClick(){this._loading=!0;const e=await this._deleteItem();this._loading=!1,e&&(this._showNotification=!0)}render(){return i`
      <cds-button
        type="button"
        kind="danger"
        size="md"
        ?disabled="${this._loading}"
        @click="${this._onDeleteButtonClick}"
      >
        ${this._loading?i`${this.action==="delete"?"Deleting...":"Removing..."}`:i`${this.action==="delete"?"Delete":"Remove"}`}
        ${this._loading?i`<cds-inline-loading slot="icon"></cds-inline-loading>`:this.action==="delete"?i`${f(T,{slot:"icon"})}`:i`${f(R,{slot:"icon"})}`}
      </cds-button>
      ${this._showNotification?i`<cds-toast-notification
            class="notification"
            kind="success"
            title="Success"
            subtitle="Bx1001 has been successfully ${this.action==="delete"?"deleted":"removed"}."
            caption=${g()}
            low-contrast="true"
            timeout="3000"
            @cds-notification-closed="${this._onNotificationClose}"
          ></cds-toast-notification>`:null}
    `}};_.styles=D;N([P()],_.prototype,"action",2);N([l()],_.prototype,"_showNotification",2);N([l()],_.prototype,"_loading",2);_=N([$("delete-remove-low-impact")],_);const De={title:"Patterns/Delete and remove"},y={render:()=>i`<delete-high-impact></delete-high-impact>`},k={render:()=>i`<delete-connected-items></delete-connected-items>`},v={render:()=>i`<delete-batch></delete-batch>`},w={render:()=>i`<delete-remove-medium-impact
      action="delete"
    ></delete-remove-medium-impact>`},x={render:()=>i`<delete-remove-low-impact
      action="delete"
    ></delete-remove-low-impact>`};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-high-impact></delete-high-impact>\`;
  }
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-connected-items></delete-connected-items>\`;
  }
}`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-batch></delete-batch>\`;
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-remove-medium-impact
      action="delete"
    ></delete-remove-medium-impact>\`;
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return html\`<delete-remove-low-impact
      action="delete"
    ></delete-remove-low-impact>\`;
  }
}`,...x.parameters?.docs?.source}}};const Ce=["highImpactDeletion","deletionWithConnectedItems","batchDeletion","mediumImpactDeletion","lowImpactDeletion"];export{Ce as __namedExportsOrder,v as batchDeletion,De as default,k as deletionWithConnectedItems,y as highImpactDeletion,x as lowImpactDeletion,w as mediumImpactDeletion};
