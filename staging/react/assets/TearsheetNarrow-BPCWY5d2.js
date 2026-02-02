import{e as o,P as e,B as n}from"./iframe-BbTYfv9-.js";import{T as l,t as p,p as d}from"./TearsheetShell-C8v5h5aU.js";import{p as c,a as h}from"./props-helper-fbCn-Z71.js";import{g as m}from"./devtools-KS_k4bKc.js";const a="TearsheetNarrow",u={verticalPosition:"lower"},t=o.forwardRef(({verticalPosition:s=u.verticalPosition,...r},i)=>o.createElement(l,{...m(a),...c(r,p),verticalPosition:s,ref:i,size:"narrow"}));t.displayName=a;const f={verticalPosition:e.oneOf(["normal","lower"])};t.propTypes={actions:h([e.arrayOf(e.shape({...n.propTypes,kind:e.oneOf(["ghost","danger--ghost","secondary","danger","primary"]),label:e.string,loading:e.bool,onClick:n.propTypes.onClick}))]),ariaLabel:e.string,className:e.string,closeIconDescription:e.string,description:e.node,hasCloseIcon:e.bool,label:e.node,onClose:e.func,open:e.bool,portalTarget:d,selectorPrimaryFocus:e.string,selectorsFloatingMenus:e.arrayOf(e.string),title:e.node,...f};t.__docgenInfo={description:`A narrow tearsheet is a slimmer variant of the tearsheet, providing a dialog
that keeps users in-context and focused by bringing actionable content front
and center while revealing more of the UI behind it.

A narrow tearsheet comprises 3 zones: a heading area including a title, the
main content area, and a set of action buttons.`,methods:[],displayName:"TearsheetNarrow",props:{actions:{required:!1,tsType:{name:"Array",elements:[{name:"TearsheetAction"}],raw:"TearsheetAction[]"},description:`The navigation actions to be shown as buttons in the action area at the
bottom of the tearsheet. Each action is specified as an object with
optional fields: 'label' to supply the button label, 'kind' to select the
button kind (must be 'primary', 'secondary' or 'ghost'), 'loading' to
display a loading indicator, and 'onClick' to receive notifications when
the button is clicked. Additional fields in the object will be passed to
the Button component, and these can include 'disabled', 'ref', 'className',
and any other Button props. Any other fields in the object will be passed
through to the button element as HTML attributes.

See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api`,type:{name:"custom",raw:`allPropTypes([
  PropTypes.arrayOf(
    PropTypes.shape({
      ...Button.propTypes,
      kind: PropTypes.oneOf([
        'ghost',
        'danger--ghost',
        'secondary',
        'danger',
        'primary',
      ]),
      label: PropTypes.string,
      loading: PropTypes.bool,
      // we duplicate this Button prop to improve the DocGen here
      /**@ts-ignore*/
      onClick: Button.propTypes.onClick,
    })
  ),
])`}},ariaLabel:{required:!1,tsType:{name:"string"},description:`The aria-label for the tearsheet, which is optional.
if it is not passed, the title will be used as the aria-label.`,type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"An optional class or classes to be added to the outermost element.",type:{name:"string"}},closeIconDescription:{required:!1,tsType:{name:"string"},description:"The accessibility title for the close icon (if shown).",type:{name:"string"}},description:{required:!1,tsType:{name:"ReactNode"},description:"A description of the flow, displayed in the header area of the tearsheet.",type:{name:"node"}},hasCloseIcon:{required:!1,tsType:{name:"boolean"},description:`Enable a close icon ('x') in the header area of the tearsheet. By default,
a tearsheet does not display a close icon, but one should be enabled if
the tearsheet is read-only or has no navigation actions (sometimes called
a "passive tearsheet").`,type:{name:"bool"}},label:{required:!1,tsType:{name:"ReactNode"},description:`A label for the tearsheet, displayed in the header area of the tearsheet
to maintain context for the tearsheet (e.g. as the title changes from page
to page of a multi-page task).`,type:{name:"node"}},launcherButtonRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"any"}],raw:"RefObject<any>"},description:"Provide a ref to return focus to once the tearsheet is closed."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:"An optional handler that is called when the user closes the tearsheet (by\nclicking the close button, if enabled, or clicking outside, if enabled).\nReturning `false` here prevents the modal from closing.",type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Specifies whether the tearsheet is currently open.",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"HTMLElement"},description:"The DOM element that the tearsheet should be rendered within. Defaults to document.body.",type:{name:"custom",raw:`typeof Element === 'undefined'
? PropTypes.object
: // eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
  PropTypes.instanceOf(Element)`}},selectorPrimaryFocus:{required:!1,tsType:{name:"string"},description:`Specify a CSS selector that matches the DOM element that should be
focused when the Modal opens.`,type:{name:"string"}},selectorsFloatingMenus:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Specify the CSS selectors that match the floating menus.

See https://react.carbondesignsystem.com/?path=/docs/components-composedmodal--overview#focus-management`,type:{name:"arrayOf",value:{name:"string"}}},title:{required:!1,tsType:{name:"ReactNode"},description:"The main title of the tearsheet, displayed in the header area.",type:{name:"node"}},verticalPosition:{required:!1,tsType:{name:"union",raw:"'normal' | 'lower'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'lower'"}]},description:`**Deprecated**

The position of the top of tearsheet in the viewport. The 'normal'
position is a short distance down from the top of the
viewport, leaving room at the top for a global header bar to show through
from below. The 'lower' position (the default) provides a little extra room at the top
to allow an action bar navigation or breadcrumbs to also show through.`,defaultValue:{value:"'lower'",computed:!1},type:{name:"enum",value:[{value:"'normal'",computed:!1},{value:"'lower'",computed:!1}]}}},composes:["PropsWithChildren"]};export{t as T,f as d};
//# sourceMappingURL=TearsheetNarrow-BPCWY5d2.js.map
