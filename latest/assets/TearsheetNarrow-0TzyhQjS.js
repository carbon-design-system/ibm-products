import"./floating-ui.dom.mjs-BB6krl5l.js";import{p as l,B as s}from"./settings-GP6q6PuD.js";import{T as p,t as d,p as c,a as h}from"./TearsheetShell-KCgzDlKY.js";import{R as r}from"./index-BwDkhjyp.js";import{p as m,a as u}from"./props-helper-2sr7eXy7.js";import{P as e}from"./index-Dk74W0Oi.js";import{g as f}from"./devtools-TX7bKGcX.js";import{A as y}from"./ActionSet-D6YJr6NC.js";const a="TearsheetNarrow",g={verticalPosition:"lower"};let t=r.forwardRef(({verticalPosition:o=g.verticalPosition,...n},i)=>r.createElement(p,{...f(a),...m(n,h),verticalPosition:o,ref:i,size:"narrow"}));t=l.checkComponentEnabled(t,a);t.displayName=a;const b={verticalPosition:e.oneOf(["normal","lower"])};t.propTypes={actions:u([y.validateActions(()=>"lg"),e.arrayOf(e.shape({...s.propTypes,kind:e.oneOf(["ghost","danger--ghost","secondary","danger","primary"]),label:e.string,loading:e.bool,onClick:s.propTypes.onClick}))]),ariaLabel:e.string,className:e.string,closeIconDescription:e.string.isRequired.if(({actions:o,hasCloseIcon:n})=>d(o,n)),description:e.node,hasCloseIcon:e.bool,label:e.node,onClose:e.func,open:e.bool,portalTarget:c,selectorPrimaryFocus:e.string,selectorsFloatingMenus:e.arrayOf(e.string),title:e.node,...b};t.__docgenInfo={description:`A narrow tearsheet is a slimmer variant of the tearsheet, providing a dialog
that keeps users in-context and focused by bringing actionable content front
and center while revealing more of the UI behind it.

A narrow tearsheet comprises 3 zones: a heading area including a title, the
main content area, and a set of action buttons.`,methods:[],displayName:"TearsheetNarrow",props:{actions:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps",elements:[{name:"literal",value:"'button'"}],raw:"ButtonProps<'button'>"}],raw:"ButtonProps<'button'>[]"},description:`The navigation actions to be shown as buttons in the action area at the
bottom of the tearsheet. Each action is specified as an object with
optional fields: 'label' to supply the button label, 'kind' to select the
button kind (must be 'primary', 'secondary' or 'ghost'), 'loading' to
display a loading indicator, and 'onClick' to receive notifications when
the button is clicked. Additional fields in the object will be passed to
the Button component, and these can include 'disabled', 'ref', 'className',
and any other Button props. Any other fields in the object will be passed
through to the button element as HTML attributes.

See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api`,type:{name:"custom",raw:`allPropTypes([
  /**@ts-ignore */
  ActionSet.validateActions(() => 'lg'),
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
      onClick: Button.propTypes.onClick,
    })
  ),
])`}},ariaLabel:{required:!1,tsType:{name:"string"},description:`The aria-label for the tearsheet, which is optional.
if it is not passed, the title will be used as the aria-label.`,type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"An optional class or classes to be added to the outermost element.",type:{name:"string"}},description:{required:!1,tsType:{name:"ReactNode"},description:"A description of the flow, displayed in the header area of the tearsheet.",type:{name:"node"}},hasCloseIcon:{required:!1,tsType:{name:"boolean"},description:`Enable a close icon ('x') in the header area of the tearsheet. By default,
a tearsheet does not display a close icon, but one should be enabled if
the tearsheet is read-only or has no navigation actions (sometimes called
a "passive tearsheet").`,type:{name:"bool"}},label:{required:!1,tsType:{name:"ReactNode"},description:`A label for the tearsheet, displayed in the header area of the tearsheet
to maintain context for the tearsheet (e.g. as the title changes from page
to page of a multi-page task).`,type:{name:"node"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:"An optional handler that is called when the user closes the tearsheet (by\nclicking the close button, if enabled, or clicking outside, if enabled).\nReturning `false` here prevents the modal from closing.",type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Specifies whether the tearsheet is currently open.",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM element that the tearsheet should be rendered within. Defaults to document.body.",type:{name:"custom",raw:`typeof Element === 'undefined'
? PropTypes.object
: // eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
  PropTypes.instanceOf(Element)`}},selectorPrimaryFocus:{required:!1,tsType:{name:"string"},description:`Specify a CSS selector that matches the DOM element that should be
focused when the Modal opens.`,type:{name:"string"}},selectorsFloatingMenus:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Specify the CSS selectors that match the floating menus.

See https://react.carbondesignsystem.com/?path=/docs/components-composedmodal--overview#focus-management`,type:{name:"arrayOf",value:{name:"string"}}},title:{required:!1,tsType:{name:"ReactNode"},description:"The main title of the tearsheet, displayed in the header area.",type:{name:"node"}},verticalPosition:{required:!1,tsType:{name:"union",raw:"'normal' | 'lower'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'lower'"}]},description:`**Deprecated**

The position of the top of tearsheet in the viewport. The 'normal'
position is a short distance down from the top of the
viewport, leaving room at the top for a global header bar to show through
from below. The 'lower' position (the default) provides a little extra room at the top
to allow an action bar navigation or breadcrumbs to also show through.`,defaultValue:{value:"'lower'",computed:!1},type:{name:"enum",value:[{value:"'normal'",computed:!1},{value:"'lower'",computed:!1}]}},closeIconDescription:{description:`The accessibility title for the close icon (if shown).

**Note:** This prop is only required if a close icon is shown, i.e. if
there are a no navigation actions and/or hasCloseIcon is true.`,type:{name:"string"},required:!0}},composes:["PropsWithChildren"]};export{t as T,b as d};
