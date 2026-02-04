import{j as e,M as s}from"./blocks-BzEZOrgq.js";import{useMDXComponents as i}from"./index-BYYhK2HH.js";import{i as d}from"./import-modal.stories-CzKNp7As.js";import"./preload-helper-D9Z9MdNV.js";import"./iframe-CRtCEvHj.js";import"./state-CtNM5jHe.js";import"./class-map-BDBYr7ko.js";import"./modal-label-BL3rRNsf.js";import"./icon-loader-DNTraskY.js";import"./button-BPrzbWFT.js";import"./icon-button-Dm8UBGd3.js";import"./definition-tooltip-BV9MAPtz.js";import"./popover-content-ugB3_2l0.js";import"./query-DAIS6qJ0.js";import"./button-skeleton-Bkfs8A1v.js";import"./text-input-fIvTTJ0p.js";import"./16-DGMTFMdo.js";import"./validity-CUJaV9kI.js";import"./text-input-skeleton-qlfwOlhX.js";import"./file-uploader-item-CAKKkhWL.js";import"./16-D5maUdCH.js";import"./16-0nG14jWc.js";import"./loading-CMI8n8Xs.js";import"./loading-icon-C0xK6mM8.js";import"./ref-_DMAocnm.js";function t(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:d}),`
`,e.jsx(n.h1,{id:"import-modal",children:"Import Modal"}),`
`,e.jsx(n.p,{children:`The import and upload pattern is used for transferring data or objects from an
external source into a system.`}),`
`,e.jsx(n.p,{children:`Patterns have multiple ways of accomplishing a user need and typically use a
combination of components with additional design considerations. The pattern
code we share is meant to serve as an example implementation that can be built
and extended further.`}),`
`,e.jsx(n.p,{children:"To build this pattern, we recommend including the following components:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-modal",rel:"nofollow",children:"cds-modal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-file-uploader",rel:"nofollow",children:"cds-file-uploader"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-text-input",rel:"nofollow",children:"cds-text-input"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://web-components.carbondesignsystem.com/?path=/docs/components-button",rel:"nofollow",children:"cds-button"})}),`
`]}),`
`,e.jsxs(n.p,{children:["These components are used within an ",e.jsx(n.code,{children:"import-modal"}),` wrapper component to handle
state management.`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[`💡 Check our
`,e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/import-modal",rel:"nofollow",children:"Stackblitz"}),`
example implementation.`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://stackblitz.com/github/carbon-design-system/ibm-products/tree/main/packages/ibm-products-web-components/examples/import-modal",rel:"nofollow",children:e.jsx(n.img,{src:"https://developer.stackblitz.com/img/open_in_stackblitz.svg",alt:"Edit carbon-web-components"})})}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting started"}),`
`,e.jsx(n.p,{children:"Here's a quick example to get you started."}),`
`,e.jsx(n.h3,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<cds-modal>
  <cds-modal-header>
    <cds-modal-heading>Import</cds-modal-heading>
  </cds-modal-header>
  <cds-modal-body>
    <cds-modal-body-content description>
      You can specify a file to import by either dragging it into the drag and
      drop area or by specifying a URL. (Maximum file size of 500KB)
    </cds-modal-body-content>
    <cds-file-uploader label-title="Add files using drag and drop">
      <cds-file-uploader-drop-container
        accept="image/png image/jpeg image/gif"
        @cds-file-uploader-drop-container-changed="\${onAddFile}"
      >
        Drag and drop files here or click to upload
      </cds-file-uploader-drop-container>
    </cds-file-uploader>
    <p>Add a file by specifying a URL</p>
    <cds-form-item>
      <cds-text-input
        placeholder="URL"
        label=""
        id="test-id"
        .value="\${this.importUrl}"
        @input="\${inputHandler}"
      ></cds-text-input>
      <cds-button
        .kind="primary"
        size="md"
        .type="Submit"
        @click="\${handleImportFile}"
      >
        Add file
      </cds-button>
    </cds-form-item>
    <div>
      \${hasFiles ? html\`
      <p>\${this.fileStatusString}</p>
      \`: null} \${this.files.map( (file) => html\`
      <cds-file-uploader-item
        name="\${file.name}"
        class="\${classname}"
        size="lg"
        state="\${file.status}"
        icon-description="\${file.iconDescription}"
        ?invalid="\${file.invalid}"
        error-subject="\${file.errorSubject}"
        error-body="\${file.errorBody}"
        uuid="\${file.uuid}"
        @cds-file-uploader-item-deleted="\${onRemoveFile}"
        >\${file.name} </cds-file-uploader-item
      >\` )}
    </div>
  </cds-modal-body>
  <cds-modal-footer>
    <cds-modal-footer-button
      kind="secondary"
      data-modal-close
      @click="\${onCloseHandler}"
    >
      Cancel
    </cds-modal-footer-button>
    <cds-modal-footer-button @click="\${this.submitHandler}">
      Import
    </cds-modal-footer-button>
  </cds-modal-footer>
</cds-modal>
`})})]})}function L(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{L as default};
