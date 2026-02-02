import{e as n,P as e,B as a}from"./iframe-BbTYfv9-.js";import{T as h,p as c}from"./TearsheetShell-C8v5h5aU.js";import{a as m}from"./props-helper-fbCn-Z71.js";import{g as f}from"./devtools-KS_k4bKc.js";const o="Tearsheet",t=n.forwardRef((i,r)=>{const{influencerPosition:s="left",influencerWidth:l="narrow",children:p,...d}=i;return n.createElement(h,{...f(o),...d,influencerPosition:s,influencerWidth:l,ref:r,size:"wide"},p)});t.displayName=o;const u={verticalPosition:e.oneOf(["normal","lower"])};t.propTypes={actions:m([e.arrayOf(e.shape({...a.propTypes,kind:e.oneOf(["ghost","danger--ghost","secondary","danger","primary"]),label:e.string,loading:e.bool,onClick:a.propTypes.onClick}))]),ariaLabel:e.string,className:e.string,closeIconDescription:e.string,description:e.node,hasCloseIcon:e.bool,headerActions:e.element,influencer:e.element,influencerPosition:e.oneOf(["left","right"]),influencerWidth:e.oneOf(["narrow","wide"]),label:e.node,launcherButtonRef:e.any,navigation:e.element,onClose:e.func,open:e.bool,portalTarget:c,selectorPrimaryFocus:e.string,selectorsFloatingMenus:e.arrayOf(e.string),title:e.node,...u};t.__docgenInfo={description:`A tearsheet is a mostly full-screen type of dialog that keeps users
in-context and focused by bringing actionable content front and center while
revealing parts of the UI behind it. There is also a narrow variant of the
tearsheet.

A tearsheet comprises up to 5 zones, allowing for flexibility depending on
the content: a heading area including a title, an optional navigation area
that sits just below the heading, an optional influencer which is a side
panel on either the left or right side, the main content area, and a set of
action buttons.`,methods:[],displayName:"Tearsheet",props:{actions:{required:!1,tsType:{name:"Array",elements:[{name:"TearsheetAction"}],raw:"TearsheetAction[]"},description:`The navigation actions to be shown as buttons in the action area at the
bottom of the tearsheet. Each action is specified as an object with
optional fields: 'label' to supply the button label, 'kind' to select the
button kind (must be 'primary', 'secondary' or 'ghost'), 'loading' to
display a loading indicator, and 'onClick' to receive notifications when
the button is clicked. Additional fields in the object will be passed to
the Button component, and these can include 'disabled', 'ref', 'className',
and any other Button props, except 'size'. Any other fields in the object will
be passed through to the button element as HTML attributes.

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
(when this prop is omitted, or undefined or null) a tearsheet does not
display a close icon if there are navigation actions ("transactional
tearsheet") and displays one if there are no navigation actions ("passive
tearsheet"), and that behavior can be overridden if required by setting
this prop to either true or false.`,type:{name:"bool"}},headerActions:{required:!1,tsType:{name:"ReactNode"},description:`The content for the header actions area, displayed alongside the title in
the header area of the tearsheet. This is typically a drop-down, or a set
of small buttons, or similar. NB the headerActions is only applicable for
wide tearsheets.`,type:{name:"element"}},influencer:{required:!1,tsType:{name:"ReactNode"},description:`The content for the influencer section of the tearsheet, displayed
alongside the main content. This is typically a menu, or filter, or
progress indicator, or similar.`,type:{name:"element"}},influencerPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"The position of the influencer section, 'left' or 'right'.",type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]}},influencerWidth:{required:!1,tsType:{name:"union",raw:"'narrow' | 'wide'",elements:[{name:"literal",value:"'narrow'"},{name:"literal",value:"'wide'"}]},description:`The width of the influencer: 'narrow' (the default) is 256px, and 'wide'
is 320px.`,type:{name:"enum",value:[{value:"'narrow'",computed:!1},{value:"'wide'",computed:!1}]}},label:{required:!1,tsType:{name:"ReactNode"},description:`A label for the tearsheet, displayed in the header area of the tearsheet
to maintain context for the tearsheet (e.g. as the title changes from page
to page of a multi-page task).`,type:{name:"node"}},launcherButtonRef:{required:!1,tsType:{name:"RefObject",elements:[{name:"any"}],raw:"RefObject<any>"},description:"Provide a ref to return focus to once the tearsheet is closed.",type:{name:"any"}},navigation:{required:!1,tsType:{name:"ReactNode"},description:`Navigation content, such as a set of tabs, to be displayed at the bottom
of the header area of the tearsheet.`,type:{name:"element"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"An optional handler that is called when the user closes the tearsheet (by\nclicking the close button, if enabled, or clicking outside, if enabled).\nReturning `false` here prevents the modal from closing.",type:{name:"func"}},open:{required:!1,tsType:{name:"boolean"},description:"Specifies whether the tearsheet is currently open.",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"HTMLElement"},description:"The DOM element that the tearsheet should be rendered within. Defaults to document.body.",type:{name:"custom",raw:`typeof Element === 'undefined'
? PropTypes.object
: // eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
  PropTypes.instanceOf(Element)`}},selectorPrimaryFocus:{required:!1,tsType:{name:"string"},description:`Specify a CSS selector that matches the DOM element that should be
focused when the Modal opens.`,type:{name:"string"}},selectorsFloatingMenus:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Specify the CSS selectors that match the floating menus.

See https://react.carbondesignsystem.com/?path=/docs/components-composedmodal--overview#focus-management`,type:{name:"arrayOf",value:{name:"string"}}},title:{required:!1,tsType:{name:"ReactNode"},description:"The main title of the tearsheet, displayed in the header area.",type:{name:"node"}},verticalPosition:{required:!1,tsType:{name:"union",raw:"'normal' | 'lower'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'lower'"}]},description:`The position of the top of tearsheet in the viewport. The 'normal'
position is a short distance down from the top of the
viewport, leaving room at the top for a global header bar to show through
from below. The 'lower' position (the default) provides a little extra room at the top
to allow an action bar navigation or breadcrumbs to also show through.`,type:{name:"enum",value:[{value:"'normal'",computed:!1},{value:"'lower'",computed:!1}]}}},composes:["PropsWithChildren"]};export{t as T,u as d};
//# sourceMappingURL=Tearsheet-CAEV7RlB.js.map
