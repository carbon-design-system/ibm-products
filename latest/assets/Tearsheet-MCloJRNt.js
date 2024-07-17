import{j as l,p,B as i}from"./settings-BiUEFdm2.js";import{R as d}from"./index-BwDkhjyp.js";import{P as e}from"./index-Dk74W0Oi.js";import{g as c}from"./devtools-BPcQvzXy.js";import{a as h}from"./props-helper-1oU9hECe.js";import"./deprecate-D9ms-jbM.js";import{T as m,t as u,p as f}from"./TearsheetShell-BtN3A38u.js";import{A as y}from"./ActionSet-DPSyJhT2.js";const o="Tearsheet";let t=d.forwardRef(({influencerPosition:n="left",influencerWidth:a="narrow",...r},s)=>l.jsx(m,{...c(o),...r,influencerPosition:n,influencerWidth:a,ref:s,size:"wide"}));t=p.checkComponentEnabled(t,o);t.displayName=o;const g={verticalPosition:e.oneOf(["normal","lower"])};t.propTypes={actions:h([y.validateActions(()=>"2xl"),e.arrayOf(e.shape({...i.propTypes,kind:e.oneOf(["ghost","danger--ghost","secondary","danger","primary"]),label:e.string,loading:e.bool,onClick:i.propTypes.onClick}))]),ariaLabel:e.string,className:e.string,closeIconDescription:e.string.isRequired.if(({actions:n,hasCloseIcon:a})=>u(n,a)),description:e.node,hasCloseIcon:e.bool,influencer:e.element,influencerPosition:e.oneOf(["left","right"]),influencerWidth:e.oneOf(["narrow","wide"]),label:e.node,launcherButtonRef:e.any,navigation:e.element,onClose:e.func,open:e.bool,portalTarget:f,selectorPrimaryFocus:e.string,selectorsFloatingMenus:e.arrayOf(e.string),title:e.node,...g};t.__docgenInfo={description:`A tearsheet is a mostly full-screen type of dialog that keeps users
in-context and focused by bringing actionable content front and center while
revealing parts of the UI behind it. There is also a narrow variant of the
tearsheet.

A tearsheet comprises up to 5 zones, allowing for flexibility depending on
the content: a heading area including a title, an optional navigation area
that sits just below the heading, an optional influencer which is a side
panel on either the left or right side, the main content area, and a set of
action buttons.`,methods:[],displayName:"Tearsheet",props:{actions:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonProps"}],raw:"ButtonProps[]"},description:`The navigation actions to be shown as buttons in the action area at the
bottom of the tearsheet. Each action is specified as an object with
optional fields: 'label' to supply the button label, 'kind' to select the
button kind (must be 'primary', 'secondary' or 'ghost'), 'loading' to
display a loading indicator, and 'onClick' to receive notifications when
the button is clicked. Additional fields in the object will be passed to
the Button component, and these can include 'disabled', 'ref', 'className',
and any other Button props, except 'size'. Any other fields in the object will
be passed through to the button element as HTML attributes.

See https://react.carbondesignsystem.com/?path=/docs/components-button--default#component-api`,type:{name:"custom",raw:`allPropTypes([
  /**@ts-ignore */
  ActionSet.validateActions(() => '2xl'),
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
(when this prop is omitted, or undefined or null) a tearsheet does not
display a close icon if there are navigation actions ("transactional
tearsheet") and displays one if there are no navigation actions ("passive
tearsheet"), and that behavior can be overridden if required by setting
this prop to either true or false.`,type:{name:"bool"}},influencer:{required:!1,tsType:{name:"ReactNode"},description:`The content for the influencer section of the tearsheet, displayed
alongside the main content. This is typically a menu, or filter, or
progress indicator, or similar.`,type:{name:"element"}},influencerPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"The position of the influencer section, 'left' or 'right'.",defaultValue:{value:"'left'",computed:!1},type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]}},influencerWidth:{required:!1,tsType:{name:"union",raw:"'narrow' | 'wide'",elements:[{name:"literal",value:"'narrow'"},{name:"literal",value:"'wide'"}]},description:`The width of the influencer: 'narrow' (the default) is 256px, and 'wide'
is 320px.`,defaultValue:{value:"'narrow'",computed:!1},type:{name:"enum",value:[{value:"'narrow'",computed:!1},{value:"'wide'",computed:!1}]}},label:{required:!1,tsType:{name:"ReactNode"},description:`A label for the tearsheet, displayed in the header area of the tearsheet
to maintain context for the tearsheet (e.g. as the title changes from page
to page of a multi-page task).`,type:{name:"node"}},navigation:{required:!1,tsType:{name:"ReactNode"},description:`Navigation content, such as a set of tabs, to be displayed at the bottom
of the header area of the tearsheet.`,type:{name:"element"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"An optional handler that is called when the user closes the tearsheet (by\nclicking the close button, if enabled, or clicking outside, if enabled).\nReturning `false` here prevents the modal from closing.",type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Specifies whether the tearsheet is currently open.",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM element that the tearsheet should be rendered within. Defaults to document.body.",type:{name:"custom",raw:`typeof Element === 'undefined'
? PropTypes.object
: // eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
  PropTypes.instanceOf(Element)`}},selectorPrimaryFocus:{required:!1,tsType:{name:"string"},description:`Specify a CSS selector that matches the DOM element that should be
focused when the Modal opens.`,type:{name:"string"}},selectorsFloatingMenus:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Specify the CSS selectors that match the floating menus.

See https://react.carbondesignsystem.com/?path=/docs/components-composedmodal--overview#focus-management`,type:{name:"arrayOf",value:{name:"string"}}},title:{required:!1,tsType:{name:"ReactNode"},description:"The main title of the tearsheet, displayed in the header area.",type:{name:"node"}},verticalPosition:{required:!1,tsType:{name:"union",raw:"'normal' | 'lower'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'lower'"}]},description:`The position of the top of tearsheet in the viewport. The 'normal'
position is a short distance down from the top of the
viewport, leaving room at the top for a global header bar to show through
from below. The 'lower' position (the default) provides a little extra room at the top
to allow an action bar navigation or breadcrumbs to also show through.`,type:{name:"enum",value:[{value:"'normal'",computed:!1},{value:"'lower'",computed:!1}]}},closeIconDescription:{description:`The accessibility title for the close icon (if shown).

**Note:** This prop is only required if a close icon is shown, i.e. if
there are a no navigation actions and/or hasCloseIcon is true.`,type:{name:"string"},required:!0},launcherButtonRef:{description:"Provide a ref to return focus to once the tearsheet is closed.",type:{name:"any"},required:!1}},composes:["PropsWithChildren"]};export{t as T,g as d};
